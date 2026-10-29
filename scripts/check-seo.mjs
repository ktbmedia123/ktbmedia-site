import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {execFileSync} from 'node:child_process';
import { parse } from 'parse5';
import { pageFingerprint } from './page-fingerprint.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');
const data = JSON.parse(fs.readFileSync(path.join(root, 'content/site.json')));
const history = JSON.parse(fs.readFileSync(path.join(root, 'seo/page-history.json')));
const maps = ['pages', 'blog', 'realizacje'].map(name => fs.readFileSync(path.join(dist, `sitemap-${name}.xml`), 'utf8'));
const urls = maps.flatMap(map => [...map.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
assert.equal(new Set(urls).size, urls.length, 'Powtórzone adresy w sitemap');
const pages = new Map();
const hiddenSlugs = new Set((data.visibility?.items || []).filter(item => item.visible === false).map(item => item.slug));
function inspect(node, result, inPrerender = false) {
  const attrs = Object.fromEntries((node.attrs || []).map(attr => [attr.name, attr.value]));
  if (node.tagName === 'script') {
    if (attrs.type === 'application/ld+json') result.schemas.push(JSON.parse(node.childNodes.map(child => child.value || '').join('')));
    return;
  }
  if (['style', 'noscript', 'svg'].includes(node.tagName)) return;
  if ('data-ktb-prerender' in attrs) { result.prerender = true; inPrerender = true; }
  if (node.nodeName === '#text') {
    result.text.push(node.value);
    if (inPrerender) result.renderedText.push(node.value);
  }
  if (node.tagName === 'meta') result.metadata[attrs.property || attrs.name] = attrs.content;
  if (node.tagName === 'img' && inPrerender) result.images.push(attrs);
  if (node.tagName === 'h1') result.headings++;
  if (node.tagName === 'a' && attrs.href) result.links.push(attrs.href);
  if (attrs.id) result.ids.push(attrs.id);
  for (const child of node.childNodes || []) inspect(child, result, inPrerender);
}
for (const url of urls) {
  const route = new URL(url).pathname;
  const file = path.join(dist, route, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html), route);
  assert.deepEqual([...html.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/g)].map(m => m[1]), [url], `canonical ${route}`);
  const result = {text: [], renderedText: [], metadata: {}, images: [], links: [], ids: [], headings: 0, prerender: false, schemas: []};
  inspect(parse(html), result);
  result.text = result.text.join(' ').replace(/\s+/g, ' ');
  result.renderedText = result.renderedText.join(' ').replace(/\s+/g, ' ');
  for (const schema of result.schemas.flatMap(s => s['@graph'] || [s])) {
    if (![schema['@type']].flat().includes('FAQPage')) continue;
    for (const question of schema.mainEntity) {
      assert(result.text.includes(question.name), `Niewidoczne pytanie FAQ ${route}`);
      assert(result.text.includes(question.acceptedAnswer.text), `Niewidoczna odpowiedź FAQ ${route}`);
    }
  }
  assert.equal(result.headings, 1, `H1 ${route}`);
  assert.equal(new Set(result.ids).size, result.ids.length, `Powtórzone id ${route}`);
  assert(result.prerender || route === '/proces/', `Brak pełnej treści ${route}`);
  for (const href of result.links) {
    const target = new URL(href, url);
    if (target.origin !== 'https://ktbmedia.eu') continue;
    assert(fs.existsSync(path.join(dist, target.pathname, 'index.html')) || fs.existsSync(path.join(dist, target.pathname)), `Nieistniejący link ${route} → ${href}`);
    assert(!hiddenSlugs.has(target.pathname.match(/^\/realizacje\/(?:digital\/)?([^/]+)\/$/)?.[1]), `Link do ukrytej realizacji ${route}`);
  }
  const saved = history[route];
  const actual = maps.join('\n').match(new RegExp(`<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>\\s*(?:<lastmod>([^<]+)</lastmod>)?`))?.[1];
  if (saved?.fingerprint === pageFingerprint(html)) assert.equal(actual, saved.lastmod, `Niestabilna data ${route}`);
  else assert.equal(actual, undefined, `Zmyślona data zmienionej strony ${route}`);
  pages.set(route, result);
}
for (const [route] of pages) {
  if (route === '/') continue;
  assert([...pages.entries()].some(([from, page]) => from !== route && page.links.some(href => new URL(href, 'https://ktbmedia.eu' + from).pathname === route)), `Osierocona strona ${route}`);
}
for (const item of data.pl.portfolio.items.filter(item => data.visibility.marketing !== false && data.visibility.items.find(entry => entry.slug === item.slug)?.visible !== false)) {
  const page = pages.get(`/realizacje/${item.slug}/`);
  for (const key of ['brief', 'challenge', 'solution']) assert(page.text.includes(item[key].replace(/\s+/g, ' ')), `Brak CMS ${item.slug}.${key}`);
  const story = item.editorial;
  if (!story?.heroMetric) continue;
  const rendered = (value, field) => {
    if (value === undefined || value === null || value === '') return;
    assert(page.renderedText.includes(String(value).replace(/\s+/g, ' ')), `Brak treści editorial w prerenderze ${item.slug}.${field}`);
  };
  rendered(story.headline, 'headline');
  rendered(story.outcomeLabel, 'outcomeLabel');
  rendered(story.photoCredit, 'photoCredit');
  for (const url of [story.photoSourceUrl, story.photoLicenseUrl].filter(Boolean)) assert(page.links.includes(url), `Brak źródła/licencji zdjęcia ${item.slug}`);
  for (const field of ['value', 'label', 'context']) rendered(story.heroMetric[field], `heroMetric.${field}`);
  for (const [index, result] of (item.results || []).entries()) {
    for (const field of ['v', 'k', 'context']) rendered(result[field], `results[${index}].${field}`);
  }
  for (const [index, chapter] of (story.chapters || []).entries()) {
    rendered(chapter.title, `chapters[${index}].title`);
    rendered(chapter.text, `chapters[${index}].text`);
  }
  const cover = item.coverImage || item.images?.[1] || item.images?.[0];
  if (cover) {
    const absoluteCover = new URL(cover, 'https://ktbmedia.eu').href;
    assert.equal(page.metadata['og:image'], absoluteCover, `Okładka OG niezgodna z CMS ${item.slug}`);
    assert.equal(page.metadata['twitter:image'], absoluteCover, `Okładka Twitter niezgodna z CMS ${item.slug}`);
  }
  for (const image of [cover, ...(story.chapters || []).map(chapter => chapter.image)].filter(Boolean)) {
    assert(page.images.some(entry => entry.src === image), `Brak obrazu w prerenderze ${item.slug}: ${image}`);
    const imageUrl = new URL(image, 'https://ktbmedia.eu');
    if (imageUrl.origin !== 'https://ktbmedia.eu') continue;
    const imageFile = path.join(dist, decodeURIComponent(imageUrl.pathname));
    assert(fs.existsSync(imageFile) && fs.statSync(imageFile).isFile(), `Brak publicznego pliku obrazu ${item.slug}: ${image}`);
  }
}
for (const item of data.pl.blog.items) assert(pages.get(`/blog/${item.slug}/`).text.includes(item.title1), `Brak wpisu CMS ${item.slug}`);
assert(pages.get('/').text.includes('Marka,') && pages.get('/').text.includes('czuć w sieci.'), 'Zmiana hero');
const catalog = pages.get('/realizacje/').links;
for (const route of pages.keys()) if (route.startsWith('/realizacje/') && route !== '/realizacje/') assert(catalog.includes(route), `Brak realizacji w katalogu ${route}`);
const sample = fs.readFileSync(path.join(dist, 'kontakt/index.html'), 'utf8');
const marine = pages.get('/marketing-dla-branzy-morskiej/');
const marineFaq = marine.schemas.flatMap(schema => schema['@graph'] || [schema]).find(schema => [schema['@type']].flat().includes('FAQPage'));
assert.equal(marineFaq?.mainEntity.length, data.pl.landings['marketing-dla-branzy-morskiej'].faq.length, 'Brak FAQ schema marine');
assert(fs.readFileSync(path.join(dist, 'marketing-dla-branzy-morskiej/index.html'), 'utf8').includes('data-marine-schema'), 'Brak pełnego widoku marine w prerenderze');
assert.equal(pageFingerprint(sample), pageFingerprint(sample.replace('v=20261026-seo', 'v=20990101').replace('page-header', 'changed-layout')), 'Klasy i build ID zmieniają lastmod');
assert.notEqual(pageFingerprint(sample), pageFingerprint(sample.replace('</h1>', ' Zmieniona treść</h1>')), 'Treść nie zmienia fingerprint');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'ktb-sitemap-check-'));
try {
  fs.writeFileSync(path.join(temporary, 'index.html'), sample);
  const generate = () => execFileSync(process.execPath, [path.join(root, 'scripts/generate-sitemaps.mjs'), temporary], {stdio: 'pipe'});
  generate();
  assert(fs.readFileSync(path.join(temporary, 'sitemap-pages.xml'), 'utf8').includes(`<lastmod>${history['/kontakt/'].lastmod}</lastmod>`));
  fs.writeFileSync(path.join(temporary, 'index.html'), sample.replace('</h1>', ' Nowa wersja CMS</h1>'));
  generate();
  assert(!fs.readFileSync(path.join(temporary, 'sitemap-pages.xml'), 'utf8').includes('<lastmod>'), 'Nieznana wersja otrzymała wymyśloną datę');
} finally { fs.rmSync(temporary, {recursive: true, force: true}); }
console.log(`PASS: ${pages.size} stron; CMS, H1, canonical, schema, brak osieroconych i uszkodzonych linków, cały katalog, ukrycie i daty sitemap.`);
