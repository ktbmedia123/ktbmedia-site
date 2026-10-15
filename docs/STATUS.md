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

## Wdrożenie — BLOKADA DOSTĘPU
Zmiany są lokalne i przetestowane, ale NIE zostały opublikowane.
GitHub connector zgłasza pull=true, push=false dla repozytorium ktbmedia123/ktbmedia-site.
Git push --dry-run również nie działa: skonfigurowany helper wskazuje usunięty plik /tmp/gh-cli-2.97.0/gh_2.97.0_macOS_arm64/bin/gh, a Git nie ma dostępnych danych logowania.
Nie zmieniano globalnej konfiguracji ani danych logowania.

## Następne kroki
1. W Codexie dodać istniejący folder /Users/radek/Documents/Codex/Projekty/ktbmedia-site jako projekt; w nowych czatach korzystać z tego folderu.
2. Przywrócić logowanie GitHub z prawem zapisu do repo. Pobrać najnowszy main, zachować ewentualne nowe zmiany CMS i wysłać lokalny commit.
3. Sprawdzić pomyślny deploy Netlify (build command i publish directory z netlify.toml).
4. Na produkcji sprawdzić katalog, /admin/, HTTP 404 dla Bigmot/MójTeam i brak tych URL w sitemap.
5. Zaktualizować ten dokument o commit wdrożenia i wynik kontroli produkcyjnej.
