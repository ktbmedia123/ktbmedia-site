/**
 * KTB Media CMS Hydrator (Git-based / Decap)
 *
 * Pobiera treści z /content/site.json (commitowane do repo przez Decap CMS).
 * Robi deep merge z lokalnym COPY z content.js który stanowi fallback.
 *
 * Uruchamiany po content.js a przed app.js. Przechwytuje ReactDOM.createRoot
 * żeby opóźnić pierwszy render aż fetch się skończy.
 */
(function () {
  if (!window.COPY) {
    console.warn('[KTB CMS] COPY nie istnieje — content.js się nie załadował');
    return;
  }

  // Deep merge: nadpisuje wartości z source, zachowuje lokalne jeśli w source brak
  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    const out = Array.isArray(target) ? [...target] : { ...target };
    for (const key of Object.keys(source)) {
      const sv = source[key];
      const tv = target ? target[key] : undefined;
      if (Array.isArray(sv)) {
        out[key] = sv; // Array zawsze z source (żeby móc usuwać/dodawać)
      } else if (sv && typeof sv === 'object') {
        out[key] = deepMerge(tv || {}, sv);
      } else if (sv !== undefined && sv !== null && sv !== '') {
        out[key] = sv;
      }
    }
    return out;
  }

  // Przechwycenie ReactDOM.createRoot — opóźnia pierwszy render
  window.KTB_CMS_LOADING = true;
  const originalCreateRoot = ReactDOM.createRoot;
  let rootInstance = null;
  let pendingRender = null;
  let skeletonStyleInserted = false;

  function renderSkeleton(el) {
    if (!skeletonStyleInserted) {
      skeletonStyleInserted = true;
      var style = document.createElement('style');
      style.setAttribute('data-ktb-skeleton', 'true');
      style.textContent = [
        '.ktb-skeleton{position:fixed;inset:0;z-index:99999;background:#efe9dc;color:#1a1a1a;display:flex;align-items:flex-start;justify-content:center;padding:150px 24px 90px;box-sizing:border-box;overflow:hidden}',
        '.ktb-skeleton-inner{width:min(1180px,100%)}',
        '.ktb-skeleton-label,.ktb-skeleton-line,.ktb-skeleton-btn{position:relative;overflow:hidden;background:color-mix(in srgb,#1a1a1a 8%,transparent);border-radius:3px}',
        '.ktb-skeleton-label{width:180px;height:12px;margin-bottom:40px}',
        '.ktb-skeleton-line{height:clamp(42px,8vw,102px);margin-bottom:16px}',
        '.ktb-skeleton-line.l1{width:min(980px,92%)}',
        '.ktb-skeleton-line.l2{width:min(1060px,98%)}',
        '.ktb-skeleton-line.l3{width:min(720px,70%);margin-bottom:42px}',
        '.ktb-skeleton-actions{display:flex;gap:16px;flex-wrap:wrap}',
        '.ktb-skeleton-btn{width:172px;height:50px;border-radius:999px}',
        '.ktb-skeleton-label:after,.ktb-skeleton-line:after,.ktb-skeleton-btn:after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);animation:ktbSkeletonShimmer 1.8s infinite}',
        '@keyframes ktbSkeletonShimmer{to{transform:translateX(100%)}}',
        '@media(max-width:720px){.ktb-skeleton{padding-top:118px}.ktb-skeleton-line{height:54px}.ktb-skeleton-line.l3{width:86%}.ktb-skeleton-btn{width:138px;height:44px}}',
        '@media(prefers-reduced-motion:reduce){.ktb-skeleton-label:after,.ktb-skeleton-line:after,.ktb-skeleton-btn:after{animation:none;display:none}}'
      ].join('');
      document.head.appendChild(style);
    }
    el.innerHTML = '<div class="ktb-skeleton" role="status" aria-label="Ładowanie strony KTB Media"><div class="ktb-skeleton-inner"><div class="ktb-skeleton-label"></div><div class="ktb-skeleton-line l1"></div><div class="ktb-skeleton-line l2"></div><div class="ktb-skeleton-line l3"></div><div class="ktb-skeleton-actions"><div class="ktb-skeleton-btn"></div><div class="ktb-skeleton-btn"></div></div></div></div>';
  }

  ReactDOM.createRoot = function (el) {
    const root = originalCreateRoot.call(this, el);
    rootInstance = root;
    const origRender = root.render.bind(root);
    root.render = function (jsx) {
      if (window.KTB_CMS_LOADING) {
        pendingRender = jsx;
        renderSkeleton(el);
      } else {
        origRender(jsx);
      }
    };
    window.__ktbRoot = { root, origRender };
    return root;
  };

  function commitRender() {
    window.KTB_CMS_LOADING = false;
    if (pendingRender && window.__ktbRoot) {
      window.__ktbRoot.origRender(pendingRender);
    }
  }

  // Fetch z buster-em żeby zawsze dostać świeże dane po deployu
  // Netlify ma Cache-Control: must-revalidate na /content/*, więc i tak sprawdza ETag
  const url = '/content/site.json?v=' + (Date.now() - (Date.now() % 60000)); // co minutę nowy URL — w praktyce CDN trzyma < 60s

  fetch(url, { credentials: 'same-origin' })
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (data) {
      if (data && typeof data === 'object') {
        // Decap zapisuje bloki blog body jako {type, h/p/list}, ale app.js oczekuje bez type.
        // Zrzucamy pole type przed merge.
        ['pl', 'en'].forEach(function (lang) {
          if (!data[lang] || !data[lang].blog || !Array.isArray(data[lang].blog.items)) return;
          data[lang].blog.items.forEach(function (item) {
            if (Array.isArray(item.body)) {
              item.body.forEach(function (block) {
                if (block && block.type) delete block.type;
              });
            }
          });
        });

        if (data.pl) window.COPY.pl = deepMerge(window.COPY.pl, data.pl);
        if (data.en) window.COPY.en = deepMerge(window.COPY.en, data.en);
        console.log('[KTB CMS] Treści z site.json załadowane');
      }
      commitRender();
    })
    .catch(function (err) {
      console.warn('[KTB CMS] Nie udało się pobrać site.json — używam lokalnego content.js:', err.message);
      commitRender();
    });

  // Bezpiecznik: jeśli fetch się zawiesi, po 3s renderujemy z fallbackiem
  setTimeout(function () {
    if (window.KTB_CMS_LOADING) {
      console.warn('[KTB CMS] Timeout — renderuję z lokalnym content');
      commitRender();
    }
  }, 3000);
})();
