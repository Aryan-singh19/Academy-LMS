// Copies the static study desk into the Android app (android/app/src/main/assets/site)
// so the APK works offline. PDFs are skipped to keep the app small: they open from the
// live site when online, and every subject's notes also exist as Markdown in the bundle.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'android', 'app', 'src', 'main', 'assets', 'site');
const SKIP_EXT = new Set(['.pdf', '.zip', '.mp4', '.psd']);

fs.rmSync(out, { recursive: true, force: true });
let files = 0;
let bytes = 0;
['index.html', 'html', 'js', 'assets'].forEach((entry) => {
    const src = path.join(root, entry);
    if (!fs.existsSync(src)) return;
    fs.cpSync(src, path.join(out, entry), {
        recursive: true,
        filter: (file) => {
            if (fs.statSync(file).isDirectory()) return true;
            if (SKIP_EXT.has(path.extname(file).toLowerCase())) return false;
            files += 1;
            bytes += fs.statSync(file).size;
            return true;
        }
    });
});
console.log(`Bundled ${files} files (${(bytes / 1048576).toFixed(1)} MB) into ${path.relative(root, out)}`);
