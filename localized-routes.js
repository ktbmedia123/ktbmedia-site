// Indexable translations share these paths across React, Process and the build.
(function (global) {
  const english = Object.freeze({
    '/marketing-dla-branzy-morskiej/': '/en/maritime-marketing/',
    '/realizacje/rmdc/': '/en/work/rmdc/',
    '/realizacje/ddp-supply/': '/en/work/ddp-supply/',
    '/kontakt/': '/en/contact/'
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
