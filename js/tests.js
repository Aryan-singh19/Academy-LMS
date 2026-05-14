const extraPracticeQuestions = [
    {
        id: 'bonus-ml-1',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Model evaluation',
        question: 'Which metric is usually most useful when the classes are imbalanced and you care about positive predictions being trustworthy?',
        options: ['Accuracy', 'Precision', 'Variance', 'MSE'],
        answer: 1,
        explanation: 'Precision focuses on how many predicted positives were actually correct, which matters when false positives are costly.'
    },
    {
        id: 'bonus-cn-1',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Routing',
        question: 'What does a routing algorithm mainly decide?',
        options: ['How to compress video files', 'The best path for packets to reach a destination', 'How to render websites', 'How to encrypt a mouse'],
        answer: 1,
        explanation: 'Routing algorithms choose efficient paths through the network.'
    },
    {
        id: 'bonus-cd-1',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Parsing',
        question: 'Why are context-free grammars important in compiler design?',
        options: ['They define syntax structure for parsers', 'They replace machine code', 'They reduce RAM physically', 'They manage project cost'],
        answer: 0,
        explanation: 'CFGs define the legal syntactic structure that parsing algorithms recognize.'
    },
    {
        id: 'bonus-pm-1',
        courseId: 'cs604',
        courseCode: 'CS604',
        topicTitle: 'Agile planning',
        question: 'What is the main value of sprint reviews in Agile teams?',
        options: ['To avoid user feedback', 'To inspect working increments and adapt quickly', 'To lock scope permanently', 'To replace release plans'],
        answer: 1,
        explanation: 'Sprint reviews help teams inspect progress and adjust direction while change is still affordable.'
    },
    {
        id: 'bonus-cg-1',
        courseId: 'cs603-cg',
        courseCode: 'CS603-CG',
        topicTitle: 'Rendering',
        question: 'What is the major strength of ray tracing compared with rasterization?',
        options: ['Cheaper integer addition only', 'More physically realistic lighting, reflections, and shadows', 'No need for geometry', 'It removes textures'],
        answer: 1,
        explanation: 'Ray tracing models light transport more realistically, which improves reflections and shadows.'
    }
];

let practiceSession = [];
let practiceCourse = 'all';
let sessionMode = 'drill';
let timerSeconds = 0;
let timerHandle = null;
let mockFinished = false;

function buildPracticeBank() {
    return [...window.ACADEMY.getLoadedQuestionBank(), ...extraPracticeQuestions];
}

function pickRandomQuestions(bank, amount) {
    const pool = [...bank];
    for (let index = pool.length - 1; index > 0; index -= 1) {
        const target = Math.floor(Math.random() * (index + 1));
        [pool[index], pool[target]] = [pool[target], pool[index]];
    }
    return pool.slice(0, Math.min(amount, pool.length));
}

function initializeTestsPage() {
    renderPracticeHeader();
    buildPracticeSession();
    renderPracticeHistory();
}

function renderPracticeHeader() {
    const stats = window.ACADEMY.calculateStats();
    document.getElementById('practiceOverview').innerHTML = `
        <article class="metric-card">
            <p class="metric-label">All-time quiz accuracy</p>
            <div class="metric-value">${stats.quizAccuracy}%</div>
            <p class="metric-subtext">${stats.correctAnswers}/${stats.totalAttempts} correct attempts</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Saved notes</p>
            <div class="metric-value">${stats.notesCount}</div>
            <p class="metric-subtext">${stats.highlightCount} highlighted snippets</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Topics complete</p>
            <div class="metric-value">${stats.completedTopics}</div>
            <p class="metric-subtext">${stats.totalTopics} tracked in the curriculum</p>
        </article>
    `;
}

function buildPracticeSession(mode = 'drill', durationMinutes = 0) {
    stopTimer();
    sessionMode = mode;
    timerSeconds = durationMinutes * 60;
    mockFinished = false;

    const bank = buildPracticeBank().filter((question) => practiceCourse === 'all' || question.courseId === practiceCourse);
    const questionCount = mode === 'mock' ? 20 : 12;
    practiceSession = pickRandomQuestions(bank, questionCount).map((question) => ({ ...question, sessionAnswer: null }));
    renderPracticeSession();
    if (mode === 'mock') startTimer();
}

function renderPracticeSession() {
    const score = practiceSession.filter((item) => item.sessionAnswer !== null && item.sessionAnswer === item.answer).length;
    const attempted = practiceSession.filter((item) => item.sessionAnswer !== null).length;

    document.getElementById('practiceMeta').innerHTML = `
        <div class="flex flex-wrap gap-3 items-center">
            <span class="mini-badge">Mode: ${sessionMode === 'mock' ? 'Timed mock' : 'Drill'}</span>
            <span class="mini-badge">Question set: ${practiceSession.length}</span>
            <span class="mini-badge">Attempted: ${attempted}</span>
            <span class="mini-badge">Session score: ${score}</span>
            <span class="mini-badge ${sessionMode === 'mock' ? 'timer-pill' : ''}">${sessionMode === 'mock' ? `Time left: ${formatTimer(timerSeconds)}` : 'No timer'}</span>
            <button onclick="submitCurrentSession()" class="secondary-cta text-sm !py-2 !px-4">Submit session</button>
        </div>
    `;

    document.getElementById('practiceList').innerHTML = practiceSession.map((question, index) => {
        return `
            <article class="quiz-card">
                <div class="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <p class="text-xs uppercase tracking-[0.24em] text-slate-500">${question.courseCode} • ${question.topicTitle}</p>
                        <h3 class="text-lg font-bold text-white mt-2">Q${index + 1}. ${question.question}</h3>
                    </div>
                    <span class="mini-badge">${question.sessionAnswer === null ? 'Open' : (question.sessionAnswer === question.answer ? 'Correct' : 'Review')}</span>
                </div>
                <div class="space-y-3">
                    ${question.options.map((option, optionIndex) => `
                        <button onclick="answerPracticeQuestion(${index}, ${optionIndex})" class="quiz-option ${getPracticeOptionClass(question, optionIndex)}" ${question.sessionAnswer !== null || mockFinished ? 'disabled' : ''}>
                            ${option}
                        </button>
                    `).join('')}
                </div>
                ${question.sessionAnswer !== null || mockFinished ? `
                    <div class="quiz-feedback ${question.sessionAnswer === question.answer ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}">
                        <strong>${question.sessionAnswer === question.answer ? 'Correct.' : 'Review this one.'}</strong>
                        <p>${question.explanation}</p>
                    </div>
                ` : ''}
            </article>
        `;
    }).join('');
}

function getPracticeOptionClass(question, optionIndex) {
    if (question.sessionAnswer === null && !mockFinished) return '';
    if (optionIndex === question.answer) return 'quiz-option-correct';
    if (question.sessionAnswer !== null && optionIndex === question.sessionAnswer && question.sessionAnswer !== question.answer) return 'quiz-option-wrong';
    return 'quiz-option-muted';
}

function answerPracticeQuestion(index, optionIndex) {
    const question = practiceSession[index];
    if (question.sessionAnswer !== null || mockFinished) return;
    question.sessionAnswer = optionIndex;

    window.ACADEMY.recordQuizAttempt({
        quizId: `practice:${question.id}:${Date.now()}:${index}`,
        courseId: question.courseId,
        topicId: question.topicId || `practice-${question.courseId}`,
        question: question.question,
        selected: optionIndex,
        correct: optionIndex === question.answer
    });

    if (sessionMode === 'mock' && practiceSession.every((item) => item.sessionAnswer !== null)) {
        submitCurrentSession();
        return;
    }

    renderPracticeHeader();
    renderPracticeSession();
}

function setPracticeCourse(courseId) {
    practiceCourse = courseId;
    document.querySelectorAll('[data-course-filter]').forEach((button) => {
        button.classList.toggle('course-pill-active', button.dataset.courseFilter === courseId);
    });
    buildPracticeSession(sessionMode === 'mock' ? 'mock' : 'drill', sessionMode === 'mock' ? 15 : 0);
}

function startMockTest(minutes) {
    buildPracticeSession('mock', minutes);
}

function startTimer() {
    stopTimer();
    timerHandle = window.setInterval(() => {
        timerSeconds -= 1;
        if (timerSeconds <= 0) {
            timerSeconds = 0;
            renderPracticeSession();
            submitCurrentSession(true);
            return;
        }
        renderPracticeSession();
    }, 1000);
}

function stopTimer() {
    if (timerHandle) {
        clearInterval(timerHandle);
        timerHandle = null;
    }
}

function submitCurrentSession(autoSubmitted = false) {
    if (mockFinished || !practiceSession.length) return;
    mockFinished = true;
    stopTimer();

    const attempted = practiceSession.filter((item) => item.sessionAnswer !== null).length;
    const correct = practiceSession.filter((item) => item.sessionAnswer === item.answer).length;
    const total = practiceSession.length;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;

    window.ACADEMY.recordPracticeSession({
        courseId: practiceCourse,
        courseLabel: practiceCourse === 'all' ? 'All subjects' : ((practiceSession[0] && practiceSession[0].courseCode) || practiceCourse.toUpperCase()),
        mode: sessionMode,
        attempted,
        correct,
        total,
        accuracy,
        autoSubmitted
    });

    renderPracticeHeader();
    renderPracticeSession();
    renderPracticeHistory();
}

function renderPracticeHistory() {
    const sessions = window.ACADEMY.getPracticeSessions();
    document.getElementById('practiceHistory').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Mock history</h3>
                <span>${sessions.length} saved sessions</span>
            </div>
            <div class="space-y-3">
                ${sessions.length ? sessions.slice(0, 8).map((session) => `
                    <div class="study-rail-block !p-4">
                        <div class="flex items-center justify-between gap-3">
                            <strong class="text-white">${session.courseLabel}</strong>
                            <span class="mini-badge">${session.mode === 'mock' ? 'Timed mock' : 'Drill'}</span>
                        </div>
                        <p class="text-sm text-slate-400 mt-2">${session.correct}/${session.total} correct • ${session.accuracy}% • ${new Date(session.finishedAt).toLocaleString()}</p>
                    </div>
                `).join('') : '<p class="text-sm text-slate-400">Complete a session and your recent scores will show up here.</p>'}
            </div>
        </section>
    `;
}

function formatTimer(totalSeconds) {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    const allowed = await window.ACADEMY.requireStudentAuth({
        nextPath: '/html/tests.html'
    });
    if (!allowed) return;

    window.ACADEMY.scheduleCloudSync();
    initializeTestsPage();
});
