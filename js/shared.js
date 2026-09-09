(function () {
    const STORAGE_KEY = 'academy_lms_state_v4';
    let syncTimer = null;
    let syncInFlight = false;
    let syncDirty = false;
    let lastSyncStartedAt = 0;
    let appConfig = {
        googleClientId: '',
        blobEnabled: false
    };
    let authSession = {
        authenticated: false,
        student: null
    };
    const MIN_SYNC_GAP_MS = 12000;
    const FOREGROUND_SYNC_DELAY_MS = 2200;
    const BACKGROUND_SYNC_DELAY_MS = 9000;

    function generateDeviceId() {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return window.crypto.randomUUID();
        }
        return `device-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
    }

    function buildDefaultState() {
        return {
            completedTopics: {},
            quizAttempts: {},
            notes: {},
            highlights: {},
            bookmarks: {},
            examDrafts: {},
            practiceSessions: [],
            studentName: '',
            recentTopics: [],
            lastVisited: null,
            deviceId: '',
            avatarUrl: '',
            profileStartedAt: null,
            remoteSync: {
                lastSyncedAt: null,
                lastStatus: 'local-only',
                lastMessage: 'Cloud sync has not run yet.'
            },
            updatedAt: null
        };
    }

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            const merged = { ...buildDefaultState(), ...parsed };
            merged.remoteSync = {
                ...buildDefaultState().remoteSync,
                ...(parsed.remoteSync || {})
            };
            merged.deviceId = merged.deviceId || generateDeviceId();
            merged.profileStartedAt = merged.profileStartedAt || new Date().toISOString();
            return merged;
        } catch (error) {
            console.error('Failed to read stored state', error);
            const fallback = buildDefaultState();
            fallback.deviceId = generateDeviceId();
            fallback.profileStartedAt = new Date().toISOString();
            return fallback;
        }
    }

    const state = loadState();

    function dispatchStateEvent() {
        window.dispatchEvent(new CustomEvent('academy:state-changed', {
            detail: {
                updatedAt: state.updatedAt,
                remoteSync: state.remoteSync
            }
        }));
    }

    function persistState(options = {}) {
        state.updatedAt = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        dispatchStateEvent();
        if (!options.silent) {
            syncDirty = true;
            scheduleCloudSync();
        }
    }

    function markTopicComplete(topicId, complete) {
        state.completedTopics[topicId] = complete;
        persistState();
    }

    function toggleBookmark(topicId) {
        state.bookmarks[topicId] = !state.bookmarks[topicId];
        persistState();
    }

    function isBookmarked(topicId) {
        return Boolean(state.bookmarks[topicId]);
    }

    function setLastVisited(courseId, unitId, topicId) {
        state.lastVisited = { courseId, unitId, topicId };
        state.recentTopics = [topicId].concat((state.recentTopics || []).filter((id) => id !== topicId)).slice(0, 12);
        persistState();
    }

    function setStudentName(name) {
        state.studentName = (name || '').trim().slice(0, 40);
        persistState();
    }

    function getStudentName() {
        return state.studentName || '';
    }

    function setProfileAvatar(url) {
        state.avatarUrl = String(url || '').trim();
        persistState();
    }

    function getProfileAvatar() {
        return state.avatarUrl || '';
    }

    function removeHighlight(topicId, snippet) {
        const trimmed = String(snippet || '').trim();
        if (!trimmed) return;
        const current = getHighlights(topicId).filter((entry) => entry.toLowerCase() !== trimmed.toLowerCase());
        state.highlights[topicId] = current;
        persistState();
    }

    function getNote(topicId) {
        return state.notes[topicId] || '';
    }

    function setNote(topicId, note) {
        state.notes[topicId] = note;
        persistState();
    }

    function getHighlights(topicId) {
        return state.highlights[topicId] || [];
    }

    function addHighlight(topicId, snippet) {
        const trimmed = snippet.trim();
        if (!trimmed) return;
        const current = new Set(getHighlights(topicId));
        current.add(trimmed.slice(0, 280));
        state.highlights[topicId] = Array.from(current);
        persistState();
    }

    function clearHighlights(topicId) {
        state.highlights[topicId] = [];
        persistState();
    }

    function recordQuizAttempt(payload) {
        state.quizAttempts[payload.quizId] = {
            courseId: payload.courseId,
            topicId: payload.topicId,
            question: payload.question,
            selected: payload.selected,
            correct: payload.correct,
            attemptedAt: new Date().toISOString()
        };
        persistState();
    }

    function setExamDraft(unitId, draft) {
        state.examDrafts[unitId] = draft;
        persistState();
    }

    function getExamDraft(unitId) {
        return state.examDrafts[unitId] || { medium: [], hard: [] };
    }

    function recordPracticeSession(session) {
        state.practiceSessions.unshift({
            ...session,
            finishedAt: new Date().toISOString()
        });
        state.practiceSessions = state.practiceSessions.slice(0, 20);
        persistState();
    }

    function getPracticeSessions() {
        return state.practiceSessions || [];
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeForAttribute(value) {
        return escapeHtml(value).replace(/`/g, '&#96;');
    }

    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function applyHighlights(html, snippets) {
        let rendered = html;
        snippets.forEach((snippet) => {
            const safeSnippet = snippet.trim();
            if (!safeSnippet) return;
            const matcher = new RegExp(escapeRegExp(safeSnippet), 'i');
            rendered = rendered.replace(matcher, (match) => `<mark class="student-highlight">${match}</mark>`);
        });
        return rendered;
    }

    function getAllTopics() {
        return window.coursesData.flatMap((course) => course.units.flatMap((unit) => unit.topics.map((topic) => ({
            courseId: course.id,
            courseCode: course.code,
            unitId: unit.id,
            unitNumber: unit.unitNumber,
            unitTitle: unit.title,
            topicId: topic.id,
            title: topic.title
        }))));
    }

    function getTopicMeta(topicId) {
        return getAllTopics().find((topic) => topic.topicId === topicId);
    }

    function getBookmarkedTopics() {
        return getAllTopics().filter((topic) => state.bookmarks[topic.topicId]);
    }

    function getContinueTopic() {
        if (!state.lastVisited) return null;
        return getTopicMeta(state.lastVisited.topicId);
    }

    function getRecentTopics() {
        return (state.recentTopics || []).map((topicId) => getTopicMeta(topicId)).filter(Boolean);
    }

    function getUnitMeta(unitId) {
        for (const course of window.coursesData) {
            for (const unit of course.units) {
                if (unit.id === unitId) {
                    return {
                        courseId: course.id,
                        courseCode: course.code,
                        unitNumber: unit.unitNumber,
                        unitTitle: unit.title,
                        topics: unit.topics
                    };
                }
            }
        }
        return { courseId: '', courseCode: '', unitNumber: '', unitTitle: '', topics: [] };
    }

    function getLoadedQuestionBank() {
        const bank = [];
        Object.entries(window.topicDetails || {}).forEach(([unitId, unitTopics]) => {
            Object.entries(unitTopics).forEach(([topicId, topic]) => {
                if (topicId === 'unitExam' || !topic || !Array.isArray(topic.quizzes)) return;
                const meta = getTopicMeta(topicId);
                topic.quizzes.forEach((quiz, index) => {
                    bank.push({
                        id: `${unitId}:${topicId}:${index}`,
                        courseId: meta ? meta.courseId : '',
                        courseCode: meta ? meta.courseCode : '',
                        unitId,
                        unitTitle: meta ? meta.unitTitle : '',
                        topicId,
                        topicTitle: topic.title,
                        question: quiz.question,
                        options: quiz.options,
                        answer: quiz.answer,
                        explanation: quiz.explanation
                    });
                });
            });
        });
        return bank;
    }

    function calculateStats() {
        const topics = getAllTopics();
        const completedTopics = topics.filter((topic) => state.completedTopics[topic.topicId]).length;
        const attempts = Object.values(state.quizAttempts);
        const correctAnswers = attempts.filter((attempt) => attempt.correct).length;
        const notesCount = Object.values(state.notes).filter((note) => note.trim()).length;
        const highlightCount = Object.values(state.highlights).reduce((sum, list) => sum + list.length, 0);
        const bookmarkedCount = Object.values(state.bookmarks).filter(Boolean).length;

        const courseStats = {};
        window.coursesData.forEach((course) => {
            const courseTopics = topics.filter((topic) => topic.courseId === course.id);
            const completed = courseTopics.filter((topic) => state.completedTopics[topic.topicId]).length;
            const total = courseTopics.length;
            courseStats[course.id] = {
                completed,
                total,
                completionRate: total ? Math.round((completed / total) * 100) : 0
            };
        });

        let lastVisitedLabel = '';
        if (state.lastVisited) {
            const meta = getTopicMeta(state.lastVisited.topicId);
            lastVisitedLabel = meta ? `Last visited: ${meta.courseCode} / ${meta.title}` : '';
        }

        return {
            totalTopics: topics.length,
            completedTopics,
            completionRate: topics.length ? Math.round((completedTopics / topics.length) * 100) : 0,
            totalAttempts: attempts.length,
            correctAnswers,
            quizAccuracy: attempts.length ? Math.round((correctAnswers / attempts.length) * 100) : 0,
            notesCount,
            highlightCount,
            bookmarkedCount,
            courseStats,
            lastVisitedLabel
        };
    }

    function getStorageSummary() {
        const stats = calculateStats();
        return {
            deviceId: state.deviceId,
            studentName: getStudentName(),
            profileStartedAt: state.profileStartedAt,
            updatedAt: state.updatedAt,
            remoteSync: state.remoteSync,
            completedTopics: stats.completedTopics,
            totalTopics: stats.totalTopics,
            notesCount: stats.notesCount,
            highlightCount: stats.highlightCount,
            bookmarkedCount: stats.bookmarkedCount,
            totalAttempts: stats.totalAttempts,
            correctAnswers: stats.correctAnswers,
            practiceSessions: state.practiceSessions.length
        };
    }

    function exportStudentSnapshot() {
        const topicDirectory = {};
        getAllTopics().forEach((topic) => {
            topicDirectory[topic.topicId] = {
                courseId: topic.courseId,
                courseCode: topic.courseCode,
                unitId: topic.unitId,
                unitNumber: topic.unitNumber,
                unitTitle: topic.unitTitle,
                title: topic.title
            };
        });

        return JSON.parse(JSON.stringify({
            deviceId: state.deviceId,
            studentName: getStudentName(),
            profileStartedAt: state.profileStartedAt,
            updatedAt: state.updatedAt,
            remoteSync: state.remoteSync,
            completedTopics: state.completedTopics,
            quizAttempts: state.quizAttempts,
            notes: state.notes,
            highlights: state.highlights,
            bookmarks: state.bookmarks,
            examDrafts: state.examDrafts,
            practiceSessions: state.practiceSessions,
            recentTopics: state.recentTopics,
            lastVisited: state.lastVisited,
            topicDirectory,
            stats: calculateStats()
        }));
    }

    function setRemoteSyncStamp(status, message, metadata = {}) {
        state.remoteSync = {
            lastSyncedAt: new Date().toISOString(),
            lastStatus: status,
            lastMessage: message,
            ...metadata
        };
        persistState({ silent: true });
    }

    function getRemoteSyncStamp() {
        return state.remoteSync || buildDefaultState().remoteSync;
    }

    async function syncStateToCloud() {
        if (syncInFlight || !syncDirty) return;
        if (window.location.protocol === 'file:') return;
        if (!window.fetch || navigator.onLine === false) return;

        const now = Date.now();
        if (now - lastSyncStartedAt < MIN_SYNC_GAP_MS) {
            scheduleCloudSync(MIN_SYNC_GAP_MS - (now - lastSyncStartedAt) + 500);
            return;
        }

        syncInFlight = true;
        lastSyncStartedAt = now;
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    deviceId: state.deviceId,
                    displayName: getStudentName() || 'Student',
                    snapshot: exportStudentSnapshot()
                })
            });

            if (!response.ok) {
                const failure = await response.json().catch(() => ({}));
                throw new Error(failure.error || 'Cloud sync failed.');
            }

            const payload = await response.json();
            setRemoteSyncStamp('synced', payload.message || 'Synced to the Academy cloud profile.', {
                studentId: payload.student ? payload.student.id : null
            });
            syncDirty = false;
        } catch (error) {
            const status = String(error.message || '').toLowerCase().indexOf('database') !== -1 ? 'cloud-error' : 'local-only';
            setRemoteSyncStamp(status, error.message || 'Cloud sync unavailable. Using local device memory.');
            scheduleCloudSync(25000);
        } finally {
            syncInFlight = false;
        }
    }

    function scheduleCloudSync(delayMs) {
        if (window.location.protocol === 'file:') return;
        if (!syncDirty && typeof delayMs !== 'number') return;
        clearTimeout(syncTimer);
        const computedDelay = typeof delayMs === 'number'
            ? delayMs
            : (document.visibilityState === 'visible' ? FOREGROUND_SYNC_DELAY_MS : BACKGROUND_SYNC_DELAY_MS);
        syncTimer = window.setTimeout(syncStateToCloud, computedDelay);
    }

    async function loadAppConfig() {
        if (window.location.protocol === 'file:') return appConfig;
        try {
            const response = await fetch('/api/app-config');
            if (!response.ok) return appConfig;
            appConfig = await response.json();
        } catch (error) {
            console.error('Unable to load app config', error);
        }
        return appConfig;
    }

    function getAppConfig() {
        return appConfig;
    }

    async function hydrateAuthSession() {
        if (window.location.protocol === 'file:') return authSession;
        try {
            const response = await fetch('/api/auth-session');
            if (!response.ok) return authSession;
            authSession = await response.json();
            if (authSession.authenticated && authSession.student) {
                state.studentName = authSession.student.display_name || state.studentName;
                state.avatarUrl = authSession.student.avatar_url || state.avatarUrl;
                persistState({ silent: true });
            }
        } catch (error) {
            console.error('Unable to hydrate auth session', error);
        }
        return authSession;
    }

    function getSignedInStudent() {
        return authSession.student || null;
    }

    function isAuthenticated() {
        return Boolean(authSession.authenticated && authSession.student);
    }

    function buildSigninRedirect(pathname) {
        const next = pathname || `${window.location.pathname}${window.location.search}${window.location.hash}`;
        return `/index.html?signin=required&next=${encodeURIComponent(next)}`;
    }

    async function requireStudentAuth(options = {}) {
        if (window.location.protocol === 'file:') return true;
        await loadAppConfig();
        await hydrateAuthSession();
        if (isAuthenticated()) {
            return true;
        }

        if (options.redirect !== false) {
            window.location.href = buildSigninRedirect(options.nextPath);
        }
        return false;
    }

    async function signInWithGoogle(idToken) {
        const response = await fetch('/api/auth-google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idToken,
                deviceId: state.deviceId
            })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(payload.error || 'Unable to sign in with Google.');
        }
        const signedInStudent = payload.student || null;
        authSession = {
            authenticated: true,
            student: signedInStudent
        };
        if (signedInStudent) {
            state.studentName = signedInStudent.display_name || state.studentName;
            state.avatarUrl = signedInStudent.avatar_url || state.avatarUrl;
            persistState({ silent: true });
        }
        await hydrateAuthSession();
        syncDirty = true;
        scheduleCloudSync(600);
        return payload;
    }

    async function logoutStudent() {
        if (window.location.protocol !== 'file:') {
            await fetch('/api/auth-logout', { method: 'POST' }).catch(() => null);
        }
        authSession = {
            authenticated: false,
            student: null
        };
    }

    window.ACADEMY = {
        state,
        markTopicComplete,
        toggleBookmark,
        isBookmarked,
        setLastVisited,
        setStudentName,
        getStudentName,
        setProfileAvatar,
        getProfileAvatar,
        removeHighlight,
        getNote,
        setNote,
        getHighlights,
        addHighlight,
        clearHighlights,
        recordQuizAttempt,
        setExamDraft,
        getExamDraft,
        recordPracticeSession,
        getPracticeSessions,
        escapeHtml,
        escapeForAttribute,
        applyHighlights,
        getAllTopics,
        getTopicMeta,
        getBookmarkedTopics,
        getContinueTopic,
        getRecentTopics,
        getUnitMeta,
        getLoadedQuestionBank,
        calculateStats,
        getStorageSummary,
        exportStudentSnapshot,
        getRemoteSyncStamp,
        setRemoteSyncStamp,
        loadAppConfig,
        getAppConfig,
        hydrateAuthSession,
        getSignedInStudent,
        isAuthenticated,
        buildSigninRedirect,
        requireStudentAuth,
        signInWithGoogle,
        logoutStudent,
        scheduleCloudSync,
        syncStateToCloud,
        initDynamicHeaderNav
    };

    async function initDynamicHeaderNav() {
        const navElements = document.querySelectorAll('#academyHeaderNav, #publicHeaderNav, [data-academy-nav]');
        if (!navElements.length) return;
        try {
            await hydrateAuthSession();
            const authed = isAuthenticated();
            const pathname = window.location.pathname;
            const isInHtmlDir = pathname.includes('/html/') || pathname.endsWith('/html');

            const homeHref = isInHtmlDir ? '../index.html' : 'index.html';
            const topicsHref = isInHtmlDir ? '../index.html?view=topics' : 'index.html?view=topics';
            const aboutHref = isInHtmlDir ? 'about.html' : 'html/about.html';
            const policyHref = isInHtmlDir ? 'privacy.html' : 'html/privacy.html';
            const contactHref = isInHtmlDir ? 'contact.html' : 'html/contact.html';
            const lecturesHref = isInHtmlDir ? 'lectures.html' : 'html/lectures.html';
            const resourcesHref = isInHtmlDir ? 'resources.html' : 'html/resources.html';
            const testsHref = isInHtmlDir ? 'tests.html' : 'html/tests.html';
            const profileHref = isInHtmlDir ? 'profile.html' : 'html/profile.html';

            const isCurrent = (page) => {
                if (page === 'home') return (pathname.endsWith('index.html') || pathname.endsWith('/')) && !window.location.search.includes('view=topics');
                if (page === 'topics') return (pathname.endsWith('index.html') || pathname.endsWith('/')) && window.location.search.includes('view=topics');
                if (page === 'about') return pathname.includes('about.html');
                if (page === 'policy') return pathname.includes('privacy.html') || pathname.includes('terms.html');
                if (page === 'contact') return pathname.includes('contact.html');
                if (page === 'lectures') return pathname.includes('lectures.html');
                if (page === 'resources') return pathname.includes('resources.html');
                if (page === 'tests') return pathname.includes('tests.html');
                if (page === 'profile') return pathname.includes('profile.html');
                return false;
            };

            navElements.forEach((nav) => {
                if (!authed) {
                    // Strictly 4 tabs atop for students who have not logged in yet
                    nav.innerHTML = `
                        <a href="${homeHref}" class="nav-pill ${isCurrent('home') ? 'nav-pill-active' : ''}">Home</a>
                        <a href="${aboutHref}" class="nav-pill ${isCurrent('about') ? 'nav-pill-active' : ''}">About</a>
                        <a href="${policyHref}" class="nav-pill ${isCurrent('policy') ? 'nav-pill-active' : ''}">Policy</a>
                        <a href="${contactHref}" class="nav-pill ${isCurrent('contact') ? 'nav-pill-active' : ''}">Contact</a>
                    `;
                } else {
                    // All 7 tabs visible for logged in students
                    const student = getSignedInStudent();
                    const initial = (student && student.display_name ? student.display_name.charAt(0) : 'P').toUpperCase();
                    const avatar = getProfileAvatar();
                    const avatarMarkup = avatar
                        ? `<img src="${escapeForAttribute(avatar)}" class="w-5 h-5 rounded-full object-cover inline-block mr-1" alt="Avatar" />`
                        : `<span class="nav-avatar-badge mr-1">${initial}</span>`;

                    nav.innerHTML = `
                        <a href="${topicsHref}" class="nav-pill ${isCurrent('topics') ? 'nav-pill-active' : ''}">Topics</a>
                        <a href="${lecturesHref}" class="nav-pill ${isCurrent('lectures') ? 'nav-pill-active' : ''}">Lectures</a>
                        <a href="${resourcesHref}" class="nav-pill ${isCurrent('resources') ? 'nav-pill-active' : ''}">Resources</a>
                        <a href="${testsHref}" class="nav-pill ${isCurrent('tests') ? 'nav-pill-active' : ''}">Tests</a>
                        <a href="${profileHref}" class="nav-pill nav-pill-profile ${isCurrent('profile') ? 'nav-pill-active' : ''}">
                            ${avatarMarkup}
                            <span>Profile</span>
                        </a>
                        <a href="${aboutHref}" class="nav-pill ${isCurrent('about') ? 'nav-pill-active' : ''}">About</a>
                        <a href="${policyHref}" class="nav-pill ${isCurrent('policy') ? 'nav-pill-active' : ''}">Policy</a>
                        <button type="button" onclick="window.ACADEMY.logoutStudent().then(() => { window.location.href = '${homeHref}'; })" class="nav-pill text-slate-400 hover:text-white" title="Sign out of student account">Logout</button>
                    `;
                }
            });
        } catch (e) {
            console.error('Error hydrating header navigation:', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDynamicHeaderNav);
    } else {
        initDynamicHeaderNav();
    }

    if (window.location.protocol !== 'file:') {
        window.addEventListener('online', () => {
            syncDirty = true;
            scheduleCloudSync(1200);
        });
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                scheduleCloudSync(800);
            }
        });
    }

    if (!state.updatedAt) {
        persistState({ silent: true });
    }
})();
