(function () {
    const STORAGE_KEY = 'academy_lms_state_v4';
    let syncTimer = null;
    let syncInFlight = false;

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
        if (!options.silent) scheduleCloudSync();
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
        if (syncInFlight) return;
        if (window.location.protocol === 'file:') return;
        if (!window.fetch) return;

        syncInFlight = true;
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
        } catch (error) {
            const status = String(error.message || '').toLowerCase().indexOf('database') !== -1 ? 'cloud-error' : 'local-only';
            setRemoteSyncStamp(status, error.message || 'Cloud sync unavailable. Using local device memory.');
        } finally {
            syncInFlight = false;
        }
    }

    function scheduleCloudSync() {
        if (window.location.protocol === 'file:') return;
        clearTimeout(syncTimer);
        syncTimer = window.setTimeout(syncStateToCloud, 1400);
    }

    window.ACADEMY = {
        state,
        markTopicComplete,
        toggleBookmark,
        isBookmarked,
        setLastVisited,
        setStudentName,
        getStudentName,
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
        scheduleCloudSync,
        syncStateToCloud
    };

    if (window.location.protocol !== 'file:') {
        window.addEventListener('online', scheduleCloudSync);
    }

    if (!state.updatedAt) {
        persistState({ silent: true });
    }
})();
