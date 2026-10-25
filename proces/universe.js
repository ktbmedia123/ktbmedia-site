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
    pl:{eyebrow:'MAŁY PUNKT. WIELKIE MOŻLIWOŚCI.',headline:'Wszystko zaczyna się<br>od <em>kropki.</em>',intro:'Jedna myśl uruchamia kolejną. A potem?<br>Cały wszechświat możliwości dla Twojej marki.',system:'PRZESTRZEŃ KREATYWNA',open:'Zacznij Proces',next:'Więcej pomysłów ↗',hint:'Dobry pomysł ma swój początek. Kliknij kropkę.',all:'Wszystko',strategy:'Strategia',creation:'Kreacja',pause:'Ⅱ Zatrzymaj ruch',resume:'▷ Wznów ruch',reset:'↙ Zwiń',instruction:'KLIKNIJ · ODKRYWAJ · ŁĄCZ KROPKI',cta:'Zróbmy z tego coś dobrego ↗',footer:'Pomysł to początek. <em>My nadajemy mu kierunek.</em>',prototype:'PROTOTYP INTERAKTYWNY / KTB MEDIA'},
    en:{eyebrow:'SMALL DOT. BIG POSSIBILITIES.',headline:'Everything starts<br>with <em>a dot.</em>',intro:'One thought sparks another. And then?<br>A whole universe of possibilities for your brand.',system:'CREATIVE SPACE',open:'Start the Process',next:'More ideas ↗',hint:'Every good idea starts somewhere. Click the dot.',all:'Everything',strategy:'Strategy',creation:'Creative',pause:'Ⅱ Pause motion',resume:'▷ Resume motion',reset:'↙ Collapse',instruction:'CLICK · EXPLORE · CONNECT THE DOTS',cta:'Let’s make something good ↗',footer:'An idea is a beginning. <em>We give it direction.</em>',prototype:'INTERACTIVE PROTOTYPE / KTB MEDIA'}
  };
  const $ = s=>document.querySelector(s);
  const stage=$('.universe'), world=$('.world'), canvas=$('canvas'), ctx=canvas.getContext('2d'), list=$('#ideas');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'pl', open=false, paused=reduced.matches, filter='all', selected=-1, progress=0, time=0, last=0, width=0,height=0, frame=0, inView=true;
  let pointer={x:0,y:0,active:false};
  let entryTimer;
  let pageIndex=0, visibleNodes=[], enteringAt=0;
  const PAGE_SIZE=24;
  const stars=Array.from({length:190},(_,i)=>({x:Math.sin(i*127.1)*.5+.5,y:Math.cos(i*311.7)*.5+.5,r:i%7===0?1.3:.65,phase:i*.43}));
  const nodes=items.map((item,i)=>{
    const b=document.createElement('button'); b.className='idea'; b.dataset.category=item[0]; b.textContent=item[1]; b.setAttribute('aria-pressed','false');
    b.addEventListener('click',()=>showDetail(i)); list.appendChild(b); return {el:b,x:0,y:0};
  });
  function updateNodes(){
    const matching=nodes.filter((n,i)=>filter==='all'||items[i][0]===filter);
    pageIndex%=Math.max(1,Math.ceil(matching.length/PAGE_SIZE));
    visibleNodes=matching.slice(pageIndex*PAGE_SIZE,(pageIndex+1)*PAGE_SIZE);
    nodes.forEach(n=>{n.el.hidden=!visibleNodes.includes(n);n.el.disabled=n.el.hidden;});
    $('#next').hidden=matching.length<=PAGE_SIZE;
    $('#coordinate').textContent=`${String(pageIndex*PAGE_SIZE+1).padStart(2,'0')}–${String(Math.min((pageIndex+1)*PAGE_SIZE,matching.length)).padStart(2,'0')} / ${matching.length}`;
    progress=0;request();
  }
  function layout(i){
    const count=visibleNodes.length;
    if(width<800){const cols=width<520?2:3,rows=Math.ceil(count/cols);const row=Math.floor(i/cols);return{x:(i%cols+.5)/cols,y:.025+(rows===1?0:row/(rows-1))*.92};}
    // Keep the middle of the constellation clear for the golden origin dot.
    const slot=i>=12?i+1:i,rows=Math.max(1,Math.ceil((count>=13?count+1:count)/5));
    return{x:.08+(slot%5)*.21+(Math.floor(slot/5)%2?.015:0),y:.06+(rows===1?.4:Math.floor(slot/5)/(rows-1)*.86)};
  }
  function resize(){const r=stage.getBoundingClientRect();width=r.width;height=r.height;
    const minimum=width<800?Math.max(innerHeight,330+Math.ceil(Math.min(PAGE_SIZE,visibleNodes.length||PAGE_SIZE)/(width<520?2:3))*48):Math.max(innerHeight,750);
    stage.style.minHeight=open?minimum+'px':'100svh';const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);request();}
  function request(){if(!frame&&inView&&!document.hidden)frame=requestAnimationFrame(draw);}
  function draw(now){frame=0;const dt=Math.min((now-(last||now))/1000,.05);last=now;
    const moving=!paused&&!reduced.matches; if(moving)time+=dt;
    const target=open?1:0;progress=reduced.matches?target:progress+(target-progress)*Math.min(1,dt*3.5);if(Math.abs(target-progress)<.001)progress=target;
    const cx=width/2,cy=height*.485;
    ctx.clearRect(0,0,width,height);
    if(!open){
      if(stage.dataset.state==='entering'&&!reduced.matches){
        const t=Math.min(1,(now-enteringAt)/2100);
        for(let i=0;i<130;i++){
          const a=i*2.39996+t*.5,depth=((i*.618+t*2.1)%1),r=Math.pow(depth,3)*Math.max(width,height)*.9;
          const x=cx+Math.cos(a)*r,y=height/2+Math.sin(a)*r*.65;
          ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(cx+(x-cx)*(1+t*.28),height/2+(y-height/2)*(1+t*.28));ctx.strokeStyle=`rgba(232,168,56,${Math.sin(t*Math.PI)*(.2+depth*.6)})`;ctx.lineWidth=depth*1.5+.3;ctx.stroke();
        }
        for(let j=0;j<5;j++){const r=((t*2+j/5)%1)*Math.max(width,height)*.7;ctx.beginPath();ctx.ellipse(cx,height/2,r,r*.65,-t*.35,0,Math.PI*2);ctx.strokeStyle=`rgba(232,168,56,${(1-r/Math.max(width,height))*.16*Math.sin(t*Math.PI)})`;ctx.stroke();}
        request();
      }
      return;
    }
    const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,width*.58);glow.addColorStop(0,`rgba(151,133,76,${.05+progress*.045})`);glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    for(const s of stars){const x=s.x*width,y=s.y*height;ctx.beginPath();ctx.arc(x,y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(221,222,188,${(.18+.13*Math.sin(time*.5+s.phase))*(.5+progress*.5)})`;ctx.fill();}
    if(open&&progress>0&&progress<1){
      ctx.beginPath();ctx.arc(cx,cy,Math.max(1,progress*width*.65),0,Math.PI*2);ctx.strokeStyle=`rgba(232,168,56,${Math.sin(progress*Math.PI)*.3})`;ctx.lineWidth=1;ctx.stroke();
      for(let i=0;i<40;i++){const a=i*2.39996,r=progress*(100+(i%9)*38);ctx.beginPath();ctx.arc(cx+Math.cos(a)*r*1.4,cy+Math.sin(a)*r*.7,1,0,Math.PI*2);ctx.fillStyle=`rgba(232,168,56,${(1-progress)*.7})`;ctx.fill();}
    }
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-.23);
    for(let i=0;i<4;i++){ctx.beginPath();const r=(95+i*93)*(open?.3+progress*.7:1);ctx.ellipse(0,0,r*1.45,r*.61,0,0,Math.PI*2);ctx.strokeStyle=`rgba(193,185,144,${.1-i*.015})`;ctx.lineWidth=1;ctx.stroke();
      const a=time*(.1+i*.018)+i*1.8;ctx.beginPath();ctx.arc(Math.cos(a)*r*1.45,Math.sin(a)*r*.61,2,0,Math.PI*2);ctx.fillStyle=i===1?'#e8a838':'#737c62';ctx.fill();}
    ctx.restore();
    if(open){const wr=world.getBoundingClientRect(),sr=stage.getBoundingClientRect();
      nodes.forEach((n,i)=>{if(n.el.hidden)return;const order=visibleNodes.indexOf(n);const p=layout(order);const reveal=reduced.matches?1:Math.max(0,Math.min(1,(progress-order*.009)/.72));const ease=1-Math.pow(1-reveal,3);
        let x=(p.x-.5)*wr.width*ease,y=(p.y-.5)*wr.height*ease;
        if(moving){x+=Math.sin(time*.36+i*1.6)*4*ease;y+=Math.cos(time*.3+i*.9)*5*ease;}
        if(pointer.active&&moving){const dx=x+wr.width/2-pointer.x,dy=y+wr.height/2-pointer.y,d=Math.hypot(dx,dy);if(d<125){const f=(1-d/125)*14;x+=dx/Math.max(1,d)*f;y+=dy/Math.max(1,d)*f;}}
        n.x=x+wr.width/2+wr.left-sr.left;n.y=y+wr.height/2+wr.top-sr.top;
        n.el.style.transform=`translate(-50%,-50%) translate(${x.toFixed(2)}px,${y.toFixed(2)}px)`;n.el.style.opacity=reveal.toFixed(3);
        if(filter!=='all'&&items[i][0]!==filter)return;
        if(i%3===0||selected===i){ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(n.x,n.y);ctx.strokeStyle=selected===i?'rgba(232,168,56,.5)':`rgba(166,169,137,${.045*reveal})`;ctx.stroke();}
      });
    }
    if(inView&&(!paused&&!reduced.matches||progress!==target))request();
  }
  function setOpen(value){
    clearTimeout(entryTimer);
    filter='all';pageIndex=0;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='all')));
    nodes.forEach(n=>{n.el.classList.remove('dimmed');n.el.disabled=false;});
    closeDetail(false);
    $('#seed').setAttribute('aria-expanded',String(value));
    if(value){
      if(stage.dataset.state!=='closed')return;
      stage.dataset.state='entering';document.body.classList.add('inside');enteringAt=performance.now();request();
      $('#seed').disabled=true;
      entryTimer=setTimeout(()=>{
        open=true;stage.dataset.state='open';list.hidden=false;$('.controls').hidden=false;
        updateNodes();progress=0;last=0;resize();
      },reduced.matches?0:2100);
    }else{
      open=false;stage.dataset.state='closed';document.body.classList.remove('inside');
      list.hidden=true;$('.controls').hidden=true;$('#coordinate').textContent='00 / '+items.length;
      $('#seed').disabled=false;progress=0;$('#seed').focus({preventScroll:true});resize();
    }
  }
  function closeDetail(focus=true){$('#detail').hidden=true;if(selected>=0){nodes[selected].el.setAttribute('aria-pressed','false');if(focus)nodes[selected].el.focus();}selected=-1;$('.origin').classList.remove('is-selected');request();}
  function showDetail(i){if(selected>=0)nodes[selected].el.setAttribute('aria-pressed','false');selected=i;$('.origin').classList.add('is-selected');nodes[i].el.setAttribute('aria-pressed','true');const item=items[i];$('#detail-category').textContent=`${String(i+1).padStart(2,'0')} / ${copy[lang][item[0]]||'Digital'}`;$('#detail-title').textContent=item[lang==='pl'?1:2];$('#detail-description').textContent=item[lang==='pl'?3:4];const destination=destinations[item[5]];const link=$('#detail-link');
    const url=new URL(destination[0],location.origin);if(lang==='en')url.searchParams.set('lang','en');
    link.href=url.pathname+url.search+url.hash;link.textContent=destination[lang==='pl'?1:2]+' ↗';
    $('#detail').hidden=false;$('#close-detail').focus({preventScroll:true});request();}
  function applyLanguage(){document.documentElement.lang=lang;document.title=lang==='pl'?'Proces — od pomysłu do efektu · KTB Media':'Process — from idea to impact · KTB Media';document.querySelectorAll('[data-copy]').forEach(e=>{e.innerHTML=copy[lang][e.dataset.copy];});$('#pause').textContent=copy[lang][paused?'resume':'pause'];$('#language').textContent=lang==='pl'?'EN ↗':'PL ↗';$('#language').setAttribute('aria-label',lang==='pl'?'Switch to English':'Przełącz na polski');$('#close-detail').setAttribute('aria-label',lang==='pl'?'Zamknij szczegóły':'Close details');stage.setAttribute('aria-label',lang==='pl'?'Interaktywny wszechświat pomysłów':'Interactive universe of ideas');list.setAttribute('aria-label',lang==='pl'?'Pomysły':'Ideas');$('.filters').setAttribute('aria-label',lang==='pl'?'Filtr pomysłów':'Filter ideas');nodes.forEach((n,i)=>n.el.textContent=items[i][lang==='pl'?1:2]);document.querySelectorAll('header nav a').forEach((a,i)=>{a.textContent=(lang==='pl'?['Usługi','Realizacje','Proces','O nas','Blog','Kontakt']:['Services','Work','Process','About','Journal','Contact'])[i];});
    $('h1').textContent=lang==='pl'?'Proces KTB Media — od pomysłu do efektu':'KTB Media process — from idea to impact';
    document.querySelectorAll('header a[href]').forEach(a=>{const u=new URL(a.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');a.href=u.pathname+u.search+u.hash;});
    const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');history.replaceState(null,'',u.pathname+u.search+u.hash);
    if(selected>=0)showDetail(selected);}
  $('#next').addEventListener('click',()=>{pageIndex++;closeDetail(false);updateNodes();resize();});
  $('#seed').addEventListener('click',()=>setOpen(true));$('#reset').addEventListener('click',()=>setOpen(false));$('#close-detail').addEventListener('click',()=>closeDetail());
  $('#pause').addEventListener('click',()=>{paused=!paused;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();});
  $('#language').addEventListener('click',()=>{lang=lang==='pl'?'en':'pl';applyLanguage();});
  $('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;pageIndex=0;document.querySelectorAll('[data-filter]').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));closeDetail(false);updateNodes();resize();});
  world.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=world.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top,active:true};});world.addEventListener('pointerleave',()=>pointer.active=false);
  const cursor=$('.ktb-cursor');
  const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
  document.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch'||!finePointer.matches)return;
    document.body.classList.add('cursor-ready');
    cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    cursor.classList.toggle('hover',!!e.target.closest('button:not(:disabled),a'));
    cursor.classList.toggle('on-paper',!!e.target.closest('#detail'));
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>document.body.classList.remove('cursor-ready'));
  window.addEventListener('blur',()=>document.body.classList.remove('cursor-ready'));
  finePointer.addEventListener('change',()=>document.body.classList.remove('cursor-ready'));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#detail').hidden)closeDetail();});
  document.addEventListener('visibilitychange',()=>{last=0;request();});
  reduced.addEventListener('change',()=>{paused=reduced.matches;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();});
  new ResizeObserver(resize).observe(stage);new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;last=0;request();},{threshold:.01}).observe(stage);
  $('#pause').setAttribute('aria-pressed',String(paused));$('#coordinate').textContent='00 / '+items.length;applyLanguage();resize();
})();
