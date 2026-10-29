# Case studies — aktualizacja 29.10.2026

## Materiały i format

Źródło: przekazana przez użytkownika paczka `Case_Studies_KTB_Media_PDF_i_PNG.zip`, pięć PDF i noty pomiarowe z dołączonych paczek PNG. Źródłowe archiwum oraz pliki robocze pozostają poza repozytorium i hostingiem.

Janisz, QARMAX, AutoCentrum Elektronowa 18, Extreme Tyres, GT Serwis, Wiktorowicz, Sergiej Auto Serwis, DED Serwis, AR Serwis, PulseGT, PMO Lubricants, DDP Supply i Remontowa Marine Design korzystają z natywnego układu strony: fotografia, blok efektów lub zakresu, wyzwanie i podejście, rozdziały z realizacjami, opcjonalne porównanie dwóch okresów, zakres prac i kontakt. Większość ma dwa rozdziały; Sergiej ma trzy. Treści są tekstem HTML, także w prerenderze. Obrazy rozdziałów można otworzyć w pełnym rozmiarze.

`content/site.json` pozostaje źródłem prawdy. Opcjonalny obiekt `portfolio.items[].editorial` w PL/EN zawiera `headline`, `heroMetric`, `comparison`, `chapters`, opcjonalne `coverFit`, `outcomeLabel`, `photoCredit`, `photoSourceUrl` i `photoLicenseUrl`. `results[].context` opisuje okres danego wyniku. Wszystkie pola są w CMS; brak `editorial.heroMetric` pozostawia wcześniejszy układ realizacji. `outcomeLabel` pozwala opisać jakościowy zakres zamiast wyników liczbowych. Pozostałe projekty i wspólna widoczność są zachowane.

Media: 15 plików WebP `assets/case-20261029-{slug}-*.webp`, razem około 1,84 MB. Fotografie i kreacje wyodrębniono z dostarczonych PDF; pełnych plansz z tekstem nie użyto jako treści strony. Okładka Extreme: Conor Shanahan / Drift Masters 2025, fotograf Paddy McGrath / Drift Masters; podpis widoczny na stronie PL/EN.


Druga paczka: `Nowe_Case_Studies_KTB_Media_Do_Maila.zip`, siedem PDF. Dodano cztery marketingowe case studies (`wiktorowicz`, `sergiej-auto-serwis`, `ded-serwis`, `ar-serwis`) i odświeżono istniejące `pulsegt`, `pmo-lubricants`, `ddp-supply`. Nie utworzono duplikatów poprzednich pięciu realizacji. Nowy marketingowy Sergiej pozostaje odrębny od wpisu strony WWW w kategorii digital.

Nowe media z drugiej paczki: 21 plików `assets/case-20261029b-{slug}-*.webp`, około 2,30 MB. Pierwotne okładki DED i AR z kreacjami zastąpiono później fotografiami użytkownika; kreacje zachowano w rozdziałach. `editorial.coverFit: contain` pozwala pokazać pełny kadr tam, gdzie jest potrzebny. Dłuższe liczby otrzymują osobny rozmiar typografii. Wiktorowicz, Sergiej i DDP mają porównanie dwóch stanów obserwujących; pozostałe cztery projekty nie wymagają wykresu porównawczego.

Dla PulseGT zakres WWW to doradztwo, dla PMO bieżące prace webmasterskie. Przy obu pozostaje etykieta „wybrane reklamy” dla głównych wyników reklamowych. Współpraca PulseGT i PMO zakończyła się w czerwcu 2025; nie opisujemy jej jako bieżącej. Stare chartData, timeline i notes tych trzech odświeżanych projektów usunięto.

Korekta fotografii PMO: okładka i drugi blok używają nowych zdjęć przekazanych bezpośrednio przez użytkownika (samochód BMW z oznaczeniami PMO oraz szeroki kadr driftu). Dwa zoptymalizowane WebP mają prefiks `case-20261029c-pmo-lubricants-`, razem około 0,49 MB. Pełne kadrowanie okładki zachowuje samochód w katalogu i hero. PulseGT ma nazwę bez dopisku „US Technology” w PL/EN, katalogu i metadanych.

Fotografie warsztatów: sześć zoptymalizowanych WebP `case-20261029d-*`, razem około 1,18 MB. Potwierdzone przypisanie użytkownika: DED — `ded serwis.webp`; Wiktorowicz — `KTB00563.jpg`, `KTB04409.jpg`, `KTB00049.jpg`; AR Serwis — `A7400859-2.jpg`; Sergiej — `KTB03081.jpg`, `KTB04456.jpg`, `KTB09857.jpg`, `KTB03057.jpg`. Cztery nowe okładki, dyptyk Wiktorowicza i kompozycja trzech kadrów Sergieja. Oryginały poza hostingiem; bez retuszu treści i powiększania rozdzielczości.

RMDC: rozbudowano istniejące `/realizacje/rmdc/`, bez dodatkowego adresu. Opis identyfikacji, komunikacji PL/EN na Facebooku, Instagramie i LinkedIn, employer brandingu, serii „W głębi projektu”, animowanego portfolio jednostek i relacji foto-wideo oparty na zachowanych materiałach KTB. Dwie oryginalne kreacje `case-rmdc-2.jpg` i `case-rmdc-3.jpg`; okładka ORP Kormoran z podpisem autora i linkami źródła/licencji — zasady w `docs/MARINE.md`. Usunięto stare niepotwierdzone +100%, wykres i harmonogram. Blok „Zakres współpracy” pokazuje PL/EN, markę, zespół i treści zamiast statystyk. Bez deklaracji budowy WWW ani kampanii performance.

## Zasady publikacji po korekcie użytkownika

Notatki źródłowe i metodologiczne są wewnętrzne. Sekcja „Źródła, okresy i jak czytać wyniki” została usunięta z wszystkich pięciu realizacji PL/EN. Usunięto również reportingNotes, techniczne przypisy pod porównaniami oraz niewidoczne notatki tych realizacji z danych CMS i fallbacku, aby nie były udostępniane przez publiczne JSON/JS. Nie dodawać takich notatek do publicznego modelu treści.

Na kartach katalogu nie pokazujemy wyników liczbowych ani numeracji zdjęć. Karty zachowują fotografie, nazwy, opis i zakres. Wyniki są prezentowane wewnątrz konkretnego case study, z prostymi etykietami okresów. Podpisy autorów fotografii pozostają.

Tomex Brakes ukryty na prośbę użytkownika, z zachowaniem treści w CMS. Także blogowe polecenia realizacji respektują jej widoczność. Ukryte podstrony nie są publikowane; Netlify zwraca wymuszone HTTP 404. Ukryte pozostają również Bigmot i MójTeam.

## Publikacja i utrzymanie

Build synchronizuje `content.js`, renderuje HTML oraz aktualizuje obrazy OG/Twitter i dane Article/CreativeWork z aktualnego CMS. Case studies mają adresy `/realizacje/{slug}/`. Bieżąca wersja zasobów: `20261029-marine-workshops`. Katalog: 13 marketingowych realizacji, 4 aplikacje i 7 stron WWW; 13 realizacji editorial. Build publikuje 72 adresy (71 React + Proces). Dalsze wdrożenia przez istniejący GitHub main → Netlify.

Po zmianie treści wykonać build i kontrole opisane w `docs/SEO.md`; rzeczywiste daty zmian zapisywać w `seo/page-history.json`. Nie wyliczać nowych wzrostów z brakujących danych ani nie sumować wskaźników różnych typów.
