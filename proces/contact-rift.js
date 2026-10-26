(() => {
  'use strict';
  const stage=document.querySelector('.universe');
  if(!stage)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const copy={
    pl:{button:'Przytrzymaj, by nawiązać kontakt',hint:'Przytrzymaj przez 2,5 sekundy, by nawiązać kontakt'},
    en:{button:'Hold to make contact',hint:'Hold for 2.5 seconds to make contact'}
  };
  const invitation=document.createElement('button');
  invitation.type='button';invitation.className='contact-invitation';invitation.hidden=true;
  const buttonContent='<span class="contact-invitation-copy"><span class="contact-invitation-label"></span><small class="contact-invitation-duration"></small></span><span class="contact-invitation-arrow" aria-hidden="true">↗</span>';
  invitation.innerHTML=`<span class="contact-invitation-base">${buttonContent}</span><span class="contact-invitation-fill" aria-hidden="true">${buttonContent}</span>`;
  stage.appendChild(invitation);
  const rift=document.createElement('div');rift.className='contact-rift';rift.hidden=true;rift.setAttribute('aria-hidden','true');
  rift.innerHTML='<canvas></canvas>';
  document.body.appendChild(rift);
  const riftCanvas=rift.querySelector('canvas'),ctx=riftCanvas.getContext('2d');
  let timer=0,raf=0,departing=false,inGalaxy=true,dismissed=false;
  let holding=false,holdStarted=0,charge=0,fx=0,lastFrame=0;
  let canvasWidth=0,canvasHeight=0;
  const lang=()=>document.documentElement.lang==='en'?'en':'pl';
  const active=()=>stage.dataset.state==='open';
  function language(){
    const c=copy[lang()];invitation.querySelectorAll('.contact-invitation-label').forEach(el=>el.textContent=c.button);
    invitation.setAttribute('aria-label',c.hint);setCharge(charge);
    document.querySelectorAll('.process-ideas-index [data-process-lang]').forEach(el=>{el.hidden=el.dataset.processLang!==lang();});
  }
  function size(){
    canvasWidth=innerWidth;canvasHeight=innerHeight;
    const dpr=Math.min(devicePixelRatio||1,1.5);
    riftCanvas.width=Math.round(canvasWidth*dpr);riftCanvas.height=Math.round(canvasHeight*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function request(){if(!raf&&!document.hidden)raf=requestAnimationFrame(frame);}
  function setCharge(value){
    charge=value;invitation.style.setProperty('--contact-charge',String(value));
    invitation.dataset.progress=String(Math.round(value*100));
    const seconds=((1-value)*2.5).toFixed(1);
    invitation.querySelectorAll('.contact-invitation-duration').forEach(el=>el.textContent=(lang()==='pl'?seconds.replace('.',','):seconds)+' s');
  }
  function begin(){
    if(holding||departing||invitation.hidden||!active()||!inGalaxy||document.hidden)return;
    prefetchContact();holding=true;holdStarted=performance.now();invitation.classList.add('is-holding');setCharge(0);lastFrame=0;request();
  }
  function release(completed=false){
    if(departing)return;
    const now=performance.now();
    if(completed===true&&holding&&!document.hidden&&now-holdStarted>=2500){setCharge(1);depart(now);return;}
    holding=false;invitation.classList.remove('is-holding');setCharge(0);request();
  }
  function paint(now,amount,exit){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    if(reduced.matches)return;
    const w=canvasWidth,h=canvasHeight,phase=Math.floor(now/95);
    for(let i=0;i<13;i++){
      const n=(Math.sin(i*87.13+phase*7.1)+1)/2,y=((i*.173+phase*.019)%1)*h;
      const band=(2+n*20)*(.6+exit);
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
  function contactUrl(){const url=new URL('/kontakt/',location.origin);if(lang()==='en')url.searchParams.set('lang','en');return url.href;}
  function prefetchContact(){
    let link=document.querySelector('link[data-contact-prefetch]');
    if(!link){link=document.createElement('link');link.rel='prefetch';link.as='document';link.dataset.contactPrefetch='';document.head.appendChild(link);}
    link.href=contactUrl();
  }
  function depart(){
    if(departing||!active()||!inGalaxy)return;
    clearTimeout(timer);departing=true;holding=false;
    invitation.disabled=true;stage.classList.add('contact-departing');
    location.assign(contactUrl());
  }
  function frame(now){
    raf=0;if(document.hidden)return;
    const dt=Math.min(.1,Math.max(0,(now-(lastFrame||now))/1000));lastFrame=now;
    if(holding){setCharge(Math.min(1,(now-holdStarted)/2500));if(charge===1){depart();return;}}
    fx=fx+((holding?charge*.65:0)-fx)*(1-Math.exp(-dt*20));
    rift.hidden=fx<.003;paint(now,fx,0);
    if(holding||fx>=.003)request();else lastFrame=0;
  }
  function stop(){
    clearTimeout(timer);timer=0;cancelAnimationFrame(raf);raf=0;departing=false;invitation.disabled=false;
    holding=false;holdStarted=0;fx=0;lastFrame=0;setCharge(0);invitation.classList.remove('is-holding');rift.classList.remove('is-departing');
    invitation.hidden=true;rift.hidden=true;stage.classList.remove('contact-departing','contact-invited');
  }
  function schedule(){
    clearTimeout(timer);
    if(active()&&inGalaxy&&!dismissed&&!departing&&!document.hidden)timer=setTimeout(()=>{
      if(active()&&inGalaxy&&!document.hidden&&!dismissed){invitation.hidden=false;stage.classList.add('contact-invited');}
    },6000);
  }
  function state(){stop();dismissed=false;schedule();}
  invitation.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    event.preventDefault();invitation.focus({preventScroll:true});invitation.setPointerCapture(event.pointerId);begin();
  });
  invitation.addEventListener('pointerup',()=>release(true));
  ['pointercancel','lostpointercapture','blur'].forEach(event=>invitation.addEventListener(event,release));
  invitation.addEventListener('keydown',event=>{
    if([' ','Enter'].includes(event.key)){event.preventDefault();if(!event.repeat)begin();}
  });
  invitation.addEventListener('keyup',event=>{if([' ','Enter'].includes(event.key)){event.preventDefault();release(true);}});
  invitation.addEventListener('click',event=>event.preventDefault());
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!departing&&!invitation.hidden){release();dismissed=true;clearTimeout(timer);invitation.hidden=true;stage.classList.remove('contact-invited');}
  });
  window.addEventListener('blur',release);
  document.addEventListener('visibilitychange',()=>{
    clearTimeout(timer);
    if(document.hidden){if(!departing){release();fx=0;rift.hidden=true;}cancelAnimationFrame(raf);raf=0;return;}
    if(!departing&&invitation.hidden)schedule();
  });
  window.addEventListener('resize',size,{passive:true});
  new MutationObserver(state).observe(stage,{attributes:true,attributeFilter:['data-state']});
  new MutationObserver(language).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  new IntersectionObserver(entries=>{
    const visible=entries[0].intersectionRatio>.4;
    if(visible===inGalaxy)return;
    inGalaxy=visible;if(departing)return;
    if(!inGalaxy)stop();else schedule();
  },{threshold:[0,.4,.5,1]}).observe(stage);
  const ideasIndex=document.querySelector('#process-ideas-index');
  if(ideasIndex)new IntersectionObserver(entries=>{
    document.body.classList.toggle('reading-ideas',entries[0].isIntersecting);
  },{rootMargin:'-80px 0px -65% 0px'}).observe(ideasIndex);
  window.addEventListener('pageshow',event=>{if(event.persisted){stop();schedule();}});
  function revealIndex(){
    if(!location.hash.startsWith('#process-idea'))return;
    const index=document.querySelector('#process-ideas-index'),target=document.getElementById(location.hash.slice(1));
    if(index&&target){index.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}));}
  }
  window.addEventListener('hashchange',revealIndex);
  language();size();state();revealIndex();
})();
