# Proces — obsługa

Adres https://ktbmedia.eu/proces/. Źródła: proces/index.html, universe.css, universe.js.

`items` zawiera 25 pierwszych haseł, a następnie 23 nowe (48 łącznie). Każdy rekord: kategoria, hasło PL, hasło EN, opis PL, opis EN, klucz celu. `destinations` mapuje klucz na istniejący adres i dwie etykiety linku. Cele muszą istnieć w publicznym dist; nie kierować do ukrytych realizacji. Nowe hasła i teksty tej interakcji utrzymujemy w tym pliku; dotychczasowe treści strony nadal w content/site.json.

Nawigacja: trzy galaktyki w kolejności strategy → creation → digital (16 / 17 / 15 haseł). Zwykły scroll dokumentu steruje głębią kamery; sekcja jest sticky, a main stanowi trasę o wysokości viewportu + 2 kroki (krok = max(innerHeight, 720)). Nie przechwytujemy wheel/touch, więc telefon używa natywnego przewijania.

Trzy kropki pozwalają przeskoczyć do galaktyki. PageUp/PageDown, strzałki, Home/End i spacja działają poza linkami/przyciskami. Pauza wyłącza dryf, ale pozwala podróżować scrollem. Reduced motion wyłącza zoom, rozmycie i smugi oraz zmienia galaktyki bez przelotu. Canvas zatrzymuje renderowanie w ukrytej karcie i poza ekranem. Reset zwija scenę i zeruje scroll. Na telefonie opisy są przypięte do viewportu.

Nie ma paginacji „Więcej pomysłów”. Wszystkie 48 haseł pozostaje w tablicy items. updateGalaxy wybiera kategorię; layout dopasowuje kolumny do szerokości. Galaktyki mają własny kolor i orientację orbit. Układ i pierścienie korzystają z tego samego środka sceny.

Menu głównego app.js prowadzi do /proces/ pełną nawigacją. Proces jest niezależnym dokumentem i nie uruchamia routera React. ?lang=en utrzymuje język w obu kierunkach. Analityka przez istniejący build, po zgodzie.

Wdrożenie: istniejące GitHub main → Netlify. Runtime w produkcji: commit ac100b6e017d64bd805a199b2e26753847a9c767. Lokalna dokumentacja nie jest wysyłana na hosting.

Wersja ze scrollem: commit produkcyjny 1ead5d337e7ed61e417afe16f12ba4dc4cb99497. Testy lokalne: przewijanie 0→1→2→0, 48 unikalnych haseł, linki PL/EN, klawiatura, reduced motion, reset i brak kolizji haseł 320×667 — PASS.

Domknięcie gestu: po 420 ms bez scrolla, jeżeli kamera pozostaje pomiędzy konstelacjami, kończymy podróż w kierunku gestu. Natywny wheel/touch nie jest blokowany. Drobne przesunięcia blisko celu nie wywołują przeskoku. Kliknięcie nawigacji/klawisze mają własną płynną nawigację; otwarty opis wstrzymuje automatyczne domknięcie. Końcowy commit produkcyjny: 7918947f2148c0054611676f10835e7417467b16. Test krótkich wheel +250/-250 px w normalnym trybie — PASS.
