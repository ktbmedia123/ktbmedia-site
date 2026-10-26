import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// The same escaped renderer produces the static content and the client view.
export function buildMarineLanding(root, dist, data, isVisible) {
  const slug = 'marketing-dla-branzy-morskiej';
  const sandbox = { URL };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'marine-landing.js'), 'utf8'), sandbox, { timeout: 1000 });
  const render = sandbox.KTBMarine.render;
  for (const lang of ['pl', 'en']) {
    const config = data[lang]?.landings?.[slug];
    if (!config?.marine || !config.hero?.h1 || !config.faq?.length) throw new Error(`Brak treści marine ${lang}`);
    if (config.services.length !== config.marine.serviceNotes.length) throw new Error(`Niezgodne opisy usług marine ${lang}`);
  }
  const config = data.pl.landings[slug];
  const cases = config.cases.map(slug => data.pl.portfolio.items.find(item => item.slug === slug && isVisible(slug, 'marketing'))).filter(Boolean);
  const file = path.join(dist, slug, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(config.title)}</title>`);
  for (const [name, value] of Object.entries({description:config.description, keywords:config.keywords.join(', '), 'og:title':config.title, 'og:description':config.description, 'twitter:title':config.title, 'twitter:description':config.description, 'geo.placename':'Pruszcz Gdański'})) {
    const attr = name.startsWith('og:') ? 'property' : 'name';
    const regex = new RegExp(`<meta ${attr}="${name}"[^>]*>`, 'g');
    html = html.replace(regex, `<meta ${attr}="${name}" content="${esc(value)}" />`);
  }
  // Replace legacy page schemas; retain the shared organisation graph.
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '');
  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script)/, `<div id="root">${render(config, 'pl', cases)}</div>\n  `);
  if (!html.includes('data-marine-schema')) throw new Error('Nie wygenerowano statycznej strony marine');
  html = html.replace(/(\/(?:styles\.css|app\.js|content\.js|landing-configs\.js))\?v=[^"']+/g, '$1?v=20261026-marine');
  fs.writeFileSync(file, html);

  // CMS is also the source for the legacy landing fallback.
  const context = {window:{}};
  vm.runInNewContext(fs.readFileSync(path.join(root, 'landing-configs.js'), 'utf8'), context, {timeout:1000});
  context.window.LANDINGS[slug] = config;
  fs.writeFileSync(path.join(dist, 'landing-configs.js'), `const LANDINGS = ${JSON.stringify(context.window.LANDINGS, null, 2)};\nwindow.LANDINGS = LANDINGS;\n`);
}
