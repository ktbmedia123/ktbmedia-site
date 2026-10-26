// Inline the guard before any body content can paint. Without JavaScript the
// original document stays readable; the loader is never enabled by CSS alone.
function bootPage() {
  const html = document.documentElement;
  let pending = true, root = null, fallback = '', timer;
  function finish(ready) {
    if (!pending) {
      if (ready) html.dataset.ktbBoot = 'ready';
      return;
    }
    pending = false;
    clearTimeout(timer);
    window.removeEventListener('error', onError, true);
    window.removeEventListener('pageshow', onPageShow);
    if (!ready && root && fallback) root.innerHTML = fallback;
    fallback = '';
    html.dataset.ktbBoot = ready ? 'ready' : 'fallback';
    html.classList.remove('ktb-booting');
  }
  function onError(event) {
    const source = event.target?.src || event.filename || '';
    if (/\/(?:app|content|cms-hydrator)\.js(?:[?#]|$)|\/react(?:-dom)?(?:@|\.production)/.test(source)) {
      // Let React finish its error cleanup before restoring the static document.
      setTimeout(() => finish(false), 0);
    }
  }
  function onPageShow(event) { if (event.persisted) finish(false); }
  window.KTB_PAGE_BOOT = {
    capture(element) { if (pending) { root = element; fallback = element.innerHTML; } },
    ready() { finish(true); }
  };
  window.addEventListener('error', onError, true);
  window.addEventListener('pageshow', onPageShow);
  timer = setTimeout(() => finish(false), 6000);
  html.dataset.ktbBootLang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'pl';
  html.dataset.ktbBoot = 'loading';
  html.classList.add('ktb-booting');
}

const style = `
#ktb-page-loader{display:none}
html.ktb-booting{background:#f3eee4;overflow:hidden}
.ktb-booting #root{visibility:hidden}
.ktb-booting #ktb-page-loader{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:#f3eee4;cursor:progress}
.ktb-boot-dot{width:24px;height:24px;border-radius:50%;background:#141210;opacity:0;animation:ktb-boot-appear .2s .18s forwards,ktb-boot-pulse 1.25s .18s ease-in-out infinite}
.ktb-boot-label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
[data-ktb-boot-lang=pl] .ktb-boot-en,[data-ktb-boot-lang=en] .ktb-boot-pl{display:none}
@keyframes ktb-boot-appear{to{opacity:1}}
@keyframes ktb-boot-pulse{50%{background:#e8a838;transform:scale(1.15)}}
@media(prefers-reduced-motion:reduce){.ktb-boot-dot{animation:none;opacity:1;background:#e8a838}}
`;
const loader = '<div id="ktb-page-loader" role="status"><span class="ktb-boot-dot" aria-hidden="true"></span><span class="ktb-boot-label ktb-boot-pl">Ładowanie strony KTB Media</span><span class="ktb-boot-label ktb-boot-en" lang="en">Loading KTB Media</span></div>';

export function installPageBoot(html) {
  if (!html.includes('src="/app.js')) return html;
  const head = `<style id="ktb-page-boot-style">${style}</style><script id="ktb-page-boot">(${bootPage.toString()})();</script>`;
  html = html.replace(/(<meta name="viewport"[^>]*>)/, '$1\n' + head);
  html = html.replace(/(<body\b[^>]*>)/, '$1\n' + loader);
  if (!html.includes('id="ktb-page-boot"') || !html.includes('id="ktb-page-loader"')) throw new Error('Missing page boot insertion point');
  // Fetch the independent files in parallel; defer preserves their execution order.
  return html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/g, (tag, src) => {
    if (!/^https:\/\/unpkg\.com\/react(?:-dom)?@|^\/(?:content|landing-configs|cms-hydrator|marine-landing|app)\.js/.test(src)) return tag;
    tag = tag.replace(/(\/(?:app|cms-hydrator)\.js)(?:\?[^"']*)?/, '$1?v=20261026-boot');
    return /\bdefer\b/.test(tag) ? tag : tag.replace('<script', '<script defer');
  });
}
