# Aktualizacja — 2026-10-29: Tomex ukryty, Remontowa Marine Design i fotografie warsztatów

- Tomex Brakes ustawiony jako niewidoczny wspólnie dla PL/EN. Treści zachowane do przywrócenia, brak publicznej podstrony, katalogu, sitemap i llms. Blogowe polecenia realizacji respektują teraz przełącznik widoczności; ukryto też istniejące polecenie Tomex w artykule o projektowaniu. Bigmot i MójTeam pozostają ukryte.
- Remontowa Marine Design: rozbudowano istniejące /realizacje/rmdc/ w układzie editorial PL/EN. Opis identyfikacji, dwujęzycznej komunikacji, employer brandingu, portfolio jednostek i relacji z wydarzeń, dwie oryginalne kreacje KTB. Fotografia ORP Kormoran z istniejącego landingu marine z pełnym podpisem autora i linkami źródła/licencji. Zamiast starych niepotwierdzonych +100%, wykresu i harmonogramu — jakościowy blok Zakres współpracy. Model CMS obsługuje opcjonalny tytuł tego bloku i linki do źródła/licencji zdjęcia.
- Cztery nowe okładki DED, Wiktorowicza, AR Serwis i Sergieja z fotografii użytkownika. Wiktorowicz ma dodatkowy dyptyk, Sergiej trzeci rozdział ze zdjęciami hali i pracy. Przypisanie zdjęć potwierdzone przez użytkownika: 563/4409/049 Wiktorowicz, A7400859-2 AR, pozostałe Sergiej, osobny plik DED. Sześć WebP case-20261029d-*, około 1,18 MB, bez retuszu treści.
- Zachowane wyniki pozostałych realizacji, zmiany PMO/PulseGT, hero strony głównej i pozostałe sekcje PL/EN. Bez wewnętrznych przypisów i bez wyników/numeracji kart. Katalog: 13 marketing / 4 aplikacje / 7 WWW; 13 editorial. Build 72 adresy (71 React + Proces), wersja 20261029-marine-workshops.
- Walidacja lokalna: build, check:seo (72 URL), check-visibility (ukrycie/przywrócenie wszystkich trzech projektów i kategorie), składnia, JSON/YAML i kontrola zakresu zmian — PASS. Playwright: 30 widoków (5 realizacji × PL/EN × 1440/390/320 px), dekodowanie obrazów, brak overflow i błędów JS, katalog i blog bez Tomex, RMDC bez JS z credit/linkami, nawigacja do kontaktu EN — PASS. Przegląd wizualny zrzutów output/playwright/marine-workshops-* — PASS.
- Publikacja GitHub main → Netlify: 4fb0241, wersja 20261029-marine-workshops. Produkcja: 72/72 adresów HTTP 200 z poprawnym canonical i wersją; wszystkie trzy ukryte realizacje HTTP 404; 6/6 nowych WebP identycznych bajtowo z lokalnymi. Brak linków Tomex w publicznych stronach, mapie i llms. Publiczne dane PL/EN poprawne, bez wewnętrznych not.
- Playwright na produkcji: 10 widoków nowych realizacji PL/EN na telefonie, katalog na desktopie, blog bez polecenia Tomex, RMDC bez JS z podpisem i linkami licencji oraz przejście do kontaktu EN — PASS. Bez overflow, uszkodzonych obrazów i błędów JS. Zrzuty output/playwright/marine-workshops-production-*.
- SEO/GEO potwierdzone na produkcji: pełny HTML, aktualne tytuły/opisy/canonical, obrazy OG, dane Article/Breadcrumb, linkowanie, sitemap i llms. Nie zgłaszano ręcznie indeksacji ani nie deklarowano obecności w Google/odpowiedziach AI. Zmiany wdrożone i zweryfikowane; brak oczekujących prac kodowych.

---

# Aktualizacja — 2026-10-29: Nowe fotografie PMO i krótka nazwa PulseGT

- Na prośbę użytkownika zastąpiono dwa wskazane kadry PMO: nowa okładka to BMW z oznaczeniami marki, a drugi blok pokazuje szeroki kadr driftu. Wykorzystano dostarczone IMG_1183.JPG i A7403640.JPG, bez generowania nowych obrazów. Dwa zoptymalizowane WebP case-20261029c-pmo-lubricants-* mają razem około 0,49 MB. CoverFit contain zachowuje cały samochód w hero i katalogu; zaktualizowane alty i podpis PL/EN.
- PulseGT: usunięty cały dopisek US Technology z tytułu PL/EN, etykiety CMS/widoczności, źródłowych etykiet i ItemList/Breadcrumb. Build synchronizuje nową nazwę w publicznym HTML/JSON/JS oraz metadata. Nagłówek nie łamie już długiego dopisku na pojedyncze litery.
- Zakres ograniczony do PMO/PulseGT i ich nazw/obrazów; wyniki, pozostałe realizacje, hero, języki i widoczność bez zmian. Bez powrotu wewnętrznych przypisów ani wyników na kartach. Wersja zasobów 20261029-pmo-photos.
- Walidacja lokalna: build 73 URL, check:seo, poprawność JSON, kontrola zakresu zmian i diff — PASS. Playwright 12 widoków (PMO/PulseGT × PL/EN × 1440/390/320 px), nowe obrazy na podstronie i karcie, pełny kadr samochodu, krótki H1 PulseGT, brak overflow i błędów JS — PASS. Przegląd wizualny zrzutów output/playwright/photo-update-* — PASS.
- Publikacja GitHub main → Netlify: bf78937, wersja 20261029-pmo-photos. Produkcja: 7 stron/plików bez starego dopisku, oba wskazane stare kadry PMO zastąpione; 2 nowe fotografie zgodne bajtowo z lokalnymi. Playwright PL/EN na telefonie i karta katalogu na desktopie — PASS, bez błędów JS. Zrzuty output/playwright/photo-update-production-*. Korekta wdrożona i zweryfikowana; brak oczekujących zmian kodu.

---

# Aktualizacja — 2026-10-29: Kolejne siedem case studies

- Z paczki Nowe_Case_Studies_KTB_Media_Do_Maila.zip dodano cztery marketingowe realizacje: Wiktorowicz Auto Serwis (/realizacje/wiktorowicz/), Sergiej Auto Serwis (/realizacje/sergiej-auto-serwis/), DED Serwis i AR Serwis. Zaktualizowano istniejące PulseGT, PMO Lubricants i DDP Supply pod dotychczasowymi adresami. Poprzednie pięć rozbudowanych realizacji bez zmian; brak duplikatów.
- Pełne treści PL/EN, główny wynik i trzy dodatkowe wskaźniki wewnątrz każdej realizacji, dwa rozdziały z autentycznymi materiałami i zakres prac. Wiktorowicz, Sergiej i DDP mają porównania dwóch stanów obserwujących; pozostałe nowe projekty bez wymyślonych wykresów. Stare chartData/timeline/notes PulseGT, PMO i DDP usunięte. Doradztwo WWW PulseGT i prace webmasterskie PMO opisane zgodnie z zakresem; nie deklarujemy budowy całych stron tych marek.
- 21 nowych WebP (około 2,30 MB) wyodrębnionych z dostarczonych PDF. Źródłowe PDF/archiwa i pliki robocze poza repo/hostingiem. Opcjonalny coverFit w CMS PL/EN: DED/AR pokazują całe kreacje, bez ucinania. Osobna skala typografii dla długich wartości liczbowych. Nowy marketingowy Sergiej nie koliduje z istniejącą realizacją digital.
- Zachowane decyzje użytkownika: bez źródłowych/metodologicznych przypisów w publicznych HTML/JSON/JS i bez wyników/numeracji na kartach katalogu. Zachowany hero, pozostałe sekcje PL/EN oraz ukrycie Bigmot i MójTeam. DDP zachowuje powiązane linki marine. CMS jest źródłem prawdy, content.js generowany buildem.
- Katalog: 14 marketingowych realizacji, 4 aplikacje i 7 stron WWW; 12 case studies w układzie editorial. Cztery nowe entry HTML, aktualne OG/Twitter/CreativeWork, llms i sitemap. Build: 73 publiczne adresy (72 prerenderowane dokumenty React + Proces), wersja 20261029-cases-expanded.
- Walidacja lokalna: build, check:seo (73 adresy), check-visibility, JSON/YAML, składnia i diff — PASS. Niezależny przegląd zgodności PL/EN ze źródłami oraz porównanie pozostałych treści/widoczności — PASS. Playwright: 42 widoki (7 projektów × PL/EN × 1440/390/320 px), wszystkie obrazy, brak overflow i błędów JS, komplet katalogu i zakładek, przejście następny projekt → kontakt z EN, bez JS — PASS. Zrzuty output/playwright/cases-expanded-*.
- Publikacja GitHub main → Netlify: 2feb14f, wersja 20261029-cases-expanded. Produkcja: 73/73 adresów HTTP 200 z poprawnym canonical i wersją; 21/21 nowych WebP identycznych bajtowo z lokalnymi; publiczne HTML/JSON/JS bez not wewnętrznych, katalog bez wyników/numeracji, ukryte Bigmot i MójTeam zwracają 404. Playwright: 14 widoków nowych/odświeżonych realizacji PL/EN na telefonie, katalog i zakładki na desktopie, nawigacja EN i bez JS — PASS. Zrzuty output/playwright/cases-expanded-production-*.
- Dalszy krok: ocena nowych realizacji przez użytkownika. Zmiany wdrożone i zweryfikowane; brak oczekujących zmian kodu.

---

# Aktualizacja — 2026-10-29: Realizacje bez wewnętrznych przypisów i liczb na kartach

- Na prośbę użytkownika usunięto sekcję „Źródła, okresy i jak czytać wyniki” ze wszystkich pięciu realizacji w PL/EN. Notatki źródłowe/metodologiczne nie są treścią do publicznego udostępniania.
- Usunięto nie tylko widok sekcji, ale także reportingNotes, techniczne konteksty porównań i niewidoczne notes tych pięciu projektów z content/site.json, a build odtworzył content.js. Uproszczono pozostałe konteksty do publicznych dat; usunięto pola CMS pozwalające przywrócić te przypisy.
- Katalog: usunięte bloki wyników oraz numeracja na zdjęciach kart, zachowane fotografie i styl nowych realizacji. Wyniki pozostają wewnątrz podstron projektów. Zachowane atrybucje fotografii, hero, PL/EN i wspólna widoczność. Zasoby 20261029-cases-clean.
- Walidacja lokalna: build i check:seo (69 adresów), składnia JS, YAML i kontrola publicznych JSON/JS/HTML — PASS; brak reportingNotes, dawnych nagłówków i not Metricool w publicznych danych realizacji, brak wyników/numeracji na kartach.
- Playwright lokalnie: 20 widoków realizacji (PL/EN, desktop/390 px), katalog bez liczb i numeracji, zachowane style kart i wyniki wewnątrz, bez overflow i błędów JS; wersja bez JS — PASS.
- Publikacja GitHub main → Netlify: bfa9c57, zasoby 20261029-cases-clean. Kontrola produkcji: 9 adresów (katalog, 5 realizacji, publiczne site.json/content.js/app.js) — brak wewnętrznych przypisów i liczb na kartach, wyniki wewnątrz zachowane. Playwright produkcja: katalog i QARMAX w PL/EN na telefonie — PASS. Korekta wdrożona, brak oczekujących zmian kodu.

---

# Aktualizacja — 2026-10-29: Pięć rozbudowanych case studies

- Na podstawie przekazanej paczki PDF/PNG odświeżono Grupę Janisz, AutoCentrum Elektronowa 18, Extreme Tyres i GT Serwis oraz dodano QARMAX pod /realizacje/qarmax/. Nowa kolejność katalogu rozpoczyna się od tych pięciu projektów; PMO i pozostali klienci zachowani.
- Hybryda materiałów i dotychczasowej identyfikacji: fotografie, duży główny wynik, trzy dodatkowe wskaźniki z okresami, wyzwanie/podejście, rozdziały z oryginalnymi kreacjami i WWW, porównania dwóch okresów, zakres, rozwijane źródła i kontakt. Treści natywne HTML PL/EN, zamiast plansz z drobnym tekstem. 15 WebP, razem ok. 1,84 MB; powiększanie materiałów. Zachowany credit fotografii Extreme.
- CMS: opcjonalny editorial i results.context w obu językach. content/site.json pozostaje źródłem prawdy; content.js synchronizowany buildem. Stare niepotwierdzone chartData i harmonogramy usunięte z pięciu projektów. Każda metryka ma okres; kliknięcia Google i raportowane leady Meta opisane zgodnie z definicjami. Szczegóły i utrzymanie: docs/CASE_STUDIES.md.
- Obrazy OG/Twitter i Article/CreativeWork marketingowych realizacji synchronizowane z CMS w prerenderze. Wersja zasobów 20261029-cases. QARMAX w widoczności, katalogu, llms i sitemap. Zachowano hero, pozostałą treść PL/EN, Bigmot i MójTeam ukryte. Nawigacja EN zachowuje ?lang=en; zmiana języka aktualizuje adres i działa po odświeżeniu.
- Walidacja lokalna: build 69 URL, check:seo (rozszerzony o faktyczny prerender editorial, konteksty danych i obrazy), check-visibility, JSON/YAML, składnia i diff — PASS. Przegląd kodu i porównanie danych PL/EN ze źródłem — PASS. Playwright: 30 widoków (5 projektów × PL/EN × 1440/390/320 px), obrazy, brak poziomego overflow i błędów JS, trzy zakładki katalogu, źródła, następny projekt i kontakt EN — PASS. Hero, odświeżenie po zmianie języka i realizacje/katalog bez JS — PASS. Zrzuty w output/playwright/cases-*.
- Publikacja GitHub main → Netlify: 2c0d15a (2026-10-29). Produkcyjny HTML zawiera 20261029-cases i nowy natywny układ. Przed publikacją sprawdzono aktualny zdalny main; brak nowszych zmian CMS.
- Walidacja produkcji: 69/69 adresów HTTP 200 z prawidłowymi canonical i wersją zasobów; 15/15 WebP identycznych bajtowo z lokalnymi; ukryte Bigmot i MójTeam zwracają 404. Playwright: 20 widoków (5 projektów × PL/EN × desktop/390 px), brak overflow, brak uszkodzonych obrazów i błędów JS, wszystkie zakładki katalogu, źródła, następny projekt i kontakt EN — PASS. Zrzuty output/playwright/cases-production-*.
- Dalszy krok: ocena wizualna przez użytkownika. Funkcjonalność wdrożona i zweryfikowana; brak oczekujących zmian kodu.

---

# Aktualizacja — 2026-10-26: Pełny HTML i poprawa wykrywania podstron

- Wdrożono GitHub main → Netlify: 05ce88f579e0889330f061e2273ef2b560672896 (pierwsza publikacja 0a32212, synchronizacja FAQ 88ae12e); wersja zasobów 20261026-seo. Użytkownik osobno potwierdził publikację po zatrzymaniu pierwszej próby przez automatyczną kontrolę uprawnień.
- 67 dokumentów React jest wstępnie renderowanych podczas builda z tych samych komponentów app.js i aktualnego content/site.json. Pełne opisy, artykuły, FAQ, nawigacja, stopka i docelowe liczby są dostępne w HTML. Metadata mają wspólną funkcję z klientem. FAQ schema odpowiada wyłącznie widocznym pytaniom i odpowiedziom; stary niewidoczny FAQ strony głównej usunięty. Pełny wspólny renderer marine z 9 FAQ działa także w prerenderze (mapowanie globalThis.KTBMarine na window w VM), kontrolowany osobnym testem. Hero i PL/EN zachowane.
- Wszystkie dozwolone kategorie realizacji w DOM/HTML; aplikacja pokazuje wybraną zakładkę, bez JS wszystkie. Nieaktywne wideo bez src/autoplay. Bigmot i MójTeam nadal ukryte. Powiązane usługi/poradnik marine przy RMDC i DDP w obu językach, z polem relatedLinks w CMS.
- Zero osieroconych adresów w grafie linków HTML wszystkich 68 publicznych stron. Usunięto rozjazd między krótkimi starymi tekstami SEO i aktualnym widokiem.
- Fingerprint znaczącej treści w seo/page-history.json utrzymuje daty sitemap bez odmładzania przy każdym buildzie. Nieznana wersja (np. nowa edycja CMS) pomija opcjonalny lastmod zamiast podawać niepewną datę. Procedura zapisu dat przy rzeczywistych zmianach: docs/SEO.md.
- Zależności builda React/ReactDOM 18.3.1 i parse5 7.3.0 przypięte w package-lock.json; npm ci. Na hosting nie trafiają narzędzia, dokumentacja, package files ani historia fingerprintów.
- Walidacja lokalna: build 68 URL, check:seo, check-visibility (ukrycie/przywrócenie/wyłączenie kategorii), składnia i diff — PASS. Kontrola CMS, H1, canonical, JSON-LD, linków, pełnego katalogu oraz stabilnych i pomijanych dat — PASS.
- Produkcja po końcowym wdrożeniu 05ce88f: 68/68 HTTP 200, self-canonical, bez blokady noindex — PASS. Playwright: home, wszystkie zakładki katalogu, EN, RMDC, KTBtask, 9 FAQ marine, kontakt mobile, menu, pełny katalog bez JS, czytelny fallback po awarii app — PASS. Przy opóźnieniu app 650 ms zero klatek widocznego prerenderu przed gotowym widokiem. Formularza nie wysyłano. Pełny Proces → Kontakt EN na widoku telefonu, przytrzymanie 2,5 s i opóźnienie app 650 ms — PASS, zero mignięć. Pełny specjalny landing marine bez JS na produkcji: 9 widocznych FAQ / 9 pytań w schema, podpis fotografii, brak overflow — PASS. Zrzuty output/playwright/seo-* i seo-production-*.
- Naprawiono lokalny helper GitHub: wskazywał usuniętą ścieżkę w /tmp. Oficjalny GitHub CLI 2.103.2 w ignorowanym .tools/gh, ustawienie ograniczone do tego repo i github.com. Użyto istniejącego logowania z keyring; bez odczytu/kopiowania tokenów. Integracja MCP GitHub miała odczyt, ale odrzucała zapis 403, dlatego publikacja przez Git.
- GSC: ponownie przesłano sitemap.xml oraz sitemap-pages.xml. Mapa podstron została ponownie odczytana 26.10 ze statusem Sukces i 19 adresami; wraz z blogiem (33) i realizacjami (16) wszystkie 68 adresów jest zgłoszone bezpośrednio w poprawnie odczytywanych mapach. Główny sitemap.xml nadal pokazuje Nie udało się pobrać / Nieznany, mimo poprawnego HTTP 200, XML i odpowiedzi przy nagłówku Googlebot — nie uznano tego błędu za rozwiązany. Stary wpis HTTP pozostaje; nie potwierdzono jego usunięcia.
- GSC potwierdził dodanie czterech adresów do priorytetowej kolejki indeksowania: /kontakt/, /marketing-dla-branzy-morskiej/, /realizacje/rmdc/, /agencja-marketingowa-gdynia/. Bez powtarzania zgłoszeń; nie oznacza to jeszcze indeksacji.
- Dalsze kroki: przy kolejnej kontroli porównać indeksację i wynik odczytu głównego indeksu sitemap. Zapisany punkt odniesienia GSC (34/55, raport 19.10) oraz obsługa w docs/SEO.md. Nie obiecywać terminu ani gwarancji indeksacji.

---

# Aktualizacja — 2026-10-26: Start strony bez migania tekstu zapasowego

- Potwierdzono przyczynę na /kontakt/: statyczne .seo-static było widoczne przed załadowaniem React/app, a dotychczasowy loader CMS pojawiał się dopiero później i dodawał 280 ms przed renderem.
- scripts/page-boot.mjs dodaje do 67 dokumentów React osłonę w samym head, przed body. Jednolite tło strony i dyskretna kropka (dopiero po 180 ms) pozostają do gotowego widoku; App zgłasza gotowość w useLayoutEffect, po commit i przed paint. Bez minimalnego czasu oczekiwania i bez późniejszego odkrywania statycznego tekstu.
- Skrypty zależności pobierane równolegle przez defer, z zachowaniem kolejności wykonania. Nowe wersje app/cms-hydrator: 20261026-boot. CMS nadal ma pierwszeństwo i fallback content.js po 3 s, ale nie zastępuje już root loaderem ani nie opóźnia renderowania o 280 ms.
- Treść HTML, metadane, schema i linki pozostają. Bez JS osłona nie jest uruchamiana. Awaria skryptu lub pierwszego renderu przywraca statyczną treść; bezpiecznik po 6 s zapobiega pozostawieniu pustego ekranu. Późniejsze poprawne uruchomienie aplikacji działa. Reduced motion bez animowania kropki. Proces nie otrzymuje osłony; dotyczy ona docelowego kontaktu i pozostałych stron React.
- Walidacja: odtworzenie problemu przed poprawką; Playwright z opóźnieniem app 900 ms — zero klatek widocznego .seo-static na home i kontakcie EN/mobile; osłona znika z gotowym menu. Landing marine działa. Wolny CMS (1200 ms), timeout CMS, zablokowany app, wyjątek komponentu, timeout skryptu z późniejszym odzyskaniem oraz JS wyłączony — PASS. Nie ma nieskończonego loadera, fallback czytelny.
- Test normalnego Proces → kontakt (CDP touch przez 2,5 s, 390 px, CPU 4×, app opóźnione o 900 ms): zero klatek tekstu statycznego, gotowe menu przed odsłonięciem, powrót do Procesu działa i brak błędów JS. Składnia/build 68 URL/check-visibility/diff — PASS. Zrzuty output/playwright/boot-before-contact.png i boot-process-contact.png.
- Publikacja GitHub main → Netlify: a380cd37331d097cb258f5d5865e85b3e422d914. Wersja app/cms 20261026-boot; osłona w statycznym head obecna na produkcji.
- Produkcja: home, kontakt EN/mobile i marine — zero klatek .seo-static przed gotowym widokiem, menu obecne w chwili odsłonięcia, brak błędów JS. Pełny Proces → kontakt z dotykiem, CPU 4× i app opóźnionym 900 ms także bez mignięcia; powrót do Procesu działa. Zrzuty output/playwright/boot-production-loading-*.png i boot-process-contact-production.png.
- Dalsze kroki: obserwacja na urządzeniu użytkownika; kompletna poprawka wdrożona, brak oczekujących zmian kodu.

---

# Aktualizacja — 2026-10-26: Landing marine, fotografia Kormorana i czytelniejszy Proces

- Rozbudowano istniejący /marketing-dla-branzy-morskiej/ w PL/EN: hero, 4 segmenty odbiorców, 6 usług, DDP Supply i RMDC, proces współpracy, pomiar, 9 FAQ i linki do właściwych podstron. Link w stopce. Hero strony głównej zachowane.
- CMS jest jedynym źródłem treści. Wspólny marine-landing.js renderuje statyczny HTML i widok React; scripts/build-marine-landing.mjs generuje metadata, Service, FAQPage, BreadcrumbList i listę widocznych realizacji. Obsługa ukrycia realizacji zachowana. Dodano pola do panelu PL/EN.
- Przy RMDC rzeczywista fotografia ORP Kormoran w doku Remontowej: Thomas Dahlstrøm Nielsen, CC BY 4.0, z widocznym podpisem, źródłem, licencją i informacją o pomniejszeniu. Projekt okrętu potwierdzony na oficjalnej stronie RMDC. Szczegóły w docs/MARINE.md.
- Proces: wolny środek wszystkich galaktyk, także Kreacji z 20 hasłami. Na telefonie po 6 wybranych haseł na galaktykę, większy tekst i kontrast; wszystkie 57 nadal w desktopie i statycznym indeksie PL/EN.
- Jedna linia kropka → notatka. Zamiast czarnego portalu jasna szczelina i poziome rozwinięcie: 198+616 ms (10% wolniej); zamknięcie 320 ms, toggle i reduced motion zachowane.
- Kontakt przechodzi bezpośrednio na /kontakt/ po 2500 ms przytrzymania. Usunięto pośrednią scenę i 1450 ms opóźnienia. Pozostało wyłanianie po 6 s, wypełnienie, glitch, anulowanie i język; prefetch dokumentu przy rozpoczęciu gestu.
- Dodatkowo przycisk wyceny nie zasłania już wyboru języka w otwartym menu mobilnym.
- Walidacja lokalna: składnia JS, YAML panelu, build 68 adresów, check-visibility i diff — PASS. Statyczne teksty/9 FAQ/JSON-LD, licencja zdjęcia i linki — PASS. Playwright: landing desktop/390 px, FAQ, PL/EN i kontakt, wejście przez stopkę, treść bez JS i brak overflow; Proces desktop/390/320 px, brak kolizji w 3 galaktykach, pojedyncza linia/toggle i 198+616 ms, dotyk/touchcancel i klawiatura do kontaktu — PASS. Nawigacja lokalna po około 2,53 s (Enter) / 2,56 s (CDP touch), bez błędów JS. Testy telefonu w emulacji Chromium.
- Publikacja GitHub main → Netlify: 25fde4ad103dbabbd3c138ccff4397cb775e79c2. Zasoby Procesu 20261026-clear-notes; marine 20261026-marine.
- Produkcja: HTTP 200, statyczne H1/9 FAQ/Service/podpis zdjęcia, zgodność JPEG z lokalnym plikiem (213397 B) — PASS. Playwright: angielski landing i fotografia, normalne wejście mobilne Procesu, 6 haseł Kreacji bez kolizji z kropką, otwarcie/toggle i pełny dotyk do /kontakt/ — PASS, bez błędów JS. Zrzuty output/playwright/marine-kormoran-production-mobile.png i process-clear-production-mobile.png. Przy testach ruchomych haseł używać tap we współrzędnych po ustaleniu scrollY; locator.tap może czekać na stabilność i swoim scrollIntoView zmienić galaktykę.
- Dalsze kroki: ocena przez użytkownika zdjęcia i nowego zachowania. Nie składano obietnic pozycji SEO/cytowań AI; obserwacja wyników wymaga danych po indeksacji.

---

# Aktualizacja — 2026-10-26: Przełączanie notatek i portal przy opisie

- Ponowne kliknięcie tego samego hasła zamyka opis. Wybranie innego zmienia notatkę; zmiana języka aktualizuje otwartą treść.
- Linia od kropki dochodzi do małego ciemnego portalu przy krawędzi notatki. Kołowe wyłanianie (180+560 ms), cienki kolorowy pierścień i cofnięcie maski/linii przy zamykaniu (320 ms). Desktop nadal po stronie przeciwnej do hasła, telefon w dotychczasowym stałym miejscu.
- Obsłużono szybkie zamykanie/ponowne otwieranie i przełączanie (unieważnianie poprzednich callbacków), aktualny styl przy odwróceniu, fokus i aria-expanded/pressed. Reset/galaktyka sprzątają natychmiast; reduced motion pomija efekt. Geometria poza pętlą renderowania, RAF wygasa po zamknięciu w pauzie.
- Walidacja: składnia, build 68 adresów/indeks57 PL/EN i diff — PASS. Playwright: toggle, oba boki, szybkie przełączenia, język/fokus, ×/Escape, brak stałego RAF, 320 px reduced motion, 390 px dotyk, zamknięcie przed początkiem maski, reset/zmiana galaktyki podczas animacji — PASS.
- Publikacja GitHub main → Netlify: 3e611705876f1d2ee22128c6db642acb9caaa980; zasoby 20261026-detail-portal.
- Kontrola produkcji: portal, ponowny klik tego samego hasła, aria-expanded, ponowne otwarcie, EN bez zamykania i Escape, brak błędów JS — PASS. Zrzut output/playwright/detail-portal-production.png.
- Obsługa i decyzje w docs/PROCESS.md.

---

# Aktualizacja — 2026-10-25: Delikatnie mocniejsze wejście i kontakt przez przytrzymanie

- Zachowano preferowany klasyczny wjazd 2,1 s; dodano subtelny radialny złoty blask, płynniejsze przyspieszenie, głębsze smugi z jasnymi zakończeniami i delikatną falę. Bez powrotu do odrzuconej soczewki; scroll pozostaje.
- Po dotychczasowych 6 s pojawia się pigułka „Przytrzymaj, by nawiązać kontakt” / „Hold to make contact” z czasem 2,5 s. Ciągłe przytrzymanie myszą/dotykiem/Enter/Spacją stopniowo wypełnia ją kolorem galaktyki i nasila zakłócenia. Pełne 2500 ms odsłania kontakt z zachowaniem języka.
- Puszczenie przed czasem zeruje postęp i wygasza FX. Pojedynczy klik nie pomija przytrzymania. pointercancel, utrata capture/fokusu, ukrycie karty, Escape i reset przerywają. Puszczenie tuż po 2500 ms przed następną klatką nadal zalicza pełny gest. Wypełniona część ma ciemną kopię tekstu dla czytelności; brak czujnika.
- Walidacja: składnia/build 68 adresów/diff — PASS. Playwright: wejście, klik bez nawigacji, ~48% po 1,2 s, narastający glitch, puszczenie/reset, zmierzony pełny czas 2,5 s i kontakt PL; dotyk/touchcancel przy 320 px, blur, reset, pełne przytrzymanie klawiaturą i kontakt EN, reduced motion — PASS.
- Publikacja GitHub main → Netlify: 6f2e6342999b8d38e6d065e9a5b24382bf6351c6; zasoby 20261025-hold-contact.
- Kontrola produkcji: normalne wejście, przytrzymanie CDP touch na emulowanym telefonie 390×844, częściowe wypełnienie po 1 s i automatyczny kontakt po pełnym geście, brak błędów JS — PASS. Zrzut output/playwright/contact-hold-production.png.
- Aktualne zachowanie i obsługa w docs/PROCESS.md.

---

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
