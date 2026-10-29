# Marketing dla branży morskiej

Adres: https://ktbmedia.eu/marketing-dla-branzy-morskiej/. To rozbudowa istniejącego landingu, nie dodatkowa konkurująca podstrona. PL/EN, język EN przez ?lang=en i przełącznik menu.

Treści: content/site.json → pl/en.landings.marketing-dla-branzy-morskiej. Podstawowe pola oraz marine (segmenty, opisy usług, proces, pomiar, CTA, fotografia) dostępne w admin/config.yml. Usługi i ich opisy muszą mieć tę samą liczbę; build przerywa przy niezgodności. Dane case studies pochodzą z portfolio CMS; widoczność filtrowana wspólną logiką.

marine-landing.js jest czystym rendererem HTML, używanym w app.js oraz scripts/build-marine-landing.mjs. Nie utrzymywać osobnej kopii tekstu w statycznym HTML. Build generuje treść, metadane, WebPage/Service/FAQPage/BreadcrumbList/ItemList i synchronizuje legacy landing-configs.js w dist. Zwykłe linki do case/contact zachowują język; FAQ działa natywnie także bez JS. Główny build dołącza renderer do wszystkich wejść React, aby wejście ze stopki działało również w SPA.

SEO/GEO: jedno H1, czytelne segmenty i usługi, prawdziwe realizacje DDP Supply/RMDC, 9 pytań, linki do poradnika marine, Gdyni/Gdańska i O nas. Ten adres był już w sitemap/llms.txt; liczba URL pozostaje 68. Brak fikcyjnych wyników/metryk i obietnic cytowania w AI.

## Fotografia RMDC

- Plik: assets/marine-rmdc-orp-kormoran-dock.jpg (1280×853, około 208 KB).
- Tytuł źródła: ORP Kormoran (ship, 2017) in Dok 1 - Gdańsk Shiprepair Yard Remontowa.jpg.
- Autor: Thomas Dahlstrøm Nielsen, 6 czerwca 2025.
- Źródło: https://commons.wikimedia.org/wiki/File:ORP_Kormoran_(ship,_2017)_in_Dok_1_-_Gda%C5%84sk_Shiprepair_Yard_Remontowa.jpg
- Licencja CC BY 4.0: https://creativecommons.org/licenses/by/4.0/
- Pobrana miniatura 1280 px; bez retuszu. Zachować widoczny podpis autora, odnośnik do źródła i licencji oraz informację o pomniejszeniu. W hero, jeśli DDP zostanie ukryte, zdjęcie RMDC i podpis są również obsłużone.
- Potwierdzenie projektu okrętu przez RMDC: https://rmdc.rh.pl/references/orp-kormoran (initial/basic/classification/detail design i wsparcie realizacji/prób).
- Od 29.10.2026 ta sama fotografia jest okładką rozbudowanego case study `/realizacje/rmdc/`. Widoczny credit PL/EN, źródło, licencja i informacja o pomniejszeniu pozostają także w prerenderze; autorskie materiały KTB pokazują dalsze rozdziały.
- Zdjęcie przedstawia projekt klienta; zakres pracy KTB opisany osobno w karcie. Nie przypisywać KTB projektowania okrętu ani autorstwa fotografii.

Wdrożenie jak reszta strony: GitHub main → Netlify. Aktualny SHA i walidacja w docs/STATUS.md. Dokumentacja pozostaje lokalna.
