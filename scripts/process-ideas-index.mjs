import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const origin = 'https://ktbmedia.eu';
const pageUrl = `${origin}/proces/`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const labels = {
  pl: {
    summary: 'Za każdą kropką stoi pomysł. Poznaj wszystkie.',
    title: '57 pomysłów. Jeden spójny proces.',
    intro: 'Łączymy strategię marki, kreację i technologię. Te hasła pokazują, jak myślimy o marketingu — od znalezienia kierunku, przez język i obraz, po strony internetowe i aplikacje. Pomysłom towarzyszą powiązane publiczne realizacje i artykuły KTB Media.',
    strategy: 'Strategia — kierunek dla marki',
    creation: 'Kreacja — forma, która ma znaczenie',
    digital: 'Digital — pomysł, który działa',
    collection: 'Proces KTB Media — strategia, kreacja i digital',
    list: 'Pomysły i zasady procesu KTB Media'
  },
  en: {
    summary: 'An idea behind every dot. Explore them all.',
    title: '57 ideas. One connected process.',
    intro: 'We connect brand strategy, creative work and technology. These ideas show how we approach marketing — from finding a direction, through words and imagery, to websites and apps. The ideas are accompanied by related public KTB Media projects and articles.',
    strategy: 'Strategy — direction for your brand',
    creation: 'Creative — form with meaning',
    digital: 'Digital — ideas put to work',
    collection: 'The KTB Media process — strategy, creative and digital',
    list: 'Ideas and principles behind the KTB Media process'
  }
};

export function buildProcessIdeasIndex(root, dist, isHiddenUrl) {
  // Evaluate only the repository-owned data declarations, never browser/runtime code.
  const source = fs.readFileSync(path.join(root, 'proces/universe.js'), 'utf8');
  const start = source.indexOf('  const items = ');
  const end = source.indexOf('  const copy = ', start);
  if (start < 0 || end < 0) throw new Error('Brak deklaracji danych pomysłów Procesu');
  const { items, destinations } = vm.runInNewContext(`${source.slice(start, end)}\n({items, destinations});`, Object.create(null), { timeout:1000, contextCodeGeneration:{ strings:false, wasm:false } });
  if (!Array.isArray(items) || !items.length) throw new Error('Pusty indeks pomysłów Procesu');
  const publicDestination = key => !isHiddenUrl(destinations[key][0]);
  for (const item of items) {
    if (item.length !== 6 || !['strategy', 'creation', 'digital'].includes(item[0]) || item.some(value => typeof value !== 'string' || !value.trim())) throw new Error('Nieprawidłowy rekord pomysłu Procesu');
    const destination = destinations[item[5]];
    if (!destination || !/^\/(?:blog|realizacje)\/[a-z0-9/-]+\/$/.test(destination[0]) || (publicDestination(item[5]) && !fs.existsSync(path.join(dist, destination[0], 'index.html')))) throw new Error(`Nieznany lub brakujący cel pomysłu Procesu: ${item[5]}`);
  }
  const href = (key, lang) => destinations[key][0] + (lang === 'en' ? '?lang=en' : '');
  const languageBlock = lang => {
    const copy = labels[lang], titleIndex = lang === 'pl' ? 1 : 2, descriptionIndex = titleIndex + 2;
    const groups = ['strategy', 'creation', 'digital'].map(category => `<section aria-labelledby="process-group-${lang}-${category}"><h3 id="process-group-${lang}-${category}">${escapeHtml(copy[category])}</h3><ul class="process-ideas-list">${items.map((item, i) => item[0] !== category ? '' : `<li id="process-idea-${lang}-${i+1}"><h4>${escapeHtml(item[titleIndex])}</h4><p>${escapeHtml(item[descriptionIndex])}</p>${publicDestination(item[5]) ? `<a href="${escapeHtml(href(item[5], lang))}">${escapeHtml(destinations[item[5]][titleIndex])} <span aria-hidden="true">↗</span></a>` : ''}</li>`).join('\n')}</ul></section>`).join('\n');
    return `<div data-process-lang="${lang}" lang="${lang}"${lang === 'en' ? ' hidden' : ''}><h2>${escapeHtml(copy.title.replace('57', String(items.length)))}</h2><p class="process-ideas-intro">${escapeHtml(copy.intro)}</p>${groups}</div>`;
  };
  const languagePage = lang => pageUrl + (lang === 'en' ? '?lang=en' : '');
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type':'CollectionPage', '@id':`${pageUrl}#page`, url:pageUrl, name:labels.pl.collection, alternateName:labels.en.collection, description:labels.pl.intro, inLanguage:['pl', 'en'], publisher:{ '@type':'Organization', name:'KTB Media', url:origin }, mainEntity:['pl', 'en'].map(lang => ({ '@id':`${languagePage(lang)}#ideas-${lang}` })) },
      ...['pl', 'en'].map(lang => ({
        '@type':'ItemList', '@id':`${languagePage(lang)}#ideas-${lang}`, name:labels[lang].list, numberOfItems:items.length, itemListOrder:'https://schema.org/ItemListUnordered',
        itemListElement:items.map((item, i) => ({ '@type':'ListItem', position:i+1, item:{ '@type':'CreativeWork', '@id':`${languagePage(lang)}#process-idea-${lang}-${i+1}`, url:`${languagePage(lang)}#process-idea-${lang}-${i+1}`, name:item[lang === 'pl' ? 1 : 2], description:item[lang === 'pl' ? 3 : 4], inLanguage:lang, isPartOf:{ '@id':`${pageUrl}#page` }, ...(publicDestination(item[5]) ? { mentions:{ '@type':'WebPage', url:new URL(href(item[5], lang), origin).href, name:destinations[item[5]][lang === 'pl' ? 1 : 2] } } : {}) } }))
      }))
    ]
  };
  const html = `<details class="process-ideas-index" id="process-ideas-index"><summary><span data-process-lang="pl">${labels.pl.summary}</span><span data-process-lang="en" hidden>${labels.en.summary}</span></summary>${languageBlock('pl')}${languageBlock('en')}</details>\n<script type="application/ld+json" id="process-ideas-schema">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`;
  return { html, count:items.length };
}
