# KTBmedia — zasady dalszej pracy

- Rozmawiaj z użytkownikiem po polsku.
- To jest stały katalog roboczy projektu: /Users/radek/Documents/Codex/Projekty/ktbmedia-site.
- Na początku pracy przeczytaj docs/PROJECT.md oraz docs/STATUS.md. Sprawdź git status i najnowsze commity; nie zakładaj, że stary czat opisuje bieżący stan.
- Źródło prawdy treści CMS: content/site.json. content.js jest lokalnym fallbackiem, synchronizowanym przez build.
- Zachowaj wygląd i hero „Marka, którą czuć w sieci.”. Użytkownik odrzucił zmianę tego hero na nagłówek SEO.
- Zachowaj obsługę języka polskiego i angielskiego. Widoczność realizacji jest wspólna dla obu języków.
- Ukrycie oznacza usunięcie realizacji z katalogów, linkowania, mapy witryny i publicznej podstrony, z zachowaniem treści do ponownego włączenia. To nie mechanizm ochrony poufnych danych.
- Po każdej większej zmianie zaktualizuj docs/STATUS.md: wykonane prace, walidacja, stan wdrożenia, dalsze kroki i istotne decyzje.
- Nie przechowuj sekretów w repo ani dokumentacji. Nie nadpisuj zmian CMS nieaktualnymi kopiami ze starego folderu.
- Do wdrożeń używaj istniejącego GitHub / Netlify. Nie przenoś strony do innego hostingu.
