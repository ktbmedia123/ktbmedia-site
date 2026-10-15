# Widoczność realizacji

Panel: https://ktbmedia.eu/admin/
Po wdrożeniu: Strona → Wszystkie treści strony → Widoczność realizacji (wspólna dla PL i EN).

- Wyłącz pojedynczą pozycję w „Pojedyncze realizacje”, aby ukryć np. MójTeam.
- Przełącz kategorię Marketing 360, Aplikacje lub Strony WWW, aby ukryć całą kategorię.
- Opublikuj zmiany i zaczekaj na pomyślne wdrożenie Netlify.
- Ponowne włączenie przywraca zachowane treści i podstrony.

Ustawienie obejmuje obie wersje językowe, katalog realizacji, przyciski następnego projektu, polecane realizacje na landingach, statyczne linki SEO, llms.txt i sitemap. Podstrony ukrytych realizacji są pomijane w paczce publikacji; Netlify ma zwracać dla nich HTTP 404.
Widoczność nie jest autoryzacją dostępu: zachowane źródła i dane CMS mogą być odczytane. Nie umieszczaj w nich poufnych materiałów.

Build: `node scripts/build-site.mjs` (tworzy dist/ i synchronizuje content.js z CMS).
Testy: `node scripts/check-visibility.mjs`.
Netlify: build command `node scripts/build-site.mjs`, publish directory `dist` (w netlify.toml).
Nie publikuj folderu źródłowego bez builda — zawiera zachowane ukryte podstrony.
