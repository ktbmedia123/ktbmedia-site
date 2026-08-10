# Zmiany KTB Media

## Co zostało dodane

- Portfolio v2: układ case-list z większym zdjęciem po lewej oraz blokami „Problem”, „Podejście”, zakres i wyniki po prawej.
- Usunięte pozostałości po cytacie klienta: `clientQuote`, etykiety `Cytat klienta`, style `case-client-quote` i pola testimoniali w CMS.
- GEO/AI search: dodany `llms.txt`, `content/geo-entity.json` i globalny JSON-LD `ktb-geo-entity-graph` na 33 publicznych stronach.
- GEO/AI bots: `robots.txt` jawnie dopuszcza GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-SearchBot i Google-Extended.
- GEO/Netlify: dodane nagłówki dla `/llms.txt` i `/content/geo-entity.json`; `sitemap.xml` ma `lastmod` ustawiony na `2026-06-23`.
- Portfolio: nowe karty realizacji z miniaturą zdjęcia, zakresem, czasem projektu i najważniejszymi wynikami.
- Galerie case studies: zdjęcia są pokazywane w całości (`contain`) zamiast agresywnego kadrowania.
- Usunięte rekomendacje firm: sekcja testimoniali, dane `testi` i cytaty klientów `clientQuote` nie są już w paczce.
- Poprawka indeksowania: ujednolicone canonical/OG/hreflang i sitemap na adresy ze slashem, np. `/o-nas/`.
- Poprawka routingu React: wejście bezpośrednio na `/o-nas/`, `/blog/`, `/realizacje/` i podstrony nie wpada już po załadowaniu JS w 404.
- `_redirects` z jednorazowymi 301 z wersji bez slasha na wersję kanoniczną ze slashem.
- `404.html` oraz komponent `NotFoundPage` w `app.js` - custom 404 z animowanym SVG auta i licznikiem wejść.
- `AudienceBlocks` w `app.js`, nowe treści w `content.js` i `content/site.json`, pola CMS w `admin/config.yml` - sekcje "Dla kogo pracujemy" i "Z kim nie współpracujemy" na home oraz `/o-nas`.
- Rozszerzone case studies w `content.js` i `content/site.json` - `duration`, `scope`, `timeline`, `chartData`.
- `CaseChart` w `app.js` oraz nowe style w `styles.css` - wykres before/after, timeline i zakres projektu na stronach realizacji.
- Zaktualizowane czasy współprac: AutoCentrum Elektronowa i Remontowa Marine Design jako ciągła współpraca, PulseGT jako 1 rok.
- Dodane nowe realizacje: Grupa Janisz, GT Serwis Barniewice, BIG MOT, Extreme Tyres i DDP Supply wraz ze statycznymi stronami SEO, wpisami w portfolio i sitemapą.
- Dodana sekcja „Zaufali nam” na stronie głównej: logo wall 25 marek z edycją w CMS i fallbackiem tekstowym, jeśli zewnętrzny favicon/logo nie załaduje się.
- `landing-configs.js` oraz 6 statycznych landing pages SEO:
  - `agencja-marketingowa-gdansk/index.html`
  - `agencja-marketingowa-pruszcz-gdanski/index.html`
  - `agencja-marketingowa-tczew/index.html`
  - `marketing-dla-warsztatu-samochodowego/index.html`
  - `marketing-dla-serwisu-samochodowego/index.html`
  - `marketing-dla-dealera-samochodowego/index.html`
- Linki do landing pages w stopce oraz wpisy w `sitemap.xml`.
- Kolekcja/sekcja CMS do edycji landing pages w `admin/config.yml`.
- 12 nowych artykułów blogowych w `content.js`, `content/site.json` i jako statyczne strony w `blog/*/index.html`.
- 12 placeholderów obrazów blogowych 1600x900 w `assets/blog-*.jpg`.
- Wpisy nowych artykułów w `sitemap.xml`.
- Portfolio case files: przebudowany desktopowy układ kart realizacji. Każda karta ma teraz duży, niekadrowany materiał wizualny, zwięzły opis, czas współpracy, jeden kluczowy efekt i pełny zakres.
- Case studies: galeria zaczyna się od najmocniejszego materiału, pokazuje obrazy bez agresywnego cropu i ma nowy blok „Co powstało”.
- Zawartość bloków „Co powstało”: social media (Facebook, Instagram, LinkedIn), kreacje reklamowe, brandbooki i księgi znaku, katalogi, druki, POS i merch, foto-wideo, materiały z drona oraz aktywacje targowe - zależnie od realizacji.
- CMS: pola `duration`, `scope` i `deliverables` są edytowalne przy każdej realizacji w `admin/config.yml`.
- Cache busting: adresy CSS, `app.js` i `content.js` w 39 statycznych HTML mają wersję `20260810-1745`.

## Nowe URL-e do testowania

- `/agencja-marketingowa-gdansk/`
- `/agencja-marketingowa-pruszcz-gdanski/`
- `/agencja-marketingowa-tczew/`
- `/marketing-dla-warsztatu-samochodowego/`
- `/marketing-dla-serwisu-samochodowego/`
- `/marketing-dla-dealera-samochodowego/`
- `/blog/ile-kosztuje-google-ads-dla-warsztatu-samochodowego-2026/`
- `/blog/google-business-profile-dla-warsztatu-checklista/`
- `/blog/meta-ads-vs-google-ads-dla-serwisu-lokalnego/`
- `/blog/seo-lokalne-dla-warsztatu-top-3-google-maps/`
- `/blog/jak-nagrac-wideo-z-klientem-mechanikiem/`
- `/blog/kiedy-rebrandowac-warsztat/`
- `/blog/instagram-dla-warsztatu-samochodowego/`
- `/blog/strona-internetowa-dla-serwisu-samochodowego-2026/`
- `/blog/jak-pozyskac-wiecej-recenzji-google-automotive/`
- `/blog/marketing-dla-dealera-samochodowego-nowe-uzywane/`
- `/blog/kampania-meta-ads-dla-warsztatu-case-study-budzet/`
- `/blog/pozycjonowanie-firmy-motoryzacyjnej-w-trojmiescie/`
- `/realizacje/grupa-janisz/`
- `/realizacje/gt-serwis-barniewice/`
- `/realizacje/bigmot/`
- `/realizacje/extreme-tyres/`
- `/realizacje/ddp-supply/`
- `/` — sekcja „Zaufali nam” między prezentacją a procesem.
- Dowolny nieistniejący adres, np. `/nie-ma-takiej-strony/`, dla custom 404.

## Rzeczy ręczne po deployu

- Sprawdź w Netlify, czy Identity i Git Gateway nadal są włączone dla CMS.
- W panelu Decap CMS otwórz `Strona -> Wszystkie treści strony` i zapisz testową zmianę w landing page, żeby potwierdzić zapis do `content/site.json`.
- Placeholdery blogowe są poprawnymi plikami JPG 1600x900, ale można je później zastąpić realnymi zdjęciami z produkcji.
- Nowe realizacje mają lokalne grafiki SVG przygotowane na bazie zakresu projektu; po dostarczeniu oryginalnych zdjęć można je podmienić w `assets/` i w polach `images`.
- Dla jeszcze mocniejszego portfolio warto później dodać źródłowe screeny konkretnych postów, nagrania z planu i finalne mockupy druków - układ oraz pola CMS są już na to gotowe.
- Po deployu wyślij zaktualizowany `sitemap.xml` do Google Search Console.
- W GSC sprawdzaj i zgłaszaj do indeksowania wersje ze slashem, np. `https://ktbmedia.eu/o-nas/`.
- Przetestuj formularz kontaktowy po deployu, mimo że nie był modyfikowany.

## Checklist testów

- Klik przez każdy landing page z linków w stopce.
- Otwarcie każdego z 12 nowych artykułów z `/blog/`.
- Sprawdzenie 404 przez ręczne wejście w nieistniejący URL.
- Sprawdzenie `/`, `/o-nas`, `/realizacje`, pojedynczych case studies i `/kontakt`.
- Responsywność: 380px, 720px, 1440px.
- W CMS: edycja widoczności sekcji, audience blocks i pól landing pages.
- Weryfikacja, że `sitemap.xml` zawiera nowe landingi, artykuły i nowe realizacje.
