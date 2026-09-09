window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs501-u1': {
        'cs501-u1t1': {
            title: 'Examples of Automata Machines & Foundational Concepts',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Introduction to Automata Theory</h3>
<p class="mb-4"><strong>Automata Theory</strong> is the study of abstract computational devices and machines. It forms the mathematical foundation of computer science, answering questions about what problems can and cannot be computed.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg">
        <h4 class="text-blue-300 font-bold mb-3 text-lg">Foundational Mathematical Concepts</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Symbol:</strong> An indivisible atomic entity (e.g., <code>0, 1, a, b</code>).</li>
            <li><strong>Alphabet (&Sigma;):</strong> A finite, non-empty set of symbols. E.g., Binary alphabet &Sigma; = {0, 1}.</li>
            <li><strong>String / Word:</strong> A finite sequence of symbols chosen from an alphabet (e.g., <code>w = 01101</code>). Length |w| = 5. Empty string denoted &epsilon; or &lambda; (|&epsilon;| = 0).</li>
            <li><strong>Power of Alphabet (&Sigma;<sup>k</sup>):</strong> Set of all strings over &Sigma; of length k. &Sigma;* (Kleene Closure) is the set of all strings including &epsilon;. &Sigma;<sup>+</sup> = &Sigma;* - {&epsilon;}.</li>
            <li><strong>Language (L):</strong> Any subset of &Sigma;*. L &sube; &Sigma;*. If &Sigma; = {0, 1}, L = {0, 00, 000, ...} is a language.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg">
        <h4 class="text-purple-300 font-bold mb-3 text-lg">Real-World Examples of Automata</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Vending Machine:</strong> Tracks deposited coins, transitions between credit states, and dispenses an item when the threshold is reached.</li>
            <li><strong>Traffic Light Controller:</strong> Cycles deterministically through Green &rarr; Yellow &rarr; Red based on timers and pedestrian sensor triggers.</li>
            <li><strong>Elevator Logic:</strong> State represents current floor and motor direction (up, down, idle), responding to floor requests.</li>
            <li><strong>Lexical Analyzer in Compilers:</strong> Scans raw code text character by character to identify tokens (keywords, identifiers, numbers).</li>
        </ul>
    </div>
</div>

<h3 class="text-xl font-bold mb-2 text-blue-400">Automata State Transition Model</h3>
<p class="mb-3 text-gray-400">Example: A deterministic finite automaton recognizing binary strings having an odd number of 1s.</p>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
stateDiagram-v2
    [*] --> q0 : Start
    q0 --> q0 : 0
    q0 --> q1 : 1
    q1 --> q0 : 1
    q1 --> q1 : 0
    q1 --> [*] : Accept (Odd Parity)
</div>

<h3 class="text-xl font-bold mb-3 text-yellow-400">Formal Definition of Finite Automata (FA)</h3>
<p class="mb-4 text-gray-300">A Finite Automaton is represented as a 5-tuple: <code>M = (Q, &Sigma;, &delta;, q<sub>0</sub>, F)</code></p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>Q:</strong> Finite non-empty set of internal states.</li>
    <li><strong>&Sigma;:</strong> Finite set of input symbols (alphabet).</li>
    <li><strong>&delta;:</strong> Transition function mapping <code>Q &times; &Sigma; &rarr; Q</code> (for DFA).</li>
    <li><strong>q<sub>0</sub> &isin; Q:</strong> Initial (start) state.</li>
    <li><strong>F &sube; Q:</strong> Set of accepting / final states.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the difference between Kleene closure (Σ*) and Positive closure (Σ+)?",
                    options: [
                        "A) Σ* includes the empty string ε, whereas Σ+ does not include ε.",
                        "B) Σ+ includes negative numbers, while Σ* is positive.",
                        "C) Σ* is finite, whereas Σ+ is always infinite.",
                        "D) There is no mathematical difference."
                    ],
                    answer: 0,
                    explanation: "Σ* = Σ0 ∪ Σ1 ∪ Σ2 ∪ ... contains all strings of all lengths including length 0 (the empty string ε). Σ+ = Σ1 ∪ Σ2 ∪ ... excludes ε."
                },
                {
                    question: "Which tuple element in M = (Q, Σ, δ, q0, F) specifies the start state?",
                    options: ["A) Q", "B) δ", "C) q0", "D) F"],
                    answer: 2,
                    explanation: "q0 is the initial state where computation begins."
                }
            ]
        },
        'cs501-u1t2': {
            title: 'Finite Automata as Language Acceptor & Translator',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Language Acceptors vs Translators</h3>
<p class="mb-4">Finite automata operate in two fundamental paradigms depending on whether they merely classify input strings or produce an output string:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-green-500 shadow-md">
        <h4 class="text-green-400 font-bold mb-2">1. Automaton as a Language Acceptor</h4>
        <p class="text-sm text-gray-300 mb-3">Accepts or rejects an input string. Computation begins at start state <code>q<sub>0</sub></code>. It reads the string symbol-by-symbol according to transition function &delta;. When the string finishes:</p>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>If current state &isin; F &rarr; <strong>String is Accepted</strong> (w &isin; L(M)).</li>
            <li>If current state &notin; F &rarr; <strong>String is Rejected</strong> (w &notin; L(M)).</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-cyan-500 shadow-md">
        <h4 class="text-cyan-400 font-bold mb-2">2. Automaton as a Translator / Transducer</h4>
        <p class="text-sm text-gray-300 mb-3">Does not just say Yes/No; it converts an input string over alphabet &Sigma; into an output string over alphabet &Delta;.</p>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Generates outputs either on state transitions (Mealy) or on states themselves (Moore).</li>
            <li>Used in parity generators, 2's complement calculators, and binary adders.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "When is an input string w considered accepted by a Finite Automaton M?",
                    options: [
                        "A) When M halts on any arbitrary state.",
                        "B) When the entire string is consumed and the automaton is in a final/accepting state (q ∈ F).",
                        "C) When M enters a loop.",
                        "D) When the string contains only zeros."
                    ],
                    answer: 1,
                    explanation: "Acceptance requires reading the entire string and landing in one of the designated final states."
                }
            ]
        },
        'cs501-u1t3': {
            title: 'Moore Machines & Mealy Machines',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Finite State Machines with Output</h3>
<p class="mb-4">When finite automata generate output symbols rather than accepting/rejecting, they are called <strong>Finite State Machines with Outputs (Transducers)</strong>. The two canonical models are Moore and Mealy machines.</p>

<div class="overflow-x-auto mb-6">
    <table class="w-full text-left bg-gray-900 border border-gray-700 rounded-lg">
        <thead class="bg-gray-800 text-blue-300">
            <tr>
                <th class="p-3">Characteristic</th>
                <th class="p-3">Moore Machine</th>
                <th class="p-3">Mealy Machine</th>
            </tr>
        </thead>
        <tbody class="text-gray-300 text-sm divide-y divide-gray-800">
            <tr>
                <td class="p-3 font-semibold">Output Dependency</td>
                <td class="p-3">Output depends <strong>only on present state</strong>: &lambda;: Q &rarr; &Delta;</td>
                <td class="p-3">Output depends on <strong>present state AND current input</strong>: &lambda;: Q &times; &Sigma; &rarr; &Delta;</td>
            </tr>
            <tr>
                <td class="p-3 font-semibold">Output Length</td>
                <td class="p-3">Length of output is <code>n + 1</code> for input length <code>n</code> (initial state emits output at start).</td>
                <td class="p-3">Length of output is exactly <code>n</code> for input length <code>n</code>.</td>
            </tr>
            <tr>
                <td class="p-3 font-semibold">Hardware Speed</td>
                <td class="p-3">Synchronous; safer against race conditions and glitching.</td>
                <td class="p-3">Reacts faster within the clock cycle since input directly influences output.</td>
            </tr>
            <tr>
                <td class="p-3 font-semibold">Number of States</td>
                <td class="p-3">Generally requires <strong>more states</strong> to represent the same behavior.</td>
                <td class="p-3">Generally requires <strong>fewer or equal states</strong>.</td>
            </tr>
        </tbody>
    </table>
</div>

<h3 class="text-xl font-bold mb-2 text-blue-400">Moore vs Mealy Architecture Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph Moore [Moore: Output inside State]
        M0((q0 / 0)) -->|input 1| M1((q1 / 1))
        M1 -->|input 0| M0
    end
    subgraph Mealy [Mealy: Output on Transition]
        N0((s0)) -->|input 1 / out 1| N1((s1))
        N1 -->|input 0 / out 0| N0
    end
    style M0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style M1 fill:#1e293b,stroke:#10b981,color:#fff
    style N0 fill:#1e293b,stroke:#f59e0b,color:#fff
    style N1 fill:#1e293b,stroke:#ec4899,color:#fff
</div>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
    <div class="font-bold text-amber-300 text-sm mb-1">University Exam Trap: Output Length</div>
    <p class="text-xs text-slate-300">If the input string length is <em>n</em>, a Moore machine produces <strong>n + 1</strong> outputs (emits before reading). A Mealy machine produces exactly <strong>n</strong> outputs. This is asked in virtually every semester viva!</p>
</div>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Formal Tuples</h4>
<ul class="list-disc pl-5 text-gray-300 text-sm space-y-1 mb-4">
    <li><strong>Moore Machine:</strong> (Q, &Sigma;, &Delta;, &delta;, &lambda;, q<sub>0</sub>) where &lambda;: Q &rarr; &Delta;</li>
    <li><strong>Mealy Machine:</strong> (Q, &Sigma;, &Delta;, &delta;, &lambda;, q<sub>0</sub>) where &lambda;: Q &times; &Sigma; &rarr; &Delta;</li>
</ul>
            `,
            quizzes: [
                {
                    question: "If an input string of length 6 is processed by a Moore machine, what is the length of the generated output string?",
                    options: ["A) 5", "B) 6", "C) 7", "D) 12"],
                    answer: 2,
                    explanation: "For an input string of length n, a Moore machine produces an output string of length n + 1 because the start state produces an output prior to reading any inputs."
                },
                {
                    question: "In a Mealy machine, output depends on:",
                    options: [
                        "A) Present state only",
                        "B) Present state and current input symbol",
                        "C) Next state only",
                        "D) Alphabet length only"
                    ],
                    answer: 1,
                    explanation: "Mealy machine output λ is a function of (state, input) ∈ Q × Σ."
                }
            ]
        },
        'cs501-u1t4': {
            title: 'Composite Machines',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Composite Automata Machines</h3>
<p class="mb-4">A <strong>Composite Machine</strong> is formed by interconnecting multiple individual automata to achieve complex computational tasks. Just as modular functions or microservices collaborate in modern software architectures, finite state machines can be combined.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-400">1. Cascade / Series Composition</h4>
        <p class="text-sm text-gray-300">The output sequence of machine M1 serves directly as the input sequence of machine M2. Formally, &Delta;<sub>1</sub> = &Sigma;<sub>2</sub>. Used in pipelines (e.g. tokenizer &rarr; parser filter).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">2. Parallel / Product Composition</h4>
        <p class="text-sm text-gray-300">Both machines M1 and M2 receive the same input symbol simultaneously. The composite state is represented as Cartesian product (q<sub>1</sub>, q<sub>2</sub>) &isin; Q<sub>1</sub> &times; Q<sub>2</sub>. Used to compute union, intersection, or synchronized execution.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-400">3. Feedback Composition</h4>
        <p class="text-sm text-gray-300">The output of M2 is fed back into M1 as an auxiliary input symbol, creating closed-loop control systems.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In parallel (Cartesian product) composition of two machines with n and m states respectively, what is the maximum number of states in the composite machine?",
                    options: ["A) n + m", "B) n * m", "C) n^m", "D) 2^(n+m)"],
                    answer: 1,
                    explanation: "The state space of the product machine is Q1 × Q2, which has |Q1| * |Q2| = n * m states."
                }
            ]
        },
        'cs501-u1t5': {
            title: 'Conversion from Mealy to Moore & Vice Versa',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Equivalence & Conversion Algorithms</h3>
<p class="mb-4">Every Moore machine has an equivalent Mealy machine, and every Mealy machine has an equivalent Moore machine (ignoring the initial symbol of Moore).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500">
        <h4 class="text-indigo-400 font-bold mb-2">Mealy to Moore Conversion</h4>
        <ol class="list-decimal pl-5 space-y-2 text-sm text-gray-300">
            <li>Examine transitions entering each state <code>q<sub>i</sub></code>.</li>
            <li>If state <code>q<sub>i</sub></code> receives transitions with different outputs (e.g., some yield 0, others yield 1), split <code>q<sub>i</sub></code> into multiple sub-states: <code>q<sub>i,0</sub></code> and <code>q<sub>i,1</sub></code>.</li>
            <li>Assign each new state its respective output symbol.</li>
            <li>Replicate outgoing transitions from <code>q<sub>i</sub></code> to all of its split sub-states.</li>
        </ol>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-teal-500">
        <h4 class="text-teal-400 font-bold mb-2">Moore to Mealy Conversion</h4>
        <ol class="list-decimal pl-5 space-y-2 text-sm text-gray-300">
            <li>Direct and straightforward conversion.</li>
            <li>For every state <code>q</code>, find its Moore output <code>&lambda;(q)</code>.</li>
            <li>For every transition entering <code>q</code> via input <code>a</code> from <code>p</code> (i.e. &delta;(p, a) = q), assign the Mealy transition output to be <code>&lambda;(q)</code>.</li>
            <li>The number of states remains identical!</li>
        </ol>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "When converting a Mealy machine to an equivalent Moore machine, what often happens to the number of states?",
                    options: [
                        "A) Number of states always decreases.",
                        "B) Number of states may increase because states receiving distinct outputs must be split.",
                        "C) Number of states always stays strictly identical.",
                        "D) Number of states becomes zero."
                    ],
                    answer: 1,
                    explanation: "If a state in a Mealy machine has incoming transitions with conflicting outputs, it must be split into multiple states in Moore."
                }
            ]
        }
    },
    'cs501-u2': {
        'cs501-u2t1': {
            title: 'Deterministic (DFA) & Non-Deterministic (NDFA) Automata',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    subgraph DFA [Deterministic FA: Exactly 1 Transition per Symbol]
        D0((q0)) -->|a| D1((q1))
        D0 -->|b| D2((q2))
    end
    subgraph NFA [Non-Deterministic FA: 0, 1 or Multiple Branches + &epsilon;]
        N0((p0)) -->|a| N1((p1))
        N0 -->|a| N2((p2))
        N0 -->|&epsilon;| N3((p3))
    end
    style D0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style N0 fill:#1e293b,stroke:#ec4899,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">DFA vs NDFA (NFA)</h3>
<p class="mb-4">Finite automata without output are categorized into Deterministic and Non-Deterministic models:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500">
        <h4 class="text-blue-300 font-bold mb-2">DFA (Deterministic Finite Automata)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>For every state and input symbol, there is <strong>exactly one unique next state</strong>.</li>
            <li>Transition function: <code>&delta;: Q &times; &Sigma; &rarr; Q</code>.</li>
            <li>No &epsilon;-transitions allowed (cannot change state without reading an input symbol).</li>
            <li>Easy to implement directly in software / hardware.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-amber-500">
        <h4 class="text-amber-300 font-bold mb-2">NDFA / NFA (Non-Deterministic)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>For a state and input symbol, there may be <strong>zero, one, or multiple next states</strong>.</li>
            <li>Transition function: <code>&delta;: Q &times; &Sigma; &rarr; 2<sup>Q</sup></code> (Power set of states).</li>
            <li>Can include &epsilon;-transitions (state changes without reading input).</li>
            <li>Conceptual machine with parallel guessing paths.</li>
        </ul>
    </div>
</div>

<div class="bg-gray-900 p-4 rounded-lg border border-gray-700 text-sm text-gray-300">
    <strong class="text-green-400">Crucial Theorem:</strong> DFA and NFA have the <strong>exact same expressive power</strong>. A language is accepted by an NFA if and only if it is accepted by some DFA (both define the class of Regular Languages).
</div>
            `,
            quizzes: [
                {
                    question: "What is the range of the transition function δ for an NDFA with state set Q?",
                    options: ["A) Q", "B) Q × Σ", "C) 2^Q (Power set of Q)", "D) Q!"],
                    answer: 2,
                    explanation: "In NDFA, the transition function maps to any subset of states, which is an element of 2^Q."
                }
            ]
        },
        'cs501-u2t2': {
            title: 'Conversion of NDFA to DFA (Subset Construction)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Subset Construction Algorithm</h3>
<p class="mb-4">To convert an NFA <code>N = (Q<sub>N</sub>, &Sigma;, &delta;<sub>N</sub>, q<sub>0</sub>, F<sub>N</sub>)</code> to an equivalent DFA <code>D = (Q<sub>D</sub>, &Sigma;, &delta;<sub>D</sub>, [q<sub>0</sub>], F<sub>D</sub>)</code>:</p>

<ol class="list-decimal pl-6 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Start State:</strong> The start state of DFA is &epsilon;-closure({q<sub>0</sub>}).</li>
    <li><strong>Transition Calculation:</strong> For every unvisited DFA state <code>S &sube; Q<sub>N</sub></code> and input <code>a &isin; &Sigma;</code>:
        <br><code class="text-yellow-300">&delta;<sub>D</sub>(S, a) = &epsilon;-closure(&cup;<sub>q &isin; S</sub> &delta;<sub>N</sub>(q, a))</code>.
    </li>
    <li>If this results in a new state subset, add it to the list of DFA states.</li>
    <li>Repeat until all states and input combinations are fully mapped.</li>
    <li><strong>Final States:</strong> Any DFA state containing at least one final state from the NFA is marked as an accepting state in the DFA: <code>F<sub>D</sub> = { S &sube; Q<sub>N</sub> | S &cap; F<sub>N</sub> &ne; &empty; }</code>.</li>
</ol>
<p class="text-sm text-gray-400">If an NFA has <code>n</code> states, its equivalent DFA can have at most <code>2<sup>n</sup></code> states (exponential worst-case state explosion).</p>
            `,
            quizzes: [
                {
                    question: "If an NFA has n states, what is the theoretical maximum number of states in its equivalent minimal/converted DFA?",
                    options: ["A) n^2", "B) 2^n", "C) 2n", "D) n!"],
                    answer: 1,
                    explanation: "Each DFA state represents a subset of the NFA states, giving a maximum of 2^n possible subsets."
                }
            ]
        },
        'cs501-u2t3': {
            title: 'Minimization of Automata Machines',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">DFA Minimization (Myhill-Nerode & Partitioning)</h3>
<p class="mb-4">Given a DFA, there is a unique minimum-state DFA that accepts the same regular language (up to state renaming). Minimization removes unreachable states and merges equivalent states.</p>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Equivalence Partitioning Method</h4>
<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-300 mb-6 bg-gray-800 p-4 rounded-lg">
    <li><strong>Eliminate Unreachable States:</strong> Traverse from the start state; drop any states that cannot be reached.</li>
    <li><strong>0-Equivalence (P<sub>0</sub>):</strong> Partition states into two groups: Final states <code>F</code> and Non-final states <code>Q - F</code>.</li>
    <li><strong>k-Equivalence (P<sub>k+1</sub>):</strong> Split each group if two states transition to different groups on some input symbol <code>a &isin; &Sigma;</code>.</li>
    <li><strong>Stop Condition:</strong> When <code>P<sub>k+1</sub> = P<sub>k</sub></code> (no further partitions occur).</li>
    <li>Each final group becomes a single state in the minimized DFA.</li>
</ol>
            `,
            quizzes: [
                {
                    question: "What is the initial step (P0 partition) in minimizing a DFA?",
                    options: [
                        "A) Merging start state with final states.",
                        "B) Dividing states into accepting (final) states and non-accepting states.",
                        "C) Finding loops.",
                        "D) Inverting transitions."
                    ],
                    answer: 1,
                    explanation: "P0 partitions states into two equivalence classes: F and Q \\ F."
                }
            ]
        },
        'cs501-u2t4': {
            title: 'Regular Expressions & Arden’s Theorem',
            content: `

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">RGPV / University Exam Solved Numerical: Arden's Theorem</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Statement:</strong> If P and Q are regular expressions over &Sigma;, and P does not contain &epsilon;, then <code>R = Q + RP</code> has a unique solution <code>R = QP*</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div class="text-slate-400">// Given System of State Equations (q1 is start, q2 is final):</div>
        <div>q1 = q1(0) + &epsilon;            (Eq 1)</div>
        <div>q2 = q1(1) + q2(0 + 1)       (Eq 2)</div>
        <div class="text-slate-400 mt-2">// Step 1: Solve Eq 1 directly with Arden's (R = q1, Q = &epsilon;, P = 0):</div>
        <div class="text-cyan-300">q1 = &epsilon; &middot; 0* = 0*</div>
        <div class="text-slate-400 mt-2">// Step 2: Substitute q1 into Eq 2:</div>
        <div>q2 = (0*)1 + q2(0 + 1)</div>
        <div class="text-slate-400 mt-2">// Step 3: Apply Arden's to q2 (Q = 0*1, P = (0 + 1)):</div>
        <div class="text-yellow-300 font-bold">q2 = (0*1)(0 + 1)*  <-- Final Regular Expression</div>
    </div>
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Regular Expressions & Arden’s Theorem</h3>
<p class="mb-4"><strong>Regular Expressions (RE)</strong> provide an algebraic notation for defining regular languages over an alphabet.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-pink-500 mb-6 shadow-md">
    <h4 class="text-pink-400 font-bold mb-2 text-lg">Arden's Theorem</h4>
    <p class="text-sm text-gray-300 mb-2">Let P and Q be two regular expressions over &Sigma;. If P does not contain &epsilon; (null string), then the equation:</p>
    <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-base mb-2">
        R = Q + RP
    </div>
    <p class="text-sm text-gray-300 mb-2">has a unique solution given by:</p>
    <div class="bg-gray-900 p-3 rounded font-mono text-green-300 text-base">
        R = QP*
    </div>
    <p class="text-xs text-gray-400 mt-2"><strong>Usage:</strong> Used to systematically find the regular expression accepted by any Finite Automaton by setting up state equations: <code>q<sub>i</sub> = &sum; q<sub>j</sub>a<sub>ji</sub></code>.</p>
</div>
            `,
            quizzes: [
                {
                    question: "According to Arden's Theorem, if R = Q + RP and P does not contain ε, what is the unique solution for R?",
                    options: ["A) R = P*Q", "B) R = QP*", "C) R = Q*P", "D) R = (Q + P)*"],
                    answer: 1,
                    explanation: "Arden's theorem states R = QP* when P does not contain ε."
                }
            ]
        },
        'cs501-u2t5': {
            title: 'Language Operations (Union, Intersection, Closure) & 2-Way DFA',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Closure Properties of Regular Languages</h3>
<p class="mb-4">Regular languages are closed under a wide variety of operations:</p>

<ul class="list-disc pl-5 space-y-2 text-sm text-gray-300 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><strong>Union:</strong> If L1 and L2 are regular, L1 &cup; L2 is regular.</li>
    <li><strong>Intersection:</strong> L1 &cap; L2 is regular (proven via product automaton).</li>
    <li><strong>Concatenation:</strong> L1 &bull; L2 is regular.</li>
    <li><strong>Kleene Star (Closure):</strong> L1* is regular.</li>
    <li><strong>Complement:</strong> L1' = &Sigma;* - L1 is regular (swap final and non-final states in DFA).</li>
    <li><strong>Reversal:</strong> L<sup>R</sup> is regular.</li>
</ul>

<h4 class="text-lg font-bold text-teal-400 mb-2">Two-Way DFA (2-DFA)</h4>
<p class="text-sm text-gray-300">A 2-way DFA can move its input tape head left (L), right (R), or stationary, but <strong>cannot write</strong> to the tape. Remarkably, 2-way DFAs recognize <em>only regular languages</em>—the exact same class as standard 1-way DFAs!</p>
            

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Proof: Pumping Lemma for Regular Languages</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Prove that:</strong> <code>L = { 0^n 1^n | n &ge; 0 }</code> is NOT regular.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Assume for contradiction that L is regular with pumping length p.</div>
        <div>2. Choose string s = 0^p 1^p &isin; L. Note that |s| = 2p &ge; p.</div>
        <div>3. By Pumping Lemma, s can be split into s = xyz such that:</div>
        <div class="text-cyan-300">   - |xy| &le; p</div>
        <div class="text-cyan-300">   - |y| &ge; 1</div>
        <div class="text-cyan-300">   - For all i &ge; 0, x(y^i)z &isin; L</div>
        <div>4. Since |xy| &le; p, y must consist entirely of 0s: y = 0^k (where 1 &le; k &le; p).</div>
        <div>5. Now pump i = 2: s' = x(y^2)z = 0^(p+k) 1^p.</div>
        <div class="text-yellow-300 font-bold">6. Contradiction: s' has more 0s than 1s, so s' &notin; L! Hence, L is NOT regular. Q.E.D.</div>
    </div>
</div>
`,
            quizzes: [
                {
                    question: "Are regular languages closed under intersection?",
                    options: [
                        "A) No, only under union and star.",
                        "B) Yes, if L1 and L2 are regular, L1 ∩ L2 is also regular.",
                        "C) Only if both languages are finite.",
                        "D) Only for binary alphabets."
                    ],
                    answer: 1,
                    explanation: "Regular languages are closed under union, intersection, complement, concatenation, and Kleene star."
                }
            ]
        }
    },
    'cs501-u3': {
        'cs501-u3t1': {
            title: 'Types of Grammar & Chomsky Hierarchy',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    T0[Type 0: Unrestricted Grammar / Turing Machine] --> T1[Type 1: Context-Sensitive Grammar / LBA]
    T1 --> T2[Type 2: Context-Free Grammar / Pushdown Automaton]
    T2 --> T3[Type 3: Regular Grammar / Finite Automaton]
    style T0 fill:#1e293b,stroke:#ef4444,color:#fff
    style T1 fill:#1e293b,stroke:#f59e0b,color:#fff
    style T2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style T3 fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Chomsky Hierarchy</h3>
<p class="mb-4">Noam Chomsky classified formal grammars into four distinct nested levels based on production rule restrictions:</p>

<div class="overflow-x-auto mb-6">
    <table class="w-full text-left bg-gray-900 border border-gray-700 rounded-lg text-sm">
        <thead class="bg-gray-800 text-yellow-300">
            <tr>
                <th class="p-3">Grammar</th>
                <th class="p-3">Language</th>
                <th class="p-3">Automaton Machine</th>
                <th class="p-3">Production Form</th>
            </tr>
        </thead>
        <tbody class="text-gray-300 divide-y divide-gray-800">
            <tr>
                <td class="p-3 font-bold text-red-400">Type 0</td>
                <td class="p-3">Unrestricted / Recursively Enumerable</td>
                <td class="p-3">Turing Machine</td>
                <td class="p-3">&alpha; &rarr; &beta; (no restrictions on &alpha;, &beta;)</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-orange-400">Type 1</td>
                <td class="p-3">Context Sensitive</td>
                <td class="p-3">Linear Bounded Automaton (LBA)</td>
                <td class="p-3">&alpha; &rarr; &beta; where |&alpha;| &le; |&beta;|</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-emerald-400">Type 2</td>
                <td class="p-3">Context Free (CFL)</td>
                <td class="p-3">Pushdown Automaton (PDA)</td>
                <td class="p-3">A &rarr; &alpha; where A &isin; V<sub>N</sub>, &alpha; &isin; (V<sub>N</sub> &cup; &Sigma;)*</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-blue-400">Type 3</td>
                <td class="p-3">Regular Language</td>
                <td class="p-3">Finite State Automata (FSA)</td>
                <td class="p-3">A &rarr; aB or A &rarr; a (Right linear)</td>
            </tr>
        </tbody>
    </table>
</div>
            `,
            quizzes: [
                {
                    question: "Which type in Chomsky's hierarchy corresponds to Context-Free Languages, and what machine accepts them?",
                    options: [
                        "A) Type 3; Finite Automata",
                        "B) Type 2; Pushdown Automata (PDA)",
                        "C) Type 1; Linear Bounded Automata",
                        "D) Type 0; Turing Machine"
                    ],
                    answer: 1,
                    explanation: "Type 2 grammars generate Context Free Languages (CFLs), recognized by Pushdown Automata (PDAs)."
                }
            ]
        },
        'cs501-u3t2': {
            title: 'Context Sensitive, Context Free & Regular Grammars',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Grammar Categories & Derivations</h3>
<p class="mb-4">A formal grammar is defined as a 4-tuple <code>G = (V, T, P, S)</code> where:</p>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-4">
    <li><strong>V:</strong> Finite set of Non-terminal variables (e.g. S, A, B).</li>
    <li><strong>T:</strong> Finite set of Terminal symbols (e.g. a, b, 0, 1).</li>
    <li><strong>P:</strong> Finite set of Production rules.</li>
    <li><strong>S:</strong> Start variable (S &isin; V).</li>
</ul>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h4 class="font-bold text-green-400">Regular Grammars (Type 3)</h4>
        <p class="text-sm text-gray-300">Restricted to rules of the form <code>A &rarr; wB</code> or <code>A &rarr; w</code> (Right-linear), or <code>A &rarr; Bw</code> (Left-linear). Cannot count or match nested structures.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-400">Context-Free Grammars (Type 2)</h4>
        <p class="text-sm text-gray-300">Left-hand side must consist of <strong>exactly one non-terminal</strong>: <code>A &rarr; &alpha;</code>. Capable of matching brackets and palindromes (e.g. <code>L = {a<sup>n</sup>b<sup>n</sup> | n &ge; 1}</code> generated by <code>S &rarr; aSb | ab</code>).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which of the following production rules defines a Context-Free Grammar?",
                    options: [
                        "A) aB -> CD",
                        "B) S -> aSb | ab",
                        "C) aBb -> cd",
                        "D) S -> SSSSS -> TTTTT"
                    ],
                    answer: 1,
                    explanation: "In CFG, the LHS must be a single non-terminal variable (like S), without surrounding context symbols."
                }
            ]
        },
        'cs501-u3t3': {
            title: 'Derivation Trees & Ambiguity in Grammar',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Parse Trees and Grammar Ambiguity</h3>
<p class="mb-4">A <strong>Derivation Tree (Parse Tree)</strong> is a hierarchical tree representation of the syntactic structure of a string derived from a CFG.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 mb-6 shadow-lg">
    <h4 class="text-red-400 font-bold mb-2 text-lg">Ambiguous Grammar</h4>
    <p class="text-sm text-gray-300 mb-3">A grammar G is called <strong>ambiguous</strong> if there exists at least one string <code>w &isin; L(G)</code> that has:</p>
    <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
        <li>Two or more distinct derivation (parse) trees.</li>
        <li>OR two or more distinct Leftmost Derivations (LMD).</li>
        <li>OR two or more distinct Rightmost Derivations (RMD).</li>
    </ul>
    <p class="text-xs text-gray-400 mt-3"><strong>Inherent Ambiguity:</strong> A context-free language L is inherently ambiguous if <em>every</em> CFG generating L is ambiguous.</p>
</div>
            `,
            quizzes: [
                {
                    question: "A context-free grammar is ambiguous if for some string w in L(G):",
                    options: [
                        "A) It has more than 5 non-terminals.",
                        "B) It produces two or more distinct parse trees (or two distinct leftmost derivations).",
                        "C) It cannot be parsed in Python.",
                        "D) The string length is even."
                    ],
                    answer: 1,
                    explanation: "Ambiguity is defined as having more than one distinct derivation tree or leftmost derivation for the same string."
                }
            ]
        },
        'cs501-u3t4': {
            title: 'Simplification of CFG: Eliminating Null & Unit Productions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">CFG Simplification Pipeline</h3>
<p class="mb-4">Before converting a CFG into normal forms, it must be simplified through three phases:</p>

<ol class="list-decimal pl-6 space-y-3 text-sm text-gray-300 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Elimination of Useless Symbols:</strong>
        <br>Remove variables that do not generate any terminal string (non-generating), and remove symbols that cannot be reached from the start symbol S (non-reachable).
    </li>
    <li><strong>Elimination of Null (&epsilon; / &lambda;) Productions:</strong>
        <br>Identify nullable variables <code>A</code> where <code>A &rArr;* &epsilon;</code>. For each rule containing nullable variables, generate rules simulating both their presence and absence.
    </li>
    <li><strong>Elimination of Unit Productions:</strong>
        <br>Remove rules of the form <code>A &rarr; B</code> (where A, B &isin; V). If <code>A &rarr; B</code> and <code>B &rarr; &alpha;</code>, replace with <code>A &rarr; &alpha;</code>.
    </li>
</ol>
            `,
            quizzes: [
                {
                    question: "What is a unit production in a Context-Free Grammar?",
                    options: [
                        "A) A production of the form A -> B where both A and B are single non-terminals.",
                        "B) A production that generates exactly 1 terminal symbol.",
                        "C) A production with a single character.",
                        "D) A production of length 0."
                    ],
                    answer: 0,
                    explanation: "Unit productions have the form A -> B where A, B ∈ V (variables)."
                }
            ]
        },
        'cs501-u3t5': {
            title: 'Normal Forms: Chomsky Normal Form (CNF) & Greibach Normal Form (GNF)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Normal Forms in Formal Grammars</h3>
<p class="mb-4">Normal forms impose standard syntactic restrictions on grammar rules to simplify parsing algorithms and proofs (such as the CYK algorithm and Pumping Lemma).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500 shadow-md">
        <h4 class="text-indigo-300 font-bold mb-2">Chomsky Normal Form (CNF)</h4>
        <p class="text-sm text-gray-300 mb-3">Every rule must be in one of two forms:</p>
        <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm space-y-1 mb-3">
            <div>A &rarr; BC &nbsp;(two non-terminals)</div>
            <div>A &rarr; a &nbsp;&nbsp;(one terminal)</div>
        </div>
        <p class="text-xs text-gray-400">If string w has length n, any CNF parse tree has exactly <code>2n - 1</code> steps.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-cyan-500 shadow-md">
        <h4 class="text-cyan-300 font-bold mb-2">Greibach Normal Form (GNF)</h4>
        <p class="text-sm text-gray-300 mb-3">Every rule must start with exactly one terminal symbol:</p>
        <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm space-y-1 mb-3">
            <div>A &rarr; a&alpha;</div>
            <div class="text-gray-400 text-xs">where a &isin; T, and &alpha; &isin; V* (sequence of 0 or more non-terminals)</div>
        </div>
        <p class="text-xs text-gray-400">Each step consumes exactly 1 terminal, making parsing linear in derivation steps.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In Chomsky Normal Form (CNF), all production rules must strictly have which shapes?",
                    options: [
                        "A) A -> BC or A -> a",
                        "B) A -> aB or A -> a",
                        "C) A -> aBC",
                        "D) A -> α where α ∈ T*"
                    ],
                    answer: 0,
                    explanation: "CNF rules must either produce exactly two non-terminals (A -> BC) or one terminal (A -> a)."
                }
            ]
        }
    },
    'cs501-u4': {
        'cs501-u4t1': {
            title: 'Pushdown Automata: Architecture & Examples',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Input[Input Tape: a a b b] --> Control[Finite Control State Q]
    Control <-->|Push / Pop & Read Top| Stack[LIFO Stack Memory: Z0, a, a]
    style Input fill:#1e293b,stroke:#64748b,color:#fff
    style Control fill:#1e293b,stroke:#3b82f6,color:#fff
    style Stack fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Pushdown Automata (PDA)</h3>
<p class="mb-4">A <strong>Pushdown Automaton</strong> is essentially a Finite Automaton augmented with an auxiliary <strong>unbounded Last-In First-Out (LIFO) stack</strong> memory. This stack allows the machine to remember an arbitrary count of symbols, enabling recognition of non-regular languages like <code>L = {a<sup>n</sup>b<sup>n</sup> | n &ge; 0}</code>.</p>

<h4 class="text-lg font-bold text-yellow-300 mb-2">7-Tuple Formal Definition</h4>
<p class="text-sm text-gray-300 mb-4"><code>M = (Q, &Sigma;, &Gamma;, &delta;, q<sub>0</sub>, Z<sub>0</sub>, F)</code></p>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <li><strong>Q:</strong> Finite set of states.</li>
    <li><strong>&Sigma;:</strong> Finite input alphabet.</li>
    <li><strong>&Gamma;:</strong> Finite stack alphabet.</li>
    <li><strong>&delta;:</strong> Transition function mapping <code>Q &times; (&Sigma; &cup; {&epsilon;}) &times; &Gamma; &rarr; Finite subsets of Q &times; &Gamma;*</code>.</li>
    <li><strong>q<sub>0</sub> &isin; Q:</strong> Initial state.</li>
    <li><strong>Z<sub>0</sub> &isin; &Gamma;:</strong> Initial start stack symbol.</li>
    <li><strong>F &sube; Q:</strong> Set of accepting states.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "How does a Pushdown Automaton differ structurally from a Finite Automaton?",
                    options: [
                        "A) A PDA has an infinite output tape.",
                        "B) A PDA includes an infinite LIFO stack memory.",
                        "C) A PDA has multiple start states.",
                        "D) A PDA cannot accept strings of odd length."
                    ],
                    answer: 1,
                    explanation: "The key addition in a PDA is the unbounded stack data structure operated by push and pop."
                }
            ]
        },
        'cs501-u4t2': {
            title: 'Deterministic vs Non-Deterministic PDA',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">DPDA vs NPDA</h3>
<p class="mb-4">Unlike Finite Automata where DFA and NFA are equal in power, <strong>Deterministic PDA (DPDA) is strictly less powerful than Non-Deterministic PDA (NPDA)</strong>!</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-amber-500">
        <h4 class="text-amber-400 font-bold mb-2">Deterministic PDA (DPDA)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>At most one transition applies for any (state, input, stack top).</li>
            <li>If &delta;(q, &epsilon;, X) is defined, then &delta;(q, a, X) must be empty for all a &isin; &Sigma;.</li>
            <li>Accepts <strong>Deterministic Context-Free Languages (DCFLs)</strong>.</li>
            <li>Forms the foundation for programming languages and LR parsers.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-emerald-500">
        <h4 class="text-emerald-400 font-bold mb-2">Non-Deterministic PDA (NPDA)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>Can explore multiple choices / branches at any step.</li>
            <li>Can recognize languages like even-length palindromes: <code>L = {w w<sup>R</sup> | w &isin; {a,b}*}</code> where the center point is not marked.</li>
            <li>Accepts the full class of Context-Free Languages (CFL).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Is Deterministic Pushdown Automata (DPDA) equivalent in expressive power to Non-Deterministic Pushdown Automata (NPDA)?",
                    options: [
                        "A) Yes, exactly like DFA and NFA.",
                        "B) No, NPDA is strictly more expressive than DPDA (e.g., even palindromes without middle markers cannot be accepted by DPDA).",
                        "C) No, DPDA is more expressive than NPDA.",
                        "D) DPDA only accepts regular languages."
                    ],
                    answer: 1,
                    explanation: "DPDAs define DCFLs, which are a strict subset of CFLs recognized by NPDAs."
                }
            ]
        },
        'cs501-u4t3': {
            title: 'Acceptance by Final State vs Empty Stack',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Two Acceptance Mechanisms in PDA</h3>
<p class="mb-4">A Pushdown Automaton can be designed to accept strings using either of two criteria:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 class="font-bold text-blue-400">1. Acceptance by Final State (L(M))</h4>
        <p class="text-sm text-gray-300">String <code>w</code> is accepted if starting from <code>(q<sub>0</sub>, w, Z<sub>0</sub>)</code>, the machine consumes the whole string and reaches an accepting state <code>q<sub>f</sub> &isin; F</code>, regardless of what remains on the stack.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 class="font-bold text-purple-400">2. Acceptance by Empty Stack (N(M))</h4>
        <p class="text-sm text-gray-300">String <code>w</code> is accepted if upon reading the entire string, the stack becomes completely empty (null stack), regardless of whether the final state is marked accepting.</p>
    </div>
</div>
<p class="text-sm text-gray-300 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <strong class="text-green-400">Equivalence:</strong> For any language accepted by empty stack, there exists a PDA accepting the exact same language by final state, and vice versa: <code>L(PDA<sub>final</sub>) = L(PDA<sub>empty</sub>) = CFL</code>.
</p>
            `,
            quizzes: [
                {
                    question: "Are languages accepted by PDA via empty stack mathematically identical to languages accepted by final state?",
                    options: [
                        "A) No, final state acceptances can accept non-CFLs.",
                        "B) Yes, both mechanisms recognize the exact same family of Context-Free Languages.",
                        "C) Only for regular languages.",
                        "D) Empty stack is strictly more powerful."
                    ],
                    answer: 1,
                    explanation: "Both acceptance methods are equivalent for NPDAs, accepting all Context-Free Languages."
                }
            ]
        },
        'cs501-u4t4': {
            title: 'Conversion of PDA into Context Free Grammar & Vice Versa',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Equivalence of CFG and PDA</h3>
<p class="mb-4">A language is Context-Free if and only if it is accepted by some Pushdown Automaton.</p>

<h4 class="text-lg font-bold text-teal-300 mb-2">CFG to PDA Construction (Top-Down / Leftmost)</h4>
<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-300 mb-6 bg-gray-800 p-4 rounded-lg">
    <li>Convert CFG into Greibach Normal Form (GNF) or keep standard CFG with start symbol S.</li>
    <li>Initialize PDA stack with start variable S and start state q.</li>
    <li>For rule <code>A &rarr; &alpha;</code>, add transition: <code>&delta;(q, &epsilon;, A) = (q, &alpha;)</code>.</li>
    <li>For every terminal <code>a</code>, add matching transition: <code>&delta;(q, a, a) = (q, &epsilon;)</code>.</li>
</ol>
            `,
            quizzes: [
                {
                    question: "What class of languages is recognized by Pushdown Automata?",
                    options: ["A) Regular Languages", "B) Context-Free Languages", "C) Context-Sensitive Languages", "D) Unrestricted Languages"],
                    answer: 1,
                    explanation: "PDAs accept exactly the Context-Free Languages (CFLs)."
                }
            ]
        },
        'cs501-u4t5': {
            title: 'CFG Equivalent to PDA & Petrinet Model',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Petri Nets & Concurrent Automata</h3>
<p class="mb-4">While finite automata and pushdown automata model sequential execution, <strong>Petri Nets</strong> model concurrent, asynchronous, distributed, and parallel systems.</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Places (P):</strong> Circles representing conditions, buffers, or states.</li>
    <li><strong>Transitions (T):</strong> Bars/boxes representing events that can fire.</li>
    <li><strong>Arcs (A):</strong> Directed arrows connecting Places to Transitions or Transitions to Places (bipartite graph; no arc between two places or two transitions).</li>
    <li><strong>Tokens:</strong> Dots inside places representing active resources. When all input places of a transition hold sufficient tokens, the transition is enabled and can <em>fire</em>, consuming input tokens and producing output tokens.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What are the two types of nodes in a bipartite Petri Net graph?",
                    options: [
                        "A) Threads and Processors",
                        "B) Places (circles) and Transitions (rectangles/bars)",
                        "C) Stacks and Queues",
                        "D) Sockets and Ports"
                    ],
                    answer: 1,
                    explanation: "Petri nets consist of Places (conditions) and Transitions (events) with directed arcs between them."
                }
            ]
        }
    },
    'cs501-u5': {
        'cs501-u5t1': {
            title: 'Turing Machine: Techniques for Construction',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Turing Machine (TM)</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Tape[Infinite Two-Way Memory Tape: ... | B | 0 | 1 | 1 | 0 | B | ...]
    Head[Read/Write Head: Can Read, Overwrite & Move Left/Right] --> Tape
    Control[Finite State Control Register Q] --> Head
    style Tape fill:#1e293b,stroke:#64748b,color:#fff
    style Head fill:#1e293b,stroke:#f59e0b,color:#fff
    style Control fill:#1e293b,stroke:#3b82f6,color:#fff
</div>
<p class="mb-4">Proposed by Alan Turing in 1936, the <strong>Turing Machine</strong> is the ultimate abstract model of modern computers. It consists of a finite control head and an <strong>infinite read-write tape</strong> divided into discrete cells.</p>

<h4 class="text-lg font-bold text-yellow-300 mb-2">7-Tuple Formal Definition</h4>
<p class="text-sm text-gray-300 mb-4"><code>M = (Q, &Sigma;, &Gamma;, &delta;, q<sub>0</sub>, B, F)</code></p>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <li><strong>Q:</strong> Finite set of states.</li>
    <li><strong>&Sigma;:</strong> Input alphabet (B &notin; &Sigma;).</li>
    <li><strong>&Gamma;:</strong> Tape alphabet (&Sigma; &sub; &Gamma; and B &isin; &Gamma;).</li>
    <li><strong>B:</strong> Blank symbol filling unused tape cells.</li>
    <li><strong>&delta;:</strong> Transition function: <code>Q &times; &Gamma; &rarr; Q &times; &Gamma; &times; {L, R}</code>.</li>
    <li><strong>q<sub>0</sub>:</strong> Start state; <strong>F:</strong> Final / accepting states.</li>
</ul>

<h4 class="text-lg font-bold text-teal-400 mb-2">Construction Techniques</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
    <li><strong>Storage in Finite Control:</strong> Remembering a symbol in state tuple <code>[q, a]</code>.</li>
    <li><strong>Multiple Tracks:</strong> Partitioning single tape cells into multiple track components.</li>
    <li><strong>Subroutines:</strong> Reusable sub-machines for tasks like copying, shifting, or incrementing.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What operations can a standard Turing Machine tape head perform in a single transition step?",
                    options: [
                        "A) Read symbol, write new symbol, and move head Left or Right.",
                        "B) Read input only without moving.",
                        "C) Only delete symbols.",
                        "D) Move to any random index instantaneously."
                    ],
                    answer: 0,
                    explanation: "A Turing transition reads the current symbol, writes a replacement symbol, changes state, and shifts head Left (L) or Right (R)."
                }
            ]
        },
        'cs501-u5t2': {
            title: 'Universal TM, Multitape, Multihead & Multidimensional TM',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Variations of Turing Machines</h3>
<p class="mb-4">Several extensions of Turing machines exist, but all have been proven to have <strong>identical computational power</strong> to the standard single-tape TM:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-300">1. Multitape Turing Machine</h4>
        <p class="text-sm text-gray-300">Has k independent tapes with k independent read/write heads. Can simulate an n-step computation of a k-tape machine on a single tape machine in at most <code>O(n<sup>2</sup>)</code> steps.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-300">2. Multihead & Multidimensional TM</h4>
        <p class="text-sm text-gray-300">Multiple heads on a single tape or 2D/3D grid of tape cells (moves L, R, U, D). Equivalent to standard 1D TM.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">3. Universal Turing Machine (UTM)</h4>
        <p class="text-sm text-gray-300">A Turing Machine <code>U</code> capable of taking as input the encoded description of *any* arbitrary Turing machine <code>&lang;M&rang;</code> and an input string <code>w</code>, simulating the execution of M on w: <code>U(&lang;M, w&rang;) = M(w)</code>. This is the direct theoretical blueprint of the programmable general-purpose computer!</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is a Universal Turing Machine (UTM)?",
                    options: [
                        "A) A machine with infinite processors.",
                        "B) A single Turing Machine that can simulate any other Turing Machine given its description <M> and input w.",
                        "C) A machine that solves the Halting problem.",
                        "D) A mechanical calculator."
                    ],
                    answer: 1,
                    explanation: "A UTM is a programmable machine that interprets and runs any machine code <M> on input string w."
                }
            ]
        },
        'cs501-u5t3': {
            title: 'Decidability & Recursively Enumerable Languages',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Decidability & Language Classes</h3>
<p class="mb-4">Turing computability defines the ultimate boundaries of computation:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-green-500">
        <h4 class="text-green-400 font-bold mb-2">Recursive (Decidable) Languages</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Accepted by a Turing machine that is guaranteed to <strong>always halt</strong> (either accept or reject) on every input string.</li>
            <li>No infinite loops allowed. Also called a Decider or Algorithm.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500">
        <h4 class="text-red-400 font-bold mb-2">Recursively Enumerable (RE) Languages</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Accepted by a TM that halts and accepts if <code>w &isin; L</code>.</li>
            <li>If <code>w &notin; L</code>, the machine may reject OR <strong>loop infinitely</strong>.</li>
            <li>Partially decidable.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What distinguishes a Recursive (Decidable) language from a purely Recursively Enumerable language?",
                    options: [
                        "A) A Recursive language is accepted by a TM that is guaranteed to halt on all inputs (accept or reject).",
                        "B) A Recursive language cannot be executed on computers.",
                        "C) A Recursive language is finite.",
                        "D) There is no distinction."
                    ],
                    answer: 0,
                    explanation: "Decidable languages have a Turing Machine that always halts on every input string."
                }
            ]
        },
        'cs501-u5t4': {
            title: 'Halting Problem of Turing Machine & Post Correspondence Problem',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Undecidability & Impossibility Proofs</h3>
<p class="mb-4">Not all well-defined mathematical problems can be solved by algorithms. Some are provably undecidable.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-rose-500">
        <h4 class="text-rose-400 font-bold mb-2 text-lg">The Halting Problem (Alan Turing, 1936)</h4>
        <p class="text-sm text-gray-300 mb-2">Given an arbitrary Turing machine description <code>&lang;M&rang;</code> and an input <code>w</code>, determine whether <code>M</code> halts on <code>w</code> or loops forever.</p>
        <p class="text-sm text-yellow-300 font-semibold mb-2">Theorem: The Halting Problem is UNDECIDABLE.</p>
        <p class="text-xs text-gray-400">Proof by contradiction via Cantor's diagonal argument: If a master decider H exists, construct machine D that calls H on its own description and does the exact opposite. D halts if H says it loops, and loops if H says it halts—a direct logical paradox.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-amber-500">
        <h4 class="text-amber-400 font-bold mb-2 text-lg">Post Correspondence Problem (PCP)</h4>
        <p class="text-sm text-gray-300">Given two lists of strings <code>A = (x<sub>1</sub>, ..., x<sub>k</sub>)</code> and <code>B = (y<sub>1</sub>, ..., y<sub>k</sub>)</code>, find an index sequence <code>i<sub>1</sub>, i<sub>2</sub>, ..., i<sub>m</sub></code> such that concatenating <code>x<sub>i1</sub>...x<sub>im</sub> = y<sub>i1</sub>...y<sub>im</sub></code>. Emil Post proved in 1946 that PCP is undecidable, making it a primary tool to prove undecidability in grammars (e.g. CFG ambiguity).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What does Turing's Halting Problem prove?",
                    options: [
                        "A) All computer programs terminate in finite time.",
                        "B) It is mathematically impossible to write a general algorithm that decides whether an arbitrary program will halt or loop infinitely.",
                        "C) Turing machines cannot run out of memory.",
                        "D) Python is faster than C."
                    ],
                    answer: 1,
                    explanation: "The Halting problem is the classic undecidable problem: no general algorithm can decide termination for all (program, input) pairs."
                }
            ]
        },
        'cs501-u5t5': {
            title: 'P, NP & NP-Complete Problems',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Computational Complexity Classes</h3>
<p class="mb-4">Complexity theory studies the <em>resources</em> (time and memory space) required to solve decidable problems:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-green-500">
        <h4 class="text-green-400 font-bold mb-2">P (Polynomial Time)</h4>
        <p class="text-xs text-gray-300 mb-2">Problems solvable by a <strong>Deterministic Turing Machine</strong> in polynomial time <code>O(n<sup>k</sup>)</code>.</p>
        <p class="text-xs text-gray-400">Examples: Sorting, Shortest Path (Dijkstra), Matrix multiplication.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-yellow-500">
        <h4 class="text-yellow-400 font-bold mb-2">NP (Non-deterministic Polynomial)</h4>
        <p class="text-xs text-gray-300 mb-2">Problems whose proposed solutions can be <strong>verified</strong> by a deterministic TM in polynomial time.</p>
        <p class="text-xs text-gray-400">Examples: Traveling Salesperson Problem, Knapsack, Graph Coloring.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-red-500">
        <h4 class="text-red-400 font-bold mb-2">NP-Complete</h4>
        <p class="text-xs text-gray-300 mb-2">The hardest problems in NP. If <em>any single</em> NP-Complete problem can be solved in polynomial time, then <strong>P = NP</strong>!</p>
        <p class="text-xs text-gray-400">Cook-Levin Theorem: Boolean Satisfiability (SAT) was the first proven NP-complete problem.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which problem was proven to be the first NP-Complete problem by the Cook-Levin Theorem?",
                    options: [
                        "A) Merge Sort",
                        "B) Boolean Satisfiability (SAT / 3-SAT)",
                        "C) Binary Search",
                        "D) Dijkstra's Algorithm"
                    ],
                    answer: 1,
                    explanation: "Stephen Cook and Leonid Levin independently proved that Boolean Satisfiability (SAT) is NP-Complete."
                }
            ]
        }
    }
});
