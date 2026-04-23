/* KTB Media — content (bilingual) */
const COPY = {
  pl: {
    nav: ["Usługi", "Realizacje", "Proces", "O nas", "Blog", "Kontakt"],
    cta: "Zacznij projekt",
    sections: {
      hero: true,
      marquee: true,
      services: true,
      about: true,
      showcase: true,
      process: true,
      testimonials: true,
      portfolio: true,
      blog: true,
      contact: true,
      founders: false,
      miniCta: true
    },
    hero: {
      eyebrow: "Agencja 360 · Gdańsk · Od 2022",
      title1: "Marka,",
      title2: "którą",
      titleIt: "czuć",
      title3: "w sieci.",
      lede: "Zewnętrzny dział marketingu dla firm, które mają dość korporacyjnego bełkotu. Budujemy, prowadzimy, skalujemy — jak partner, nie podwykonawca.",
      cta1: "Porozmawiajmy",
      cta2: "Zobacz realizacje",
      image: "/assets/statue-greek.webp",
      imageAlt: "",
      metrics: [
        { k: "Założone", v: "2022", big: true },
        { k: "Zrealizowane projekty", v: "120+", big: true },
        { k: "Średni wzrost ROAS", v: "3.4×", big: true },
        { k: "Zespół", v: "2 założycieli", big: false }
      ]
    },
    marquee: ["Strategia", "Kreacja", "Social Media", "Web Design", "E-commerce", "Google Ads", "Meta Ads", "SEO", "Identyfikacja"],
    services: {
      label: "# — W czym pomagamy",
      title1: "Nasze",
      titleIt: "usługi.",
      items: [
        { n: "01", t: "Social Media", tIt: "/ content", d: "Prowadzimy profile, które budują zasięg i więź z marką. Strategia, content, community, reporting." },
        { n: "02", t: "Strony", tIt: "internetowe", d: "Nowoczesne, szybkie, responsywne. Zoptymalizowane pod SEO i konwersję — nie tylko pod design awards." },
        { n: "03", t: "E-commerce", tIt: "", d: "Platformy sprzedażowe od Shopify po custom. UX, który sprzedaje i analityka, która podpowiada." },
        { n: "04", t: "Branding", tIt: "/ kreacja", d: "Logo, system, identyfikacja wizualna. Od zera lub rebrand — żeby marka miała głos, a nie tylko kolor." },
        { n: "05", t: "Performance", tIt: "marketing", d: "Google, Meta, TikTok, LinkedIn. Kampanie rozliczane z wyniku, nie ze slajdów." },
        { n: "06", t: "Strategia", tIt: "& consulting", d: "Audyt, mapa drogowa, warsztaty. Pokazujemy co robić — i co przestać robić natychmiast." }
      ]
    },
    about: {
      label: "# — Dlaczego my",
      title1: "Wyróżnij się",
      titleIt: "albo",
      title2: "zgiń.",
      lede: "Dziesiątki agencji robią to samo. My robimy to inaczej — z zaangażowaniem, bez bełkotu, z wynikiem, który widać w rachunkach.",
      ledeAccent: "wynikiem",
      image: "/assets/statue-samurai.webp",
      imageAlt: "",
      features: [
        { k: "A", t: "Agencja 360", d: "Jeden partner dla wszystkich kanałów. Bez szukania pięciu podwykonawców." },
        { k: "B", t: "Twój czas", d: "Zdejmujemy marketing z Twoich barków. Zajmuj się biznesem, my ogarniamy resztę." },
        { k: "C", t: "Bez schematów", d: "Gwarantujemy marketing, który wyłamuje się ze standardów. Bez nudy." },
        { k: "D", t: "Dział in-house", d: "Działamy jak Twój zespół. Luzem, bezpośrednio, partnersko." }
      ],
      quote: "Czas niszczy marki szybciej niż rynek. My budujemy takie, które się starzeją pięknie.",
      quoteAccent: "pięknie",
      cap: "KTB Media — Manifest 01"
    },
    showcase: {
      label: "— Jak pracujemy",
      blocks: [
        {
          eyebrow: "Strategia",
          title1: "Apki i stronki",
          titleAccent: "zjadamy",
          title2: "na śniadanie.",
          body: "Performance marketing w 2026 to nie spray-and-pray. To głęboka analityka, testy A/B/C/D, automatyzacje, custom integracje. Dla jednego klienta zbudowaliśmy własny panel BI w 3 dni. Dla innego – integrację Meta Conversions API, która odzyskała 38% konwersji po ATT.",
          image: "/assets/showcase-1.jpg",
          imageAlt: "Scena kreatywna — strategia",
          placeholderLabel: "Zdjęcie: strategia / tech"
        },
        {
          eyebrow: "Brand",
          title1: "Tworzymy zasady.",
          titleAccent: "Które działają",
          title2: "w sprzedaży.",
          body: "Brand, który nie sprzedaje to tylko ładny plakat. Dlatego każda identyfikacja, którą robimy, zaczyna się od arkusza Excela z KPI, a kończy systemem – nie moodboardem. Sprawdzamy co mówi brand, co kupuje klient, i co z tego wynika dla rachunków.",
          image: "/assets/showcase-2.jpg",
          imageAlt: "Scena kreatywna — branding",
          placeholderLabel: "Zdjęcie: brand / sprzedaż"
        },
        {
          eyebrow: "Współpraca",
          title1: "Dołącz do nas,",
          titleAccent: "będzie",
          title2: "ciekawie.",
          body: "Nie robimy discovery calli za 10 tys. Nie wysyłamy decków, których nikt nie czyta. Rozmawiamy, pokazujemy case studies, dogadujemy scope w tydzień. Zaczynamy. Pierwszy realny output widzisz w ciągu 14 dni. Bez gwiazdek, bez aneksów co miesiąc.",
          image: "/assets/showcase-3.jpg",
          imageAlt: "Scena kreatywna — współpraca",
          placeholderLabel: "Zdjęcie: współpraca / fun"
        }
      ]
    },
    process: {
      label: "# — Jak to robimy",
      title1: "Nie robimy",
      titleIt: "hałasu.",
      title2: "Robimy sens.",
      steps: [
        { n: "01", t: "Rozmowa", d: "Brief, cele, kontekst. Bez formularzy, bez discovery calli za 10 tys." },
        { n: "02", t: "Strategia", d: "Research, mapowanie, rekomendacje. Wiemy co zrobić zanim dotkniemy figmy." },
        { n: "03", t: "Realizacja", d: "Design, kod, kampanie, content. Sprinty dwutygodniowe, demo co piątek." },
        { n: "04", t: "Skala", d: "Optymalizacja, A/B testy, raporty co miesiąc. Dalej budujemy, nie oddajemy i znikamy." }
      ]
    },
    portfolio: {
      label: "# — Zaufali nam",
      title1: "Wybrane",
      titleIt: "realizacje.",
      lede: "Każdy projekt to indywidualna strategia. Zero template'ów, zero copy-paste.",
      items: [
        {
          num: "01", slug: "autocentrum-elektronowa", title1: "AutoCentrum", titleIt: "Elektronowa 18",
          tag: "Serwis · Social · Video", year: "2024", ph: "ph-stripe-1",
          brief: "Duży serwis samochodowy w Łodzi z pełną obsługą pojazdów wszystkich marek i zaawansowanymi usługami blacharsko-lakierniczymi.",
          challenge: "Zwiększenie rozpoznawalności i autorytetu AutoCentrum jako serwisu na poziomie ASO poprzez stworzenie nowej identyfikacji wizualnej, efektywne działania marketingowe online, produkcję profesjonalnych materiałów oraz zacieśnienie współpracy z marką Petronas.",
          solution: "Stworzyliśmy nową identyfikację wizualną i przejęliśmy prowadzenie social mediów, pozycjonowanie wizytówki Google oraz kampanie Meta Ads. Wyprodukowaliśmy serię materiałów wideo: wywiad z właścicielem, prezentacje działów blacharsko-lakierniczego i mechanicznego. Sesja fotograficzna pokazująca serwis i zespół mechaników. Zacieśniliśmy współpracę z marką Petronas pozycjonując AutoCentrum jako autoryzowanego partnera.",
          results: [
            { k: "Wyświetlenia wideo", v: "1M+" },
            { k: "Obserwujący", v: "×4" },
            { k: "Pozycja ASO", v: "Lider regionu" },
            { k: "Partner", v: "Petronas" }
          ],
          palette: ["#E86F1F", "#1a1a1a", "#f4f4f4", "#c9c9c9"],
          images: ["/assets/case-autocentrum-elektronowa-1.jpg", "/assets/case-autocentrum-elektronowa-2.jpg", "/assets/case-autocentrum-elektronowa-3.jpg"],
          notes: ["Full rebrand w 6 tygodni", "Wywiad z właścicielem jako flagowe wideo", "Działy blacharsko-lakiernicze i mechaniczne w osobnych seriach"]
        },
        {
          num: "02", slug: "rmdc", title1: "Remontowa", titleIt: "Marine Design",
          tag: "B2B · Brand · Social PL/EN", year: "2024", ph: "ph-stripe-2",
          brief: "Biuro projektowe okrętów i oceanotechniki, część grupy kapitałowej Remontowa Holding. Kompleksowe rozwiązania dla nowych i istniejących jednostek pływających.",
          challenge: "Stworzenie nowej identyfikacji wizualnej podkreślającej profesjonalne podejście do projektowania i współpracę z największymi firmami z branży morskiej. Ukazanie firmy jako świetnego miejsca do pracy, zwiększenie liczby obserwujących w mediach społecznościowych i zbudowanie międzynarodowej rozpoznawalności.",
          solution: "Przebudowaliśmy identyfikację wizualną pod B2B premium. Prowadzenie social mediów FB/IG/LinkedIn w języku polskim i angielskim. Stworzyliśmy serię \"W głębi projektu\" pokazującą pracownie i sylwetki pracowników. Opracowaliśmy animowane portfolio projektów jednostek pływających. Wspieraliśmy aktywną rekrutację nowych pracowników i tworzyliśmy relacje foto-wideo z targów i eventów.",
          results: [
            { k: "Wzrost obserwujących", v: "+100%" },
            { k: "Zasięg", v: "Międzynarodowy" },
            { k: "Rekrutacja", v: "Aktywna" },
            { k: "Publikacje", v: "Grupa Remontowa" }
          ],
          palette: ["#1e3a8a", "#2aa8a8", "#f4f4f4", "#8a9aab"],
          images: ["/assets/case-rmdc-1.jpg", "/assets/case-rmdc-2.jpg", "/assets/case-rmdc-3.jpg"],
          notes: ["Komunikacja dwujęzyczna PL/EN", "Seria \"W głębi projektu\" – behind the scenes", "Animowane portfolio jednostek pływających"]
        },
        {
          num: "03", slug: "pmo-lubricants", title1: "PMO", titleIt: "Lubricants",
          tag: "B2B/B2C · Performance · Events", year: "2024", ph: "ph-stripe-3",
          brief: "Producent olejów silnikowych klasy premium z jednej z najnowocześniejszych fabryk w Holandii. Seria eXpert i eXtreme.",
          challenge: "Zwiększenie rozpoznawalności marki wśród B2B i B2C, wprowadzenie serii eXpert oraz nowych produktów do serii eXtreme, stworzenie nowej identyfikacji wizualnej i zwiększenie sprzedaży w Polsce.",
          solution: "Pełen pakiet: konsulting w zakresie finansów i sprzedaży, merchandise i reklamy pneumatyczne, zarządzanie social media i kampaniami Google Ads oraz Meta Ads, współpraca z influencerami, udział w eventach motoryzacyjnych z relacjami foto-wideo, usługi graficzne i webmasterskie, aktywne poszukiwanie klientów B2B. Dedykowane promocje dla dystrybutorów i program benefitów.",
          results: [
            { k: "Wzrost obserwujących", v: "+150%" },
            { k: "Wyświetlenia reklam", v: "15M+" },
            { k: "Nowi dystrybutorzy B2B", v: "4" },
            { k: "Eventy motoryzacyjne", v: "20+" },
            { k: "Materiały wideo", v: "100+" }
          ],
          palette: ["#e88420", "#8b1a1a", "#1a1a1a", "#f4f4f4"],
          images: ["/assets/case-pmo-lubricants-1.jpg", "/assets/case-pmo-lubricants-2.jpg", "/assets/case-pmo-lubricants-3.jpg"],
          notes: ["Współpraca z influencerami motoryzacyjnymi", "Ponad 20 eventów motoryzacyjnych rocznie", "Optymalizacja kosztów działalności"]
        },
        {
          num: "04", slug: "tomex-brakes", title1: "Tomex", titleIt: "Brakes",
          tag: "B2B/B2C · Strategy · Brand", year: "2024", ph: "ph-stripe-1",
          brief: "Wiodący polski producent elementów układów hamulcowych z 45-letnią tradycją. Klocki, tarcze, komponenty – innowacje technologiczne i ekologiczne materiały.",
          challenge: "Zwiększenie świadomości marki Tomex Brakes wśród klientów B2B i B2C poprzez strategię \"Made in Poland\", podkreślającą jakość produktów, certyfikaty oraz wieloletnią tradycję. Firma jako producent, nie pakowacz.",
          solution: "Opracowanie i wdrożenie kompleksowej strategii marketingowej. Stworzenie i prowadzenie profili w social mediach: Facebook, Instagram, LinkedIn, Google. Prace graficzne, kreacja spójnego Key Visual. Prowadzenie kampanii Meta Ads. Retoryka podkreślająca pozycję Tomex jako lidera produkcji układów hamulcowych w Polsce i Europie.",
          results: [
            { k: "Pozycja rynkowa", v: "Lider EU" },
            { k: "Obserwujący", v: "×2" },
            { k: "Engagement", v: "+500%" },
            { k: "Komunikacja", v: "Made in Poland" }
          ],
          palette: ["#1d2d5c", "#3a5fd1", "#f4f4f4", "#c41e3a"],
          images: ["/assets/case-tomex-brakes-1.jpg", "/assets/case-tomex-brakes-2.jpg", "/assets/case-tomex-brakes-3.jpg"],
          notes: ["Strategia \"Made in Poland\"", "Key Visual spójny we wszystkich kanałach", "Producent, nie pakowacz – pozycjonowanie"]
        },
        {
          num: "05", slug: "pulsegt", title1: "PulseGT", titleIt: "US Technology",
          tag: "Launch · Brand · Influencer", year: "2024", ph: "ph-stripe-2",
          brief: "Producent dodatków i płukanek motoryzacyjnych z opatentowanymi technologiami – detergenty i estry dla najwyższej wydajności silnika i układów paliwowych.",
          challenge: "Strategia wprowadzenia nowego produktu na rynek polski, obejmująca opracowanie identyfikacji marki oraz pozyskanie bazy klientów od zera.",
          solution: "Kompleksowa strategia wprowadzenia produktów PulseGT na rynek polski bez opóźnień. Consulting przy projektowaniu etykiet, puszek i nowoczesnej strony internetowej. Profesjonalna sesja zdjęciowa produktów. Współpraca z influencerami motoryzacyjnymi (WheelWithIt, Strzelecki Garage, Tasiemski, Kuba Dudek) oraz wydarzeniami motorsportowymi (Drift, 1/4 mili). Program benefitów dla pracowników i influencerów. Materiały promocyjne: koszulki, bluzy, czapki, katalogi, stojaki, gadżety. Stworzenie od podstaw profili Instagram, Facebook, LinkedIn i wizytówki Google.",
          results: [
            { k: "Wyświetlenia Ads", v: "1M+" },
            { k: "Obserwujący (3 mies.)", v: "3 330" },
            { k: "Influencerzy", v: "WheelWithIt · Strzelecki Garage · Tasiemski" },
            { k: "Kanały uruchomione", v: "IG · FB · LI · Google" }
          ],
          palette: ["#00b8d4", "#d4008f", "#1a1a1a", "#f4f4f4"],
          images: ["/assets/case-pulsegt-1.jpg", "/assets/case-pulsegt-2.jpg", "/assets/case-pulsegt-3.jpg"],
          notes: ["Wprowadzenie bez opóźnień", "System benefitów powiązany ze sprzedażą", "Motorsport: Drift i 1/4 mili"]
        }
      ]
    },
    testi: {
      label: "# — Mówią o nas",
      title1: "Słowo",
      titleIt: "klienta.",
      items: [
        { q: "Kampanie odmieniły sposób, w jaki pozyskujemy leady B2B. Zero bzdur — raporty co tydzień i ludzie, którzy odbierają telefon.", name: "Marek Kowalski", co: "TechSolutions · CEO" },
        { q: "Sklep + social + performance w jednej paczce. W pierwszym kwartale sprzedaż +150%. Zostajemy na dłużej.", name: "Anna Nowak", co: "Natural Beauty · Founder" },
        { q: "Oszczędność czasu i nieszablonowe podejście — dokładnie to, co obiecywali na pierwszym calu. Polecam zdecydowanie.", name: "Tomasz Wójcik", co: "Architekci Wnętrz · Partner" }
      ]
    },
    team: {
      label: "# — Kim jesteśmy",
      title1: "Dwójka,",
      titleIt: "która ogarnia wszystko.",
      lede: "Bez korpo-struktur, bez pośredników. Rozmawiasz bezpośrednio z założycielami — tymi samymi ludźmi, którzy prowadzą Twoje kampanie i piszą strategię.",
      items: [
        {
          init: "MG",
          name: "Mateusz Gajewski",
          role: "Co-founder /",
          roleIt: "strategia & marka",
          photo1: "/assets/founder-mateusz-1.jpg",
          photo2: "/assets/founder-mateusz-2.jpg",
          bio: "Od ponad dekady działa w marketingu, konsekwentnie łącząc strategiczne myślenie z umiejętnością wdrażania skutecznych i mierzalnych działań. Tworzy rozwiązania, które angażują, budują wartość marki i wspierają rozwój biznesu — niezależnie od branży. Ma doświadczenie zarówno w planowaniu i realizacji kampanii marketingowych, jak i w budowaniu marek od podstaw: od identyfikacji wizualnej i komunikacji, przez social media, content i działania promocyjne, po rozwój e-commerce i automatyzację procesów. Największą satysfakcję daje mu tworzenie strategii marketingowych, które realnie działają — są przemyślane, dopasowane do kontekstu i konsekwentnie wdrażane w życie."
        },
        {
          init: "RS",
          name: "Radosław Sobczyk",
          role: "Co-founder /",
          roleIt: "rozwój & technologie",
          photo1: "/assets/founder-radoslaw-1.jpg",
          photo2: "/assets/founder-radoslaw-2.jpg",
          bio: "Pasjonat branży motoryzacyjnej i ekspert nowoczesnego marketingu, który lubi myśleć poza schematami. Prowadzi zespoły inspirując ludzi do działania i pomagając im odkrywać swój największy potencjał. Uważnie obserwuje nowe technologie — szczególnie sztuczną inteligencję — i szuka dla nich praktycznych zastosowań w biznesie: automatyzacji, optymalizacji procesów, skalowania. Doświadczony negocjator ze strategicznym podejściem do biznesu. Dla niego sukces to nie pojedyncze osiągnięcie, tylko ciągły progres — połączenie technologii, pasji i strategii. Równie ważna jak wyniki jest atmosfera pracy i zespół, który naprawdę chce."
        }
      ]
    },
    pricing: {
      label: "# — Zasady współpracy",
      title1: "Proste",
      titleIt: "stawki.",
      lede: "Bez retainerów w gwiazdkach. Wybierasz pakiet, dostajesz zespół, działamy.",
      plans: [
        {
          k: "Start",
          t: "Starter",
          tIt: "",
          amt: "3 675",
          per: "/ miesiąc",
          items: ["<b>Social media</b> — 12 postów/mies.", "Community & reporting", "1 kampania performance", "Miesięczny raport + call"],
          cta: "Zaczynamy",
          featured: false
        },
        {
          k: "Najczęściej wybierany",
          t: "Growth",
          tIt: "",
          amt: "7 350",
          per: "/ miesiąc",
          items: ["<b>Wszystko ze Starter +</b>", "Performance (Google + Meta)", "Strategia & mapa drogowa", "2× content shoot / kwartał", "Dedykowany project manager"],
          cta: "Rośniemy razem",
          featured: true,
          badge: "Popularne"
        },
        {
          k: "Pełny outsourcing",
          t: "Dział",
          tIt: "marketingu",
          amt: "Custom",
          per: "Na wycenę",
          items: ["<b>Cały dział marketingu</b>", "Branding & rebrand", "Web + e-commerce", "Pełny performance stack", "Dedykowany zespół 4–6 osób"],
          cta: "Porozmawiajmy",
          featured: false
        }
      ]
    },
    blog: {
      label: "# — Z notatek",
      title1: "Dziennik",
      titleIt: "redakcji.",
      items: [
        {
          slug: "marketing-dla-samego-marketingu",
          cat: "Strategia", date: "Kwi 2026",
          title1: "Jak przestać robić marketing", titleIt: "dla samego marketingu.",
          image: "/assets/blog-marketing.jpg",
          lede: "Generowanie content calendara nie jest strategią. Publikowanie „bo trzeba” kosztuje tak samo, jak publikowanie po coś — ale przynosi zero. Oto jak odróżnić ruch od postępu.",
          body: [
            { h: "Ruch ≠ postęp" },
            { p: "Większość działów marketingu, które widzieliśmy, ma jeden wspólny mianownik: dużo ruchu, mało postępu. Kampania za kampanią, reel za reelem, newsletter w każdy wtorek. A za tym wszystkim — ani jednej odpowiedzi na proste pytanie: **po co?**" },
            { p: "Ten mechanizm jest genialny w swojej samowystarczalności. Social media generuje treści, które nakręcają kolejne treści. Kampanie generują dane, które uzasadniają następne kampanie. Cały system obraca się wokół własnej osi, a jedynym produktem tej orbity są kolejne TODO." },
            { h: "Co to jest „marketing dla samego marketingu\"" },
            { p: "To sytuacja, w której **sam fakt robienia** został pomylony z celem. Symptomy są proste do rozpoznania:" },
            { list: [
              "Content kalendarz pełny — ale nie wiadomo jaki problem klienta każdy post rozwiązuje.",
              "KPI mierzone w lajkach, zasięgach, „impressionach” — nigdy w tym, co bezpośrednio wpływa na rachunki.",
              "Każda kampania opisywana jako sukces — „bo zasięgi rosły”.",
              "Raporty, które nikogo nie interesują — robione tylko dlatego, że „klient lubi raport”.",
              "Nowe inicjatywy dokładane bez usuwania starych — bo nikt nie ma odwagi powiedzieć, co przestaje działać."
            ]},
            { h: "Test dwóch pytań" },
            { p: "Za każdym razem, gdy Twój zespół (lub Ty) zabiera się do planowania nowej akcji, zadaj dwa pytania:" },
            { list: [
              "**Który konkretny cel biznesowy to wspiera?** Nie „budowanie marki”, nie „engagement”. Konkret: więcej zapytań ofertowych w segmencie X, niższy CAC w kanale Y, wyższa wartość koszyka.",
              "**Jak rozpoznam, że to zadziałało albo nie?** Jeśli odpowiedź to „po prostu zobaczymy”, to znaczy, że zgadujesz."
            ]},
            { p: "Jeśli na którekolwiek z tych pytań nie masz odpowiedzi — wstrzymaj się. Nie dlatego, że akcja jest zła. Dlatego, że robisz ją z przyzwyczajenia, nie z decyzji." },
            { h: "Zamień kampanie na hipotezy" },
            { p: "Zamiast planować „kampanię wizerunkową\", planuj testy hipotez. Każde działanie marketingowe to w zasadzie zakład z rzeczywistością: _wierzę, że jeśli pokażę X grupie Y, stanie się Z_. Jeśli umiesz to zdanie napisać — masz kampanię. Jeśli nie umiesz — masz tylko wydatek." },
            { p: "Hipoteza ma trzy zalety: (1) zmusza do konkretu, (2) domyślnie zakłada, że możesz się mylić, (3) wymusza pomiar. Brzmi jak coś dla korporacji z 500-osobowym działem analityki? Nie. Można to robić w arkuszu kalkulacyjnym. Ważny jest sposób myślenia, nie narzędzie." },
            { h: "Mniej, celniej, głośniej" },
            { p: "Prawdziwy wzrost u większości firm, z którymi pracowaliśmy, nie przyszedł z dołożenia kolejnego kanału. Przyszedł z **odcięcia trzech rzeczy**, które nie działały, i zainwestowania tych budżetów w jedno działanie, które zaczynało działać. Dyscyplina jest niewidzialna, bo polega na tym, czego nie robisz." },
            { p: "Jeśli czujesz, że Twój marketing zamienił się w fabrykę treści na autopilocie — zatrzymaj się na tydzień. Wyłącz wszystko, co nie ma jasnego uzasadnienia biznesowego. Zobacz, co naprawdę się wali, a co po prostu przestało wymagać siły." },
            { p: "Wracasz za tydzień i pracujesz już tylko na tym, co zostało." }
          ]
        },
        {
          slug: "meta-ads-2026",
          cat: "Performance", date: "Mar 2026",
          title1: "Meta Ads w 2026:", titleIt: "co się zmieniło.",
          image: "/assets/blog-rebrand.jpg",
          lede: "ATT już jest old news. Od ostatnich 18 miesięcy krajobraz Meta Ads przeszedł przez trzy fundamentalne zmiany. Streszczenie dla marketerów, którzy nie uczą się platformy od zera co kwartał.",
          body: [
            { h: "Advantage+ to teraz domyślne ustawienie" },
            { p: "Kampanie Advantage+ Shopping i Advantage+ Lead Generation weszły z ustawienia eksperymentalnego do ustawienia domyślnego. Platforma sama dobiera kreacje, placementy i audiencje — a manualne setupy w większości kont dają gorszy CPA." },
            { p: "Konsekwencja: ręczne wąskie targetowanie (lookalike 1%, dokładnie zdefiniowane interesy) coraz częściej przegrywa z podejściem „pokaż Meta cel i zasób kreatywny, resztę policzy”." },
            { h: "Kreacja to nowy targeting" },
            { p: "W świecie, w którym Meta sama dobiera audiencje, **jedyna rzecz, którą możesz realnie wpłynąć, to kreacja**. Konta, które miesięcznie podają platformie 30-50 świeżych wariantów (różne hook'i, różne formaty, różne typy produktów), skalują się. Konta z 3 kreacjami na miesiąc — nie." },
            { p: "To duża zmiana w alokacji zasobów agencji. Przed 2024: 70% czasu na targeting, 30% na kreację. Dzisiaj: odwrotnie." },
            { h: "CAPI i klient offline" },
            { p: "Po iOS 14.5+ i spadku jakości pixel-signału, **Conversions API (CAPI)** z serwera stała się minimum. Konta, które ją mają, widzą 20-40% więcej konwersji niż konta tylko z pixelem. I to nie „bonus” — to zamykanie luki powstałej po ATT." },
            { p: "Dorzucamy do tego Offline Events (z CRM-u do Meta), Customer Value Optimization (optymalizacja pod LTV zamiast CPA) — i zaczynasz widzieć rynek tak, jak widzisz go Ty, a nie tak, jak widzi go przeglądarka." },
            { h: "Co dalej" },
            { p: "Trzy rzeczy, które działają w 2026 roku na Meta Ads, a nie działały jeszcze 18 miesięcy temu:" },
            { list: [
              "**Broad audience + Advantage+** — targetowanie zostaw platformie, skup się na kreacji.",
              "**Kreacja w cyklu tygodniowym** — nie kwartalnym. 30+ wariantów miesięcznie na aktywnych kontach.",
              "**CAPI + Offline Events + CVO** — trójpak, który odbudowuje jakość signal po ATT."
            ]},
            { p: "Jeśli robisz Meta Ads po staremu i widzisz, że CPA rośnie, a skalowanie się zacięło — prawdopodobnie nie robisz nic źle. Po prostu platforma poszła dalej, a Twój setup został w 2023." }
          ]
        },
        {
          slug: "rebrand-bez-kryzysu",
          cat: "Branding", date: "Lut 2026",
          title1: "Rebrand bez kryzysu —", titleIt: "krótki przewodnik.",
          image: "/assets/blog-rebrand.jpg",
          lede: "Rebrand to nie nowe logo. Rebrand to reorganizacja całej komunikacji firmy — a większość firm robi go w najgorszym momencie, z najgorszych powodów. Krótki przewodnik jak tego nie spier... popsuć.",
          body: [
            { h: "Kiedy rebrand ma sens" },
            { p: "Dobra decyzja o rebrandzie ma zawsze jeden z trzech konkretnych powodów — i żadnym z nich nie jest „znudził mi się logotyp\":" },
            { list: [
              "**Produkt ewoluował.** Założenia biznesowe z dnia startu przestały być aktualne. Jeśli dzisiaj zakładałbyś tę firmę, zrobiłbyś inną markę — to moment.",
              "**Publiczność się zmieniła.** Dotarłeś do innej grupy, niż ta, pod którą projektowana była marka. Komunikujesz się do sceny B, a identyfikacja wisi w scenie A.",
              "**Reputacja wymaga resetu.** PR-owy kryzys, zmiana właściciela, fuzja, problemy prawne. Rebrand to wtedy nie kosmetyka, to wyjście z czarnego worka."
            ]},
            { p: "Jeśli żaden z tych trzech — odłóż to. Nowe logo nie naprawi mailingu, który nikt nie otwiera." },
            { h: "Trzy pułapki, w które wpadają wszyscy" },
            { p: "**Pułapka 1: rebrand jako ucieczka przed robotą.** Firma ma problem z sprzedażą, z kulturą, z produktem. Zamiast tego rysuje nowe logo. Efekt: za pół roku te same problemy, plus wydane 80 tys. na identyfikację, która nie działa, bo nie miała do czego działać." },
            { p: "**Pułapka 2: rebrand bez planu wdrożenia.** Nowy system wizualny ląduje w pdf-ie. Pdf idzie do szuflady. Strona internetowa nie ma budżetu. Szyld na biurze został stary. Social media mają nowe colors, ale stare komunikaty. Efekt: firma teraz wygląda chaotycznie zamiast świeżo." },
            { p: "**Pułapka 3: rebrand po cichu.** Zmiana nikomu nie zakomunikowana, jak gdyby nic się nie stało. Klienci i partnerzy są zdezorientowani, ludzie pytają „zmieniliście się?\". Rebrand, który musi być wytłumaczony w nieskończoność — to rebrand, którego nie dało się uzasadnić." },
            { h: "Jak robić to dobrze" },
            { list: [
              "**Zacznij od pytania biznesowego.** Jaki problem rozwiązujesz? Odpowiedź nie może być estetyczna.",
              "**Zadbaj o plan wdrożenia przed projektem.** Kto, kiedy, gdzie. Materiały, budżet, harmonogram.",
              "**Zrób storytelling.** Klienci, pracownicy, partnerzy — każda grupa powinna usłyszeć od Ciebie, dlaczego i co się zmienia.",
              "**Zaakceptuj, że wszystkim się nie spodoba.** Jeśli chcesz 100% akceptacji — znaczy nie zmieniłeś nic istotnego."
            ]},
            { h: "Checklist pre-rebrand" },
            { p: "Zanim wydasz pierwsze 10 tys., odpowiedz sobie: (1) czy problem, który rozwiązuję rebrandem, naprawdę jest problemem wizualnym? (2) czy mam budżet nie tylko na projekt, ale na wdrożenie wszędzie? (3) czy mogę uzasadnić zmianę w jednym zdaniu, pracownikom i klientom? Jeśli na trzy pytania odpowiedź brzmi „tak\", wchodź. Jeśli choć jedno „nie\" — wstrzymaj się." }
          ]
        },
        {
          slug: "codzienny-tetris",
          cat: "Produktywność", date: "Sty 2026",
          title1: "Codzienny Tetris:", titleIt: "jak zarządzać swoim mózgiem.",
          image: "/assets/blog-tetris.jpg",
          lede: "Metafora funkcjonowania ludzkiego mózgu i zarządzania zadaniami. Na początku dnia plansza jest pusta — łatwo coś ułożyć. Problem zaczyna się, gdy klocki zaczynają spadać szybciej, niż potrafisz je układać.",
          body: [
            { h: "Czysta plansza" },
            { p: "Na początku dnia, gdy nasza „plansza gry\" (czyli umysł i harmonogram) jest czysta i nieobciążona, łatwiej jest podejmować nowe zadania i wyzwania. Nie ma dużej presji czasowej, myślenie jest klarowne i skoncentrowane." },
            { p: "Tak jak w Tetrisie, gdzie łatwiej układa się klocki na pustej planszy, tak samo w życiu codziennym łatwiej jest rozpoczynać i kończyć zadania, kiedy nasz umysł jest „świeży\" i niezakłócony. Dlatego większość produktywnych ludzi rezerwuje poranek na najtrudniejsze zadania — to czas, gdy plansza jest najbardziej pusta." },
            { h: "Napór klocków" },
            { p: "W miarę upływu dnia i napływu nowych zadań, nasza zdolność do efektywnego zarządzania czasem i priorytetami jest wystawiona na próbę. Tak jak w Tetrisie, gdzie pojawiają się nowe klocki z coraz większą szybkością, w życiu codziennym napotykamy na coraz więcej wyzwań i niespodziewanych zadań." },
            { p: "Jeśli nie radzimy sobie z nimi na bieżąco, „plansza\" zapełnia się, co utrudnia dodawanie nowych elementów bez tworzenia chaosu. To moment, w którym „robiłem dużo, a zrobiłem nic\" staje się codziennością." },
            { h: "Przewidywanie > reagowanie" },
            { p: "Kluczem do sukcesu w „codziennym Tetrisie\" jest nie tylko efektywne zarządzanie bieżącymi zadaniami, ale również umiejętność **przewidywania i planowania**. Odkładanie zadań na później, podobnie jak unikanie podejmowania decyzji w Tetrisie, zwykle prowadzi do „przegranej rundy\" — sytuacji, w której przestajemy mieć kontrolę nad naszymi obowiązkami i czasem." },
            { p: "Dobrzy gracze w Tetrisa nie reagują na klocek, który jest — już planują miejsce dla klocka, który przyjdzie za chwilę. Ludzie, którzy dobrze zarządzają dniem, też nie reagują wyłącznie na to, co ląduje w skrzynce. Mają miejsce zarezerwowane dla tego, co wiadomo, że przyjdzie." },
            { h: "Przerwa = czyszczenie linii" },
            { p: "Zarządzanie naszym „codziennym Tetrisem\" wymaga też umiejętności rozpoznawania momentów, gdy warto zrobić krótką przerwę, aby oczyścić umysł i spojrzeć na zadania z nowej perspektywy. Krótki moment odpoczynku to nie strata czasu — to „czyszczenie linii\". Nagle plansza się zmniejsza, widać więcej miejsca, decyzje stają się łatwiejsze." },
            { p: "Problem: większość ludzi traktuje przerwy jak zawodnik, który boi się odejść od Tetrisa, bo „klocki dalej spadają\". Paradoks polega na tym, że im dłużej grasz bez przerwy, tym więcej błędów robisz, tym wyższa plansza, tym trudniej ją obniżyć." },
            { h: "Podsumowanie" },
            { p: "Metafora „codziennego Tetrisa\" podkreśla znaczenie efektywnego zarządzania czasem, priorytetami i zdolności adaptacyjnych. Kluczem jest nie tylko radzenie sobie z bieżącymi zadaniami, ale elastyczność umysłu, pozwalająca dostosować się do zmieniających się warunków." },
            { list: [
              "Chroń pierwsze 2-3 godziny dnia na zadania trudne.",
              "Nie reaguj wyłącznie na to, co przyszło teraz — planuj miejsce na to, co przyjdzie.",
              "Rób przerwy zanim tego potrzebujesz, nie gdy już musisz.",
              "Naucz się rozpoznawać, kiedy Twoja plansza jest za wysoka — i co wtedy odłożyć."
            ]}
          ]
        }
      ]
    },
    contact: {
      label: "# — Ruszamy",
      title1: "Zrób",
      titleIt: "z nami",
      title2: "marketing.",
      bigPrefix: "Napisz na",
      bigEmail: "media@ktbmedia.eu",
      bigSuffix: "albo wypełnij formularz.",
      image: "/assets/contact-phone.jpg",
      imageAlt: "",
      details: [
        { k: "Adres", v: "Grunwaldzka 107<br/>83-000 Pruszcz Gdański" },
        { k: "Email", v: "media@ktbmedia.eu", href: "mailto:media@ktbmedia.eu" },
        { k: "Telefon", v: "+48 792 614 834", href: "tel:+48792614834" },
        { k: "Facebook", v: "facebook.com/KTBmedia.eu", href: "https://www.facebook.com/KTBmedia.eu" },
        { k: "Instagram", v: "@ktbmediaeu", href: "https://www.instagram.com/ktbmediaeu" },
        { k: "LinkedIn", v: "KTB Media", href: "https://www.linkedin.com/company/90991001" }
      ],
      form: {
        heading: "Darmowa wycena",
        subheading: "Twój marketing w rękach ekspertów.",
        intro: "Dokładnie zapoznamy się z Twoim biznesem i przygotujemy indywidualną ofertę cenową na optymalny dla Ciebie MIX marketingowy — totalnie za darmo. Wypełnij formularz poniżej.",
        servicesLabel: "Co Cię interesuje?",
        serviceGroups: [
          {
            label: "Strategia",
            items: ["Marketing 360", "Strategia marketingowa", "Branding / rebrand"]
          },
          {
            label: "Performance",
            items: ["Google Ads", "Meta Ads (Facebook / Instagram)", "LinkedIn Ads", "Indywidualna kampania reklamowa"]
          },
          {
            label: "Social & content",
            items: ["Obsługa social mediów", "Zwiększenie liczby obserwujących", "Produkcja wideo / foto", "Influencer marketing"]
          },
          {
            label: "Online presence",
            items: ["Optymalizacja wizytówki Google", "SEO / pozycjonowanie", "Strona WWW / e-commerce", "Email marketing & automation"]
          }
        ],
        name: "Imię i nazwisko",
        email: "Email",
        company: "Nazwa firmy",
        budget: "Budżet miesięczny",
        budgetOpts: ["Jeszcze nie wiem", "Poniżej 5 tys. PLN", "5–10 tys. PLN", "10–25 tys. PLN", "Powyżej 25 tys. PLN"],
        message: "Wiadomość (opcjonalnie)",
        submit: "Wyślij zgłoszenie",
        success: "Dzięki. Odezwiemy się w ciągu 24h."
      }
    },
    footer: {
      wall: "KTB·MEDIA",
      copy: "© 2026 KTB Media sp. z o.o.",
      links: [
        { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
        { label: "ESG", href: "#" }
      ]
    }
  },
  en: {
    nav: ["Services", "Work", "Process", "About", "Journal", "Contact"],
    cta: "Start a project",
    sections: {
      hero: true,
      marquee: true,
      services: true,
      about: true,
      showcase: true,
      process: true,
      testimonials: true,
      portfolio: true,
      blog: true,
      contact: true,
      founders: false,
      miniCta: true
    },
    hero: {
      eyebrow: "360 Agency · Gdańsk · Est. 2022",
      title1: "A brand",
      title2: "you can",
      titleIt: "feel",
      title3: "online.",
      lede: "The outside marketing department for companies tired of corporate jargon. We build, run, scale — like a partner, not a vendor.",
      cta1: "Let's talk",
      cta2: "See our work",
      image: "/assets/statue-greek.webp",
      imageAlt: "",
      metrics: [
        { k: "Founded", v: "2022", big: true },
        { k: "Projects shipped", v: "120+", big: true },
        { k: "Average ROAS lift", v: "3.4×", big: true },
        { k: "Team", v: "2 founders", big: false }
      ]
    },
    marquee: ["Strategy", "Creative", "Social Media", "Web Design", "E-commerce", "Google Ads", "Meta Ads", "SEO", "Identity"],
    services: {
      label: "# — What we do",
      title1: "Our",
      titleIt: "services.",
      items: [
        { n: "01", t: "Social Media", tIt: "/ content", d: "Profiles that build reach and brand affinity. Strategy, content, community, reporting." },
        { n: "02", t: "Websites", tIt: "", d: "Modern, fast, responsive. Built for SEO and conversion — not just design awards." },
        { n: "03", t: "E-commerce", tIt: "", d: "From Shopify to custom stacks. UX that sells and analytics that actually inform." },
        { n: "04", t: "Branding", tIt: "/ creative", d: "Logo, system, identity. From scratch or rebrand — so the brand has a voice, not just a colour." },
        { n: "05", t: "Performance", tIt: "marketing", d: "Google, Meta, TikTok, LinkedIn. Campaigns judged by results, not decks." },
        { n: "06", t: "Strategy", tIt: "& consulting", d: "Audit, roadmap, workshops. We tell you what to do — and what to stop immediately." }
      ]
    },
    about: {
      label: "# — Why us",
      title1: "Stand out",
      titleIt: "or",
      title2: "die.",
      lede: "Dozens of agencies do the same thing. We do it differently — with commitment, no jargon, and results you see on the P&L.",
      ledeAccent: "results",
      image: "/assets/statue-samurai.webp",
      imageAlt: "",
      features: [
        { k: "A", t: "360 agency", d: "One partner across all channels. No hunting five vendors." },
        { k: "B", t: "Your time", d: "We lift marketing off your plate. Run the business, we'll run the rest." },
        { k: "C", t: "No templates", d: "Marketing that breaks the mould. No boring deliverables." },
        { k: "D", t: "In-house feel", d: "We operate like your team. Relaxed, direct, partner-first." }
      ],
      quote: "Time destroys brands faster than the market does. We build the kind that age beautifully.",
      quoteAccent: "beautifully",
      cap: "KTB Media — Manifesto 01"
    },
    showcase: {
      label: "— How we work",
      blocks: [
        {
          eyebrow: "Strategy",
          title1: "We eat apps",
          titleAccent: "and webs",
          title2: "for breakfast.",
          body: "Performance marketing in 2026 isn't spray-and-pray. It's deep analytics, A/B/C/D tests, automation and custom integrations. For one client we built a BI dashboard in 3 days. For another — Meta Conversions API that recovered 38% of post-ATT conversions.",
          image: "/assets/showcase-1.jpg",
          imageAlt: "Creative scene — strategy",
          placeholderLabel: "Image: strategy / tech"
        },
        {
          eyebrow: "Brand",
          title1: "We make the rules.",
          titleAccent: "And they",
          title2: "sell well.",
          body: "A brand that doesn't sell is just a pretty poster. That's why every identity we do starts with a KPI spreadsheet and ends with a system — not a moodboard. We check what the brand says, what the customer buys, and what it means for the P&L.",
          image: "/assets/showcase-2.jpg",
          imageAlt: "Creative scene — branding",
          placeholderLabel: "Image: brand / sales"
        },
        {
          eyebrow: "Partnership",
          title1: "Join us,",
          titleAccent: "it might",
          title2: "be fun.",
          body: "No 10k discovery calls. No decks nobody reads. We talk, show case studies, scope the work in a week. We start. You see the first real output within 14 days. No asterisks, no monthly addendums.",
          image: "/assets/showcase-3.jpg",
          imageAlt: "Creative scene — partnership",
          placeholderLabel: "Image: partnership / fun"
        }
      ]
    },
    process: {
      label: "# — How we work",
      title1: "No noise.",
      titleIt: "Just",
      title2: "substance.",
      steps: [
        { n: "01", t: "Talk", d: "Brief, goals, context. No forms, no $10k discovery calls." },
        { n: "02", t: "Strategy", d: "Research, mapping, recommendations. We know what to do before touching Figma." },
        { n: "03", t: "Build", d: "Design, code, campaigns, content. Two-week sprints, demos every Friday." },
        { n: "04", t: "Scale", d: "Optimisation, A/B tests, monthly reports. We keep building — not handing off." }
      ]
    },
    portfolio: {
      label: "# — Selected work",
      title1: "Selected",
      titleIt: "projects.",
      lede: "Every project gets its own strategy. No templates, no copy-paste.",
      items: [
        {
          num: "01", slug: "autocentrum-elektronowa", title1: "AutoCentrum", titleIt: "Elektronowa 18",
          tag: "Service · Social · Video", year: "2024", ph: "ph-stripe-1",
          brief: "Large-scale auto service in Łódź, covering all brands with advanced paint & body work.",
          challenge: "Build AutoCentrum's recognition and authority up to ASO-tier reputation through a new visual identity, focused online marketing, professional content production, and a stronger partnership with Petronas.",
          solution: "New visual identity, full social media ownership, Google Business optimisation, Meta Ads. Video production: owner interview, paint & body department walkthrough, mechanical department. Professional photo shoot featuring the service and the mechanics. Reinforced the Petronas partnership, positioning AutoCentrum as authorised partner.",
          results: [
            { k: "Video views", v: "1M+" },
            { k: "Followers", v: "×4" },
            { k: "ASO status", v: "Regional lead" },
            { k: "Partner", v: "Petronas" }
          ],
          palette: ["#E86F1F", "#1a1a1a", "#f4f4f4", "#c9c9c9"],
          images: ["/assets/case-autocentrum-elektronowa-1.jpg", "/assets/case-autocentrum-elektronowa-2.jpg", "/assets/case-autocentrum-elektronowa-3.jpg"],
          notes: ["Full rebrand in 6 weeks", "Owner interview as hero video", "Body shop & mechanical as separate series"]
        },
        {
          num: "02", slug: "rmdc", title1: "Remontowa", titleIt: "Marine Design",
          tag: "B2B · Brand · Social PL/EN", year: "2024", ph: "ph-stripe-2",
          brief: "Ship and ocean engineering design office, part of Remontowa Holding. End-to-end solutions for new builds and existing vessels.",
          challenge: "New visual identity reflecting professional design approach and relationships with leading marine players. Position the company as an attractive place to work, grow the social following, build international recognition.",
          solution: "Rebuilt identity for premium B2B. Social media on FB/IG/LinkedIn in both Polish and English. Created the 'Inside the Project' series showing studios and people. New animated portfolio of vessel designs. Supported active recruitment and produced foto-video coverage of trade shows and events.",
          results: [
            { k: "Follower growth", v: "+100%" },
            { k: "Reach", v: "International" },
            { k: "Recruitment", v: "Active" },
            { k: "Publications", v: "Remontowa Group" }
          ],
          palette: ["#1e3a8a", "#2aa8a8", "#f4f4f4", "#8a9aab"],
          images: ["/assets/case-rmdc-1.jpg", "/assets/case-rmdc-2.jpg", "/assets/case-rmdc-3.jpg"],
          notes: ["Bilingual PL/EN comms", "Inside the Project — behind-the-scenes series", "Animated vessel portfolio"]
        },
        {
          num: "03", slug: "pmo-lubricants", title1: "PMO", titleIt: "Lubricants",
          tag: "B2B/B2C · Performance · Events", year: "2024", ph: "ph-stripe-3",
          brief: "Premium engine oil manufacturer from one of the most advanced facilities in the Netherlands. eXpert and eXtreme lines.",
          challenge: "Build brand recognition across B2B and B2C, launch the eXpert line plus new eXtreme SKUs, create new visual identity, grow Polish sales.",
          solution: "Full-stack work: finance and sales consulting, merchandise and pneumatic advertising, social media + Google Ads + Meta Ads, influencer relations, motorsport events with foto-video coverage, graphics and web, active B2B prospecting. Dedicated distributor promos and a benefits program.",
          results: [
            { k: "Follower growth", v: "+150%" },
            { k: "Ad impressions", v: "15M+" },
            { k: "New B2B distributors", v: "4" },
            { k: "Motorsport events", v: "20+" },
            { k: "Video assets", v: "100+" }
          ],
          palette: ["#e88420", "#8b1a1a", "#1a1a1a", "#f4f4f4"],
          images: ["/assets/case-pmo-lubricants-1.jpg", "/assets/case-pmo-lubricants-2.jpg", "/assets/case-pmo-lubricants-3.jpg"],
          notes: ["Automotive influencer network", "20+ motorsport events per year", "Cost optimization across operations"]
        },
        {
          num: "04", slug: "tomex-brakes", title1: "Tomex", titleIt: "Brakes",
          tag: "B2B/B2C · Strategy · Brand", year: "2024", ph: "ph-stripe-1",
          brief: "Leading Polish manufacturer of brake system components with 45+ years of heritage. Pads, discs, complete systems — tech innovation plus eco materials.",
          challenge: "Grow Tomex Brakes awareness in B2B and B2C through a 'Made in Poland' story emphasizing certified quality and long tradition. Positioning as a manufacturer, not a repackager.",
          solution: "Full marketing strategy rollout. Social media presence on Facebook, Instagram, LinkedIn and Google. Graphics work and cohesive Key Visual. Meta Ads campaigns. Rhetoric reinforcing Tomex as a leader in brake systems manufacturing across Poland and Europe.",
          results: [
            { k: "Market position", v: "EU leader" },
            { k: "Followers", v: "×2" },
            { k: "Engagement", v: "+500%" },
            { k: "Narrative", v: "Made in Poland" }
          ],
          palette: ["#1d2d5c", "#3a5fd1", "#f4f4f4", "#c41e3a"],
          images: ["/assets/case-tomex-brakes-1.jpg", "/assets/case-tomex-brakes-2.jpg", "/assets/case-tomex-brakes-3.jpg"],
          notes: ["Made in Poland strategy", "Unified Key Visual across channels", "Manufacturer vs. repackager positioning"]
        },
        {
          num: "05", slug: "pulsegt", title1: "PulseGT", titleIt: "US Technology",
          tag: "Launch · Brand · Influencer", year: "2024", ph: "ph-stripe-2",
          brief: "Producer of advanced automotive additives and flushes — patented detergent and ester tech for engine and fuel-system performance.",
          challenge: "Launch PulseGT in the Polish market from scratch: build brand identity and build a customer base from zero.",
          solution: "End-to-end launch strategy delivered on schedule. Consulting on label, can and website design. Professional product photography. Motorsport influencer network (WheelWithIt, Strzelecki Garage, Tasiemski, Kuba Dudek) plus motorsport events (Drift, 1/4 mile). Benefits program for staff and influencers tied to sales. Full promo kit: t-shirts, hoodies, caps, catalogues, stands, swag. Built Instagram, Facebook, LinkedIn and Google Business profiles from scratch.",
          results: [
            { k: "Ad views", v: "1M+" },
            { k: "Followers (3 mo)", v: "3,330" },
            { k: "Influencers", v: "WheelWithIt · Strzelecki Garage · Tasiemski" },
            { k: "Channels launched", v: "IG · FB · LI · Google" }
          ],
          palette: ["#00b8d4", "#d4008f", "#1a1a1a", "#f4f4f4"],
          images: ["/assets/case-pulsegt-1.jpg", "/assets/case-pulsegt-2.jpg", "/assets/case-pulsegt-3.jpg"],
          notes: ["On-time market entry", "Sales-linked benefits system", "Motorsport: Drift and 1/4 mile"]
        }
      ]
    },
    testi: {
      label: "# — Word on the street",
      title1: "Client",
      titleIt: "voices.",
      items: [
        { q: "Their campaigns changed how we source B2B leads. No fluff — weekly reports and humans who pick up the phone.", name: "Marek Kowalski", co: "TechSolutions · CEO" },
        { q: "Store, social and performance in one package. Sales +150% in the first quarter. We're staying.", name: "Anna Nowak", co: "Natural Beauty · Founder" },
        { q: "Time savings and a genuinely unconventional approach — exactly what they promised on the first call. Strong recommend.", name: "Tomasz Wójcik", co: "Architekci Wnętrz · Partner" }
      ]
    },
    team: {
      label: "# — Who we are",
      title1: "Two people,",
      titleIt: "running it all.",
      lede: "No corporate layers, no middlemen. You talk directly to the founders — the same people running your campaigns and writing your strategy.",
      items: [
        {
          init: "MG",
          name: "Mateusz Gajewski",
          role: "Co-founder /",
          roleIt: "strategy & brand",
          photo1: "/assets/founder-mateusz-1.jpg",
          photo2: "/assets/founder-mateusz-2.jpg",
          bio: "For over a decade in marketing, consistently combining strategic thinking with the ability to implement effective, measurable work. Builds solutions that engage audiences, grow brand value and drive the business — regardless of the industry. Experience spans both planning and running campaigns and building brands from the ground up: from visual identity and communication, through social media and content, to e-commerce development and process automation. Gets the biggest kick out of strategies that actually work — thoughtful, context-fit and carried through in practice."
        },
        {
          init: "RS",
          name: "Radosław Sobczyk",
          role: "Co-founder /",
          roleIt: "growth & tech",
          photo1: "/assets/founder-radoslaw-1.jpg",
          photo2: "/assets/founder-radoslaw-2.jpg",
          bio: "Passionate about the automotive industry and an expert in modern marketing who loves thinking outside the box. Leads teams by inspiring people to act and helping them find their strongest potential. Keeps a close eye on emerging technologies — especially AI — and explores their practical business applications. Experienced negotiator with a strategic approach to business. For him, success isn't a single achievement — it's continuous progress. The right mix of technology, passion and strategy is the key to innovation and sustainable growth. And culture matters just as much as results."
        }
      ]
    },
    pricing: {
      label: "# — How we charge",
      title1: "Straight",
      titleIt: "pricing.",
      lede: "No retainer asterisks. Pick a plan, get a team, go.",
      plans: [
        {
          k: "Start here",
          t: "Starter",
          tIt: "",
          amt: "900",
          per: "/ month",
          items: ["<b>Social media</b> — 12 posts/mo", "Community & reporting", "1 performance campaign", "Monthly report + call"],
          cta: "Get started",
          featured: false
        },
        {
          k: "Most chosen",
          t: "Growth",
          tIt: "",
          amt: "1 800",
          per: "/ month",
          items: ["<b>Everything in Starter +</b>", "Performance (Google + Meta)", "Strategy & roadmap", "2× content shoots / quarter", "Dedicated project manager"],
          cta: "Grow together",
          featured: true,
          badge: "Popular"
        },
        {
          k: "Full outsource",
          t: "Marketing",
          tIt: "department",
          amt: "Custom",
          per: "On request",
          items: ["<b>Entire marketing team</b>", "Branding & rebrand", "Web + e-commerce", "Full performance stack", "Dedicated team of 4–6"],
          cta: "Let's talk",
          featured: false
        }
      ]
    },
    blog: {
      label: "# — Notes",
      title1: "Editor's",
      titleIt: "journal.",
      items: [
        {
          slug: "marketing-for-its-own-sake",
          cat: "Strategy", date: "Apr 2026",
          title1: "How to stop doing marketing", titleIt: "for its own sake.",
          image: "/assets/blog-marketing.jpg",
          lede: "Generating a content calendar isn't strategy. Publishing \"because we have to\" costs the same as publishing on purpose — and delivers zero. How to tell motion from progress.",
          body: [
            { h: "Motion ≠ progress" },
            { p: "Most marketing teams we've seen share one denominator: lots of motion, little progress. Campaign after campaign, reel after reel, a newsletter every Tuesday. Behind it all — no answer to a simple question: **why?**" },
            { p: "The mechanism is beautifully self-sustaining. Social generates content that fuels more content. Campaigns generate data that justifies more campaigns. The whole system orbits itself, and the only product is more TODOs." },
            { h: "What marketing-for-its-own-sake looks like" },
            { p: "It's when **doing** gets confused with the goal. Symptoms:" },
            { list: [
              "Calendar full — but no idea which customer problem each post solves.",
              "KPIs measured in likes, reach, impressions — never in what hits the P&L.",
              "Every campaign described as a success, \"because reach grew\".",
              "Reports nobody reads — made only because \"the client likes reports\".",
              "New initiatives stacked without removing the old ones — because no-one dares say what stopped working."
            ]},
            { h: "Two-question test" },
            { p: "Every time your team (or you) starts planning a new thing, ask:" },
            { list: [
              "**Which concrete business goal does this support?** Not \"brand building\", not \"engagement\". Concrete: more inquiries in segment X, lower CAC in channel Y, higher cart value.",
              "**How will I know if it worked?** If the answer is \"we'll see\", you're guessing."
            ]},
            { p: "If you can't answer either — pause. Not because it's bad. Because you're doing it out of habit, not decision." },
            { h: "Turn campaigns into hypotheses" },
            { p: "Instead of a \"brand campaign\", plan hypothesis tests. Every marketing action is essentially a bet on reality: _I believe that if I show X to group Y, Z will happen_. If you can write that sentence — you have a campaign. If you can't — you have an expense." },
            { h: "Less, sharper, louder" },
            { p: "Real growth at most companies we've worked with didn't come from adding another channel. It came from **cutting three things** that didn't work and reinvesting those budgets into one thing that started to. Discipline is invisible — it's about what you don't do." }
          ]
        },
        {
          slug: "meta-ads-2026",
          cat: "Performance", date: "Mar 2026",
          title1: "Meta Ads in 2026:", titleIt: "what changed.",
          image: "/assets/blog-rebrand.jpg",
          lede: "ATT is old news. Over the last 18 months the Meta Ads landscape went through three fundamental shifts. A quick recap for marketers who don't re-learn the platform every quarter.",
          body: [
            { h: "Advantage+ is the default now" },
            { p: "Advantage+ Shopping and Lead Generation moved from experimental to default. The platform picks creative, placements and audiences itself — and manual setups mostly yield worse CPA." },
            { p: "Consequence: narrow manual targeting (1% lookalike, precise interests) increasingly loses to \"show Meta a goal and a creative pile, let it do the math\"." },
            { h: "Creative is the new targeting" },
            { p: "In a world where Meta picks audiences, **the only lever left is creative**. Accounts feeding the platform 30–50 fresh variants per month (hooks, formats, product angles) scale. Accounts running 3 creatives per month don't." },
            { p: "Big shift in agency resource allocation. Pre-2024: 70% of the time on targeting, 30% on creative. Today: flipped." },
            { h: "CAPI and the offline customer" },
            { p: "After iOS 14.5+ and the pixel-signal decay, **Conversions API (CAPI)** from the server is a minimum. Accounts that have it see 20–40% more conversions than pixel-only setups. That's not a bonus — that's closing the post-ATT gap." },
            { p: "Layer in Offline Events (CRM → Meta), Customer Value Optimization (optimize for LTV, not CPA) — and you start to see the market the way you see it, not the way the browser sees it." },
            { h: "What's working in 2026" },
            { list: [
              "**Broad audience + Advantage+** — let the platform target, focus on creative.",
              "**Creative on a weekly cadence** — not quarterly. 30+ variants per month on active accounts.",
              "**CAPI + Offline Events + CVO** — the trio that rebuilds post-ATT signal quality."
            ]},
            { p: "If you're running Meta Ads the old way and CPA is climbing, scaling is stuck — you're probably not doing anything wrong. The platform moved on, your setup stayed in 2023." }
          ]
        },
        {
          slug: "rebrand-without-crisis",
          cat: "Branding", date: "Feb 2026",
          title1: "Rebrand without crisis —", titleIt: "a short guide.",
          image: "/assets/blog-rebrand.jpg",
          lede: "A rebrand isn't a new logo. It's reorganizing the company's entire communication — and most companies do it at the worst moment, for the worst reasons. A short guide on how not to screw it up.",
          body: [
            { h: "When rebrand makes sense" },
            { p: "A good rebrand decision has one of three concrete reasons — and \"I'm bored of the logo\" is none of them:" },
            { list: [
              "**Product evolved.** Your day-one assumptions no longer hold. If you started this company today you'd build a different brand — that's the signal.",
              "**Audience shifted.** You're reaching a different group than the one the brand was designed for. Communicating to Stage B while the identity hangs in Stage A.",
              "**Reputation needs a reset.** PR crisis, ownership change, merger, legal trouble. Rebrand is then not cosmetic — it's getting out of the dark bag."
            ]},
            { p: "None of these three? Put it down. A new logo won't fix the mailing list nobody opens." },
            { h: "Three traps everyone falls into" },
            { p: "**Trap 1: rebrand as escape from actual work.** Company has sales, culture, product problems. Instead it draws a new logo. Result: six months later, same problems + 80k spent on identity that doesn't work, because it had nothing to work for." },
            { p: "**Trap 2: rebrand without a rollout plan.** New system lands in a pdf. Pdf sits in a drawer. No website budget. Old signage. Social has new colors but old messages. Company now looks chaotic instead of fresh." },
            { p: "**Trap 3: silent rebrand.** No communication to anyone. Customers and partners confused, people asking \"did you change?\" A rebrand that needs endless explanation is a rebrand that couldn't be justified." },
            { h: "How to do it right" },
            { list: [
              "**Start with the business question.** What problem are you solving? Answer can't be aesthetic.",
              "**Plan the rollout before the design.** Who, when, where. Assets, budget, timeline.",
              "**Do the storytelling.** Customers, staff, partners — each group should hear from you why and what changes.",
              "**Accept not everyone will like it.** If you want 100% approval, you changed nothing meaningful."
            ]}
          ]
        },
        {
          slug: "daily-tetris",
          cat: "Productivity", date: "Jan 2026",
          title1: "Daily Tetris:", titleIt: "managing your brain.",
          image: "/assets/blog-tetris.jpg",
          lede: "A metaphor for the human brain and task management. Early in the day the board is empty — easy to place a block. The problem starts when blocks drop faster than you can fit them in.",
          body: [
            { h: "Empty board" },
            { p: "At the start of the day, when our \"game board\" (mind + schedule) is empty and unburdened, it's easier to take on new tasks and challenges. No time pressure, thinking is clear and focused." },
            { p: "Like in Tetris, where it's easier to stack pieces on an empty board, in daily life it's easier to start and finish tasks when our mind is \"fresh\" and undisturbed. That's why most productive people reserve the morning for their hardest work — that's when the board is most empty." },
            { h: "The flood of blocks" },
            { p: "As the day progresses and new tasks flow in, our ability to manage time and priorities gets tested. Like in Tetris where new pieces come faster and faster, in daily life we face more and more challenges and unexpected tasks." },
            { p: "If we don't handle them in real time, the \"board\" fills up, and adding new pieces without chaos gets harder. That's when \"I did a lot and got nothing done\" becomes the daily mode." },
            { h: "Anticipation > reaction" },
            { p: "The key to \"daily Tetris\" isn't just managing current tasks — it's **anticipation and planning**. Postponing, like avoiding decisions in Tetris, usually ends in a lost round: you stop controlling your obligations and your time." },
            { p: "Good Tetris players don't react to the piece that's falling — they're already planning a spot for the one that comes next. People who manage their day well don't react only to what's in the inbox. They've got space reserved for what's known to be coming." },
            { h: "A break = clearing a line" },
            { p: "Managing your \"daily Tetris\" also requires knowing when to take a short break, to clear the mind and see tasks from a new angle. A short rest isn't a waste — it's \"clearing a line\". Suddenly the board shrinks, there's more room, decisions get easier." }
          ]
        }
      ]
    },
    contact: {
      label: "# — Let's go",
      title1: "Do",
      titleIt: "marketing",
      title2: "with us.",
      bigPrefix: "Write to",
      bigEmail: "media@ktbmedia.eu",
      bigSuffix: "or fill out the form.",
      image: "/assets/contact-phone.jpg",
      imageAlt: "",
      details: [
        { k: "Studio", v: "Grunwaldzka 107<br/>83-000 Pruszcz Gdański, PL" },
        { k: "Email", v: "media@ktbmedia.eu", href: "mailto:media@ktbmedia.eu" },
        { k: "Phone", v: "+48 792 614 834", href: "tel:+48792614834" },
        { k: "Facebook", v: "facebook.com/KTBmedia.eu", href: "https://www.facebook.com/KTBmedia.eu" },
        { k: "Instagram", v: "@ktbmediaeu", href: "https://www.instagram.com/ktbmediaeu" },
        { k: "LinkedIn", v: "KTB Media", href: "https://www.linkedin.com/company/90991001" }
      ],
      form: {
        heading: "Free quote",
        subheading: "Your marketing in expert hands.",
        intro: "We'll dive into your business and prepare an individual quote for a marketing MIX that's right for you — entirely free. Fill the form below.",
        servicesLabel: "What are you interested in?",
        serviceGroups: [
          {
            label: "Strategy",
            items: ["360 marketing", "Marketing strategy", "Branding / rebrand"]
          },
          {
            label: "Performance",
            items: ["Google Ads", "Meta Ads (Facebook / Instagram)", "LinkedIn Ads", "Custom ad campaign"]
          },
          {
            label: "Social & content",
            items: ["Social media management", "Follower growth", "Video / photo production", "Influencer marketing"]
          },
          {
            label: "Online presence",
            items: ["Google Business optimization", "SEO", "Website / e-commerce", "Email marketing & automation"]
          }
        ],
        name: "Full name",
        email: "Email",
        company: "Company name",
        budget: "Monthly budget",
        budgetOpts: ["Not sure yet", "Under €1k", "€1–3k", "€3–7k", "€7k+"],
        message: "Message (optional)",
        submit: "Send request",
        success: "Thanks. We'll get back within 24h."
      }
    },
    footer: {
      wall: "KTB·MEDIA",
      copy: "© 2026 KTB Media sp. z o.o.",
      links: [
        { label: "Privacy policy", href: "/polityka-prywatnosci" },
        { label: "ESG", href: "#" }
      ]
    }
  }
};

window.COPY = COPY;
