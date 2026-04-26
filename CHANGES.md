# Zmiany KTB Media

## Co zostało dodane

- Poprawka indeksowania: ujednolicone canonical/OG/hreflang i sitemap na adresy ze slashem, np. `/o-nas/`.
- Poprawka routingu React: wejście bezpośrednio na `/o-nas/`, `/blog/`, `/realizacje/` i podstrony nie wpada już po załadowaniu JS w 404.
- `_redirects` z jednorazowymi 301 z wersji bez slasha na wersję kanoniczną ze slashem.
- `404.html` oraz komponent `NotFoundPage` w `app.js` - custom 404 z animowanym SVG auta i licznikiem wejść.
- `AudienceBlocks` w `app.js`, nowe treści w `content.js` i `content/site.json`, pola CMS w `admin/config.yml` - sekcje "Dla kogo pracujemy" i "Z kim nie współpracujemy" na home oraz `/o-nas`.
- Rozszerzone case studies w `content.js` i `content/site.json` - `duration`, `scope`, `clientQuote`, `timeline`, `chartData`.
- `CaseChart` w `app.js` oraz nowe style w `styles.css` - wykres before/after, timeline, zakres projektu i cytat klienta na stronach realizacji.
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
- Dowolny nieistniejący adres, np. `/nie-ma-takiej-strony/`, dla custom 404.

## Rzeczy ręczne po deployu

- Sprawdź w Netlify, czy Identity i Git Gateway nadal są włączone dla CMS.
- W panelu Decap CMS otwórz `Strona -> Wszystkie treści strony` i zapisz testową zmianę w landing page, żeby potwierdzić zapis do `content/site.json`.
- Placeholdery blogowe są poprawnymi plikami JPG 1600x900, ale można je później zastąpić realnymi zdjęciami z produkcji.
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
- Weryfikacja, że `sitemap.xml` zawiera nowe landingi i artykuły.
