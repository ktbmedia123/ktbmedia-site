(() => {
  'use strict';
  const items = [
    ['strategy','Marka z charakterem','A brand with character','Nie tylko logo. Wyrazista osobowość, którą słychać w każdym zdaniu i widać w każdym kontakcie.','More than a logo. A distinctive personality in every sentence and every encounter.'],
    ['creation','Przestań scrollować.','Stop scrolling.','Pierwsza sekunda decyduje. Tworzymy kreacje, które zatrzymują uwagę i dają powód, żeby zostać.','The first second matters. Creative work that stops the scroll and gives people a reason to stay.'],
    ['digital','Klik. I jesteś bliżej.','One click closer.','Dobre doświadczenie usuwa przeszkody między ciekawością a działaniem. Każdy klik ma swoje zadanie.','A good experience removes friction between curiosity and action. Every click has a purpose.'],
    ['strategy','Mniej hałasu. Więcej sensu.','Less noise. More meaning.','Zamiast mówić głośniej, znajdźmy coś wartego powiedzenia. Strategia zaczyna się od właściwego pytania.','Instead of being louder, find something worth saying. Strategy starts with the right question.'],
    ['creation','Pomysł, który sprzedaje','Ideas that sell','Piękny obraz to początek. Łączymy kreację z konkretną obietnicą i jasnym następnym krokiem.','A beautiful image is a start. We connect creativity with a clear promise and a useful next step.'],
    ['digital','Twój następny ruch','Your next move','Dane pokazują kierunek. Testujemy, uczymy się i rozwijamy rozwiązania, które odpowiadają na prawdziwe potrzeby.','Data points the way. We test, learn and develop solutions that answer real needs.'],
    ['creation','Odważ się wyróżnić.','Dare to stand out.','Rozpoznawalność nie bierze się z kopiowania. Szukamy własnego języka Twojej marki.','Recognition does not come from copying. We find your brand’s own visual voice.'],
    ['strategy','Najpierw: dlaczego?','First: why?','Cel przed formatem. Zanim wybierzemy kanały, ustalamy, co ma się zmienić w Twoim biznesie.','Purpose before format. Before choosing channels, we define what needs to change in your business.'],
    ['digital','Strona, która pracuje','A website that works','Szybka, czytelna i zrozumiała. Miejsce, w którym marka zamienia zainteresowanie w rozmowę.','Fast, clear and intuitive. A place where your brand turns interest into conversation.'],
    ['creation','Daj się zapamiętać.','Be remembered.','Jeden mocny motyw. Konsekwentny rytm. Kreacja, którą da się rozpoznać nawet bez podpisu.','One strong idea. A consistent rhythm. Creative work people recognise without a signature.'],
    ['strategy','Połączmy kropki.','Connect the dots.','Strategia, kreacja i technologia mają największą siłę, kiedy pracują razem. Budujemy właśnie takie połączenia.','Strategy, creativity and technology are strongest together. We build those connections.'],
    ['digital','Od pomysłu do aplikacji','From idea to app','Od pierwszego szkicu do narzędzia, które usprawnia codzienną pracę. Zaczynamy od ludzi i ich procesów.','From the first sketch to a tool that makes work easier. We start with people and their processes.'],
    ['creation','Tu rodzi się „wow”.','Where “wow” begins.','Czasem wystarczy zmienić perspektywę. Szukamy nieoczywistych zestawień, które budzą ciekawość.','Sometimes a new perspective is enough. We look for unexpected combinations that spark curiosity.'],
    ['strategy','Poznaj. Zaufaj. Kup.','Know. Trust. Buy.','Relacja ma swój rytm. Pomagamy przeprowadzić odbiorcę od pierwszego spotkania do świadomej decyzji.','Every relationship has a rhythm. We guide people from the first encounter to a confident decision.'],
    ['digital','Dane × intuicja','Data × intuition','Liczby pomagają zadawać lepsze pytania. Kreatywność pomaga znaleźć odpowiedzi, których nie ma w arkuszu.','Numbers help us ask better questions. Creativity finds answers that spreadsheets cannot.'],
    ['creation','To nie jest kolejna reklama.','More than another ad.','To zaproszenie do świata marki. Opowiedzmy historię, która ma znaczenie dla Twoich odbiorców.','An invitation into your brand’s world. Let’s tell a story that matters to your audience.'],
    ['strategy','Mała iskra. Duża zmiana.','Small spark. Big change.','Dobra obserwacja może uruchomić nowy rozdział. Zamieniamy insight w prosty plan działania.','One good observation can start a new chapter. We turn insights into a clear plan.'],
    ['digital','Zasięg to dopiero początek.','Reach is just the start.','Dotarcie do ludzi to pierwszy krok. Dalej są zainteresowanie, rozmowy i mierzalne działania.','Reaching people is the first step. Interest, conversations and measurable actions come next.'],
    ['creation','Historie warte opowiedzenia','Stories worth telling','Prawdziwi ludzie, konkretne emocje i własna perspektywa. Tworzymy content, który daje coś odbiorcy.','Real people, honest emotion and a fresh perspective. Content that gives something back.'],
    ['strategy','Zbudujmy coś swojego.','Build something of your own.','Marka nie musi pasować do gotowego szablonu. Znajdźmy miejsce, które może zająć tylko ona.','Your brand does not need to fit a template. Let’s find a space that only it can own.'],
    ['digital','Technologia z pomysłem','Technology with an idea','Interakcje, automatyzacje i narzędzia, które mają cel. Technologia powinna ułatwiać, zaskakiwać i pomagać.','Purposeful interactions, automations and tools. Technology should simplify, surprise and help.'],
    ['creation','Słowa robią robotę.','Words do the work.','Dobry tekst brzmi jak Twoja marka i mówi językiem klienta. Bez zbędnego bełkotu.','Good copy sounds like your brand and speaks your customer’s language. No unnecessary jargon.'],
    ['strategy','Kierunek: Twoja marka','Direction: your brand','Jasna pozycja, spójne decyzje i wspólny cel. Strategia daje zespołowi kompas do codziennej pracy.','A clear position, consistent decisions and a shared goal. Strategy gives your team a compass.'],
    ['creation','Wyjdź poza brief.','Beyond the brief.','Odpowiadamy na potrzeby, ale zostawiamy miejsce na odkrycie. Czasem najlepszy pomysł jest tuż obok.','We answer real needs while leaving room for discovery. The best idea may be just around the corner.'],
    ['digital','Od kliknięcia do relacji','From clicks to connection','Projektujemy punkty kontaktu, do których chce się wracać. Dobra relacja trwa dłużej niż jedna kampania.','We design touchpoints worth returning to. A good relationship lasts longer than a campaign.']
  ];
  const destinations = {"brand": ["/realizacje/tomex-brakes/", "Zobacz identyfikację Tomex Brakes", "Explore the Tomex Brakes identity"], "social": ["/blog/ile-kosztuje-prowadzenie-social-media-gdansk/", "Jak planujemy social media", "How we plan social media"], "web": ["/realizacje/digital/grupa-janisz-www/", "Zobacz stronę Grupy Janisz", "Explore the Grupa Janisz website"], "strategy": ["/blog/marketing-dla-samego-marketingu/", "O marketingu, który ma cel", "On marketing with a purpose"], "ads": ["/realizacje/pmo-lubricants/", "Zobacz kampanie PMO Lubricants", "Explore the PMO Lubricants campaigns"], "product": ["/realizacje/digital/ktbtask/", "Poznaj aplikację KTBtask", "Meet the KTBtask app"], "rebrand": ["/blog/rebrand-bez-kryzysu/", "Przeczytaj o dobrym rebrandingu", "Read about a thoughtful rebrand"], "design": ["/blog/projekt-design-a-obrazek-grafika-roznice/", "Czym design różni się od obrazka", "How design differs from an image"], "marine": ["/realizacje/ddp-supply/", "Zobacz komunikację DDP Supply", "Explore communication for DDP Supply"], "ai": ["/blog/ai-slop-co-to-jest-i-jak-go-unikac/", "Jak unikamy treści bez charakteru", "How we avoid characterless content"], "video": ["/blog/jak-nagrac-wideo-z-klientem-mechanikiem/", "Jak tworzyć autentyczne wideo", "How to make authentic video"], "saas": ["/blog/wlasna-aplikacja-czy-gotowy-saas/", "Własna aplikacja czy SaaS?", "Custom app or SaaS?"], "drone": ["/blog/ujecia-z-drona-w-marketingu-fpv-czy-klasyczny/", "Zobacz możliwości ujęć z drona", "Explore aerial filmmaking"], "seo": ["/blog/seo-lokalne-dla-warsztatu-top-3-google-maps/", "Jak działa lokalne SEO", "How local SEO works"], "auto": ["/realizacje/autocentrum-elektronowa/", "Zobacz Autocentrum Elektronowa", "Explore Autocentrum Elektronowa"], "launch": ["/realizacje/pulsegt/", "Zobacz start marki PulseGT", "Explore the PulseGT brand launch"], "finance": ["/realizacje/digital/mojeakcje/", "Poznaj aplikację MojeAkcje.pl", "Meet the MojeAkcje.pl app"], "local": ["/blog/landing-page-dla-firmy-lokalnej/", "Jak budujemy skuteczny landing", "How we build a focused landing page"]};
  const routeKeys = ["brand", "social", "web", "strategy", "ads", "finance", "rebrand", "strategy", "web", "brand", "marine", "product", "design", "strategy", "finance", "video", "launch", "ads", "marine", "rebrand", "product", "social", "strategy", "design", "auto"];
  items.forEach((item,i)=>item.push(routeKeys[i]));
  items.push(...[["strategy", "Nie każda cisza wymaga kampanii.", "Not every silence needs a campaign.", "Najpierw sprawdzamy, czy problemem jest widoczność, oferta czy doświadczenie klienta. Reklama nie powinna maskować złej diagnozy.", "First we ask whether the problem is visibility, the offer or the customer experience. Advertising should not hide a poor diagnosis.", "strategy"], ["creation", "Twój brand nie musi krzyczeć, żeby go usłyszano.", "Your brand need not shout to be heard.", "Rozpoznawalny język i konsekwencja potrafią zrobić więcej niż kolejny wykrzyknik. Pokazujemy markę przez jej własne cechy.", "A recognisable voice and consistency can do more than another exclamation mark. We build around the brand’s own qualities.", "brand"], ["digital", "Dobry UX nie prosi o instrukcję.", "Good UX needs no manual.", "Projektujemy ścieżki, w których kolejny krok jest oczywisty. Mniej zgadywania po stronie użytkownika, mniej tarcia w produkcie.", "We design journeys where the next step is obvious. Less guessing for the user, less friction in the product.", "web"], ["creation", "Algorytm nie ma gustu. Twoja marka powinna.", "The algorithm has no taste. Your brand should.", "Format dobieramy do kanału, ale charakter zostawiamy marce. Trend jest narzędziem, nie dyrektorem kreatywnym.", "We adapt the format to the channel while preserving the brand’s character. A trend is a tool, not a creative director.", "ai"], ["strategy", "Najdroższy zasięg? Ten do nikogo.", "The most expensive reach? Reaching no one.", "Ustalamy, kogo naprawdę chcemy poruszyć. Dopiero potem wybieramy komunikat, kanał i sposób sprawdzenia efektu.", "We define who we need to move. Then we choose the message, the channel and how to assess the result.", "ads"], ["digital", "Nie dokładaj ludziom kolejnej zakładki.", "Do not give people another tab to manage.", "Dobra aplikacja porządkuje zadania, zamiast tworzyć nowy obowiązek. Zaczynamy od tego, co można uprościć.", "A useful app organises work instead of creating another obligation. We start with what can be simplified.", "product"], ["creation", "Logo nie zamknie sprzedaży. Ale otworzy drzwi.", "A logo will not close the sale. It can open doors.", "To pierwszy sygnał, nie cała historia. Łączymy znak z językiem, materiałami i doświadczeniem, które podtrzymuje obietnicę.", "It is a first signal, not the whole story. We connect the mark to language, materials and an experience that keeps the promise.", "brand"], ["strategy", "Zanim zrobimy efekt, ustalmy po co.", "Before making an effect, define its purpose.", "Każda decyzja projektowa powinna czemuś służyć. Wrażenie jest ważne, ale nie zastępuje kierunku.", "Every design decision should serve a purpose. An impression matters, but it does not replace direction.", "design"], ["digital", "Automatyzuj nudę. Zostaw miejsce na pomysł.", "Automate the boring. Make room for ideas.", "Powtarzalne zadania oddajmy systemowi. Zespołowi zostawmy uwagę potrzebną do rozmowy, decyzji i tworzenia.", "Let the system handle repetitive tasks. Leave your team the attention needed for conversations, decisions and creative work.", "product"], ["creation", "Kadr z góry. Pomysł przy ziemi.", "A view from above. An idea grounded in purpose.", "Dron ma opowiadać o miejscu i skali, a nie tylko pokazać, że potrafi latać. Najpierw historia, potem trajektoria.", "A drone should tell a story about place and scale, rather than merely show it can fly. Story first, flight path second.", "drone"], ["strategy", "Brief nie jest wyrokiem. Jest początkiem rozmowy.", "A brief is not a verdict. It starts a conversation.", "Pytamy o to, co kryje się za zamówionym formatem. Czasem firma potrzebuje uporządkowania oferty, zanim zamówi nową stronę.", "We ask what sits behind the requested format. Sometimes a business needs a clearer offer before a new website.", "local"], ["digital", "Strona może być piękna. I nie przeszkadzać.", "A website can be beautiful. And stay out of the way.", "Ruch, typografia i obraz mają ułatwiać odbiór. Dbamy też o szybkość, małe ekrany i sytuacje, których nie widać na makiecie.", "Motion, typography and imagery should support understanding. We also consider speed, small screens and states beyond the mockup.", "web"], ["creation", "Dobra historia nie pachnie stockiem.", "A good story does not smell like stock footage.", "Szukamy tego, co dzieje się naprawdę: ludzi, pracy i szczegółów, których konkurencja nie może po prostu skopiować.", "We look for what is real: people, their work and details competitors cannot simply copy.", "video"], ["strategy", "Klient nie szuka kampanii. Szuka powodu.", "Customers do not seek campaigns. They seek a reason.", "Powodu, by zaufać, wrócić albo wybrać właśnie Ciebie. Układamy komunikację wokół tej decyzji.", "A reason to trust, return or choose you. We shape communication around that decision.", "auto"], ["digital", "Mniej „gdzie to jest?”. Więcej „już zrobione”.", "Less “where is it?”. More “already done”.", "Jedno miejsce na kontekst, zadania i wynik. Tak projektujemy narzędzia, które pomagają zespołowi działać.", "One place for context, tasks and results. That is how we design tools that help a team get work done.", "product"], ["creation", "Ładnie to za mało, żeby było Twoje.", "Looking good is not enough to make it yours.", "Marka potrzebuje zasad, które da się rozpoznać w poście, katalogu i na stoisku. Budujemy spójny system, nie kolekcję przypadków.", "A brand needs rules that work across a post, a catalogue and an exhibition stand. We build a system, not a collection of accidents.", "design"], ["strategy", "Pierwsze wrażenie nie ma przycisku „ponów”.", "First impressions have no retry button.", "Porządkujemy pierwsze spotkanie z marką: obietnicę, dowód i następny krok. To musi tworzyć jedną historię.", "We shape the first encounter: a promise, proof and a next step. They need to tell one story.", "launch"], ["digital", "Nie każde „klik” oznacza „chcę”.", "Not every click means “I want it”.", "Sam ruch nie wystarcza do oceny kampanii. Patrzymy, dokąd prowadzi i czy ułatwia klientowi sensowną decyzję.", "Traffic alone cannot assess a campaign. We look at where it leads and whether it helps people make a meaningful decision.", "ads"], ["creation", "Zróbmy coś, czego nie da się pomylić z konkurencją.", "Make something people cannot mistake for a competitor.", "Szukamy własnego terytorium: tonu, rytmu i obrazu. Rozpoznawalność zaczyna się od decyzji, z czego rezygnujemy.", "We find a territory of your own: voice, rhythm and imagery. Recognition starts with deciding what to leave out.", "rebrand"], ["strategy", "B2B też czytają ludzie.", "People read B2B too.", "Kompetencje techniczne nie wymagają sztywnego języka. Pomagamy opowiadać o trudnych rzeczach jasno i wiarygodnie.", "Technical expertise does not require stiff language. We help explain complex work clearly and credibly.", "marine"], ["digital", "Twoja firma nie mieści się w gotowym szablonie?", "Your business does not fit a template?", "Porównujemy realny proces z ograniczeniami gotowych narzędzi. Własny produkt ma sens wtedy, gdy rozwiązuje konkretny problem.", "We compare the real workflow with off-the-shelf limitations. A custom product makes sense when it solves a specific problem.", "saas"], ["creation", "AI zrobi więcej. Ty zdecyduj, co warto.", "AI can make more. You decide what is worth making.", "Więcej materiałów nie oznacza lepszej komunikacji. Selekcja, perspektywa i odpowiedzialność za efekt nadal należą do ludzi.", "More material does not mean better communication. Selection, perspective and responsibility still belong to people.", "ai"], ["strategy", "Bądź odpowiedzią, zanim padnie telefon.", "Be the answer before the phone rings.", "Widoczność w wyszukiwarce łączymy z jasną ofertą i lokalnym kontekstem. Pomagamy klientowi trafić tam, gdzie znajdzie odpowiedź.", "We connect search visibility with a clear offer and local context. We help people find a useful answer.", "seo"]]);
  items.push(...[["strategy", "Pozycja marki to miejsce w głowie.", "A brand position lives in the mind.", "Nie zajmujemy miejsca w kolejnym kanale dla samej obecności. Szukamy skojarzenia, które Twoja marka może zbudować i konsekwentnie wzmacniać.", "We do not enter another channel just to be present. We look for an association your brand can build and consistently strengthen.", "brand"], ["strategy", "Zanim skalujesz, sprawdź fundamenty.", "Check the foundations before scaling.", "Większy budżet potrafi powiększyć także zły pomysł. Zaczynamy od oferty, odbiorcy i dowodów, że komunikacja odpowiada na realną potrzebę.", "A larger budget can also amplify a poor idea. We start with the offer, the audience and evidence that the message answers a real need.", "strategy"], ["strategy", "Nie sprzedawaj cech. Uruchom wyobraźnię.", "Do not list features. Spark imagination.", "Przekładamy parametry na sytuacje z życia klienta. Pokazujemy, co produkt zmienia, zamiast zostawiać odbiorcę z listą danych.", "We turn specifications into situations customers recognise. We show what a product changes rather than leaving people with a list of facts.", "launch"], ["creation", "Zostaw ślad, nie szum.", "Leave a mark, not noise.", "Jedno własne spostrzeżenie jest więcej warte niż seria tekstów, które mogłyby należeć do dowolnej firmy. Zostawiamy w treści rozpoznawalny punkt widzenia.", "One original observation is worth more than a stream of copy that could belong to any company. We give content a recognisable point of view.", "ai"], ["creation", "Kadruj odważniej niż konkurencja.", "Frame it more boldly than the competition.", "Szukamy scen, gestów i detali, które mówią coś o marce. Kamera ma zauważyć historię, zanim zacznie ją efektownie pokazywać.", "We look for scenes, gestures and details that say something about the brand. The camera needs to notice the story before showing it beautifully.", "video"], ["creation", "Niech forma dotrzyma słowa.", "Let the form keep the promise.", "Jeśli marka mówi o precyzji, powinno być ją widać w układzie. Jeśli o odwadze — w decyzjach. Projekt i komunikat muszą się ze sobą zgadzać.", "If a brand speaks of precision, the layout should show it. If it speaks of courage, its choices should too. Design and message need to agree.", "design"], ["digital", "Mniej pól. Więcej „gotowe”.", "Fewer fields. More “done”.", "Każde pole formularza prosi o uwagę i czas. Zostawiamy to, co naprawdę potrzebne, i projektujemy jasne potwierdzenie następnego kroku.", "Every form field asks for attention and time. We keep what is needed and design a clear confirmation of the next step.", "web"], ["digital", "Klik to początek rozmowy.", "A click starts a conversation.", "Dopasowujemy obietnicę reklamy do tego, co czeka po drugiej stronie. Landing powinien rozwijać zainteresowanie, zamiast zaczynać zupełnie inny temat.", "We connect the ad’s promise to what awaits on the other side. A landing page should build on interest rather than start an unrelated subject.", "local"], ["digital", "Technologia nie musi być widoczna.", "Technology need not be visible.", "Najlepsze narzędzie pozwala skupić się na zadaniu. Ukrywamy złożoność tam, gdzie nie pomaga użytkownikowi podjąć decyzji.", "The best tool lets people focus on the task. We hide complexity where it does not help the user make a decision.", "saas"]]);
  const copy = {
    pl: { open:'Zacznij Proces',system:'PRZESTRZEŃ KREATYWNA',pause:'Ⅱ Zatrzymaj ruch',resume:'▷ Wznów ruch',reset:'↙ Zwiń',hint:'Przewiń. Zmień perspektywę.',last:'Przewiń w górę. Odkryj na nowo.',galaxy:'GALAKTYKA',strategy:'Strategia',creation:'Kreacja',digital:'Digital',strategyText:'Najpierw kierunek. Potem cała reszta.',creationText:'To, co masz do powiedzenia. W formie, której nie da się przeoczyć.',digitalText:'Pomysł nabiera kształtu. I zaczyna działać.' },
    en: { open:'Start the Process',system:'CREATIVE SPACE',pause:'Ⅱ Pause motion',resume:'▷ Resume motion',reset:'↙ Collapse',hint:'Scroll. Change perspective.',last:'Scroll up. Discover again.',galaxy:'GALAXY',strategy:'Strategy',creation:'Creative',digital:'Digital',strategyText:'Direction first. Everything else follows.',creationText:'What you have to say. In a form people cannot overlook.',digitalText:'The idea takes shape. And starts to work.' }
  };
  const galaxies = [
    {key:'strategy',rgb:'232,168,56',color:'#e8a838',angle:-.23},
    {key:'creation',rgb:'222,133,100',color:'#de8564',angle:.26},
    {key:'digital',rgb:'142,185,215',color:'#8eb9d7',angle:-.52}
  ];
  const $ = selector => document.querySelector(selector);
  const stage = $('.universe'), world = $('.world'), journey = $('main');
  const canvas = $('canvas'), ctx = canvas.getContext('2d'), list = $('#ideas');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'pl';
  let open = false, paused = reduced.matches, selected = -1, active = 0;
  let progress = 0, time = 0, last = 0, width = 0, height = 0, frame = 0, inView = true;
  let step = 900, depth = 0, targetDepth = 0, previousDepth = 0, enteringAt = 0, entryTimer;
  let settleTimer, scrollFlight=null, touching=false, lastScrollY=0, scrollDirection=1;
  let compact=false, scene={left:0,top:0,width:0,height:0};
  const ENTRY_DURATION=3400;
  let connectionStarted=0;
  let visibleNodes = [], pointer = {x:0,y:0,active:false};
  const stars = Array.from({length:220},(_,i)=>({x:Math.sin(i*127.1)*.5+.5,y:Math.cos(i*311.7)*.5+.5,r:i%7===0?1.3:.65,phase:i*.43,z:(i*.61803398875)%1}));
  const nodes = items.map((item,i)=>{
    const el = document.createElement('button');
    el.className = 'idea'; el.dataset.category = item[0]; el.setAttribute('aria-pressed','false');
    el.addEventListener('click',()=>showDetail(i)); list.appendChild(el);
    return {el,x:0,y:0};
  });
  function request(){ if(!frame && inView && !document.hidden) frame=requestAnimationFrame(draw); }
  function updateGalaxy(index){
    if(index!==active) closeDetail(false);
    active=index;
    const g=galaxies[index];
    visibleNodes=nodes.filter((n,i)=>items[i][0]===g.key);
    nodes.forEach(n=>{n.el.hidden=!visibleNodes.includes(n);n.el.disabled=n.el.hidden;});
    stage.dataset.galaxy=g.key;
    stage.style.setProperty('--galaxy-color',g.color);
    $('#galaxy-name').textContent=copy[lang][g.key];
    $('#galaxy-description').textContent=copy[lang][g.key+'Text'];
    $('#galaxy-number').textContent=`${copy[lang].galaxy} 0${index+1} / 03`;
    $('#coordinate').textContent=`${visibleNodes.length} / ${items.length}`;
    $('#scroll-hint').textContent=copy[lang][index===2?'last':'hint'];
    document.querySelectorAll('#galaxy-navigation [data-galaxy]').forEach((el,i)=>{
      el.setAttribute('aria-label',copy[lang][galaxies[i].key]);el.title=copy[lang][galaxies[i].key];
      if(i===index)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');
    });
    request();
  }
  function layout(i){
    const count=visibleNodes.length;
    const cols=width<520?2:width<900?3:5;
    const slot=cols===5&&i>=7?i+1:i;
    const rows=Math.ceil((count+(cols===5&&count>7?1:0))/cols);
    return {x:(slot%cols+.5)/cols,y:rows===1?.5:.035+Math.floor(slot/cols)/(rows-1)*.91};
  }
  function resize(){
    const r=stage.getBoundingClientRect(); width=r.width; height=r.height;
    compact=width<=700||matchMedia('(pointer:coarse)').matches;
    const dpr=Math.min(devicePixelRatio||1,stage.dataset.state==='entering'?2:compact?1.5:2);
    if(canvas.width!==Math.round(width*dpr)||canvas.height!==Math.round(height*dpr)){
      canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    const wr=world.getBoundingClientRect();
    scene={left:wr.left-r.left,top:wr.top-r.top,width:wr.width,height:wr.height};
    // svh stays stable when mobile browser chrome expands or collapses.
    const oldStep=step,position=window.scrollY/oldStep;step=Math.max(height,720);
    journey.style.height=open?`${height+step*2}px`:'100svh';
    if(open&&oldStep!==step){cancelTravel();window.scrollTo({top:position*step,behavior:'instant'});}
    lastScrollY=window.scrollY;
    targetDepth=open?Math.max(0,Math.min(2,window.scrollY/step)):0;
    request();
  }
  function smooth(a,b,value){const x=Math.max(0,Math.min(1,(value-a)/(b-a)));return x*x*(3-2*x);}
  // Perspective layers belong to the camera, so changing a constellation never resets the flight.
  function blendGalaxy(value){
    const first=Math.min(1,Math.floor(value)),mix=smooth(0,1,value-first);
    const a=galaxies[first],b=galaxies[first+1],ar=a.rgb.split(',').map(Number),br=b.rgb.split(',').map(Number);
    return {rgb:ar.map((v,i)=>Math.round(v+(br[i]-v)*mix)).join(','),angle:a.angle+(b.angle-a.angle)*mix};
  }
  function paintTunnel(cx,cy,intensity,clock,rgb,direction=1){
    if(intensity<=.005)return;
    const extent=Math.hypot(width,height)*.62;
    ctx.save();ctx.lineCap='round';
    for(let i=0;i<(compact?130:210);i++){
      const z=((((Math.sin(i*91.117)*43758.5453)%1)-clock*.16)%1+1)%1;
      const r=extent*.065/(z+.065),angle=i*2.399963+clock*.09+(1-z)*.24;
      const x=Math.cos(angle)*r,y=Math.sin(angle)*r*.78;
      const length=intensity*(.035+(1-z)*.25)*direction;
      ctx.beginPath();ctx.moveTo(cx+x,cy+y);ctx.lineTo(cx+x*(1+length),cy+y*(1+length));
      ctx.strokeStyle=`rgba(${i%9===0?'242,235,216':rgb},${intensity*(1-z)*.5})`;
      ctx.lineWidth=.45+(1-z)*1.2;ctx.stroke();
    }
    for(let j=0;j<9;j++){
      const z=((j/9-clock*.12)%1+1)%1,r=extent*.055/(z+.055);
      const fade=Math.sin(z*Math.PI);
      ctx.beginPath();ctx.ellipse(cx,cy,r,r*.76,clock*.035,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${rgb},${intensity*fade*.2})`;ctx.lineWidth=.7;ctx.stroke();
    }
    ctx.restore();
  }
  function paintEntry(t){
    const cx=width/2,cy=height/2,extent=Math.hypot(width,height)*.65;
    const pull=smooth(0,.28,t),dive=smooth(.18,.78,t),arrival=smooth(.72,1,t);
    const energy=smooth(.07,.27,t)*(1-smooth(.78,1,t));
    ctx.save();
    // The circular event horizon expands out of the original dot before the camera crosses it.
    ctx.fillStyle=`rgba(12,14,12,${smooth(.15,.34,t)})`;ctx.fillRect(0,0,width,height);
    const halo=ctx.createRadialGradient(cx,cy,0,cx,cy,extent);
    halo.addColorStop(0,`rgba(232,168,56,${.08+energy*.16})`);
    halo.addColorStop(.38,`rgba(176,113,39,${energy*.12})`);halo.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=halo;ctx.fillRect(0,0,width,height);
    const motion=pull*.28+dive*2.8;
    ctx.lineCap='round';
    for(let i=0;i<420;i++){
      const seed=((Math.sin(i*91.117)*43758.5453)%1+1)%1;
      const z=((seed-motion)%1+1)%1;
      const radius=extent*.055/(z+.055);
      const angle=i*2.399963+(1-z)*(.18+dive*.3)+dive*.48;
      const squash=.8+.2*arrival;
      const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius*squash;
      const tail=(.025+dive*.23)*(1-arrival*.9);
      const alpha=(.14+(1-z)*.64)*smooth(0,.18,t)*(1-arrival*.85);
      ctx.beginPath();ctx.moveTo(cx+x,cy+y);
      ctx.lineTo(cx+x*(1+tail),cy+y*(1+tail));
      ctx.strokeStyle=`rgba(${i%11===0?'241,236,218':i%17===0?'142,185,215':'232,168,56'},${alpha})`;
      ctx.lineWidth=.45+(1-z)*1.7;ctx.stroke();
    }
    // Nested curved gates and spiral filaments establish depth, not a flat starburst.
    for(let i=0;i<15;i++){
      const z=((i/15-motion*.38)%1+1)%1;
      const r=extent*.045/(z+.045),rotation=dive*.35+(1-z)*.2;
      ctx.beginPath();ctx.ellipse(cx,cy,r,r*.78,rotation,0,Math.PI*2);
      ctx.strokeStyle=`rgba(232,168,56,${energy*Math.sin(z*Math.PI)*.32})`;
      ctx.lineWidth=.6+(1-z)*1.2;ctx.stroke();
    }
    for(let strand=0;strand<7;strand++){
      ctx.beginPath();
      for(let j=0;j<=50;j++){
        const z=j/50,r=24+z*z*extent*1.3;
        const angle=strand*Math.PI*2/7+z*.65+dive*.65;
        const x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r*.78;
        if(j===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.strokeStyle=`rgba(232,168,56,${energy*.12})`;ctx.lineWidth=.7;ctx.stroke();
    }
    if(t<.66){
      const radius=(compact?67.5:Math.max(62.5,Math.min(width*.07,95)))*(1-pull*.4)+Math.pow(dive,3)*extent*.24;
      ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.fillStyle='#101310';ctx.fill();
      ctx.shadowBlur=25+energy*30;ctx.shadowColor='#e8a838';ctx.strokeStyle=`rgba(244,190,90,${1-smooth(.39,.66,t)})`;
      ctx.lineWidth=1.4+energy*1.5;ctx.stroke();ctx.shadowBlur=0;
    }
    // A single warm arrival bloom fades into the first constellation, without a white flash.
    const bloom=Math.sin(smooth(.65,.96,t)*Math.PI)*.12;
    const light=ctx.createRadialGradient(cx,cy,0,cx,cy,extent*.65);
    light.addColorStop(0,`rgba(243,211,151,${bloom})`);light.addColorStop(1,'rgba(232,168,56,0)');
    ctx.fillStyle=light;ctx.fillRect(0,0,width,height);ctx.restore();
  }
  function paintConnection(cx,cy,now,g,opacity){
    if(selected<0||nodes[selected].el.hidden)return false;
    const node=nodes[selected],dx=node.x-cx,dy=node.y-cy,length=Math.max(1,Math.hypot(dx,dy));
    const bend=Math.min(70,length*.18)*(dy<0?-1:1);
    const control={x:(cx+node.x)/2-dy/length*bend,y:(cy+node.y)/2+dx/length*bend};
    const age=now-connectionStarted;
    const extension=reduced.matches?1:smooth(0,650,age);
    const at=t=>({x:(1-t)*(1-t)*cx+2*(1-t)*t*control.x+t*t*node.x,y:(1-t)*(1-t)*cy+2*(1-t)*t*control.y+t*t*node.y});
    const end=at(extension);
    ctx.save();ctx.globalAlpha=opacity;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.quadraticCurveTo(control.x,control.y,node.x,node.y);
    ctx.strokeStyle=`rgba(${g.rgb},.12)`;ctx.lineWidth=1;ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,cy);
    ctx.quadraticCurveTo(cx+(control.x-cx)*extension,cy+(control.y-cy)*extension,end.x,end.y);
    ctx.strokeStyle=`rgba(${g.rgb},.9)`;ctx.lineWidth=1.6;ctx.shadowBlur=12;ctx.shadowColor=g.color;ctx.stroke();
    if(!reduced.matches&&(extension<1||!paused)){
      const t=extension<1?extension:((age-650)%1800)/1800;
      const p=at(t);ctx.beginPath();ctx.arc(p.x,p.y,2.8,0,Math.PI*2);ctx.fillStyle='#f8edd4';ctx.shadowBlur=18;ctx.fill();
    }
    if(!reduced.matches&&age<850){
      const t=age/850;ctx.beginPath();ctx.arc(cx,cy,17+t*29,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${g.rgb},${(1-t)*.6})`;ctx.lineWidth=1;ctx.shadowBlur=0;ctx.stroke();
    }
    ctx.restore();return !reduced.matches&&age<850;
  }
  function draw(now){
    frame=0;
    const dt=Math.min((now-(last||now))/1000,.05);last=now;
    const ambient=!paused&&!reduced.matches;
    if(ambient)time+=dt;
    if(scrollFlight){
      const flight=scrollFlight,t=Math.min(1,(now-flight.start)/flight.duration);
      window.scrollTo({top:flight.from+(flight.to-flight.from)*smooth(0,1,t),behavior:'instant'});
      targetDepth=Math.max(0,Math.min(2,window.scrollY/step));
      if(t===1)scrollFlight=null;
    }
    ctx.clearRect(0,0,width,height);
    const wr=scene;
    const cx=wr.left+wr.width/2,cy=wr.top+wr.height/2;
    if(!open){
      if(stage.dataset.state==='entering'&&!reduced.matches){
        const t=Math.min(1,(now-enteringAt)/ENTRY_DURATION);
        paintEntry(t);request();
      }
      return;
    }
    previousDepth=depth;
    // One easing curve during automatic travel; fast, frame-rate independent follow for native input.
    depth=reduced.matches||scrollFlight||touching?targetDepth:depth+(targetDepth-depth)*(1-Math.exp(-dt/(compact?.055:.085)));
    if(Math.abs(depth-targetDepth)<.0002)depth=targetDepth;
    const index=Math.max(0,Math.min(2,Math.round(depth)));
    if(index!==active)updateGalaxy(index);
    const g=galaxies[active],atmosphere=blendGalaxy(depth),offset=depth-active;
    const travel=reduced.matches?0:smooth(.1,.49,Math.abs(offset));
    const zoom=reduced.matches?1:Math.exp(offset*(compact?1.25:1.75));
    const visibility=reduced.matches?1:1-smooth(.15,.48,Math.abs(offset));
    progress=reduced.matches?1:Math.min(1,progress+dt*1.4);
    const speed=Math.min(.7,Math.abs(depth-previousDepth)/Math.max(dt,.001)*.12);
    $('#galaxy-heading').style.opacity=String(reduced.matches?1:1-travel);
    const glow=ctx.createRadialGradient(cx+Math.sin(depth*2)*width*.16,cy-height*.08,0,cx,cy,width*.8);
    glow.addColorStop(0,`rgba(${atmosphere.rgb},${.065+travel*.14})`);glow.addColorStop(.45,`rgba(${atmosphere.rgb},${.015+travel*.025})`);glow.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    for(let i=0;i<(compact?150:stars.length);i++){
      const s=stars[i],z=reduced.matches?s.z:((s.z-depth*.22)%1+1)%1;
      const perspective=.65/(.32+z),alpha=Math.sin(z*Math.PI);
      const x=(s.x-.5)*width*perspective+cx,y=(s.y-.5)*height*perspective+cy;
      ctx.beginPath();ctx.arc(x,y,s.r*(.6+perspective*.6),0,Math.PI*2);
      ctx.fillStyle=`rgba(221,222,204,${alpha*(.14+.14*Math.sin(time*.5+s.phase))})`;ctx.fill();
      if(!reduced.matches&&speed>.03){
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(x-cx)*speed*.11,y+(y-cy)*speed*.11);
        ctx.strokeStyle=`rgba(${atmosphere.rgb},${alpha*speed*.45})`;ctx.lineWidth=.6;ctx.stroke();
      }
    }
    if(!reduced.matches)paintTunnel(cx,cy,Math.max(travel*.85,speed),time*.4+depth*3,atmosphere.rgb,depth>=previousDepth?1:-1);
    ctx.save();ctx.translate(cx,cy);ctx.rotate(atmosphere.angle+(ambient?Math.sin(time*.07)*.06:0));
    for(let i=0;i<4;i++){
      const r=(90+i*94)*zoom;
      ctx.beginPath();ctx.ellipse(0,0,r*1.5,r*.6,0,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${atmosphere.rgb},${(.12-i*.022)*(1-travel*.35)})`;ctx.lineWidth=1;ctx.stroke();
      const a=time*(.1+i*.018)+i*1.8;
      ctx.beginPath();ctx.arc(Math.cos(a)*r*1.5,Math.sin(a)*r*.6,2,0,Math.PI*2);ctx.fillStyle=g.color;ctx.fill();
    }
    ctx.restore();
    visibleNodes.forEach((n,order)=>{
      const p=layout(order);
      const reveal=reduced.matches?1:smooth(order*.012,order*.012+.55,progress);
      const ease=1-Math.pow(1-reveal,3);
      const layer=reduced.matches?1:Math.exp(offset*((order%3)-1)*.12);
      let x=(p.x-.5)*wr.width*zoom*layer*ease,y=(p.y-.5)*wr.height*zoom*layer*ease;
      if(!reduced.matches){const angle=offset*.1,rx=x*Math.cos(angle)-y*Math.sin(angle);y=x*Math.sin(angle)+y*Math.cos(angle);x=rx;}
      if(ambient){x+=Math.sin(time*.36+order*1.6)*3*ease;y+=Math.cos(time*.3+order*.9)*4*ease;}
      if(pointer.active&&ambient){const dx=x+wr.width/2-pointer.x,dy=y+wr.height/2-pointer.y,d=Math.hypot(dx,dy);if(d<120){x+=dx/Math.max(1,d)*(1-d/120)*10;y+=dy/Math.max(1,d)*(1-d/120)*10;}}
      n.x=x+wr.width/2+wr.left;n.y=y+wr.height/2+wr.top;
      n.el.style.transform=`translate(-50%,-50%) translate(${x.toFixed(2)}px,${y.toFixed(2)}px) scale(${(reduced.matches?1:Math.max(.55,Math.min(1.8,zoom))).toFixed(3)})`;
      n.el.style.opacity=String(reveal*visibility);
      // No invisible hit targets while the camera passes between galaxies.
      const interactive=reveal*visibility>=.35;
      n.el.style.pointerEvents=interactive?'':'none';
      if(n.el.tabIndex!==(interactive?0:-1))n.el.tabIndex=interactive?0:-1;
      if(order%3===0&&n.el.getAttribute('aria-pressed')!=='true'){
        ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(n.x,n.y);
        ctx.strokeStyle=`rgba(${g.rgb},${.06*visibility})`;ctx.stroke();
      }
    });
    const connectionAnimating=paintConnection(cx,cy,now,g,visibility);
    $('.origin').style.opacity=String(1-travel*.85);
    $('.origin').style.transform=`translate(-50%,-50%) scale(${zoom.toFixed(3)})`;
    if(ambient||scrollFlight||depth!==targetDepth||progress<1||connectionAnimating)request();
  }
  function setOpen(value){
    clearTimeout(entryTimer);cancelTravel();closeDetail(false);
    $('#seed').setAttribute('aria-expanded',String(value));
    if(value){
      if(stage.dataset.state!=='closed')return;
      stage.dataset.state='entering';document.body.classList.add('inside');
      enteringAt=performance.now();$('#seed').disabled=true;resize();request();
      entryTimer=setTimeout(()=>{
        open=true;depth=targetDepth=0;stage.dataset.state='open';journey.classList.add('journey');document.body.classList.add('journey-open');
        list.hidden=false;$('.controls').hidden=false;$('#galaxy-heading').hidden=false;
        $('#galaxy-navigation').hidden=false;$('#scroll-hint').hidden=false;
        progress=0;last=0;window.scrollTo({top:0,behavior:'instant'});updateGalaxy(0);resize();
      },reduced.matches?0:ENTRY_DURATION);
    }else{
      open=false;depth=targetDepth=0;stage.dataset.state='closed';document.body.classList.remove('inside','journey-open');
      journey.classList.remove('journey');journey.style.height='100svh';
      list.hidden=true;$('.controls').hidden=true;$('#galaxy-heading').hidden=true;
      $('#galaxy-navigation').hidden=true;$('#scroll-hint').hidden=true;
      $('#coordinate').textContent='00 / '+items.length;$('#seed').disabled=false;progress=0;
      window.scrollTo({top:0,behavior:'instant'});$('#seed').focus({preventScroll:true});resize();
    }
  }
  function goToGalaxy(index){
    if(!open)return;
    closeDetail(false);cancelTravel();
    const to=Math.max(0,Math.min(2,index))*step,from=window.scrollY;
    if(reduced.matches){window.scrollTo({top:to,behavior:'instant'});return;}
    scrollFlight={from,to,start:performance.now(),duration:Math.min(850,420+Math.abs(to-from)/step*260)};
    request();
  }
  function cancelTravel(){
    clearTimeout(settleTimer);scrollFlight=null;
  }
  function settle(){
    clearTimeout(settleTimer);
    if(!open||touching||scrollFlight||!$('#detail').hidden)return;
    // Native inertia finishes first. Never snap while a finger is still on the screen.
    settleTimer=setTimeout(()=>{
      if(!open||touching||scrollFlight||!$('#detail').hidden||Math.abs(targetDepth-Math.round(targetDepth))<.035)return;
      goToGalaxy(scrollDirection>0?Math.ceil(targetDepth):Math.floor(targetDepth));
    },compact?240:180);
  }
  function closeDetail(focus=true){
    $('#detail').hidden=true;
    if(selected>=0){nodes[selected].el.setAttribute('aria-pressed','false');if(focus&&!nodes[selected].el.hidden)nodes[selected].el.focus({preventScroll:true});}
    selected=-1;$('.origin').classList.remove('is-selected');request();
  }
  function showDetail(i){
    cancelTravel();
    const changed=selected!==i||$('#detail').hidden;
    if(changed)connectionStarted=performance.now();
    if(selected>=0)nodes[selected].el.setAttribute('aria-pressed','false');
    selected=i;$('.origin').classList.add('is-selected');nodes[i].el.setAttribute('aria-pressed','true');
    const item=items[i],destination=destinations[item[5]];
    $('#detail-category').textContent=`${String(i+1).padStart(2,'0')} / ${copy[lang][item[0]]}`;
    $('#detail-title').textContent=item[lang==='pl'?1:2];$('#detail-description').textContent=item[lang==='pl'?3:4];
    const url=new URL(destination[0],location.origin);if(lang==='en')url.searchParams.set('lang','en');
    $('#detail-link').href=url.pathname+url.search+url.hash;$('#detail-link').textContent=destination[lang==='pl'?1:2]+' ↗';
    const panel=$('#detail');
    if(changed){
      const r=nodes[i].el.getBoundingClientRect();
      panel.dataset.side=r.x+r.width/2>innerWidth/2?'left':'right';
    }
    panel.hidden=false;
    if(changed&&!reduced.matches){
      panel.getAnimations().forEach(a=>a.cancel());
      panel.animate([{opacity:0,transform:`translate(${panel.dataset.side==='left'?-18:18}px,8px)`},{opacity:1,transform:'translate(0,0)'}],{duration:340,easing:'cubic-bezier(.2,.8,.2,1)'});
    }
    $('#close-detail').focus({preventScroll:true});request();
  }
  function applyLanguage(){
    document.documentElement.lang=lang;
    document.title=lang==='pl'?'Proces — od pomysłu do efektu · KTB Media':'Process — from idea to impact · KTB Media';
    document.querySelectorAll('[data-copy]').forEach(el=>{el.textContent=copy[lang][el.dataset.copy];});
    $('#pause').textContent=copy[lang][paused?'resume':'pause'];
    $('#language').textContent=lang==='pl'?'EN ↗':'PL ↗';$('#language').setAttribute('aria-label',lang==='pl'?'Switch to English':'Przełącz na polski');
    $('#close-detail').setAttribute('aria-label',lang==='pl'?'Zamknij szczegóły':'Close details');
    stage.setAttribute('aria-label',lang==='pl'?'Interaktywny wszechświat pomysłów':'Interactive universe of ideas');
    list.setAttribute('aria-label',lang==='pl'?'Pomysły':'Ideas');
    $('#galaxy-navigation').setAttribute('aria-label',lang==='pl'?'Wybierz galaktykę':'Choose a galaxy');
    nodes.forEach((n,i)=>n.el.textContent=items[i][lang==='pl'?1:2]);
    document.querySelectorAll('header nav a').forEach((a,i)=>{a.textContent=(lang==='pl'?['Usługi','Realizacje','Proces','O nas','Blog','Kontakt']:['Services','Work','Process','About','Journal','Contact'])[i];});
    $('h1').textContent=lang==='pl'?'Proces KTB Media — od pomysłu do efektu':'KTB Media process — from idea to impact';
    document.querySelectorAll('header a[href]').forEach(a=>{const u=new URL(a.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');a.href=u.pathname+u.search+u.hash;});
    const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');history.replaceState(null,'',u.pathname+u.search+u.hash);
    updateGalaxy(active);if(selected>=0)showDetail(selected);
  }
  $('#seed').addEventListener('click',()=>setOpen(true));$('#reset').addEventListener('click',()=>setOpen(false));
  $('#close-detail').addEventListener('click',()=>closeDetail());
  $('#pause').addEventListener('click',()=>{paused=!paused;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();});
  $('#language').addEventListener('click',()=>{lang=lang==='pl'?'en':'pl';applyLanguage();});
  document.querySelectorAll('#galaxy-navigation [data-galaxy]').forEach((el,i)=>el.addEventListener('click',()=>goToGalaxy(i)));
  window.addEventListener('scroll',()=>{
    if(!open)return;
    const y=window.scrollY,delta=y-lastScrollY;lastScrollY=y;
    if(Math.abs(delta)>2)scrollDirection=delta>0?1:-1;
    targetDepth=Math.max(0,Math.min(2,y/step));request();settle();
  },{passive:true});
  window.addEventListener('wheel',cancelTravel,{passive:true});
  window.addEventListener('touchstart',()=>{touching=true;cancelTravel();},{passive:true});
  function releaseTouch(e){touching=e.touches.length>0;if(!touching)settle();}
  window.addEventListener('touchend',releaseTouch,{passive:true});
  window.addEventListener('touchcancel',releaseTouch,{passive:true});
  window.addEventListener('resize',resize,{passive:true});
  world.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=world.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top,active:true};});
  world.addEventListener('pointerleave',()=>pointer.active=false);
  const cursor=$('.ktb-cursor'),finePointer=matchMedia('(hover:hover) and (pointer:fine)');
  document.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch'||!finePointer.matches)return;
    document.body.classList.add('cursor-ready');cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    cursor.classList.toggle('hover',!!e.target.closest('button:not(:disabled),a'));cursor.classList.toggle('on-paper',!!e.target.closest('#detail'));
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>document.body.classList.remove('cursor-ready'));
  window.addEventListener('blur',()=>document.body.classList.remove('cursor-ready'));
  finePointer.addEventListener('change',()=>document.body.classList.remove('cursor-ready'));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!$('#detail').hidden){closeDetail();return;}
    if(!open||!$('#detail').hidden||e.target.closest('button,a,input,textarea,select')||e.metaKey||e.ctrlKey||e.altKey)return;
    if(['ArrowDown','PageDown','ArrowUp','PageUp','Home','End',' '].includes(e.key)){
      e.preventDefault();goToGalaxy(e.key==='Home'?0:e.key==='End'?2:active+(['ArrowUp','PageUp'].includes(e.key)||e.shiftKey?-1:1));
    }
  });
  document.addEventListener('visibilitychange',()=>{last=0;request();});
  reduced.addEventListener('change',()=>{
    if(reduced.matches&&scrollFlight){const to=scrollFlight.to;cancelTravel();window.scrollTo({top:to,behavior:'instant'});}
    paused=reduced.matches;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();
  });
  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;last=0;request();},{threshold:.01}).observe(stage);
  history.scrollRestoration='manual';window.scrollTo({top:0,behavior:'instant'});
  $('#pause').setAttribute('aria-pressed',String(paused));applyLanguage();$('#coordinate').textContent='00 / '+items.length;resize();
})();
