// node add.mjs '<json>'  merges subjects into found.json (videos appended, playlist replaced if given)
import fs from 'node:fs';
const f = new URL('./found.json', import.meta.url);
const d = JSON.parse(fs.readFileSync(f, 'utf8'));
const add = JSON.parse(process.argv[2]);
for (const [k, v] of Object.entries(add)) {
  const cur = d[k] || { videos: [] };
  if (v.p) cur.playlist = { id: v.p[0], title: v.p[1], by: v.p[2] };
  for (const x of v.v || []) cur.videos.push({ u: x[0], id: x[1], t: x[2], by: x[3] || cur.playlist?.by || 'YouTube' });
  d[k] = cur;
}
fs.writeFileSync(f, JSON.stringify(d, null, 1) + '\n');
console.log(Object.keys(d).length, 'subjects');
