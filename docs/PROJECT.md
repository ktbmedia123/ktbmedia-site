# KTBmedia site

## Cel i adresy
Strona agencji marketingowej KTB Media. Produkcja: https://ktbmedia.eu
Repozytorium: https://github.com/ktbmedia123/ktbmedia-site (main).
Hosting: Netlify, automatyczne wdrożenia po aktualizacji GitHub.
CMS: Decap CMS przez Netlify Git Gateway, panel /admin/.

## Architektura
Pełne HTML generowane podczas builda z komponentów React w app.js (bez JSX i bez bundlera). npm ci; przypięte zależności builda w package-lock.json. Obsługa i kontrola SEO: docs/SEO.md.
Treści PL/EN w content/site.json; content.js to fallback, cms-hydrator.js pobiera dane przed pierwszym renderem. Build dołącza wczesną osłonę startu (scripts/page-boot.mjs); App zdejmuje ją w useLayoutEffect. Podgląd pełnego zachowania przez dist po buildzie, nie surowy katalog źródeł.
Aplikacje i strony WWW są opisane w DIGITAL_CASES w app.js.
Landingi: landing-configs.js i treści CMS. Marine ma wspólny renderer marine-landing.js dla builda i React; obsługa w docs/MARINE.md. Style: styles.css.
Proces: osobny dokument /proces/, Canvas 2D + DOM, źródła w proces/. Menu wykonuje pełną nawigację; ?lang=en zachowuje język.
Realizacje: marketing, aplikacje, strony WWW; katalog /realizacje/. Pięć rozbudowanych case studies korzysta z opcjonalnego modelu editorial w CMS; format i źródła: docs/CASE_STUDIES.md.
Mapy: sitemap.xml oraz sitemap-pages.xml, sitemap-blog.xml, sitemap-realizacje.xml.

## Historia / decyzje
Odzyskany czat: „KTBmedia site”, 019dbba4-7815-7d62-aafb-cb4ee86b35d5.
Drugi czat: „KTBmedia site (2)”, 01a13eb1-0867-7b42-a4d0-59506855f2bd.
Oba zakończyły się przepełnieniem kontekstu. Nie należy ich kopiować w całości do nowego czatu.
Stary folder pozostawiono jako archiwum: /Users/radek/Documents/Codex/2026-04-23/files-mentioned-by-the-user-ktbmedia.
Nowy folder został sklonowany z aktualnego main (początkowo fb1a75f), zamiast kopiowania potencjalnie nieaktualnych treści z archiwum.

Hero ma zostać „Marka, którą czuć w sieci.” i wcześniejszy lead o zewnętrznym dziale marketingu.
Wcześniejsze prace: mobilne hero, favicon, CMS, landingi lokalne i automotive, blogi, SEO/GEO, llms.txt oraz sitemap.
W sierpniu 2026 zgłoszono sitemap do Google Search Console; stan Google wymaga oddzielnego sprawdzenia, jeśli użytkownik o to poprosi.
15 października 2026 użytkownik potwierdził, że „Bigteam” oznacza MójTeam: ukryć MójTeam i Bigmot, zachowując możliwość przywrócenia w CMS.

## Ciągłość pracy
Projekt i dokumentacja mają trwać niezależnie od długości pojedynczego czatu.
Przy nowej rozmowie wybierz ten sam folder i poproś o przeczytanie AGENTS.md oraz docs/STATUS.md.
Aktualizuj stan po istotnym zadaniu. Historia Git przechowuje zmiany kodu, dokumentacja przechowuje decyzje i następne kroki.
W pasku bocznym Codexa jest sekcja „KTBmedia” z dotychczasowymi czatami; sekcja porządkuje rozmowy, nie jest zarejestrowanym projektem aplikacji.
