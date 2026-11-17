import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const graph = fs.readFileSync(path.join(root, 'content/geo-entity.json'), 'utf8').trim();
const {latitude, longitude} = JSON.parse(graph)['@graph'].find(node => node.geo).geo;
const pattern = /<script type="application\/ld\+json" id="ktb-geo-entity-graph">[\s\S]*?<\/script>/;
const skipped = new Set(['admin', 'dist', 'output', 'node_modules', 'prototypes']);
let updated = 0;

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || skipped.has(entry.name)) continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target);
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
    const html = fs.readFileSync(target, 'utf8');
    if (!pattern.test(html)) continue;
    const synced = html.replace(pattern, `<script type="application/ld+json" id="ktb-geo-entity-graph">\n${graph}\n</script>`)
      .replace(/name="geo\.position" content="[^"]*"/g, `name="geo.position" content="${latitude};${longitude}"`)
      .replace(/name="ICBM" content="[^"]*"/g, `name="ICBM" content="${latitude}, ${longitude}"`);
    if (synced === html) continue;
    fs.writeFileSync(target, synced);
    updated += 1;
  }
}

walk(root);
console.log(`Zsynchronizowano encję GEO w ${updated} plikach HTML.`);
