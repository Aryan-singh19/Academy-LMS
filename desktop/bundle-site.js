// Copies the static study desk into desktop/site so the EXE works offline.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(__dirname, 'site');
fs.rmSync(out, { recursive: true, force: true });
['index.html', 'html', 'js', 'assets', 'admin'].forEach((entry) => {
    const src = path.join(root, entry);
    if (fs.existsSync(src)) fs.cpSync(src, path.join(out, entry), { recursive: true });
});
console.log(`Bundled static site into ${out}`);
