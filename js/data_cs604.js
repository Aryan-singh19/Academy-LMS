window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs604-u1': {
        'c4-u1t1': {
            title: 'Waterfall & SDLC',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Software Development Life Cycle (SDLC)</h3>
<p class="mb-4">The SDLC is a structured process used by software industries to design, develop, and test high-quality software. The goal is to produce software that meets or exceeds customer expectations, reaches completion within times and cost estimates.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The Waterfall Model: The Old School Approach</h3>
<p class="mb-4 text-gray-300">Invented in the 1970s, Waterfall is a linear, sequential approach to software development. You must completely finish one phase before you can move on to the next. There is no going back.</p>

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    A[Requirements Analysis] --> B[System Design]
    B --> C[Implementation / Coding]
    C --> D[Testing]
    D --> E[Deployment]
    E --> F[Maintenance]
    style A fill:#2d3748,stroke:#4a5568,color:#fff
    style B fill:#2d3748,stroke:#4a5568,color:#fff
    style C fill:#2b6cb0,stroke:#2c5282,color:#fff
    style D fill:#c53030,stroke:#9b2c2c,color:#fff
    style E fill:#2f855a,stroke:#276749,color:#fff
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-red-500 shadow-lg">
        <h4 class="text-red-400 font-bold mb-2">The Problem with Waterfall</h4>
        <p class="text-gray-300 text-sm mb-2">It assumes that requirements are perfectly known upfront. If the client changes their mind during the 'Testing' phase, you are completely doomed.</p>
        <p class="text-gray-300 text-sm">Working software is not produced until late during the life cycle. It has high amounts of risk and uncertainty.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg">
        <h4 class="text-green-400 font-bold mb-2">When to use Waterfall?</h4>
        <p class="text-gray-300 text-sm mb-2">When requirements are very well documented, clear, and absolutely fixed. Example: Building software for a medical device or a nuclear reactor where changing code on the fly is illegal or dangerous.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary drawback of the Waterfall model?",
                    options: [
                        "A) It is too fast and causes burnout.",
                        "B) It is highly rigid; accommodating changes after the process has started is difficult and expensive.",
                        "C) It requires too much hardware.",
                        "D) It only works for web applications."
                    ],
                    answer: 1,
                    explanation: "Waterfall's linearity means going 'upstream' to fix a fundamental design flaw during the testing phase is disastrously expensive."
                }
            ]
        },
        'c4-u1t2': {
            title: 'Agile & Scrum Methodologies',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Agile: Moving Fast and Breaking Things</h3>
<p class="mb-4">The Agile Manifesto (2001) revolutionized software engineering. Instead of massive, multi-year linear projects, Agile proposes building software in tiny, iterative cycles (called Sprints). You build a small piece of working software, show it to the client, get feedback, and adapt immediately.</p>

<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded border border-gray-700">
    <li><strong>Individuals and interactions</strong> over processes and tools.</li>
    <li><strong>Working software</strong> over comprehensive documentation.</li>
    <li><strong>Customer collaboration</strong> over contract negotiation.</li>
    <li><strong>Responding to change</strong> over following a rigid plan.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-purple-400">Scrum Framework</h3>
<p class="mb-4">Scrum is the most popular way to implement Agile. It organizes chaos into a highly structured, recurring loop.</p>
<table class="w-full text-left border-collapse mb-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-800 text-gray-200">
        <tr>
            <th class="p-4">Scrum Term</th>
            <th class="p-4">Definition</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-800">
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-blue-300">Sprint</td>
            <td class="p-4">A short, fixed timeframe (usually 2 weeks) to complete a set amount of work.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-yellow-300">Product Backlog</td>
            <td class="p-4">The master "To-Do List" of everything the software needs, maintained by the Product Owner.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-green-300">Daily Stand-up</td>
            <td class="p-4">A strict 15-minute daily meeting where developers say what they did yesterday, what they will do today, and if they are blocked.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-red-300">Scrum Master</td>
            <td class="p-4">A role dedicated to removing blockers for the developers and ensuring Scrum rules are followed. (Basically a shield against management).</td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "In the Scrum framework, what is the purpose of the Daily Stand-up?",
                    options: [
                        "A) To write code collaboratively.",
                        "B) To quickly sync up the team, discuss progress, and identify blockers.",
                        "C) To formally document software requirements for the client.",
                        "D) To present the final software to stakeholders."
                    ],
                    answer: 1,
                    explanation: "It's a fast-paced, 15-minute sync meeting designed purely for alignment and unblocking developers, not for deep technical problem-solving."
                }
            ],
            references: [
                { title: "Agile Manifesto", url: "https://agilemanifesto.org/" }
            ]
        }
    },
    'cs604-u2': {
        'c4-u2t1': {
            title: 'COCOMO Model',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">COCOMO: Constructive Cost Model</h3>
<p class="mb-4">How do you charge a client for software that hasn't been built yet? If you guess randomly, you either overcharge and lose the bid, or undercharge and go bankrupt. <strong>Barry Boehm</strong> invented COCOMO in 1981 to mathematically estimate the cost, effort, and schedule of software projects.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg mb-6">
    <h4 class="text-purple-400 font-bold mb-2">The Base Metric: KLOC</h4>
    <p class="text-gray-300 text-sm">COCOMO's fundamental input is <strong>Kilo Lines of Code (KLOC)</strong>. You have to guess how many thousands of lines of code the final project will be. Yes, guessing lines of code before you start writing is notoriously difficult, which is the primary criticism of COCOMO.</p>
</div>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The Three Modes of COCOMO</h3>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6">
    <li><strong>Organic Mode:</strong> Small teams, highly experienced, working in a familiar environment. Requirements are flexible. (e.g., A small internal payroll app).</li>
    <li><strong>Semi-Detached Mode:</strong> Medium-sized teams, mixed experience. The project is somewhat complex. (e.g., A new database system for a university).</li>
    <li><strong>Embedded Mode:</strong> Large projects with extremely rigid constraints and high complexity. Hardware/Software tightly coupled. (e.g., Flight control software for a fighter jet).</li>
</ul>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 text-center shadow-inner font-mono text-sm text-green-400">
    Effort (Person-Months) = a * (KLOC)^b
</div>
<p class="mb-4 text-gray-400 text-sm italic">The constants 'a' and 'b' change depending on whether you are in Organic, Semi-Detached, or Embedded mode.</p>
            `,
            quizzes: [
                {
                    question: "Which COCOMO mode applies to a highly complex software system with rigid constraints, such as avionics software?",
                    options: ["A) Organic", "B) Semi-Detached", "C) Embedded", "D) Agile"],
                    answer: 2,
                    explanation: "Embedded projects operate under tight constraints (memory, speed, safety) and require rigorous planning and effort."
                }
            ]
        },
        'c4-u2t2': {
            title: 'PERT & Gantt Charts',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Visualizing the Chaos of Scheduling</h3>
<p class="mb-4">Once you have an estimate, you need a schedule. Visualizing dependencies is crucial—you cannot paint a wall before the drywall is installed.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Gantt Charts</h3>
<p class="mb-4 text-gray-300 text-sm">Invented by Henry Gantt, this is a horizontal bar chart that represents a project schedule. The X-axis is time, and the Y-axis lists the tasks.</p>

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
gantt
    title A Simple Software Project
    dateFormat  YYYY-MM-DD
    section Design
    Requirements Analysis :a1, 2026-01-01, 7d
    System Architecture   :a2, after a1, 5d
    section Development
    Database Setup        :a3, after a2, 3d
    Backend API           :a4, after a3, 10d
    Frontend UI           :a5, after a3, 10d
    section Testing
    Integration Tests     :a6, after a4, 5d
</div>

<h3 class="text-xl font-bold mb-2 text-purple-400">PERT Charts (Program Evaluation Review Technique)</h3>
<p class="mb-4 text-gray-300 text-sm">While Gantt charts are great for seeing timelines, PERT charts look like network diagrams. They are superior for identifying the <strong>Critical Path</strong>. The Critical Path is the longest sequence of dependent tasks. If ANY task on the critical path is delayed by 1 day, the ENTIRE project is delayed by 1 day.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded border border-gray-700">
    <li>PERT calculates time probabilistically using three estimates: <strong>Optimistic (O)</strong>, <strong>Most Likely (M)</strong>, and <strong>Pessimistic (P)</strong>.</li>
    <li>Expected Time = (O + 4M + P) / 6</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In project management, what is the 'Critical Path'?",
                    options: [
                        "A) The path that requires the most money.",
                        "B) The sequence of tasks that determines the shortest possible time to complete the project.",
                        "C) The easiest tasks in the project.",
                        "D) The tasks assigned to the Project Manager."
                    ],
                    answer: 1,
                    explanation: "It's the longest chain of dependent tasks. Because they depend on each other, you cannot shorten the project time without shortening the critical path."
                }
            ]
        }
    }
});
