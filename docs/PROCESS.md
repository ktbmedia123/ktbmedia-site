# Proces — obsługa

Adres https://ktbmedia.eu/proces/. Źródła: proces/index.html, universe.css, universe.js.

`items` zawiera 25 pierwszych haseł, 23 kolejne i 9 najnowszych (57 łącznie). Każdy rekord: kategoria, hasło PL, hasło EN, opis PL, opis EN, klucz celu. `destinations` mapuje klucz na istniejący adres i dwie etykiety linku. Cele muszą istnieć w publicznym dist; nie kierować do ukrytych realizacji. Nowe hasła i teksty tej interakcji utrzymujemy w tym pliku; dotychczasowe treści strony nadal w content/site.json.

Nawigacja: trzy galaktyki w kolejności strategy → creation → digital (19 / 20 / 18 haseł). Zwykły scroll dokumentu steruje głębią kamery; sekcja jest sticky, a main stanowi trasę o wysokości viewportu + 2 kroki (krok = max(innerHeight, 720)). Nie przechwytujemy wheel/touch, więc telefon używa natywnego przewijania.

Trzy kropki pozwalają przeskoczyć do galaktyki. PageUp/PageDown, strzałki, Home/End i spacja działają poza linkami/przyciskami. Pauza wyłącza dryf, ale pozwala podróżować scrollem. Reduced motion wyłącza zoom, rozmycie i smugi oraz zmienia galaktyki bez przelotu. Canvas zatrzymuje renderowanie w ukrytej karcie i poza ekranem. Reset zwija scenę i zeruje scroll. Na telefonie opisy są przypięte do viewportu.

Nie ma paginacji „Więcej pomysłów”. Wszystkie 57 haseł pozostaje w tablicy items. updateGalaxy wybiera kategorię; layout dopasowuje kolumny do szerokości. Galaktyki mają własny kolor i orientację orbit. Układ i pierścienie korzystają z tego samego środka sceny.

Menu głównego app.js prowadzi do /proces/ pełną nawigacją. Proces jest niezależnym dokumentem i nie uruchamia routera React. ?lang=en utrzymuje język w obu kierunkach. Analityka przez istniejący build, po zgodzie.

Wdrożenie: istniejące GitHub main → Netlify. Aktualny runtime w produkcji: commit 4c36f266b87d3d889ba855922524eb9c3536f50b, wersja zasobów 20261025-connections. Lokalna dokumentacja nie jest wysyłana na hosting.

Domknięcie gestu: po 420 ms bez scrolla, jeżeli kamera pozostaje pomiędzy konstelacjami, kończymy podróż w kierunku gestu. Natywny wheel/touch nie jest blokowany. Drobne przesunięcia blisko celu nie wywołują przeskoku. Kliknięcie nawigacji/klawisze mają własną płynną nawigację; otwarty opis wstrzymuje automatyczne domknięcie. Test krótkich wheel +250/-250 px w normalnym trybie — PASS.

Opis na desktopie (od 901 px) otwiera się po stronie przeciwnej do klikniętego hasła: data-side=left/right na #detail. Przy zmianie języka pozostaje na tej samej stronie. Telefon zachowuje dotychczasowe stałe położenie. Wejście panelu: Web Animations API, 340 ms, pomijane przy reduced motion.

paintConnection rysuje krzywą Béziera od centralnej kropki do wybranego hasła: narastanie 650 ms, świetlny impuls w kolorze galaktyki i fala przy źródle do 850 ms. Pauza pozwala dokończyć reakcję na kliknięcie, następnie zatrzymuje impuls. Reduced motion pokazuje statyczną krzywą bez impulsu i fali. Nie mierzymy DOM w każdej klatce połączenia.

Walidacja wersji 57 haseł: build 68 adresów, składnia, wszystkie cele w publicznym dist, Playwright desktop (panel lewo/prawo), telefon 320×667 (brak kolizji wszystkich 3 galaktyk), 390×844 (stała pozycja opisu), linki EN, animacja przy pauzie i reduced motion — PASS.
