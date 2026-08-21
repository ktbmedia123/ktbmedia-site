import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const graph = fs.readFileSync(path.join(root, 'content/geo-entity.json'), 'utf8').trim();
const pattern = /<script type="application\/ld\+json" id="ktb-geo-entity-graph">[\s\S]*?<\/script>/;
let updated = 0;

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'admin') continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target);
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
    const html = fs.readFileSync(target, 'utf8');
    if (!pattern.test(html)) continue;
    fs.writeFileSync(target, html.replace(pattern, `<script type="application/ld+json" id="ktb-geo-entity-graph">\n${graph}\n</script>`));
    updated += 1;
  }
}

walk(root);
console.log(`Zsynchronizowano encję GEO w ${updated} plikach HTML.`);
