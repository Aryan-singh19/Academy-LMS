let activeCourseId = 'cs601';
let activeUnitId = 'cs601-u1';
let activeTopicId = 't1';
let appStarted = false;
const loadedCourses = {};
let topicListFilter = 'all';

function startApp() {
    const hero = document.getElementById('heroSection');
    const app = document.getElementById('appSection');

    hero.classList.add('hero-exit');
    setTimeout(() => {
        hero.classList.add('hidden');
        app.classList.remove('hidden');
        if (!appStarted) {
            initApp();
            appStarted = true;
        }
    }, 380);
}

function initApp() {
    hydrateLastVisited();
    bindGlobalEvents();
    renderCoursesNav();
    renderOverviewCards();
    renderStudentDock();
    loadCourseData(activeCourseId, () => {
        renderCourseView();
        preloadRemainingCourses();
    });
}

function hydrateLastVisited() {
    const lastVisited = window.ACADEMY.state.lastVisited;
    if (!lastVisited) return;

    activeCourseId = lastVisited.courseId || activeCourseId;
    activeUnitId = lastVisited.unitId || activeUnitId;
    activeTopicId = lastVisited.topicId || activeTopicId;
}

function bindGlobalEvents() {
    const searchInput = document.getElementById('topicSearchInput');
    searchInput.addEventListener('input', renderSearchResults);
    searchInput.addEventListener('focus', renderSearchResults);
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#topicSearchInput') && !event.target.closest('#searchResults')) {
            document.getElementById('searchResults').classList.add('hidden');
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeReferenceModal();
            document.getElementById('searchResults').classList.add('hidden');
        }
    });
    document.getElementById('referenceModal').addEventListener('click', (event) => {
        if (event.target.id === 'referenceModal') {
            closeReferenceModal();
        }
    });
}

function preloadRemainingCourses() {
    const remaining = coursesData.filter((course) => course.id !== activeCourseId);
    const loadNext = (index) => {
        if (index >= remaining.length) return;
        loadCourseData(remaining[index].id, () => loadNext(index + 1));
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => loadNext(0), { timeout: 1500 });
    } else {
        setTimeout(() => loadNext(0), 900);
    }
}

function loadCourseData(courseId, callback) {
    if (loadedCourses[courseId]) {
        callback();
        return;
    }

    const existing = document.querySelector(`script[data-course-script="${courseId}"]`);
    if (existing) {
        loadedCourses[courseId] = true;
        callback();
        return;
    }

    const script = document.createElement('script');
    script.src = `js/data_${courseId}.js`;
    script.dataset.courseScript = courseId;
    script.onload = () => {
        loadedCourses[courseId] = true;
        callback();
    };
    script.onerror = () => {
        const container = document.getElementById('mainContent');
        container.innerHTML = `
            <section class="panel-card p-10 text-center">
                <h2 class="text-2xl font-bold text-white mb-3">Unable to load ${courseId.toUpperCase()}</h2>
                <p class="text-slate-400">The detail file for this course could not be loaded right now.</p>
            </section>
        `;
    };
    document.body.appendChild(script);
}

function renderOverviewCards() {
    const stats = window.ACADEMY.calculateStats();
    const cards = [
        { label: 'Topics done', value: `${stats.completedTopics}/${stats.totalTopics}`, subtext: `${stats.completionRate}% completion` },
        { label: 'Quiz accuracy', value: `${stats.quizAccuracy}%`, subtext: `${stats.correctAnswers}/${stats.totalAttempts} correct` },
        { label: 'Study notes', value: `${stats.notesCount}`, subtext: `${stats.highlightCount} saved highlights` },
        { label: 'Device cache', value: 'Active', subtext: stats.lastVisitedLabel || 'Progress and notes stay on this device' }
    ];

    document.getElementById('overviewCards').innerHTML = cards.map((card, index) => `
        <article class="metric-card reveal" style="animation-delay:${index * 70}ms">
            <p class="metric-label">${card.label}</p>
            <div class="metric-value">${card.value}</div>
            <p class="metric-subtext">${card.subtext}</p>
        </article>
    `).join('');
}

function renderStudentDock() {
    const continueTopic = window.ACADEMY.getContinueTopic();
    const bookmarks = window.ACADEMY.getBookmarkedTopics().slice(0, 6);
    document.getElementById('studentDock').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Continue studying</h3>
                <span>Local memory active</span>
            </div>
            ${continueTopic ? `
                <button onclick="openSearchResult('${continueTopic.courseId}', '${continueTopic.unitId}', '${continueTopic.topicId}')" class="continue-card">
                    <p class="metric-label">${continueTopic.courseCode} • Unit ${continueTopic.unitNumber}</p>
                    <h4 class="text-xl font-bold text-white mt-2">${continueTopic.title}</h4>
                    <p class="metric-subtext mt-2">Pick up where you left off without hunting through the sidebar again.</p>
                </button>
            ` : `
                <div class="study-rail-block">
                    <p class="text-sm text-slate-400">Start any topic once and your continue card will appear here.</p>
                </div>
            `}
        </section>
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Bookmarks</h3>
                <span>${bookmarks.length} quick links</span>
            </div>
            <div class="flex flex-wrap gap-2">
                ${bookmarks.length ? bookmarks.map((topic) => `
                    <button onclick="openSearchResult('${topic.courseId}', '${topic.unitId}', '${topic.topicId}')" class="reference-chip">
                        ${topic.courseCode}: ${topic.title}
                    </button>
                `).join('') : '<p class="text-sm text-slate-400">Bookmark tough topics and they will show up here for quick revision.</p>'}
            </div>
        </section>
    `;
}

function renderCoursesNav() {
    const stats = window.ACADEMY.calculateStats();
    document.getElementById('coursesNav').innerHTML = coursesData.map((course) => {
        const courseStats = stats.courseStats[course.id] || { completionRate: 0, completed: 0, total: course.units.reduce((sum, unit) => sum + unit.topics.length, 0) };
        return `
            <button onclick="switchCourse('${course.id}')" class="course-pill ${course.id === activeCourseId ? 'course-pill-active' : ''}">
                <span class="font-semibold">${course.code}</span>
                <span class="text-xs text-slate-400">${courseStats.completed}/${courseStats.total} done</span>
            </button>
        `;
    }).join('');
}

function switchCourse(courseId) {
    if (courseId === activeCourseId) return;
    const course = coursesData.find((item) => item.id === courseId);
    activeCourseId = course.id;
    activeUnitId = course.units[0].id;
    activeTopicId = course.units[0].topics[0].id;
    window.ACADEMY.setLastVisited(activeCourseId, activeUnitId, activeTopicId);
    renderCoursesNav();
    loadCourseData(courseId, renderCourseView);
}

function selectUnit(unitId) {
    if (unitId === activeUnitId) return;
    const course = coursesData.find((item) => item.id === activeCourseId);
    const unit = course.units.find((entry) => entry.id === unitId);
    activeUnitId = unitId;
    activeTopicId = unit.topics[0].id;
    window.ACADEMY.setLastVisited(activeCourseId, activeUnitId, activeTopicId);
    renderCourseView();
}

function selectTopic(topicId) {
    activeTopicId = topicId;
    window.ACADEMY.setLastVisited(activeCourseId, activeUnitId, activeTopicId);
    renderCourseView();
}

function renderCourseView() {
    const course = coursesData.find((item) => item.id === activeCourseId);
    const unit = course.units.find((item) => item.id === activeUnitId);
    const topicMeta = unit.topics.find((topic) => topic.id === activeTopicId);
    const topicSummary = topicMeta ? topicMeta.title : 'Unit Revision';

    renderStudentDock();

    document.getElementById('mainContent').innerHTML = `
        <div class="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
            <aside class="panel-card p-4 h-fit xl:sticky xl:top-28">
                <div class="flex items-start justify-between gap-3 mb-4">
                    <div>
                        <p class="text-xs uppercase tracking-[0.24em] text-slate-500">${course.code}</p>
                        <h2 class="text-xl font-bold text-white mt-1">${course.title}</h2>
                    </div>
                    <span class="mini-badge">${getCourseCompletionText(course.id)}</span>
                </div>
                <p class="text-sm text-slate-400 mb-5">${course.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <button onclick="setTopicListFilter('all')" class="mini-badge ${topicListFilter === 'all' ? 'course-pill-active' : ''}">All</button>
                    <button onclick="setTopicListFilter('bookmarked')" class="mini-badge ${topicListFilter === 'bookmarked' ? 'course-pill-active' : ''}">Bookmarked</button>
                    <button onclick="setTopicListFilter('incomplete')" class="mini-badge ${topicListFilter === 'incomplete' ? 'course-pill-active' : ''}">Incomplete</button>
                </div>
                <div class="space-y-3">
                    ${course.units.map((entry) => renderUnitButton(entry)).join('')}
                </div>
            </aside>

            <section class="panel-card overflow-hidden">
                <div class="border-b border-white/8 px-5 sm:px-8 py-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p class="text-xs uppercase tracking-[0.24em] text-slate-500">${course.code} / Unit ${unit.unitNumber}</p>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">${topicSummary}</h2>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="toggleCurrentBookmark()" class="secondary-cta text-sm !py-2 !px-4">${window.ACADEMY.isBookmarked(activeTopicId) ? 'Remove bookmark' : 'Bookmark topic'}</button>
                        <button onclick="markCurrentTopicDone()" class="primary-cta text-sm !py-2 !px-4">Mark complete</button>
                    </div>
                </div>
                <div id="topicContentArea" class="px-5 sm:px-8 py-6 sm:py-8"></div>
            </section>

            <aside id="studyRail" class="panel-card p-5 h-fit xl:sticky xl:top-28"></aside>
        </div>
    `;

    renderTopicContent();
    renderStudyRail();
}

function renderUnitButton(unit) {
    const isActive = unit.id === activeUnitId;
    const visibleTopics = unit.topics.filter((topic) => {
        if (topicListFilter === 'bookmarked') return window.ACADEMY.isBookmarked(topic.id);
        if (topicListFilter === 'incomplete') return !window.ACADEMY.state.completedTopics[topic.id];
        return true;
    });
    return `
        <div class="unit-card ${isActive ? 'unit-card-active' : ''}">
            <button onclick="selectUnit('${unit.id}')" class="w-full text-left flex items-center justify-between gap-3">
                <div>
                    <p class="text-sm font-bold text-white">Unit ${unit.unitNumber}</p>
                    <p class="text-xs text-slate-400 mt-1">${unit.title}</p>
                </div>
                <span class="text-slate-500">${isActive ? '•' : '+'}</span>
            </button>
            <div class="${isActive ? 'block' : 'hidden'} mt-3 space-y-2">
                ${visibleTopics.length ? visibleTopics.map((topic, index) => {
                    const complete = window.ACADEMY.state.completedTopics[topic.id];
                    const bookmarked = window.ACADEMY.isBookmarked(topic.id);
                    return `
                        <button onclick="selectTopic('${topic.id}')" class="topic-pill ${topic.id === activeTopicId ? 'topic-pill-active' : ''}">
                            <span>${index + 1}. ${topic.title}</span>
                            <span class="topic-pill-icons">
                                ${bookmarked ? '<span title="Bookmarked">★</span>' : ''}
                                ${complete ? '<span title="Completed">✓</span>' : ''}
                            </span>
                        </button>
                    `;
                }).join('') : '<div class="text-sm text-slate-400 px-2 py-3">No topics match this filter in the current unit.</div>'}
                <button onclick="selectTopic('exam')" class="topic-pill ${activeTopicId === 'exam' ? 'topic-pill-active' : ''}">
                    <span>Unit Exam / Revision</span>
                    <span class="topic-pill-icons">→</span>
                </button>
            </div>
        </div>
    `;
}

function renderTopicContent() {
    const contentArea = document.getElementById('topicContentArea');
    if (activeTopicId === 'exam') {
        renderExamContent(contentArea);
        return;
    }

    const unitData = window.topicDetails[activeUnitId];
    const topic = unitData && unitData[activeTopicId];
    if (!topic) {
        contentArea.innerHTML = `
            <div class="empty-state">
                <h3 class="text-2xl font-bold text-white mb-3">Content coming soon</h3>
                <p class="text-slate-400">This topic outline exists, but the detailed notes have not been populated yet.</p>
            </div>
        `;
        return;
    }

    const highlights = window.ACADEMY.getHighlights(activeTopicId);
    const highlightedContent = window.ACADEMY.applyHighlights(topic.content, highlights);
    const quizCards = (topic.quizzes || []).map((quiz, index) => renderQuizCard(quiz, index)).join('');
    const references = (topic.references || []).map((ref) => `
        <button onclick="openReferenceModal('${ref.url}', '${window.ACADEMY.escapeHtml(ref.title)}')" class="reference-chip">${ref.title}</button>
    `).join('');

    contentArea.innerHTML = `
        <div class="content-shell">
            <div class="topic-prose">
                ${highlightedContent}
            </div>
            <section class="revision-banner">
                <div>
                    <p class="revision-label">Study tools</p>
                    <h3 class="text-xl font-bold text-white">Save your own memory layer on this topic.</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                    <button onclick="highlightSelectedText()" class="secondary-cta text-sm !py-2 !px-4">Highlight selection</button>
                    <button onclick="clearTopicHighlights()" class="secondary-cta text-sm !py-2 !px-4">Clear highlights</button>
                </div>
            </section>
            <section class="mt-10">
                <div class="section-head">
                    <h3>Topic Knowledge Checks</h3>
                    <span>${topic.quizzes.length} questions</span>
                </div>
                <div class="space-y-5">${quizCards}</div>
            </section>
            ${references ? `
                <section class="mt-10">
                    <div class="section-head">
                        <h3>References</h3>
                        <span>Open inside app or new tab</span>
                    </div>
                    <div class="flex flex-wrap gap-3">${references}</div>
                </section>
            ` : ''}
        </div>
    `;

    setTimeout(() => {
        if (window.mermaid) {
            try {
                mermaid.init(undefined, document.querySelectorAll('.mermaid'));
            } catch (error) {
                console.error('Mermaid render failed', error);
            }
        }
    }, 60);
}

function renderQuizCard(quiz, index) {
    const quizId = `${activeUnitId}:${activeTopicId}:${index}`;
    const attempt = window.ACADEMY.state.quizAttempts[quizId];
    const answered = Boolean(attempt);

    return `
        <article class="quiz-card">
            <div class="flex items-center justify-between gap-3 mb-4">
                <h4 class="text-lg font-bold text-white">Q${index + 1}. ${quiz.question}</h4>
                <span class="mini-badge">${answered ? (attempt.correct ? 'Correct' : 'Attempted') : 'Pending'}</span>
            </div>
            <div class="space-y-3">
                ${quiz.options.map((option, optionIndex) => {
                    const buttonClass = getQuizButtonClass(attempt, optionIndex, quiz.answer);
                    return `
                        <button
                            onclick="checkAnswer('${quizId}', ${optionIndex}, ${quiz.answer}, '${window.ACADEMY.escapeForAttribute(quiz.explanation)}', '${window.ACADEMY.escapeForAttribute(quiz.question)}')"
                            class="quiz-option ${buttonClass}"
                            ${answered ? 'disabled' : ''}
                        >
                            ${option}
                        </button>
                    `;
                }).join('')}
            </div>
            ${attempt ? `
                <div class="quiz-feedback ${attempt.correct ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}">
                    <strong>${attempt.correct ? 'Nice work.' : 'Keep going.'}</strong>
                    <p>${quiz.explanation}</p>
                </div>
            ` : ''}
        </article>
    `;
}

function getQuizButtonClass(attempt, optionIndex, correctIndex) {
    if (!attempt) return '';
    if (optionIndex === correctIndex) return 'quiz-option-correct';
    if (optionIndex === attempt.selected && !attempt.correct) return 'quiz-option-wrong';
    return 'quiz-option-muted';
}

function checkAnswer(quizId, selected, correct, explanation, question) {
    if (window.ACADEMY.state.quizAttempts[quizId]) return;
    window.ACADEMY.recordQuizAttempt({
        quizId,
        courseId: activeCourseId,
        topicId: activeTopicId,
        question,
        selected,
        correct: selected === correct
    });

    const topic = window.topicDetails[activeUnitId][activeTopicId];
    const allCorrect = topic.quizzes.every((quiz, index) => {
        const attempt = window.ACADEMY.state.quizAttempts[`${activeUnitId}:${activeTopicId}:${index}`];
        return attempt && attempt.correct;
    });
    if (allCorrect) {
        window.ACADEMY.markTopicComplete(activeTopicId, true);
    }

    renderOverviewCards();
    renderStudentDock();
    renderCoursesNav();
    renderTopicContent();
    renderStudyRail();
}

function renderStudyRail() {
    const meta = window.ACADEMY.getTopicMeta(activeTopicId);
    const stats = window.ACADEMY.calculateStats();
    const note = window.ACADEMY.getNote(activeTopicId);
    const highlights = window.ACADEMY.getHighlights(activeTopicId);
    const attemptCount = Object.values(window.ACADEMY.state.quizAttempts).filter((attempt) => attempt.topicId === activeTopicId).length;
    const currentCourseStats = stats.courseStats[activeCourseId];
    const mood = getCourseMoodMessage(activeCourseId);

    document.getElementById('studyRail').innerHTML = `
        <div class="space-y-6">
            <section>
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Current focus</p>
                <h3 class="text-xl font-bold text-white mt-2">${meta ? meta.title : 'Unit revision'}</h3>
                <p class="text-sm text-slate-400 mt-2">${meta ? `${meta.courseCode} • Unit ${meta.unitNumber}` : 'Essay-style practice area'}</p>
            </section>

            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Progress memory</h3>
                    <span>${currentCourseStats ? currentCourseStats.completionRate : 0}%</span>
                </div>
                <ul class="text-sm text-slate-300 space-y-2">
                    <li>Quiz attempts on this topic: ${attemptCount}</li>
                    <li>Highlights saved here: ${highlights.length}</li>
                    <li>Status: ${window.ACADEMY.state.completedTopics[activeTopicId] ? 'Completed' : 'In progress'}</li>
                </ul>
            </section>

            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Notes</h3>
                    <span>Autosaved</span>
                </div>
                <textarea id="topicNoteInput" class="note-input" placeholder="Write your summary, formulas, mnemonics, or doubts here...">${note}</textarea>
                <div class="flex items-center justify-between text-xs text-slate-500 mt-2">
                    <span>Saved in your browser on this device.</span>
                    <button onclick="saveTopicNote()" class="text-accent hover:text-white transition-colors">Save now</button>
                </div>
            </section>

            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Revision nudges</h3>
                    <span>Quick actions</span>
                </div>
                <div class="flex flex-col gap-2">
                    <button onclick="jumpToPracticeTests()" class="secondary-cta text-sm justify-center">Open mixed practice</button>
                    <button onclick="selectTopic('exam')" class="secondary-cta text-sm justify-center">Open unit exam</button>
                </div>
            </section>

            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Student corner</h3>
                    <span>Stay connected</span>
                </div>
                <p class="text-sm text-slate-300 leading-7">${mood}</p>
            </section>
        </div>
    `;

    const noteInput = document.getElementById('topicNoteInput');
    noteInput.addEventListener('input', () => {
        window.ACADEMY.setNote(activeTopicId, noteInput.value);
        renderOverviewCards();
        renderStudentDock();
    });
}

function renderExamContent(contentArea) {
    const unitData = window.topicDetails[activeUnitId] || {};
    const unitMeta = window.ACADEMY.getUnitMeta(activeUnitId);
    const examData = unitData.unitExam || {
        title: `${unitMeta.courseCode} Unit ${unitMeta.unitNumber} Revision Lab`,
        description: `Use these prompts to turn the unit into long-form answers and exam-ready recall.`,
        mediumQuestions: unitMeta.topics.map((topic) => `Explain the core idea behind "${topic.title}" with one example.`),
        hardQuestions: [
            `Connect all topics from Unit ${unitMeta.unitNumber} into one end-to-end answer that could score well in an exam.`,
            `List the common mistakes a student might make in this unit and explain how to avoid them.`,
            `Write a revision answer that compares the strongest concepts from this unit with practical real-world use.`
        ]
    };
    const draft = window.ACADEMY.getExamDraft(activeUnitId);

    contentArea.innerHTML = `
        <div class="space-y-8">
            <section class="revision-banner">
                <div>
                    <p class="revision-label">Unit revision</p>
                    <h3 class="text-3xl font-extrabold text-white">${examData.title}</h3>
                    <p class="text-slate-400 mt-2">${examData.description}</p>
                </div>
                <div class="mini-badge">Draft saved locally</div>
            </section>

            <section class="exam-panel">
                <div class="section-head">
                    <h3>Medium questions</h3>
                    <span>Structured answers</span>
                </div>
                <div class="space-y-5">
                    ${examData.mediumQuestions.map((question, index) => `
                        <div>
                            <p class="text-white font-semibold mb-2">Q${index + 1}. ${question}</p>
                            <textarea class="exam-input" data-exam-kind="medium" data-exam-index="${index}" placeholder="Write your answer here...">${draft.medium[index] || ''}</textarea>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="exam-panel">
                <div class="section-head">
                    <h3>Hard questions</h3>
                    <span>Exam-depth practice</span>
                </div>
                <div class="space-y-5">
                    ${examData.hardQuestions.map((question, index) => `
                        <div>
                            <p class="text-white font-semibold mb-2">Q${index + 1}. ${question}</p>
                            <textarea class="exam-input exam-input-tall" data-exam-kind="hard" data-exam-index="${index}" placeholder="Build a detailed answer with headings and examples...">${draft.hard[index] || ''}</textarea>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;

    contentArea.querySelectorAll('.exam-input').forEach((field) => {
        field.addEventListener('input', saveExamDraftFromInputs);
    });
}

function saveExamDraftFromInputs() {
    const medium = Array.from(document.querySelectorAll('[data-exam-kind="medium"]')).map((field) => field.value);
    const hard = Array.from(document.querySelectorAll('[data-exam-kind="hard"]')).map((field) => field.value);
    window.ACADEMY.setExamDraft(activeUnitId, { medium, hard });
}

function saveTopicNote() {
    const noteInput = document.getElementById('topicNoteInput');
    if (!noteInput) return;
    window.ACADEMY.setNote(activeTopicId, noteInput.value);
    renderOverviewCards();
}

function markCurrentTopicDone() {
    if (activeTopicId === 'exam') return;
    window.ACADEMY.markTopicComplete(activeTopicId, true);
    renderOverviewCards();
    renderStudentDock();
    renderCoursesNav();
    renderCourseView();
}

function toggleCurrentBookmark() {
    if (activeTopicId === 'exam') return;
    window.ACADEMY.toggleBookmark(activeTopicId);
    renderOverviewCards();
    renderStudentDock();
    renderCourseView();
}

function highlightSelectedText() {
    if (activeTopicId === 'exam') return;
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : '';
    if (!selectedText || selectedText.length < 3) return;

    const contentArea = document.getElementById('topicContentArea');
    if (!contentArea.contains(selection.anchorNode)) return;

    window.ACADEMY.addHighlight(activeTopicId, selectedText);
    selection.removeAllRanges();
    renderOverviewCards();
    renderStudentDock();
    renderTopicContent();
    renderStudyRail();
}

function clearTopicHighlights() {
    if (activeTopicId === 'exam') return;
    window.ACADEMY.clearHighlights(activeTopicId);
    renderOverviewCards();
    renderStudentDock();
    renderTopicContent();
    renderStudyRail();
}

function jumpToPracticeTests() {
    window.location.href = 'html/tests.html';
}

function openReferenceModal(url, title) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalIframe').src = url;
    document.getElementById('modalExternalBtn').href = url;
    const modal = document.getElementById('referenceModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
}

function closeReferenceModal() {
    const modal = document.getElementById('referenceModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('modalIframe').src = '';
    document.body.classList.remove('overflow-hidden');
}

function renderSearchResults() {
    const query = document.getElementById('topicSearchInput').value.trim().toLowerCase();
    const container = document.getElementById('searchResults');
    if (!query) {
        container.classList.add('hidden');
        container.innerHTML = '';
        return;
    }

    const results = window.ACADEMY.getAllTopics()
        .filter((topic) => {
            const bag = `${topic.courseCode} ${topic.unitTitle} ${topic.title}`.toLowerCase();
            return bag.includes(query);
        })
        .slice(0, 8);

    if (!results.length) {
        container.classList.remove('hidden');
        container.innerHTML = `<div class="p-4 text-sm text-slate-400">No matching topics yet.</div>`;
        return;
    }

    container.classList.remove('hidden');
    container.innerHTML = results.map((result) => `
        <button onclick="openSearchResult('${result.courseId}', '${result.unitId}', '${result.topicId}')" class="search-result-item">
            <strong class="text-white">${result.title}</strong>
            <span>${result.courseCode} • Unit ${result.unitNumber}</span>
        </button>
    `).join('');
}

function openSearchResult(courseId, unitId, topicId) {
    activeCourseId = courseId;
    activeUnitId = unitId;
    activeTopicId = topicId;
    window.ACADEMY.setLastVisited(activeCourseId, activeUnitId, activeTopicId);
    document.getElementById('topicSearchInput').value = '';
    document.getElementById('searchResults').classList.add('hidden');
    renderCoursesNav();
    renderStudentDock();
    loadCourseData(courseId, renderCourseView);
}

function getCourseCompletionText(courseId) {
    const stats = window.ACADEMY.calculateStats().courseStats[courseId];
    return `${stats.completionRate}% done`;
}

function getCourseMoodMessage(courseId) {
    const messages = {
        cs601: 'ML feels dramatic at first, but most topics are just pattern-finding with extra Greek letters pretending to be celebrities.',
        cs602: 'Networks is basically group travel for packets: some are organized, some get lost, and routers keep pretending everything is under control.',
        cs603: 'Compiler Design is the course where tiny grammar mistakes create huge chaos, which is honestly relatable during exam season.',
        cs604: 'Project Management is what happens when deadlines, humans, and spreadsheets enter the same room and nobody leaves calm.',
        'cs603-cg': 'Graphics proves that making a circle look pretty can require enough math to ruin an otherwise peaceful afternoon.'
    };
    return messages[courseId] || 'One topic at a time still beats last-minute panic by a comfortable margin.';
}

function setTopicListFilter(filter) {
    topicListFilter = filter;
    renderCourseView();
}
