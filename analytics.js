/* KTB Media: consent-gated GTM and explicit page views for the React router. */
(function () {
  'use strict';
  if (window.KTBAnalytics || /^\/admin(?:\/|$)/.test(location.pathname)) return;
  const CONTAINER = 'GTM-PHWKQGG7';
  const STORAGE_KEY = 'ktb-analytics-consent-v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  let granted = false;
  let loaded = false;
  let lastPage = '';
  let pageTimer;
  let banner;
  window.dataLayer = window.dataLayer || [];
  // Google reads gtag commands as Arguments objects rather than ordinary arrays.
  function gtag() { window.dataLayer.push(arguments); }
  function updateConsent(command, analytics) {
    gtag('consent', command, { analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  }
  updateConsent('default', false);
  function readChoice() {
    try {
      const choice = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (choice && typeof choice.analytics === 'boolean' && choice.at > Date.now() - MAX_AGE && choice.at <= Date.now()) return choice;
    } catch (_) { /* A blocked storage must not prevent browsing or imply consent. */ }
    return null;
  }
  function publicUrl() {
    const url = new URL(location.href);
    const clean = new URL(url.origin + url.pathname);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'].forEach(function (key) {
      if (url.searchParams.has(key)) clean.searchParams.set(key, url.searchParams.get(key));
    });
    return clean.href;
  }
  function pageView() {
    if (!granted || lastPage === publicUrl()) return;
    const current = publicUrl();
    window.dataLayer.push({ event: 'ktb_page_view', page_location: current,
      page_title: document.title, page_referrer: lastPage || document.referrer.split('?')[0].split('#')[0] });
    lastPage = current;
  }
  function schedulePage() {
    clearTimeout(pageTimer);
    pageTimer = setTimeout(pageView, 200);
  }
  function loadContainer() {
    if (loaded) return;
    loaded = true;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + CONTAINER;
    document.head.appendChild(script);
  }
  function clearAnalyticsCookies() {
    document.cookie.split(';').forEach(function (entry) {
      const name = entry.split('=')[0].trim();
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
      [undefined, location.hostname, '.' + location.hostname].forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax' + (domain ? '; Domain=' + domain : '');
      });
    });
  }
  function saveChoice(analytics) {
    const wasGranted = granted;
    granted = analytics;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: analytics, at: Date.now() })); } catch (_) {}
    updateConsent('update', analytics);
    if (banner) banner.hidden = true;
    if (analytics) { loadContainer(); schedulePage(); }
    else {
      clearTimeout(pageTimer);
      clearAnalyticsCookies();
      // Reload removes already loaded Google scripts after withdrawing consent.
      if (wasGranted) location.reload();
    }
  }
  function showBanner() { if (banner) { banner.hidden = false; banner.querySelector('button').focus(); } }
  function initBanner() {
    const en = document.documentElement.lang === 'en';
    const style = document.createElement('style');
    style.textContent = '.ktb-consent[hidden]{display:none!important}.ktb-consent{position:fixed;z-index:100001;left:20px;bottom:20px;width:min(460px,calc(100vw - 40px));box-sizing:border-box;padding:22px;background:#efe9dc;color:#1a1a1a;border:1px solid #1a1a1a;box-shadow:0 8px 28px #0002;font:14px/1.5 Arial,sans-serif}.ktb-consent h2{font:600 21px/1.2 Arial,sans-serif;margin:0 0 10px}.ktb-consent p{margin:0 0 14px}.ktb-consent a{color:inherit;text-decoration:underline}.ktb-consent-actions{display:flex;flex-wrap:wrap;gap:8px}.ktb-consent button{cursor:pointer;font:600 12px/1.4 Arial,sans-serif;border:1px solid #1a1a1a;padding:11px 14px;background:#efe9dc;color:#1a1a1a}.ktb-consent button:first-child{background:#1a1a1a;color:#efe9dc}.ktb-consent button:focus-visible{outline:3px solid #e8a838;outline-offset:3px}@media(max-width:600px){.ktb-consent{left:10px;bottom:10px;width:calc(100vw - 20px);padding:18px}}';
    document.head.appendChild(style);
    banner = document.createElement('section');
    banner.className = 'ktb-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-labelledby', 'ktb-consent-title');
    banner.innerHTML = '<h2 id="ktb-consent-title">' + (en ? 'Website analytics' : 'Analityka strony') + '</h2><p>' +
      (en ? 'With your permission, we use Google Analytics to understand visits and improve this website. You can refuse or change your choice at any time. ' : 'Za Twoją zgodą używamy Google Analytics, aby mierzyć odwiedziny i ulepszać stronę. Możesz odmówić lub zmienić decyzję w każdej chwili. ') +
      '<a href="/polityka-prywatnosci/">' + (en ? 'Privacy policy' : 'Polityka prywatności') + '</a></p><div class="ktb-consent-actions"><button type="button">' + (en ? 'Allow analytics' : 'Zezwalam na analitykę') + '</button><button type="button">' + (en ? 'Necessary only' : 'Tylko niezbędne') + '</button></div>';
    banner.querySelectorAll('button')[0].addEventListener('click', function () { saveChoice(true); });
    banner.querySelectorAll('button')[1].addEventListener('click', function () { saveChoice(false); });
    const choice = readChoice();
    banner.hidden = !!choice;
    document.body.appendChild(banner);
    if (choice && choice.analytics) { granted = true; updateConsent('update', true); loadContainer(); schedulePage(); }
  }
  window.KTBAnalytics = { showSettings: showBanner };
  window.addEventListener('ktb-navigate', schedulePage);
  window.addEventListener('popstate', schedulePage);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initBanner, { once: true });
  else initBanner();
})();
