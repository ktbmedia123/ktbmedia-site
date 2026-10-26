import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageFingerprint } from './page-fingerprint.mjs';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = process.argv[2] ? path.resolve(process.argv[2]) : project;
const domain = 'https://ktbmedia.eu';
const historyFile = path.join(project, 'seo/page-history.json');
const history = fs.existsSync(historyFile) ? JSON.parse(fs.readFileSync(historyFile, 'utf8')) : {};
const recordChanges = process.argv.includes('--record-changes');
const today = new Intl.DateTimeFormat('en-CA', {timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date());
const modified = {};

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return entry.name === '.git' ? [] : walk(target);
    return entry.name === 'index.html' ? [target] : [];
  });
}

function canonicalFrom(file) {
  const html = fs.readFileSync(file, 'utf8');
  if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)) return null;
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (!match || !match[1].startsWith(`${domain}/`)) return null;
  const key = match[1].slice(domain.length);
  const fingerprint = pageFingerprint(html);
  if (recordChanges && history[key]?.fingerprint !== fingerprint) history[key] = {fingerprint, lastmod: today};
  // CMS-only deployments may introduce an unrecorded version. Omitting the
  // optional date is more honest than manufacturing a fresh date on every build.
  if (history[key]?.fingerprint === fingerprint && /^\d{4}-\d{2}-\d{2}$/.test(history[key].lastmod)) modified[match[1]] = history[key].lastmod;
  return match[1];
}

const urls = [...new Set(walk(root).map(canonicalFrom).filter(Boolean))].sort();
if (recordChanges) {
  fs.mkdirSync(path.dirname(historyFile), {recursive: true});
  fs.writeFileSync(historyFile, JSON.stringify(Object.fromEntries(Object.entries(history).sort(([a], [b]) => a.localeCompare(b))), null, 2) + '\n');
}
const groups = {
  pages: urls.filter((url) => !url.includes('/blog/') && !url.includes('/realizacje/')),
  blog: urls.filter((url) => url.includes('/blog/')),
  realizacje: urls.filter((url) => url.includes('/realizacje/'))
};

const urlset = (items) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.map((url) => `  <url>\n    <loc>${url}</loc>${modified[url] ? `\n    <lastmod>${modified[url]}</lastmod>` : ''}\n  </url>`).join('\n')}
</urlset>
`;

for (const [name, items] of Object.entries(groups)) {
  fs.writeFileSync(path.join(root, `sitemap-${name}.xml`), urlset(items));
}

const sitemapNames = Object.keys(groups);
const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNames.map((name) => `  <sitemap>\n    <loc>${domain}/sitemap-${name}.xml</loc>${groups[name].length && groups[name].every(url => modified[url]) ? `\n    <lastmod>${groups[name].map(url => modified[url]).sort().at(-1)}</lastmod>` : ''}\n  </sitemap>`).join('\n')}
</sitemapindex>
`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), index);
console.log(`Sitemap index: ${urls.length} adresów (${Object.entries(groups).map(([key, value]) => `${key}: ${value.length}`).join(', ')})`);
