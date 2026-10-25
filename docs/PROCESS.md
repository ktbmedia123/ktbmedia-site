# Proces — obsługa

Adres https://ktbmedia.eu/proces/. Źródła: proces/index.html, universe.css, universe.js.

`items` zawiera 25 pierwszych haseł, 23 kolejne i 9 najnowszych (57 łącznie). Każdy rekord: kategoria, hasło PL, hasło EN, opis PL, opis EN, klucz celu. `destinations` mapuje klucz na istniejący adres i dwie etykiety linku. Cele muszą istnieć w publicznym dist; nie kierować do ukrytych realizacji. Nowe hasła i teksty tej interakcji utrzymujemy w tym pliku; dotychczasowe treści strony nadal w content/site.json.

Nawigacja: trzy galaktyki w kolejności strategy → creation → digital (19 / 20 / 18 haseł). Zwykły scroll dokumentu steruje głębią kamery; sekcja jest sticky, a main stanowi trasę o wysokości viewportu + 2 kroki (krok = max(wysokość sekcji 100svh, 720)). Nie przechwytujemy wheel/touch, więc telefon używa natywnego przewijania.

Trzy kropki pozwalają przeskoczyć do galaktyki. PageUp/PageDown, strzałki, Home/End i spacja działają poza linkami/przyciskami. Pauza wyłącza dryf, ale pozwala podróżować scrollem. Reduced motion wyłącza zoom i smugi oraz zmienia galaktyki bez przelotu. Canvas zatrzymuje renderowanie w ukrytej karcie i poza ekranem. Reset zwija scenę i zeruje scroll. Na telefonie opisy są przypięte do viewportu.

Nie ma paginacji „Więcej pomysłów”. Wszystkie 57 haseł pozostaje w tablicy items. updateGalaxy wybiera kategorię; layout dopasowuje kolumny do szerokości. Galaktyki mają własny kolor i orientację orbit. Układ i pierścienie korzystają z tego samego środka sceny.

Menu głównego app.js prowadzi do /proces/ pełną nawigacją. Proces jest niezależnym dokumentem i nie uruchamia routera React. ?lang=en utrzymuje język w obu kierunkach. Analityka przez istniejący build, po zgodzie.

Wdrożenie: istniejące GitHub main → Netlify. Aktualny runtime w produkcji: commit 191821bff0ce964eec9d1179a5779fba96db9ff5, wersja zasobów 20261025-cinematic-contact. Lokalna dokumentacja nie jest wysyłana na hosting.

Domknięcie gestu: dopiero po puszczeniu palca i zakończeniu natywnej bezwładności (240 ms bez scrolla na telefonie, 180 ms na desktopie), jeżeli kamera pozostaje pomiędzy konstelacjami, kończymy podróż w kierunku gestu. Przelot 420–850 ms korzysta z jednej krzywej easing w RAF; kamera nie dodaje drugiego opóźnienia. Nowy touchstart/wheel oraz otwarcie opisu przerywają przelot. Pod palcem kamera podąża bez dodatkowego easing; poza gestem używa wygładzania zależnego od czasu klatki. Natywny wheel/touch nie jest blokowany. Drobne przesunięcia blisko celu nie wywołują przeskoku. Kliknięcie nawigacji/klawisze mają własną płynną nawigację; otwarty opis wstrzymuje automatyczne domknięcie. Test krótkich wheel +250/-250 px w normalnym trybie — PASS.

Opis na desktopie (od 901 px) otwiera się po stronie przeciwnej do klikniętego hasła: data-side=left/right na #detail. Przy zmianie języka pozostaje na tej samej stronie. Telefon zachowuje dotychczasowe stałe położenie. Wejście panelu: Web Animations API, 340 ms, pomijane przy reduced motion.

paintConnection rysuje krzywą Béziera od centralnej kropki do wybranego hasła: narastanie 650 ms, świetlny impuls w kolorze galaktyki i fala przy źródle do 850 ms. Pauza pozwala dokończyć reakcję na kliknięcie, następnie zatrzymuje impuls. Reduced motion pokazuje statyczną krzywą bez impulsu i fali. Nie mierzymy DOM w każdej klatce połączenia.

Walidacja wersji 57 haseł: build 68 adresów, składnia, wszystkie cele w publicznym dist, Playwright desktop (panel lewo/prawo), telefon 320×667 (brak kolizji wszystkich 3 galaktyk), 390×844 (stała pozycja opisu), linki EN, animacja przy pauzie i reduced motion — PASS.

Płynność: geometria świata buforowana w resize, bez odczytów getBoundingClientRect w każdej klatce. Trasa oparta o stabilne 100svh zamiast innerHeight zapobiega skokom od paska adresu; przy rzeczywistej zmianie orientacji zachowujemy względną pozycję scrolla. Usunięto blur haseł i CSS transition opacity konkurującą z RAF. Na telefonie zoom 1.25 (desktop 1.75), 150 gwiazd / 130 smug i limit DPR 1.5; desktop 220 / 210, DPR do 2. Podczas wejścia osobny pełny efekt z DPR do 2 także na telefonie. will-change tylko dla aktualnej galaktyki.

Walidacja płynności: CDP touchStart/move/end, przytrzymanie palca bez snapu, przerwanie automatycznej jazdy nowym dotykiem, szybki gest z bezwładnością bez cofnięcia, desktop wheel +250/-250, End, zmiana reduced motion podczas jazdy, symulacja innerHeight przy stałym svh, obrót oraz trzy galaktyki bez kolizji na 320×667 — PASS.


Wejście filmowe (20261025-cinematic-contact): ENTRY_DURATION=3400 ms. Dedykowane paintEntry: 420 promieni w perspektywie, 15 bram, 7 spiralnych włókien, złota soczewka i ciepłe odsłonięcie. Wejście jest oddzielone od kamery scrolla. W przelotach gwiazdy mają ciągłą głębię/parallax, smugi prędkości, interpolowane kolory atmosfery/orbit i delikatną rotację warstw haseł. Reduced motion nadal pomija wejście/przeloty.

Potrząsanie do kontaktu: niezależne contact-rift.js/css. Po 3 s w otwartej galaktyce pojawia się „Potrząśnij wszechświatem. Porozmawiajmy.” / „Shake the universe for contact”. Pasek ładuje się przez 2500 ms powtarzającego się ruchu; przerwa powoli go wygasza. Źródło: devicemotion, acceleration lub accelerationIncludingGravity, zmiana wektora >7 m/s² i kolejne próbki 5–250 ms. Nie zapisujemy danych czujnika. Zamknięcie wskazówki, Escape/reset/opuszczenie galaktyki odpina czujnik i zeruje ładowanie. Przycisk ◌ Kontakt pozwala wrócić do wskazówki.

Na przeglądarkach z DeviceMotionEvent.requestPermission wymagany jest klik „Włącz potrząsanie” (HTTPS i aktywacja użytkownika). Zgoda cookies nie zastępuje zgody czujnika. Pozostałe telefony z obsługą devicemotion słuchają po pojawieniu się wskazówki. Brak czujnika lub odmowa: przytrzymanie przycisku, także myszą i klawiszem Enter/Spacja. API: https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent/requestPermission_static .

Pełny pasek uruchamia drżenie galaktyki, rozdarcia skopiowanych pasm Canvas, złoto/cyjan i linie sygnału. Po 1450 ms odsłonięcia przechodzimy na prawdziwe /kontakt/ z zachowaniem ?lang=en. Reduced motion wyłącza drgania/zakłócenia i skraca finał do 240 ms. Zwykły link kontaktu jest nadal dostępny w menu.

SEO/GEO: scripts/process-ideas-index.mjs pobiera wyłącznie deklaracje items/destinations z tego samego universe.js (izolowany VM, limit czasu). Build zastępuje PROCESS_IDEAS_INDEX statycznym, natywnym details pod sceną: wszystkie 57 haseł PL i EN, opisy, grupy i powiązane linki. Ukryte cele tracą odnośnik i wzmiankę w schemacie, ale opis idei pozostaje. Nieznany lub brakujący publiczny cel przerywa build. Proces indeksuje CollectionPage + 2 ItemList; llms.txt wskazuje indeks. To treść dostępna użytkownikom, nie ukryty blok słów kluczowych.

Indeks językowy: [data-process-lang=pl|en] przełączany przez contact-rift.js zgodnie z html.lang. Kotwice #process-idea-pl-N i /proces/?lang=en#process-idea-en-N otwierają details i przewijają do hasła. Nagłówek przy czytaniu indeksu dostaje tło; hasła w animacji i indeksie mają jedno źródło. Build nadal 68 adresów.

Walidacja: składnia/build/diff, check-visibility (ukrycie/przywrócenie i wszystkie kategorie), 114 wpisów statycznych i 2×57 JSON-LD — PASS. Playwright: pełne wejście, wheel/touch z przytrzymaniem i wyhamowaniem, 320×667 bez kolizji, pasek/zanikanie przerwanego gestu, przytrzymanie mysz/klawiatura, zgoda/odmowa czujnika, nieruchome próbki, reset/Escape i brak ładowania po zamknięciu, dane z grawitacją, PL/EN kontakt i indeks/deep links — PASS. Czujnik testowany syntetycznymi zdarzeniami w przeglądarce; odczucia prawdziwego potrząsania wymagają telefonu użytkownika.
