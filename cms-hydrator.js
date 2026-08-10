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
  let loaderStyleInserted = false;

  function renderLoader(el) {
    if (!loaderStyleInserted) {
      loaderStyleInserted = true;
      var style = document.createElement('style');
      style.setAttribute('data-ktb-loader', 'true');
      style.textContent = [
        '.ktb-loader{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;background:#efe9dc;overflow:hidden;transition:opacity .28s ease,visibility .28s ease}',
        '.ktb-loader-dot{position:relative;width:28px;height:28px;border-radius:50%;background:#1a1a1a;box-shadow:0 0 0 0 rgba(232,168,56,0);animation:ktbLoaderDot 1.15s cubic-bezier(.22,.8,.22,1) infinite}',
        '.ktb-loader-dot:after{content:"";position:absolute;inset:-12px;border:1px solid rgba(26,26,26,.2);border-radius:50%;animation:ktbLoaderRing 1.15s cubic-bezier(.22,.8,.22,1) infinite}',
        '.ktb-loader.is-ready{opacity:0;visibility:hidden}',
        '.ktb-loader.is-ready .ktb-loader-dot{animation:none;background:#e8a838;transform:scale(1.65);transition:transform .28s ease,background .18s ease}',
        '@keyframes ktbLoaderDot{0%,28%{transform:scale(.72);background:#1a1a1a;box-shadow:0 0 0 0 rgba(232,168,56,0)}58%{transform:scale(1);background:#e8a838;box-shadow:0 0 0 10px rgba(232,168,56,.12)}100%{transform:scale(.72);background:#1a1a1a;box-shadow:0 0 0 20px rgba(232,168,56,0)}}',
        '@keyframes ktbLoaderRing{0%{transform:scale(.6);opacity:0}45%{opacity:.7}100%{transform:scale(1.55);opacity:0}}',
        '@media(prefers-reduced-motion:reduce){.ktb-loader,.ktb-loader-dot,.ktb-loader-dot:after{animation:none!important;transition:none!important}.ktb-loader-dot{background:#e8a838}}'
      ].join('');
      document.head.appendChild(style);
    }
    el.innerHTML = '<div class="ktb-loader" role="status" aria-label="Ładowanie strony KTB Media"><span class="ktb-loader-dot" aria-hidden="true"></span></div>';
  }

  ReactDOM.createRoot = function (el) {
    const root = originalCreateRoot.call(this, el);
    rootInstance = root;
    const origRender = root.render.bind(root);
    root.render = function (jsx) {
      if (window.KTB_CMS_LOADING) {
        pendingRender = jsx;
        renderLoader(el);
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
      var loader = document.querySelector('.ktb-loader');
      var render = function () {
        window.__ktbRoot.origRender(pendingRender);
        pendingRender = null;
      };
      if (loader && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        loader.classList.add('is-ready');
        setTimeout(render, 280);
      } else {
        render();
      }
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
