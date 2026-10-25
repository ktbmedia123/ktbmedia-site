import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const data = JSON.parse(fs.readFileSync(path.join(root, 'content/site.json'), 'utf8'));
const config = data.visibility || {};
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const digital = vm.runInNewContext(app.slice(app.indexOf('const DIGITAL_CASES = ') + 22, app.indexOf('\nfunction portfolioGroupEnabled')).replace(/;\s*$/, ''));
const entries = config.items || [];
if (new Set(entries.map(item => item.slug)).size !== entries.length) throw new Error('Powtórzony slug widoczności');
if (entries.some(item => typeof item.visible !== 'boolean')) throw new Error('Widoczność musi być wartością boolean');
const isVisible = (slug, group) => config[group] !== false && entries.find(item => item.slug === slug)?.visible !== false;
const cases = [...new Map(['pl', 'en'].flatMap(lang => (data[lang]?.portfolio?.items || []).map(item => [item.slug, { ...item, group: 'marketing' }]))).values(), ...digital];
if (cases.some(item => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug))) throw new Error('Nieprawidłowy slug realizacji');
const hidden = cases.filter(item => !isVisible(item.slug, item.group));
const hiddenPaths = hidden.map(item => `/realizacje/${item.group === 'marketing' ? '' : 'digital/'}${item.slug}/`);
const hiddenLinks = [...hiddenPaths, ...hidden.map(item => item.externalUrl).filter(Boolean)];
const isHiddenUrl = value => typeof value === 'string' && hiddenLinks.some(url => value.replace(/\/$/, '') === url.replace(/\/$/, '') || value.replace('https://ktbmedia.eu', '').replace(/\/$/, '') === url.replace(/\/$/, ''));
const cleanSchema = value => {
  if (Array.isArray(value)) return value.filter(item => !isHiddenUrl(item?.url) && !isHiddenUrl(item?.item) && !isHiddenUrl(item?.item?.url)).map(cleanSchema).map((item, i) => item && typeof item === 'object' && 'position' in item ? { ...item, position: i + 1 } : item);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, cleanSchema(v)]));
  return value;
};

// Synchronize the fallback with the CMS before copying the public files.
fs.writeFileSync(path.join(root, 'content.js'), `const COPY = ${JSON.stringify({ pl: data.pl, en: data.en }, null, 2)};\nwindow.COPY = COPY;\nwindow.KTB_VISIBILITY = ${JSON.stringify(config, null, 2)};\n`);
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);
const excluded = new Set(['dist', 'prototypes', 'output', '.git', '.gitignore', 'node_modules', 'docs', 'scripts', 'AGENTS.md', 'CHANGES.md', 'README.md']);
for (const entry of fs.readdirSync(root)) {
  if (excluded.has(entry) || entry.startsWith('.')) continue;
  fs.cpSync(path.join(root, entry), path.join(dist, entry), { recursive: true });
}
for (const url of hiddenPaths) fs.rmSync(path.join(dist, url), { recursive: true, force: true });
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(file); continue; }
    if (!file.endsWith('.html')) continue;
    let html = fs.readFileSync(file, 'utf8');
    if (!path.relative(dist, file).startsWith('admin' + path.sep) && !html.includes('/analytics.js')) {
      html = html.replace('</head>', '  <script src="/analytics.js?v=20261025-cookies" defer></script>\n</head>');
    }
    html = html.replace(/<li\b[^>]*>[\s\S]*?<\/li>/gi, block => hiddenLinks.some(url => block.includes(`href="${url}"`) || block.includes(`href="${url.replace(/\/$/, '')}"`)) ? '' : block);
    html = html.replace(/<section>\s*<h2>[^<]*<\/h2>\s*<ul>\s*<\/ul>\s*<\/section>/gi, '');
    html = html.replace(/(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi, (_, open, json, close) => `${open}\n${JSON.stringify(cleanSchema(JSON.parse(json)), null, 2)}\n${close}`);
    fs.writeFileSync(file, html);
  }
}
walk(dist);
const llms = path.join(dist, 'llms.txt');
fs.writeFileSync(llms, fs.readFileSync(llms, 'utf8').split('\n').filter(line => !hiddenLinks.some(url => line.includes(url))).join('\n'));
// Force a real HTTP 404 even when a legacy redirect or SPA fallback matches.
const redirects = path.join(dist, '_redirects');
fs.writeFileSync(redirects, hiddenPaths.flatMap(url => [`${url} /404.html 404!`, `${url.slice(0, -1)} /404.html 404!`, `${url}* /404.html 404!`]).join('\n') + '\n' + fs.readFileSync(redirects, 'utf8'));
execFileSync(process.execPath, [path.join(root, 'scripts/generate-sitemaps.mjs'), dist], { stdio: 'inherit' });
console.log(`Build OK: ${cases.length - hidden.length} widocznych realizacji, ${hidden.length} ukrytych. Wynik: dist/`);
