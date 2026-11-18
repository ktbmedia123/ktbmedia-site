// Indexable translations share these paths across React, Process and the build.
(function (global) {
  const english = Object.freeze({
    '/marketing-dla-branzy-morskiej/': '/en/maritime-marketing/',
    '/realizacje/rmdc/': '/en/work/rmdc/',
    '/realizacje/ddp-supply/': '/en/work/ddp-supply/',
    '/kontakt/': '/en/contact/',
    '/blog/jak-zwiekszyc-widocznosc-firmy-w-odpowiedziach-ai/': '/en/blog/how-to-get-cited-in-ai-search/',
    '/blog/jak-mierzyc-cytowania-marki-w-ai/': '/en/blog/how-to-measure-ai-citations/',
    '/blog/ile-firm-korzysta-z-ai-usa-europa-polska/': '/en/blog/business-ai-adoption-us-eu-poland/',
    '/blog/ranking-modeli-ai-dla-firm/': '/en/blog/ai-model-rankings-for-business/',
    '/blog/jak-zastapic-abonamenty-wlasnym-oprogramowaniem/': '/en/blog/replacing-software-subscriptions/',
    '/blog/automatyzacja-wycen-i-ofert-w-firmie-uslugowej/': '/en/blog/automating-quotes-for-service-businesses/'
  });
  const polish = Object.fromEntries(Object.entries(english).map(([pl, en]) => [en, pl]));
  function pagePath(pathname) {
    pathname = pathname.replace(/\/index\.html$/, '/');
    return pathname === '/' || /\.[a-z0-9]+$/i.test(pathname) ? pathname : pathname.replace(/\/+$/, '') + '/';
  }
  function polishPath(pathname) {
    const path = pagePath(pathname);
    return polish[path] || path;
  }
  function language(url) {
    if (polish[pagePath(url.pathname)]) return 'en';
    return new URLSearchParams(url.search).get('lang') === 'en' ? 'en' : 'pl';
  }
  function href(internalUrl, lang) {
    const url = new URL(internalUrl, 'https://ktbmedia.eu');
    const pl = polishPath(url.pathname);
    url.pathname = lang === 'en' && english[pl] ? english[pl] : pl;
    if (lang === 'en' && !english[pl]) url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  const routes = { english, polishPath, language, href };
  if (typeof module !== 'undefined' && module.exports) module.exports = routes;
  else global.KTBRoutes = routes;
})(globalThis);
