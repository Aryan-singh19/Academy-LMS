// node --test scripts/lectures/  — runs the fetcher against a mock YouTube API.
import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { tokens, bestVideo, buildEntries, loadSiteData } from './fetch_youtube_lectures.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');

test('tokens drop filler words and keep technical ones', () => {
  assert.deepEqual(tokens('Introduction to Radiation Patterns & Beamwidth | Lecture 3'), ['radiation', 'pattern', 'beamwidth']);
  assert.ok(tokens('C++ and OS basics').includes('c++'));
  assert.ok(tokens('C++ and OS basics').includes('os'));
  assert.ok(tokens('8085 Microprocessor Architecture').includes('8085'));
});

test('bestVideo picks the matching lecture and refuses weak matches', () => {
  const videos = [
    { id: 'a', title: 'Lec 1: Introduction to Antennas', position: 0 },
    { id: 'b', title: 'Lec 2: Radiation Mechanism of an Antenna', position: 1 },
    { id: 'c', title: 'Lec 3: Radiation Pattern and Beamwidth', position: 2 },
  ];
  assert.equal(bestVideo('Radiation Mechanism', videos).video.id, 'b');
  assert.equal(bestVideo('Radiation Pattern & Beamwidth', videos).video.id, 'c');
  assert.equal(bestVideo('Smith Chart', videos), null);
});

test('buildEntries: one playlist entry plus topic and unit entries with embeddable URLs', () => {
  const course = { id: 'x1', code: 'X-1', title: 'Antennas', semester: 6, units: [
    { unitNumber: 1, title: 'Antenna Fundamentals', topics: [{ id: 't1', title: 'Radiation Mechanism' }, { id: 't2', title: 'Smith Chart' }] },
  ] };
  const videos = [{ id: 'v1', title: 'Radiation Mechanism explained', position: 0 }, { id: 'v2', title: 'Antenna Fundamentals overview', position: 1 }];
  const { entries, stats } = buildEntries(course, { id: 'PL1', title: 'Antennas', channel: 'NPTEL' }, videos);
  assert.equal(entries[0].type, 'playlist');
  assert.equal(entries[1].url, 'https://www.youtube.com/watch?v=v1&list=PL1');
  assert.equal(entries[1].match, 'topic');
  assert.equal(entries[2].match, 'unit'); // Smith Chart falls back to the unit video
  assert.deepEqual(stats, { topics: 2, topicMatched: 1, unitMatched: 1 });
});

test('end to end against a mock API: filters non-embeddable videos, writes outputs, stops on quota and resumes from cache', async () => {
  const { courses, curated } = loadSiteData();
  const curatedIds = new Set(curated.map((l) => l.subject));
  const course = courses.find((c) => !curatedIds.has(c.id));
  const topicTitles = course.units.flatMap((u) => u.topics.map((t) => t.title));
  let searches = 0;
  let quotaDead = false;
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    const send = (code, body) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(body)); };
    if (u.pathname.endsWith('/search')) {
      if (quotaDead) return send(403, { error: { message: 'The request cannot be completed because you have exceeded your quota.' } });
      searches += 1;
      return send(200, { items: [{ id: { playlistId: 'PLmock' } }] });
    }
    if (u.pathname.endsWith('/playlists')) {
      return send(200, { items: [{ id: 'PLmock', snippet: { title: `${course.title} full course`, channelTitle: 'NPTEL', description: '' }, contentDetails: { itemCount: topicTitles.length + 1 } }] });
    }
    if (u.pathname.endsWith('/playlistItems')) {
      const items = topicTitles.map((t, i) => ({ snippet: { title: `Lecture ${i + 1}: ${t}`, position: i }, contentDetails: { videoId: `vid${i}` } }));
      items.push({ snippet: { title: 'Private video', position: items.length }, contentDetails: { videoId: 'private1' } });
      return send(200, { items });
    }
    if (u.pathname.endsWith('/videos')) {
      const ids = u.searchParams.get('id').split(',');
      return send(200, { items: ids.map((id) => ({ id, status: { embeddable: id !== 'vid0', privacyStatus: id === 'private1' ? 'private' : 'public', uploadStatus: 'processed' } })) });
    }
    return send(404, {});
  });
  await new Promise((r) => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}`;

  // Run in a scratch copy so the real outputs and cache are untouched.
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lect-'));
  for (const f of ['js/data.js', 'js/lecture-library.js', 'scripts/lectures/config.json', 'scripts/lectures/fetch_youtube_lectures.mjs']) {
    fs.mkdirSync(path.dirname(path.join(tmp, f)), { recursive: true });
    fs.copyFileSync(path.join(ROOT, f), path.join(tmp, f));
  }
  const script = path.join(tmp, 'scripts/lectures/fetch_youtube_lectures.mjs');
  const run = (extraEnv) => execFileSync('node', [script, `--only=${course.id}`], { env: { ...process.env, YOUTUBE_API_BASE: base, YOUTUBE_API_KEY: 'test', ...extraEnv }, encoding: 'utf8' });

  try {
    await new Promise((resolve, reject) => {
      // execFileSync would block the mock server's event loop, so run the child asynchronously.
      import('node:child_process').then(({ execFile }) => {
        execFile('node', [script, `--only=${course.id}`], { env: { ...process.env, YOUTUBE_API_BASE: base, YOUTUBE_API_KEY: 'test' } }, (err, stdout) => (err ? reject(err) : resolve(stdout)));
      });
    });
    const out = fs.readFileSync(path.join(tmp, 'scripts/lectures/api-results.js'), 'utf8');
    const ctx = { window: {} };
    new Function('window', out)(ctx.window);
    const lib = ctx.window.lectureLibraryAuto;
    assert.equal(lib[0].type, 'playlist');
    assert.ok(lib.length > 1, 'topic entries written');
    assert.ok(!lib.some((e) => e.url.includes('vid0') || e.url.includes('private1')), 'non-embeddable and private videos are skipped');
    assert.ok(lib.every((e) => /^https:\/\/www\.youtube\.com\/(watch\?v=[\w-]+&list=PLmock|playlist\?list=PLmock)$/.test(e.url)));
    assert.ok(fs.readFileSync(path.join(tmp, 'scripts/lectures/REPORT-api.md'), 'utf8').includes(course.code));

    // A second run with the quota exhausted must still rebuild the same output from cache.
    quotaDead = true;
    const before = searches;
    await new Promise((resolve, reject) => {
      import('node:child_process').then(({ execFile }) => {
        execFile('node', [script, `--only=${course.id}`], { env: { ...process.env, YOUTUBE_API_BASE: base, YOUTUBE_API_KEY: 'test' } }, (err, stdout) => (err ? reject(err) : resolve(stdout)));
      });
    });
    assert.equal(searches, before, 'cached searches are not repeated');
    assert.equal(fs.readFileSync(path.join(tmp, 'scripts/lectures/api-results.js'), 'utf8').split('\n').slice(2).join('\n'), out.split('\n').slice(2).join('\n'));
    void run;
  } finally {
    server.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('rotates to the next API key when the first one is out of quota', async () => {
  const { courses, curated } = loadSiteData();
  const curatedIds = new Set(curated.map((l) => l.subject));
  const course = courses.filter((c) => !curatedIds.has(c.id))[1];
  const titles = course.units.flatMap((u) => u.topics.map((t) => t.title));
  const keysSeen = new Set();
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    const send = (code, body) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(body)); };
    keysSeen.add(u.searchParams.get('key'));
    if (u.searchParams.get('key') === 'dead') return send(403, { error: { message: 'quotaExceeded' } });
    if (u.pathname.endsWith('/search')) return send(200, { items: [{ id: { playlistId: 'PLk' } }] });
    if (u.pathname.endsWith('/playlists')) return send(200, { items: [{ id: 'PLk', snippet: { title: course.title, channelTitle: 'Neso Academy' }, contentDetails: { itemCount: titles.length } }] });
    if (u.pathname.endsWith('/playlistItems')) return send(200, { items: titles.map((t, i) => ({ snippet: { title: t, position: i }, contentDetails: { videoId: `k${i}` } })) });
    if (u.pathname.endsWith('/videos')) return send(200, { items: u.searchParams.get('id').split(',').map((id) => ({ id, status: { embeddable: true, privacyStatus: 'public', uploadStatus: 'processed' } })) });
    return send(404, {});
  });
  await new Promise((r) => server.listen(0, r));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lect-'));
  for (const f of ['js/data.js', 'js/lecture-library.js', 'scripts/lectures/config.json', 'scripts/lectures/fetch_youtube_lectures.mjs']) {
    fs.mkdirSync(path.dirname(path.join(tmp, f)), { recursive: true });
    fs.copyFileSync(path.join(ROOT, f), path.join(tmp, f));
  }
  try {
    const { execFile } = await import('node:child_process');
    await new Promise((resolve, reject) => execFile('node', [path.join(tmp, 'scripts/lectures/fetch_youtube_lectures.mjs'), `--only=${course.id}`],
      { env: { ...process.env, YOUTUBE_API_BASE: `http://127.0.0.1:${server.address().port}`, YOUTUBE_API_KEY: '', YOUTUBE_API_KEYS: 'dead,live' } },
      (err, out) => (err ? reject(err) : resolve(out))));
    assert.deepEqual([...keysSeen].sort(), ['dead', 'live']);
    const ctx = {};
    new Function('window', fs.readFileSync(path.join(tmp, 'scripts/lectures/api-results.js'), 'utf8'))(ctx);
    assert.equal(ctx.lectureLibraryAuto.filter((e) => e.match === 'topic').length, titles.length, 'every topic matched its own video');
  } finally {
    server.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('found.json gives every non-curated topic a YouTube link', async () => {
  const { buildCourse } = await import('./build_from_found.mjs');
  const fs = await import('node:fs');
  const found = JSON.parse(fs.readFileSync(new URL('./found.json', import.meta.url), 'utf8'));
  const { courses, curated } = loadSiteData();
  const curatedIds = new Set(curated.map((c) => c.subject));
  let topics = 0; let linked = 0;
  for (const c of courses.filter((x) => !curatedIds.has(x.id))) {
    assert.ok(found[c.id], `no lectures for ${c.id}`);
    const { entries } = buildCourse(c, found[c.id]);
    topics += c.units.reduce((n, u) => n + u.topics.length, 0);
    for (const e of entries.filter((x) => x.topicId)) {
      linked += 1;
      assert.match(e.url, /^https:\/\/www\.youtube\.com\/(watch\?v=[\w-]{11}|playlist\?list=PL[\w-]{16,32})$/);
    }
  }
  assert.equal(linked, topics);
});
