# Analityka KTBmedia — 19.10.2026

Produkcja: https://ktbmedia.eu. Google Analytics 4 na koncie Konto Google Ads (280092639).
Usługa: KTBmedia — ktbmedia.eu, ID 559539506. Strumień KTBmedia WWW, ID 16160626391.
Identyfikator pomiaru: G-ZFT5BFB9EW. Kontener: GTM-PHWKQGG7 (konto 6222719462, kontener 180567280).
Opublikowana wersja GTM: 2, „KTBmedia GA4 — pomiar SPA po zgodzie”.

## Zgoda i pomiar
analytics.js ładuje GTM dopiero po zgodzie na analitykę. Odmowa nie wysyła danych do Google. Reklamowe zgody pozostają denied. Decyzja jest przechowywana 180 dni w localStorage (ktb-analytics-consent-v1). Ustawienia cookies pozwalają zmienić decyzję; cofnięcie zgody czyści cookies GA i przeładowuje stronę. Panel /admin/ jest wyłączony z integracji.

Router wysyła ktb_page_view po zmianie trasy. GTM przekształca je w page_view z page_location, page_title i page_referrer. send_page_view=false. Pomiar zmian historii oraz interakcji formularzy wyłączony zarówno w strumieniu, jak i ustawieniach GTM. Dane przekazywane przez użytkowników (w tym automatyczne wykrywanie e-maili i telefonów) wyłączone. Stary Universal Analytics wstrzymany. Pozostają przewinięcia, linki wychodzące, filmy i pobrania po zgodzie.

Własne odsłony pomijają hash i parametry zapytania inne niż utm_source/medium/campaign/id/term/content. Nie należy dodawać danych osobowych do UTM ani ścieżek adresów. Nie dodawać drugiego bezpośredniego gtag ani GTM do HTML — build wstrzykuje analytics.js do publicznych HTML.

## Wdrożenie i walidacja
GitHub main: 0d2084742b8306a8fd9581eab469e6494c2b1a34 (poprzedni commit loadera dd11903ec8490c47a845534a487d7f60bd5b86b4).
Netlify: https://app.netlify.com/projects/ktbmedia/deploys/6ad66206bbe583187531f76a, „Deploy successful”.
Test JSDOM: PASS — brak Google przed zgodą i po odmowie, pojedynczy loader, deduplikacja SPA, tytuły/referrer, odfiltrowanie query, powrót i wygaśnięcie zgody, niedostępny localStorage.
Build i node --check: PASS. Produkcja w przeglądarce: baner, odmowa bez Google, zgoda ładuje właściwy GTM. GA4 realtime potwierdził 1 testowego użytkownika, page_view, session_start i first_visit.

Źródła: https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic oraz https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications

Potwierdzenie końcowe: GA4 realtime odebrał dokładnie 2 odsłony — stronę główną i realizacje, każdą raz, z poprawnymi tytułami.
