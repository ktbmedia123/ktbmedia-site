import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const domain = 'https://ktbmedia.eu';
const lastmod = new Date().toISOString().slice(0, 10);

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
  return match[1];
}

const urls = [...new Set(walk(root).map(canonicalFrom).filter(Boolean))].sort();
const groups = {
  pages: urls.filter((url) => !url.includes('/blog/') && !url.includes('/realizacje/')),
  blog: urls.filter((url) => url.includes('/blog/')),
  realizacje: urls.filter((url) => url.includes('/realizacje/'))
};

const urlset = (items) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;

for (const [name, items] of Object.entries(groups)) {
  fs.writeFileSync(path.join(root, `sitemap-${name}.xml`), urlset(items));
}

const sitemapNames = Object.keys(groups);
const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNames.map((name) => `  <sitemap>\n    <loc>${domain}/sitemap-${name}.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>
`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), index);
console.log(`Sitemap index: ${urls.length} adresów (${Object.entries(groups).map(([key, value]) => `${key}: ${value.length}`).join(', ')})`);
