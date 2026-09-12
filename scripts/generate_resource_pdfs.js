const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const repoRoot = path.resolve(__dirname, '..');
const resourcesRoot = path.join(repoRoot, 'assets', 'resources');

const pdfData = [
    {
        subject: 'cs501',
        subjectLabel: 'CS501',
        filename: 'cs501-theory-of-computation-handbook.pdf',
        title: 'CS501 Theory of Computation Comprehensive Revision Handbook',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Automata Theory, DFA & NFA',
                content: `Automata Theory is the mathematical foundation of theoretical computer science.
A Deterministic Finite Automaton (DFA) is formally defined as a 5-tuple M = (Q, Sigma, delta, q0, F):
- Q: Finite non-empty set of internal states.
- Sigma: Input alphabet containing finite distinct symbols (e.g. {0, 1} or {a, b}).
- delta: Deterministic transition function mapping Q x Sigma -> Q. For every state and symbol, exactly one transition exists.
- q0: Initial/start state (q0 in Q).
- F: Subset of Q representing accepting or final states (F subset Q).

Non-deterministic Finite Automata (NFA):
In an NFA, delta: Q x Sigma -> 2^Q (powersets of states). An NFA can transition to zero, one, or multiple states on a single symbol.
Equivalence: Every NFA has an equivalent DFA constructible via the Subset Construction (Powerset) algorithm. If an NFA has n states, its equivalent DFA has at most 2^n states.`
            },
            {
                heading: 'Unit 2: Regular Expressions & Pumping Lemma',
                content: `Regular Expressions (RegEx) represent regular languages.
Key Identities:
- R + S = S + R
- R + Phi = R, R . epsilon = R
- R* = (R + epsilon)*
- (R*)* = R*
- (R + S)* = (R*S*)*

Pumping Lemma for Regular Languages:
Let L be a regular language. There exists a pumping length p >= 1 such that any string w in L with |w| >= p can be divided into three substrings w = xyz satisfying:
1. |y| >= 1 (the pumped part is non-empty)
2. |xy| <= p (the pump occurs within the first p characters)
3. For all i >= 0, x(y^i)z is in L.
Used systematically in university exams to prove that languages like {0^n 1^n | n >= 0} and {a^p | p is prime} are NOT regular.`
            },
            {
                heading: 'Unit 3: Context-Free Grammars (CFG) & Pushdown Automata (PDA)',
                content: `A CFG is defined as G = (V, T, P, S):
- V: Finite set of variables (non-terminals).
- T: Finite set of terminal symbols.
- P: Production rules of the form A -> alpha, where A in V, alpha in (V union T)*.
- S: Start symbol in V.

Chomsky Normal Form (CNF):
Every rule is either of the form A -> BC or A -> a.
Pushdown Automata (PDA):
A PDA extends finite automata with a Last-In First-Out (LIFO) stack memory: M = (Q, Sigma, Gamma, delta, q0, Z0, F).
Stack operations: push, pop, and no-op (replace top symbol). Deterministic PDAs (DPDA) accept a strict subset of Context-Free Languages (Deterministic CFLs).`
            },
            {
                heading: 'Unit 4: Turing Machines & Decidability',
                content: `Turing Machine (TM) is the universal computational model: M = (Q, Sigma, Gamma, delta, q0, B, F).
The transition function delta(q, X) = (p, Y, D) updates the current state to p, writes symbol Y on the infinite tape, and shifts the read/write head in direction D in {L, R}.

Halting Problem (Turing, 1936):
Given the description of an arbitrary Turing machine M and input w, determining whether M halts on w is undecidable.
Proved using Cantor's diagonalization technique. Post Correspondence Problem (PCP) is also undecidable and commonly tested in university exams.`
            }
        ]
    },
    {
        subject: 'cs502',
        subjectLabel: 'CS502',
        filename: 'cs502-database-management-systems-guide.pdf',
        title: 'CS502 Database Management Systems Comprehensive Guide',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: ER Modeling and Relational Model',
                content: `Entity-Relationship (ER) Modeling:
- Entity: An object that exists and is distinguishable from other objects (e.g. Student, Course).
- Attributes: Key attribute (underlined), Composite attribute, Multivalued attribute (double oval), Derived attribute (dashed oval).
- Relationships: One-to-One (1:1), One-to-Many (1:N), Many-to-Many (M:N).
- Mapping ER to Relational Tables: Weak entity sets require identifying relationships, incorporating the primary key of the owner entity.`
            },
            {
                heading: 'Unit 2: Functional Dependencies & Normalization',
                content: `Functional Dependency (FD): X -> Y holds if whenever two tuples agree on X, they must also agree on Y.
Armstrong's Axioms:
1. Reflexivity: If Y subset X, then X -> Y.
2. Augmentation: If X -> Y, then XZ -> YZ.
3. Transitivity: If X -> Y and Y -> Z, then X -> Z.

Normal Forms:
- 1NF: All attributes must be atomic (no multivalued or composite attributes).
- 2NF: Must be in 1NF and no non-prime attribute is partially dependent on any candidate key (eliminate partial dependencies).
- 3NF: Must be in 2NF and for every non-trivial FD X -> Y, either X is a superkey OR Y is a prime attribute (eliminate transitive dependencies).
- BCNF: For every non-trivial FD X -> Y, X MUST be a superkey.`
            },
            {
                heading: 'Unit 3: Transaction Processing & ACID Properties',
                content: `A transaction is a logical unit of database processing.
ACID Properties:
- Atomicity: All or nothing execution, guaranteed by the Transaction Recovery Manager.
- Consistency: Preserves database invariants before and after commit.
- Isolation: Concurrent transactions execute as if running in isolation, managed by Concurrency Control.
- Durability: Once committed, updates persist even across system crashes, guaranteed by WAL (Write-Ahead Logging).`
            },
            {
                heading: 'Unit 4: Concurrency Control & Serializability',
                content: `Conflict Serializability:
Two operations conflict if they belong to different transactions, access the same data item, and at least one is a write.
Precedence Graph (Serialization Graph):
Draw directed edge Ti -> Tj if an operation in Ti precedes and conflicts with an operation in Tj. If the precedence graph is acyclic, the schedule is conflict serializable.
Two-Phase Locking (2PL):
- Growing Phase: Transaction acquires locks, cannot release any.
- Shrinking Phase: Transaction releases locks, cannot acquire new ones. Strict 2PL prevents cascading rollbacks.`
            }
        ]
    },
    {
        subject: 'cs601',
        subjectLabel: 'CS601',
        filename: 'cs601-machine-learning-revision-notes.pdf',
        title: 'CS601 Machine Learning Core Formulas & Exam Guide',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Supervised Learning & Linear Regression',
                content: `Linear Regression hypothesis: h_theta(x) = theta^T x.
Mean Squared Error (MSE) Cost Function: J(theta) = (1 / 2m) sum_{i=1}^m (h_theta(x^(i)) - y^(i))^2.
Gradient Descent update rule: theta_j := theta_j - alpha * (1/m) sum_{i=1}^m (h_theta(x^(i)) - y^(i)) * x_j^(i).
Normal Equation closed-form solution: theta = (X^T X)^(-1) X^T y.`
            },
            {
                heading: 'Unit 2: Logistic Regression & Classification',
                content: `Logistic Regression hypothesis: h_theta(x) = g(theta^T x) where g(z) = 1 / (1 + e^(-z)) is the sigmoid activation function.
Cross-Entropy Loss (Log Loss):
J(theta) = - (1/m) sum_{i=1}^m [ y^(i) log(h_theta(x^(i))) + (1 - y^(i)) log(1 - h_theta(x^(i))) ].
Confusion Matrix Metrics:
- Precision = TP / (TP + FP)
- Recall (Sensitivity) = TP / (TP + FN)
- F1-Score = 2 * (Precision * Recall) / (Precision + Recall)
- Specificity = TN / (TN + FP)`
            },
            {
                heading: 'Unit 3: Support Vector Machines (SVM) & Decision Trees',
                content: `Support Vector Machines maximize the margin 2 / ||w|| between hyperplanes: min (1/2) ||w||^2 subject to y_i (w^T x_i + b) >= 1.
Kernel Trick maps non-linear data into higher dimensional space:
- Polynomial Kernel: K(x, z) = (x^T z + c)^d
- Radial Basis Function (RBF/Gaussian): K(x, z) = exp(- gamma ||x - z||^2).

Decision Trees:
Information Gain = Entropy(Parent) - sum ( |S_v| / |S| ) * Entropy(S_v).
Entropy H(S) = - sum p_i log2(p_i).
Gini Impurity = 1 - sum (p_i)^2.`
            },
            {
                heading: 'Unit 4: Unsupervised Learning & PCA',
                content: `K-Means Clustering:
1. Initialize k cluster centroids randomly.
2. Assignment Step: Assign each point to the nearest centroid.
3. Update Step: Recompute centroid as the mean of assigned points. Repeat until convergence.

Principal Component Analysis (PCA):
1. Standardize data matrix X.
2. Compute Covariance Matrix Sigma = (1/m) X^T X.
3. Compute eigenvectors and eigenvalues of Sigma.
4. Select top k eigenvectors with highest eigenvalues to project into k-dimensional subspace.`
            }
        ]
    },
    {
        subject: 'cs602',
        subjectLabel: 'CS602',
        filename: 'cs602-computer-networks-handbook.pdf',
        title: 'CS602 Computer Networks Architecture & Protocols',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Network Architectures & Physical Layer',
                content: `OSI 7-Layer Model:
1. Physical (Bits, cables, modulation)
2. Data Link (Frames, MAC address, CSMA/CD, Error control)
3. Network (Packets, IP addressing, Routing)
4. Transport (Segments, End-to-end delivery, TCP/UDP port numbers)
5. Session (Dialog control, synchronization)
6. Presentation (Encoding, encryption, compression)
7. Application (User services, HTTP, DNS, SMTP, FTP).

Nyquist Maximum Bit Rate: C = 2B log2(V) bps.
Shannon Channel Capacity with noise: C = B log2(1 + S/N) bps.`
            },
            {
                heading: 'Unit 2: Data Link Layer & Framing',
                content: `Flow Control Mechanisms:
- Stop-and-Wait: Sender transmits one frame and waits for ACK. Efficiency = 1 / (1 + 2a), where a = T_prop / T_trans.
- Go-Back-N (Sliding Window): Sender window size W_s = 2^k - 1, Receiver window size W_r = 1.
- Selective Repeat: W_s = W_r = 2^(k-1). Both sender and receiver maintain window buffers.`
            },
            {
                heading: 'Unit 3: IPv4 Subnetting & Routing Algorithms',
                content: `IPv4 Classes:
- Class A: 0.0.0.0 - 127.255.255.255 (Subnet mask 255.0.0.0)
- Class B: 128.0.0.0 - 191.255.255.255 (Subnet mask 255.255.0.0)
- Class C: 192.0.0.0 - 223.255.255.255 (Subnet mask 255.255.255.0)

Subnetting Math:
Borrowing n host bits gives 2^n subnets. Each subnet has 2^(32 - mask) - 2 usable host addresses.
Routing Protocols:
- Distance Vector (Bellman-Ford algorithm, e.g. RIP, subject to count-to-infinity problem).
- Link State (Dijkstra's shortest path algorithm, e.g. OSPF).`
            },
            {
                heading: 'Unit 4: Transport Layer (TCP & UDP)',
                content: `TCP 3-Way Handshake:
1. Client sends SYN (seq = x).
2. Server replies with SYN-ACK (seq = y, ack = x + 1).
3. Client sends ACK (seq = x + 1, ack = y + 1).

TCP Congestion Control States:
1. Slow Start: Congestion Window (cwnd) doubles every RTT until slow start threshold (ssthresh).
2. Congestion Avoidance: cwnd grows linearly (+1 MSS per RTT).
3. Fast Retransmit & Fast Recovery: Triggered by 3 duplicate ACKs.`
            }
        ]
    },
    {
        subject: 'cs603',
        subjectLabel: 'CS603',
        filename: 'cs603-compiler-design-reference.pdf',
        title: 'CS603 Compiler Design & Parsing Reference Notes',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Phases of Compiler & Lexical Analysis',
                content: `Compiler Phases:
1. Lexical Analysis (Scanner): Converts source character stream into tokens using Regular Expressions & DFAs.
2. Syntax Analysis (Parser): Checks grammatical correctness using Context-Free Grammars and generates a Parse Tree.
3. Semantic Analysis: Type checking and semantic rule verification.
4. Intermediate Code Generation (ICG): Three-Address Code (TAC), Quadruples, Triples.
5. Code Optimization: Machine-independent optimizations (dead code elimination, loop unrolling).
6. Code Generation: Target assembly/machine code emission.`
            },
            {
                heading: 'Unit 2: Top-Down Parsing & LL(1)',
                content: `Eliminating Left Recursion:
For rule A -> A alpha | beta, replace with:
A -> beta A'
A' -> alpha A' | epsilon.

Left Factoring:
For rule A -> alpha beta1 | alpha beta2, replace with:
A -> alpha A'
A' -> beta1 | beta2.

FIRST and FOLLOW sets:
- FIRST(alpha): Set of terminals that begin strings derived from alpha.
- FOLLOW(A): Set of terminals that can appear immediately to the right of A in some sentential form.
An LL(1) grammar has no multiple entries in any cell of its parsing table M[A, a].`
            },
            {
                heading: 'Unit 3: Bottom-Up Parsing (LR Parsers)',
                content: `Hierarchy of LR Parsers:
LR(0) < SLR(1) < LALR(1) < CLR(1).
- LR(0): Items have no lookaheads. Shift and reduce conflicts occur easily.
- SLR(1): Simple LR, places reduce actions only in FOLLOW(A) of LHS variable.
- CLR(1): Canonical LR with explicit [A -> alpha . beta, a] lookahead tokens. Most powerful, largest state table.
- LALR(1): Merges CLR(1) states with identical core items to drastically reduce table size.`
            }
        ]
    },
    {
        subject: 'cs604',
        subjectLabel: 'CS604',
        filename: 'cs604-software-project-management-guide.pdf',
        title: 'CS604 Software Project Management Comprehensive Notes',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Software Project Planning & Estimation',
                content: `COCOMO (Constructive Cost Model) - Boehm:
Basic COCOMO Formula:
- Effort (E) = a * (KLOC)^b [Person-Months]
- Development Time (D) = c * (E)^d [Months]
- Persons Required (P) = E / D.

Project Modes:
1. Organic (Small teams, familiar environment): a = 2.4, b = 1.05.
2. Semidetached (Medium teams, mixed experience): a = 3.0, b = 1.12.
3. Embedded (Rigid constraints, hardware coupling): a = 3.6, b = 1.20.`
            },
            {
                heading: 'Unit 2: PERT & CPM Scheduling',
                content: `CPM (Critical Path Method):
Deterministic activity durations. The Critical Path is the longest sequence of dependent activities from project start to finish.
Float / Slack = Late Start (LS) - Early Start (ES) = Late Finish (LF) - Early Finish (EF). Activities on the critical path have Zero Float.

PERT (Program Evaluation and Review Technique):
Probabilistic durations with 3 time estimates:
- Expected Time T_e = (t_o + 4*t_m + t_p) / 6
  where t_o is optimistic time, t_m is most likely time, and t_p is pessimistic time.
- Variance sigma^2 = ((t_p - t_o) / 6)^2.`
            },
            {
                heading: 'Unit 3: Risk Management & Agile Methodologies',
                content: `Risk Management Cycle:
1. Risk Identification: Brainstorming, checklists, taxonomy.
2. Risk Analysis: Probability x Impact = Risk Exposure.
3. Risk Mitigation, Monitoring, and Management (RMMM Plan).

Agile Scrum Framework:
- Roles: Product Owner, Scrum Master, Development Team.
- Ceremonies: Sprint Planning, Daily Standup (15 min), Sprint Review, Sprint Retrospective.
- Artifacts: Product Backlog, Sprint Backlog, Burndown Chart.`
            }
        ]
    },
    {
        subject: 'cs701',
        subjectLabel: 'CS701',
        filename: 'cs701-software-architecture-patterns.pdf',
        title: 'CS701 Software Architecture & Design Patterns Notes',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Architectural Foundations & SOLID Principles',
                content: `SOLID Design Principles:
- Single Responsibility: A class should have only one reason to change.
- Open/Closed: Software entities should be open for extension but closed for modification.
- Liskov Substitution: Subtypes must be substitutable for their base types.
- Interface Segregation: Clients should not be forced to depend upon interfaces they do not use.
- Dependency Inversion: Depend upon abstractions, not concretions.`
            },
            {
                heading: 'Unit 2: Core Architectural Patterns',
                content: `1. Layered (N-Tier) Architecture: Separates presentation, business logic, persistence, and database layers.
2. Event-Driven Architecture: Decoupled publishers and subscribers reacting asynchronously to domain events via message brokers (Kafka, RabbitMQ).
3. Microservices Architecture: Decentralized, independently deployable services communicating via REST APIs or gRPC, each managing its own isolated datastore.`
            }
        ]
    },
    {
        subject: 'cs703-cis',
        subjectLabel: 'CS703-CIS',
        filename: 'cs703-cryptography-network-security-notes.pdf',
        title: 'CS703 Cryptography & Information Security Study Guide',
        type: 'notes',
        typeLabel: 'Notes',
        sections: [
            {
                heading: 'Unit 1: Symmetric Cryptography (DES & AES)',
                content: `Classical Ciphers: Caesar, Playfair, Vigenere, Hill Cipher.
Data Encryption Standard (DES):
- 64-bit block size, 56-bit effective key length (8 parity bits), 16 rounds of Feistel structure.
- Triple DES (3DES) uses 2 or 3 keys to increase key space: C = E_k1(D_k2(E_k3(P))).

Advanced Encryption Standard (AES) - Rijndael:
- 128-bit block size with 128, 192, or 256-bit keys (10, 12, or 14 rounds).
- Substitution-Permutation Network (SPN): SubBytes, ShiftRows, MixColumns, AddRoundKey.`
            },
            {
                heading: 'Unit 2: Asymmetric Cryptography & Hash Functions',
                content: `RSA Algorithm (Rivest, Shamir, Adleman):
1. Choose two large prime numbers p and q.
2. Compute n = p * q and Euler totient phi(n) = (p - 1) * (q - 1).
3. Choose e such that 1 < e < phi(n) and gcd(e, phi(n)) = 1.
4. Compute d such that d * e = 1 (mod phi(n)).
Public key: (e, n), Private key: (d, n).
Encryption: C = M^e mod n. Decryption: M = C^d mod n.

Diffie-Hellman Key Exchange:
Allows two parties to negotiate a shared secret over an insecure channel based on discrete logarithm difficulty.
Hash Functions: SHA-256 and MD5 provide collision resistance and pre-image resistance for digital signatures and HMAC.`
            }
        ]
    }
];

function buildPDF(spec) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({
            margin: 50,
            size: 'A4',
            info: {
                Title: spec.title,
                Author: 'Academy LMS - Aryan Singh Chandel',
                Subject: spec.subjectLabel + ' University Exam Preparation Notes',
                Keywords: `${spec.subjectLabel}, Notes, Computer Science, B.Tech, RGPV, Engineering`
            }
        });

        const targetDir = path.join(resourcesRoot, spec.subject, 'notes');
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const outPath = path.join(targetDir, spec.filename);
        const writeStream = fs.createWriteStream(outPath);

        doc.pipe(writeStream);

        // --- Header / Title block ---
        doc.rect(50, 45, 495, 80).fill('#0f172a');

        doc.fillColor('#38bdf8')
           .font('Helvetica-Bold')
           .fontSize(11)
           .text('ACADEMY LMS  •  STUDY REVISION DESK', 70, 60, { characterSpacing: 1.5 });

        doc.fillColor('#ffffff')
           .font('Helvetica-Bold')
           .fontSize(16)
           .text(spec.title, 70, 80, { width: 450 });

        doc.moveDown(4);

        // Meta pill
        doc.fillColor('#64748b')
           .font('Helvetica')
           .fontSize(9)
           .text(`Subject: ${spec.subjectLabel}   |   Type: Verified Course Notes   |   Format: PDF Handbook`, 50, 140);

        doc.moveTo(50, 155).lineTo(545, 155).strokeColor('#cbd5e1').lineWidth(1).stroke();

        let currentY = 175;

        // Sections
        for (const sec of spec.sections) {
            // Check page overflow
            if (currentY > 680) {
                doc.addPage();
                currentY = 50;
            }

            // Section Box Header
            doc.rect(50, currentY, 495, 24).fill('#e0f2fe');
            doc.fillColor('#0369a1')
               .font('Helvetica-Bold')
               .fontSize(11)
               .text(sec.heading, 60, currentY + 6);

            currentY += 34;

            doc.fillColor('#1e293b')
               .font('Helvetica')
               .fontSize(9.5)
               .text(sec.content, 50, currentY, {
                   width: 495,
                   align: 'justify',
                   lineGap: 3.5
               });

            currentY = doc.y + 20;
        }

        // Footer on all pages
        const range = doc.bufferedPageRange();
        for (let i = range.start; i < range.start + range.count; i++) {
            doc.switchToPage(i);
            doc.fillColor('#94a3b8')
               .font('Helvetica')
               .fontSize(8)
               .text(
                   `Academy LMS • ${spec.subjectLabel} Exam Handbook • Page ${i + 1} of ${range.count}`,
                   50,
                   790,
                   { align: 'center', width: 495 }
               );
        }

        doc.end();

        writeStream.on('finish', () => {
            console.log(`Generated: ${spec.filename}`);
            resolve({
                subject: spec.subject,
                subjectLabel: spec.subjectLabel,
                type: spec.type,
                typeLabel: spec.typeLabel,
                title: spec.title,
                path: `../assets/resources/${spec.subject}/notes/${spec.filename}`,
                extension: 'pdf'
            });
        });

        writeStream.on('error', reject);
    });
}

async function main() {
    console.log('Generating PDF revision handbooks...');
    const newEntries = [];
    for (const spec of pdfData) {
        const entry = await buildPDF(spec);
        newEntries.push(entry);
    }

    // Now update resource-library.js
    const libraryPath = path.join(repoRoot, 'js', 'resource-library.js');
    let existing = [];
    if (fs.existsSync(libraryPath)) {
        const content = fs.readFileSync(libraryPath, 'utf8');
        const match = content.match(/window\.resourceLibrary\s*=\s*window\.resourceLibrary\s*\|\|\s*(\[[\s\S]*?\]);/);
        if (match) {
            try {
                existing = JSON.parse(match[1]);
            } catch (e) {
                console.error('Failed to parse existing library, will rebuild');
            }
        }
    }

    // Filter out .gitkeep and any dummy files
    existing = existing.filter(item => item.extension && item.extension !== '' && !item.title.toLowerCase().includes('gitkeep'));

    // Merge new entries, avoiding duplicates by path
    const merged = [...newEntries];
    for (const item of existing) {
        if (!merged.some(m => m.path === item.path)) {
            merged.push(item);
        }
    }

    // Write back to js/resource-library.js
    const output = `window.resourceLibrary = window.resourceLibrary || ${JSON.stringify(merged, null, 4)};\n`;
    fs.writeFileSync(libraryPath, output, 'utf8');
    console.log(`Updated resource-library.js with ${merged.length} resource items!`);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
