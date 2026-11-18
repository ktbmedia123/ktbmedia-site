import fs from 'node:fs';
import path from 'node:path';
import routes from '../localized-routes.js';

const origin = 'https://ktbmedia.eu';
const escape = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));

function documentFor(post, lang, pathname) {
  const url = origin + pathname;
  const title = [post.title1, post.titleIt].filter(Boolean).join(' ');
  const description = post.seoDescription || post.lede;
  const organization = {'@type': 'Organization', '@id': origin + '/#organization/', name: 'KTB Media', url: origin + '/'};
  const image = post.image && new URL(post.image, origin).href;
  const graph = [
    {'@type': 'BlogPosting', '@id': url + '#article', url, mainEntityOfPage: url, headline: title, description,
      inLanguage: lang, author: organization, publisher: organization, articleSection: post.cat,
      ...(image ? {image} : {}), ...(post.dateISO ? {datePublished: post.dateISO} : {})},
    {'@type': 'BreadcrumbList', itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'KTB Media', item: origin + '/'},
      {'@type': 'ListItem', position: 2, name: lang === 'en' ? 'Journal' : 'Blog', item: origin + routes.href('/blog/', lang)},
      {'@type': 'ListItem', position: 3, name: title, item: url}
    ]}
  ];
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#efe9dc" />
  <title>${escape(post.seoTitle || title)} · KTB Media</title>
  <meta name="description" content="${escape(description)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${escape(url)}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="KTB Media" />
  <meta property="og:locale" content="${lang === 'pl' ? 'pl_PL' : 'en_GB'}" />
  <meta property="og:url" content="${escape(url)}" />
  <meta property="og:title" content="${escape(title)}" />
  <meta property="og:description" content="${escape(description)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escape(title)}" />
  <meta name="twitter:description" content="${escape(description)}" />
  ${image ? `<meta property="og:image" content="${escape(image)}" />
  <meta name="twitter:image" content="${escape(image)}" />` : ''}
  <link rel="icon" type="image/png" href="/assets/favicon-32.png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <link rel="stylesheet" href="/styles.css" />
  <script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org', '@graph': graph}).replace(/</g,'\\u003c')}</script>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <script src="/content.js"></script>
  <script src="/landing-configs.js"></script>
  <script src="/cms-hydrator.js"></script>
  <script src="/app.js"></script>
</body>
</html>`;
}

export function writeBlogDocuments(dist, data) {
  for (const lang of ['pl', 'en']) {
    const slugs = new Set();
    for (const post of data[lang].blog.items) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) || slugs.has(post.slug)) {
        throw new Error(`Invalid or duplicate blog slug: ${lang}/${post.slug}`);
      }
      slugs.add(post.slug);
      const pl = `/blog/${post.slug}/`;
      const route = lang === 'pl' ? pl : routes.english[pl];
      if (!route) continue;
      const dir = path.join(dist, route);
      const file = path.join(dir, 'index.html');
      if (fs.existsSync(file)) continue; // Existing articles supply their own legacy head and structured data.
      fs.mkdirSync(dir, {recursive: true});
      fs.writeFileSync(file, documentFor(post, lang, route));
    }
  }
}
