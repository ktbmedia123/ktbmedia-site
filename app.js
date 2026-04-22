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
  const h = COPY[lang].hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-statue"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/assets/statue-greek.webp",
    alt: ""
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
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-right",
    "aria-hidden": "true"
  }))));
}
function Marquee({
  lang
}) {
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
    src: "/assets/statue-samurai.webp",
    alt: ""
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
function Showcase({
  lang
}) {
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
  })))))));
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
    notes: 'Notatki z procesu',
    palette: 'Paleta',
    nextCase: 'Następny projekt'
  } : {
    back: 'All work',
    challenge: 'Challenge',
    solution: 'Approach',
    results: 'Results',
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
  }, String(j + 1).padStart(2, '0'), " / ", String(images.length).padStart(2, '0'))))), /*#__PURE__*/React.createElement("div", {
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
  }, item.solution))), /*#__PURE__*/React.createElement("section", {
    className: "case-results reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-block-label mono"
  }, t.results), /*#__PURE__*/React.createElement("div", {
    className: "case-results-grid"
  }, (item.results || []).map((r, j) => /*#__PURE__*/React.createElement("div", {
    className: "case-result",
    key: j
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-result-v"
  }, r.v), /*#__PURE__*/React.createElement("div", {
    className: "case-result-k mono"
  }, r.k))))), item.notes && item.notes.length > 0 && /*#__PURE__*/React.createElement("section", {
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
  })))));
}
function Testimonials({
  lang
}) {
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
  }, t.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("section", {
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
    src: "/assets/statue-samurai.webp",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, "\"", a.quote.split(a.quoteAccent).map((part, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, part, i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, a.quoteAccent))), "\""), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, a.cap)))))));
}
function Blog({
  lang,
  hideHead
}) {
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
  return /*#__PURE__*/React.createElement("article", {
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
    }))));
    if (item.image && j === midIdx) {
      out.push(/*#__PURE__*/React.createElement("figure", {
        key: `fig-${j}`
      }, /*#__PURE__*/React.createElement("img", {
        src: item.image,
        alt: item.title1
      }), /*#__PURE__*/React.createElement("figcaption", null, item.title1, " \u2014 ", item.cat || '')));
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
  })))));
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
  }), /*#__PURE__*/React.createElement("section", {
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
    src: "/assets/contact-phone.jpg",
    alt: "",
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
    src: "/assets/contact-phone.jpg",
    alt: "",
    "aria-hidden": "true"
  }))));
}
function Footer({
  lang
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
  }))), /*#__PURE__*/React.createElement("div", null, "Pruszcz Gda\u0144ski \xB7 PL")));
}
function App() {
  const [lang, setLang] = useState('pl');
  const path = usePath();
  useReveal([lang, path]);
  useCursor();
  useSEO(lang, path);
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
  } else {
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
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ktb-cursor"
  }), /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang
  }), content, showMiniCta && /*#__PURE__*/React.createElement(MiniCtaBar, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
