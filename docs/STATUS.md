# Stan prac — 2026-10-15

## Wykonano
- Stały folder: /Users/radek/Documents/Codex/Projekty/ktbmedia-site, sklonowany z aktualnego GitHub main fb1a75f.
- AGENTS.md, docs/PROJECT.md oraz docs/ADMIN.md przechowują kontekst, decyzje, architekturę i obsługę CMS.
- Sekcja KTBmedia w pasku Codexa zawiera trzy powiązane czaty. To sekcja organizacyjna; folder nie został zarejestrowany jako projekt w interfejsie aplikacji. Narzędzia nie udostępniają tworzenia projektów, a sterowanie interfejsem Codexa jest zablokowane.
- Globalne przełączniki kategorii marketing/apps/web i pojedynczych realizacji w Decap CMS, wspólne dla PL/EN.
- Bigmot i MójTeam ustawione jako niewidoczne, zgodnie z potwierdzeniem użytkownika. W aktualnym CMS Bigmot był usunięty: przywrócono zachowane treści z fallbacku wyłącznie do ukrytej realizacji, aby można ją było znów włączyć.
- Katalogi, polecane realizacje i następne projekty respektują widoczność. Puste kategorie znikają.
- Build publikuje dist/, pomija ukryte podstrony, usuwa ich statyczne linki i wpisy JSON-LD/llms.txt/sitemap oraz dodaje wymuszone reguły HTTP 404 Netlify.
- Fallback content.js zsynchronizowany z aktualną treścią CMS, aby timeout pobierania nie pokazywał starych treści.

## Walidacja
- node scripts/check-visibility.mjs: PASS. Ukrycie i przywrócenie, oba języki, ukrycie wszystkich kategorii, starszy config bez visibility, zgodność builda i sitemap.
- node --check: app.js, content.js, cms-hydrator.js i skrypt builda — OK.
- JSON-LD: 177 bloków parsuje się prawidłowo; mapy XML są poprawne.
- Podgląd w przeglądarce: 9 realizacji marketingowych, 4 aplikacje, 7 stron WWW; brak Bigmot i MójTeam; wersje PL/EN działają, brak zarejestrowanych błędów konsoli.
- Końcowy build: 67 adresów (18 stron, 33 blogi, 16 adresów w mapie realizacji, wliczając katalog).
- Reguły HTTP 404 są przygotowane w _redirects; wymagają potwierdzenia po rzeczywistym wdrożeniu Netlify. Lokalny prosty serwer nie wykonuje reguł Netlify.

## Wdrożenie — ZAKOŃCZONE
15 października 2026, 11:09 Europe/Warsaw: Netlify potwierdził Published.
GitHub main: d7eca4cf9c3dacb2f5b405f456de88bb9ad690ea.
Deployment: 6ad09826c6ebe913848b21b0.
https://app.netlify.com/projects/ktbmedia/deploys/6ad09826c6ebe913848b21b0

Zapis przez zalogowaną przeglądarkę właściciela, w czterech commitach (scripts, admin, content, końcowe pliki). Poprzednia blokada dostępu została rozwiązana tą drogą; lokalny helper Git nadal wymaga osobnego uporządkowania, jeżeli będzie potrzebny git push z terminala. Nie odczytywano ani nie kopiowano danych logowania.
Lokalny kod połączono z origin/main bez konfliktów; dokumentacja projektu pozostaje lokalna.

## Kontrola produkcji po wdrożeniu
- /realizacje/: HTTP 200, 9 marketing / 4 aplikacje / 7 stron WWW; bez Bigmot i MójTeam.
- /realizacje/bigmot/: HTTP 404.
- /realizacje/digital/mojteam/: HTTP 404.
- /realizacje/digital/ktbtask/: HTTP 200.
- /sitemap-realizacje.xml: HTTP 200, bez ukrytych adresów.
- /content/site.json: HTTP 200, oba projekty visible=false.
- /admin/config.yml: HTTP 200, nowe pola visibility obecne.
- Przeglądarka: potwierdzono działający katalog aplikacji, zapisano zrzut w outputs bieżącego czatu.

## Następne kroki
1. W Codexie dodać istniejący folder /Users/radek/Documents/Codex/Projekty/ktbmedia-site jako projekt; w nowych czatach korzystać z tego folderu.
2. Zarządzać widocznością w /admin/: Strona → Wszystkie treści strony → Widoczność realizacji (wspólna dla PL i EN).
3. Przy nowej zmianie CMS poczekać na deploy Netlify i zweryfikować produkcję; zapisać wynik tutaj.
