(() => {
  'use strict';
  const stage=document.querySelector('.universe');
  if(!stage)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const touch=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  const canMotion=touch&&typeof window.DeviceMotionEvent==='function'&&window.isSecureContext;
  const needsPermission=canMotion&&typeof DeviceMotionEvent.requestPermission==='function';
  const copy={
    pl:{title:'Potrząśnij wszechświatem. Porozmawiajmy.',hint:'2,5 sekundy do kontaktu',motion:'Potrząsaj telefonem lub przytrzymaj przycisk.',permission:'Włącz ruch i potrząśnij telefonem.',fallback:'Przytrzymaj przycisk. Uruchom połączenie.',hold:'Przytrzymaj wszechświat',enable:'Włącz potrząsanie',denied:'Przytrzymaj przycisk — też zadziała.',close:'Zamknij wskazówkę',contact:'◌ Kontakt',progress:'Energia połączenia',signal:'SYGNAŁ ODEBRANY',arrival:'Porozmawiajmy.',line:'Dobry pomysł zaczyna się od rozmowy.'},
    en:{title:'Shake the universe for contact',hint:'2.5 seconds to make contact',motion:'Shake your phone or hold the button.',permission:'Enable motion, then shake your phone.',fallback:'Hold the button. Make the connection.',hold:'Hold the universe',enable:'Enable shake',denied:'Hold the button — that works too.',close:'Dismiss hint',contact:'◌ Contact',progress:'Connection energy',signal:'SIGNAL RECEIVED',arrival:'Let’s talk.',line:'A good idea starts with a conversation.',index:'Ideas that connect the dots'}
  };
  const hud=document.createElement('aside');
  hud.className='shake-contact';hud.hidden=true;hud.setAttribute('aria-labelledby','shake-title');
  hud.innerHTML='<button class="shake-dismiss" type="button">×</button><span class="shake-eyebrow"></span><h2 id="shake-title"></h2><p class="shake-instruction"></p><div class="shake-meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div><div class="shake-actions"><button class="shake-enable" type="button" hidden></button><button class="shake-hold" type="button"></button></div>';
  stage.appendChild(hud);
  const rift=document.createElement('div');rift.className='contact-rift';rift.hidden=true;rift.setAttribute('aria-hidden','true');
  rift.innerHTML='<canvas></canvas><div class="rift-arrival"><img src="/assets/logo.png" alt=""><span class="rift-signal"></span><h2></h2><p></p><span class="rift-address">media@ktbmedia.eu ↗</span></div>';
  document.body.appendChild(rift);
  const riftCanvas=rift.querySelector('canvas'),ctx=riftCanvas.getContext('2d');
  const hold=hud.querySelector('.shake-hold'),enable=hud.querySelector('.shake-enable'),meter=hud.querySelector('.shake-meter');
  const launcher=document.createElement('button');launcher.type='button';launcher.className='shake-launcher';
  document.querySelector('.motion-controls').prepend(launcher);
  let ready=false,enabled=false,permissionGranted=false,denied=false,holding=false,charge=0,energyUntil=0,lastMotion=0,lastVector=null;
  let inGalaxy=true,dismissed=false;
  let timer=0,raf=0,lastFrame=0,departing=false,departureAt=0,navigating=false;
  let canvasWidth=0,canvasHeight=0;
  const lang=()=>document.documentElement.lang==='en'?'en':'pl';
  const text=()=>copy[lang()];
  const active=()=>stage.dataset.state==='open';
  function language(){
    const c=text();hud.querySelector('h2').textContent=c.title;hud.querySelector('.shake-eyebrow').textContent=c.hint;
    hud.querySelector('.shake-instruction').textContent=c[denied?'denied':needsPermission&&!permissionGranted?'permission':canMotion?'motion':'fallback'];
    hud.querySelector('.shake-dismiss').setAttribute('aria-label',c.close);meter.setAttribute('aria-label',c.progress);
    hold.textContent=c.hold;enable.textContent=c.enable;launcher.textContent=c.contact;
    rift.querySelector('.rift-signal').textContent=c.signal;rift.querySelector('h2').textContent=c.arrival;rift.querySelector('p').textContent=c.line;
    document.querySelectorAll('.process-ideas-index [data-process-lang]').forEach(el=>{el.hidden=el.dataset.processLang!==lang();});
  }
  function size(){
    canvasWidth=innerWidth;canvasHeight=innerHeight;
    const dpr=Math.min(devicePixelRatio||1,1.5);
    riftCanvas.width=Math.round(canvasWidth*dpr);riftCanvas.height=Math.round(canvasHeight*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function request(){if(!raf&&!document.hidden)raf=requestAnimationFrame(frame);}
  function setEnergy(value,now){
    const strength=reduced.matches?0:value;
    const x=Math.sin(now*.071)*strength*9,y=Math.cos(now*.093)*strength*6;
    stage.style.setProperty('--shake-x',x.toFixed(2)+'px');stage.style.setProperty('--shake-y',y.toFixed(2)+'px');
    stage.style.setProperty('--shake-turn',(Math.sin(now*.039)*strength*.35).toFixed(3)+'deg');
  }
  function paint(now,amount,exit){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    if(reduced.matches)return;
    const w=canvasWidth,h=canvasHeight,phase=Math.floor(now/95);
    for(let i=0;i<13;i++){
      const n=(Math.sin(i*87.13+phase*7.1)+1)/2,y=((i*.173+phase*.019)%1)*h;
      const band=(2+n*20)*(exit?.6+exit:amount);
      const source=stage.querySelector('canvas'),sy=Math.min(source.height-1,Math.floor(y/h*source.height));
      const sh=Math.max(1,Math.min(source.height-sy,Math.ceil(band/h*source.height)));
      ctx.globalAlpha=amount*.8;
      ctx.drawImage(source,0,sy,source.width,sh,(n-.5)*amount*85,y,w,Math.max(1,band));
      ctx.globalAlpha=1;
      ctx.fillStyle=i%3===0?`rgba(232,168,56,${amount*.34})`:i%3===1?`rgba(98,221,220,${amount*.22})`:`rgba(243,238,228,${amount*.15})`;
      ctx.fillRect((n-.5)*w*.35,y,w*(.2+n*.8),band);
      ctx.fillStyle=`rgba(7,12,12,${amount*.55})`;ctx.fillRect(0,y+band,w,2+n*5);
    }
    ctx.strokeStyle=`rgba(232,168,56,${amount*.08})`;ctx.lineWidth=1;
    ctx.beginPath();for(let y=phase%5;y<h;y+=5){ctx.moveTo(0,y);ctx.lineTo(w,y);}ctx.stroke();
    if(exit){
      const radius=Math.hypot(w,h)*exit;
      ctx.strokeStyle=`rgba(232,168,56,${(1-exit)*.7})`;ctx.lineWidth=1+exit*3;
      ctx.beginPath();ctx.ellipse(w/2,h/2,Math.max(1,radius),Math.max(1,radius*.6),-.2,0,Math.PI*2);ctx.stroke();
    }
  }
  function depart(now){
    if(departing)return;
    departing=true;holding=false;departureAt=now;
    window.removeEventListener('devicemotion',motion);enabled=false;
    hud.hidden=true;rift.classList.add('is-departing');stage.classList.add('contact-departing');
    rift.querySelector('.rift-arrival').style.visibility='visible';
    if(!reduced.matches)rift.querySelector('.rift-arrival').animate([
      {opacity:0,clipPath:'inset(45% 0 45% 0)',transform:'translateY(25px)'},
      {opacity:1,clipPath:'inset(0)',transform:'translateY(0)'}
    ],{duration:1100,delay:150,fill:'both',easing:'cubic-bezier(.16,1,.3,1)'});
  }
  function frame(now){
    raf=0;
    if(!active()||document.hidden){resetCharge();return;}
    const dt=Math.min(250,Math.max(0,now-(lastFrame||now)));lastFrame=now;
    if(!departing){
      const energizing=holding||now<energyUntil;
      charge=Math.max(0,Math.min(2500,charge+(energizing?dt:-dt*.55)));
      meter.setAttribute('aria-valuenow',String(Math.round(charge/25)));meter.firstElementChild.style.transform=`scaleX(${charge/2500})`;
      hud.classList.toggle('is-charging',energizing);
      if(charge>=2500)depart(now);
    }
    const exit=departing?Math.min(1,(now-departureAt)/(reduced.matches?240:1450)):0;
    const intensity=departing?Math.sin(exit*Math.PI)*.85:charge/2500;
    rift.hidden=charge===0&&!departing;
    rift.style.setProperty('--rift-progress',String(exit));
    paint(now,intensity,exit);setEnergy(intensity,now);
    if(departing&&exit===1&&!navigating){
      navigating=true;const url=new URL('/kontakt/',location.origin);if(lang()==='en')url.searchParams.set('lang','en');location.assign(url.href);return;
    }
    if(holding||charge>0||departing||now<energyUntil)request();else lastFrame=0;
  }
  function motion(event){
    if(!ready||!enabled||!active()||!inGalaxy||departing||document.hidden)return;
    const a=event.acceleration,g=event.accelerationIncludingGravity;
    const vector=a&&[a.x,a.y,a.z].every(Number.isFinite)?[a.x,a.y,a.z]:g&&[g.x,g.y,g.z].every(Number.isFinite)?[g.x,g.y,g.z]:null;
    if(!vector)return;
    const now=performance.now(),elapsed=now-lastMotion;
    const jerk=lastVector?Math.hypot(...vector.map((v,i)=>v-lastVector[i])):0;
    lastVector=vector;lastMotion=now;
    // Ignore orientation changes and isolated bumps; repeated direction changes sustain the charge.
    if(elapsed<250&&elapsed>5&&jerk>7){energyUntil=now+140;request();}
  }
  function listen(){if(enabled)return;enabled=true;lastMotion=0;lastVector=null;window.addEventListener('devicemotion',motion,{passive:true});}
  async function allowMotion(){
    try{
      const result=await DeviceMotionEvent.requestPermission();
      if(result==='granted'){permissionGranted=true;enable.hidden=true;if(ready&&active())listen();}
      else{denied=true;enable.hidden=true;}
    }catch{denied=true;enable.hidden=true;}
    language();
  }
  function resetCharge(){
    holding=false;charge=0;energyUntil=0;lastFrame=0;lastVector=null;lastMotion=0;
    cancelAnimationFrame(raf);raf=0;setEnergy(0,0);rift.hidden=true;meter.setAttribute('aria-valuenow','0');meter.firstElementChild.style.transform='scaleX(0)';hud.classList.remove('is-charging');
  }
  function stop(){
    clearTimeout(timer);timer=0;ready=false;enabled=false;departing=false;navigating=false;
    window.removeEventListener('devicemotion',motion);hud.hidden=true;rift.classList.remove('is-departing');stage.classList.remove('contact-departing');
    rift.querySelector('.rift-arrival').style.visibility='hidden';resetCharge();
  }
  function show(){
    if(!active()||!inGalaxy||document.hidden)return;
    dismissed=false;
    clearTimeout(timer);timer=0;
    ready=true;language();hud.hidden=false;
    enable.hidden=!needsPermission||permissionGranted||denied;
    if(canMotion&&(!needsPermission||permissionGranted))listen();
  }
  function state(){
    stop();dismissed=false;if(active())timer=setTimeout(show,3000);
  }
  launcher.addEventListener('click',show);
  function dismiss(){
    clearTimeout(timer);timer=0;
    dismissed=true;
    resetCharge();ready=false;enabled=false;window.removeEventListener('devicemotion',motion);hud.hidden=true;launcher.focus({preventScroll:true});
  }
  hud.querySelector('.shake-dismiss').addEventListener('click',dismiss);
  enable.addEventListener('click',allowMotion);
  hold.addEventListener('pointerdown',event=>{
    if(event.button!==0||departing)return;
    event.preventDefault();hold.setPointerCapture(event.pointerId);holding=true;request();
  });
  function release(){holding=false;request();}
  hold.addEventListener('pointerup',release);hold.addEventListener('pointercancel',release);hold.addEventListener('lostpointercapture',release);
  hold.addEventListener('keydown',event=>{if([' ','Enter'].includes(event.key)){event.preventDefault();if(!event.repeat){holding=true;request();}}});
  hold.addEventListener('keyup',event=>{if([' ','Enter'].includes(event.key)){event.preventDefault();release();}});
  hold.addEventListener('blur',release);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!departing&&!hud.hidden)dismiss();});
  window.addEventListener('blur',()=>{if(!departing)resetCharge();});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){resetCharge();return;}
    if(departing){departureAt=performance.now();request();}else if(active()&&!ready){clearTimeout(timer);timer=setTimeout(show,3000);}
  });
  window.addEventListener('resize',size,{passive:true});
  new MutationObserver(state).observe(stage,{attributes:true,attributeFilter:['data-state']});
  new MutationObserver(language).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  new IntersectionObserver(entries=>{
    inGalaxy=entries[0].intersectionRatio>.4;
    if(departing)return;
    if(!inGalaxy)stop();else if(active()&&!dismissed){clearTimeout(timer);timer=setTimeout(show,3000);}
  },{threshold:[0,.4,.5,1]}).observe(stage);
  const ideasIndex=document.querySelector('#process-ideas-index');
  if(ideasIndex)new IntersectionObserver(entries=>{
    document.body.classList.toggle('reading-ideas',entries[0].isIntersecting);
  },{rootMargin:'-80px 0px -65% 0px'}).observe(ideasIndex);
  window.addEventListener('pageshow',event=>{if(event.persisted){stop();if(active())timer=setTimeout(show,3000);}});
  function revealIndex(){
    if(!location.hash.startsWith('#process-idea'))return;
    const index=document.querySelector('#process-ideas-index'),target=document.getElementById(location.hash.slice(1));
    if(index&&target){index.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));}
  }
  window.addEventListener('hashchange',revealIndex);
  language();size();state();revealIndex();
})();
