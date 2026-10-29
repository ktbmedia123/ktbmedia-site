# Case studies — aktualizacja 29.10.2026

## Materiały i format

Źródło: przekazana przez użytkownika paczka `Case_Studies_KTB_Media_PDF_i_PNG.zip`, pięć PDF i noty pomiarowe z dołączonych paczek PNG. Źródłowe archiwum oraz pliki robocze pozostają poza repozytorium i hostingiem.

Janisz, QARMAX, AutoCentrum Elektronowa 18, Extreme Tyres i GT Serwis otrzymały natywny układ strony: fotografia, główny wynik, trzy dodatkowe wskaźniki, wyzwanie i podejście, dwa rozdziały z realizacjami, porównanie dwóch okresów, zakres prac i kontakt. Treści są tekstem HTML, także w prerenderze. Obrazy rozdziałów można otworzyć w pełnym rozmiarze.

`content/site.json` pozostaje źródłem prawdy. Opcjonalny obiekt `portfolio.items[].editorial` w PL/EN zawiera `headline`, `heroMetric`, `comparison`, `chapters` i `photoCredit`. `results[].context` opisuje okres danego wyniku. Wszystkie pola są w CMS; brak `editorial.heroMetric` pozostawia wcześniejszy układ realizacji. Pozostałe projekty i wspólna widoczność są zachowane.

Media: 15 plików WebP `assets/case-20261029-{slug}-*.webp`, razem około 1,84 MB. Fotografie i kreacje wyodrębniono z dostarczonych PDF; pełnych plansz z tekstem nie użyto jako treści strony. Okładka Extreme: Conor Shanahan / Drift Masters 2025, fotograf Paddy McGrath / Drift Masters; podpis widoczny na stronie PL/EN.

## Zasady publikacji po korekcie użytkownika

Notatki źródłowe i metodologiczne są wewnętrzne. Sekcja „Źródła, okresy i jak czytać wyniki” została usunięta z wszystkich pięciu realizacji PL/EN. Usunięto również reportingNotes, techniczne przypisy pod porównaniami oraz niewidoczne notatki tych realizacji z danych CMS i fallbacku, aby nie były udostępniane przez publiczne JSON/JS. Nie dodawać takich notatek do publicznego modelu treści.

Na kartach katalogu nie pokazujemy wyników liczbowych ani numeracji zdjęć. Karty zachowują fotografie, nazwy, opis i zakres. Wyniki są prezentowane wewnątrz konkretnego case study, z prostymi etykietami okresów. Podpisy autorów fotografii pozostają.

## Publikacja i utrzymanie

Build synchronizuje `content.js`, renderuje HTML oraz aktualizuje obrazy OG/Twitter i dane Article/CreativeWork z aktualnego CMS. Nowy adres: `/realizacje/qarmax/`. Wersja zasobów po korekcie: `20261029-cases-clean`. Dalsze wdrożenia przez istniejący GitHub main → Netlify.

Po zmianie treści wykonać build i kontrole opisane w `docs/SEO.md`; rzeczywiste daty zmian zapisywać w `seo/page-history.json`. Nie wyliczać nowych wzrostów z brakujących danych ani nie sumować wskaźników różnych typów.
