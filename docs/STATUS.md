# Aktualizacja — 2026-10-25: Powrót do wcześniejszego wejścia i dyskretny przycisk kontaktu

- Na życzenie użytkownika przywrócono klasyczne wejście 2,1 s z powiększeniem kropki, 150 smugami i 4 pierścieniami (wariant sprzed ostatniej soczewki). Bogatsze przewijanie galaktyk pozostaje.
- Całkowicie usunięto potrząsanie, czujnik, żądania zgody, przytrzymanie i pasek. Po 6 s w galaktyce wyłania się jedna zaokrąglona pigułka „Naciśnij, by nawiązać kontakt” / „Press to make contact”. Pojawienie 1,1 s bez pulsowania, pojedynczy klik/Enter/Spacja prowadzi przez dotychczasowe zakłócenia do kontaktu.
- Telefon: przycisk mieści się pod hasłami, zastępuje wskazówkę przewijania, a sterowanie przesuwa się niżej. Escape ukrywa; reset/wyjście z galaktyki kasuje timer. Języki, reduced motion i statyczny indeks 57 haseł zachowane.
- Walidacja: node --check, diff --check, build 68 adresów i 114 wpisów indeksu — PASS. Playwright normalne wejście, brak przycisku przed 6 s, desktop/390 px, 320×667 i 390×844 bez kolizji z hasłami we wszystkich galaktykach, PL/EN, click i klawiatura do właściwego kontaktu, Escape/reset — PASS.
- Publikacja GitHub main → Netlify: 3161728fc25ac260f09b78c7af41cc316cf340d4; zasoby 20261025-contact-button.
- Kontrola produkcji: normalne wcześniejsze wejście, brak przycisku przed 6 s, nowy napis i pojedynczy klik do /kontakt/, brak starego UI czujnika i błędów JS — PASS. Zrzut output/playwright/contact-pill-production.png.
- Szczegóły bieżącego zachowania w docs/PROCESS.md. Potrząsanie pozostaje wyłącznie historią poprzedniego wdrożenia.

---

# Aktualizacja — 2026-10-25: Filmowa galaktyka, potrząsanie do kontaktu i indeks SEO/GEO

- Jakość animacji zgodnie z preferencją użytkownika: pełniejsze wejście 3,4 s (420 promieni, 15 bram, 7 włókien i soczewka), także na telefonie. Bogatszy scroll: parallax, smugi i interpolacja atmosfery, z zachowaniem natywnych gestów i stabilnego svh.
- Po 3 s w galaktyce wskazówka PL „Potrząśnij wszechświatem. Porozmawiajmy.” / EN „Shake the universe for contact”. Pasek 2,5 s, drżenie i zakłócenia odsłaniają kontakt, potem prawdziwe /kontakt/ z językiem. Przytrzymanie przycisku działa też myszą/klawiaturą oraz przy odmowie/braku czujnika.
- Systemowe requestPermission dopiero po kliknięciu „Włącz potrząsanie”; cookies nie zastępują zgody czujnika. Reduced motion wyłącza drgania/glitch i skraca finał. Escape, zamknięcie, reset i opuszczenie galaktyki odpinają czujnik; brak niewidocznego ładowania.
- 57 haseł i opisów w każdym języku także w statycznym HTML: czytelny indeks pod animacją, konkretne linki, kotwice, CollectionPage/ItemList i odnośnik w llms.txt. Jedno źródło danych universe.js, generowanie przy buildzie; ukryte realizacje nie są linkowane.
- Walidacja: składnia/build/diff, 114 statycznych wpisów, 2×57 JSON-LD, wszystkie cele i pełny check-visibility — PASS. Playwright: wejście, scroll desktop/touch, 320×667 bez kolizji; pasek/zanik, przytrzymanie myszą i klawiaturą, mock zgody i odmowy, bezruch, potrząsanie z acceleration i accelerationIncludingGravity, Escape/reset, PL/EN kontakt oraz indeks/deep links — PASS. Czujnik testowany syntetycznymi zdarzeniami, nie fizycznym potrząsaniem telefonu.
- Publikacja GitHub main → Netlify: 191821bff0ce964eec9d1179a5779fba96db9ff5; zasoby 20261025-cinematic-contact.
- Kontrola produkcji: pełne wejście, opóźniona wskazówka PL, wheel do kolejnej galaktyki, przytrzymanie do rzeczywistego /kontakt/, angielska kotwica z 57 widocznymi hasłami i brak błędów JS — PASS. HTTP potwierdza 114 wpisów HTML, oba ItemList i link indeksu w llms.txt. Zrzuty output/playwright/rift-production-*.png.
- Obsługa techniczna i decyzje w docs/PROCESS.md. Dalsze strojenie progu czujnika według odczuć na prawdziwym telefonie, jeśli potrzebne.

---

# Aktualizacja — 2026-10-25: Płynniejsze przewijanie Procesu

- Telefon: kamera podąża za palcem, a domknięcie przejścia czeka na puszczenie i koniec natywnej bezwładności. Nowy dotyk natychmiast przerywa automatyczny przelot. Na desktopie także jedna krzywa płynnego wyhamowania zamiast nakładającego się wygładzania.
- Łagodniejszy zoom; bez rozmywania haseł i bez CSS transition opacity ścigającej RAF. Geometria buforowana poza pętlą renderowania. Na telefonie mniej gwiazd/smug i DPR do 1.5, z zachowaniem charakteru animacji.
- Wysokość trasy bazuje na stabilnym 100svh; pasek adresu nie zmienia pozycji scrolla. Zmiana orientacji zachowuje względną pozycję. Pauza, reduced motion, 57 haseł, opisy i języki zachowane.
- Walidacja: składnia, build 68 adresów i diff --check — PASS. Playwright/CDP: gest przytrzymany, puszczenie, szybka bezwładność bez cofnięcia, przerwanie nowym dotykiem, wheel w obie strony, klawiatura, reduced motion w trakcie przelotu, symulacja paska adresu, obrót ekranu, 320×667 bez kolizji, linki EN i reset — PASS.
- Orientacyjny pomiar 2 s w Chromium, 390×844 i CPU 4×: przed 113 klatek / 1 przerwa >25 ms; po 120 / 0. P95 16.7 ms w obu. To porównanie w emulacji, nie pomiar fizycznego telefonu.
- Publikacja GitHub main → Netlify: 9f1ecc265dec676d942900c29bdb60ea7906ad2b; zasoby 20261025-smooth-travel dostępne na produkcji.
- Kontrola produkcji: rzeczywiste zdarzenia dotykowe w Chromium, brak snapu przy przytrzymanym palcu, domknięcie po puszczeniu, powrót kółkiem na desktopie i 57 haseł, brak błędów JS — PASS. Zrzut output/playwright/smooth-travel-production-mobile.png.
- Szczegóły utrzymania w docs/PROCESS.md. Ewentualne dalsze strojenie tempa według odczuć użytkownika na jego telefonie.

---

# Aktualizacja — 2026-10-25: Więcej haseł i animowane połączenia

- Dodano 9 haseł z opisami PL/EN i właściwymi linkami. Łącznie 57: Strategia 19, Kreacja 20, Digital 18.
- Na desktopie opis pojawia się po stronie przeciwnej do wybranego hasła, z krótkim wejściem. Na telefonie pozostaje w stałym położeniu.
- Kropkę i hasło łączy rysowana krzywa (650 ms), świetlny impuls i początkowa fala. Kolor odpowiada galaktyce. Pauza zatrzymuje impuls po reakcji na kliknięcie; reduced motion wyłącza animację.
- Walidacja lokalna: node --check, build 68 adresów, diff --check i wszystkie 57 celów w publicznym dist — PASS. Playwright: obie strony panelu, animacja przy pauzie, link EN, 320×667 bez kolizji we wszystkich galaktykach, 390×844 ze stałym położeniem opisu i brak błędów JS — PASS.
- Publikacja GitHub main → Netlify: 4c36f266b87d3d889ba855922524eb9c3536f50b; zasoby 20261025-connections dostępne pod https://ktbmedia.eu/proces/.
- Kontrola produkcji w przeglądarce: 57 haseł, panel po obu stronach, przejście przez 3 galaktyki, nowy link z HTTP 200 i brak błędów JS — PASS. Zrzut output/playwright/connection-production-final.png.
- Dalsza obsługa w docs/PROCESS.md. Kolejne hasła wymagają rekordów PL/EN oraz kontroli układu na małym ekranie.

---

# Aktualizacja — 2026-10-25: Podróż między galaktykami scrollem

- Zamiast przycisku Więcej pomysłów: 3 galaktyki sterowane zwykłym przewijaniem dokumentu — Strategia (16), Kreacja (17), Digital (15), łącznie wszystkie 48 haseł z dotychczasowymi linkami.
- Scena pozostaje w ekranie (sticky), scroll zmienia głębię kamery; zoom, zanikanie/pojawianie się konstelacji, smugi i pierścienie tworzą przelot. Scroll w górę wraca do poprzednich galaktyk.
- Złota Strategia, ciepła Kreacja i chłodny Digital: osobne kolory kropki i orbit, tytuły i opisy PL/EN. Dyskretne trzy kropki pokazują pozycję i pozwalają przeskoczyć; wskazówka „Przewiń. Zmień perspektywę.”.
- Zachowano logo, wejście Zacznij Proces, kursor, opisy, linki i reset. Pauza zatrzymuje dryf; reduced motion pozwala zmieniać galaktyki bez zoomu/rozmyć. Klawiatura i natywny scroll (bez blokowania wheel/touch).
- Walidacja Playwright: prawdziwe wheel przez 3 galaktyki i z powrotem, 48 unikalnych haseł, linki EN, Home/End/PageDown, reduced motion, reset, rozmiary 390×844 oraz 320×667 (bez overflow i kolizji haseł) — PASS. node --check, build 68 adresów i diff --check — PASS.
- Po puszczeniu scrolla przelot domyka się w kierunku gestu, żeby hasła nie pozostawały rozmyte między galaktykami. Test krótkich gestów +250/-250 px — PASS.
- Wysłano na GitHub main: 7918947f2148c0054611676f10835e7417467b16 (pierwsza wersja: 1ead5d337e7ed61e417afe16f12ba4dc4cb99497). Istniejący automatyczny deploy Netlify; lokalny projekt zsynchronizowany.
- Kontrola pierwszego wdrożenia w przeglądarce produkcyjnej: scroll Strategia → Kreacja → Digital i z powrotem, brak błędów JS — PASS.
- Końcowa kontrola produkcji: krótkie gesty +250/-250 px przechodzą do Kreacji i wracają do Strategii, animacja kończy się na czytelnych hasłach — PASS. Zrzut output/playwright/galaxy-production-final.png.
- Dokumentacja dalszej obsługi: docs/PROCESS.md.

---

# Aktualizacja — 2026-10-25: Znikający box cookies

- Po wybraniu zgody lub odmowy baner znika bez pozostawiania pływającego przycisku „Ustawienia cookies”. Zapamiętana decyzja jest respektowana po odświeżeniu i zmianie podstrony.
- Zarządzanie zgodą przeniesiono do sekcji Cookies w polityce prywatności: przycisk „Zmień ustawienia cookies” / „Change cookie settings”. Dalsze ładowanie GTM po zgodzie i cofnięcie zgody działają jak wcześniej.
- Zmieniono wersję analytics.js w buildzie, aby przeglądarki pobrały poprawiony skrypt.
- Build, node --check i Playwright: zgoda, odmowa, powrót po odświeżeniu, brak Google po odmowie, zmiana i cofnięcie zgody z polityki prywatności oraz przycisk EN — PASS. Google mockowane w teście lokalnym.
- Kontrola produkcji: po odmowie i odświeżeniu brak boxu; przycisk w polityce prywatności ponownie otwiera wybór — PASS.
- Publikacja GitHub main: 96fd679123987e438a0fb752388a9a3a40c173ae; istniejący automatyczny deploy Netlify.

---

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
