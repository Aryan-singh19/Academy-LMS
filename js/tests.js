const extraPracticeQuestions = [
    {
        id: 'bonus-ml-1',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Model evaluation',
        question: 'Which metric is usually most useful when the classes are imbalanced and you care about positive predictions being trustworthy?',
        options: ['Accuracy', 'Precision', 'Variance', 'MSE'],
        answer: 1,
        explanation: 'Precision focuses on how many predicted positives were actually correct, which matters a lot when false positives are costly.'
    },
    {
        id: 'bonus-ml-2',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Overfitting',
        question: 'A model performs brilliantly on training data but poorly on unseen data. What is the most likely issue?',
        options: ['Underfitting', 'Overfitting', 'Normalization', 'Tokenization'],
        answer: 1,
        explanation: 'That is the classic signature of overfitting: memorizing training patterns instead of learning generalizable structure.'
    },
    {
        id: 'bonus-ml-3',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Deployment',
        question: 'Why is monitoring a deployed model important even after it reaches production?',
        options: ['Because deployment deletes the training data', 'Because data drift can reduce real-world performance over time', 'Because models cannot run twice', 'Because GPUs expire quickly'],
        answer: 1,
        explanation: 'Production data changes. Monitoring helps catch drift, degraded accuracy, or unstable predictions after launch.'
    },
    {
        id: 'bonus-cn-1',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Routing',
        question: 'What does a routing algorithm mainly decide?',
        options: ['How to compress video files', 'The best path for packets to reach a destination', 'How to encrypt files locally', 'How to increase monitor brightness'],
        answer: 1,
        explanation: 'Routing logic exists to choose packet paths across networks efficiently and reliably.'
    },
    {
        id: 'bonus-cn-2',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Transport layer',
        question: 'Which protocol is usually preferred for real-time voice or video where low latency matters more than perfect reliability?',
        options: ['TCP', 'UDP', 'HTTP', 'FTP'],
        answer: 1,
        explanation: 'UDP avoids connection overhead and retransmission delays, which suits real-time communication.'
    },
    {
        id: 'bonus-cn-3',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Security',
        question: 'What is a firewall primarily used for?',
        options: ['Cooling the router', 'Filtering and controlling network traffic', 'Converting IPv4 to images', 'Rendering websites'],
        answer: 1,
        explanation: 'Firewalls enforce traffic rules between trusted and untrusted zones.'
    },
    {
        id: 'bonus-cd-1',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Lexical analysis',
        question: 'What is the output of lexical analysis in a compiler?',
        options: ['Machine code', 'A list of tokens', 'A project schedule', 'Only syntax trees'],
        answer: 1,
        explanation: 'The lexer converts raw character streams into tokens that later parser stages can understand.'
    },
    {
        id: 'bonus-cd-2',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Optimization',
        question: 'Dead code elimination improves a program mainly by removing what?',
        options: ['All loops', 'Useful variables', 'Statements that never affect observable output', 'Syntax rules'],
        answer: 2,
        explanation: 'Dead code does not affect the program result, so removing it can shrink and speed up generated code.'
    },
    {
        id: 'bonus-cd-3',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Parsing',
        question: 'Why are context-free grammars important in compiler design?',
        options: ['They define syntax structure for parsers', 'They replace machine code', 'They encrypt tokens', 'They manage team velocity'],
        answer: 0,
        explanation: 'CFGs give the formal syntactic rules that parsing algorithms rely on.'
    },
    {
        id: 'bonus-pm-1',
        courseId: 'cs604',
        courseCode: 'CS604',
        topicTitle: 'Agile planning',
        question: 'What is the main value of sprint reviews in Agile teams?',
        options: ['To avoid user feedback', 'To inspect working increments and adapt quickly', 'To replace all documentation forever', 'To lock scope permanently'],
        answer: 1,
        explanation: 'Sprint reviews help teams show progress, gather feedback, and adjust priorities while work is still flexible.'
    },
    {
        id: 'bonus-pm-2',
        courseId: 'cs604',
        courseCode: 'CS604',
        topicTitle: 'Risk management',
        question: 'Which risk should usually get attention first?',
        options: ['The one with the highest exposure', 'The oldest one', 'The cheapest one', 'The funniest one'],
        answer: 0,
        explanation: 'High exposure means a strong combination of probability and impact.'
    },
    {
        id: 'bonus-pm-3',
        courseId: 'cs604',
        courseCode: 'CS604',
        topicTitle: 'Scheduling',
        question: 'If a task on the critical path slips by two days and nothing else changes, what happens?',
        options: ['Nothing changes', 'The whole project is delayed by two days', 'The project becomes cheaper', 'The team skips testing'],
        answer: 1,
        explanation: 'The critical path controls the shortest possible project duration, so delays there affect the full schedule.'
    }
];

let practiceSession = [];
let practiceCourse = 'all';

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

function buildPracticeSession() {
    const bank = buildPracticeBank().filter((question) => practiceCourse === 'all' || question.courseId === practiceCourse);
    practiceSession = pickRandomQuestions(bank, 12).map((question) => ({ ...question, sessionAnswer: null }));
    renderPracticeSession();
}

function renderPracticeSession() {
    const score = practiceSession.filter((item) => item.sessionAnswer !== null && item.sessionAnswer === item.answer).length;
    const attempted = practiceSession.filter((item) => item.sessionAnswer !== null).length;

    document.getElementById('practiceMeta').innerHTML = `
        <div class="flex flex-wrap gap-3 items-center">
            <span class="mini-badge">Question set: ${practiceSession.length}</span>
            <span class="mini-badge">Attempted: ${attempted}</span>
            <span class="mini-badge">Session score: ${score}</span>
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
                        <button onclick="answerPracticeQuestion(${index}, ${optionIndex})" class="quiz-option ${getPracticeOptionClass(question, optionIndex)}" ${question.sessionAnswer !== null ? 'disabled' : ''}>
                            ${option}
                        </button>
                    `).join('')}
                </div>
                ${question.sessionAnswer !== null ? `
                    <div class="quiz-feedback ${question.sessionAnswer === question.answer ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}">
                        <strong>${question.sessionAnswer === question.answer ? 'Correct.' : 'Not quite.'}</strong>
                        <p>${question.explanation}</p>
                    </div>
                ` : ''}
            </article>
        `;
    }).join('');
}

function getPracticeOptionClass(question, optionIndex) {
    if (question.sessionAnswer === null) return '';
    if (optionIndex === question.answer) return 'quiz-option-correct';
    if (optionIndex === question.sessionAnswer && question.sessionAnswer !== question.answer) return 'quiz-option-wrong';
    return 'quiz-option-muted';
}

function answerPracticeQuestion(index, optionIndex) {
    const question = practiceSession[index];
    if (question.sessionAnswer !== null) return;
    question.sessionAnswer = optionIndex;

    window.ACADEMY.recordQuizAttempt({
        quizId: `practice:${question.id}`,
        courseId: question.courseId,
        topicId: question.topicId || `practice-${question.courseId}`,
        question: question.question,
        selected: optionIndex,
        correct: optionIndex === question.answer
    });

    renderPracticeHeader();
    renderPracticeSession();
}

function setPracticeCourse(courseId) {
    practiceCourse = courseId;
    document.querySelectorAll('[data-course-filter]').forEach((button) => {
        button.classList.toggle('course-pill-active', button.dataset.courseFilter === courseId);
    });
    buildPracticeSession();
}

document.addEventListener('DOMContentLoaded', initializeTestsPage);
