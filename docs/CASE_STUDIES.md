# Case studies — aktualizacja 29.10.2026

## Materiały i format

Źródło: przekazana przez użytkownika paczka `Case_Studies_KTB_Media_PDF_i_PNG.zip`, pięć PDF i noty pomiarowe z dołączonych paczek PNG. Źródłowe archiwum oraz pliki robocze pozostają poza repozytorium i hostingiem.

Janisz, QARMAX, AutoCentrum Elektronowa 18, Extreme Tyres i GT Serwis otrzymały natywny układ strony: fotografia, główny wynik, trzy dodatkowe wskaźniki, wyzwanie i podejście, dwa rozdziały z realizacjami, porównanie dwóch okresów, zakres prac, źródła i kontakt. Treści są tekstem HTML, także w prerenderze. Obrazy rozdziałów można otworzyć w pełnym rozmiarze.

`content/site.json` pozostaje źródłem prawdy. Opcjonalny obiekt `portfolio.items[].editorial` w PL/EN zawiera `headline`, `heroMetric`, `comparison`, `chapters`, `reportingNotes` i `photoCredit`. `results[].context` opisuje okres danego wyniku. Wszystkie pola są w CMS; brak `editorial.heroMetric` pozostawia wcześniejszy układ realizacji. Pozostałe projekty i wspólna widoczność są zachowane.

Media: 15 plików WebP `assets/case-20261029-{slug}-*.webp`, razem około 1,84 MB. Fotografie i kreacje wyodrębniono z dostarczonych PDF; pełnych plansz z tekstem nie użyto jako treści strony. Okładka Extreme: Conor Shanahan / Drift Masters 2025, fotograf Paddy McGrath / Drift Masters; podpis widoczny na stronie PL/EN.

## Interpretacja danych

- Janisz: 1764 raportowane leady Meta Ads z dostępnej historii do 29.10.2026, przed deduplikacją i kwalifikacją. 7 000 635 wyświetleń FB: 21.07.2025–28.10.2026. Miesięczne porównanie VIII–IX 2026.
- QARMAX: 1 873 999 wyświetleń FB, 1.11.2025–30.09.2026; 58,6× wobec tych samych 11 miesięcy rok wcześniej. Nowa realizacja, osobna od PMO Lubricants.
- AutoCentrum: 1499 kliknięć telefonu w Google, I–IX 2026. Porównanie II kwartałów 2025 i 2026 przypada podczas współpracy.
- Extreme: 537 611 wyświetleń Instagram, I–IX 2026. Współpraca od IV 2024; porównanie VIII–IX 2026, bez tworzenia niepełnej rocznej bazy sprzed współpracy.
- GT: 442 927 wyświetleń FB, XI 2025–IX 2026; raport Google ma 329 z 334 dni. Porównanie IV–V 2026 jest wybranym okresem.

Wyświetlenia mogą się powtarzać i nie są unikalnym zasięgiem. Kliknięcia telefonu/dojazdu nie są rozmowami, wizytami ani unikalnymi leadami. Kreacje mają podpisy wskazujące ich archiwalny charakter. Nie deklarujemy z nich wyników sprzedaży. Usunięto niepotwierdzone szeregi `chartData` oraz stare harmonogramy pięciu odświeżonych projektów.

## Publikacja i utrzymanie

Build synchronizuje `content.js`, renderuje HTML oraz aktualizuje obrazy OG/Twitter i dane Article/CreativeWork z aktualnego CMS. Nowy adres: `/realizacje/qarmax/`. Wersja zasobów: `20261029-cases`. Dalsze wdrożenia przez istniejący GitHub main → Netlify.

Po zmianie treści wykonać build i kontrole opisane w `docs/SEO.md`; rzeczywiste daty zmian zapisywać w `seo/page-history.json`. Nie wyliczać nowych wzrostów z brakujących danych ani nie sumować wskaźników różnych typów.
