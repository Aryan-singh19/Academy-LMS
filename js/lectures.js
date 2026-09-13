let activeLectureSemester = '5';
let activeLectureSubject = 'all';
let activeLectureKey = '';
let lectureSearchQuery = '';
let playlistFilterQuery = '';
let currentEmbedPlayerMode = 'standard'; // 'standard' (youtube-nocookie) or 'direct' (youtube)
const GUEST_LECTURE_DEMO_LIMIT = 2;

let lectureChatState = {
    local: { messages: [], onlineCount: 0 },
    global: { messages: [], onlineCount: 0 }
};
let lecturePollingTimer = null;
let lectureFetchInFlight = false;

function isLectureLockedForGuest(lecture, indexInFiltered) {
    const isAuthed = window.ACADEMY && window.ACADEMY.isAuthenticated();
    if (isAuthed) return false;
    // In guest demo mode, allow free access to the first 2 lectures of the active view
    return indexInFiltered >= GUEST_LECTURE_DEMO_LIMIT;
}

function promptGuestLecture(title) {
    if (window.ACADEMY && typeof window.ACADEMY.showSignInPrompt === 'function') {
        window.ACADEMY.showSignInPrompt({
            title: 'Sign In to Access Full Video Masterclasses',
            reason: `"${title}" is part of the full university curriculum. Sign in with Google to watch all 95+ curated lectures, solved numerical series, and join live study discussions.`
        });
    }
}

const esc = (val) => {
    if (window.ACADEMY && typeof window.ACADEMY.escapeHtml === 'function') {
        return window.ACADEMY.escapeHtml(val);
    }
    if (window.ACADEMY && typeof window.ACADEMY.escapeForHtml === 'function') {
        return window.ACADEMY.escapeForHtml(val);
    }
    return String(val || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

const ALL_LECTURE_SUBJECTS = [
    // Semester 5
    { id: 'cs501', semester: 5, code: 'CS-501', label: 'CS-501 (TOC)', fullLabel: 'Theory of Computation', aliases: ['cs501', '501', 'toc', 'cs-501', 'computation', 'automata'] },
    { id: 'cs502', semester: 5, code: 'CS-502', label: 'CS-502 (DBMS)', fullLabel: 'Database Management Systems', aliases: ['cs502', '502', 'dbms', 'cs-502', 'database', 'sql'] },
    { id: 'cs503', semester: 5, code: 'CS-503', label: 'CS-503 (DA)', fullLabel: 'Data Analytics', aliases: ['cs503', '503', 'da', 'analytics', 'cs-503', 'dataanalytics'] },
    { id: 'cs503-cs', semester: 5, code: 'CS-503-CS', label: 'CS-503-CS (Cyber)', fullLabel: 'Cyber Security', aliases: ['cs503-cs', 'cs503cs', '503cs', 'cyber', 'cybersecurity'] },
    { id: 'cs504', semester: 5, code: 'CS-504', label: 'CS-504 (Web)', fullLabel: 'Web Technology', aliases: ['cs504', '504', 'web', 'wt', 'cs-504', 'webtech'] },

    // Semester 6
    { id: 'cs601', semester: 6, code: 'CS-601', label: 'CS-601 (ML)', fullLabel: 'Machine Learning', aliases: ['cs601', '601', 'ml', 'cs-601', 'machinelearning'] },
    { id: 'cs602', semester: 6, code: 'CS-602', label: 'CS-602 (CN)', fullLabel: 'Computer Networks', aliases: ['cs602', '602', 'cn', 'networks', 'cs-602', 'computernetworks'] },
    { id: 'cs603', semester: 6, code: 'CS-603', label: 'CS-603 (CD)', fullLabel: 'Compiler Design', aliases: ['cs603', '603', 'cd', 'compiler', 'cs-603', 'compilerdesign'] },
    { id: 'cs603-cg', semester: 6, code: 'CS-603-CG', label: 'CS-603-CG (Graphics)', fullLabel: 'Computer Graphics', aliases: ['cs603-cg', 'cs603cg', '603cg', 'graphics', 'cg'] },
    { id: 'cs604', semester: 6, code: 'CS-604', label: 'CS-604 (PM)', fullLabel: 'Project Management', aliases: ['cs604', '604', 'pm', 'cs-604', 'projectmanagement', 'spm'] },

    // Semester 7
    { id: 'cs701', semester: 7, code: 'CS-701', label: 'CS-701 (Arch)', fullLabel: 'Software Architectures', aliases: ['cs701', '701', 'arch', 'sa', 'cs-701', 'softwarearchitecture'] },
    { id: 'cs702', semester: 7, code: 'CS-702', label: 'CS-702 (BigData)', fullLabel: 'Big Data Analytics', aliases: ['cs702-bd', 'cs702', '702', 'bd', 'bigdata', 'cs702bd', 'cs-702'] },
    { id: 'cs702-wmc', semester: 7, code: 'CS-702-WMC', label: 'CS-702-WMC (Wireless)', fullLabel: 'Wireless & Mobile Computing', aliases: ['cs702-wmc', 'cs702wmc', '702wmc', 'wmc', 'wireless', 'mobile'] },
    { id: 'cs703', semester: 7, code: 'CS-703', label: 'CS-703 (Crypto)', fullLabel: 'Cryptography & Info Security', aliases: ['cs703-cis', 'cs703', '703', 'cis', 'crypto', 'infosec', 'cs703cis', 'cs-703'] },
    { id: 'cs703-dm', semester: 7, code: 'CS-703-DM', label: 'CS-703-DM (Disaster)', fullLabel: 'Disaster Management', aliases: ['cs703-dm', 'cs703dm', '703dm', 'dm', 'disaster', 'disastermgmt'] }
];

function getLectureSemesters() {
    return [
        { id: '5', label: 'Semester 5' },
        { id: '6', label: 'Semester 6' },
        { id: '7', label: 'Semester 7' }
    ];
}

function getLectureSubjects() {
    const list = ALL_LECTURE_SUBJECTS.filter((s) => String(s.semester) === String(activeLectureSemester));
    const allLabel = `All Sem ${activeLectureSemester}`;
    return [{ id: 'all', label: allLabel, fullLabel: `All Sem ${activeLectureSemester} Subjects` }, ...list];
}

function lectureKeyFor(lecture) {
    return lecture.lectureKey || `${lecture.subject}-${lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function getMatchedSubjectIds(query) {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return null;
    const qNorm = q.replace(/[^a-z0-9]/g, '');
    if (!qNorm) return [];

    const matched = ALL_LECTURE_SUBJECTS.filter((sub) => {
        const codeNorm = (sub.code || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const idNorm = sub.id.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (codeNorm.includes(qNorm) || qNorm.includes(codeNorm)) return true;
        if (idNorm.includes(qNorm) || qNorm.includes(idNorm)) return true;
        return (sub.aliases || []).some((alias) => {
            const aNorm = alias.toLowerCase().replace(/[^a-z0-9]/g, '');
            return aNorm.includes(qNorm) || qNorm.includes(aNorm);
        });
    });

    return matched.map((s) => s.id);
}

function isLectureMatchSubject(lectureSubject, targetSubjectId) {
    if (!lectureSubject || !targetSubjectId) return false;
    if (lectureSubject === targetSubjectId) return true;
    if (targetSubjectId === 'cs702' && (lectureSubject === 'cs702-bd' || lectureSubject === 'cs702')) return true;
    if (targetSubjectId === 'cs702-bd' && (lectureSubject === 'cs702-bd' || lectureSubject === 'cs702')) return true;
    if (targetSubjectId === 'cs703' && (lectureSubject === 'cs703-cis' || lectureSubject === 'cs703')) return true;
    if (targetSubjectId === 'cs703-cis' && (lectureSubject === 'cs703-cis' || lectureSubject === 'cs703')) return true;
    return false;
}

function getFilteredLectures() {
    const matchedSubjectIds = getMatchedSubjectIds(lectureSearchQuery);

    return (window.lectureLibrary || []).filter((item) => {
        // If user typed a search query but it didn't match any subject code/alias
        if (lectureSearchQuery && matchedSubjectIds && matchedSubjectIds.length === 0) {
            return false;
        }

        // Code-wise search: ONLY show lectures matching the found subject code(s)
        if (matchedSubjectIds && matchedSubjectIds.length > 0) {
            const matchesCode = matchedSubjectIds.some((subId) => isLectureMatchSubject(item.subject, subId));
            if (!matchesCode) return false;
        }

        // Semester filter (only when not searching for a specific code from another semester)
        if (activeLectureSemester !== 'all' && String(item.semester) !== String(activeLectureSemester)) {
            if (!matchedSubjectIds || matchedSubjectIds.length === 0) {
                return false;
            }
        }

        // Subject tab filter (when no code search is active)
        if (activeLectureSubject !== 'all' && (!matchedSubjectIds || matchedSubjectIds.length === 0)) {
            if (!isLectureMatchSubject(item.subject, activeLectureSubject)) {
                return false;
            }
        }

        return true;
    });
}

function getActiveLecture() {
    const lectures = getFilteredLectures();
    const matched = lectures.find((item) => lectureKeyFor(item) === activeLectureKey);
    return matched || lectures[0] || null;
}

function renderLecturePage() {
    renderLectureTabs();
    initTopSearchBar();
    renderPlaylistList();
    renderLectureViewer();
}

function renderLectureTabs() {
    const semContainer = document.getElementById('lectureSemesterTabs');
    if (semContainer) {
        semContainer.innerHTML = getLectureSemesters().map((sem) => `
            <button type="button" onclick="setLectureSemester('${sem.id}')" class="course-pill ${activeLectureSemester === sem.id ? 'course-pill-active' : ''}">
                ${sem.label}
            </button>
        `).join('');
    }
}

function initTopSearchBar() {
    const input = document.getElementById('lectureSearchInput');
    const clearBtn = document.getElementById('lectureClearSearchBtn');
    if (input) {
        input.value = lectureSearchQuery;
        input.oninput = (e) => {
            setLectureSearch(e.target.value);
        };
    }
    if (clearBtn) {
        if (lectureSearchQuery) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
    }
}

function setLectureSearch(query) {
    lectureSearchQuery = String(query || '').trim();
    const clearBtn = document.getElementById('lectureClearSearchBtn');
    if (clearBtn) {
        if (lectureSearchQuery) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
    }

    const matchedIds = getMatchedSubjectIds(lectureSearchQuery);
    if (matchedIds && matchedIds.length > 0) {
        const found = ALL_LECTURE_SUBJECTS.find((s) => matchedIds.includes(s.id));
        if (found) {
            if (activeLectureSemester !== 'all' && String(found.semester) !== String(activeLectureSemester)) {
                activeLectureSemester = String(found.semester);
            }
            if (matchedIds.length === 1) {
                activeLectureSubject = found.id;
            }
        }
    }
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLectureTabs();
    renderPlaylistList();
    renderLectureViewer();
}

function searchByCode(code) {
    if (!code || code === 'ALL') {
        activeLectureSubject = 'all';
        clearLectureSearch();
        return;
    }
    setLectureSearch(code);
}

function clearLectureSearch() {
    lectureSearchQuery = '';
    const input = document.getElementById('lectureSearchInput');
    if (input) input.value = '';
    const clearBtn = document.getElementById('lectureClearSearchBtn');
    if (clearBtn) clearBtn.classList.add('hidden');

    const first = getFilteredLectures()[0];
    activeLectureKey = first ? lectureKeyFor(first) : '';
    renderLectureTabs();
    renderPlaylistList();
    renderLectureViewer();
}

function handlePlaylistFilter(event) {
    playlistFilterQuery = (event && event.target ? event.target.value : '').toLowerCase().trim();
    const clearBtn = document.getElementById('playlistClearFilterBtn');
    if (clearBtn) {
        if (playlistFilterQuery) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
    }
    renderPlaylistList();
}

function clearPlaylistFilter() {
    playlistFilterQuery = '';
    const input = document.getElementById('playlistFilterInput');
    if (input) input.value = '';
    const clearBtn = document.getElementById('playlistClearFilterBtn');
    if (clearBtn) clearBtn.classList.add('hidden');
    renderPlaylistList();
}

function renderPlaylistList() {
    const container = document.getElementById('lectureListContainer');
    const totalBadge = document.getElementById('playlistTotalBadge');
    const isAuthed = window.ACADEMY && window.ACADEMY.isAuthenticated();

    let lectures = getFilteredLectures();
    if (playlistFilterQuery) {
        lectures = lectures.filter((item) => {
            const title = (item.title || '').toLowerCase();
            const lecturer = (item.lecturer || '').toLowerCase();
            const code = (item.subjectCode || item.subject || '').toLowerCase();
            const topics = (item.topics || []).join(' ').toLowerCase();
            return title.includes(playlistFilterQuery) || lecturer.includes(playlistFilterQuery) || code.includes(playlistFilterQuery) || topics.includes(playlistFilterQuery);
        });
    }

    if (totalBadge) {
        if (isAuthed) {
            totalBadge.textContent = `${lectures.length} video${lectures.length === 1 ? '' : 's'}`;
        } else {
            totalBadge.textContent = `${lectures.length} videos (2 free demo)`;
        }
    }

    if (!container) return;

    if (!lectures.length) {
        container.innerHTML = `
            <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-2">
                <p class="text-xs font-bold text-amber-300">No videos found</p>
                <p class="text-[11px] text-slate-400">
                    No videos match your filter query.
                </p>
                <button type="button" onclick="clearPlaylistFilter()" class="secondary-cta text-[11px] !py-1 !px-2.5 mt-1">
                    Clear Filter
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = lectures.map((lecture, idx) => {
        const isSelected = activeLectureKey === lectureKeyFor(lecture);
        const isPlaylist = lecture.type === 'playlist';
        const isLocked = isLectureLockedForGuest(lecture, idx);
        const semColor = lecture.semester === 5 ? 'blue' : lecture.semester === 6 ? 'emerald' : 'purple';

        return `
            <div
                class="playlist-item w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${isSelected ? 'bg-blue-600/20 border-blue-500/60 shadow-md shadow-blue-500/10 text-white ring-1 ring-blue-500' : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/80 hover:border-slate-700 text-slate-300'}"
                onclick="handlePlaylistCardClick('${lectureKeyFor(lecture)}', ${isLocked}, '${window.ACADEMY.escapeForAttribute(lecture.title)}')"
            >
                <div class="shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-mono text-[11px] font-bold ${isLocked ? 'bg-slate-800 text-amber-400' : isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}">
                    ${isLocked ? '🔒' : isSelected ? '▶' : (idx + 1)}
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 leading-none">
                        <span class="text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded bg-${semColor}-500/15 text-${semColor}-300 border border-${semColor}-500/30 shrink-0">
                            ${esc(lecture.subjectCode || lecture.subject.toUpperCase())}
                        </span>
                        <span class="text-[10px] font-medium text-slate-400 shrink-0 truncate">
                            ${esc(lecture.typeLabel || (isPlaylist ? 'Exam Prep Series' : 'Masterclass'))}
                        </span>
                        ${isLocked ? '<span class="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">Sign In</span>' : ''}
                    </div>
                    <h4 class="text-xs font-semibold text-white mt-1 leading-snug line-clamp-2" title="${window.ACADEMY.escapeForAttribute(lecture.title)}">
                        ${esc(lecture.title)}
                    </h4>
                    <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                        <span class="truncate max-w-[170px] text-slate-400 font-medium">${esc(lecture.lecturer)}</span>
                        ${isSelected ? '<span class="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono">Now Playing</span>' : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function handlePlaylistCardClick(lectureKey, isLocked, title) {
    if (isLocked) {
        promptGuestLecture(title);
        // Also select it so they can view description and YouTube link
        selectLecture(lectureKey);
        return;
    }
    selectLecture(lectureKey);
}

function renderLectureViewer() {
    const target = document.getElementById('lectureViewer');
    const lectures = getFilteredLectures();
    const lecture = getActiveLecture();
    if (!lecture) {
        target.innerHTML = '<p class="text-slate-400">No lecture selected.</p>';
        document.getElementById('lectureCommunity').innerHTML = '';
        return;
    }

    const currentIdx = lectures.findIndex((l) => lectureKeyFor(l) === lectureKeyFor(lecture));
    const isLocked = isLectureLockedForGuest(lecture, currentIdx >= 0 ? currentIdx : 0);
    const semColor = lecture.semester === 5 ? 'blue' : lecture.semester === 6 ? 'emerald' : 'purple';
    const isPlaylist = lecture.type === 'playlist';
    const topicBadges = (lecture.topics || []).map((t) =>
        `<span class="px-2.5 py-1 rounded-md text-xs bg-slate-900/80 text-slate-300 border border-slate-700 font-mono">#${esc(t)}</span>`
    ).join('');

    target.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-${semColor}-500/15 text-${semColor}-300 border border-${semColor}-500/30">
                    Semester ${lecture.semester} • ${esc(lecture.subjectCode || lecture.subject.toUpperCase())}
                </span>
                <span class="text-xs font-semibold text-slate-400 hidden sm:inline">
                    ${esc(lecture.subjectLabel)}
                </span>
            </div>
            <span class="px-2.5 py-0.5 rounded text-xs font-semibold ${isPlaylist ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'}">
                ${esc(lecture.typeLabel || (isPlaylist ? 'Exam Prep Series' : 'Deep-Dive Masterclass'))}
            </span>
        </div>

        <h2 class="text-2xl font-extrabold text-white mt-3 leading-tight">${esc(lecture.title)}</h2>

        <div class="flex flex-wrap items-center justify-between gap-3 mt-2">
            <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                <span class="font-bold text-white">${esc(lecture.lecturer)}</span>
                <span class="text-slate-500">•</span>
                <span class="text-xs text-slate-400">YouTube Academic Source</span>
            </div>
            <div class="flex flex-wrap items-center gap-2">
                <a class="secondary-cta text-xs !py-1.5 !px-3 inline-flex items-center gap-1.5" href="${lecture.url}" target="_blank" rel="noreferrer">
                    <svg class="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    <span>Open on YouTube</span>
                </a>
                <button type="button" id="copyUrlBtn" onclick="copyLectureLink('${lecture.url}', 'copyUrlBtn')" class="secondary-cta text-xs !py-1.5 !px-3 inline-flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                    <span>Copy Link</span>
                </button>
                <a class="secondary-cta text-xs !py-1.5 !px-3" href="../index.html" title="Open syllabus notes">
                    <span>Study Notes</span>
                </a>
            </div>
        </div>

        ${renderLectureEmbed(lecture, isLocked)}

        <div class="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400">Curriculum Overview &amp; Learning Objectives</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${esc(lecture.description)}</p>
            ${topicBadges ? `
                <div class="pt-2 border-t border-slate-800/80">
                    <p class="text-xs text-slate-400 mb-1.5 font-semibold">Key Topics Covered:</p>
                    <div class="flex flex-wrap gap-2">${topicBadges}</div>
                </div>
            ` : ''}
        </div>
    `;

    renderLectureCommunity();
    queueLecturePresence();
}

function copyLectureLink(url, btnId) {
    if (!navigator.clipboard) {
        const input = document.createElement('textarea');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    } else {
        navigator.clipboard.writeText(url).catch((err) => console.error('Clipboard write failed', err));
    }

    const btn = document.getElementById(btnId);
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>✓ Copied!</span>';
        btn.classList.add('!bg-emerald-600', '!text-white', '!border-emerald-500');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('!bg-emerald-600', '!text-white', '!border-emerald-500');
        }, 2000);
    }
}

function reloadLecturePlayer() {
    const iframe = document.getElementById('lecturePlayerIframe');
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = 'about:blank';
        setTimeout(() => {
            iframe.src = currentSrc;
        }, 100);
    }
}

function toggleEmbedPlayerMode() {
    currentEmbedPlayerMode = currentEmbedPlayerMode === 'standard' ? 'direct' : 'standard';
    renderLectureViewer();
}

function renderLectureEmbed(lecture, isLocked) {
    if (isLocked) {
        return `
            <div class="mt-4 p-8 sm:p-12 rounded-xl bg-slate-950/90 border border-blue-500/30 text-center space-y-4 shadow-2xl">
                <div class="w-14 h-14 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-2xl">
                    🔒
                </div>
                <div class="space-y-1.5 max-w-md mx-auto">
                    <h3 class="text-base sm:text-lg font-bold text-white">Full Video Available with Sign-In</h3>
                    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        You are currently in <strong>Guest Demo Mode</strong> (first 2 videos free). Sign in with your Google account to unlock all 95+ curated lectures, playlists, solved numerical walkthroughs, and peer study chats.
                    </p>
                </div>
                <div class="pt-2 flex flex-wrap justify-center gap-3">
                    <button type="button" onclick="promptGuestLecture('${esc(lecture.title)}')" class="primary-cta text-xs !py-2.5 !px-5 shadow-lg shadow-blue-500/20">
                        Sign In with Google to Stream
                    </button>
                    <a href="${window.ACADEMY.escapeForAttribute(lecture.url)}" target="_blank" rel="noreferrer" class="secondary-cta text-xs !py-2.5 !px-4">
                        Watch Directly on YouTube
                    </a>
                </div>
            </div>
        `;
    }

    const embedUrl = normalizeLectureUrl(lecture.url);
    const embeddable = /^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\//.test(embedUrl);

    if (!embeddable) {
        return `
            <div class="study-rail-block mt-5 p-6 text-center space-y-3">
                <p class="text-base font-semibold text-white">Direct Academic Source</p>
                <p class="text-sm text-slate-300 max-w-lg mx-auto">This curated lecture or playlist is best experienced directly on YouTube.</p>
                <a class="primary-cta inline-flex items-center gap-2 !py-2.5 !px-5" href="${window.ACADEMY.escapeForAttribute(lecture.url)}" target="_blank" rel="noreferrer">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    <span>Watch Full Lecture on YouTube</span>
                </a>
            </div>
        `;
    }

    return `
        <div class="mt-4 relative w-full aspect-video rounded-xl bg-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
            <iframe 
                id="lecturePlayerIframe"
                src="${embedUrl}" 
                title="${window.ACADEMY.escapeForAttribute(lecture.title)}" 
                class="w-full h-full border-0 block" 
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-slate-400">
            <div class="flex items-center gap-2">
                <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="font-medium text-slate-300">Clean Stream Active</span>
                <span class="text-slate-600">•</span>
                <button type="button" onclick="reloadLecturePlayer()" class="text-blue-400 hover:text-blue-300 underline font-medium" title="Reload player iframe">
                    Reload Player
                </button>
            </div>
            <div class="flex items-center gap-3">
                <button type="button" onclick="toggleEmbedPlayerMode()" class="text-slate-400 hover:text-slate-200 underline font-medium text-[11px]" title="Toggle embed host domain">
                    ${currentEmbedPlayerMode === 'standard' ? 'Alternative Domain' : 'Standard Domain'}
                </button>
                <span class="text-slate-600">•</span>
                <a href="${window.ACADEMY.escapeForAttribute(lecture.url)}" target="_blank" rel="noreferrer" class="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                    <span>Watch in YouTube Tab</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
            </div>
        </div>
    `;
}

function renderLectureCommunity() {
    const lecture = getActiveLecture();
    const community = document.getElementById('lectureCommunity');
    if (!lecture) {
        community.innerHTML = '';
        return;
    }

    community.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-5">
            <section class="study-rail-block">
                <div class="section-head">
                    <div>
                        <h3 class="text-sm font-bold text-white">Lecture Room Discussion</h3>
                        <p class="text-xs text-slate-400">Scoped to this video &amp; topic</p>
                    </div>
                    <span class="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">${formatOnlineCount(lectureChatState.local.onlineCount)}</span>
                </div>
                <div class="chat-thread mb-4 mt-3 max-h-60 overflow-y-auto space-y-2">
                    ${renderLectureMessages('local')}
                </div>
                <div class="space-y-3">
                    <textarea id="localLectureMessage" class="note-input !min-h-[5.5rem] text-sm" placeholder="Ask about this video, share timestamps for tough derivations, or drop revision tips..."></textarea>
                    <button type="button" onclick="sendLectureMessage('local')" class="primary-cta text-xs !py-2 !px-4">Send to this lecture room</button>
                </div>
            </section>
            <section class="study-rail-block">
                <div class="section-head">
                    <div>
                        <h3 class="text-sm font-bold text-white">Global Student Lounge</h3>
                        <p class="text-xs text-slate-400">All subjects &amp; peer guidance</p>
                    </div>
                    <span class="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">${formatOnlineCount(lectureChatState.global.onlineCount)}</span>
                </div>
                <div class="chat-thread mb-4 mt-3 max-h-60 overflow-y-auto space-y-2">
                    ${renderLectureMessages('global')}
                </div>
                <div class="space-y-3">
                    <textarea id="globalLectureMessage" class="note-input !min-h-[5.5rem] text-sm" placeholder="Discuss exam strategy, syllabus weightage, and general engineering tips..."></textarea>
                    <button type="button" onclick="sendLectureMessage('global')" class="secondary-cta text-xs !py-2 !px-4">Send to global lounge</button>
                </div>
            </section>
        </div>
    `;
}

function formatOnlineCount(count) {
    const total = Number.isFinite(Number(count)) ? Number(count) : 0;
    return `${total} online`;
}

function renderLectureMessages(scope) {
    const messages = lectureChatState[scope].messages || [];
    if (!messages.length) {
        return '<p class="text-xs text-slate-400 italic py-2">No messages in this room yet. Post a question or note to start the discussion.</p>';
    }
    return messages.map((message) => `
        <article class="chat-message p-3 rounded-lg bg-slate-900/70 border border-slate-800">
            <div class="flex items-center justify-between gap-2">
                <strong class="text-xs font-bold text-blue-300">${esc(message.display_name || 'Student')}</strong>
                <span class="text-[10px] text-slate-500 font-mono">${new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">${esc(message.message_text)}</p>
        </article>
    `).join('');
}

function normalizeLectureUrl(url) {
    if (!url) return '';
    if (url.includes('/results?')) return url;

    const host = currentEmbedPlayerMode === 'direct' ? 'www.youtube.com' : 'www.youtube-nocookie.com';

    // Check for watch?v=VIDEO_ID and optional &list=PLAYLIST_ID
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);

    if (watchMatch) {
        const videoId = watchMatch[1];
        if (playlistMatch) {
            return `https://${host}/embed/${videoId}?list=${playlistMatch[1]}&rel=0`;
        }
        return `https://${host}/embed/${videoId}?rel=0`;
    }

    if (shortMatch) {
        const videoId = shortMatch[1];
        if (playlistMatch) {
            return `https://${host}/embed/${videoId}?list=${playlistMatch[1]}&rel=0`;
        }
        return `https://${host}/embed/${videoId}?rel=0`;
    }

    if (playlistMatch) {
        return `https://${host}/embed/videoseries?list=${playlistMatch[1]}&rel=0`;
    }

    if (url.includes('youtube.com/embed/') || url.includes('youtube-nocookie.com/embed/')) {
        return url.replace(/https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\//, `https://${host}/embed/`);
    }

    return url;
}

function setLectureSemester(semester) {
    activeLectureSemester = String(semester);
    activeLectureSubject = 'all';
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLectureTabs();
    renderPlaylistList();
    renderLectureViewer();
}

function setLectureSubject(subject) {
    activeLectureSubject = subject;
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLectureTabs();
    renderPlaylistList();
    renderLectureViewer();
}

function selectLecture(lectureKey) {
    activeLectureKey = lectureKey;
    renderPlaylistList();
    renderLectureViewer();
    // Smooth scroll to video player on mobile devices
    if (window.innerWidth < 1024) {
        const viewer = document.getElementById('lectureViewer');
        if (viewer) viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function resetLectureFilters() {
    activeLectureSemester = 'all';
    activeLectureSubject = 'all';
    lectureSearchQuery = '';
    playlistFilterQuery = '';
    const input = document.getElementById('lectureSearchInput');
    if (input) input.value = '';
    const pInput = document.getElementById('playlistFilterInput');
    if (pInput) pInput.value = '';
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLecturePage();
}

async function fetchLectureChat(scope) {
    const lecture = getActiveLecture();
    if (!lecture || window.location.protocol === 'file:') return;

    try {
        const response = await fetch(`/api/lecture-chat?lectureKey=${encodeURIComponent(lectureKeyFor(lecture))}&scope=${encodeURIComponent(scope)}`);
        if (!response.ok) return;
        lectureChatState[scope] = await response.json();
        renderLectureCommunity();
    } catch (error) {
        console.error('Unable to load lecture chat', error);
    }
}

async function queueLecturePresence() {
    clearInterval(lecturePollingTimer);
    if (document.visibilityState === 'hidden') return;

    await Promise.all([
        sendLectureHeartbeat('local'),
        sendLectureHeartbeat('global'),
        fetchLectureChat('local'),
        fetchLectureChat('global')
    ]);

    lecturePollingTimer = window.setInterval(() => {
        if (lectureFetchInFlight || document.visibilityState === 'hidden') return;
        lectureFetchInFlight = true;
        sendLectureHeartbeat('local');
        sendLectureHeartbeat('global');
        Promise.all([
            fetchLectureChat('local'),
            fetchLectureChat('global')
        ]).finally(() => {
            lectureFetchInFlight = false;
        });
    }, 45000);
}

async function sendLectureHeartbeat(scope) {
    const lecture = getActiveLecture();
    if (!lecture || window.location.protocol === 'file:') return;
    try {
        await fetch('/api/lecture-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                lectureKey: lectureKeyFor(lecture),
                subjectCode: lecture.subject,
                scope,
                action: 'heartbeat'
            })
        });
    } catch (error) {
        console.error('Unable to record lecture presence', error);
    }
}

async function sendLectureMessage(scope) {
    const isAuthed = window.ACADEMY && window.ACADEMY.isAuthenticated();
    if (!isAuthed) {
        if (window.ACADEMY && typeof window.ACADEMY.showSignInPrompt === 'function') {
            window.ACADEMY.showSignInPrompt({
                title: 'Sign In to Join the Discussion',
                reason: 'To prevent spam and keep the study environment helpful, posting messages and asking questions requires signing in.'
            });
        }
        return;
    }

    const lecture = getActiveLecture();
    const field = document.getElementById(`${scope}LectureMessage`);
    const messageText = field ? field.value.trim() : '';
    if (!lecture || !messageText || window.location.protocol === 'file:') return;

    try {
        await fetch('/api/lecture-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                lectureKey: lectureKeyFor(lecture),
                subjectCode: lecture.subject,
                scope,
                action: 'message',
                messageText
            })
        });
        field.value = '';
        await fetchLectureChat(scope);
    } catch (error) {
        console.error('Unable to send lecture chat message', error);
    }
}

window.setLectureSemester = setLectureSemester;
window.setLectureSubject = setLectureSubject;
window.selectLecture = selectLecture;
window.sendLectureMessage = sendLectureMessage;
window.copyLectureLink = copyLectureLink;
window.resetLectureFilters = resetLectureFilters;
window.clearLectureSearch = clearLectureSearch;
window.handlePlaylistFilter = handlePlaylistFilter;
window.clearPlaylistFilter = clearPlaylistFilter;
window.handlePlaylistCardClick = handlePlaylistCardClick;
window.promptGuestLecture = promptGuestLecture;
window.toggleEmbedPlayerMode = toggleEmbedPlayerMode;
window.reloadLecturePlayer = reloadLecturePlayer;
window.searchByCode = searchByCode;

document.addEventListener('DOMContentLoaded', async () => {
    // Non-blocking session & sync check
    if (window.ACADEMY) {
        if (typeof window.ACADEMY.hydrateAuthSession === 'function') {
            window.ACADEMY.hydrateAuthSession().catch(() => {});
        }
        if (typeof window.ACADEMY.scheduleCloudSync === 'function') {
            window.ACADEMY.scheduleCloudSync();
        }
    }

    // Check if a URL query parameter requested a specific subject or lecture
    const params = new URLSearchParams(window.location.search);
    const paramSubject = params.get('subject');
    const paramLecture = params.get('lecture');

    if (paramSubject) {
        const querySub = paramSubject.toLowerCase();
        const foundSubject = ALL_LECTURE_SUBJECTS.find((s) => s.id === querySub || (s.aliases && s.aliases.includes(querySub)));
        if (foundSubject) {
            activeLectureSemester = String(foundSubject.semester);
            activeLectureSubject = foundSubject.id;
        }
    }

    const initialList = getFilteredLectures();
    if (paramLecture) {
        const found = initialList.find((l) => lectureKeyFor(l) === paramLecture);
        if (found) {
            activeLectureKey = lectureKeyFor(found);
        } else if (initialList[0]) {
            activeLectureKey = lectureKeyFor(initialList[0]);
        }
    } else if (initialList[0]) {
        activeLectureKey = lectureKeyFor(initialList[0]);
    }

    renderLecturePage();

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            queueLecturePresence();
            return;
        }
        clearInterval(lecturePollingTimer);
    });
});
