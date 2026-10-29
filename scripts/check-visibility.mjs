import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'content/site.json');
const original = fs.readFileSync(source, 'utf8');
const data = JSON.parse(original);
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const functions = app.slice(app.indexOf('const DIGITAL_CASES = '), app.indexOf('const DIGITAL_SEO = '));
function runtime(config) {
  const context = { window: { KTB_VISIBILITY: config }, COPY: data };
  vm.createContext(context); vm.runInContext(functions, context); return context;
}
const run = ctx => vm.runInContext("({pl:getMarketingCases('pl').map(x=>x.slug),en:getMarketingCases('en').map(x=>x.slug),apps:getDigitalCases('pl').filter(x=>x.group==='apps').map(x=>x.slug)})", ctx);
const active = run(runtime(data.visibility));
assert(!active.pl.includes('bigmot')); assert(!active.en.includes('bigmot')); assert(!active.apps.includes('mojteam'));
assert(active.apps.includes('ktbtask'));
const marketingSlugs = new Set(data.pl.portfolio.items.map(item => item.slug));
const hiddenEntries = (data.visibility.items || []).filter(item => item.visible === false);
const hiddenRoutes = hiddenEntries.map(item => `realizacje/${marketingSlugs.has(item.slug) ? '' : 'digital/'}${item.slug}`);
for (const item of hiddenEntries.filter(item => marketingSlugs.has(item.slug))) { assert(!active.pl.includes(item.slug)); assert(!active.en.includes(item.slug)); }
const enabled = structuredClone(data.visibility); enabled.items.forEach(item => item.visible = true);
assert(run(runtime(enabled)).pl.includes('bigmot')); assert(run(runtime(enabled)).apps.includes('mojteam'));
const noApps = { ...enabled, apps: false }; assert.equal(run(runtime(noApps)).apps.length, 0);
assert.equal(run(runtime({})).apps.length, 5); // Legacy config defaults to visible.
const build = () => execFileSync(process.execPath, ['scripts/build-site.mjs'], { cwd: root, stdio: 'pipe' });
const exists = route => fs.existsSync(path.join(root, 'dist', route, 'index.html'));
const sitemap = () => fs.readFileSync(path.join(root, 'dist/sitemap-realizacje.xml'), 'utf8');
try {
  build();
  for (const route of hiddenRoutes) { assert(!exists(route)); assert(!sitemap().includes(`/${route}/`)); }
  for (const route of hiddenRoutes) assert(!fs.readFileSync(path.join(root, 'dist/realizacje/index.html'), 'utf8').includes(`href="/${route}/"`));
  data.visibility = enabled; fs.writeFileSync(source, JSON.stringify(data)); build();
  for (const route of hiddenRoutes) assert(exists(route), `Nie przywrócono ${route}`);
  assert(exists('realizacje/bigmot')); assert(exists('realizacje/digital/mojteam')); assert(sitemap().includes('/realizacje/bigmot/'));
  data.visibility = { ...enabled, marketing: false, apps: false, web: false }; fs.writeFileSync(source, JSON.stringify(data)); build();
  assert(!exists('realizacje/bigmot')); assert(!exists('realizacje/digital/ktbtask')); assert(!exists('realizacje/digital/grupa-janisz-www'));
  assert.equal((sitemap().match(/<url>/g) || []).length, 1); // The catalog itself remains public.
} finally {
  fs.writeFileSync(source, original); build();
}
console.log('PASS: ukrycie i przywrócenie projektów, PL/EN, kategorie, legacy config, build, linki i sitemap.');
