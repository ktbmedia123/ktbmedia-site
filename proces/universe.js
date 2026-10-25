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
  let visibleNodes = [], pointer = {x:0,y:0,active:false};
  const stars = Array.from({length:220},(_,i)=>({x:Math.sin(i*127.1)*.5+.5,y:Math.cos(i*311.7)*.5+.5,r:i%7===0?1.3:.65,phase:i*.43}));
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
    const dpr=Math.min(devicePixelRatio||1,2);
    canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    const oldStep=step;step=Math.max(innerHeight,720);
    journey.style.height=open?`${height+step*2}px`:'100svh';
    if(open && oldStep!==step)window.scrollTo({top:depth*step,behavior:'instant'});
    targetDepth=open?Math.max(0,Math.min(2,window.scrollY/step)):0;
    request();
  }
  function smooth(a,b,value){const x=Math.max(0,Math.min(1,(value-a)/(b-a)));return x*x*(3-2*x);}
  function paintTunnel(cx,cy,intensity,clock,rgb,direction=1){
    if(intensity<=.005)return;
    for(let i=0;i<150;i++){
      const a=i*2.39996+clock*.13;
      const z=((i*.618+clock*.5)%1),r=Math.pow(z,2.6)*Math.max(width,height)*.85;
      const x=Math.cos(a)*r,y=Math.sin(a)*r*.68;
      ctx.beginPath();ctx.moveTo(cx+x,cy+y);
      ctx.lineTo(cx+x*(1+intensity*.38*direction),cy+y*(1+intensity*.38*direction));
      ctx.strokeStyle=`rgba(${rgb},${intensity*(.1+z*.65)})`;ctx.lineWidth=.3+z*1.4;ctx.stroke();
    }
    for(let j=0;j<4;j++){
      const r=((clock*.3+j/4)%1)*Math.max(width,height)*.65;
      ctx.beginPath();ctx.ellipse(cx,cy,Math.max(1,r),Math.max(1,r*.68),clock*.08,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${rgb},${intensity*.14})`;ctx.lineWidth=1;ctx.stroke();
    }
  }
  function draw(now){
    frame=0;
    const dt=Math.min((now-(last||now))/1000,.05);last=now;
    const ambient=!paused&&!reduced.matches;
    if(ambient)time+=dt;
    ctx.clearRect(0,0,width,height);
    const wr=world.getBoundingClientRect(),sr=stage.getBoundingClientRect();
    const cx=wr.left-sr.left+wr.width/2,cy=wr.top-sr.top+wr.height/2;
    if(!open){
      if(stage.dataset.state==='entering'&&!reduced.matches){
        const t=Math.min(1,(now-enteringAt)/2100);
        paintTunnel(cx,height/2,Math.sin(t*Math.PI),t*5,'232,168,56');request();
      }
      return;
    }
    previousDepth=depth;
    depth=reduced.matches?targetDepth:depth+(targetDepth-depth)*Math.min(1,dt*11);
    if(Math.abs(depth-targetDepth)<.0002)depth=targetDepth;
    const index=Math.max(0,Math.min(2,Math.round(depth)));
    if(index!==active)updateGalaxy(index);
    const g=galaxies[active],offset=depth-active;
    const travel=reduced.matches?0:smooth(.1,.49,Math.abs(offset));
    const zoom=reduced.matches?1:Math.exp(offset*2.1);
    const visibility=reduced.matches?1:1-smooth(.15,.48,Math.abs(offset));
    progress=reduced.matches?1:Math.min(1,progress+dt*1.4);
    const speed=Math.min(1,Math.abs(depth-previousDepth)*32);
    stage.style.setProperty('--travel',travel.toFixed(3));
    $('#galaxy-heading').style.opacity=String(reduced.matches?1:1-travel);
    const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,width*.65);
    glow.addColorStop(0,`rgba(${g.rgb},${.06+travel*.09})`);glow.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    for(const s of stars){
      const x=(s.x-.5)*width*zoom+cx,y=(s.y-.5)*height*zoom+cy;
      ctx.beginPath();ctx.arc(x,y,s.r*(1+travel),0,Math.PI*2);
      ctx.fillStyle=`rgba(221,222,204,${.16+.12*Math.sin(time*.5+s.phase)})`;ctx.fill();
    }
    if(!reduced.matches)paintTunnel(cx,cy,Math.max(travel*.7,speed),time+depth*4,g.rgb,depth>=previousDepth?1:-1);
    ctx.save();ctx.translate(cx,cy);ctx.rotate(g.angle+(ambient?Math.sin(time*.07)*.06:0));
    for(let i=0;i<4;i++){
      const r=(90+i*94)*zoom;
      ctx.beginPath();ctx.ellipse(0,0,r*1.5,r*.6,0,0,Math.PI*2);
      ctx.strokeStyle=`rgba(${g.rgb},${(.12-i*.022)*(1-travel*.6)})`;ctx.lineWidth=1;ctx.stroke();
      const a=time*(.1+i*.018)+i*1.8;
      ctx.beginPath();ctx.arc(Math.cos(a)*r*1.5,Math.sin(a)*r*.6,2,0,Math.PI*2);ctx.fillStyle=g.color;ctx.fill();
    }
    ctx.restore();
    visibleNodes.forEach((n,order)=>{
      const p=layout(order);
      const reveal=reduced.matches?1:smooth(order*.012,order*.012+.55,progress);
      const ease=1-Math.pow(1-reveal,3);
      let x=(p.x-.5)*wr.width*zoom*ease,y=(p.y-.5)*wr.height*zoom*ease;
      if(ambient){x+=Math.sin(time*.36+order*1.6)*3*ease;y+=Math.cos(time*.3+order*.9)*4*ease;}
      if(pointer.active&&ambient){const dx=x+wr.width/2-pointer.x,dy=y+wr.height/2-pointer.y,d=Math.hypot(dx,dy);if(d<120){x+=dx/Math.max(1,d)*(1-d/120)*10;y+=dy/Math.max(1,d)*(1-d/120)*10;}}
      n.x=x+wr.width/2+wr.left-sr.left;n.y=y+wr.height/2+wr.top-sr.top;
      n.el.style.transform=`translate(-50%,-50%) translate(${x.toFixed(2)}px,${y.toFixed(2)}px) scale(${(reduced.matches?1:Math.max(.55,Math.min(1.8,zoom))).toFixed(3)})`;
      n.el.style.opacity=String(reveal*visibility);n.el.style.filter=travel>.02?`blur(${(travel*3).toFixed(2)}px)`:'none';
      // No invisible hit targets while the camera passes between galaxies.
      n.el.style.pointerEvents=visibility<.35?'none':'';n.el.tabIndex=reveal*visibility<.35?-1:0;
      if(order%3===0||n.el.getAttribute('aria-pressed')==='true'){
        ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(n.x,n.y);
        ctx.strokeStyle=`rgba(${g.rgb},${n.el.getAttribute('aria-pressed')==='true'?.45:.06*visibility})`;ctx.stroke();
      }
    });
    $('.origin').style.opacity=String(1-travel*.85);
    $('.origin').style.transform=`translate(-50%,-50%) scale(${zoom.toFixed(3)})`;
    if(ambient||depth!==targetDepth||progress<1)request();
  }
  function setOpen(value){
    clearTimeout(entryTimer);closeDetail(false);
    $('#seed').setAttribute('aria-expanded',String(value));
    if(value){
      if(stage.dataset.state!=='closed')return;
      stage.dataset.state='entering';document.body.classList.add('inside');
      enteringAt=performance.now();$('#seed').disabled=true;request();
      entryTimer=setTimeout(()=>{
        open=true;depth=targetDepth=0;stage.dataset.state='open';journey.classList.add('journey');document.body.classList.add('journey-open');
        list.hidden=false;$('.controls').hidden=false;$('#galaxy-heading').hidden=false;
        $('#galaxy-navigation').hidden=false;$('#scroll-hint').hidden=false;
        progress=0;last=0;window.scrollTo({top:0,behavior:'instant'});updateGalaxy(0);resize();
      },reduced.matches?0:2100);
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
    closeDetail(false);
    window.scrollTo({top:Math.max(0,Math.min(2,index))*step,behavior:reduced.matches?'instant':'smooth'});
  }
  function closeDetail(focus=true){
    $('#detail').hidden=true;
    if(selected>=0){nodes[selected].el.setAttribute('aria-pressed','false');if(focus&&!nodes[selected].el.hidden)nodes[selected].el.focus({preventScroll:true});}
    selected=-1;$('.origin').classList.remove('is-selected');request();
  }
  function showDetail(i){
    if(selected>=0)nodes[selected].el.setAttribute('aria-pressed','false');
    selected=i;$('.origin').classList.add('is-selected');nodes[i].el.setAttribute('aria-pressed','true');
    const item=items[i],destination=destinations[item[5]];
    $('#detail-category').textContent=`${String(i+1).padStart(2,'0')} / ${copy[lang][item[0]]}`;
    $('#detail-title').textContent=item[lang==='pl'?1:2];$('#detail-description').textContent=item[lang==='pl'?3:4];
    const url=new URL(destination[0],location.origin);if(lang==='en')url.searchParams.set('lang','en');
    $('#detail-link').href=url.pathname+url.search+url.hash;$('#detail-link').textContent=destination[lang==='pl'?1:2]+' ↗';
    $('#detail').hidden=false;$('#close-detail').focus({preventScroll:true});request();
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
  window.addEventListener('scroll',()=>{if(!open)return;targetDepth=Math.max(0,Math.min(2,window.scrollY/step));request();},{passive:true});
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
  reduced.addEventListener('change',()=>{paused=reduced.matches;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();});
  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;last=0;request();},{threshold:.01}).observe(stage);
  history.scrollRestoration='manual';window.scrollTo({top:0,behavior:'instant'});
  $('#pause').setAttribute('aria-pressed',String(paused));applyLanguage();$('#coordinate').textContent='00 / '+items.length;resize();
})();
