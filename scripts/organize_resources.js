const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const incomingDir = path.join(repoRoot, 'incoming_resources');
const outputRoot = path.join(repoRoot, 'assets', 'resources');
const manifestPath = path.join(repoRoot, 'js', 'resource-library.js');

const subjectRules = [
    { id: 'cs601', label: 'CS601', tokens: ['cs601', 'ml', 'machine'] },
    { id: 'cs602', label: 'CS602', tokens: ['cs602', 'cn', 'network'] },
    { id: 'cs603', label: 'CS603', tokens: ['cs603', 'cd', 'compiler'] },
    { id: 'cs603-cg', label: 'CS603-CG', tokens: ['graphic', 'graphics', 'cg', 'visual'] },
    { id: 'cs604', label: 'CS604', tokens: ['cs604', 'pm', 'project'] }
];

const typeRules = [
    { id: 'notes', label: 'Notes', tokens: ['note', 'notes'] },
    { id: 'assignments', label: 'Assignments', tokens: ['assignment', 'assign'] },
    { id: 'mock-papers', label: 'Mock Papers', tokens: ['mock', 'paper', 'question', 'qp'] },
    { id: 'slides', label: 'Slides', tokens: ['slide', 'slides', 'ppt', 'pptx'] },
    { id: 'resources', label: 'Other Resources', tokens: [] }
];

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function classify(ruleSet, name, fallback) {
    const lowered = name.toLowerCase();
    const match = ruleSet.find((rule) => rule.tokens.some((token) => lowered.indexOf(token) !== -1));
    return match || fallback;
}

function titleFromFilename(filename) {
    return filename
        .replace(/\.[^.]+$/, '')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function collectFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .map((name) => path.join(dir, name))
        .filter((filePath) => fs.statSync(filePath).isFile());
}

function walkResources(dir) {
    if (!fs.existsSync(dir)) return [];
    const entries = [];
    fs.readdirSync(dir).forEach((subject) => {
        const subjectDir = path.join(dir, subject);
        if (!fs.statSync(subjectDir).isDirectory()) return;
        fs.readdirSync(subjectDir).forEach((type) => {
            const typeDir = path.join(subjectDir, type);
            if (!fs.statSync(typeDir).isDirectory()) return;
            fs.readdirSync(typeDir).forEach((file) => {
                const ext = path.extname(file).slice(1).toLowerCase();
                const subjectRule = subjectRules.find((rule) => rule.id === subject) || { id: subject, label: subject.toUpperCase() };
                const typeRule = typeRules.find((rule) => rule.id === type) || { id: type, label: type };
                entries.push({
                    subject: subjectRule.id,
                    subjectLabel: subjectRule.label,
                    type: typeRule.id,
                    typeLabel: typeRule.label,
                    title: titleFromFilename(file),
                    path: `../assets/resources/${subject}/${type}/${file}`,
                    extension: ext
                });
            });
        });
    });
    return entries.sort((a, b) => a.subject.localeCompare(b.subject) || a.type.localeCompare(b.type) || a.title.localeCompare(b.title));
}

function main() {
    ensureDir(incomingDir);
    ensureDir(outputRoot);

    const files = collectFiles(incomingDir);
    const fallbackSubject = { id: 'general', label: 'General' };
    const fallbackType = typeRules[typeRules.length - 1];

    files.forEach((sourcePath) => {
        const filename = path.basename(sourcePath);
        const subject = classify(subjectRules, filename, fallbackSubject);
        const type = classify(typeRules, filename, fallbackType);
        const ext = path.extname(filename).toLowerCase();
        const baseName = slugify(filename.replace(ext, '')) || 'resource-file';
        const targetDir = path.join(outputRoot, subject.id, type.id);
        ensureDir(targetDir);
        const targetName = `${subject.id}-${type.id}-${baseName}${ext}`;
        fs.renameSync(sourcePath, path.join(targetDir, targetName));
    });

    const resources = walkResources(outputRoot);
    const manifest = `window.resourceLibrary = window.resourceLibrary || ${JSON.stringify(resources, null, 4)};\n`;
    fs.writeFileSync(manifestPath, manifest);
}

main();
