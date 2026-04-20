/**
 * KTB Media CMS Hydrator
 *
 * Pobiera treści z Supabase jeśli skonfigurowane. Łączy z lokalnym COPY
 * (fallback dla pól których jeszcze nie ma w bazie).
 *
 * Uruchamiany między content.js a app.js — przed pierwszym renderem React.
 */
(function () {
  const persistedCfg = {
    SUPABASE_URL: window.localStorage ? (localStorage.getItem('sb_url') || '') : '',
    SUPABASE_ANON_KEY: window.localStorage ? (localStorage.getItem('sb_key') || '') : ''
  };
  const cfg = { ...(window.KTB_CMS_CONFIG || {}), ...persistedCfg };
  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    // Brak konfiguracji - używamy lokalnego COPY, bez CMS
    return;
  }
  if (!window.supabase || !window.supabase.createClient) {
    console.warn('[KTB CMS] Supabase client nie jest dostępny');
    return;
  }
  if (!window.COPY) {
    console.warn('[KTB CMS] COPY nie istnieje - content.js się nie załadował');
    return;
  }

  // Deep merge - nadpisuje wartości z source, ale zachowuje lokalne jeśli w source brak
  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    const out = Array.isArray(target) ? [...target] : { ...target };
    for (const key of Object.keys(source)) {
      const sv = source[key];
      const tv = target[key];
      if (Array.isArray(sv)) {
        // Array - zawsze bierzemy z source (żeby móc usuwać/dodawać items)
        out[key] = sv;
      } else if (sv && typeof sv === 'object') {
        out[key] = deepMerge(tv || {}, sv);
      } else if (sv !== undefined && sv !== null && sv !== '') {
        out[key] = sv;
      }
    }
    return out;
  }

  // Adapter: admin.html zapisuje dane w strukturze płaskiej (np. pl.portfolio = [...]),
  // ale content.js ma strukturę zagnieżdżoną (pl.portfolio = { items: [...], label, title1 }).
  // Konwertujemy strukturę płaską -> do formy którą rozumie deepMerge z oryginalnym COPY.
  function adaptFromCms(langData) {
    if (!langData || typeof langData !== 'object') return null;
    const out = {};

    // Jeśli array -> to z panelu -> zapakuj do { items: [] }
    // Jeśli object z .items -> to już pełna struktura z content.js
    ['portfolio', 'blog', 'services', 'team'].forEach(key => {
      const val = langData[key];
      if (!val) return;
      if (Array.isArray(val)) {
        out[key] = { items: val };
      } else if (typeof val === 'object') {
        out[key] = val;
      }
    });

    // Contact adapter: panel trzyma płasko (email, phone, address, facebook, instagram, linkedin)
    // content.js trzyma jako bigEmail + details[] + (footer socials)
    if (langData.contact && typeof langData.contact === 'object') {
      const c = langData.contact;
      // Jeśli ma już strukturę content.js (bigEmail, details) -> pass through
      if (c.bigEmail || c.details) {
        out.contact = c;
      } else {
        // Płaska struktura z panelu -> zbuduj details
        out.contact = {};
        if (c.email) out.contact.bigEmail = c.email;
        // details dodajemy tylko jeśli coś jest
        const details = [];
        const pushDetail = (k, v, href) => { if (v) details.push({ k, v, href }); };
        pushDetail('Telefon', c.phone, c.phone ? 'tel:' + c.phone.replace(/\s+/g, '') : null);
        pushDetail('Adres', c.address);
        pushDetail('Facebook', 'Zobacz profil', c.facebook);
        pushDetail('Instagram', '@ktbmediaeu', c.instagram);
        pushDetail('LinkedIn', 'Zobacz profil', c.linkedin);
        if (details.length) out.contact.details = details;
      }

      // Zaktualizuj także footer.socials linki (odrębnie dodaję po mergu)
      out.__contactSocials = {
        facebook: c.facebook,
        instagram: c.instagram,
        linkedin: c.linkedin
      };
    }

    // Inne klucze - pass through
    Object.keys(langData).forEach(k => {
      if (!['portfolio', 'blog', 'services', 'team', 'contact'].includes(k)) {
        out[k] = langData[k];
      }
    });

    return out;
  }

  function applyContactSocials(lang, socials) {
    if (!socials) return;
    const dst = window.COPY[lang];
    if (dst && dst.footer && Array.isArray(dst.footer.socials)) {
      dst.footer.socials.forEach(s => {
        if (s.n === 'Facebook' && socials.facebook) s.h = socials.facebook;
        else if (s.n === 'Instagram' && socials.instagram) s.h = socials.instagram;
        else if (s.n === 'LinkedIn' && socials.linkedin) s.h = socials.linkedin;
      });
    }
  }

  // Tworzymy synchroniczny request żeby uniknąć race z app.js
  // Użyjemy XHR z async=false? - nie, to źle. Użyjemy promise + rerenderu
  const client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);

  // Flaga do kontroli renderu
  window.KTB_CMS_LOADING = true;

  // Opóźniamy ReactDOM.createRoot - przechwytujemy
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
        // Pokazujemy loader
        el.innerHTML = '<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:var(--bg,#efe9dc);z-index:99999"><div style="font-family:monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(26,26,26,0.6)">Ładowanie treści…</div></div>';
      } else {
        origRender(jsx);
      }
    };
    // Exposed dla hydratora
    window.__ktbRoot = { root, origRender };
    return root;
  };

  // Pobieramy dane
  client
    .from('site_content')
    .select('content')
    .eq('id', 'main')
    .single()
    .then(({ data, error }) => {
      window.KTB_CMS_LOADING = false;
      if (error) {
        console.warn('[KTB CMS] Błąd pobierania:', error.message);
      } else if (data && data.content && typeof data.content === 'object') {
        // Adaptuj strukturę CMS -> content.js, potem merge
        const adaptedPl = data.content.pl ? adaptFromCms(data.content.pl) : null;
        const adaptedEn = data.content.en ? adaptFromCms(data.content.en) : null;
        if (adaptedPl) {
          const socials = adaptedPl.__contactSocials;
          delete adaptedPl.__contactSocials;
          window.COPY.pl = deepMerge(window.COPY.pl, adaptedPl);
          applyContactSocials('pl', socials);
        }
        if (adaptedEn) {
          const socials = adaptedEn.__contactSocials;
          delete adaptedEn.__contactSocials;
          window.COPY.en = deepMerge(window.COPY.en, adaptedEn);
          applyContactSocials('en', socials);
        }
        console.log('[KTB CMS] Treści z Supabase załadowane');
      }
      // Teraz renderujemy
      if (pendingRender && window.__ktbRoot) {
        window.__ktbRoot.origRender(pendingRender);
      }
    })
    .catch((err) => {
      window.KTB_CMS_LOADING = false;
      console.error('[KTB CMS] Błąd:', err);
      if (pendingRender && window.__ktbRoot) {
        window.__ktbRoot.origRender(pendingRender);
      }
    });

  // Fallback timeout - jeśli request się zawiesi, po 3s i tak renderujemy
  setTimeout(() => {
    if (window.KTB_CMS_LOADING) {
      window.KTB_CMS_LOADING = false;
      console.warn('[KTB CMS] Timeout - renderuję z lokalnym content');
      if (pendingRender && window.__ktbRoot) {
        window.__ktbRoot.origRender(pendingRender);
      }
    }
  }, 3000);
})();
