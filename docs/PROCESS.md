# Proces — obsługa

Adres https://ktbmedia.eu/proces/. Źródła: proces/index.html, universe.css, universe.js.

`items` zawiera 25 pierwszych haseł, a następnie 23 nowe (48 łącznie). Każdy rekord: kategoria, hasło PL, hasło EN, opis PL, opis EN, klucz celu. `destinations` mapuje klucz na istniejący adres i dwie etykiety linku. Cele muszą istnieć w publicznym dist; nie kierować do ukrytych realizacji. Nowe hasła i teksty tej interakcji utrzymujemy w tym pliku; dotychczasowe treści strony nadal w content/site.json.

PAGE_SIZE=24. Filtry wybierają kategorię i resetują numer konstelacji. Pauza/reduced-motion wyłącza ruch, ale zachowuje działające przyciski. Canvas zatrzymuje renderowanie w ukrytej karcie i poza ekranem. Na telefonie opisy są przypięte do viewportu.

Menu głównego app.js prowadzi do /proces/ pełną nawigacją. Proces jest niezależnym dokumentem i nie uruchamia routera React. ?lang=en utrzymuje język w obu kierunkach. Analityka przez istniejący build, po zgodzie.

Wdrożenie: istniejące GitHub main → Netlify. Runtime w produkcji: commit ac100b6e017d64bd805a199b2e26753847a9c767. Lokalna dokumentacja nie jest wysyłana na hosting.
