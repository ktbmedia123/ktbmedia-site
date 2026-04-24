function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* KTB Media — main React app */
const {
  useState,
  useEffect,
  useRef
} = React;
function ArrowIcon({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  }));
}
function ArrowBackIcon({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 19l-7-7 7-7"
  }));
}
function IconFacebook({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.5-1.5H17V4.2c-.3 0-1.2-.2-2.3-.2-2.3 0-3.7 1.4-3.7 3.9v2.6H8.5v3H11V21h2.5z"
  }));
}
function IconInstagram({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor"
  }));
}
function IconLinkedIn({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9h2.5v11H6zM7.25 4.5A1.5 1.5 0 1 1 7.25 7.5 1.5 1.5 0 0 1 7.25 4.5zM11 9h2.4v1.5h.04c.33-.6 1.15-1.25 2.36-1.25 2.53 0 3 1.66 3 3.83V20H16.2v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V20H10V9z"
  }));
}
function sectionEnabled(lang, key) {
  const sections = COPY[lang] && COPY[lang].sections;
  return !sections || sections[key] !== false;
}
function getLandingConfig(lang, path) {
  const slug = path.replace(/^\//, '');
  const fromCms = COPY[lang] && COPY[lang].landings && COPY[lang].landings[slug];
  return fromCms || window.LANDINGS && window.LANDINGS[slug] || null;
}
function useReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });
    const attach = () => {
      document.querySelectorAll('.reveal:not(.in), .split-line:not(.in)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('in');else io.observe(el);
      });
    };
    const t1 = setTimeout(attach, 50);
    const t2 = setTimeout(attach, 300);
    const t3 = setTimeout(attach, 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      io.disconnect();
    };
  }, deps);
}
function useCursor() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 860px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const ring = document.querySelector('.ktb-cursor');
    if (!ring) return;

    ring.style.willChange = 'transform';

    let lastDark = false;
    let lastDarkCheck = 0;
    const DARK_SEL = '.about, .showcase-section, .footer, .marquee, .case-results, .nav.scrolled, .mini-cta-pre-footer, .about-page-main, .blog-dark, .process-steps, .testi-grid, .pricing-grid, .price-card.featured, .case-page-dark';

    const onMove = e => {
      const x = e.clientX;
      const y = e.clientY;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

      const now = performance.now();
      if (now - lastDarkCheck > 100) {
        lastDarkCheck = now;
        const el = document.elementFromPoint(x, y);
        const isDark = !!(el && el.closest && el.closest(DARK_SEL));
        if (isDark !== lastDark) {
          lastDark = isDark;
          document.body.classList.toggle('on-dark', isDark);
        }
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const hoverables = 'a, button, .service-row, .port-item, .blog-card, .team-card, .founder-card, .step, .testi-card, .price-card, .feature, .sketch-card, .showcase-block, .contact-email-cta, .sketch-paper, .case-image-card, input, textarea, select, label.checkbox-tile, .mini-cta-pre-footer';
    const inputSel = '.contact-form input, .contact-form textarea, .contact-form select';
    const onOver = e => {
      if (e.target.closest && e.target.closest(hoverables)) ring.classList.add('hover');
      // Gdy wchodzi na pole formularza - dodaj klasę do body (gwarantowana widoczność kursora)
      if (e.target.closest && e.target.closest(inputSel)) {
        document.body.classList.add('cursor-over-input');
      }
    };
    const onOut = e => {
      if (e.target.closest && e.target.closest(hoverables)) {
        const rel = e.relatedTarget;
        if (!rel || !rel.closest || !rel.closest(hoverables)) ring.classList.remove('hover');
      }
      if (e.target.closest && e.target.closest(inputSel)) {
        const rel = e.relatedTarget;
        if (!rel || !rel.closest || !rel.closest(inputSel)) {
          document.body.classList.remove('cursor-over-input');
        }
      }
    };
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('on-dark');
      document.body.classList.remove('cursor-over-input');
    };
  }, []);
}
function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    window.addEventListener('ktb-navigate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('ktb-navigate', onPop);
    };
  }, []);
  return path;
}
function navigate(path) {
  if (window.location.pathname === path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
  window.history.pushState({}, '', path);
  window.scrollTo(0, 0);
  window.dispatchEvent(new Event('ktb-navigate'));
}
function SmartLink({
  to,
  children,
  className,
  onNav,
  innerRef,
  ...rest
}) {
  const onClick = e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    if (to.startsWith('/') && !to.startsWith('/#')) {
      e.preventDefault();
      navigate(to);
      if (onNav) onNav();
      return;
    }
    const hash = to.startsWith('#') ? to : to.slice(1);
    if (window.location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 50);
      if (onNav) onNav();
    } else {
      if (onNav) onNav();
    }
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    ref: innerRef,
    href: to,
    className: className,
    onClick: onClick
  }, rest), children);
}

// Nav: Usługi · Realizacje · Proces · O nas · Blog · Kontakt
const NAV_TARGETS = ["#services", "/realizacje", "#process", "/o-nas", "/blog", "/kontakt"];
function useSEO(lang, path) {
  useEffect(() => {
    const base = lang === 'pl' ? 'KTB Media — Agencja marketingowa Gdańsk, Pruszcz Gdański, Tczew | Marketing dla motoryzacji' : 'KTB Media — Marketing agency Gdańsk | Automotive marketing specialists';
    let meta;
    if (path.startsWith('/realizacje/')) {
      const slug = path.slice('/realizacje/'.length).replace(/\/$/, '');
      const item = (COPY[lang].portfolio.items || []).find(x => x.slug === slug);
      if (item) meta = {
        title: `${item.title1} ${item.titleIt} — case study · KTB Media`,
        desc: item.brief
      };
    } else if (path.startsWith('/blog/')) {
      const slug = path.slice('/blog/'.length).replace(/\/$/, '');
      const item = (COPY[lang].blog.items || []).find(x => x.slug === slug);
      if (item) meta = {
        title: `${item.title1} ${item.titleIt} · KTB Media`,
        desc: item.lede || ''
      };
    } else if (getLandingConfig(lang, path)) {
      const item = getLandingConfig(lang, path);
      meta = {
        title: item.title,
        desc: item.description
      };
    } else if (path === '/realizacje') {
      meta = {
        title: (lang === 'pl' ? 'Realizacje — case studies marketingu motoryzacji i marek lokalnych' : 'Selected work — automotive and local brand case studies') + ' · KTB Media',
        desc: lang === 'pl' ? 'Wybrane realizacje KTB Media — warsztaty samochodowe, serwisy, marki automotive, firmy z Gdańska i Trójmiasta.' : 'KTB Media case studies — automotive workshops, service stations, brands from Gdańsk and Tri-City.'
      };
    } else if (path === '/blog') {
      meta = {
        title: (lang === 'pl' ? 'Blog — marketing dla motoryzacji, SEO lokalne Gdańsk' : 'Journal — automotive marketing, local SEO Gdańsk') + ' · KTB Media',
        desc: lang === 'pl' ? 'Artykuły KTB Media o marketingu dla warsztatów, SEO lokalnym Gdańsk/Pruszcz Gdański/Tczew i strategii marki.' : 'KTB Media marketing journal — automotive, local SEO, brand strategy.'
      };
    } else if (path === '/o-nas') {
      meta = {
        title: (lang === 'pl' ? 'O nas — agencja marketingowa Pruszcz Gdański / Gdańsk' : 'About — marketing agency Pruszcz Gdański / Gdańsk') + ' · KTB Media',
        desc: lang === 'pl' ? 'Poznaj założycieli KTB Media — agencji marketingowej z Pruszcza Gdańskiego obsługującej Gdańsk, Tczew i całe Trójmiasto.' : 'Meet the KTB Media founders — marketing agency from Pruszcz Gdański serving Gdańsk, Tczew and Tri-City.'
      };
    } else if (path === '/kontakt') {
      meta = {
        title: (lang === 'pl' ? 'Kontakt — darmowa wycena marketingu Gdańsk' : 'Contact — free marketing quote Gdańsk') + ' · KTB Media',
        desc: lang === 'pl' ? 'Napisz do KTB Media — agencji marketingowej z Pruszcza Gdańskiego obsługującej Gdańsk, Tczew, Trójmiasto. Darmowa wycena w 24h.' : 'Contact KTB Media — marketing agency near Gdańsk. Free quote within 24h.'
      };
    } else if (path === '/polityka-prywatnosci' || path === '/privacy-policy') {
      meta = {
        title: (lang === 'pl' ? 'Polityka prywatności' : 'Privacy policy') + ' · KTB Media',
        desc: lang === 'pl' ? 'Polityka prywatności KTB Media.' : 'KTB Media privacy policy.'
      };
    } else if (path !== '/') {
      meta = {
        title: (lang === 'pl' ? '404 — strona w warsztacie' : '404 — page in the workshop') + ' · KTB Media',
        desc: lang === 'pl' ? 'Ta strona KTB Media nie istnieje. Wróć do realizacji, bloga albo formularza kontaktowego.' : 'This KTB Media page does not exist. Go back to work, journal or contact.'
      };
    } else {
      meta = {
        title: base,
        desc: lang === 'pl' ? 'Agencja marketingowa Gdańsk, Pruszcz Gdański, Tczew. Specjalizacja: marketing dla motoryzacji i warsztatów samochodowych. Google Ads, Meta Ads, SEO lokalne, strony WWW. Od 2022.' : 'Marketing agency in Pruszcz Gdański (near Gdańsk). Automotive & workshop specialists. Google Ads, Meta Ads, local SEO, web dev. Est. 2022.'
      };
    }
    document.title = meta.title;
    let md = document.querySelector('meta[name="description"]');
    if (!md) {
      md = document.createElement('meta');
      md.setAttribute('name', 'description');
      document.head.appendChild(md);
    }
    md.setAttribute('content', meta.desc);
    const setOG = (prop, val) => {
      let el = document.querySelector(`meta[property="og:${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', `og:${prop}`);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };
    setOG('title', meta.title);
    setOG('description', meta.desc);
    setOG('type', 'website');
    setOG('url', window.location.href);
    setOG('locale', lang === 'pl' ? 'pl_PL' : 'en_US');
    let can = document.querySelector('link[rel="canonical"]');
    if (!can) {
      can = document.createElement('link');
      can.setAttribute('rel', 'canonical');
      document.head.appendChild(can);
    }
    can.setAttribute('href', window.location.href.split('?')[0].split('#')[0]);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, path]);
}
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function parseCountValue(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return null;
  if (/^od\s+\d/i.test(raw)) return null;
  if (/^(19|20)\d{2}$/.test(raw)) return null;
  let match = raw.match(/^([+-]?)(\d+(?:[.,]\d+)?)(\s?)([KkMm])?([+%×x])?$/);
  if (match) {
    const sign = match[1] || '';
    const num = parseFloat(match[2].replace(',', '.'));
    const space = match[3] || '';
    const scale = match[4] ? match[4].toUpperCase() : '';
    const suffixSymbol = match[5] || '';
    const multiplier = scale === 'M' ? 1000000 : scale === 'K' ? 1000 : 1;
    const target = num * multiplier;
    return {
      target,
      start: suffixSymbol === '×' || suffixSymbol === 'x' ? 1 : 0,
      prefix: sign,
      suffix: `${space}${scale}${suffixSymbol}`.replace('x', '×'),
      compact: !!scale,
      decimals: match[2].includes('.') || match[2].includes(',') ? 1 : 0,
      separator: false
    };
  }
  match = raw.match(/^([×x])(\d+(?:[.,]\d+)?)$/);
  if (match) {
    return {
      target: parseFloat(match[2].replace(',', '.')),
      start: 1,
      prefix: '',
      suffix: '×',
      compact: false,
      decimals: match[2].includes('.') || match[2].includes(',') ? 1 : 0,
      separator: false
    };
  }
  if (/^\d{1,3}(?:[ \u00a0]\d{3})+$/.test(raw)) {
    return {
      target: Number(raw.replace(/[ \u00a0]/g, '')),
      start: 0,
      prefix: '',
      suffix: '',
      compact: false,
      decimals: 0,
      separator: true
    };
  }
  return null;
}
function formatCountValue(value, parsed, done) {
  if (!parsed) return String(value ?? '');
  if (parsed.compact) {
    const divisor = parsed.suffix.includes('M') ? 1000000 : 1000;
    const unit = parsed.suffix.includes('M') ? 'M' : 'K';
    const symbol = parsed.suffix.replace(/[KkMm]/, '');
    const scaled = value / divisor;
    const decimals = scaled < 10 && parsed.target % divisor !== 0 ? 1 : 0;
    return `${parsed.prefix}${scaled.toFixed(decimals).replace('.', ',')}${unit}${done ? symbol : symbol.replace('+', '')}`;
  }
  const fixed = value.toFixed(parsed.decimals);
  const normalized = parsed.decimals ? fixed.replace('.', ',') : String(Math.round(value));
  const body = parsed.separator ? normalized.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : normalized;
  return `${parsed.prefix}${body}${parsed.suffix}`;
}
function useCountUp(targetValue, options = {}) {
  const {
    duration = 1800,
    startOnView = true,
    animateFrom
  } = options;
  const ref = useRef(null);
  const parsed = parseCountValue(targetValue);
  const [display, setDisplay] = useState(() => parsed ? formatCountValue(animateFrom ?? parsed.start, {
    ...parsed,
    start: animateFrom ?? parsed.start
  }, false) : String(targetValue ?? ''));
  const hasRun = useRef(false);
  const lastValue = useRef(targetValue);
  useEffect(() => {
    if (lastValue.current !== targetValue) {
      lastValue.current = targetValue;
      hasRun.current = false;
    }
    const nextParsed = parseCountValue(targetValue);
    if (!nextParsed) {
      setDisplay(String(targetValue ?? ''));
      return;
    }
    const from = animateFrom ?? nextParsed.start;
    const to = nextParsed.target;
    const final = () => setDisplay(formatCountValue(to, nextParsed, true));
    if (prefersReducedMotion()) {
      final();
      return;
    }
    let raf = 0;
    let observer = null;
    let start = 0;
    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;
      const tick = now => {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(formatCountValue(from + (to - from) * eased, nextParsed, t === 1));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (!startOnView) {
      run();
    } else if (ref.current) {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          if (observer) observer.disconnect();
          run();
        }
      }, {
        threshold: 0.3
      });
      observer.observe(ref.current);
    }
    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, [targetValue, duration, startOnView, animateFrom]);
  return {
    ref,
    display,
    isStatic: !parsed
  };
}
function AnimatedValue({
  value,
  className,
  duration,
  startOnView,
  animateFrom
}) {
  const count = useCountUp(value, {
    duration,
    startOnView,
    animateFrom
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: count.ref,
    className: className
  }, count.display);
}
function useStickyQuote(path) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (path === '/kontakt' || path === '/contact' || path === '/polityka-prywatnosci' || path === '/privacy-policy') {
      setVisible(false);
      return;
    }
    if (sessionStorage.getItem('ktbStickyQuoteClosed') === '1') {
      setVisible(false);
      return;
    }
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const y = window.scrollY || window.pageYOffset || 0;
      setVisible(y > max * 0.3 && y < max * 0.9);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        setTimeout(update, 100);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [path]);
  const close = () => {
    sessionStorage.setItem('ktbStickyQuoteClosed', '1');
    setVisible(false);
  };
  return {
    visible,
    close
  };
}
function StickyQuoteChip({
  lang,
  path
}) {
  const {
    visible,
    close
  } = useStickyQuote(path);
  if (path === '/kontakt' || path === '/contact' || path === '/polityka-prywatnosci' || path === '/privacy-policy') return null;
  const label = lang === 'pl' ? 'Darmowa wycena' : 'Free quote';
  const short = lang === 'pl' ? 'Wycena' : 'Quote';
  const go = e => {
    e.preventDefault();
    navigate('/kontakt');
    setTimeout(() => {
      const form = document.querySelector('.contact-form');
      if (form) form.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });
    }, 80);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `sticky-quote ${visible ? 'is-visible' : ''}`,
    "aria-hidden": visible ? "false" : "true"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/kontakt",
    onClick: go,
    className: "sticky-quote-link"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    className: "sticky-quote-full"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "sticky-quote-short"
  }, short)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sticky-quote-close",
    onClick: close,
    "aria-label": lang === 'pl' ? 'Ukryj darmową wycenę' : 'Hide free quote'
  }, "\xD7"));
}
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const y = window.scrollY || window.pageYOffset || 0;
      setProgress(Math.max(0, Math.min(1, y / max)));
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', request, {
      passive: true
    });
    window.addEventListener('resize', request, {
      passive: true
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, []);
  return progress;
}
function ScrollProgressBar() {
  const progress = useScrollProgress();
  return /*#__PURE__*/React.createElement("div", {
    className: `scroll-progress ${progress > 0.02 ? 'is-visible' : ''}`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress-bar",
    style: {
      width: `${progress * 100}%`
    }
  }));
}
function useTilt(ref, options = {}) {
  const {
    max = 6
  } = options;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0;
    let next = null;
    const apply = () => {
      raf = 0;
      if (!next) return;
      const rect = el.getBoundingClientRect();
      const x = (next.clientX - rect.left) / rect.width - 0.5;
      const y = (next.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--tilt-y', `${x * max}deg`);
      el.style.setProperty('--tilt-x', `${y * -max}deg`);
    };
    const onMove = e => {
      next = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      next = null;
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };
    el.addEventListener('mousemove', onMove, {
      passive: true
    });
    el.addEventListener('mouseleave', onLeave, {
      passive: true
    });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, max]);
}
function TiltLink({
  to,
  className,
  children,
  max = 6
}) {
  const ref = useRef(null);
  useTilt(ref, {
    max
  });
  return /*#__PURE__*/React.createElement(SmartLink, {
    to: to,
    className: `${className || ''} tilt-card`,
    innerRef: ref
  }, children);
}
function TiltBox({
  className,
  children,
  max = 6
}) {
  const ref = useRef(null);
  useTilt(ref, {
    max
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `${className || ''} tilt-card`
  }, children);
}
function useVisitedPages(path) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const key = 'ktbVisitedPaths';
    let paths = [];
    try {
      paths = JSON.parse(sessionStorage.getItem(key) || '[]');
      if (!Array.isArray(paths)) paths = [];
    } catch (e) {
      paths = [];
    }
    const clean = path || '/';
    if (!paths.includes(clean)) {
      paths.push(clean);
      sessionStorage.setItem(key, JSON.stringify(paths));
    }
    setCount(Math.max(1, paths.length));
  }, [path]);
  return count;
}
function useImageLoadingDefaults(deps = []) {
  useEffect(() => {
    document.querySelectorAll('img').forEach(img => {
      const isHero = !!img.closest('.hero');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      if (!img.hasAttribute('loading')) img.setAttribute('loading', isHero ? 'eager' : 'lazy');
      if (isHero && !img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'high');
    });
  }, deps);
}
function CompassIcon({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.8 8.4l-1.7 5-4.9 2.2 1.7-5 4.9-2.2z"
  }));
}
function visitedPagesLabel(lang, count) {
  if (lang !== 'pl') return `${count} pages visited this session`;
  const mod10 = count % 10;
  const mod100 = count % 100;
  const noun = count === 1 ? 'stronę' : mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14) ? 'strony' : 'stron';
  return `Odwiedziłeś ${count} ${noun} w tej sesji`;
}
function PageHeader({
  label,
  title,
  titleIt,
  lede
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "page-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", label), /*#__PURE__*/React.createElement("h1", {
    className: "display page-title reveal"
  }, title, " ", titleIt && /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, titleIt)), lede && /*#__PURE__*/React.createElement("p", {
    className: "page-lede reveal"
  }, lede)));
}
function Nav({
  lang,
  setLang
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePath();
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onS);
    return () => window.removeEventListener('scroll', onS);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  const t = COPY[lang];
  const isActive = target => {
    if (path === target) return true;
    if (target === '/realizacje' && path.startsWith('/realizacje/')) return true;
    if (target === '/blog' && path.startsWith('/blog/')) return true;
    return false;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/",
    className: "nav-logo",
    onNav: closeMenu
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/logo.png",
    alt: "KTB Media"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, t.nav.map((n, i) => /*#__PURE__*/React.createElement(SmartLink, {
    key: i,
    to: NAV_TARGETS[i],
    className: isActive(NAV_TARGETS[i]) ? 'active' : ''
  }, n))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === 'pl' ? 'on' : '',
    onClick: () => setLang('pl')
  }, "PL"), /*#__PURE__*/React.createElement("button", {
    className: lang === 'en' ? 'on' : '',
    onClick: () => setLang('en')
  }, "EN")), /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "nav-cta",
    onNav: closeMenu
  }, t.cta, " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })), /*#__PURE__*/React.createElement("button", {
    className: `nav-burger ${menuOpen ? 'open' : ''}`,
    "aria-label": "Menu",
    onClick: () => setMenuOpen(!menuOpen)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: `mobile-menu ${menuOpen ? 'open' : ''}`,
    onClick: closeMenu
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-inner",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-links"
  }, t.nav.map((n, i) => /*#__PURE__*/React.createElement(SmartLink, {
    key: i,
    to: NAV_TARGETS[i],
    onNav: closeMenu,
    className: isActive(NAV_TARGETS[i]) ? 'active' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "num mono"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, n), /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-foot"
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "btn",
    onNav: closeMenu
  }, t.cta, " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-lang"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === 'pl' ? 'on' : '',
    onClick: () => setLang('pl')
  }, "Polski"), /*#__PURE__*/React.createElement("button", {
    className: lang === 'en' ? 'on' : '',
    onClick: () => setLang('en')
  }, "English"))))));
}
function Hero({
  lang
}) {
  if (!sectionEnabled(lang, 'hero')) return null;
  const h = COPY[lang].hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-statue"
  }, /*#__PURE__*/React.createElement("img", {
    src: h.image || "/assets/statue-greek.webp",
    alt: h.imageAlt || ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, h.eyebrow)), /*#__PURE__*/React.createElement("h1", {
    className: "display hero-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "split-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "split-inner"
  }, h.title1)), /*#__PURE__*/React.createElement("span", {
    className: "split-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "split-inner"
  }, h.title2, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, h.titleIt))), /*#__PURE__*/React.createElement("span", {
    className: "split-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "split-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amber"
  }, h.title3)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-sub-row reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, h.lede)), /*#__PURE__*/React.createElement("div", {
    className: "reveal hero-cta-row"
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "btn"
  }, h.cta1, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  }))), /*#__PURE__*/React.createElement(SmartLink, {
    to: "/realizacje",
    className: "btn-ghost hero-secondary"
  }, h.cta2, " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })))), h.metrics && h.metrics.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "hero-meta reveal"
  }, h.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, m.k), /*#__PURE__*/React.createElement(AnimatedValue, {
    value: m.v,
    className: m.big ? 'big' : 'v',
    duration: m.big ? 2400 : 1800,
    startOnView: false,
    animateFrom: m.animateFrom
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right",
    "aria-hidden": "true"
  }))));
}
function Marquee({
  lang
}) {
  if (!sectionEnabled(lang, 'marquee')) return null;
  const items = COPY[lang].marquee;
  const row = [];
  items.forEach((it, i) => {
    row.push(/*#__PURE__*/React.createElement("span", {
      key: `${i}-a`,
      className: i % 2 === 0 ? '' : 'it'
    }, it));
    row.push(/*#__PURE__*/React.createElement("span", {
      key: `${i}-b`,
      className: "star"
    }, "\u2726"));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, row, row.map((r, i) => React.cloneElement(r, {
    key: `d-${i}`
  }))));
}
function Services({
  lang
}) {
  if (!sectionEnabled(lang, 'services')) return null;
  const s = COPY[lang].services;
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", s.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, s.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, s.titleIt))), /*#__PURE__*/React.createElement("div", {
    className: "services-list"
  }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "service-row reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, it.n), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, it.t, " ", it.tIt && /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, it.tIt)), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, it.d), /*#__PURE__*/React.createElement("div", {
    className: "arrow-wrap"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 18
  })))))));
}
function About({
  lang
}) {
  if (!sectionEnabled(lang, 'about')) return null;
  const a = COPY[lang].about;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "about section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", a.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, a.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, a.titleIt), " ", /*#__PURE__*/React.createElement("span", {
    className: "outline"
  }, a.title2))), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "about-lede reveal"
  }, a.lede.split(a.ledeAccent).map((part, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, a.ledeAccent)))), /*#__PURE__*/React.createElement("div", {
    className: "features reveal"
  }, a.features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "feature",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, f.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, f.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, f.d)))))), /*#__PURE__*/React.createElement("div", {
  className: "about-samurai reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: a.image || "/assets/statue-samurai.webp",
    alt: a.imageAlt || ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, "\"", a.quote.split(a.quoteAccent).map((part, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, a.quoteAccent))), "\""), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, a.cap)))));
}
function AudienceBlocks({
  lang,
  extended = false
}) {
  if (!sectionEnabled(lang, 'audience')) return null;
  const a = COPY[lang].audience;
  if (!a) return null;
  const forItems = extended && a.forItemsExt ? a.forItemsExt : (a.forItems || []).map(k => ({
    k
  }));
  const notForItems = extended && a.notForItemsExt ? a.notForItemsExt : (a.notForItems || []).map(k => ({
    k
  }));
  const renderList = (items, mode) => /*#__PURE__*/React.createElement("ul", {
    className: "audience-list"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: extended ? 'is-extended' : ''
  }, /*#__PURE__*/React.createElement("span", {
    className: "audience-mark",
    "aria-hidden": "true"
  }, mode === 'for' ? "\u2713" : "\u2717"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, item.k), extended && item.d && /*#__PURE__*/React.createElement("em", null, item.d)))));
  return /*#__PURE__*/React.createElement("section", {
    className: `section audience-section ${extended ? 'audience-section-extended' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", a.label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, a.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, a.titleIt)), extended && a.intro && /*#__PURE__*/React.createElement("p", {
    className: "audience-intro"
  }, a.intro))), /*#__PURE__*/React.createElement("div", {
    className: "audience-grid reveal"
  }, /*#__PURE__*/React.createElement("article", {
    className: "audience-panel audience-panel-for"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audience-panel-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audience-icon",
    "aria-hidden": "true"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, a.forLabel)), renderList(forItems, 'for')), /*#__PURE__*/React.createElement("article", {
    className: "audience-panel audience-panel-not"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audience-panel-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audience-icon",
    "aria-hidden": "true"
  }, "\u2717"), /*#__PURE__*/React.createElement("h3", null, a.notForLabel)), renderList(notForItems, 'not')))));
}
function Showcase({
  lang
}) {
  if (!sectionEnabled(lang, 'showcase')) return null;
  const s = COPY[lang].showcase;
  if (!s) return null;
  const h = React.createElement;
  return h("section", {
    className: "showcase-section",
    "aria-label": s.label
  }, s.blocks.map((b, i) => h("div", {
    className: `showcase-block ${i % 2 === 1 ? 'reverse' : ''}`,
    key: i
  }, h("div", {
    className: "showcase-text reveal"
  }, h("div", {
    className: "showcase-eyebrow mono"
  }, b.eyebrow), h("h3", {
    className: "display showcase-heading"
  }, b.title1, " ", h("span", {
    className: "accent"
  }, b.titleAccent), " ", b.title2), h("p", {
    className: "showcase-body"
  }, b.body)), h("div", {
    className: "showcase-image reveal"
  }, h("img", {
    src: b.image,
    alt: b.imageAlt,
    onError: e => {
      e.target.style.display = 'none';
      const ph = e.target.parentNode.querySelector('.showcase-placeholder');
      if (ph) ph.style.display = 'flex';
    }
  }), h("div", {
    className: "showcase-placeholder"
  }, h("div", {
    className: "showcase-placeholder-label mono"
  }, b.placeholderLabel))))));
}
function Process({
  lang
}) {
  if (!sectionEnabled(lang, 'process')) return null;
  const p = COPY[lang].process;
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", p.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, p.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, p.titleIt), " ", p.title2)), /*#__PURE__*/React.createElement("div", {
    className: "process-steps reveal"
  }, p.steps.map((st, i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, st.n.split('').map((c, j) => j === 0 ? c : /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "it"
  }, c))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, st.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, st.d)))))));
}
function Portfolio({
  lang,
  hideHead
}) {
  if (!sectionEnabled(lang, 'portfolio')) return null;
  const p = COPY[lang].portfolio;
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "section portfolio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, !hideHead && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", p.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, p.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, p.titleIt))), /*#__PURE__*/React.createElement("p", {
    className: "serif-italic section-lede reveal"
  }, p.lede)), /*#__PURE__*/React.createElement("div", {
    className: "sketchbook-grid"
  }, p.items.map((it, i) => /*#__PURE__*/React.createElement(SmartLink, {
    to: `/realizacje/${it.slug}`,
    className: "sketch-card reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "sketch-card-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sketch-num mono"
  }, it.num), /*#__PURE__*/React.createElement("div", {
    className: "sketch-year mono"
  }, it.year)), /*#__PURE__*/React.createElement("div", {
    className: "sketch-palette",
    "aria-hidden": "true"
  }, (it.palette || []).map((c, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sketch-title"
  }, it.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, it.titleIt)), /*#__PURE__*/React.createElement("div", {
    className: "sketch-tag mono"
  }, it.tag), /*#__PURE__*/React.createElement("div", {
    className: "sketch-brief"
  }, it.brief), /*#__PURE__*/React.createElement("div", {
    className: "sketch-cta mono"
  }, lang === 'pl' ? 'Zobacz case study' : 'View case study', " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    className: "sketch-reveal",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null, lang === 'pl' ? 'Zobacz case study' : 'View case study'), /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    className: "sketch-mobile-cue",
    "aria-hidden": "true"
  }, "\u2197"))))));
}
function CaseChart({
  data,
  lang
}) {
  const [hover, setHover] = useState(null);
  if (!data || !Array.isArray(data.before) || !Array.isArray(data.after)) return null;
  const before = data.before.map((v, i) => ({
    v,
    series: lang === 'pl' ? 'Przed' : 'Before',
    i
  }));
  const after = data.after.map((v, i) => ({
    v,
    series: lang === 'pl' ? 'Po' : 'After',
    i
  }));
  const values = before.concat(after).map(p => p.v);
  const max = Math.max(...values);
  const min = Math.min(0, ...values);
  const width = 720;
  const height = 320;
  const pad = {
    l: 58,
    r: 28,
    t: 32,
    b: 46
  };
  const x = (i, len) => pad.l + i * ((width - pad.l - pad.r) / Math.max(1, len - 1));
  const y = v => height - pad.b - (v - min) * ((height - pad.t - pad.b) / Math.max(1, max - min));
  const pathFor = pts => pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.i, pts.length).toFixed(1)} ${y(p.v).toFixed(1)}`).join(' ');
  const firstBefore = before[0] ? before[0].v : 0;
  const bestAfter = Math.max(...after.map(p => p.v));
  const growth = firstBefore ? Math.round((bestAfter - firstBefore) / firstBefore * 100) : 0;
  const ticks = [0, .25, .5, .75, 1].map(t => Math.round(min + (max - min) * t));
  return /*#__PURE__*/React.createElement("div", {
    className: "case-chart-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-chart-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-chart-label mono"
  }, data.label), /*#__PURE__*/React.createElement("div", {
    className: "case-chart-legend mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "before"
  }, lang === 'pl' ? 'Przed' : 'Before'), /*#__PURE__*/React.createElement("span", {
    className: "after"
  }, lang === 'pl' ? 'Po' : 'After'))), /*#__PURE__*/React.createElement("svg", {
    className: "case-chart-svg",
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": `${data.label}: ${lang === 'pl' ? 'porównanie przed i po' : 'before and after comparison'}`
  }, ticks.map((tick, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.l,
    x2: width - pad.r,
    y1: y(tick),
    y2: y(tick),
    className: "case-chart-grid"
  }), /*#__PURE__*/React.createElement("text", {
    x: 10,
    y: y(tick) + 4,
    className: "case-chart-axis"
  }, tick))), /*#__PURE__*/React.createElement("path", {
    d: pathFor(before),
    className: "case-chart-line case-chart-line-before"
  }), /*#__PURE__*/React.createElement("path", {
    d: pathFor(after),
    className: "case-chart-line case-chart-line-after"
  }), before.concat(after).map((p, idx) => /*#__PURE__*/React.createElement("circle", {
    key: idx,
    cx: x(p.i, p.series === (lang === 'pl' ? 'Przed' : 'Before') ? before.length : after.length),
    cy: y(p.v),
    r: hover === idx ? 7 : 4,
    className: p.series === (lang === 'pl' ? 'Przed' : 'Before') ? 'case-chart-dot before' : 'case-chart-dot after',
    onMouseEnter: () => setHover(idx),
    onMouseLeave: () => setHover(null)
  })), hover != null && (() => {
    const all = before.concat(after);
    const p = all[hover];
    const len = p.series === (lang === 'pl' ? 'Przed' : 'Before') ? before.length : after.length;
    const hx = x(p.i, len);
    const hy = y(p.v);
    return /*#__PURE__*/React.createElement("g", {
      className: "case-chart-tip"
    }, /*#__PURE__*/React.createElement("rect", {
      x: Math.min(width - 170, Math.max(70, hx - 70)),
      y: Math.max(12, hy - 54),
      width: "150",
      height: "38",
      rx: "4"
    }), /*#__PURE__*/React.createElement("text", {
      x: Math.min(width - 158, Math.max(82, hx - 58)),
      y: Math.max(36, hy - 31)
    }, `${p.series}: ${p.v} ${data.unit || ''}`));
  })()), /*#__PURE__*/React.createElement("div", {
    className: "case-chart-mobile"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, lang === 'pl' ? 'Przed' : 'Before'), /*#__PURE__*/React.createElement("strong", null, firstBefore, " ", data.unit || '')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, lang === 'pl' ? 'Najlepszy wynik po' : 'Best after'), /*#__PURE__*/React.createElement("strong", null, bestAfter, " ", data.unit || '')), /*#__PURE__*/React.createElement("div", {
    className: "case-chart-growth"
  }, "+", growth, "%")));
}
function LandingPage({ lang, config }) {
  const portfolio = COPY[lang].portfolio || {};
  const cases = (config.cases || []).map(slug => (portfolio.items || []).find(item => item.slug === slug)).filter(Boolean);
  const faqs = (config.faq || []).map(item => Array.isArray(item) ? {
    q: item[0],
    a: item[1]
  } : item).filter(item => item && item.q && item.a);
  return /*#__PURE__*/React.createElement("article", {
    className: "landing-page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "landing-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container landing-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " SEO landing"), /*#__PURE__*/React.createElement("h1", {
    className: "display landing-title reveal"
  }, config.hero.h1), /*#__PURE__*/React.createElement("p", {
    className: "landing-lede reveal"
  }, config.hero.lead), /*#__PURE__*/React.createElement("div", {
    className: "landing-cta-row reveal"
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "btn"
  }, lang === 'pl' ? 'Darmowa wycena' : 'Free quote', " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })), /*#__PURE__*/React.createElement(SmartLink, {
    to: "/realizacje",
    className: "btn-ghost"
  }, lang === 'pl' ? 'Zobacz realizacje' : 'See work', " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  }))))), (config.context || []).length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section landing-context"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container landing-context-inner reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", lang === 'pl' ? 'Podejście' : 'Approach'), (config.context || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)))), /*#__PURE__*/React.createElement("section", {
    className: "section landing-why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", lang === 'pl' ? 'Dlaczego my' : 'Why us'), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, lang === 'pl' ? 'Marketing, który ma ' : 'Marketing with ', /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, lang === 'pl' ? 'sens.' : 'substance.'))), /*#__PURE__*/React.createElement("div", {
    className: "landing-feature-grid"
  }, (config.why || []).map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "landing-feature reveal",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", null, item)))))), /*#__PURE__*/React.createElement("section", {
    className: "section landing-services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", lang === 'pl' ? 'Zakres' : 'Scope'), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, lang === 'pl' ? 'Co robimy dla ' : 'What we do for ', /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, config.area))), /*#__PURE__*/React.createElement("ul", {
    className: "landing-service-list reveal"
  }, (config.services || []).map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, String(i + 1).padStart(2, '0')), item))))), cases.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "section landing-cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " Case study"), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, lang === 'pl' ? 'Podobne ' : 'Related ', /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, lang === 'pl' ? 'realizacje.' : 'work.'))), /*#__PURE__*/React.createElement("div", {
    className: "landing-case-grid"
  }, cases.map(item => /*#__PURE__*/React.createElement(SmartLink, {
    to: `/realizacje/${item.slug}`,
    className: "landing-case reveal",
    key: item.slug
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, item.tag), /*#__PURE__*/React.createElement("strong", null, item.title1, " ", item.titleIt), /*#__PURE__*/React.createElement("p", null, item.brief)))))), /*#__PURE__*/React.createElement("section", {
    className: "section landing-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, lang === 'pl' ? 'Pytania przed ' : 'Questions before ', /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, lang === 'pl' ? 'startem.' : 'starting.'))), /*#__PURE__*/React.createElement("div", {
    className: "landing-faq-list"
  }, faqs.map((item, i) => /*#__PURE__*/React.createElement("details", {
    className: "landing-faq-item reveal",
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, item.q), /*#__PURE__*/React.createElement("p", null, item.a)))))), /*#__PURE__*/React.createElement("section", {
    className: "landing-final-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container landing-final-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, lang === 'pl' ? 'Sprawdźmy, co ' : 'Let us check what ', /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, lang === 'pl' ? 'ma sens.' : 'makes sense.')), /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "btn"
  }, lang === 'pl' ? 'Darmowa wycena' : 'Free quote', " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })))));
}
function CasePage({
  lang,
  slug
}) {
  const p = COPY[lang].portfolio;
  const item = p.items.find(x => x.slug === slug);
  if (!item) {
    return /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        textAlign: 'center',
        padding: '80px 0'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "display",
      style: {
        fontSize: '48px',
        marginBottom: 24
      }
    }, "404"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 32
      }
    }, lang === 'pl' ? 'Nie znaleziono projektu.' : 'Project not found.'), /*#__PURE__*/React.createElement(SmartLink, {
      to: "/realizacje",
      className: "btn"
    }, lang === 'pl' ? 'Wróć do realizacji' : 'Back to work')));
  }
  const t = lang === 'pl' ? {
    back: 'Wszystkie realizacje',
    challenge: 'Wyzwanie',
    solution: 'Podejście',
    results: 'Rezultaty',
    scope: 'Zakres projektu',
    duration: 'Czas trwania',
    timeline: 'Przebieg projektu',
    quote: 'Cytat klienta',
    notes: 'Notatki z procesu',
    palette: 'Paleta',
    nextCase: 'Następny projekt'
  } : {
    back: 'All work',
    challenge: 'Challenge',
    solution: 'Approach',
    results: 'Results',
    scope: 'Project scope',
    duration: 'Duration',
    timeline: 'Project timeline',
    quote: 'Client quote',
    notes: 'Process notes',
    palette: 'Palette',
    nextCase: 'Next project'
  };
  const idx = p.items.findIndex(x => x.slug === slug);
  const next = p.items[(idx + 1) % p.items.length];
  const images = item.images || [];
  return /*#__PURE__*/React.createElement("article", {
    className: "case-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/realizacje",
    className: "case-back mono"
  }, /*#__PURE__*/React.createElement(ArrowBackIcon, {
    size: 14
  }), " ", t.back), /*#__PURE__*/React.createElement("header", {
    className: "case-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-meta mono"
  }, /*#__PURE__*/React.createElement("span", null, item.num), /*#__PURE__*/React.createElement("span", {
    className: "dot-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, item.tag), /*#__PURE__*/React.createElement("span", {
    className: "dot-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, item.year)), /*#__PURE__*/React.createElement("h1", {
    className: "display case-title"
  }, item.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, item.titleIt)), /*#__PURE__*/React.createElement("p", {
    className: "case-brief"
  }, item.brief), /*#__PURE__*/React.createElement("div", {
    className: "case-palette-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-palette-label mono"
  }, t.palette), /*#__PURE__*/React.createElement("div", {
    className: "case-palette"
  }, (item.palette || []).map((c, j) => /*#__PURE__*/React.createElement("div", {
    className: "swatch",
    key: j
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: c
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "hex mono"
  }, c)))))), images.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "case-images-grid reveal"
  }, images.map((src, j) => /*#__PURE__*/React.createElement("div", {
    className: `case-image-card case-image-${j}`,
    key: j,
    style: {
      '--accent-1': (item.palette || [])[0] || '#a8b89a'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: `${item.title1} ${j + 1}`,
    onError: e => {
      e.target.style.display = 'none';
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "case-image-num"
  }, String(j + 1).padStart(2, '0'), " / ", String(images.length).padStart(2, '0'))))), (item.duration || item.scope) && /*#__PURE__*/React.createElement("section", {
    className: "case-scope-row reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-scope-duration"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.duration), /*#__PURE__*/React.createElement("strong", null, item.duration)), /*#__PURE__*/React.createElement("div", {
    className: "case-scope-tags",
    "aria-label": t.scope
  }, (item.scope || []).map((tag, j) => /*#__PURE__*/React.createElement("span", {
    className: "case-scope-tag mono",
    key: j
  }, tag)))), /*#__PURE__*/React.createElement("div", {
    className: "case-grid"
  }, /*#__PURE__*/React.createElement("section", {
    className: "case-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.challenge), /*#__PURE__*/React.createElement("p", {
    className: "case-block-body"
  }, item.challenge)), /*#__PURE__*/React.createElement("section", {
    className: "case-block reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.solution), /*#__PURE__*/React.createElement("p", {
    className: "case-block-body"
  }, item.solution))), item.timeline && item.timeline.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "case-timeline-section reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.timeline), /*#__PURE__*/React.createElement("ol", {
    className: "case-timeline"
  }, item.timeline.map((phase, j) => /*#__PURE__*/React.createElement("li", {
    className: "case-timeline-item",
    key: j
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-timeline-num mono"
  }, String(j + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, phase.phase), /*#__PURE__*/React.createElement("div", {
    className: "case-timeline-duration mono"
  }, phase.duration), /*#__PURE__*/React.createElement("p", null, phase.description)))))), /*#__PURE__*/React.createElement("section", {
    className: "case-results reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.results), /*#__PURE__*/React.createElement("div", {
    className: "case-results-grid"
  }, (item.results || []).map((r, j) => /*#__PURE__*/React.createElement("div", {
    className: "case-result",
    key: j
  }, /*#__PURE__*/React.createElement(AnimatedValue, {
    value: r.v,
    className: "case-result-v",
    duration: 1800
  }), /*#__PURE__*/React.createElement("div", {
    className: "case-result-k mono"
  }, r.k))))), /*#__PURE__*/React.createElement(CaseChart, {
    data: item.chartData,
    lang: lang
  })), item.clientQuote && /*#__PURE__*/React.createElement("section", {
    className: "case-client-quote reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.quote), /*#__PURE__*/React.createElement("blockquote", {
    className: "case-client-quote-text"
  }, "\u201E", item.clientQuote.text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "case-client-quote-author"
  }, /*#__PURE__*/React.createElement("strong", null, item.clientQuote.author), /*#__PURE__*/React.createElement("span", null, item.clientQuote.role, " \xB7 ", item.clientQuote.company))), item.notes && item.notes.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "case-notes reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.notes), /*#__PURE__*/React.createElement("ul", {
    className: "case-notes-list"
  }, item.notes.map((n, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, n)))), /*#__PURE__*/React.createElement(SmartLink, {
    to: `/realizacje/${next.slug}`,
    className: "case-next reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-next-label mono"
  }, t.nextCase), /*#__PURE__*/React.createElement("div", {
    className: "case-next-title"
  }, next.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, next.titleIt), " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 28
  }))));
}
function Testimonials({
  lang
}) {
  if (!sectionEnabled(lang, 'testimonials')) return null;
  const t = COPY[lang].testi;
  return /*#__PURE__*/React.createElement("section", {
    className: "section testi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", t.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, t.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, t.titleIt))), /*#__PURE__*/React.createElement("div", {
    className: "testi-grid reveal"
  }, t.items.map((it, i) => /*#__PURE__*/React.createElement(TiltBox, {
    className: "testi-card",
    key: i
  }, /*#__PURE__*/React.createElement("p", {
    className: "q"
  }, it.q), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, it.name), /*#__PURE__*/React.createElement("div", {
    className: "co"
  }, it.co)))))));
}
function FounderCard({
  m
}) {
  const hasPhotos = m.photo1 && m.photo2;
  return /*#__PURE__*/React.createElement(TiltBox, {
    className: `founder-card reveal ${hasPhotos ? 'has-photos' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder-avatar"
  }, hasPhotos ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: m.photo1,
    alt: m.name,
    className: "founder-photo founder-photo-1"
  }), /*#__PURE__*/React.createElement("img", {
    src: m.photo2,
    alt: m.name,
    className: "founder-photo founder-photo-2"
  })) : /*#__PURE__*/React.createElement("span", null, m.init)), /*#__PURE__*/React.createElement("div", {
    className: "founder-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "founder-name"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: "founder-role mono"
  }, m.role, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, m.roleIt)), m.bio && /*#__PURE__*/React.createElement("p", {
    className: "founder-bio"
  }, m.bio)));
}
function AboutPage({
  lang
}) {
  const a = COPY[lang].about;
  const t = COPY[lang].team;
  return /*#__PURE__*/React.createElement("article", {
    className: "about-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    label: a.label,
    title: a.title1,
    titleIt: a.titleIt + (a.title2 ? ' ' + a.title2 : ''),
    lede: a.lede
  }), sectionEnabled(lang, 'about') && /*#__PURE__*/React.createElement("section", {
    className: "about-page-main section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "features reveal"
  }, a.features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "feature",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, f.k), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, f.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, f.d)))))), /*#__PURE__*/React.createElement("div", {
  className: "about-samurai reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: a.image || "/assets/statue-samurai.webp",
    alt: a.imageAlt || ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, "\"", a.quote.split(a.quoteAccent).map((part, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, a.quoteAccent))), "\""), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, a.cap))))), /*#__PURE__*/React.createElement(AudienceBlocks, {
    lang: lang,
    extended: true
  }), sectionEnabled(lang, 'founders') && /*#__PURE__*/React.createElement("section", {
    className: "section founders-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", t.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, t.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, t.titleIt))), /*#__PURE__*/React.createElement("p", {
    className: "serif-italic section-lede reveal"
  }, t.lede), /*#__PURE__*/React.createElement("div", {
    className: "founders-grid"
  }, t.items.map((m, i) => /*#__PURE__*/React.createElement(FounderCard, {
    m: m,
    key: i
  }))))));
}
function Blog({
  lang,
  hideHead
}) {
  if (!sectionEnabled(lang, 'blog')) return null;
  const b = COPY[lang].blog;
  return /*#__PURE__*/React.createElement("section", {
    id: "journal",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, !hideHead && /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", b.label), /*#__PURE__*/React.createElement("h2", {
    className: "display section-title"
  }, b.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, b.titleIt))), /*#__PURE__*/React.createElement("div", {
    className: "blog-grid"
  }, b.items.map((it, i) => /*#__PURE__*/React.createElement(SmartLink, {
    to: `/blog/${it.slug}`,
    className: "blog-card reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-thumb"
  }, it.image ? /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: it.title1
  }) : /*#__PURE__*/React.createElement("div", {
    className: `ph ${it.ph}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cat"
  }, it.cat), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, it.date)), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, it.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, it.titleIt)), it.lede && /*#__PURE__*/React.createElement("div", {
    className: "blog-lede"
  }, it.lede))))));
}
function BlogArticle({
  lang,
  slug
}) {
  const b = COPY[lang].blog;
  const item = b.items.find(x => x.slug === slug);
  if (!item) {
    return /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        textAlign: 'center',
        padding: '80px 0'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "display",
      style: {
        fontSize: '48px',
        marginBottom: 24
      }
    }, "404"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 32
      }
    }, lang === 'pl' ? 'Nie znaleziono artykułu.' : 'Article not found.'), /*#__PURE__*/React.createElement(SmartLink, {
      to: "/blog",
      className: "btn"
    }, lang === 'pl' ? 'Wróć na blog' : 'Back to journal')));
  }
  const back = lang === 'pl' ? 'Wszystkie wpisy' : 'All posts';
  const nextLabel = lang === 'pl' ? 'Następny wpis' : 'Next article';
  const idx = b.items.findIndex(x => x.slug === slug);
  const next = b.items[(idx + 1) % b.items.length];
  const midIdx = Math.floor((item.body || []).length * 0.6);
  const hasInlineFigure = (item.body || []).some(block => block.image);
  const inlineImage = item.inlineImage || "/assets/showcase-1.jpg";
  const inlineImageAlt = item.inlineImageAlt || (lang === 'pl' ? 'Kulisy pracy nad marketingiem KTB Media' : 'Behind the scenes of KTB Media marketing work');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollProgressBar, null), /*#__PURE__*/React.createElement("article", {
    className: "blog-article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-article-container"
  }, /*#__PURE__*/React.createElement(SmartLink, {
    to: "/blog",
    className: "case-back mono"
  }, /*#__PURE__*/React.createElement(ArrowBackIcon, {
    size: 14
  }), " ", back), /*#__PURE__*/React.createElement("header", {
    className: "blog-article-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-article-meta mono"
  }, /*#__PURE__*/React.createElement("span", null, item.cat), /*#__PURE__*/React.createElement("span", {
    className: "dot-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, item.date)), /*#__PURE__*/React.createElement("h1", {
    className: "display blog-article-title"
  }, item.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, item.titleIt)), item.lede && /*#__PURE__*/React.createElement("p", {
    className: "blog-article-lede"
  }, item.lede)), item.image && /*#__PURE__*/React.createElement("div", {
    className: "blog-article-cover"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title1
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-article-body"
  }, (item.body || []).map((block, j) => {
    const out = [];
    if (block.h) out.push(/*#__PURE__*/React.createElement("h2", {
      key: `h-${j}`
    }, block.h));else if (block.p) out.push(/*#__PURE__*/React.createElement("p", {
      key: `p-${j}`,
      dangerouslySetInnerHTML: {
        __html: block.p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/_(.+?)_/g, '<em>$1</em>')
      }
    }));else if (block.list) out.push(/*#__PURE__*/React.createElement("ul", {
      key: `ul-${j}`
    }, block.list.map((li, k) => /*#__PURE__*/React.createElement("li", {
      key: k,
      dangerouslySetInnerHTML: {
        __html: li.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      }
    }))));else if (block.image) out.push(/*#__PURE__*/React.createElement("figure", {
      key: `figure-${j}`
    }, /*#__PURE__*/React.createElement("img", {
      src: block.image,
      alt: block.caption || item.title1
    }), block.caption && /*#__PURE__*/React.createElement("figcaption", null, block.caption)));
    if (!hasInlineFigure && inlineImage && j === midIdx) {
      out.push(/*#__PURE__*/React.createElement("figure", {
        key: `fig-${j}`
      }, /*#__PURE__*/React.createElement("img", {
        src: inlineImage,
        alt: inlineImageAlt
      }), /*#__PURE__*/React.createElement("figcaption", null, inlineImageAlt, " \u2014 ", item.cat || '')));
    }
    return out;
  })), /*#__PURE__*/React.createElement(SmartLink, {
    to: `/blog/${next.slug}`,
    className: "case-next reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-next-label mono"
  }, nextLabel), /*#__PURE__*/React.createElement("div", {
    className: "case-next-title"
  }, next.title1, " ", /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, next.titleIt), " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 28
  }))))));
}
function PrivacyPolicy({
  lang
}) {
  const t = lang === 'pl' ? {
    title: 'Polityka prywatności',
    sections: [{
      h: '1. Administrator danych',
      p: 'Administratorem Twoich danych osobowych jest <strong>KTB Media sp. z o.o.</strong> z siedzibą przy ul. Grunwaldzkiej 107, 83-000 Pruszcz Gdański. Kontakt: <a href="mailto:media@ktbmedia.eu">media@ktbmedia.eu</a>.'
    }, {
      h: '2. Zakres zbieranych danych',
      p: 'Zbieramy dane podawane w formularzu kontaktowym (imię, email, firma, telefon, wiadomość) oraz dane techniczne zbierane automatycznie (IP, przeglądarka, cookies, Google Analytics/Meta Pixel).'
    }, {
      h: '3. Cel przetwarzania',
      p: '(a) odpowiedź na zapytanie, (b) realizacja umowy, (c) analityka strony, (d) marketing własny (za zgodą), (e) obowiązki prawne (księgowość, podatki).'
    }, {
      h: '4. Podstawa prawna',
      p: 'Art. 6 ust. 1 lit. a), b), c), f) RODO.'
    }, {
      h: '5. Czas przechowywania',
      p: 'Formularz — do 12 miesięcy od ostatniego kontaktu. Umowy — zgodnie z ustawami księgowymi (min. 5 lat). Analityka — do 26 miesięcy.'
    }, {
      h: '6. Odbiorcy',
      p: 'Netlify (hosting), Google Workspace (email), Google, Meta (analityka), systemy CRM i newsletter — wszystkie z umowami powierzenia.'
    }, {
      h: '7. Twoje prawa',
      p: 'Dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie, sprzeciw, cofnięcie zgody, skarga do Prezesa UODO (ul. Stawki 2, 00-193 Warszawa).'
    }, {
      h: '8. Cookies',
      p: 'Techniczne, analityczne i marketingowe. Zarządzaj w ustawieniach przeglądarki.'
    }, {
      h: '9. Przekazywanie poza EOG',
      p: 'Google i Meta mogą przekazywać dane poza EOG na podstawie Standard Contractual Clauses Komisji Europejskiej.'
    }, {
      h: '10. Zmiany',
      p: 'Zastrzegamy prawo do zmian. Aktualna wersja jest zawsze na tej stronie.'
    }],
    updated: 'Ostatnia aktualizacja: kwiecień 2026'
  } : {
    title: 'Privacy policy',
    sections: [{
      h: '1. Controller',
      p: '<strong>KTB Media sp. z o.o.</strong>, Grunwaldzka 107, 83-000 Pruszcz Gdański, Poland. Contact: <a href="mailto:media@ktbmedia.eu">media@ktbmedia.eu</a>.'
    }, {
      h: '2. Data we collect',
      p: 'Form data (name, email, company, phone, message) and technical data collected automatically.'
    }, {
      h: '3. Purpose',
      p: '(a) reply to inquiries, (b) perform contracts, (c) analytics, (d) direct marketing (with consent), (e) legal obligations.'
    }, {
      h: '4. Legal basis',
      p: 'Art. 6(1)(a), (b), (c), (f) GDPR.'
    }, {
      h: '5. Retention',
      p: 'Form — 12 months from last contact. Contracts — min. 5 years (accounting law). Analytics — up to 26 months.'
    }, {
      h: '6. Recipients',
      p: 'Netlify, Google Workspace, Google, Meta, CRM — all under DPAs.'
    }, {
      h: '7. Your rights',
      p: 'Access, rectification, erasure, restriction, portability, objection, consent withdrawal, complaint to UODO.'
    }, {
      h: '8. Cookies',
      p: 'Technical, analytical, marketing. Manage in browser settings.'
    }, {
      h: '9. International transfers',
      p: 'Google and Meta may transfer data outside EEA under Standard Contractual Clauses.'
    }, {
      h: '10. Changes',
      p: 'We reserve the right to amend. Current version always on this page.'
    }],
    updated: 'Last updated: April 2026'
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "legal-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-article-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display legal-title"
  }, t.title), /*#__PURE__*/React.createElement("div", {
    className: "legal-body"
  }, t.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i
  }, /*#__PURE__*/React.createElement("h2", null, s.h), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: s.p
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "legal-updated mono"
  }, t.updated))));
}
function ContactForm({
  lang
}) {
  const c = COPY[lang].contact;
  const initChecks = {};
  (c.form.serviceGroups || []).forEach(g => g.items.forEach(it => {
    initChecks[it] = false;
  }));
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: c.form.budgetOpts[0],
    message: '',
    services: initChecks
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fresh = {};
    (c.form.serviceGroups || []).forEach(g => g.items.forEach(it => {
      fresh[it] = false;
    }));
    setForm(f => ({
      ...f,
      budget: c.form.budgetOpts[0],
      services: fresh
    }));
  }, [lang]);
  const encode = data => Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  const onSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setError('');
    const selectedServices = Object.keys(form.services).filter(name => form.services[name]).join(', ');
    const payload = {
      'form-name': 'quote-request',
      name: form.name,
      company: form.company,
      email: form.email,
      budget: form.budget,
      message: form.message,
      services: selectedServices,
      page: window.location.pathname,
      lang
    };
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setSent(true);
      setForm({
        name: '',
        email: '',
        company: '',
        budget: c.form.budgetOpts[0],
        message: '',
        services: Object.fromEntries(Object.keys(form.services).map(k => [k, false]))
      });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError(lang === 'pl' ? 'Nie udało się wysłać formularza. Napisz na media@ktbmedia.eu.' : 'Form submission failed. Please email media@ktbmedia.eu.');
    } finally {
      setSending(false);
    }
  };
  const toggleService = name => setForm(f => ({
    ...f,
    services: {
      ...f.services,
      [name]: !f.services[name]
    }
  }));
  return /*#__PURE__*/React.createElement("form", {
    className: "contact-form contact-form-quote light reveal",
    name: "quote-request",
    method: "POST",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "quote-request"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "bot-field"
  }), /*#__PURE__*/React.createElement("div", {
    className: "quote-heading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-eyebrow mono"
  }, c.form.heading), /*#__PURE__*/React.createElement("div", {
    className: "quote-title"
  }, c.form.subheading), /*#__PURE__*/React.createElement("p", {
    className: "quote-intro"
  }, c.form.intro)), /*#__PURE__*/React.createElement("div", {
    className: "quote-services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote-services-label mono"
  }, c.form.servicesLabel), (c.form.serviceGroups || []).map((g, gi) => /*#__PURE__*/React.createElement("div", {
    className: "service-group",
    key: gi
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-group-label"
  }, g.label), /*#__PURE__*/React.createElement("div", {
    className: "service-tiles"
  }, g.items.map((it, ii) => /*#__PURE__*/React.createElement("label", {
    key: ii,
    className: `checkbox-tile ${form.services[it] ? 'on' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!form.services[it],
    name: "services",
    value: it,
    onChange: () => toggleService(it)
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-box"
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-label"
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    className: "row2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, c.form.name), /*#__PURE__*/React.createElement("input", {
    name: "name",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, c.form.company), /*#__PURE__*/React.createElement("input", {
    name: "company",
    value: form.company,
    onChange: e => setForm({
      ...form,
      company: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, c.form.email), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, c.form.budget), /*#__PURE__*/React.createElement("select", {
    name: "budget",
    value: form.budget,
    onChange: e => setForm({
      ...form,
      budget: e.target.value
    })
  }, c.form.budgetOpts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, c.form.message), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    rows: "3"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "submit",
    disabled: sending
  }, sending ? (lang === 'pl' ? 'Wysyłanie…' : 'Sending…') : c.form.submit), /*#__PURE__*/React.createElement("div", {
    className: "success"
  }, sent ? c.form.success : ''), /*#__PURE__*/React.createElement("div", {
    className: "success",
    style: {
      color: '#ffb4b4'
    }
  }, error || ''));
}
function ContactPage({
  lang
}) {
  const c = COPY[lang].contact;
  return /*#__PURE__*/React.createElement("article", {
    className: "contact-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    label: c.label,
    title: c.title1,
    titleIt: c.titleIt + (c.title2 ? ' ' + c.title2 : ''),
    lede: null
  }), sectionEnabled(lang, 'contact') && /*#__PURE__*/React.createElement("section", {
    className: "section contact-page-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${c.bigEmail}`,
    className: "contact-email-cta contact-email-split reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-email-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-email-label mono"
  }, c.bigPrefix), /*#__PURE__*/React.createElement("div", {
    className: "contact-email-addr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, c.bigEmail), /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact-email-sub"
  }, c.bigSuffix)), /*#__PURE__*/React.createElement("div", {
    className: "contact-email-visual"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.image || "/assets/contact-phone.jpg",
    alt: c.imageAlt || "",
    "aria-hidden": "true",
    onError: e => {
      e.target.style.display = 'none';
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "contact-page-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "contact-page-info reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info-title mono"
  }, lang === 'pl' ? 'Dane kontaktowe' : 'Contact details'), /*#__PURE__*/React.createElement("div", {
    className: "contact-details"
  }, c.details.filter(d => !['Facebook', 'Instagram', 'LinkedIn'].includes(d.k)).map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, d.k), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, d.href ? /*#__PURE__*/React.createElement("a", {
    href: d.href,
    dangerouslySetInnerHTML: {
      __html: d.v
    }
  }) : /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: d.v
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "contact-social-icons light"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/KTBmedia.eu",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-social-icon",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(IconFacebook, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/ktbmediaeu",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-social-icon",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(IconInstagram, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/90991001",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-social-icon",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(IconLinkedIn, null)))), /*#__PURE__*/React.createElement(ContactForm, {
    lang: lang
  })))));
}
function MiniCtaBar({
  lang
}) {
  if (!sectionEnabled(lang, 'miniCta')) return null;
  const c = COPY[lang].contact || {};
  const t = lang === 'pl' ? {
    eyebrow: 'Zrób z nami marketing',
    title: 'Darmowa wycena w 24h.',
    cta: 'Napisz do nas'
  } : {
    eyebrow: 'Do marketing with us',
    title: 'Free quote in 24h.',
    cta: 'Contact us'
  };
  return /*#__PURE__*/React.createElement(SmartLink, {
    to: "/kontakt",
    className: "mini-cta-pre-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-eyebrow mono"
  }, t.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-title display"
  }, t.title), /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-cta mono"
  }, t.cta, " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mini-cta-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.image || "/assets/contact-phone.jpg",
    alt: "",
    "aria-hidden": "true"
  }))));
}
function NotFoundCar() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "not-found-car",
    viewBox: "0 0 680 280",
    role: "img",
    "aria-label": "Samochód wjeżdżający do warsztatu"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "nf-ramp",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#d8c9b2"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c6881e"
  }))), /*#__PURE__*/React.createElement("path", {
    className: "not-found-ramp",
    d: "M58 226 C156 214 220 206 310 210 C408 214 512 198 622 164",
    fill: "none",
    stroke: "url(#nf-ramp)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    className: "not-found-garage"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M452 76h128l48 52v98H452z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M482 226v-66h68v66M452 128h176M482 104h72",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "6",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("g", {
    className: "not-found-car-body"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M122 169h52l34-42h126l44 42h58c16 0 30 14 30 30v19H92v-17c0-18 12-32 30-32z",
    fill: "#efe9dc",
    stroke: "currentColor",
    strokeWidth: "8",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M218 133h46v36h-76zM278 133h48l44 36h-92z",
    fill: "#1a1a1a",
    opacity: ".12",
    stroke: "currentColor",
    strokeWidth: "6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M416 183h28M116 184h34M348 116l22-24M383 119l30-15",
    fill: "none",
    stroke: "#c6881e",
    strokeWidth: "7",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    className: "not-found-wheel not-found-wheel-left"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "170",
    cy: "220",
    r: "33",
    fill: "#1a1a1a"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "170",
    cy: "220",
    r: "13",
    fill: "#c6881e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M170 187v66M137 220h66M147 197l46 46M193 197l-46 46",
    stroke: "#efe9dc",
    strokeWidth: "4",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("g", {
    className: "not-found-wheel not-found-wheel-right"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "392",
    cy: "220",
    r: "33",
    fill: "#1a1a1a"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "392",
    cy: "220",
    r: "13",
    fill: "#c6881e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M392 187v66M359 220h66M369 197l46 46M415 197l-46 46",
    stroke: "#efe9dc",
    strokeWidth: "4",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("path", {
    className: "not-found-loose-wheel",
    d: "M572 216a27 27 0 1 0 54 0a27 27 0 1 0-54 0",
    fill: "#1a1a1a",
    stroke: "#c6881e",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M66 250h560",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    opacity: ".18"
  }));
}
function NotFoundPage({
  lang
}) {
  const t = COPY[lang].notFound;
  const [count, setCount] = useState(1);
  useEffect(() => {
    try {
      const next = Number(localStorage.getItem('ktb404count') || '0') + 1;
      localStorage.setItem('ktb404count', String(next));
      setCount(next);
    } catch (e) {
      setCount(1);
    }
  }, []);
  return /*#__PURE__*/React.createElement("article", {
    className: "not-found-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container not-found-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "not-found-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-label reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", lang === 'pl' ? 'Błąd trasy' : 'Route error'), /*#__PURE__*/React.createElement("h1", {
    className: "display not-found-title reveal"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "not-found-subtitle reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, t.subtitle)), /*#__PURE__*/React.createElement("p", {
    className: "not-found-lede reveal"
  }, t.lede), /*#__PURE__*/React.createElement("nav", {
    className: "not-found-links reveal",
    "aria-label": lang === 'pl' ? 'Proponowane strony' : 'Suggested pages'
  }, (t.suggestions || []).map((item, i) => /*#__PURE__*/React.createElement(SmartLink, {
    to: item.href,
    className: i === 0 ? 'btn' : 'btn-ghost',
    key: item.href
  }, item.label, " ", /*#__PURE__*/React.createElement(ArrowIcon, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    className: "not-found-counter mono reveal"
  }, t.counterLabel.replace('{count}', count))), /*#__PURE__*/React.createElement("div", {
    className: "not-found-visual reveal",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(NotFoundCar, null))));
}
function Footer({
  lang,
  visitedCount = 1
}) {
  const f = COPY[lang].footer;
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-wall display"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-wall-row"
  }, /*#__PURE__*/React.createElement("span", null, "Know"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7")), /*#__PURE__*/React.createElement("div", {
    className: "footer-wall-row"
  }, /*#__PURE__*/React.createElement("span", null, "Trust"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7")), /*#__PURE__*/React.createElement("div", {
    className: "footer-wall-row"
  }, /*#__PURE__*/React.createElement("span", null, "Buy", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."))), /*#__PURE__*/React.createElement("div", {
    className: "footer-wall-tag mono"
  }, "K \xB7 T \xB7 B \xA0\u2014\xA0 KTB Media \xB7 est. 2022")), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, f.copy), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, (f.links || []).map((l, i) => {
    if (typeof l === 'string') return /*#__PURE__*/React.createElement("a", {
      href: "#",
      key: i
    }, l);
    if (l.href && l.href.startsWith('/')) return /*#__PURE__*/React.createElement(SmartLink, {
      to: l.href,
      key: i
    }, l.label);
    return /*#__PURE__*/React.createElement("a", {
      href: l.href || '#',
      key: i
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/KTBmedia.eu",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(IconFacebook, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/ktbmediaeu",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(IconInstagram, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/90991001",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(IconLinkedIn, {
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "footer-trail mono",
    "aria-label": visitedPagesLabel(lang, visitedCount)
  }, /*#__PURE__*/React.createElement(CompassIcon, {
    size: 14
  }), lang === 'pl' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Odwiedzi\u0142e\u015B ", /*#__PURE__*/React.createElement(AnimatedValue, {
    value: String(visitedCount),
    duration: 700,
    startOnView: false
  }), " ", visitedPagesLabel(lang, visitedCount).split(`Odwiedzi\u0142e\u015B ${visitedCount} `)[1]) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AnimatedValue, {
    value: String(visitedCount),
    duration: 700,
    startOnView: false
  }), " pages visited this session")), /*#__PURE__*/React.createElement("div", null, "Pruszcz Gda\u0144ski \xB7 PL")));
}
function App() {
  const [lang, setLang] = useState('pl');
  const path = usePath();
  const visitedCount = useVisitedPages(path);
  useReveal([lang, path]);
  useCursor();
  useSEO(lang, path);
  useImageLoadingDefaults([lang, path]);
  const t = COPY[lang];
  const showMiniCta = path !== '/kontakt';
  let content;
  if (path.startsWith('/realizacje/')) {
    const slug = path.slice('/realizacje/'.length).replace(/\/$/, '');
    content = /*#__PURE__*/React.createElement(CasePage, {
      lang: lang,
      slug: slug
    });
  } else if (path === '/realizacje') {
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      label: t.portfolio.label,
      title: t.portfolio.title1,
      titleIt: t.portfolio.titleIt,
      lede: t.portfolio.lede
    }), /*#__PURE__*/React.createElement(Portfolio, {
      lang: lang,
      hideHead: true
    }));
  } else if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length).replace(/\/$/, '');
    content = /*#__PURE__*/React.createElement(BlogArticle, {
      lang: lang,
      slug: slug
    });
  } else if (getLandingConfig(lang, path)) {
    content = /*#__PURE__*/React.createElement(LandingPage, {
      lang: lang,
      config: getLandingConfig(lang, path)
    });
  } else if (path === '/blog') {
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
      label: t.blog.label,
      title: t.blog.title1,
      titleIt: t.blog.titleIt
    }), /*#__PURE__*/React.createElement(Blog, {
      lang: lang,
      hideHead: true
    }));
  } else if (path === '/o-nas' || path === '/about') {
    content = /*#__PURE__*/React.createElement(AboutPage, {
      lang: lang
    });
  } else if (path === '/kontakt' || path === '/contact') {
    content = /*#__PURE__*/React.createElement(ContactPage, {
      lang: lang
    });
  } else if (path === '/polityka-prywatnosci' || path === '/privacy-policy') {
    content = /*#__PURE__*/React.createElement(PrivacyPolicy, {
      lang: lang
    });
  } else if (path === '/') {
    // HOME — NO About, NO Team, NO Contact section (moved to separate pages)
    content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      lang: lang
    }), /*#__PURE__*/React.createElement(Marquee, {
      lang: lang
    }), /*#__PURE__*/React.createElement(Services, {
      lang: lang
    }), /*#__PURE__*/React.createElement(Showcase, {
      lang: lang
    }), /*#__PURE__*/React.createElement(Process, {
      lang: lang
    }), /*#__PURE__*/React.createElement(Testimonials, {
      lang: lang
    }));
  } else {
    content = /*#__PURE__*/React.createElement(NotFoundPage, {
      lang: lang
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ktb-cursor"
  }), /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang
  }), content, showMiniCta && /*#__PURE__*/React.createElement(MiniCtaBar, {
    lang: lang
  }), /*#__PURE__*/React.createElement(StickyQuoteChip, {
    lang: lang,
    path: path
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    visitedCount: visitedCount
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
