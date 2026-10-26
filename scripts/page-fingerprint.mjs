import { createHash } from 'node:crypto';
import { parse } from 'parse5';

// Ignore build IDs, scripts, layout classes and animation state. Track the text,
// crawlable links, media, metadata and structured data which describe a page.
export function pageFingerprint(html) {
  const meaningful = [];
  function walk(node) {
    const attrs = Object.fromEntries((node.attrs || []).map(attr => [attr.name, attr.value]));
    if (node.tagName === 'script') {
      if (attrs.type === 'application/ld+json') meaningful.push(['schema', node.childNodes.map(n => n.value || '').join('')]);
      return;
    }
    if (['style', 'noscript', 'svg', 'button'].includes(node.tagName)) return;
    if (node.nodeName === '#text') {
      const text = node.value.replace(/\s+/g, ' ').trim();
      if (text) meaningful.push(text);
    }
    if (node.tagName === 'a' && attrs.href) meaningful.push(['link', attrs.href]);
    if (node.tagName === 'img') meaningful.push(['image', attrs.src, attrs.alt]);
    if (node.tagName === 'video') meaningful.push(['video', attrs.src, attrs.poster]);
    if (node.tagName === 'meta' && ['description', 'robots', 'og:title', 'og:description'].includes(attrs.name || attrs.property)) meaningful.push(['meta', attrs.name || attrs.property, attrs.content]);
    if (node.tagName === 'link' && ['canonical', 'alternate'].includes(attrs.rel)) meaningful.push(['url', attrs.rel, attrs.hreflang, attrs.href]);
    for (const child of node.childNodes || []) walk(child);
  }
  walk(parse(html));
  return createHash('sha256').update(JSON.stringify(meaningful)).digest('hex');
}
