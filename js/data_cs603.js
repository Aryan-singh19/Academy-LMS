window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs603-u1': {
        'c3-u1t1': {
            title: 'Tokenization & Scanners',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The First Phase: Lexical Analysis</h3>
<p class="mb-4">A compiler does not read your code like a human. When it looks at a file, it just sees one giant string of raw characters. The very first job of a compiler is to group these characters into meaningful chunks called <strong>Tokens</strong>. This phase is called Lexical Analysis, performed by a tool called a Scanner or Lexer.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-md mb-6 font-mono text-sm">
    <p class="text-gray-400 mb-2">// Given the raw string:</p>
    <p class="text-white bg-gray-900 p-2 rounded mb-4">int total = count + 5;</p>
    <p class="text-gray-400 mb-2">// The Lexer converts it into a stream of Tokens:</p>
    <ul class="text-green-400 space-y-1">
        <li>&lt;KEYWORD, "int"&gt;</li>
        <li>&lt;IDENTIFIER, "total"&gt;</li>
        <li>&lt;ASSIGN_OP, "="&gt;</li>
        <li>&lt;IDENTIFIER, "count"&gt;</li>
        <li>&lt;PLUS_OP, "+"&gt;</li>
        <li>&lt;NUMBER_LITERAL, "5"&gt;</li>
        <li>&lt;SEMICOLON, ";"&gt;</li>
    </ul>
</div>

<p class="text-gray-300 text-sm">During this phase, the Lexer also throws away all the "junk" that the computer doesn't need, such as whitespace, tabs, and comments.</p>
            

<h3 class="text-xl font-bold mb-2 text-blue-400">The 6 Phases of Compiler Architecture</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Source[Source Code: High-Level Language] --> Lex[1. Lexical Analyzer: Scanner / Tokens]
    Lex --> Syn[2. Syntax Analyzer: Parser / Parse Tree]
    Syn --> Sem[3. Semantic Analyzer: Type Checking & Symbol Table]
    Sem --> ICG[4. Intermediate Code Generator: 3-Address Code / Quadruples]
    ICG --> Opt[5. Machine-Independent Optimizer: Dead Code, Loop Unrolling]
    Opt --> Target[6. Target Code Generator: Assembly / Machine Code]
    style Source fill:#1e293b,stroke:#64748b,color:#fff
    style Lex fill:#1e293b,stroke:#3b82f6,color:#fff
    style Syn fill:#1e293b,stroke:#10b981,color:#fff
    style Sem fill:#1e293b,stroke:#f59e0b,color:#fff
    style ICG fill:#1e293b,stroke:#ec4899,color:#fff
    style Opt fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Target fill:#1e293b,stroke:#06b6d4,color:#fff
</div>
`,
            quizzes: [
                {
                    question: "What is the primary output of the Lexical Analysis phase?",
                    options: [
                        "A) Machine Code",
                        "B) An Abstract Syntax Tree (AST)",
                        "C) A stream of Tokens",
                        "D) A highly optimized executable file"
                    ],
                    answer: 2,
                    explanation: "Lexical analysis is purely about reading raw characters and grouping them into valid vocabulary words (Tokens) for the language."
                }
            ]
        },
        'c3-u1t2': {
            title: 'Finite Automata (DFA/NFA)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">How Lexers Recognize Words</h3>
<p class="mb-4">How does a compiler know that <code>123.45</code> is a valid number, but <code>123.45.67</code> is a syntax error? It uses <strong>Regular Expressions</strong> and <strong>Finite Automata</strong>.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg">
        <h4 class="text-purple-400 font-bold mb-2">DFA (Deterministic Finite Automaton)</h4>
        <p class="text-gray-300 text-sm mb-2">A state machine where, for every state and input character, there is exactly <strong>one</strong> predictable path to the next state.</p>
        <p class="text-gray-300 text-sm">Lexers are ultimately compiled down into giant DFAs. They are extremely fast because there is no guesswork; you just follow the arrows based on the character you read.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-pink-500 shadow-lg">
        <h4 class="text-pink-400 font-bold mb-2">NFA (Nondeterministic Finite Automaton)</h4>
        <p class="text-gray-300 text-sm mb-2">A state machine where an input might give you <em>multiple</em> paths to choose from, or you can jump states without any input at all (Epsilon transitions).</p>
        <p class="text-gray-300 text-sm">Computers cannot directly run NFAs efficiently. However, we write our rules using Regular Expressions, which are converted to NFAs, which are then mathematically converted into DFAs via Subset Construction.</p>
    </div>
</div>
            

<h3 class="text-xl font-bold mb-2 text-blue-400">Parsing Hierarchy & LL vs LR Classification</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Parser[Grammar Parsers] --> TopDown[Top-Down Parsers: Root to Leaves]
    Parser --> BottomUp[Bottom-Up Parsers: Leaves to Root / Shift-Reduce]
    TopDown --> LL[LL: Left-to-right, Leftmost derivation: LL 1, Recursive Descent]
    BottomUp --> LR[LR: Left-to-right, Rightmost derivation in reverse]
    LR --> SLR[SLR 1: Simple LR]
    LR --> LALR[LALR 1: Look-Ahead LR, Yacc/Bison]
    LR --> CLR[CLR 1: Canonical LR, Most Powerful]
    style TopDown fill:#1e293b,stroke:#3b82f6,color:#fff
    style BottomUp fill:#1e293b,stroke:#10b981,color:#fff
    style LL fill:#1e293b,stroke:#f59e0b,color:#fff
    style LR fill:#1e293b,stroke:#ec4899,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: FIRST and FOLLOW Sets</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given Grammar:</strong></p>
    <div class="bg-gray-950 p-3 rounded font-mono text-xs text-cyan-300 mb-3 border border-slate-800">
        E  &rarr; T E'<br>
        E' &rarr; + T E' | &epsilon;<br>
        T  &rarr; F T'<br>
        T' &rarr; * F T' | &epsilon;<br>
        F  &rarr; ( E ) | id
    </div>
    <div class="space-y-2 text-xs font-mono text-gray-300">
        <div class="text-emerald-400 font-bold">1. FIRST Sets:</div>
        <div>FIRST(F)  = { (, id }</div>
        <div>FIRST(T') = { *, &epsilon; }</div>
        <div>FIRST(T)  = FIRST(F) = { (, id }</div>
        <div>FIRST(E') = { +, &epsilon; }</div>
        <div>FIRST(E)  = FIRST(T) = { (, id }</div>
        <div class="text-emerald-400 font-bold mt-2">2. FOLLOW Sets (Rule: $ in FOLLOW(Start)):</div>
        <div>FOLLOW(E)  = { $, ) }</div>
        <div>FOLLOW(E') = FOLLOW(E) = { $, ) }</div>
        <div>FOLLOW(T)  = FIRST(E')  {&epsilon;} &cup; FOLLOW(E') = { +, $, ) }</div>
        <div>FOLLOW(T') = FOLLOW(T) = { +, $, ) }</div>
        <div>FOLLOW(F)  = FIRST(T')  {&epsilon;} &cup; FOLLOW(T') = { *, +, $, ) }</div>
    </div>
</div>
`,
            quizzes: [
                {
                    question: "Why do compilers convert Regular Expressions into DFAs instead of executing NFAs directly?",
                    options: [
                        "A) NFAs cannot handle numbers.",
                        "B) DFAs are deterministic and provide exactly one path for any input, making them incredibly fast to execute in software. NFAs require backtracking and guesswork.",
                        "C) DFAs use less RAM than NFAs.",
                        "D) Regular expressions cannot be converted to NFAs."
                    ],
                    answer: 1,
                    explanation: "Determinism means speed. If you know exactly what state to jump to without having to 'guess and check' multiple paths, your lexer runs blazingly fast."
                }
            ]
        }
    },
    'cs603-u2': {
        'c3-u2t1': {
            title: 'Context-Free Grammars',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Second Phase: Syntax Analysis (Parsing)</h3>
<p class="mb-4">The Lexer verified that the words are spelled correctly. Now, the <strong>Parser</strong> verifies that the words are in the right order (Grammar).</p>
<p class="mb-4"><code>"Dog the bit man."</code> has valid tokens, but invalid grammar. In programming: <code>count = 5 + ;</code> is invalid grammar.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Context-Free Grammar (CFG)</h3>
<p class="mb-4 text-gray-300 text-sm">Programming languages are defined by CFGs. A CFG is a set of recursive rules that define how statements can be constructed.</p>
<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm text-yellow-300 shadow-inner">
    E -> E + T<br>
    E -> T<br>
    T -> T * F<br>
    T -> F<br>
    F -> ( E )<br>
    F -> id
</div>
<p class="text-gray-300 text-sm italic mb-4">This famous CFG ensures that multiplication happens before addition by burying the multiplication rules deeper in the tree.</p>
            `,
            quizzes: [
                {
                    question: "What mathematical structure does the Parser output if the code has valid grammar?",
                    options: ["A) Machine Code", "B) An Abstract Syntax Tree (AST)", "C) A Linked List", "D) A Hash Map"],
                    answer: 1,
                    explanation: "The parser organizes the flat stream of tokens into a hierarchical Tree structure that perfectly represents the order of operations."
                }
            ]
        },
        'c3-u2t2': {
            title: 'Top-Down vs Bottom-Up Parsing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">How to Build the Tree</h3>
<p class="mb-4">There are two main mathematical approaches to checking the grammar and building the Syntax Tree.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-purple-400">Top-Down (LL Parsers):</strong> Starts at the very root of the tree (e.g., "Program") and tries to guess which rules to apply to reach the specific tokens in your code. Popular because it's easy for humans to write by hand (Recursive Descent Parsers). Used by GCC for C++.</li>
    <li><strong class="text-orange-400">Bottom-Up (LR Parsers):</strong> Starts with the raw tokens in your code and tries to group them together and compress them upwards until it reaches the root "Program" node. These are mathematically more powerful and can handle a wider variety of grammars, but are so complex they usually have to be generated by a tool (like YACC or Bison).</li>
</ul>

<div class="bg-red-900/30 border border-red-500/50 p-4 rounded text-sm text-red-200">
    <strong>The Left-Recursion Problem:</strong> Top-Down parsers will go into an infinite loop and crash if your grammar has rules like <code>A -> A + B</code>. It will continuously try to expand 'A' forever. You must mathematically refactor the grammar to remove Left-Recursion before using a Top-Down parser.
</div>
            

<h3 class="text-xl font-bold mb-2 text-blue-400">Control Flow Graph (CFG) & Basic Block Partitioning</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Entry([Entry]) --> B1[B1: i = 1, sum = 0]
    B1 --> B2{B2: if i <= 100}
    B2 -- True --> B3[B3: sum += i, i++]
    B3 --> B2
    B2 -- False --> B4[B4: print sum, return]
    B4 --> Exit([Exit])
    style Entry fill:#1e293b,stroke:#64748b,color:#fff
    style B1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style B2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style B3 fill:#1e293b,stroke:#10b981,color:#fff
    style B4 fill:#1e293b,stroke:#ec4899,color:#fff
    style Exit fill:#1e293b,stroke:#64748b,color:#fff
</div>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
    <div class="font-bold text-amber-300 text-sm mb-1">Leader Identification Rules for Basic Blocks</div>
    <ol class="list-decimal pl-5 text-xs text-slate-300 space-y-1">
        <li>The very first three-address statement in the intermediate code is a leader.</li>
        <li>Any statement that is the target of a conditional or unconditional jump (e.g. <code>goto L1</code>) is a leader.</li>
        <li>Any statement that immediately follows a conditional or unconditional jump statement is a leader.</li>
    </ol>
</div>
`,
            quizzes: [
                {
                    question: "Why do Top-Down (Recursive Descent) parsers crash if they encounter 'Left-Recursion' in a grammar rule?",
                    options: [
                        "A) Because they run out of tokens.",
                        "B) Because a rule that calls itself on the very left side causes an infinite recursive loop before it can consume any tokens.",
                        "C) Because bottom-up parsers delete the data.",
                        "D) Because left-recursion requires floating-point math."
                    ],
                    answer: 1,
                    explanation: "If A -> A x, the parser looks at A, and immediately calls A again, which calls A again, infinitely, causing a Stack Overflow."
                }
            ]
        }
    },
    'cs603-u3': {
        'c3-u3t1': {
            title: 'Intermediate Code & Optimization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Universal Translator</h3>
<p class="mb-4">Why does a C++ compiler work on Windows, Mac, and Linux? Because it uses <strong>Intermediate Representation (IR)</strong>. The compiler doesn't translate C++ directly into Intel x86 machine code. It translates C++ into a generic, abstract machine code first.</p>
<p class="mb-4 text-gray-300">This allows the compiler to be split into two halves: the <strong>Front-end</strong> (which understands the language) and the <strong>Back-end</strong> (which understands the CPU). You can swap out the back-end to compile the code for an ARM chip without changing the front-end.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Machine-Independent Optimization</h3>
<p class="mb-4">Once the code is in IR form, the compiler runs passes to make it faster without changing what it does:</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded border border-gray-700">
    <li><strong>Constant Folding:</strong> If you write <code>int x = 60 * 24;</code>, the compiler does the math once during compile time and changes the code to <code>int x = 1440;</code> so the CPU doesn't waste time doing it at runtime.</li>
    <li><strong>Dead Code Elimination:</strong> If you have an <code>if (false) { ... }</code> block, the compiler completely deletes that code from the final executable.</li>
    <li><strong>Loop Invariant Code Motion:</strong> If a calculation inside a loop yields the same result every single time, the compiler automatically moves it *outside* the loop so it's only calculated once.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is 'Constant Folding' in compiler optimization?",
                    options: [
                        "A) Folding the code into a smaller file size.",
                        "B) Evaluating constant expressions (like 2 + 3) at compile-time rather than runtime, replacing them with the final value (5).",
                        "C) Making constants mutable.",
                        "D) Folding the AST into a linear list."
                    ],
                    answer: 1,
                    explanation: "If the math uses fixed numbers, the compiler does the math for you so the end-user's CPU doesn't have to."
                }
            ]
        },
        'c3-u3t2': {
            title: 'Target Machine Code',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Final Phase</h3>
<p class="mb-4">In the final step, the compiler translates the optimized Intermediate Representation (IR) into the actual 1s and 0s (Machine Code) that the specific target CPU understands.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-yellow-500 shadow-lg mb-6">
    <h4 class="text-yellow-400 font-bold mb-2">Register Allocation</h4>
    <p class="text-gray-300 text-sm mb-4">This is the hardest problem in the back-end. A CPU only has a tiny number of ultra-fast memory slots called <strong>Registers</strong> (maybe 16 or 32). If your program uses 100 variables, the compiler has to figure out exactly which variables get to live in the fast registers at any given microsecond, and which ones get dumped into the slower RAM.</p>
    <p class="text-gray-300 text-sm">Compilers solve this using an incredibly complex mathematical concept called <strong>Graph Coloring</strong>. Variables that are 'alive' at the same time are connected on a graph, and the compiler tries to color the graph with a limited number of colors (representing registers) without any two connected nodes sharing a color.</p>
</div>
            `,
            quizzes: [
                {
                    question: "What famous algorithmic problem do compilers use to solve the issue of assigning variables to a limited number of CPU registers?",
                    options: [
                        "A) The Traveling Salesman Problem",
                        "B) Graph Coloring",
                        "C) Binary Search",
                        "D) Matrix Inversion"
                    ],
                    answer: 1,
                    explanation: "Graph coloring maps perfectly to register allocation. If two variables overlap in their lifetime, they are connected by an edge and cannot share the same color (register)."
                }
            ]
        },
        'c3-u3t4': {
            title: 'Basic Blocks, Flow Graphs & Register Pressure',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">How Compilers Break Programs into Manageable Chunks</h3>
<p class="mb-4">A compiler does not optimize an entire function as one giant emotional monolith. It first splits code into <strong>Basic Blocks</strong>: straight-line sequences of instructions with exactly one entry and one exit. Once control enters a basic block, it runs line by line with no surprises until the block ends.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-cyan-500 shadow-lg mb-6">
    <h4 class="text-cyan-300 font-bold mb-2">Basic Block intuition</h4>
    <p class="text-gray-300 text-sm">Think of a basic block like a train track segment between two switches. Inside the segment, the train just moves forward. Branches and jumps happen only at the ends.</p>
</div>

<table class="w-full text-left border-collapse mb-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-800 text-gray-200">
        <tr>
            <th class="p-4">Concept</th>
            <th class="p-4">Meaning</th>
            <th class="p-4">Why it matters</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-800 text-sm">
        <tr><td class="p-4 font-bold text-blue-300">Basic Block</td><td class="p-4">Straight-line code chunk with one entry and one exit.</td><td class="p-4">Simplifies local optimization.</td></tr>
        <tr><td class="p-4 font-bold text-green-300">Flow Graph</td><td class="p-4">Graph where nodes are blocks and edges show control transfer.</td><td class="p-4">Used for data-flow analysis and optimization.</td></tr>
        <tr><td class="p-4 font-bold text-yellow-300">Liveness</td><td class="p-4">Whether a variable’s current value will still be needed later.</td><td class="p-4">Drives register allocation decisions.</td></tr>
        <tr><td class="p-4 font-bold text-red-300">Register Pressure</td><td class="p-4">Too many simultaneously-live variables competing for few registers.</td><td class="p-4">Forces spilling variables to slower memory.</td></tr>
    </tbody>
</table>

<p class="text-gray-300 text-sm mb-4">When many values are alive at once, the compiler experiences <strong>register pressure</strong>. CPUs do not give unlimited registers just because your code had big dreams. If pressure rises, some values are spilled to RAM, which is slower.</p>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm shadow-inner text-gray-300">
if (a &gt; b) t1 = a + c;<br>
else t1 = b + c;<br>
result = t1 * d;
</div>

<p class="text-gray-300 text-sm">A flow graph makes this branching structure visible. That helps the compiler reason about which variables stay live across paths and where optimizations are still safe.</p>
            `,
            quizzes: [
                {
                    question: "What is a basic block in compiler design?",
                    options: [
                        "A) A block of comments ignored by the compiler.",
                        "B) A straight-line sequence of instructions with one entry and one exit.",
                        "C) A section of code containing only loops.",
                        "D) The machine code header."
                    ],
                    answer: 1,
                    explanation: "A basic block is the compiler's local optimization unit: enter once, run straight through, exit once."
                },
                {
                    question: "What does high register pressure usually cause?",
                    options: [
                        "A) The compiler gains extra registers from the OS.",
                        "B) Variables are spilled from registers into slower memory.",
                        "C) All branches are removed automatically.",
                        "D) The parser restarts."
                    ],
                    answer: 1,
                    explanation: "When too many values are live together, the compiler must spill some of them into memory because registers are limited."
                }
            ]
        }
    },
    'cs603-u4': {
        'c3-u4t1': {
            title: 'Symbol Tables & Scope',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Compiler's Notebook</h3>
<p class="mb-4">As the Lexer and Parser read your code, they need a place to "remember" all the variables and functions you declare. This is the <strong>Symbol Table</strong>.</p>
<p class="mb-4 text-gray-300 text-sm">When you declare <code>int max_score = 100;</code>, the compiler creates an entry in the Symbol Table that records the name "max_score", its type "int", its scope level, and where it lives in memory.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Handling Scope (Hash Tables)</h3>
<p class="mb-4 text-gray-300 text-sm">Symbol Tables are usually implemented as Hash Tables because the compiler needs lightning-fast <code>O(1)</code> lookups. But what happens if you declare a variable named <code>x</code> globally, and then declare another variable named <code>x</code> inside a specific function? (Variable Shadowing).</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-4 rounded border border-gray-700">
    <li>To handle this, Symbol Tables use stacks of Hash Tables, or they chain entries.</li>
    <li>When you enter a new function <code>{ ... }</code>, the compiler pushes a new scope onto the stack.</li>
    <li>When it searches for <code>x</code>, it checks the local scope first. If it's not there, it checks the global scope.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the primary data structure used for implementing a Symbol Table in a production compiler?",
                    options: [
                        "A) A Queue",
                        "B) A Linked List",
                        "C) A Hash Table",
                        "D) A Binary Tree"
                    ],
                    answer: 2,
                    explanation: "Compilers have to look up variable names millions of times per second. Hash tables provide near-instant O(1) lookups."
                }
            ]
        },
        'c3-u4t2': {
            title: 'Panic-Mode Error Recovery',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">When Programmers Mess Up</h3>
<p class="mb-4">If you forget a semicolon on line 5, the parser encounters a syntax error. A bad compiler would just crash immediately. A good compiler implements <strong>Error Recovery</strong> so it can keep reading the rest of your file and find *other* errors, giving you a full list of mistakes at once.</p>

<h3 class="text-xl font-bold mb-2 text-red-400">Panic-Mode Strategy</h3>
<p class="mb-4 text-gray-300 text-sm">This is the most common error recovery strategy. When the parser hits a syntax error, it "panics" and starts throwing away tokens (ignoring your broken code) until it finds a "synchronizing token".</p>
<p class="mb-4 text-gray-300 text-sm">A synchronizing token is usually a very clear boundary marker, like a semicolon <code>;</code> or a closing brace <code>}</code>. Once it finds that marker, it calms down, assumes the broken statement is over, and tries to resume normal parsing on the next line.</p>
            `,
            quizzes: [
                {
                    question: "What does 'Panic-Mode' error recovery do when it encounters a syntax error?",
                    options: [
                        "A) It deletes your source code file.",
                        "B) It throws an exception and immediately shuts down the compiler.",
                        "C) It discards input tokens until it finds a clear synchronizing token (like a semicolon), then resumes parsing.",
                        "D) It tries to guess the missing code using AI."
                    ],
                    answer: 2,
                    explanation: "It abandons the current broken line of code and skips ahead to the next clear stopping point so it can continue checking the rest of your file."
                }
            ]
        }
    },
    'cs603-u5': {
        'c3-u5t1': {
            title: 'Data-Flow Analysis & Loop Unrolling',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Advanced Compiler Magic</h3>
<p class="mb-4">Modern compilers (like LLVM and GCC) contain hundreds of optimization passes that can make your code run up to 10x faster than the raw logic you wrote.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Data-Flow Analysis</h3>
<p class="mb-4 text-gray-300 text-sm">The compiler mathematically proves the lifetime and usage of variables. If it can prove that the variable <code>y</code> is assigned the value <code>10</code>, and no code ever alters <code>y</code> before it is printed, the compiler can safely replace <code>y</code> with <code>10</code> directly, skipping the memory lookup.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Loop Unrolling</h3>
<p class="mb-4 text-gray-300 text-sm">Loops have overhead. Every time a <code>for</code> loop iterates, the CPU has to increment a counter, check if the counter is less than the limit, and perform a "jump" instruction back to the top.</p>
<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm shadow-inner text-gray-300">
    <span class="text-gray-500">// Your code:</span><br>
    <span class="text-purple-400">for</span>(int i=0; i&lt;3; i++) { sum += i; }<br><br>
    <span class="text-gray-500">// Unrolled code generated by compiler:</span><br>
    sum += 0;<br>
    sum += 1;<br>
    sum += 2;
</div>
<p class="text-gray-300 text-sm italic">By unrolling small loops, the compiler completely removes the CPU overhead of the loop logic, trading a slightly larger file size for vastly improved execution speed.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary benefit of Loop Unrolling?",
                    options: [
                        "A) It makes the source code easier for humans to read.",
                        "B) It reduces the memory size of the compiled executable.",
                        "C) It eliminates the CPU overhead of incrementing loop counters and evaluating loop conditions, resulting in faster execution.",
                        "D) It prevents infinite loops."
                    ],
                    answer: 2,
                    explanation: "If you know exactly how many times a loop will run, just copy-pasting the inner code that many times removes the need for the CPU to 'manage' the loop."
                }
            ]
        },
        'c3-u5t2': {
            title: 'Peephole Optimization & Dead Code Elimination',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Final Polish</h3>
<p class="mb-4">These optimizations happen at the very end, right as the Machine Code is being generated.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-pink-400">Peephole Optimization:</strong> The compiler looks at a tiny sliding window (a "peephole") of 2 or 3 machine code instructions. It looks for obvious, localized inefficiencies. For example, if it sees <code>Load X into Register 1</code> followed immediately by <code>Save Register 1 into X</code>, it knows the second instruction is completely redundant and deletes it.</li>
    <li><strong class="text-red-400">Strength Reduction:</strong> The compiler replaces expensive math operations with cheaper ones. Example: Replacing <code>x * 2</code> with a bitwise left shift <code>x << 1</code>. Multiplication requires a complex circuit on the CPU, while bit-shifting takes exactly 1 clock cycle.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which of the following is an example of 'Strength Reduction' optimization?",
                    options: [
                        "A) Deleting code that will never be reached.",
                        "B) Unrolling a loop.",
                        "C) Replacing an expensive multiplication operation (like x * 8) with a cheaper bitwise shift operation (x << 3).",
                        "D) Register Allocation."
                    ],
                    answer: 2,
                    explanation: "Strength reduction means swapping a 'strong' (expensive) CPU instruction for a 'weak' (cheap) CPU instruction that achieves the exact same mathematical result."
                }
            ]
        }
    }
});

Object.assign(window.topicDetails['cs603-u1'], {
    'c3-u1t3': {
        title: 'Regular Expressions & Token Patterns',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Teaching the Lexer What "Looks Right"</h3>
<p class="mb-4">Regular Expressions are compact pattern rules used to describe valid tokens. They let the compiler say, "Identifiers look like this, numbers look like that, and nonsense like <code>42cat?</code> can go explain itself elsewhere."</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Token Type</th>
            <th class="p-3">Typical Pattern</th>
            <th class="p-3">Example</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3 font-bold text-blue-400">Identifier</td><td class="p-3"><code>[A-Za-z_][A-Za-z0-9_]*</code></td><td class="p-3"><code>total_marks</code></td></tr>
        <tr><td class="p-3 font-bold text-green-400">Integer</td><td class="p-3"><code>[0-9]+</code></td><td class="p-3"><code>2048</code></td></tr>
        <tr><td class="p-3 font-bold text-purple-400">Whitespace</td><td class="p-3"><code>[ \\t\\n]+</code></td><td class="p-3">space, tab, newline</td></tr>
    </tbody>
</table>

<p class="text-gray-300 text-sm">Lexers usually apply the <strong>longest match rule</strong>. If both <code>if</code> and <code>identifier</code> patterns can match, the scanner chooses the most specific correct interpretation instead of panicking like a student who has seen two plausible MCQ answers.</p>
        `,
        quizzes: [
            {
                question: 'What is the main role of regular expressions in lexical analysis?',
                options: ['A) To build machine code directly', 'B) To define token patterns that the lexer can recognize', 'C) To optimize loops', 'D) To allocate registers'],
                answer: 1,
                explanation: 'Regex patterns describe the shapes of valid tokens such as identifiers, numbers, and operators.'
            },
            {
                question: 'What does the longest match rule mean in scanning?',
                options: ['A) Always pick the shortest token', 'B) Always pick the token with most vowels', 'C) Prefer the valid token consuming the longest applicable input', 'D) Ignore keywords'],
                answer: 2,
                explanation: 'Lexers generally consume the maximum valid character sequence for a token.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs603-u2'], {
    'c3-u2t3': {
        title: 'FIRST, FOLLOW & Predictive Parsing',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">How a Parser Decides What Rule to Use Next</h3>
<p class="mb-4">Predictive parsers need discipline. They cannot just stare at the grammar dramatically and hope inspiration arrives. They use <strong>FIRST</strong> and <strong>FOLLOW</strong> sets to decide which production rule should be used.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong>FIRST(X)</strong>: terminals that can appear at the beginning of something derived from X.</li>
    <li><strong>FOLLOW(X)</strong>: terminals that can appear immediately after X in some valid sentential form.</li>
    <li>These sets help create an <strong>LL(1) parsing table</strong>, where one lookahead symbol is enough to choose the next rule.</li>
</ul>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm text-gray-300">
E  -> T E'<br>
E' -> + T E' | epsilon<br>
T  -> id
</div>

<p class="text-gray-300 text-sm">The whole point is to avoid parser ambiguity. In exam language: FIRST and FOLLOW are the answer key that tells the parser which production to bubble first.</p>
        `,
        quizzes: [
            {
                question: 'Why are FIRST and FOLLOW sets important in LL(1) parsing?',
                options: ['A) They help assign registers', 'B) They help build predictive parsing tables', 'C) They replace lexical analysis', 'D) They generate assembly instructions'],
                answer: 1,
                explanation: 'Predictive parsing relies on these sets to choose productions using limited lookahead.'
            },
            {
                question: 'What does FOLLOW(X) represent?',
                options: ['A) Tokens inside comments', 'B) Symbols that may appear immediately after X', 'C) Only the first token of X', 'D) All grammar variables'],
                answer: 1,
                explanation: 'FOLLOW tells the parser what can legally come next after a non-terminal.'
            }
        ]
    },
    'c3-u2t4': {
        title: 'LR Parsing Tables, Shift-Reduce & Conflicts',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">When the Parser Stops Guessing and Starts Consulting a Table</h3>
<p class="mb-4">LR parsers read input from left to right and build a rightmost derivation in reverse. Instead of hoping intuition wins, they use an <strong>action table</strong> and a <strong>goto table</strong> to decide whether to <strong>shift</strong>, <strong>reduce</strong>, <strong>accept</strong>, or report an error.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Action</th>
            <th class="p-3">Meaning</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">Shift</td><td class="p-3">Read next token and push state</td></tr>
        <tr><td class="p-3">Reduce</td><td class="p-3">Apply a grammar production and compress symbols</td></tr>
        <tr><td class="p-3">Accept</td><td class="p-3">Input matches the grammar successfully</td></tr>
        <tr><td class="p-3">Error</td><td class="p-3">Current token and state do not fit any valid move</td></tr>
    </tbody>
</table>

<p class="mb-4 text-gray-300 text-sm"><strong>Shift-reduce conflict</strong> happens when the parser is torn between reading more input and reducing what it already has. It is the compiler equivalent of staring at a WhatsApp message and wondering whether to reply now or wait for one more clue.</p>
        `,
        quizzes: [
            {
                question: 'What does a shift action do in an LR parser?',
                options: ['A) Deletes the grammar', 'B) Reads the next token and pushes a new state', 'C) Prints assembly code', 'D) Clears the parsing stack'],
                answer: 1,
                explanation: 'Shift consumes the next input symbol and moves the parser to a new state.'
            },
            {
                question: 'What is a shift-reduce conflict?',
                options: ['A) A networking collision', 'B) A situation where the parser can either shift or reduce and the grammar is ambiguous for that state', 'C) A symbol table overflow', 'D) A runtime stack crash'],
                answer: 1,
                explanation: 'It appears when the parser table suggests two competing moves for the same situation.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs603-u3'], {
    'c3-u3t3': {
        title: 'Three-Address Code & Syntax-Directed Translation',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Turning Trees into Actionable Steps</h3>
<p class="mb-4">After parsing, the compiler must convert the abstract syntax tree into a simpler intermediate form that is easier to optimize. A classic representation is <strong>Three-Address Code (TAC)</strong>, where each instruction has at most three parts.</p>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm text-gray-300">
<span class="text-gray-500">// Expression:</span> a + b * c<br>
t1 = b * c<br>
t2 = a + t1
</div>

<p class="mb-4 text-gray-300 text-sm"><strong>Syntax-Directed Translation</strong> attaches semantic actions to grammar rules. That means while the parser builds structure, it can also generate useful output such as types, addresses, or TAC instructions.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Advantage</th>
            <th class="p-3">Why it matters</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">Simple instructions</td><td class="p-3">Easier to optimize and rearrange</td></tr>
        <tr><td class="p-3">Temporary variables</td><td class="p-3">Breaks complex expressions into manageable chunks</td></tr>
        <tr><td class="p-3">Machine independence</td><td class="p-3">Useful before final target code generation</td></tr>
    </tbody>
</table>
        `,
        quizzes: [
            {
                question: 'What is the main purpose of three-address code?',
                options: ['A) To draw syntax trees', 'B) To represent computations in a simple intermediate form', 'C) To replace parsing entirely', 'D) To store comments'],
                answer: 1,
                explanation: 'TAC breaks complex expressions into simple assignments that are easy for compiler passes to analyze.'
            },
            {
                question: 'What does syntax-directed translation do?',
                options: ['A) Attaches semantic actions to grammar productions', 'B) Deletes tokens automatically', 'C) Converts DFAs into NFAs', 'D) Encrypts source code'],
                answer: 0,
                explanation: 'It combines parsing rules with actions that generate meaning or intermediate code.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs603-u4'], {
    'c3-u4t3': {
        title: 'Semantic Analysis & Type Checking',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Code Can Be Grammatically Correct and Still Completely Wrong</h3>
<p class="mb-4">A parser might accept <code>int marks = "excellent";</code> as grammatically valid because the tokens are arranged correctly. But semantically it is nonsense. <strong>Semantic Analysis</strong> checks whether the program actually makes sense according to the language rules.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li>Verify variable declarations before use.</li>
    <li>Check type compatibility in expressions and assignments.</li>
    <li>Validate function calls, parameter counts, and return types.</li>
    <li>Catch scope violations and impossible operations.</li>
</ul>

<div class="bg-red-900/30 border border-red-500/40 p-4 rounded text-sm text-red-200">
    Real-life compiler vibe: syntax analysis says, "Your sentence is grammatically correct." Semantic analysis says, "Cool, but cats still cannot submit PDFs to integers."
</div>
        `,
        quizzes: [
            {
                question: 'What is the main responsibility of semantic analysis?',
                options: ['A) Splitting raw text into tokens', 'B) Checking program meaning such as types and declarations', 'C) Drawing topologies', 'D) Sending packets'],
                answer: 1,
                explanation: 'Semantic analysis verifies correctness beyond grammar, especially declarations, scopes, and types.'
            },
            {
                question: 'Which phase would catch assigning a string to an integer variable?',
                options: ['A) Physical layer', 'B) Lexical analysis only', 'C) Semantic analysis / type checking', 'D) Register allocation'],
                answer: 2,
                explanation: 'That is a meaning-level type error, so semantic analysis is responsible.'
            }
        ]
    },
    'c3-u4t4': {
        title: 'Scope Resolution, Symbol Lifetime & AST Binding',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Which Variable Are We Even Talking About?</h3>
<p class="mb-4">A compiler does not just store names; it must connect each identifier use to the correct declaration. That job is easier with an <strong>Abstract Syntax Tree (AST)</strong> and scoped symbol tables.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong>Scope resolution:</strong> decides which declaration a name refers to.</li>
    <li><strong>Lifetime:</strong> describes how long a variable exists in memory.</li>
    <li><strong>Binding:</strong> links an AST node to its declaration entry.</li>
    <li><strong>Shadowing:</strong> occurs when an inner scope reuses a name from an outer scope.</li>
</ul>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm text-gray-300">
int marks = 78;<br>
{<br>
&nbsp;&nbsp;int marks = 91; <span class="text-gray-500">// inner marks shadows outer marks</span><br>
}
</div>

<p class="text-gray-300 text-sm">Real-life example: two cousins in a family both named Rahul. "Bring Rahul here" is a terrible instruction unless you also mention which room you mean.</p>
        `,
        quizzes: [
            {
                question: 'What does shadowing mean in compiler terminology?',
                options: ['A) Hiding source code in a ZIP file', 'B) An inner declaration using the same name as an outer declaration', 'C) Reducing parse tables', 'D) Encrypting variables'],
                answer: 1,
                explanation: 'Shadowing happens when an inner scope reuses a name and temporarily hides the outer one.'
            },
            {
                question: 'Why is AST binding important?',
                options: ['A) It links identifier uses to the correct declarations', 'B) It replaces lexical analysis', 'C) It speeds up Wi-Fi', 'D) It renders graphics'],
                answer: 0,
                explanation: 'Binding lets later compiler stages know exactly which symbol each identifier refers to.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs603-u5'], {
    'c3-u5t3': {
        title: 'Common Subexpression Elimination & Strength Reduction',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Stop Recomputing the Same Thing</h3>
<p class="mb-4">If your code repeatedly calculates the same expression with unchanged operands, the compiler would like a quiet word. <strong>Common Subexpression Elimination (CSE)</strong> computes it once and reuses the result.</p>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 font-mono text-sm text-gray-300">
<span class="text-gray-500">// Before</span><br>
x = (a * b) + c<br>
y = (a * b) - d<br><br>
<span class="text-gray-500">// After CSE</span><br>
t1 = a * b<br>
x = t1 + c<br>
y = t1 - d
</div>

<p class="mb-4 text-gray-300 text-sm"><strong>Strength Reduction</strong> replaces expensive operations with cheaper equivalents. For example, multiplying by powers of two can often become bit shifts. It is the compiler version of taking the elevator instead of repeatedly climbing stairs with groceries.</p>
        `,
        quizzes: [
            {
                question: 'What does common subexpression elimination achieve?',
                options: ['A) It removes repeated computations by reusing earlier results', 'B) It deletes all loops', 'C) It encrypts the executable', 'D) It generates comments'],
                answer: 0,
                explanation: 'CSE avoids recomputing the same expression when its operands are unchanged.'
            },
            {
                question: 'Why is strength reduction useful?',
                options: ['A) It makes code harder to optimize', 'B) It replaces costly operations with cheaper equivalent ones', 'C) It removes registers', 'D) It adds recursion'],
                answer: 1,
                explanation: 'Using cheaper instructions can improve runtime performance without changing the result.'
            }
        ]
    }
});
