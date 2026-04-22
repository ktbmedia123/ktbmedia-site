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

  ReactDOM.createRoot = function (el) {
    const root = originalCreateRoot.call(this, el);
    rootInstance = root;
    const origRender = root.render.bind(root);
    root.render = function (jsx) {
      if (window.KTB_CMS_LOADING) {
        pendingRender = jsx;
        // Cichy loader — jasne tło z neutralnym tekstem
        el.innerHTML = '<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#efe9dc;z-index:99999"><div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(26,26,26,0.5)">KTB Media</div></div>';
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
