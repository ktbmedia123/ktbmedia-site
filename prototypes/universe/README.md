# Wszechświat pomysłów — prototyp KTBmedia

Uruchom z katalogu głównego repozytorium:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Otwórz http://127.0.0.1:8765/prototypes/universe/ i kliknij kropkę.

25 autorskich przykładowych haseł i opisów PL/EN znajduje się w `items` w universe.js. Filtry, pauza, dotyk, klawiatura i ograniczenie ruchu są obsługiwane. Fonty Archivo i Newsreader z Google Fonts mają lokalne fallbacki. Canvas nie wymaga bibliotek ani narzędzi 3D.

Prototyp nie jest częścią produkcyjnego buildu. Następny etap po ocenie: osadzenie sekcji w „O nas” i podłączenie języka do stanu React, z usuwaniem listenerów/obserwatorów przy zmianie trasy.

Wersja 2: puste wejście z czarną/złotą kropką, przejście przez kropkę do pełnego ekranu, oryginalne logo assets/logo.png i kursor ze strony. Kliknięte hasło zmienia środkową kropkę na kremową.
