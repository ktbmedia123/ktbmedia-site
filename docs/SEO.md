# Indeksowanie i statyczny HTML

## Build

- `npm ci`, następnie `npm run build`. Netlify instaluje przypięte zależności z package-lock.json i nadal publikuje wyłącznie dist/.
- `scripts/prerender-pages.mjs` renderuje dokumenty tym samym Reactem 18.3.1 i komponentami app.js co przeglądarka. Czyta aktualne content/site.json, widoczność i konfiguracje landingów; nie uruchamia efektów ani zapytań sieciowych.
- Tytuł i opis mają wspólną funkcję getSEOMetadata z aplikacją. FAQPage jest synchronizowany z faktycznie widocznymi details/summary; bez widocznych pytań nie jest publikowany. Wspólny renderer marine wymaga mapowania globalThis.KTBMarine na symulowane window w kontekście VM. W HTML są pełne opisy, artykuły, FAQ, nawigacja i stopka. Wartości liczników są docelowe. Animacje reveal w zapasowym dokumencie są odsłonięte.
- Katalog zawiera wszystkie dozwolone kategorie. Aplikacja pokazuje aktywny panel, a bez JS dostępne są wszystkie. Nieaktywne filmy nie mają src i nie odtwarzają się w tle.
- Dotychczasowa osłona startu pozostaje: gotowy React zastępuje prerender przed odsłonięciem. Bez JS lub przy awarii pozostaje pełny czytelny dokument. Hero zachowuje „Marka, którą czuć w sieci.”.
- Powiązane linki RMDC i DDP Supply prowadzą do marine i poradnika B2B. Pole relatedLinks jest edytowalne w CMS w PL/EN. Nie dodano nowych wyników liczbowych ani deklaracji współpracy.
- Strona Proces pozostaje osobnym dokumentem ze statycznym indeksem 57 pomysłów PL/EN.

## Angielskie adresy

Nowe wpisy CMS mają pełny dokument artykułu generowany przez `scripts/blog-document.mjs`. Statyczne szablony starszych wpisów zachowują ich dotychczasowe dane strukturalne. W `localized-routes.js` jest sześć par adresów bloga oraz `/en/maritime-marketing/`, `/en/work/rmdc/`, `/en/work/ddp-supply/` i `/en/contact/`. Build tworzy je z angielskich treści CMS i komponentów strony. Każda ma własny canonical, angielski HTML, metadane i dane strukturalne. Obie wersje zawierają wzajemne linki `hreflang` oraz zwykły odnośnik do zmiany języka. Wariant PL jest `x-default`. Ukrycie realizacji usuwa obie wersje.

Netlify zwraca 301 dla starych adresów tych stron z `?lang=en`. Przekazuje parametry do angielskiego dokumentu. Aplikacja usuwa z adresu zbędne `lang=en` i zachowuje parametry kampanii oraz fragment. Canonical i mapy wskazują czysty angielski adres. Pozostałe tłumaczenia korzystają z dotychczasowego parametru języka. Angielskie opisy realizacji należą do `sitemap-realizacje.xml`, a oferta i kontakt do `sitemap-pages.xml`.

## Daty w sitemapach

- seo/page-history.json zapisuje fingerprint znaczącej treści i jej datę; katalog seo/ nie trafia na hosting.
- Fingerprint obejmuje tekst, linki, media, metadata i schema. Ignoruje JS, CSS, klasy układu, stan animacji i identyfikatory wersji zasobów.
- Sam build nie zmienia dat. Znana wersja używa zapisanej daty. Zmieniona lub nowa wersja bez wiarygodnej daty nie otrzymuje opcjonalnego lastmod. Dotyczy to również samodzielnych publikacji z CMS; treść nadal trafia do HTML i sitemap.
- Przy rzeczywistej aktualizacji lokalnej: najpierw build, potem `node scripts/generate-sitemaps.mjs dist --record-changes`. Komitować zmieniony manifest wraz z treścią. Niezmienione fingerprinty zachowują poprzednie daty. Nie aktualizować wszystkich dat ręcznie.
- Pierwszy manifest 26.10.2026 odpowiada wdrożeniu pełnego HTML. Nie określa daty pierwotnej publikacji artykułów.

## Kontrola

- `npm run check:seo`: źródło CMS, H1, canonical, schema, wszystkie publiczne linki i brak osieroconych stron, pełny katalog, ukrycie oraz prawdziwe/opuszczane daty.
- `node scripts/check-visibility.mjs`: ukrycie, przywrócenie i wyłączenie grup, z odtworzeniem źródeł i końcowego builda.
- Kontrola przeglądarkowa: desktop/mobile, PL/EN, zakładki, filmy, bez JS, awaria/wolny app i brak migania, formularz bez wysyłania.

## Punkt odniesienia Search Console — 26.10.2026

Raport stron z 19.10: 34 zindeksowane, 55 wykluczonych. Wykryte bez skanu: 24 (w tym 2 celowo ukryte); zeskanowane bez indeksacji: 12 (11 podstron i sitemap.xml); historyczny błąd przekierowania: 15; prawidłowe przekierowania domeny: 3; noindex: stary /en/, obecnie 404.

Główna sitemap HTTPS miała błąd odczytu z 8.09, podobnie stary wpis HTTP. Podmapy działały: pages 18 adresów (odczyt 22.10), blog 33 (17.10), realizacje 16 (19.10). Aktualny zestaw ma 68 adresów, w tym Proces.

Przed poprawkami wszystkie 68 adresów HTTP 200, self-canonical, bez noindex. 67 wariantów bez końcowego ukośnika poprawnie przekierowywało do HTTP 200. Live test GSC: Kontakt i RMDC dostępne i możliwe do indeksacji; Kontakt poprawnie wyrenderowany. Ostatni zapisany skan RMDC: 1.05.2026.

Status zgłoszeń po wdrożeniu i SHA: docs/STATUS.md. Nie zmieniać poprawnych przekierowań ani przywracać ukrytych realizacji w celu zmniejszenia liczby wykluczeń. Zgłoszenie nie gwarantuje indeksacji; kolejne kontrole porównywać z tym punktem odniesienia.
