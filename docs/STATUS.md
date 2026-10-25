# Aktualizacja — 2026-10-25: Proces jako publiczna podstrona

- Przeniesiono gotową animację do /proces/ (proces/index.html, universe.css, universe.js). Menu Proces na komputerze i telefonie prowadzi do osobnego dokumentu; hero strony głównej pozostaje bez zmian.
- Pod kropką „Zacznij Proces” / „Start the Process”. Rozbudowano przejście do 2,1 s: smugi, pierścienie tunelu, rozszerzenie kropki, fala i pojawianie się konstelacji. Bez plusa/gwiazdki; oryginalne logo i kursor zachowane.
- 48 haseł PL/EN, w tym 23 nowe. Dwie konstelacje po 24 elementy, filtry Strategia/Kreacja/Digital i przycisk Więcej pomysłów.
- Każde hasło ma konkretny cel wśród 18 opublikowanych case studies i artykułów. Etykieta linku opisuje cel; nie ma wspólnego odsyłania do kontaktu. Wszystkie cele istnieją w dist i są widoczne.
- Zachowanie języka w przejściach przez ?lang=en. Na telefonie opis jest przypięty do widoku, także po kliknięciu hasła na dole strony.
- Canonical, opis, OG, H1, no-JS fallback, /proces → /proces/ i sitemap (68 adresów). Analityka zgody jest wstrzykiwana przez dotychczasowy build.
- Walidacja lokalna Playwright: normalne wejście, reduced motion, 24+24 hasła, filtry, reset, linki PL/EN, menu desktop/mobile i brak overflow przy 390 px — PASS. node --check, diff --check, build i kontrola wszystkich 48 celów — PASS.
- Opublikowano przez git push na istniejący main: ac100b6e017d64bd805a199b2e26753847a9c767. GitHub/Netlify automatyczne wdrożenie. Produkcja /proces/ zwraca HTTP 200 i nowy napis.
- Kontrola produkcji w przeglądarce: menu główne → Proces, nowa etykieta, 48 haseł i przejście do właściwego artykułu — PASS. Zrzuty w output/playwright/proces-production-*.png.
- Lokalne źródła projektu zsynchronizowane z origin/main. Prototypes/universe/index.html jest tylko lokalnym przekierowaniem do /proces/; build nadal wyklucza prototypes i output.

---

# Aktualizacja — 2026-10-25: Wszechświat, poprawka wejścia

- Zgodnie z uwagą użytkownika usunięto nagłówek, ramę, instrukcję, plus i centralną gwiazdkę. Start: czarna kropka pośrodku pustej kremowej strony, płynnie zmieniająca kolor na złoto #e8a838.
- Kliknięcie uruchamia 1,65 s przejście przez powiększającą się kropkę do pełnoekranowej ciemnej przestrzeni. Następnie pojawiają się wcześniejsze hasła, orbity i filtry.
- Oryginalne logo assets/logo.png; kursor ring + kropka jak na stronie głównej, złoty hover, bez własnego kursora na dotyku. Wewnątrz złota kropka, po wybraniu hasła kremowa.
- Playwright: środek ekranu, normalne wejście, reduced motion, wybór hasła/zmiana koloru, Escape, reset i telefon 390 px bez overflow — PASS. Składnia JS OK. Podgląd w aplikacji odświeżony.
- Nadal lokalny prototyp; produkcja bez zmian.

---

# Aktualizacja — 2026-10-25: Wszechświat pomysłów (prototyp)

- Gotowy oddzielny prototyp w prototypes/universe/: index.html, universe.css, universe.js. Canvas 2D + przyciski DOM, bez zależności JS i bez Blendera.
- Pulsująca kropka otwiera animowaną przestrzeń z falą, cząstkami, orbitami i 25 hasłami. Hasła reagują na kursor, kliknięcie otwiera opis i link kontaktowy.
- Filtry Strategia/Kreacja/Digital, zwijanie z resetem filtra, pauza; wersje PL/EN; układ dotykowy z dwiema kolumnami na telefonie.
- Klawiatura: Tab/Enter, Escape zamyka opis i przywraca fokus. prefers-reduced-motion zatrzymuje animacje, renderowanie Canvas jest wstrzymywane poza ekranem i w ukrytej karcie.
- Kontrola Playwright: otwarcie opisu, filtr (8 strategii), reset (25 aktywnych haseł), Enter/Escape, PL/EN, reduced motion i brak poziomego overflow przy 390 px — PASS. Zrzuty lokalnie w output/playwright/.
- node --check i build PASS. Prototyp oraz output wyłączone z kopiowania do dist; brak zmian na produkcji. Oczekuje oceny wyglądu przed integracją z „O nas”.
- Podgląd: python3 -m http.server 8765 --bind 127.0.0.1, adres http://127.0.0.1:8765/prototypes/universe/.

---

# Aktualizacja — 2026-10-19: Google Analytics

- Utworzono i podłączono GA4 G-ZFT5BFB9EW do GTM-PHWKQGG7; GTM v2 opublikowany.
- Wdrożono analytics.js i wstrzyknięcie do publicznych HTML przez build; analityka uruchamia się dopiero po zgodzie, ustawienia cookies pozwalają odmówić lub cofnąć zgodę.
- Własne odsłony SPA z tytułem i referrerem; automatyczne odsłony historii i formularze wyłączone; Universal Analytics wstrzymany; user-provided data wyłączone.
- Netlify 6ad66206bbe583187531f76a: Deploy successful. GitHub main 0d20847.
- Testy zgody i SPA PASS; produkcja potwierdza brak loadera Google po odmowie i uruchomienie po zgodzie. GA4 realtime odebrał testowego użytkownika i pierwszą odsłonę.
- Szczegóły identyfikatorów i dalszej obsługi: docs/ANALYTICS.md. Dokumentacja pozostaje lokalnie w stałym folderze projektu.

---

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

Potwierdzenie końcowe: GA4 realtime odebrał dokładnie 2 odsłony — stronę główną i realizacje, każdą raz, z poprawnymi tytułami.
