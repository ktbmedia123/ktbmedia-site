/* One renderer for the crawlable build and the interactive PL/EN page. All copy lives in the CMS. */
(function (global) {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safePath = value => /^\/(?!\/)[^\s<>]*$/.test(value || '') ? value : '/kontakt/';
  function render(config, lang, cases) {
    const m = config.marine, pl = lang !== 'en';
    const url = 'https://ktbmedia.eu/marketing-dla-branzy-morskiej/';
    const href = value => {
      const path = safePath(value);
      return esc(path + (!pl ? (path.includes('?') ? '&' : '?') + 'lang=en' : ''));
    };
    const arrow = '<span aria-hidden="true">↗</span>';
    const label = text => `<div class="sec-label"><span class="dot"></span>${esc(text)}</div>`;
    const head = (eyebrow, title) => `<header class="marine-section-head">${label(eyebrow)}<h2 class="display">${esc(title)}</h2></header>`;
    const contact = `<a class="btn" href="${href('/kontakt/')}">${esc(m.cta)} ${arrow}</a>`;
    const picture = cases.find(item => item.coverImage || item.images?.[0]);
    const photo = item => (m.caseImages || []).find(image => image.slug === item.slug);
    const img = item => esc(safePath(photo(item)?.image || item.coverImage || item.images[0]));
    const alt = item => esc(photo(item)?.alt || item.imageAlts?.[0] || name(item));
    const external = value => { try { const url=new URL(value); return url.protocol==='https:'?esc(url.href):'#'; } catch { return '#'; } };
    const credit = item => {
      const image=photo(item);if(!image)return '';
      return `<p class="marine-photo-credit"><a href="${external(image.projectUrl)}">${esc(image.caption)}</a><br>${pl?'Fot.':'Photo:'} <a href="${external(image.sourceUrl)}">${esc(image.author)}</a> · <a href="${external(image.licenseUrl)}" rel="license">${esc(image.licenseLabel)}</a> · ${esc(image.changeNote)}</p>`;
    };
    const name = item => [item.title1, item.titleIt].filter(Boolean).join(' ');
    const sections = [
      ['marine-audience', pl ? 'Dla kogo' : 'Who we help'],
      ['marine-services', pl ? 'Zakres' : 'Services'],
      ...(cases.length ? [['marine-work', pl ? 'Realizacje' : 'Our work']] : []),
      ['marine-process', pl ? 'Współpraca' : 'Our process'], ['marine-faq','FAQ']
    ];
    const graph = [
      {'@type':'WebPage','@id':url+'#webpage',url,name:config.title,description:config.description,inLanguage:pl?'pl-PL':'en',isPartOf:{'@id':'https://ktbmedia.eu/#website'},mainEntity:{'@id':url+'#service'},breadcrumb:{'@id':url+'#breadcrumb'}},
      {'@type':'Service','@id':url+'#service',url,name:config.hero.h1,description:config.hero.lead,serviceType:config.keyword,provider:{'@id':'https://ktbmedia.eu/#organization/'},areaServed:{'@type':'Country',name:pl?'Polska':'Poland'},audience:{'@type':'BusinessAudience',audienceType:pl?'Firmy branży morskiej i marine B2B':'Maritime and marine B2B companies'},hasOfferCatalog:{'@type':'OfferCatalog',name:m.servicesTitle,itemListElement:config.services.map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name}}))}},
      {'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'KTB Media',item:'https://ktbmedia.eu/'},{'@type':'ListItem',position:2,name:config.hero.h1,item:url}]},
      {'@type':'FAQPage','@id':url+'#faq',inLanguage:pl?'pl-PL':'en',mainEntity:config.faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))},
      ...(cases.length ? [{'@type':'ItemList',name:m.proofTitle,itemListElement:cases.map((item,i)=>({'@type':'ListItem',position:i+1,name:name(item),url:'https://ktbmedia.eu/realizacje/'+item.slug+'/'}))}] : [])
    ];
    return `<main class="marine-page">
      <header class="marine-hero container">
        <nav class="marine-breadcrumb mono" aria-label="${pl?'Ścieżka strony':'Breadcrumb'}"><a href="${href('/')}">KTB Media</a><span aria-hidden="true">/</span><span>Marine</span></nav>
        <div class="marine-hero-grid">
          <div class="marine-hero-copy">${label(m.eyebrow)}<h1 class="display">${esc(config.hero.h1)}<span class="marine-gold">.</span></h1><p class="marine-promise">${esc(m.promise)}</p><p class="marine-lead">${esc(config.hero.lead)}</p><div class="marine-cta-row">${contact}${cases.length ? `<a class="marine-text-link" href="#marine-work">${esc(m.secondaryCta)} <span aria-hidden="true">↓</span></a>`:''}</div></div>
          ${picture ? `<figure class="marine-hero-figure"><img src="${img(picture)}" width="1920" height="1280" alt="${alt(picture)}" fetchpriority="high"/><figcaption><span class="mono">${pl?'Z naszych realizacji':'From our work'}</span><a href="${href('/realizacje/'+picture.slug+'/')}">${esc(name(picture))} ${arrow}</a>${credit(picture)}</figcaption><span class="marine-compass" aria-hidden="true">+</span></figure>`:''}
        </div>
        <nav class="marine-section-nav" aria-label="${pl?'Sekcje strony':'Page sections'}">${sections.map(([id,title],i)=>`<a href="#${id}"><span class="mono">0${i+1}</span>${esc(title)} <span aria-hidden="true">↓</span></a>`).join('')}</nav>
      </header>
      <section class="marine-intro container">${head(pl?'Punkt wyjścia':'Starting point',m.introTitle)}<div class="marine-prose">${config.context.map(p=>`<p>${esc(p)}</p>`).join('')}</div></section>
      <section id="marine-audience" class="marine-section container">${head(pl?'Dla kogo pracujemy':'Who we help',m.segmentsTitle)}<div class="marine-segments">${m.segments.map((item,i)=>`<article><span class="mono marine-number">0${i+1}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div></section>
      <section id="marine-services" class="marine-dark marine-section"><div class="container">${head(pl?'Zakres współpracy':'What we do',m.servicesTitle)}<div class="marine-services">${config.services.map((title,i)=>`<article><span class="mono marine-number">0${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(m.serviceNotes[i])}</p></div>${arrow}</article>`).join('')}</div></div></section>
      ${cases.length ? `<section id="marine-work" class="marine-section container">${head('Case studies',m.proofTitle)}<div class="marine-cases">${cases.map(item=>`<article><a class="marine-case-image" href="${href('/realizacje/'+item.slug+'/')}"><img src="${img(item)}" width="960" height="640" loading="lazy" alt="${alt(item)}"/></a>${credit(item)}<div class="marine-case-body"><div class="mono">${esc(item.tag)}</div><h3><a href="${href('/realizacje/'+item.slug+'/')}">${esc(name(item))} ${arrow}</a></h3><p>${esc(item.solution)}</p><a class="marine-text-link" href="${href('/realizacje/'+item.slug+'/')}">${pl?'Zobacz zakres realizacji':'Explore the project'} ${arrow}</a></div></article>`).join('')}</div></section>`:''}
      <section class="marine-reasons container">${label(pl?'Dlaczego KTB Media':'Why KTB Media')}<ul>${config.why.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></section>
      <section id="marine-process" class="marine-section container">${head(pl?'Proces współpracy':'How we work',m.processTitle)}<ol class="marine-steps">${m.steps.map((step,i)=>`<li><span class="marine-step mono">0${i+1}</span><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p></li>`).join('')}</ol></section>
      <section class="marine-measure marine-section"><div class="container">${head(pl?'Wspólny cel':'Shared goals',m.measurementTitle)}<div class="marine-measures">${m.measurements.map(item=>`<article><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div></div></section>
      <section id="marine-faq" class="marine-section container">${head('FAQ',pl?'Konkrety przed pierwszą rozmową.':'Answers before we talk.')}<div class="marine-faq">${config.faq.map(item=>`<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join('')}</div></section>
      <aside class="marine-related container">${label(pl?'Więcej kontekstu':'Explore further')}<nav aria-label="${pl?'Powiązane materiały':'Related resources'}">${config.related.map(item=>`<a href="${href(item.href)}">${esc(item.label)} ${arrow}</a>`).join('')}</nav></aside>
      <section class="marine-final"><div class="container"><div>${label('KTB Media / Marine')}<h2 class="display">${esc(m.finalTitle)}</h2><p>${esc(m.finalText)}</p></div>${contact}</div></section>
      <script type="application/ld+json" data-marine-schema>${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>
    </main>`;
  }
  global.KTBMarine = { render };
})(globalThis);
