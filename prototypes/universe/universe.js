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
  const copy = {
    pl:{eyebrow:'MAŁY PUNKT. WIELKIE MOŻLIWOŚCI.',headline:'Wszystko zaczyna się<br>od <em>kropki.</em>',intro:'Jedna myśl uruchamia kolejną. A potem?<br>Cały wszechświat możliwości dla Twojej marki.',system:'PRZESTRZEŃ KREATYWNA',open:'OTWÓRZ WSZECHŚWIAT',hint:'Dobry pomysł ma swój początek. Kliknij kropkę.',all:'Wszystko',strategy:'Strategia',creation:'Kreacja',pause:'Ⅱ Zatrzymaj ruch',resume:'▷ Wznów ruch',reset:'↙ Zwiń',instruction:'KLIKNIJ · ODKRYWAJ · ŁĄCZ KROPKI',cta:'Zróbmy z tego coś dobrego ↗',footer:'Pomysł to początek. <em>My nadajemy mu kierunek.</em>',prototype:'PROTOTYP INTERAKTYWNY / KTB MEDIA'},
    en:{eyebrow:'SMALL DOT. BIG POSSIBILITIES.',headline:'Everything starts<br>with <em>a dot.</em>',intro:'One thought sparks another. And then?<br>A whole universe of possibilities for your brand.',system:'CREATIVE SPACE',open:'OPEN THE UNIVERSE',hint:'Every good idea starts somewhere. Click the dot.',all:'Everything',strategy:'Strategy',creation:'Creative',pause:'Ⅱ Pause motion',resume:'▷ Resume motion',reset:'↙ Collapse',instruction:'CLICK · EXPLORE · CONNECT THE DOTS',cta:'Let’s make something good ↗',footer:'An idea is a beginning. <em>We give it direction.</em>',prototype:'INTERACTIVE PROTOTYPE / KTB MEDIA'}
  };
  const $ = s=>document.querySelector(s);
  const stage=$('.universe'), world=$('.world'), canvas=$('canvas'), ctx=canvas.getContext('2d'), list=$('#ideas');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let lang='pl', open=false, paused=reduced.matches, filter='all', selected=-1, progress=0, time=0, last=0, width=0,height=0, frame=0, inView=true;
  let pointer={x:0,y:0,active:false};
  let entryTimer;
  const stars=Array.from({length:190},(_,i)=>({x:Math.sin(i*127.1)*.5+.5,y:Math.cos(i*311.7)*.5+.5,r:i%7===0?1.3:.65,phase:i*.43}));
  const nodes=items.map((item,i)=>{
    const b=document.createElement('button'); b.className='idea'; b.dataset.category=item[0]; b.textContent=item[1]; b.setAttribute('aria-pressed','false');
    b.addEventListener('click',()=>showDetail(i)); list.appendChild(b); return {el:b,x:0,y:0};
  });
  function layout(i){
    if(width<800){const row=Math.floor(i/2); return {x:i===24?.5:(i%2?.75:.25),y:.025+row*.077};}
    const row=Math.floor(i/5), col=i%5;
    let x=.09+col*.205,y=.075+row*.215;
    x+=(row%2?.025:-.015); if(i===12)y=.61;
    return{x,y};
  }
  function resize(){const r=stage.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);request();}
  function request(){if(!frame&&inView&&!document.hidden)frame=requestAnimationFrame(draw);}
  function draw(now){frame=0;const dt=Math.min((now-(last||now))/1000,.05);last=now;
    const moving=!paused&&!reduced.matches; if(moving)time+=dt;
    const target=open?1:0;progress=reduced.matches?target:progress+(target-progress)*Math.min(1,dt*3.5);if(Math.abs(target-progress)<.001)progress=target;
    const cx=width/2,cy=height*.485;
    ctx.clearRect(0,0,width,height);
    if(!open)return;
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
      nodes.forEach((n,i)=>{const p=layout(i);const reveal=reduced.matches?1:Math.max(0,Math.min(1,(progress-i*.009)/.72));const ease=1-Math.pow(1-reveal,3);
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
    filter='all';
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='all')));
    nodes.forEach(n=>{n.el.classList.remove('dimmed');n.el.disabled=false;});
    closeDetail(false);
    $('#seed').setAttribute('aria-expanded',String(value));
    if(value){
      if(stage.dataset.state!=='closed')return;
      stage.dataset.state='entering';document.body.classList.add('inside');
      $('#seed').disabled=true;
      entryTimer=setTimeout(()=>{
        open=true;stage.dataset.state='open';list.hidden=false;$('.controls').hidden=false;
        $('#coordinate').textContent='25 / 25';progress=0;last=0;resize();
      },reduced.matches?0:1500);
    }else{
      open=false;stage.dataset.state='closed';document.body.classList.remove('inside');
      list.hidden=true;$('.controls').hidden=true;$('#coordinate').textContent='00 / 25';
      $('#seed').disabled=false;progress=0;$('#seed').focus({preventScroll:true});resize();
    }
  }
  function closeDetail(focus=true){$('#detail').hidden=true;if(selected>=0){nodes[selected].el.setAttribute('aria-pressed','false');if(focus)nodes[selected].el.focus();}selected=-1;$('.origin').classList.remove('is-selected');request();}
  function showDetail(i){if(selected>=0)nodes[selected].el.setAttribute('aria-pressed','false');selected=i;$('.origin').classList.add('is-selected');nodes[i].el.setAttribute('aria-pressed','true');const item=items[i];$('#detail-category').textContent=`${String(i+1).padStart(2,'0')} / ${copy[lang][item[0]]||'Digital'}`;$('#detail-title').textContent=item[lang==='pl'?1:2];$('#detail-description').textContent=item[lang==='pl'?3:4];$('#detail').hidden=false;$('#close-detail').focus();request();}
  function applyLanguage(){document.documentElement.lang=lang;document.title=lang==='pl'?'Wszechświat pomysłów — KTB Media':'Universe of ideas — KTB Media';document.querySelectorAll('[data-copy]').forEach(e=>{e.innerHTML=copy[lang][e.dataset.copy];});$('#pause').textContent=copy[lang][paused?'resume':'pause'];$('#language').textContent=lang==='pl'?'EN ↗':'PL ↗';$('#language').setAttribute('aria-label',lang==='pl'?'Switch to English':'Przełącz na polski');$('#close-detail').setAttribute('aria-label',lang==='pl'?'Zamknij szczegóły':'Close details');stage.setAttribute('aria-label',lang==='pl'?'Interaktywny wszechświat pomysłów':'Interactive universe of ideas');list.setAttribute('aria-label',lang==='pl'?'Pomysły':'Ideas');$('.filters').setAttribute('aria-label',lang==='pl'?'Filtr pomysłów':'Filter ideas');nodes.forEach((n,i)=>n.el.textContent=items[i][lang==='pl'?1:2]);if(selected>=0)showDetail(selected);}
  $('#seed').addEventListener('click',()=>setOpen(true));$('#reset').addEventListener('click',()=>setOpen(false));$('#close-detail').addEventListener('click',()=>closeDetail());
  $('#pause').addEventListener('click',()=>{paused=!paused;$('#pause').setAttribute('aria-pressed',String(paused));$('#pause').textContent=copy[lang][paused?'resume':'pause'];request();});
  $('#language').addEventListener('click',()=>{lang=lang==='pl'?'en':'pl';applyLanguage();});
  $('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));nodes.forEach((n,i)=>{const dim=filter!=='all'&&items[i][0]!==filter;n.el.classList.toggle('dimmed',dim);n.el.disabled=dim;});closeDetail(false);$('#coordinate').textContent=String(items.filter(i=>filter==='all'||i[0]===filter).length).padStart(2,'0')+' / 25';request();});
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
  $('#pause').setAttribute('aria-pressed',String(paused));applyLanguage();resize();
})();
