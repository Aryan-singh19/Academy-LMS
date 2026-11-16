#!/usr/bin/env node
/**
 * Builds js/lecture-library-auto.js: real, embeddable YouTube lectures for every subject and
 * topic that does not have a hand-curated shelf in js/lecture-library.js.
 *
 * For each subject:
 *   1. search.list (type=playlist) for "<subject title> lectures"   (100 quota units)
 *   2. playlists.list to read each candidate's video count            (1 unit)
 *   3. pick the best playlist: trusted channel, title overlap, at least `minPlaylistVideos` videos
 *   4. playlistItems.list for all its videos                          (1 unit per 50 videos)
 *   5. videos.list (status) to keep only public, embeddable videos    (1 unit per 50 videos)
 *   6. match every topic (then every unit) to the video whose title fits it best
 *
 * Every API answer is cached in scripts/lectures/cache.json, so a run that stops on the daily
 * quota (10,000 units by default, about 95 subjects) resumes the next day without repeating work.
 *
 *   YOUTUBE_API_KEY=... node scripts/lectures/fetch_youtube_lectures.mjs [--only=ec602,me301] [--dry]
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const CONFIG = JSON.parse(fs.readFileSync(path.join(HERE, 'config.json'), 'utf8'));
const CACHE_FILE = path.join(HERE, 'cache.json');
const OUT_FILE = path.join(ROOT, 'js', 'lecture-library-auto.js');
const REPORT_FILE = path.join(HERE, 'REPORT.md');
const API = process.env.YOUTUBE_API_BASE || 'https://www.googleapis.com/youtube/v3';
// One key, or several comma-separated keys from different Google Cloud projects
// (each project has its own daily quota; the next key is used when one runs out).
const KEYS = String(process.env.YOUTUBE_API_KEYS || process.env.YOUTUBE_API_KEY || '').split(',').map((k) => k.trim()).filter(Boolean);
let keyIndex = 0;
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')).map(([k, v]) => [k, v ?? true]));

// ---------- course data (loaded the same way the browser does) ----------
export function loadSiteData(root = ROOT) {
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  for (const f of ['js/data.js', 'js/lecture-library.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
  }
  return { courses: ctx.window.coursesData || [], curated: ctx.window.lectureLibrary || [], branches: ctx.window.BRANCHES || {} };
}

// ---------- text matching ----------
const STOP = new Set(('a an the and or of for to in on with by from at as is are be into using use its it this that these those vs ' +
  'introduction intro basic basics fundamentals concept concepts part lecture lectures lec unit chapter module full course ' +
  'complete tutorial tutorials explained explanation hindi english class video videos series playlist overview example examples ' +
  'problem problems solved numerical numericals rgpv gate exam exams engineering semester sem b tech btech mtech m').split(' '));
export function tokens(text) {
  return String(text || '').toLowerCase().replace(/&/g, ' and ').split(/[^a-z0-9+#]+/)
    // Short pure numbers are lecture/part numbers ("Lecture 3"); long ones are names (8085, 8086).
    .filter((t) => t && !STOP.has(t) && !/^\d{1,3}$/.test(t)
      && (t.length >= 3 || /\d/.test(t) || ['ai', 'ml', 'os', 'db', 'ic', 'pn', 'ac', 'dc', 'rc', 'io'].includes(t)))
    .map((t) => (t.length > 4 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t));
}
export function overlap(queryTokens, candidateText) {
  if (!queryTokens.length) return 0;
  const cand = new Set(tokens(candidateText));
  return queryTokens.filter((t) => cand.has(t)).length / queryTokens.length;
}
/** Best video for a title, or null when nothing reaches the threshold. */
export function bestVideo(title, videos, threshold = CONFIG.matchThreshold) {
  const q = [...new Set(tokens(title))];
  let best = null;
  for (const v of videos) {
    const s = overlap(q, v.title);
    if (s > (best ? best.score : 0) || (best && s === best.score && v.position < best.video.position)) best = { video: v, score: s };
  }
  return best && best.score >= threshold ? best : null;
}

// ---------- YouTube API with cache ----------
const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {};
let quotaUsed = 0;
let searchesThisRun = 0;
class QuotaExceeded extends Error {}

// Keep only the fields the matcher needs, so cache.json stays small.
function trim(endpoint, body) {
  if (endpoint === 'search') return { items: (body.items || []).map((i) => ({ id: { playlistId: i.id?.playlistId } })) };
  if (endpoint === 'playlists') {
    return { items: (body.items || []).map((p) => ({ id: p.id, snippet: { title: p.snippet?.title, channelTitle: p.snippet?.channelTitle, description: String(p.snippet?.description || '').slice(0, 300) }, contentDetails: { itemCount: p.contentDetails?.itemCount } })) };
  }
  if (endpoint === 'playlistItems') {
    return { nextPageToken: body.nextPageToken, items: (body.items || []).map((i) => ({ snippet: { title: i.snippet?.title, position: i.snippet?.position }, contentDetails: { videoId: i.contentDetails?.videoId } })) };
  }
  if (endpoint === 'videos') return { items: (body.items || []).map((v) => ({ id: v.id, status: { embeddable: v.status?.embeddable, privacyStatus: v.status?.privacyStatus, uploadStatus: v.status?.uploadStatus } })) };
  return body;
}

async function yt(endpoint, params, cost) {
  const key = `${endpoint}?${new URLSearchParams(params)}`;
  if (cache[key]) return cache[key];
  if (!KEYS.length) throw new Error('No YouTube API key: set the YOUTUBE_API_KEY (or YOUTUBE_API_KEYS) secret. See scripts/lectures/README.md.');
  while (keyIndex < KEYS.length) {
    const res = await fetch(`${API}/${endpoint}?${new URLSearchParams({ ...params, key: KEYS[keyIndex] })}`);
    const body = await res.json().catch(() => ({}));
    if (res.status === 403 && JSON.stringify(body).toLowerCase().includes('quota')) {
      keyIndex += 1; // this key's daily quota is used up; try the next one
      continue;
    }
    if (!res.ok) throw new Error(`${endpoint} ${res.status}: ${body.error?.message || ''}`);
    quotaUsed += cost;
    cache[key] = trim(endpoint, body);
    return cache[key];
  }
  throw new QuotaExceeded('YouTube API daily quota reached for every key');
}

async function findPlaylist(course) {
  const trusted = new Set(CONFIG.trustedChannels.map((c) => c.toLowerCase()));
  const courseTokens = [...new Set(tokens(course.title))];
  const candidates = [];
  for (const q of [`${course.title} lectures`, `${course.title} NPTEL`]) {
    const cachedKey = `search?${new URLSearchParams({ part: 'snippet', type: 'playlist', q, maxResults: '10', relevanceLanguage: 'en', regionCode: 'IN' })}`;
    if (!cache[cachedKey]) {
      if (searchesThisRun >= Number(CONFIG.maxSearchesPerRun) * Math.max(1, KEYS.length)) throw new QuotaExceeded('search budget for this run used');
      searchesThisRun += 1;
    }
    const s = await yt('search', { part: 'snippet', type: 'playlist', q, maxResults: '10', relevanceLanguage: 'en', regionCode: 'IN' }, 100);
    const ids = (s.items || []).map((i) => i.id?.playlistId).filter(Boolean);
    if (!ids.length) continue;
    const details = await yt('playlists', { part: 'contentDetails,snippet', id: ids.join(','), maxResults: '50' }, 1);
    for (const p of details.items || []) {
      const count = p.contentDetails?.itemCount || 0;
      if (count < Number(CONFIG.minPlaylistVideos)) continue;
      const channel = p.snippet?.channelTitle || '';
      const score = overlap(courseTokens, `${p.snippet?.title} ${p.snippet?.description || ''}`) * 3
        + (trusted.has(channel.toLowerCase()) ? 2 : 0)
        + Math.min(count, 60) / 60;
      candidates.push({ id: p.id, title: p.snippet?.title || '', channel, count, score });
    }
    if (candidates.some((c) => c.score >= 3)) break; // good enough; skip the second search
  }
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0] && candidates[0].score >= 1.5 ? candidates[0] : null;
}

async function playlistVideos(playlistId) {
  const videos = [];
  let pageToken = '';
  do {
    const params = { part: 'snippet,contentDetails', playlistId, maxResults: '50' };
    if (pageToken) params.pageToken = pageToken;
    const page = await yt('playlistItems', params, 1);
    for (const it of page.items || []) {
      const id = it.contentDetails?.videoId;
      if (id) videos.push({ id, title: it.snippet?.title || '', position: it.snippet?.position ?? videos.length });
    }
    pageToken = page.nextPageToken || '';
  } while (pageToken && videos.length < 400);
  // Keep only public, embeddable, processed videos.
  const ok = new Set();
  for (let i = 0; i < videos.length; i += 50) {
    const batch = videos.slice(i, i + 50).map((v) => v.id);
    const st = await yt('videos', { part: 'status', id: batch.join(','), maxResults: '50' }, 1);
    for (const v of st.items || []) {
      if (v.status?.embeddable && v.status?.privacyStatus === 'public' && v.status?.uploadStatus === 'processed') ok.add(v.id);
    }
  }
  return videos.filter((v) => ok.has(v.id) && !/^(private|deleted) video$/i.test(v.title));
}

// ---------- build entries ----------
export function buildEntries(course, playlist, videos) {
  const base = { semester: course.semester, subject: course.id, subjectCode: course.code, subjectLabel: course.title };
  const url = (v) => `https://www.youtube.com/watch?v=${v.id}&list=${playlist.id}`;
  const entries = [{
    ...base,
    title: `${course.title}: full lecture series`,
    lecturer: playlist.channel,
    type: 'playlist',
    typeLabel: 'Full course playlist',
    topics: course.units.map((u) => u.title),
    description: `"${playlist.title}" by ${playlist.channel} (${videos.length} lectures). Topic videos below are taken from this series.`,
    url: `https://www.youtube.com/playlist?list=${playlist.id}`,
    lectureKey: `${course.id}-auto-playlist`,
  }];
  const stats = { topics: 0, topicMatched: 0, unitMatched: 0 };
  for (const unit of course.units) {
    const unitMatch = bestVideo(`${unit.title}`, videos, 0.34);
    for (const [i, topic] of unit.topics.entries()) {
      stats.topics += 1;
      const m = bestVideo(topic.title, videos);
      const pick = m || (unitMatch ? { video: unitMatch.video, score: unitMatch.score, viaUnit: true } : null);
      if (!pick) continue;
      if (m) stats.topicMatched += 1; else stats.unitMatched += 1;
      entries.push({
        ...base,
        title: topic.title,
        unit: unit.unitNumber,
        topicId: topic.id,
        lecturer: playlist.channel,
        type: 'video',
        typeLabel: `Unit ${unit.unitNumber}: ${unit.title}`,
        topics: [topic.title],
        description: m
          ? `"${pick.video.title}" (lecture ${pick.video.position + 1} of ${playlist.channel}'s series).`
          : `Unit lecture "${pick.video.title}" covers ${unit.title}; no video in the series is about this topic alone.`,
        url: url(pick.video),
        lectureKey: `${course.id}-u${unit.unitNumber}-t${i + 1}`,
        match: m ? 'topic' : 'unit',
      });
    }
  }
  return { entries, stats };
}

function writeOutputs(results, courses, curatedIds, branches) {
  const all = results.flatMap((r) => r.entries);
  const header = `// Generated by scripts/lectures/fetch_youtube_lectures.mjs on ${new Date().toISOString().slice(0, 10)}. Do not edit by hand.\n`
    + '// Real, embeddable YouTube lectures for subjects without a hand-curated shelf (js/lecture-library.js).\n';
  fs.writeFileSync(OUT_FILE, `${header}window.lectureLibraryAuto = ${JSON.stringify(all, null, 1)};\n`);

  const byId = Object.fromEntries(results.map((r) => [r.course.id, r]));
  let md = `# Lecture coverage\n\nGenerated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC by \`scripts/lectures/fetch_youtube_lectures.mjs\`.\n\n`;
  const total = { subjects: 0, withPlaylist: 0, topics: 0, topicMatched: 0, unitMatched: 0 };
  const rows = [];
  for (const c of courses) {
    if (curatedIds.has(c.id)) continue;
    total.subjects += 1;
    const r = byId[c.id];
    const t = c.units.reduce((n, u) => n + u.topics.length, 0);
    total.topics += t;
    if (r?.playlist) {
      total.withPlaylist += 1;
      total.topicMatched += r.stats.topicMatched;
      total.unitMatched += r.stats.unitMatched;
    }
    rows.push(`| ${c.code} | ${c.title} | ${c.semester} | ${r?.playlist ? `[${r.playlist.channel}](https://www.youtube.com/playlist?list=${r.playlist.id})` : (r?.status || 'pending')} | ${r?.playlist ? `${r.stats.topicMatched}/${t}` : '-'} | ${r?.playlist ? r.stats.unitMatched : '-'} |`);
  }
  md += `| | |\n|---|---|\n| Subjects (without curated shelves) | ${total.subjects} |\n| With a lecture playlist | ${total.withPlaylist} |\n`
    + `| Topics with their own video | ${total.topicMatched} of ${total.topics} |\n| Topics using their unit's lecture | ${total.unitMatched} |\n\n`
    + 'Topics without either keep the YouTube search shelf for their unit.\n\n'
    + '| Code | Subject | Sem | Playlist | Topic videos | Unit videos |\n|---|---|---|---|---|---|\n' + rows.join('\n') + '\n';
  fs.writeFileSync(REPORT_FILE, md);
  return total;
}

async function main() {
  const { courses, curated, branches } = loadSiteData();
  const curatedIds = new Set(curated.map((l) => l.subject));
  const only = args.only ? new Set(String(args.only).split(',')) : null;
  const todo = courses.filter((c) => !curatedIds.has(c.id) && (!only || only.has(c.id)));
  const results = [];
  let stopped = '';
  for (const course of todo) {
    if (stopped) { results.push({ course, entries: [], status: 'pending (next run)' }); continue; }
    try {
      const playlist = await findPlaylist(course);
      if (!playlist) { results.push({ course, entries: [], status: 'no suitable playlist found' }); continue; }
      const videos = await playlistVideos(playlist.id);
      if (videos.length < Number(CONFIG.minPlaylistVideos)) { results.push({ course, entries: [], status: 'playlist has too few embeddable videos' }); continue; }
      const { entries, stats } = buildEntries(course, playlist, videos);
      results.push({ course, playlist, entries, stats });
      console.log(`${course.code.padEnd(10)} ${playlist.channel.slice(0, 28).padEnd(28)} topics ${stats.topicMatched}+${stats.unitMatched}/${stats.topics}`);
    } catch (e) {
      if (e instanceof QuotaExceeded) { stopped = e.message; results.push({ course, entries: [], status: 'pending (next run)' }); console.log(`stopping: ${e.message}`); continue; }
      throw e;
    }
  }
  if (!args.dry) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache));
    const total = writeOutputs(results, courses, curatedIds, branches);
    console.log(`\n${total.withPlaylist}/${total.subjects} subjects, ${total.topicMatched} topic videos, ${total.unitMatched} unit videos; quota used this run: ${quotaUsed}${stopped ? ` (stopped: ${stopped})` : ''}`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((e) => { console.error(e.message); process.exit(1); });
}
