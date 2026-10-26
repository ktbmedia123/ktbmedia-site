import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { parse } from 'parse5';

// Use the same React version and components as the browser, without running
// effects, loading the CMS over HTTP, or depending on a headless browser in CI.
process.env.NODE_ENV ??= 'production';
const { default: React } = await import('react');
const { renderToStaticMarkup } = await import('react-dom/server');

export function visit(node, callback) {
  callback(node);
  for (const child of node.childNodes || []) visit(child, callback);
}

function synchronizeFaq(html, markup) {
  const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join(' ');
  const questions = [];
  visit(parse(markup), node => {
    if (node.tagName !== 'details') return;
    const summary = node.childNodes.find(child => child.tagName === 'summary');
    if (!summary) return;
    const question = text(summary).replace(/\s+/g, ' ').trim();
    const answer = node.childNodes.filter(child => child !== summary).map(text).join(' ').replace(/\s+/g, ' ').trim();
    if (question && answer) questions.push({'@type': 'Question', name: question, acceptedAnswer: {'@type': 'Answer', text: answer}});
  });
  function sync(schema) {
    if ([schema['@type']].flat().includes('FAQPage')) return questions.length ? {...schema, mainEntity: questions} : null;
    if (schema['@graph']) return {...schema, '@graph': schema['@graph'].map(sync).filter(Boolean)};
    return schema;
  }
  return html.replace(/(<script\b[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/g, (_, open, json, close) => {
    const schema = sync(JSON.parse(json));
    return schema ? open + JSON.stringify(schema).replace(/</g, '\\u003c') + close : '';
  });
}

export function prerenderPages(root, dist, data) {
  const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const mount = source.indexOf("ReactDOM.createRoot(document.getElementById('root'))");
  if (mount < 0) throw new Error('Nie znaleziono punktu startowego aplikacji');
  const window = {
    location: new URL('https://ktbmedia.eu/'),
    KTB_VISIBILITY: data.visibility,
    matchMedia: () => ({ matches: true })
  };
  const context = vm.createContext({
    React: { ...React, useLayoutEffect: React.useEffect },
    window, URL, URLSearchParams, COPY: data, console
  });
  for (const name of ['landing-configs.js', 'marine-landing.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), context, { timeout: 1000 });
  }
  // In a browser window === globalThis; keep the shared UMD renderer on the
  // simulated window too, so marine uses its full custom view during SSR.
  window.KTBMarine = context.KTBMarine;
  vm.runInContext(source.slice(0, mount), context, { timeout: 1000 });
  // A static document must contain the final values, rather than the zero at
  // which the browser's count-up effect starts. The client still animates them.
  vm.runInContext(`AnimatedValue = ({value, className}) => React.createElement('span', {className}, value);
    globalThis.pageElement = () => React.createElement(App);`, context);
  const rendered = [];
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) { walk(file); continue; }
      if (entry.name !== 'index.html') continue;
      let html = fs.readFileSync(file, 'utf8');
      if (!html.includes('src="/app.js')) continue;
      const document = parse(html, { sourceCodeLocationInfo: true });
      let target;
      visit(document, node => {
        if (node.attrs?.some(attr => attr.name === 'id' && attr.value === 'root')) target = node;
      });
      if (!target?.sourceCodeLocation?.endTag) throw new Error(`Brak root: ${file}`);
      const route = '/' + path.relative(dist, path.dirname(file)).split(path.sep).filter(Boolean).join('/');
      window.location = new URL(route === '/' ? '/' : route + '/', 'https://ktbmedia.eu');
      const metadata = context.getSEOMetadata('pl', route);
      const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(metadata.title)}</title>`);
      for (const [key, value] of Object.entries({description: metadata.desc, 'og:title': metadata.title, 'og:description': metadata.desc, 'twitter:title': metadata.title, 'twitter:description': metadata.desc})) {
        const attribute = key.startsWith('og:') ? 'property' : 'name';
        html = html.replace(new RegExp(`<meta ${attribute}="${key}"[^>]*>`, 'g'), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
      }
      // Metadata changes above alter source offsets, so locate root again.
      let rootLocation;
      visit(parse(html, {sourceCodeLocationInfo: true}), node => {
        if (node.attrs?.some(attr => attr.name === 'id' && attr.value === 'root')) rootLocation = node.sourceCodeLocation;
      });
      let markup = renderToStaticMarkup(context.pageElement());
      // Content remains readable without JS and when startup falls back after an
      // error. React replaces these classes with its normal animated first view.
      markup = markup.replace(/class="([^"]*)"/g, (match, classes) =>
        /(?:^|\s)(?:reveal|split-line)(?:\s|$)/.test(classes) ? `class="${classes} in"` : match);
      const location = rootLocation;
      html = html.slice(0, location.startTag.endOffset) +
        '<div data-ktb-prerender="true">' + markup + '</div>' +
        html.slice(location.endTag.startOffset);
      html = synchronizeFaq(html, markup);
      html = html.replace('</head>', `<noscript><style>
        body{cursor:auto!important}a,button{cursor:pointer!important}
        .ktb-cursor,.nav-burger,.lang-toggle,.mobile-menu,.sticky-quote{display:none!important}
        .work-tabs,.work-category-head{display:none!important}
        .work-grid[hidden]{display:grid!important}
        .work-panel-title{display:block!important;grid-column:1/-1}
        @media(max-width:860px){.nav-links{display:flex!important;flex-wrap:wrap;font-size:12px;gap:8px}.nav{position:relative!important}}
      </style></noscript>\n</head>`);
      fs.writeFileSync(file, html);
      rendered.push(window.location.pathname);
    }
  }
  walk(dist);
  console.log(`Prerender: ${rendered.length} pełnych dokumentów React z aktualnego CMS.`);
  return rendered;
}
