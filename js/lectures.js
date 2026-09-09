let activeLectureSemester = 'all';
let activeLectureSubject = 'all';
let activeLectureKey = '';
let lectureSearchQuery = '';
let lectureChatState = {
    local: { messages: [], onlineCount: 0 },
    global: { messages: [], onlineCount: 0 }
};
let lecturePollingTimer = null;
let lectureFetchInFlight = false;

const ALL_LECTURE_SUBJECTS = [
    // Semester 5
    { id: 'cs501', semester: 5, label: 'CS-501 (TOC)', fullLabel: 'Theory of Computation' },
    { id: 'cs502', semester: 5, label: 'CS-502 (DBMS)', fullLabel: 'Database Management Systems' },
    { id: 'cs503', semester: 5, label: 'CS-503 (DA)', fullLabel: 'Data Analytics' },
    { id: 'cs503-cs', semester: 5, label: 'CS-503-CS (Cyber)', fullLabel: 'Cyber Security' },
    { id: 'cs504', semester: 5, label: 'CS-504 (Web)', fullLabel: 'Web Technology' },

    // Semester 6
    { id: 'cs601', semester: 6, label: 'CS-601 (ML)', fullLabel: 'Machine Learning' },
    { id: 'cs602', semester: 6, label: 'CS-602 (CN)', fullLabel: 'Computer Networks' },
    { id: 'cs603', semester: 6, label: 'CS-603 (CD)', fullLabel: 'Compiler Design' },
    { id: 'cs603-cg', semester: 6, label: 'CS-603-CG (Graphics)', fullLabel: 'Computer Graphics' },
    { id: 'cs604', semester: 6, label: 'CS-604 (PM)', fullLabel: 'Project Management' },

    // Semester 7
    { id: 'cs701', semester: 7, label: 'CS-701 (Arch)', fullLabel: 'Software Architectures' },
    { id: 'cs702', semester: 7, label: 'CS-702 (BigData)', fullLabel: 'Big Data Analytics' },
    { id: 'cs702-wmc', semester: 7, label: 'CS-702-WMC (Wireless)', fullLabel: 'Wireless & Mobile Computing' },
    { id: 'cs703', semester: 7, label: 'CS-703 (Crypto)', fullLabel: 'Cryptography & Info Security' },
    { id: 'cs703-dm', semester: 7, label: 'CS-703-DM (Disaster)', fullLabel: 'Disaster Management' }
];

function getLectureSemesters() {
    return [
        { id: 'all', label: 'All Semesters' },
        { id: '5', label: 'Semester 5 (5 Subjects)' },
        { id: '6', label: 'Semester 6 (5 Subjects)' },
        { id: '7', label: 'Semester 7 (5 Subjects)' }
    ];
}

function getLectureSubjects() {
    let list = ALL_LECTURE_SUBJECTS;
    if (activeLectureSemester !== 'all') {
        list = list.filter((s) => String(s.semester) === String(activeLectureSemester));
    }
    const allLabel = activeLectureSemester === 'all' ? 'All Subjects' : `All Sem ${activeLectureSemester}`;
    return [{ id: 'all', label: allLabel, fullLabel: 'All Subjects' }, ...list];
}

function lectureKeyFor(lecture) {
    return lecture.lectureKey || `${lecture.subject}-${lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function getFilteredLectures() {
    return (window.lectureLibrary || []).filter((item) => {
        if (activeLectureSemester !== 'all' && String(item.semester) !== String(activeLectureSemester)) {
            return false;
        }
        if (activeLectureSubject !== 'all' && item.subject !== activeLectureSubject) {
            return false;
        }
        if (!lectureSearchQuery) return true;
        const topicString = Array.isArray(item.topics) ? item.topics.join(' ') : '';
        const haystack = `${item.subjectCode || ''} ${item.subjectLabel || ''} ${item.title || ''} ${item.lecturer || ''} ${item.description || ''} ${item.typeLabel || ''} ${topicString}`.toLowerCase();
        return haystack.includes(lectureSearchQuery);
    });
}

function getActiveLecture() {
    const lectures = getFilteredLectures();
    const matched = lectures.find((item) => lectureKeyFor(item) === activeLectureKey);
    return matched || lectures[0] || null;
}

function renderLecturePage() {
    renderLectureTabs();
    renderLectureToolbar();
    renderLectureList();
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

    const subContainer = document.getElementById('lectureSubjectTabs');
    if (subContainer) {
        subContainer.innerHTML = getLectureSubjects().map((subject) => `
            <button type="button" onclick="setLectureSubject('${subject.id}')" class="course-pill ${activeLectureSubject === subject.id ? 'course-pill-active' : ''}">
                ${subject.label}
            </button>
        `).join('');
    }
}

function renderLectureToolbar() {
    const lectures = getFilteredLectures();
    const totalAll = (window.lectureLibrary || []).length;
    const target = document.getElementById('lectureToolbar');
    if (!target) return;

    target.innerHTML = `
        <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-white">${lectures.length}</span>
                <span class="text-xs text-slate-400">of ${totalAll} lecture videos &amp; playlists matching current filter</span>
            </div>
            <div class="relative w-full md:max-w-md">
                <input id="lectureSearchInput" class="search-input w-full !pr-8" placeholder="Search by topic, lecturer, algorithm, or course..." value="${window.ACADEMY.escapeForAttribute(lectureSearchQuery)}">
                ${lectureSearchQuery ? `
                    <button type="button" onclick="clearLectureSearch()" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold" title="Clear search">✕</button>
                ` : ''}
            </div>
        </div>
    `;

    const input = document.getElementById('lectureSearchInput');
    if (input) {
        input.addEventListener('input', (event) => {
            lectureSearchQuery = String(event.target.value || '').trim().toLowerCase();
            const first = getFilteredLectures()[0];
            activeLectureKey = first ? lectureKeyFor(first) : '';
            renderLecturePage();
        });
    }
}

function clearLectureSearch() {
    lectureSearchQuery = '';
    const input = document.getElementById('lectureSearchInput');
    if (input) input.value = '';
    const first = getFilteredLectures()[0];
    activeLectureKey = first ? lectureKeyFor(first) : '';
    renderLecturePage();
}

function renderLectureList() {
    const lectures = getFilteredLectures();
    const active = getActiveLecture();
    activeLectureKey = active ? lectureKeyFor(active) : '';

    const container = document.getElementById('lectureList');
    if (!container) return;

    if (!lectures.length) {
        container.innerHTML = `
            <article class="panel-card p-5">
                <h3 class="text-lg font-bold text-white">No lecture links found</h3>
                <p class="text-sm text-slate-400 mt-2">Try clearing the search query or switching the subject or semester tab.</p>
                <button type="button" onclick="resetLectureFilters()" class="secondary-cta text-xs mt-4 !py-2 !px-3">Reset Filters</button>
            </article>
        `;
        return;
    }

    container.innerHTML = lectures.map((lecture) => {
        const isSelected = activeLectureKey === lectureKeyFor(lecture);
        const isPlaylist = lecture.type === 'playlist';
        const semColor = lecture.semester === 5 ? 'blue' : lecture.semester === 6 ? 'emerald' : 'purple';
        const topicChips = (lecture.topics || []).slice(0, 3).map((t) =>
            `<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/50">#${window.ACADEMY.escapeForHtml(t)}</span>`
        ).join('');

        return `
            <button type="button" onclick="selectLecture('${lectureKeyFor(lecture)}')" class="continue-card text-left w-full transition-all ${isSelected ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/10 bg-slate-800/90' : 'hover:bg-slate-850'}">
                <div class="flex items-center justify-between gap-2">
                    <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-${semColor}-500/15 text-${semColor}-300 border border-${semColor}-500/30">
                        Sem ${lecture.semester} • ${window.ACADEMY.escapeForHtml(lecture.subjectCode || lecture.subject.toUpperCase())}
                    </span>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded ${isPlaylist ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'}">
                        ${window.ACADEMY.escapeForHtml(lecture.typeLabel || (isPlaylist ? 'Full Playlist' : 'Deep-Dive'))}
                    </span>
                </div>
                <h3 class="text-base font-bold text-white mt-2 leading-snug">${window.ACADEMY.escapeForHtml(lecture.title)}</h3>
                <p class="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    <span>${window.ACADEMY.escapeForHtml(lecture.lecturer)}</span>
                </p>
                <p class="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">${window.ACADEMY.escapeForHtml(lecture.description)}</p>
                ${topicChips ? `<div class="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-slate-800/80">${topicChips}</div>` : ''}
            </button>
        `;
    }).join('');
}

function renderLectureViewer() {
    const target = document.getElementById('lectureViewer');
    const lecture = getActiveLecture();
    if (!lecture) {
        target.innerHTML = '<p class="text-slate-400">No lecture selected.</p>';
        document.getElementById('lectureCommunity').innerHTML = '';
        return;
    }

    const semColor = lecture.semester === 5 ? 'blue' : lecture.semester === 6 ? 'emerald' : 'purple';
    const isPlaylist = lecture.type === 'playlist';
    const topicBadges = (lecture.topics || []).map((t) =>
        `<span class="px-2.5 py-1 rounded-md text-xs bg-slate-900/80 text-slate-300 border border-slate-700 font-mono">#${window.ACADEMY.escapeForHtml(t)}</span>`
    ).join('');

    target.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-${semColor}-500/15 text-${semColor}-300 border border-${semColor}-500/30">
                    Semester ${lecture.semester} • ${window.ACADEMY.escapeForHtml(lecture.subjectCode || lecture.subject.toUpperCase())}
                </span>
                <span class="text-xs font-semibold text-slate-400">
                    ${window.ACADEMY.escapeForHtml(lecture.subjectLabel)}
                </span>
            </div>
            <span class="px-2.5 py-0.5 rounded text-xs font-semibold ${isPlaylist ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'}">
                ${window.ACADEMY.escapeForHtml(lecture.typeLabel || (isPlaylist ? 'Full Course Playlist' : 'Deep-Dive Masterclass'))}
            </span>
        </div>

        <h2 class="text-2xl font-extrabold text-white mt-3 leading-tight">${window.ACADEMY.escapeForHtml(lecture.title)}</h2>

        <div class="flex flex-wrap items-center justify-between gap-3 mt-2">
            <div class="flex items-center gap-2 text-sm text-slate-300">
                <svg class="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                <span class="font-bold text-white">${window.ACADEMY.escapeForHtml(lecture.lecturer)}</span>
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

        ${renderLectureEmbed(lecture)}

        <div class="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h4 class="text-xs uppercase tracking-wider font-bold text-slate-400">Curriculum Overview &amp; Learning Objectives</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${window.ACADEMY.escapeForHtml(lecture.description)}</p>
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

function renderLectureEmbed(lecture) {
    const embedUrl = normalizeLectureUrl(lecture.url);
    const embeddable = /^https:\/\/www\.youtube\.com\/embed\//.test(embedUrl);

    if (!embeddable) {
        return `
            <div class="study-rail-block mt-5 p-6 text-center space-y-3">
                <p class="text-base font-semibold text-white">Direct External Lecture Resource</p>
                <p class="text-sm text-slate-300 max-w-lg mx-auto">This curated lecture or playlist is best experienced in full resolution directly on YouTube with channel annotations.</p>
                <a class="primary-cta inline-flex items-center gap-2 !py-2.5 !px-5" href="${lecture.url}" target="_blank" rel="noreferrer">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    <span>Watch Full Lecture on YouTube</span>
                </a>
            </div>
        `;
    }

    return `
        <div class="mt-4 rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl relative w-full aspect-video min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
            <iframe 
                src="${embedUrl}" 
                title="${window.ACADEMY.escapeForAttribute(lecture.title)}" 
                class="w-full h-full border-0 absolute inset-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
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
                <strong class="text-xs font-bold text-blue-300">${window.ACADEMY.escapeForHtml(message.display_name || 'Student')}</strong>
                <span class="text-[10px] text-slate-500 font-mono">${new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <p class="text-xs text-slate-300 mt-1 leading-relaxed">${window.ACADEMY.escapeForHtml(message.message_text)}</p>
        </article>
    `).join('');
}

function normalizeLectureUrl(url) {
    if (!url) return '';
    if (url.includes('/results?')) return url;
    if (url.includes('youtube.com/embed/')) return url;

    // YouTube playlist: ?list=... or &list=...
    const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (playlistMatch && (url.includes('/playlist') || url.includes('/videoseries') || !url.includes('watch?v='))) {
        return `https://www.youtube.com/embed/videoseries?list=${playlistMatch[1]}`;
    }

    // Shortened youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch) {
        return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }

    // Standard youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
        return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    return url;
}

function setLectureSemester(semester) {
    activeLectureSemester = semester;
    // Check if the currently active subject is still compatible with the chosen semester
    if (activeLectureSubject !== 'all') {
        const sub = ALL_LECTURE_SUBJECTS.find((s) => s.id === activeLectureSubject);
        if (sub && semester !== 'all' && String(sub.semester) !== String(semester)) {
            activeLectureSubject = 'all';
        }
    }
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLecturePage();
}

function setLectureSubject(subject) {
    activeLectureSubject = subject;
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLecturePage();
}

function selectLecture(lectureKey) {
    activeLectureKey = lectureKey;
    renderLecturePage();
    // Smooth scroll to video player on mobile devices
    if (window.innerWidth < 1280) {
        const viewer = document.getElementById('lectureViewer');
        if (viewer) viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function resetLectureFilters() {
    activeLectureSemester = 'all';
    activeLectureSubject = 'all';
    lectureSearchQuery = '';
    const input = document.getElementById('lectureSearchInput');
    if (input) input.value = '';
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

document.addEventListener('DOMContentLoaded', async () => {
    const allowed = await window.ACADEMY.requireStudentAuth({
        nextPath: '/html/lectures.html'
    });
    if (!allowed) return;

    window.ACADEMY.scheduleCloudSync();

    // Check if a URL query parameter requested a specific subject or lecture
    const params = new URLSearchParams(window.location.search);
    const paramSubject = params.get('subject');
    const paramLecture = params.get('lecture');

    if (paramSubject) {
        const foundSubject = ALL_LECTURE_SUBJECTS.find((s) => s.id === paramSubject.toLowerCase());
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
