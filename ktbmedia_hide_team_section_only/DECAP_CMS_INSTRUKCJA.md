# KTB Media — Git-based CMS (Decap) · Instrukcja

## Co się zmieniło

Z **Supabase** (runtime database) → na **Decap CMS + Git Gateway** (commity do repo).

**Plusy:**
- Treści = commity w GitHubie = wersjonowanie za darmo
- Zero runtime dependencies (strona działa bez CMS jeśli padnie)
- Backup = klonowanie repo
- Darmowy tier Netlify wystarczy na długo

**Minusy:**
- Każda edycja wyzwala nowy build (30–60 s)
- Zmiany widoczne **po build**, nie real-time

---

## Struktura projektu

```
/
├── admin/              # Decap CMS panel
│   ├── index.html      # Minimalny szkielet (Decap + Identity widget)
│   └── config.yml      # Schema treści (PL + EN, wszystkie sekcje)
│
├── content/
│   └── site.json       # Treści strony — EDYTOWANE przez CMS, commitowane do repo
│
├── content.js          # Fallback/default - oryginalne treści, używane gdy site.json niedostępne
├── cms-hydrator.js     # Fetchuje /content/site.json i merguje do global COPY przed renderem
├── app.js              # React app
├── styles.css
├── index.html          # Home (z noscript SEO content)
│
├── realizacje/         # Statyczne HTML per-route (SEO dla direct hits)
├── blog/
├── kontakt/
├── o-nas/
├── polityka-prywatnosci/
│
├── assets/             # Grafiki (logo, founder photos, case studies, etc.)
├── netlify.toml        # Konfiguracja Netlify (headers, redirects, SPA fallback)
└── sitemap.xml / robots.txt
```

**Pliki które już NIE istnieją** (Supabase legacy): `admin.html`, `admin.js`, `cms-config.js`, `SUPABASE_INSTRUKCJA.md`, `supabase-setup.sql`, `WORDPRESS_INSTRUKCJA.md`.

---

## Jak to działa w runtime

1. User wchodzi na `ktbmedia.eu`
2. `index.html` ładuje: `content.js` (defaults) → `cms-hydrator.js` → `app.js`
3. Hydrator przechwytuje `ReactDOM.createRoot`, pokazuje cichy loader („KTB Media")
4. Fetch `GET /content/site.json`
5. Deep merge site.json → global `COPY` (nadpisuje co jest w JSON, zachowuje resztę z content.js)
6. React renderuje z finalnym `COPY`

**Bezpiecznik:** jeśli `site.json` niedostępny albo fetch się zawiesi — po 3 s renderuje z `content.js`. Strona nigdy nie zostanie pusta.

---

## Flow edycji treści

1. Wchodzisz na `ktbmedia.eu/admin/`
2. Klikasz **Login with Netlify Identity**, loguje się (email + hasło z zaproszenia)
3. Wybierasz zakładkę (Portfolio, Blog, itd.) — edytujesz
4. Klikasz **Publish**
5. Decap commituje do `main` branch: `Update content/site.json`
6. Netlify wykrywa commit, buduje, deployuje (30–60 s)
7. Nowe treści online

**Możesz też edytować bezpośrednio plik `content/site.json` w VS Code i pushować.** Efekt ten sam.

---

## Weryfikacja po deployu

**Checklist:**
- [ ] `https://ktbmedia.eu/` — ładuje się, pokazuje treści
- [ ] `https://ktbmedia.eu/admin/` — pokazuje login Decapa (nie pusty ekran!)
- [ ] DevTools → Network → przy ładowaniu strony widać GET `/content/site.json` z kodem 200
- [ ] DevTools → Console → log `[KTB CMS] Treści z site.json załadowane` (lub `Nie udało się pobrać... używam lokalnego content.js` jeśli coś nie tak)
- [ ] `https://ktbmedia.eu/realizacje/autocentrum-elektronowa` — działa (statyczny HTML + SPA fallback)
- [ ] `view-source:` strony pokazuje JSON-LD z adresem, FAQ, lokalizacjami

**Gdy login do CMS nie działa:**
1. Sprawdź że Netlify Identity jest włączone: Site → Identity → Enable Identity
2. Git Gateway włączony: Site → Identity → Services → Git Gateway → Enable
3. Zaproszenie wysłane: Identity → Invite users → mail@domena.pl
4. Email dotarł (sprawdź spam), kliknąłeś link, ustawiłeś hasło
5. Przy loginie nie widzisz błędu CORS — jeśli tak, dodaj domenę w Identity → Settings → External providers

---

## SEO lokalizacyjne — co jest wstrzyknięte

**Keywords pokryte w meta, JSON-LD i noscript content:**

- agencja marketingowa Gdańsk
- agencja marketingowa Pruszcz Gdański
- agencja marketingowa Tczew
- marketing dla motoryzacji
- marketing dla warsztatu samochodowego
- marketing dla serwisu samochodowego
- marketing dla blacharza-lakiernika
- marketing dla dealera samochodowego
- SEO lokalne Gdańsk / Pruszcz Gdański / Tczew
- Google Ads Gdańsk, Meta Ads Gdańsk

**Gdzie:**

1. `<title>` + `<meta description>` + `<meta keywords>` w `index.html`
2. `geo.position`, `geo.region`, `ICBM` — meta dla lokalnych wyszukiwarek
3. JSON-LD `LocalBusiness` z `areaServed: [Gdańsk, Gdynia, Sopot, Pruszcz Gdański, Tczew, Rumia, Wejherowo, Starogard Gdański, Trójmiasto, Pomorskie, Polska]`
4. JSON-LD `knowsAbout` — 18 fraz kluczowych
5. JSON-LD `hasOfferCatalog` — 5 usług (marketing warsztatu, marketing motoryzacji, SEO lokalne, Google/Meta Ads, strony WWW)
6. JSON-LD `FAQPage` — 8 pytań (w tym dedykowane: „marketing dla warsztatów", „obsługujecie Tczew?", „SEO lokalne?")
7. `<noscript>` content (widoczny dla crawlerów, gdy JS wyłączone):
   - `H1`: „Agencja marketingowa Gdańsk, Pruszcz Gdański, Tczew — KTB Media"
   - Sekcja „Specjalizacja: marketing dla motoryzacji"
   - Sekcja „Obszar działania — Gdańsk, Pruszcz Gdański, Tczew, Trójmiasto"
8. `useSEO` hook w React — dynamicznie zmienia `<title>` i meta per ścieżka (`/realizacje` → „Realizacje — case studies marketingu motoryzacji", `/kontakt` → „Kontakt — darmowa wycena marketingu Gdańsk", etc.)

---

## Po deployu — akcje w Google

1. **Google Search Console** → Właściwości → Dodaj domenę `ktbmedia.eu` (albo „Dodaj prefiks URL")
2. Zweryfikuj właściwość (tag DNS albo plik HTML)
3. **Sitemap** → Dodaj nowy sitemap → `https://ktbmedia.eu/sitemap.xml`
4. **Inspekcja URL** → wprowadź `https://ktbmedia.eu/` → Sprawdź URL → Poproś o zaindeksowanie
5. Powtórz dla: `/realizacje`, `/blog`, `/kontakt`, `/o-nas`
6. **Google Business Profile** (jeśli nie masz) — załóż wizytówkę dla adresu Grunwaldzka 107, Pruszcz Gdański, kategorie: „Agencja marketingowa", „Usługi reklamowe". NAP (Name-Address-Phone) dokładnie ten sam co na stronie.
7. **Bing Webmaster** — to samo
8. **Rich Results Test** — https://search.google.com/test/rich-results?url=https://ktbmedia.eu/ — zweryfikuj że widzi LocalBusiness, FAQPage, Organization

---

## Dodawanie nowego case study / artykułu blog

**Opcja A (przez CMS):**
1. `/admin/` → Portfolio (albo Blog) → `New item`
2. Wypełnij pola, upload 3 obrazy (jeśli case)
3. Publish
4. Po deploy: `https://ktbmedia.eu/realizacje/NOWY-SLUG` będzie działać (SPA fallback z netlify.toml)

**Opcja B (dla najlepszego SEO — manual):**
1. Po publish w CMS — skopiuj jakikolwiek istniejący folder w `/realizacje/` (np. `pmo-lubricants/`)
2. Zmień nazwę na nowy slug
3. Otwórz `index.html` w nowym folderze, podmień `<title>`, `<meta>`, `<h1>`, `<p>` na treści nowego klienta
4. Commit + push
5. Nowy case będzie miał własny statyczny HTML z meta dla Google (direct hit bez JS będzie widoczny dla crawlera natychmiast)

Opcja A wystarczy w 99% przypadków — React renderuje poprawne tagi przez `useSEO` po 50 ms od wejścia na stronę, Google to widzi.

---

## Co dalej (jeśli chcesz później)

- **Landing page per lokalizacja** — `ktbmedia.eu/agencja-marketingowa-gdansk`, `...-tczew`, `...-pruszcz-gdanski` — każda z 500-800 słowami unikalnego contentu pod frazę kluczową. Szybka wygrana dla SEO lokalnego.
- **Landing page per branża** — `ktbmedia.eu/marketing-dla-warsztatu-samochodowego`, `.../marketing-dla-serwisu` — j.w.
- **Google Business Profile** — posty co tydzień (CMS może mieć sekcję „GBP posts")
- **Reviews integration** — pobranie opinii Google na stronę jako dynamic content
