window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs603-u1': {
        'c3-u1t1': {
            title: 'Tokenization & Scanners',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">Chopping up the Code</h3>
<p class="mb-4">When you feed source code into a compiler, the compiler does not understand words like <code>int</code> or <code>main</code>. It just sees a massive, terrifying wall of raw text characters.</p>
<p class="mb-4">The first step of a compiler is the <strong>Lexical Analyzer (Scanner)</strong>. Its job is to read the raw characters from left to right, group them into meaningful chunks called <strong>Tokens</strong>, and strip out the useless junk like comments and whitespace.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Raw Code Fragment</th>
            <th class="p-3">Generated Token</th>
            <th class="p-3">Type</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-mono">int</td><td class="p-3 text-green-400">&lt;KEYWORD, int&gt;</td><td class="p-3">Reserved Word</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-mono">count</td><td class="p-3 text-blue-400">&lt;ID, count&gt;</td><td class="p-3">Identifier (Variable name)</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-mono">=</td><td class="p-3 text-yellow-400">&lt;OP, =&gt;</td><td class="p-3">Assignment Operator</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-mono">100</td><td class="p-3 text-purple-400">&lt;NUM, 100&gt;</td><td class="p-3">Integer Literal</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-mono">;</td><td class="p-3 text-gray-400">&lt;PUNCT, ;&gt;</td><td class="p-3">Punctuation</td></tr>
    </tbody>
</table>

<div class="bg-gray-900 p-5 rounded-xl border-l-4 border-indigo-500 shadow-md">
    <h4 class="text-indigo-400 font-bold mb-2">Lexical Errors</h4>
    <p class="text-gray-300 text-sm">The scanner does NOT care if your code makes sense. If you write <code>int count = 100;</code>, the scanner happily tokenizes it. If you write <code>100 = int count;</code>, the scanner STILL happily tokenizes it. It just chops words. Figuring out if the grammar is legal is the job of the <em>Syntax Analyzer</em> in the next step.</p>
</div>
            `,
            references: [
                { title: 'Dragon Book (Compilers) Wikipedia', url: 'https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools' }
            ],
            quizzes: [
                {
                    question: "What is the primary output of the Lexical Analyzer phase in a compiler?",
                    options: [
                        "A) Machine code (binary).",
                        "B) An Abstract Syntax Tree (AST).",
                        "C) A stream of Tokens and a populated Symbol Table.",
                        "D) An optimized intermediate representation."
                    ],
                    answer: 2,
                    explanation: "The lexical analyzer reads raw characters and outputs a stream of Tokens (like ID, NUM, KEYWORD) that the syntax analyzer can actually process."
                }
            ]
        },
        'c3-u1t2': {
            title: 'Finite Automata (DFA/NFA)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">The Math behind the Scanner</h3>
<p class="mb-4">How exactly does the Lexical Analyzer know that <code>count123</code> is a valid variable name, but <code>123count</code> is illegal? It uses <strong>Regular Expressions</strong> and <strong>Finite Automata</strong>.</p>

<p class="mb-4">A Finite Automaton is a theoretical state machine. You start at the 'Start' state, and you trace the arrows based on the characters you read. If you end up in an 'Accepting' state when the word ends, it's a valid token. If you hit a dead end, it throws a Lexical Error.</p>

<div class="mermaid bg-gray-800 p-6 rounded-lg mb-6 flex justify-center shadow-inner">
stateDiagram-v2
    [*] --> S0: Start
    S0 --> S1: [a-z, A-Z] (Letter)
    S0 --> Error: [0-9] (Digit)
    S1 --> S1: [a-z, A-Z] (Letter)
    S1 --> S1: [0-9] (Digit)
    S1 --> [*]: Accepting (Valid ID)
</div>

<p class="text-sm text-gray-400 italic text-center mb-6">State Diagram for a standard Identifier (must start with a letter, followed by letters or digits).</p>
            `,
            quizzes: [
                {
                    question: "In the context of lexical analysis, what is the difference between an NFA and a DFA?",
                    options: [
                        "A) NFAs are faster than DFAs.",
                        "B) DFAs can have multiple possible next states for the same input character, while NFAs are strictly deterministic.",
                        "C) NFAs can have multiple transitions for the same input symbol and can use empty (epsilon) transitions. DFAs have exactly one transition per input symbol.",
                        "D) DFAs are used for Syntax parsing, NFAs are used for Lexical scanning."
                    ],
                    answer: 2,
                    explanation: "Non-deterministic Finite Automata (NFAs) can 'guess' which path to take and use epsilon transitions. Deterministic Finite Automata (DFAs) are completely rigid, making them faster to execute in code."
                }
            ]
        }
    },
    'cs603-u2': {
        'c3-u2t1': {
            title: 'Context-Free Grammars',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">Is this Legal?</h3>
<p class="mb-4">The Lexical analyzer chopped our code into tokens. Now, the <strong>Syntax Analyzer (Parser)</strong> checks if the tokens are in a legal order. Just because the words are valid English doesn't mean the sentence makes sense ("Dog runs house the").</p>

<p class="mb-4">Compilers use <strong>Context-Free Grammars (CFGs)</strong> to define the strict rules of a programming language. A CFG consists of variables, terminals, and production rules.</p>

<div class="bg-gray-900 p-6 rounded border border-gray-700 font-mono text-sm text-gray-300 mb-6 shadow-md">
    <span class="text-gray-500">// Example CFG for simple arithmetic</span><br>
    <span class="text-green-400">E</span> &rarr; <span class="text-green-400">E</span> + <span class="text-green-400">T</span><br>
    <span class="text-green-400">E</span> &rarr; <span class="text-green-400">T</span><br>
    <span class="text-green-400">T</span> &rarr; <span class="text-green-400">T</span> * <span class="text-blue-400">F</span><br>
    <span class="text-green-400">T</span> &rarr; <span class="text-blue-400">F</span><br>
    <span class="text-blue-400">F</span> &rarr; (<span class="text-green-400">E</span>) | <span class="text-yellow-400">id</span>
</div>
            `,
            quizzes: [
                {
                    question: "Why do compilers use Context-Free Grammars (CFGs) instead of Regular Expressions to parse syntax?",
                    options: [
                        "A) Because CFGs are easier to type.",
                        "B) Because Regular Expressions cannot count or match nested structures (like correctly balancing deeply nested parentheses).",
                        "C) Because CFGs are mathematically faster.",
                        "D) Because CFGs were invented by Google."
                    ],
                    answer: 1,
                    explanation: "Regular languages have no memory, so they cannot ensure that for every '(' there is a matching ')'. CFGs use a stack-like mechanism allowing them to parse nested mathematical expressions and blocks."
                }
            ]
        },
        'c3-u2t2': {
            title: 'Top-Down vs Bottom-Up Parsing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">Building the Tree</h3>
<p class="mb-4">The parser's ultimate goal is to build an <strong>Abstract Syntax Tree (AST)</strong>. It can do this in two ways:</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md">
    <li><strong class="text-blue-400">Top-Down Parsing (LL):</strong> Starts at the root of the tree (the starting variable of the grammar) and tries to grow the tree downwards to match the tokens. Usually implemented using <em>Recursive Descent</em>. Prone to infinite loops if the grammar has left-recursion.</li>
    <li><strong class="text-green-400">Bottom-Up Parsing (LR):</strong> Starts with the raw tokens at the bottom and tries to group them together and collapse them upwards until it reaches the root variable. Much more powerful, handles a wider class of grammars, and is used by tools like YACC and Bison.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is a major limitation of standard Top-Down (Recursive Descent) parsers?",
                    options: [
                        "A) They cannot parse code written in C.",
                        "B) They will enter an infinite loop if the grammar contains Left-Recursion (e.g., A -> A + a).",
                        "C) They do not generate Syntax Trees.",
                        "D) They use too much hard drive space."
                    ],
                    answer: 1,
                    explanation: "If a top-down parser sees a rule like 'A -> A', it will keep expanding 'A' infinitely before it ever reads a single token. The grammar must be restructured (left-factored) before top-down parsing works."
                }
            ]
        }
    },
    'cs603-u3': {
        'c3-u3t1': {
            title: 'Intermediate Code & Optimization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">The Middleman</h3>
<p class="mb-4">Why doesn't a C compiler just translate C code directly into Intel x86 Assembly code in one step? Because then you would have to write a completely new compiler for every language-to-hardware combination.</p>

<p class="mb-4">Instead, modern compilers (like LLVM) translate the syntax tree into <strong>Intermediate Representation (IR)</strong>. IR is a generic, machine-independent assembly code. Once in IR, the compiler runs massive <strong>Optimizations</strong>.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-yellow-500 shadow-lg">
        <h4 class="text-yellow-400 font-bold mb-2">Dead Code Elimination</h4>
        <p class="text-gray-300 text-sm">If you have a variable <code>x = 5</code> but you never use <code>x</code> anywhere in the program, the compiler deletes it entirely to save RAM.</p>
    </div>
    
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-blue-500 shadow-lg">
        <h4 class="text-blue-400 font-bold mb-2">Constant Folding</h4>
        <p class="text-gray-300 text-sm">If you write <code>int days = 365 * 24 * 60;</code>, the compiler does the math at compile-time and just inserts <code>525600</code> into the binary so the CPU doesn't waste time multiplying.</p>
    </div>
</div>
            `,
            references: [
                { title: 'LLVM Compiler Infrastructure', url: 'https://llvm.org/' }
            ],
            quizzes: [
                {
                    question: "What is the primary architectural advantage of using an Intermediate Representation (IR)?",
                    options: [
                        "A) It makes the compiler run faster.",
                        "B) It allows the front-end (language parser) and back-end (hardware code generator) to be decoupled, making it much easier to support multiple languages and multiple CPU architectures.",
                        "C) It hides the source code from hackers.",
                        "D) It allows the code to run directly in a web browser."
                    ],
                    answer: 1,
                    explanation: "By translating C++, Rust, and Swift all into the same LLVM IR, they can all share the exact same optimization logic and hardware generation logic."
                }
            ]
        },
        'c3-u3t2': {
            title: 'Target Machine Code',
            content: `
<h3 class="text-2xl font-bold mb-4 text-purple-400">The Final Descent</h3>
<p class="mb-4">The final phase of the compiler takes the highly optimized Intermediate Representation and generates actual binary instructions for the specific CPU architecture (like ARM for your phone, or x86 for your laptop).</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-red-400">Register Allocation:</strong> CPUs have extremely fast memory slots called Registers. There are very few of them (e.g., 16 or 32). The compiler plays a complex game of graph coloring to figure out which variables get to live in the fast Registers, and which get dumped into the slower RAM.</li>
    <li><strong class="text-green-400">Instruction Selection:</strong> The compiler picks the specific hardware opcodes. For example, if it needs to multiply by 2, it might choose a "Bitwise Left Shift" instruction because it takes fewer CPU clock cycles than the "Multiply" instruction.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "During code generation, what is 'Register Allocation'?",
                    options: [
                        "A) Registering the software license with the OS.",
                        "B) The process of deciding which program variables will be kept in the CPU's high-speed hardware registers at any given time.",
                        "C) Allocating space on the hard drive for the executable file.",
                        "D) Generating log files for debugging."
                    ],
                    answer: 1,
                    explanation: "Since registers are the fastest memory in a computer (but also the scarcest), allocating them efficiently is critical for program speed."
                }
            ]
        }
    }
});

window.topicDetails['cs603-u1'].unitExam = {
    title: "CS603 - Unit 1 & 2 Lexical/Syntax Assessment",
    description: "Submit a complete derivation tree.",
    mediumQuestions: [
        "Explain the difference between a Lexical Error and a Syntax Error with examples.",
        "Draw the DFA for a floating point number."
    ],
    hardQuestions: [
        "Remove the left-recursion from the following grammar: A -> A + a | b",
        "Prove that the grammar S -> aSb | SS | epsilon is ambiguous."
    ]
};
