window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs502-u1': {
        'cs502-u1t1': {
            title: 'Database Approach vs Traditional File Accessing & Advantages',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Systems vs File-Based Systems</h3>
<p class="mb-4">Before modern <strong>Database Management Systems (DBMS)</strong>, organizations used flat file processing systems where each application maintained its own private data files. This led to severe systemic bottlenecks.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-md">
        <h4 class="text-red-400 font-bold mb-2">Disadvantages of File Processing Systems</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li><strong>Data Redundancy & Inconsistency:</strong> Same customer details stored in billing, shipping, and marketing files; updating one causes inconsistent state.</li>
            <li><strong>Difficulty in Accessing Data:</strong> Writing a new C/COBOL program for every custom ad-hoc query request.</li>
            <li><strong>Data Isolation:</strong> Data scattered in various files of disparate formats.</li>
            <li><strong>Integrity Problems:</strong> Hardcoded validation checks inside program source code.</li>
            <li><strong>Atomicity Problems:</strong> Machine crashes halfway through a fund transfer leave financial balances corrupted.</li>
            <li><strong>Concurrent Access Anomalies:</strong> Multiple users overwriting the same file simultaneously without lock coordination.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-green-500 shadow-md">
        <h4 class="text-green-400 font-bold mb-2">Advantages of Database Approach</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li><strong>Centralized Control:</strong> Minimal redundancy with single source of truth.</li>
            <li><strong>Data Independence:</strong> Application programs separated from storage formats.</li>
            <li><strong>Declarative Querying:</strong> High-level SQL syntax without writing procedural loops.</li>
            <li><strong>ACID Guarantees:</strong> Transactions guarantee consistency even across system crashes.</li>
            <li><strong>Multi-User Concurrency:</strong> Fine-grained row and page locking.</li>
            <li><strong>Security & Access Control:</strong> Role-based permissions down to column level.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary drawback of storing data in traditional flat file systems compared to a DBMS?",
                    options: [
                        "A) File systems use too much CPU cache.",
                        "B) Data redundancy, data inconsistency, lack of centralized security, and difficulty with ad-hoc querying.",
                        "C) File systems cannot store strings.",
                        "D) File systems do not support text files."
                    ],
                    answer: 1,
                    explanation: "Traditional file systems lead to data duplication, inconsistent states across files, lack of declarative queries, and atomic concurrency issues."
                }
            ],
            references: [
                { title: "DBMS Architecture & Normalization Notes", url: "../assets/resources/cs502/notes/cs502-dbms-normalization-masterclass.md" },
                { title: "PostgreSQL Official Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" },
                { title: "GeeksforGeeks DBMS Tutorials", url: "https://www.geeksforgeeks.org/dbms/" }
            ]
        },
        'cs502-u1t2': {
            title: 'Data Models, Schemas, Instances & Data Independence',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    V1[External View 1: Student Portal] & V2[External View 2: Faculty Portal] & V3[External View 3: Admin Desk] -->|Logical Data Independence| C[Conceptual Schema: Unified Relational Schema]
    C -->|Physical Data Independence| I[Internal / Physical Schema: Data Files, B+ Trees, Indexes]
    I --> D[(Physical Storage Hardware: Disks)]
    style C fill:#1e293b,stroke:#3b82f6,color:#fff
    style I fill:#1e293b,stroke:#10b981,color:#fff
    style D fill:#1e293b,stroke:#f59e0b,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Three-Schema Architecture & Data Independence</h3>
<p class="mb-4">The <strong>ANSI/SPARC Three-Level Architecture</strong> defines three distinct levels of data abstraction:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
        <h4 class="font-bold text-cyan-400">1. External / View Level</h4>
        <p class="text-sm text-gray-300">Describes how individual end-users or applications view data. Different users get customized views (e.g., student view vs registrar view), hiding irrelevant or sensitive fields.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">2. Conceptual / Logical Level</h4>
        <p class="text-sm text-gray-300">Describes <em>what</em> data is stored in the entire database and the relationships among data entities (tables, primary keys, foreign keys, integrity constraints).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 class="font-bold text-purple-400">3. Internal / Physical Level</h4>
        <p class="text-sm text-gray-300">Describes <em>how</em> the data is physically stored on disk (B-trees, hashing, record layouts, block allocation, data compression, and file structures).</p>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
        <h5 class="font-bold text-yellow-300 mb-1">Physical Data Independence</h5>
        <p class="text-xs text-gray-300">The ability to modify the physical schema (e.g., adding indexes, switching storage drives) without altering the conceptual schema or application code.</p>
    </div>
    <div class="bg-gray-900 p-4 rounded-lg border border-gray-700">
        <h5 class="font-bold text-yellow-300 mb-1">Logical Data Independence</h5>
        <p class="text-xs text-gray-300">The ability to modify the conceptual schema (e.g., adding a new table or attribute) without having to rewrite existing external views or user queries.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is Logical Data Independence in database systems?",
                    options: [
                        "A) Changing the hard disk without restarting the computer.",
                        "B) Modifying the conceptual schema without altering existing external views and application queries.",
                        "C) Changing passwords automatically.",
                        "D) Upgrading the operating system without reinstalling database software."
                    ],
                    answer: 1,
                    explanation: "Logical data independence protects external schemas from changes made to the conceptual database schema."
                }
            ]
        },
        'cs502-u1t3': {
            title: 'Database Languages, Overall Structure & Roles of DBA/Designer',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Languages & Administration</h3>
<p class="mb-4">Database systems provide specific sub-languages for interacting with data:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>DDL (Data Definition Language):</strong> Specifies database schemas (<code>CREATE, ALTER, DROP, TRUNCATE</code>). Output is stored in the Data Dictionary / System Catalog.</li>
    <li><strong>DML (Data Manipulation Language):</strong> Accesses and manipulates data (<code>SELECT, INSERT, UPDATE, DELETE</code>).</li>
    <li><strong>DCL (Data Control Language):</strong> Manages security privileges (<code>GRANT, REVOKE</code>).</li>
    <li><strong>TCL (Transaction Control Language):</strong> Controls transactional boundaries (<code>COMMIT, ROLLBACK, SAVEPOINT</code>).</li>
</ul>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Role of the Database Administrator (DBA)</h4>
<p class="text-sm text-gray-300">The DBA is responsible for schema definition, storage structure and access method selection, granting authorization, integrity constraint specification, performance tuning, and backup/recovery strategies.</p>
            `,
            quizzes: [
                {
                    question: "Which category of SQL commands includes CREATE, ALTER, and DROP?",
                    options: ["A) DML", "B) DDL", "C) DCL", "D) TCL"],
                    answer: 1,
                    explanation: "DDL (Data Definition Language) handles schema structure creation and modification."
                }
            ]
        },
        'cs502-u1t4': {
            title: 'ER Data Model: Entities, Attributes & E-R Diagrams',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    E1[STUDENT] --- R{ENROLLS_IN}
    R --- E2[COURSE]
    E1 --- A1((RollNo*))
    E1 --- A2((Name))
    E2 --- A3((CourseCode*))
    E2 --- A4((Credits))
    style E1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style E2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R fill:#1e293b,stroke:#f59e0b,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Entity-Relationship (ER) Modeling</h3>
<p class="mb-4">The ER model provides a conceptual blueprint of real-world data and relationships before physical database implementation.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-green-400 font-bold mb-2">Key ER Components</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Entity:</strong> A distinguishable object (e.g. Student, Course). Represented by a <strong>Rectangle</strong>.</li>
            <li><strong>Weak Entity:</strong> Cannot be identified without an owner entity; represented by a <strong>Double Rectangle</strong> with a partial key (dashed underline).</li>
            <li><strong>Attribute:</strong> Property of an entity; represented by an <strong>Ellipse / Oval</strong>.</li>
            <li><strong>Relationship:</strong> Association among entities; represented by a <strong>Diamond</strong>.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-cyan-400 font-bold mb-2">Types of Attributes</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Simple vs Composite:</strong> Simple (Age); Composite (FullName &rarr; FirstName, LastName).</li>
            <li><strong>Single-Valued vs Multi-Valued:</strong> Multi-valued (PhoneNumbers) in <strong>Double Ellipse</strong>.</li>
            <li><strong>Stored vs Derived:</strong> Derived (Age from DOB) in <strong>Dashed Ellipse</strong>.</li>
            <li><strong>Key Attribute:</strong> Unique identifier with an <strong>Underlined</strong> label.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "How is a multi-valued attribute (such as multiple phone numbers) represented in a standard Chen ER diagram?",
                    options: [
                        "A) Dashed rectangle",
                        "B) Double ellipse (double oval)",
                        "C) Diamond inside square",
                        "D) Hexagon"
                    ],
                    answer: 1,
                    explanation: "In ER notation, double ellipses denote multi-valued attributes."
                }
            ]
        },
        'cs502-u1t5': {
            title: 'Generalization, Aggregation, Specialization & Mapping ER to Tables',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Extended ER (EER) Concepts & Relational Mapping</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-400">Specialization & Generalization</h4>
        <p class="text-sm text-gray-300"><strong>Specialization (Top-down):</strong> Subdividing an entity set into lower-level specialized entity sets based on distinguishing traits (e.g., Person &rarr; Employee, Customer).</p>
        <p class="text-sm text-gray-300 mt-1"><strong>Generalization (Bottom-up):</strong> Combining multiple entity sets with common features into a generalized higher-level entity set (e.g., Car, Truck &rarr; Vehicle).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-400">Aggregation</h4>
        <p class="text-sm text-gray-300">Treating a relationship set and its participating entity sets as a single higher-level composite entity, allowing it to participate in other higher-order relationships.</p>
    </div>
</div>

<h4 class="text-lg font-bold text-yellow-300 mb-2">ER to Relational Table Mapping Rules</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <li><strong>Strong Entity:</strong> Converts directly into a table; entity primary key becomes table primary key.</li>
    <li><strong>Weak Entity:</strong> Table primary key is formed by combining the owner's primary key + weak entity's partial discriminator.</li>
    <li><strong>1:N Relationship:</strong> Put the Primary Key of the "1" side as a Foreign Key in the "N" side table.</li>
    <li><strong>M:N Relationship:</strong> Creates a brand-new junction/bridge table containing Foreign Keys referencing both participating entity tables.</li>
    <li><strong>Multi-Valued Attribute:</strong> Creates a separate table with (Owner_PK, AttributeValue).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "How is a Many-to-Many (M:N) relationship between two entities mapped into relational tables?",
                    options: [
                        "A) By putting the primary key of one table into the other as a foreign key.",
                        "B) By creating a separate junction/cross-reference table containing foreign keys from both entities.",
                        "C) It cannot be stored in relational databases.",
                        "D) By merging both entities into a single column."
                    ],
                    answer: 1,
                    explanation: "M:N relationships require a dedicated intermediate table consisting of foreign keys referencing the primary keys of both participating tables."
                }
            ]
        },
        'cs502-u1t6': {
            title: 'Comparison: Relational, Hierarchical, Network & Object Models',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Comparative Analysis of Data Models</h3>
<div class="overflow-x-auto mb-6">
    <table class="w-full text-left bg-gray-900 border border-gray-700 rounded-lg text-sm">
        <thead class="bg-gray-800 text-blue-300">
            <tr>
                <th class="p-3">Data Model</th>
                <th class="p-3">Underlying Structure</th>
                <th class="p-3">Relationship Support</th>
                <th class="p-3">Key Strengths / Weaknesses</th>
            </tr>
        </thead>
        <tbody class="text-gray-300 divide-y divide-gray-800">
            <tr>
                <td class="p-3 font-bold text-emerald-400">Relational Model</td>
                <td class="p-3">Tables (Relations with rows & columns)</td>
                <td class="p-3">Foreign keys, 1:1, 1:N, M:N</td>
                <td class="p-3">Standard declarative SQL, mathematical rigor; joins can be compute-intensive.</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-yellow-400">Hierarchical Model</td>
                <td class="p-3">Tree structure (Parent-Child nodes)</td>
                <td class="p-3">Strict 1:N only (one parent per child)</td>
                <td class="p-3">High read speed for nested data; difficult to represent M:N relationships (e.g. IMS).</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-cyan-400">Network Model</td>
                <td class="p-3">Graph (Record types and Sets)</td>
                <td class="p-3">M:N supported via pointers</td>
                <td class="p-3">Flexible, but complex navigation with hardcoded physical memory pointers (e.g. CODASYL).</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-purple-400">Object-Oriented</td>
                <td class="p-3">Objects, Classes, Inheritance</td>
                <td class="p-3">Direct object references</td>
                <td class="p-3">Handles complex multimedia, CAD; lacks universal query standard like SQL.</td>
            </tr>
        </tbody>
    </table>
</div>
            `,
            quizzes: [
                {
                    question: "Which data model organizes records strictly as a tree hierarchy where each child record can have only one parent record?",
                    options: [
                        "A) Relational Model",
                        "B) Hierarchical Model",
                        "C) Network Model",
                        "D) Object-Relational Model"
                    ],
                    answer: 1,
                    explanation: "The Hierarchical model uses a tree structure where each child node has exactly one parent node."
                }
            ]
        }
    },
    'cs502-u2': {
        'cs502-u2t1': {
            title: 'Relational Model: Domains, Tuples, Attributes & Keys',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Relational Model (E.F. Codd, 1970)</h3>
<p class="mb-4">In the relational model, data is represented mathematically as <strong>relations</strong> (tables):</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Tuple:</strong> A single row in a table representing a single entity record.</li>
    <li><strong>Attribute:</strong> A named column describing a specific property.</li>
    <li><strong>Domain:</strong> The set of all permitted atomic values for an attribute.</li>
    <li><strong>Degree / Arity:</strong> Number of attributes (columns) in the relation.</li>
    <li><strong>Cardinality:</strong> Number of tuples (rows) in the relation.</li>
</ul>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Relational Keys Hierarchy</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div class="bg-gray-900 p-4 rounded-lg">
        <h5 class="text-blue-300 font-bold">Super Key (SK)</h5>
        <p class="text-xs text-gray-300">Any set of attributes that uniquely identifies a tuple within a relation.</p>
    </div>
    <div class="bg-gray-900 p-4 rounded-lg">
        <h5 class="text-green-300 font-bold">Candidate Key (CK)</h5>
        <p class="text-xs text-gray-300">A <strong>minimal</strong> super key (no proper subset is a super key). A table can have multiple CKs.</p>
    </div>
    <div class="bg-gray-900 p-4 rounded-lg">
        <h5 class="text-purple-300 font-bold">Primary Key (PK)</h5>
        <p class="text-xs text-gray-300">The candidate key selected by the database designer to uniquely identify tuples. <strong>Cannot be NULL</strong>.</p>
    </div>
    <div class="bg-gray-900 p-4 rounded-lg">
        <h5 class="text-amber-300 font-bold">Foreign Key (FK)</h5>
        <p class="text-xs text-gray-300">An attribute in a table that references the primary key of another table, establishing referential integrity.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the relationship between a Super Key and a Candidate Key?",
                    options: [
                        "A) All Super Keys are Candidate Keys.",
                        "B) A Candidate Key is a minimal Super Key with no extraneous attributes.",
                        "C) They are completely unrelated.",
                        "D) A Candidate Key can never be chosen as Primary Key."
                    ],
                    answer: 1,
                    explanation: "Candidate keys are minimal super keys: removing any attribute destroys uniqueness."
                }
            ],
            references: [
                { title: "Relational Algebra & SQL Lab Manual", url: "../assets/resources/cs502/assignments/cs502-sql-lab-manual-and-queries.md" },
                { title: "SQL Fiddle Interactive Engine", url: "https://sqlfiddle.com/" },
                { title: "DB-Fiddle SQL Practice", url: "https://www.db-fiddle.com/" }
            ]
        },
        'cs502-u2t2': {
            title: 'Schemas, Integrity Constraints, Referential Integrity, Intension & Extension',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Integrity Constraints & Intension vs Extension</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">Intension (Schema)</h4>
        <p class="text-sm text-gray-300">The structure, definition, and constraints of the database. Relatively static over time (e.g. <code>Student(ID, Name, GPA)</code>).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-400">Extension (Database State / Instance)</h4>
        <p class="text-sm text-gray-300">The actual data populated into the tables at a specific snapshot in time. Constantly changes with inserts and updates.</p>
    </div>
</div>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Relational Integrity Constraints</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <li><strong>Domain Constraint:</strong> Values must adhere to the data type, nullability, and CHECK ranges.</li>
    <li><strong>Entity Integrity:</strong> No attribute of a Primary Key can be NULL (must identify distinct records).</li>
    <li><strong>Referential Integrity:</strong> A Foreign Key value must either be NULL or match an existing Primary Key value in the referenced parent relation. Violations can be prevented via <code>ON DELETE CASCADE / SET NULL / RESTRICT</code>.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What does the Entity Integrity Constraint state in relational databases?",
                    options: [
                        "A) Foreign keys cannot be duplicate.",
                        "B) The Primary Key of a relation cannot have a NULL value.",
                        "C) All columns must be indexed.",
                        "D) Every user must have a unique password."
                    ],
                    answer: 1,
                    explanation: "Entity Integrity states that primary key values cannot be NULL, ensuring every tuple can be uniquely identified."
                }
            ]
        },
        'cs502-u2t3': {
            title: 'Relational Algebra: Select, Project, Join, Division & Outer Union',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Relational Algebra Operations</h3>
<p class="mb-4">Relational algebra is a procedural query language providing mathematical operations over relations:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 class="font-bold text-blue-300">1. Selection (&sigma;): Horizontal Filtering</h4>
        <p class="text-sm text-gray-300">Extracts tuples satisfying a predicate: <code>&sigma;<sub>salary &gt; 50000</sub>(Employee)</code>.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 class="font-bold text-purple-300">2. Projection (&pi;): Vertical Filtering</h4>
        <p class="text-sm text-gray-300">Extracts specified columns and removes duplicate rows: <code>&pi;<sub>name, dept</sub>(Employee)</code>.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h4 class="font-bold text-green-300">3. Natural Join (&alefsym;) & Theta Join (&alefsym;<sub>&theta;</sub>)</h4>
        <p class="text-sm text-gray-300">Combines tuples from two relations based on matching values across common attribute names.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">4. Division (&divide;)</h4>
        <p class="text-sm text-gray-300">Used for "for all" queries (e.g., finding students enrolled in <em>all</em> courses taught by Prof. Turing).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 class="font-bold text-teal-300">5. Outer Union</h4>
        <p class="text-sm text-gray-300">Unions two relations that are partially compatible by padding unmatched columns with NULLs.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which relational algebra operator selects rows that satisfy a given condition?",
                    options: ["A) Projection (π)", "B) Selection (σ)", "C) Cartesian Product (×)", "D) Intersection (∩)"],
                    answer: 1,
                    explanation: "Selection (σ) filters tuples (rows) horizontally based on a Boolean condition."
                }
            ]
        },
        'cs502-u2t4': {
            title: 'Relational Calculus: Tuple-Oriented & Domain-Oriented Calculus',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Root[&Pi; StudentName, CourseName] --> Join[&bowtie; Enrollment.CourseID = Course.CourseID]
    Join --> Filter[&sigma; Department = 'CSE']
    Filter --> Table1[(STUDENT Table)]
    Join --> Table2[(COURSE Table)]
    style Root fill:#1e293b,stroke:#3b82f6,color:#fff
    style Join fill:#1e293b,stroke:#f59e0b,color:#fff
    style Filter fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Relational Calculus (Non-Procedural)</h3>
<p class="mb-4">Unlike procedural Relational Algebra, Relational Calculus is <strong>declarative</strong>: it specifies <em>what</em> information is desired without prescribing the algorithm to obtain it.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-cyan-500">
        <h4 class="text-cyan-300 font-bold mb-2">Tuple Relational Calculus (TRC)</h4>
        <p class="text-sm text-gray-300 mb-2">Queries use tuple variables ranging over relations: <code>{ t | P(t) }</code></p>
        <p class="text-xs text-gray-400 font-mono bg-gray-900 p-2 rounded">
            { t | t &isin; Instructor &and; t[salary] &gt; 80000 }
        </p>
        <p class="text-xs text-gray-400 mt-2">Forms the mathematical basis of SQL.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-pink-500">
        <h4 class="text-pink-300 font-bold mb-2">Domain Relational Calculus (DRC)</h4>
        <p class="text-sm text-gray-300 mb-2">Variables range over attribute domains rather than entire tuples: <code>{ &lang;x<sub>1</sub>, x<sub>2</sub>, ...&rang; | P(x<sub>1</sub>, x<sub>2</sub>, ...) }</code></p>
        <p class="text-xs text-gray-400 mt-2">Forms the mathematical basis of QBE (Query-By-Example).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary difference between Relational Algebra and Relational Calculus?",
                    options: [
                        "A) Algebra is procedural (specifies how to compute); Calculus is declarative (specifies what to retrieve).",
                        "B) Calculus requires hardware GPUs.",
                        "C) Algebra cannot handle joins.",
                        "D) Calculus can only query numbers."
                    ],
                    answer: 0,
                    explanation: "Relational Algebra is procedural; Relational Calculus is non-procedural/declarative."
                }
            ]
        },
        'cs502-u2t5': {
            title: 'SQL-DDL, DML, Complex Queries, Joins, Triggers & Assertions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Practical SQL, Subqueries & Triggers</h3>
<p class="mb-4">SQL is the ANSI/ISO standard declarative language for interacting with relational databases.</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">-- Complex Join with Aggregation & Having</span><br>
<span class="text-blue-400">SELECT</span> d.dept_name, <span class="text-yellow-300">COUNT</span>(e.emp_id) <span class="text-blue-400">AS</span> total_staff, <span class="text-yellow-300">AVG</span>(e.salary) <span class="text-blue-400">AS</span> avg_sal<br>
<span class="text-blue-400">FROM</span> department d<br>
<span class="text-blue-400">INNER JOIN</span> employee e <span class="text-blue-400">ON</span> d.dept_id = e.dept_id<br>
<span class="text-blue-400">GROUP BY</span> d.dept_name<br>
<span class="text-blue-400">HAVING AVG</span>(e.salary) &gt; 65000<br>
<span class="text-blue-400">ORDER BY</span> avg_sal <span class="text-blue-400">DESC</span>;
</div>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Triggers & Assertions</h4>
<p class="text-sm text-gray-300 mb-2">A <strong>Trigger</strong> is procedural code executed automatically in response to DML events (<code>BEFORE/AFTER INSERT/UPDATE/DELETE</code>).</p>
<p class="text-sm text-gray-300">An <strong>Assertion</strong> is a schema-level predicate that must always hold true across multiple tables: <code>CREATE ASSERTION balance_check CHECK (...)</code>.</p>
            `,
            quizzes: [
                {
                    question: "In SQL, what clause is used to filter aggregated grouped data, corresponding to the WHERE clause for individual rows?",
                    options: ["A) FILTER BY", "B) HAVING", "C) LIMIT", "D) CHECK"],
                    answer: 1,
                    explanation: "HAVING filters groups created by GROUP BY, while WHERE filters individual rows before grouping."
                }
            ]
        }
    },
    'cs502-u3': {
        'cs502-u3t1': {
            title: 'Introduction to Normalization & Functional Dependencies',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Normalization & Functional Dependencies</h3>
<p class="mb-4"><strong>Normalization</strong> is the systematic process of organizing data in a database to reduce data redundancy and eliminate insert, update, and delete anomalies.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 mb-6 shadow-md">
    <h4 class="text-yellow-300 font-bold mb-2 text-lg">Functional Dependency (FD)</h4>
    <p class="text-sm text-gray-300 mb-2">Given relation R, attribute set Y is functionally dependent on X (written <code>X &rarr; Y</code>) if whenever two tuples have identical values for X, they must also have identical values for Y.</p>
    <p class="text-xs text-gray-400">Example: <code>Roll_No &rarr; Student_Name</code> (Given a roll number, the student name is uniquely determined).</p>
</div>

<h4 class="text-lg font-bold text-green-400 mb-2">Armstrong's Axioms (Sound & Complete Inference Rules)</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
    <li><strong>Reflexivity:</strong> If Y &sube; X, then X &rarr; Y.</li>
    <li><strong>Augmentation:</strong> If X &rarr; Y, then XZ &rarr; YZ for any attribute set Z.</li>
    <li><strong>Transitivity:</strong> If X &rarr; Y and Y &rarr; Z, then X &rarr; Z.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "If attribute Y is a subset of attribute set X, which of Armstrong's axioms states that X -> Y?",
                    options: ["A) Transitivity", "B) Augmentation", "C) Reflexivity", "D) Decomposition"],
                    answer: 2,
                    explanation: "The Reflexivity axiom states that if Y ⊆ X, then X -> Y."
                }
            ]
        },
        'cs502-u3t2': {
            title: 'Normal Forms (1NF, 2NF, 3NF, BCNF) & Multivalued Dependencies',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    N1[1NF: Atomic Values] --> N2[2NF: No Partial Key Dependencies]
    N2 --> N3[3NF: No Transitive Dependencies]
    N3 --> N4[BCNF: Every Determinant is a Super Key]
    style N1 fill:#1e293b,stroke:#64748b,color:#fff
    style N2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style N3 fill:#1e293b,stroke:#10b981,color:#fff
    style N4 fill:#1e293b,stroke:#f59e0b,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: BCNF Decomposition</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given Relation:</strong> <code>R(A, B, C, D)</code> with Functional Dependencies: <code>AB &rarr; C, C &rarr; D, D &rarr; A</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Candidate Keys: Closure (AB)+ = {A,B,C,D}. Also (BD)+ = {B,D,A,C} and (BC)+ = {B,C,D,A}. Candidate Keys are AB, BD, BC.</div>
        <div>2. Test C &rarr; D: C is NOT a superkey, but D is a prime attribute (part of candidate key BD). Hence it passes 3NF, but VIOLATES BCNF!</div>
        <div>3. Decompose R into BCNF:</div>
        <div class="text-cyan-300">   R1(C, D) with FD: C &rarr; D (C is key of R1, so R1 is in BCNF)</div>
        <div class="text-cyan-300">   R2(A, B, C) with FDs: AB &rarr; C (AB is key of R2, so R2 is in BCNF)</div>
        <div class="text-yellow-300 font-bold">4. Verify Lossless Join: R1 &cap; R2 = {C}, and C &rarr; CD determines all of R1. Hence decomposition is LOSSLESS!</div>
    </div>
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Normal Forms Hierarchy</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    N1[1NF: Atomic Attributes] --> N2[2NF: No Partial Dependencies]
    N2 --> N3[3NF: No Transitive Dependencies]
    N3 --> N4[BCNF: Every Determinant is Super Key]
    style N1 fill:#1e293b,stroke:#64748b,color:#fff
    style N2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style N3 fill:#1e293b,stroke:#10b981,color:#fff
    style N4 fill:#1e293b,stroke:#f59e0b,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: BCNF Decomposition</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given Relation:</strong> <code>R(A, B, C, D)</code> with Functional Dependencies: <code>AB &rarr; C, C &rarr; D, D &rarr; A</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Candidate Keys: Closure (AB)+ = {A,B,C,D}. Also (BD)+ = {B,D,A,C} and (BC)+ = {B,C,D,A}. Candidate Keys are AB, BD, BC.</div>
        <div>2. Test C &rarr; D: C is NOT a superkey, but D is a prime attribute (part of candidate key BD). Hence it passes 3NF, but VIOLATES BCNF!</div>
        <div>3. Decompose R into BCNF:</div>
        <div class="text-cyan-300">   R1(C, D) with FD: C &rarr; D (C is key of R1, so R1 is in BCNF)</div>
        <div class="text-cyan-300">   R2(A, B, C) with FDs: AB &rarr; C (AB is key of R2, so R2 is in BCNF)</div>
        <div class="text-yellow-300 font-bold">4. Verify Lossless Join: R1 &cap; R2 = {C}, and C &rarr; CD determines all of R1. Hence decomposition is LOSSLESS!</div>
    </div>
</div>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">1NF (First Normal Form)</h4>
        <p class="text-sm text-gray-300">All attribute values must be <strong>atomic</strong> (no repeating groups, comma-separated lists, or composite values).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 class="font-bold text-orange-400">2NF (Second Normal Form)</h4>
        <p class="text-sm text-gray-300">Must be in 1NF and have <strong>no Partial Functional Dependencies</strong> (no non-prime attribute should depend on a proper subset of any candidate key).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-400">3NF (Third Normal Form)</h4>
        <p class="text-sm text-gray-300">Must be in 2NF and have <strong>no Transitive Dependencies</strong>. For every non-trivial FD <code>X &rarr; Y</code>, either X is a superkey OR Y is a prime attribute.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h4 class="font-bold text-green-400">BCNF (Boyce-Codd Normal Form - Strict 3.5NF)</h4>
        <p class="text-sm text-gray-300">For every non-trivial FD <code>X &rarr; Y</code>, <strong>X must strictly be a Super Key</strong>. Eliminates anomalies where a prime attribute depends on a non-key.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Under what condition is a relational schema in Boyce-Codd Normal Form (BCNF)?",
                    options: [
                        "A) Only if all values are integers.",
                        "B) For every functional dependency X -> Y, X must be a super key.",
                        "C) Only if there are no foreign keys.",
                        "D) When there are at most three tables."
                    ],
                    answer: 1,
                    explanation: "BCNF strictly requires the determinant X in every non-trivial dependency X -> Y to be a super key."
                }
            ],
            references: [
                { title: "DBMS Normalization Masterclass (1NF to 5NF)", url: "../assets/resources/cs502/notes/cs502-dbms-normalization-masterclass.md" },
                { title: "University Solved FD & Decomposition Bank", url: "../assets/resources/cs502/mock-papers/cs502-rgpv-solved-question-bank.md" }
            ]
        },
        'cs502-u3t3': {
            title: 'Decomposition, Dependency Preservation & Lossless Joins',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Properties of Relational Decomposition</h3>
<p class="mb-4">When decomposing a table R into R1 and R2 to achieve higher normal forms, two critical properties must be verified:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-emerald-500">
        <h4 class="text-emerald-400 font-bold mb-2">1. Lossless Join Decomposition (MANDATORY)</h4>
        <p class="text-sm text-gray-300 mb-2">Rejoining R1 and R2 via natural join must produce <strong>exactly the original relation R</strong>, without generating bogus / spurious tuples: <code>R1 &alefsym; R2 = R</code>.</p>
        <p class="text-xs text-yellow-300">Criterion: <code>R1 &cap; R2 &rarr; R1</code> OR <code>R1 &cap; R2 &rarr; R2</code> must hold.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500">
        <h4 class="text-blue-400 font-bold mb-2">2. Dependency Preservation</h4>
        <p class="text-sm text-gray-300 mb-2">All functional dependencies in F can be enforced within individual tables without requiring expensive multi-table joins: <code>(F1 &cup; F2)<sup>+</sup> = F<sup>+</sup></code>.</p>
        <p class="text-xs text-gray-400">3NF guarantees both Lossless Join and Dependency Preservation. BCNF guarantees Lossless Join, but does not always preserve dependencies.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Can any relation always be decomposed into BCNF with both lossless join AND dependency preservation?",
                    options: [
                        "A) Yes, BCNF always preserves all dependencies.",
                        "B) No, while 3NF can always achieve both, BCNF may sometimes sacrifice dependency preservation.",
                        "C) BCNF does not guarantee lossless joins.",
                        "D) Normalization never loses dependencies."
                    ],
                    answer: 1,
                    explanation: "3NF can always achieve both lossless join and dependency preservation, but BCNF decomposition cannot always preserve all functional dependencies."
                }
            ]
        },
        'cs502-u3t4': {
            title: 'Problems with Null Valued & Dangling Tuples',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Null Values and Dangling Tuples</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">Dangling Tuples</h4>
        <p class="text-sm text-gray-300">A tuple in a relation that does not join with any tuple in another relation because of a missing matching foreign key value. In natural joins, dangling tuples are silently dropped, potentially losing valuable historical records unless an <code>OUTER JOIN</code> (LEFT, RIGHT, FULL) is utilized.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-rose-500">
        <h4 class="font-bold text-rose-300">Problems with NULL Values</h4>
        <p class="text-sm text-gray-300">Null indicates unknown, inapplicable, or missing data. Nulls introduce Three-Valued Logic (True, False, Unknown) in SQL, causing counter-intuitive evaluations (e.g. <code>NULL = NULL</code> evaluates to <strong>UNKNOWN</strong>, not True).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In standard SQL, what is the boolean result of evaluating: NULL = NULL?",
                    options: ["A) TRUE", "B) FALSE", "C) UNKNOWN", "D) ERROR"],
                    answer: 2,
                    explanation: "In SQL three-valued logic, comparing NULL to anything (even another NULL) with '=' yields UNKNOWN. 'IS NULL' must be used instead."
                }
            ]
        },
        'cs502-u3t5': {
            title: 'Query Optimization: Steps, Algorithms & Heuristic / Cost Estimation',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Query Optimization Engine</h3>
<p class="mb-4">The query optimizer converts an input SQL query into an optimal execution plan with minimum estimated cost.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500">
        <h4 class="text-green-400 font-bold mb-2">Heuristic Query Optimization</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Push Selections Down:</strong> Apply filters (<code>&sigma;</code>) as early as possible to drastically reduce intermediate row counts.</li>
            <li><strong>Push Projections Down:</strong> Drop unused columns early to reduce memory footprint.</li>
            <li>Reorder joins so smaller relations are joined first.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-indigo-500">
        <h4 class="text-indigo-400 font-bold mb-2">Cost-Based Optimization</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Uses catalog statistics (histogram of values, row count, block count).</li>
            <li>Estimates disk I/O operations, CPU clock cycles, and network transfer.</li>
            <li>Evaluates join algorithms: Nested-Loop Join, Block Nested-Loop, Index Nested-Loop, Merge Join, Hash Join.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary heuristic rule in relational query tree optimization?",
                    options: [
                        "A) Perform Cartesian products first.",
                        "B) Push Selection (σ) operations as far down the query tree as possible to reduce row count early.",
                        "C) Remove all indexes.",
                        "D) Convert all joins to full outer joins."
                    ],
                    answer: 1,
                    explanation: "Performing selections early (pushing selections down) minimizes the cardinality of relations before expensive join operations."
                }
            ]
        }
    },
    'cs502-u4': {
        'cs502-u4t1': {
            title: 'Transaction Concepts & ACID Properties',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
stateDiagram-v2
    [*] --> Active : BEGIN TRANSACTION
    Active --> Partially_Committed : Last SQL statement executed
    Partially_Committed --> Committed : Flush log buffer to disk
    Active --> Failed : Arithmetic overflow or deadlock
    Partially_Committed --> Failed : Disk write error
    Failed --> Aborted : ROLLBACK and undo changes
    Committed --> [*]
    Aborted --> [*]
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Transactions & ACID Properties</h3>
<p class="mb-4">A <strong>Transaction</strong> is a logical unit of database processing that includes one or more database access operations (read, write, update).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500 shadow-md">
        <h4 class="text-blue-300 font-bold mb-1">Atomicity ("All or Nothing")</h4>
        <p class="text-xs text-gray-300">Either all operations of the transaction complete successfully and reflect in the database, or none do. Managed by the <strong>Recovery Manager</strong>.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-green-500 shadow-md">
        <h4 class="text-green-300 font-bold mb-1">Consistency (Preserving Invariants)</h4>
        <p class="text-xs text-gray-300">Execution of a transaction in isolation preserves database consistency (e.g. sum of balances in a transfer remains invariant).</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-md">
        <h4 class="text-yellow-300 font-bold mb-1">Isolation (Concurrency Shield)</h4>
        <p class="text-xs text-gray-300">Intermediate transaction states remain invisible to other concurrent transactions. Managed by the <strong>Concurrency Control Manager</strong>.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-purple-500 shadow-md">
        <h4 class="text-purple-300 font-bold mb-1">Durability (Persistence Guarantee)</h4>
        <p class="text-xs text-gray-300">Once a transaction commits, its updates persist permanently on non-volatile storage, even in the event of an immediate power loss or OS crash.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which component of the ACID acronym guarantees that once a transaction commits, its changes survive system crashes?",
                    options: ["A) Atomicity", "B) Consistency", "C) Isolation", "D) Durability"],
                    answer: 3,
                    explanation: "Durability guarantees that committed data is safely recorded on persistent storage."
                }
            ]
        },
        'cs502-u4t2': {
            title: 'Testing Serializability: Conflict & View Serializable Schedules',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Schedule Serializability</h3>
<p class="mb-4">When multiple transactions execute concurrently, the schedule must be equivalent to some serial schedule to guarantee correctness.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500">
        <h4 class="text-indigo-400 font-bold mb-2">Conflict Serializability</h4>
        <p class="text-sm text-gray-300 mb-2">Two operations conflict if they belong to different transactions, access the same data item, and at least one is a WRITE.</p>
        <p class="text-sm text-yellow-300 font-semibold mb-2">Testing with Precedence Graph:</p>
        <p class="text-xs text-gray-300">Construct a directed graph where nodes are transactions. Draw edge <code>T<sub>i</sub> &rarr; T<sub>j</sub></code> if an operation in T<sub>i</sub> conflicts with and precedes an operation in T<sub>j</sub>. <strong>If the precedence graph has NO cycles, the schedule is Conflict Serializable!</strong></p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-pink-500">
        <h4 class="text-pink-400 font-bold mb-2">View Serializability</h4>
        <p class="text-sm text-gray-300 mb-2">A broader class than conflict serializability. Two schedules S and S' are view equivalent if:</p>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Same initial read on any data item.</li>
            <li>Same write-read dependency (reads value written by same T).</li>
            <li>Same final write on any data item.</li>
        </ul>
        <p class="text-xs text-red-400 mt-2">Testing view serializability is NP-Complete.</p>
    </div>
</div>
            

<h3 class="text-xl font-bold mb-2 text-blue-400">Conflict Serializability Precedence Graph</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    T1((Transaction T1)) -->|W1(X) then R2(X)| T2((Transaction T2))
    T2 -->|W2(Y) then R3(Y)| T3((Transaction T3))
    style T1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style T2 fill:#1e293b,stroke:#10b981,color:#fff
    style T3 fill:#1e293b,stroke:#f59e0b,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Rule: Testing Conflict Serializability</h4>
    <p class="text-sm text-gray-300 mb-2">A schedule S is conflict serializable if and only if its precedence graph contains <strong>NO CYCLES</strong>.</p>
    <ul class="list-disc pl-5 text-xs text-slate-300 space-y-1">
        <li>Draw a directed edge Ti &rarr; Tj if Ti executes an operation that conflicts with an operation in Tj (Read-Write, Write-Read, or Write-Write on the same data item) and Ti executes before Tj.</li>
        <li>If graph is a DAG (Directed Acyclic Graph) &rarr; Serializable! The serial order is given by Topological Sort: T1 &rarr; T2 &rarr; T3.</li>
        <li>If there is any directed cycle &rarr; NOT Conflict Serializable!</li>
    </ul>
</div>
`,
            quizzes: [
                {
                    question: "How do you test if a concurrent schedule is Conflict Serializable?",
                    options: [
                        "A) Check if the Precedence (Serialization) Graph contains NO directed cycles.",
                        "B) Count the number of transactions.",
                        "C) Verify all transactions start at the exact same millisecond.",
                        "D) Check if the log file is empty."
                    ],
                    answer: 0,
                    explanation: "A schedule is conflict serializable if and only if its precedence graph is acyclic."
                }
            ],
            references: [
                { title: "Serializability & 2PL Solved Bank", url: "../assets/resources/cs502/mock-papers/cs502-rgpv-solved-question-bank.md" },
                { title: "GeeksforGeeks Concurrency Control", url: "https://www.geeksforgeeks.org/concurrency-control-techniques/" }
            ]
        },
        'cs502-u4t3': {
            title: 'Recoverability, Failure Recovery, Log-Based Recovery & Checkpoints',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Crash Recovery & WAL</h3>
<p class="mb-4"><strong>Write-Ahead Logging (WAL):</strong> Before any database buffer page is written to disk, the corresponding log record must first be flushed to non-volatile log storage.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
        <h4 class="font-bold text-cyan-300">Log-Based Recovery: Immediate vs Deferred Update</h4>
        <p class="text-sm text-gray-300"><strong>Deferred Update:</strong> Writes are buffered in memory and applied to disk only after COMMIT. Requires REDO only on crash (no UNDO needed).</p>
        <p class="text-sm text-gray-300 mt-1"><strong>Immediate Update:</strong> Writes can be flushed to disk before commit. Crash recovery requires both <strong>UNDO</strong> (for active uncommitted transactions) and <strong>REDO</strong> (for committed transactions).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">Checkpoints</h4>
        <p class="text-sm text-gray-300">Periodically, the DBMS flushes all dirty memory buffers to disk and writes a <code>&lang;CHECKPOINT&rang;</code> record to the log. During crash recovery, the system only needs to scan back to the last checkpoint, eliminating the need to process the entire historical log from day one!</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary benefit of the Checkpoint mechanism during database recovery?",
                    options: [
                        "A) It prevents hackers from logging in.",
                        "B) It bounds the amount of log that must be scanned and reprocessed following a system crash.",
                        "C) It encrypts SQL statements.",
                        "D) It deletes old database tables."
                    ],
                    answer: 1,
                    explanation: "Checkpoints ensure all dirty buffers up to that point are flushed, preventing the recovery manager from having to rescan the entire log."
                }
            ]
        },
        'cs502-u4t4': {
            title: 'Concurrency Control: Locking Techniques (2PL), Deadlocks & Timestamps',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph Phase1 [Growing Phase]
        G[Acquire Shared/Exclusive Locks. NO locks released.]
    end
    Phase1 --> LockPoint((Lock Point: Peak Locks))
    LockPoint --> Phase2 [Shrinking Phase]
    subgraph Phase2 [Shrinking Phase]
        S[Release Locks. NO new locks can be acquired.]
    end
    style Phase1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style LockPoint fill:#1e293b,stroke:#f59e0b,color:#fff
    style Phase2 fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Concurrency Control Protocols</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-emerald-500">
        <h4 class="text-emerald-400 font-bold mb-2">Two-Phase Locking (2PL)</h4>
        <p class="text-xs text-gray-300 mb-2">Guarantees conflict serializability through two phases:</p>
        <ol class="list-decimal pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Growing Phase:</strong> Transaction acquires locks (Shared S or Exclusive X); cannot release any lock.</li>
            <li><strong>Shrinking Phase:</strong> Transaction releases locks; cannot acquire any new lock.</li>
        </ol>
        <p class="text-xs text-yellow-300 mt-2"><strong>Strict 2PL:</strong> Holds all Exclusive locks until COMMIT/ABORT, preventing cascading rollbacks.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-rose-500">
        <h4 class="text-rose-400 font-bold mb-2">Deadlock Handling</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Wait-For Graph:</strong> Cycle detection; pick a victim transaction to abort.</li>
            <li><strong>Wait-Die Scheme (Non-preemptive):</strong> If older requests younger item &rarr; wait. If younger requests older &rarr; die (rollback).</li>
            <li><strong>Wound-Wait Scheme (Preemptive):</strong> If older requests younger &rarr; wound (preempt). If younger requests older &rarr; wait.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What does the Two-Phase Locking (2PL) protocol guarantee?",
                    options: [
                        "A) Freedom from deadlocks.",
                        "B) Conflict Serializability of schedules.",
                        "C) Zero memory usage.",
                        "D) Faster network uploads."
                    ],
                    answer: 1,
                    explanation: "2PL guarantees conflict serializability, although standard 2PL can still be susceptible to deadlocks."
                }
            ]
        },
        'cs502-u4t5': {
            title: 'Validation Protocols, Multi-Version Schemes & Distributed Databases',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Optimistic Concurrency & Distributed Databases</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">Validation-Based (Optimistic) Concurrency Control</h4>
        <p class="text-sm text-gray-300 mb-1">Assumes conflicts are rare. Transaction proceeds through three phases without taking locks:</p>
        <p class="text-xs text-gray-300">1. <strong>Read Phase:</strong> Reads values and performs writes into local memory workspace.</p>
        <p class="text-xs text-gray-300">2. <strong>Validation Phase:</strong> Checks if serializability would be violated by concurrent commits.</p>
        <p class="text-xs text-gray-300">3. <strong>Write Phase:</strong> If validated, copies local updates to disk; otherwise, aborted and restarted.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 class="font-bold text-teal-400">Multi-Version Concurrency Control (MVCC)</h4>
        <p class="text-sm text-gray-300">Writes do not overwrite existing data; they create a new timestamped version. Readers never block writers, and writers never block readers! Foundation of PostgreSQL, Oracle, and MySQL InnoDB.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In Multi-Version Concurrency Control (MVCC), why can readers read data without acquiring locks?",
                    options: [
                        "A) Because readers read consistent historical snapshot versions of the data.",
                        "B) Because data is deleted during reads.",
                        "C) Because only one user is allowed on the database.",
                        "D) Because MVCC ignores transaction commits."
                    ],
                    answer: 0,
                    explanation: "MVCC maintains multiple versions of tuples, so read transactions can view an older consistent snapshot without blocking concurrent writes."
                }
            ]
        },
        'cs502-u4t6': {
            title: 'OODBMS vs DBMS, Temporal, Deductive, Multimedia & Mobile Databases',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Specialized & Modern Database Paradigms</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-blue-300 font-bold mb-1">Temporal Databases</h5>
        <p class="text-xs text-gray-300">Store time-varying data with valid time (when the fact was true in the real world) and transaction time (when it was logged into the database).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-green-300 font-bold mb-1">Multimedia Databases</h5>
        <p class="text-xs text-gray-300">Manage audio, video, images, and geographic spatial vectors using BLOBs (Binary Large Objects) and multidimensional R-tree indexing.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-purple-300 font-bold mb-1">Mobile Databases</h5>
        <p class="text-xs text-gray-300">Operate on battery-constrained mobile clients with intermittent wireless connectivity, using offline caching and eventual replication sync.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-yellow-300 font-bold mb-1">Deductive Databases</h5>
        <p class="text-xs text-gray-300">Combine logic programming (Datalog) with relational databases to infer new facts from existing rules via recursion.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What distinguishes a Temporal database from a standard relational database?",
                    options: [
                        "A) Temporal databases cannot store dates.",
                        "B) Temporal databases maintain historical valid-time and transaction-time dimensions for facts across time.",
                        "C) Temporal databases expire after 30 days.",
                        "D) Temporal databases are written only in assembly."
                    ],
                    answer: 1,
                    explanation: "Temporal databases natively manage time-variant data, distinguishing valid time from transaction time."
                }
            ]
        }
    },
    'cs502-u5': {
        'cs502-u5t1': {
            title: 'Architecture, Physical Files, Memory Structures & Background Processes',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Enterprise RDBMS Architecture (Oracle / MySQL)</h3>
<p class="mb-4">An enterprise RDBMS instance consists of operating system processes and shared memory structures:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500 shadow-md">
        <h4 class="text-indigo-400 font-bold mb-2">Memory Structures (SGA & PGA)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li><strong>SGA (System Global Area):</strong> Shared memory accessible by all server processes:
                <br>&bull; <em>Buffer Cache:</em> Holds cached data blocks from tables/indexes.
                <br>&bull; <em>Shared Pool:</em> Caches parsed SQL execution plans and data dictionary definitions.
                <br>&bull; <em>Redo Log Buffer:</em> Circular buffer holding transaction change records prior to disk flush.
            </li>
            <li><strong>PGA (Program Global Area):</strong> Private non-shared memory allocated per server process for sorting and session variables.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-teal-500 shadow-md">
        <h4 class="text-teal-400 font-bold mb-2">Key Background Processes</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li><strong>DBWn (Database Writer):</strong> Flushes dirty data buffers from SGA cache to physical disk datafiles.</li>
            <li><strong>LGWR (Log Writer):</strong> Flushes redo log buffer to redo log files on disk at every COMMIT.</li>
            <li><strong>CKPT (Checkpoint):</strong> Updates datafile headers and control files during checkpoints.</li>
            <li><strong>SMON (System Monitor):</strong> Performs crash recovery during startup and coalesces free space.</li>
            <li><strong>PMON (Process Monitor):</strong> Cleans up failed user processes and releases dead locks.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In Oracle/MySQL database architecture, which background process writes redo log entries from memory to disk at commit time?",
                    options: ["A) DBWn", "B) LGWR (Log Writer)", "C) SMON", "D) PMON"],
                    answer: 1,
                    explanation: "LGWR (Log Writer) flushes the Redo Log Buffer in SGA onto the physical redo log files on disk upon transaction commit."
                }
            ]
        },
        'cs502-u5t2': {
            title: 'Tablespaces, Segments, Extents, Blocks & Dedicated/Multi-threaded Servers',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Physical & Logical Storage Hierarchy</h3>
<p class="mb-4">Enterprise RDBMS decouples logical storage from raw physical disk files:</p>

<div class="bg-gray-900 p-5 rounded-xl border border-gray-700 mb-6 font-mono text-xs text-gray-300">
    <div class="text-yellow-300 font-bold text-sm mb-1">Storage Allocation Hierarchy:</div>
    <div>Tablespace &rarr; Segment &rarr; Extent &rarr; Data Block &rarr; OS Blocks</div>
</div>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><strong>Data Block:</strong> Smallest unit of database I/O (typically 8 KB).</li>
    <li><strong>Extent:</strong> A contiguous grouping of database blocks allocated together.</li>
    <li><strong>Segment:</strong> The total collection of extents allocated for a specific database object (e.g. Table segment, Index segment).</li>
    <li><strong>Tablespace:</strong> A logical storage container grouping one or more physical datafiles on disk (e.g. SYSTEM, USERS, TEMP, UNDO).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the smallest unit of data I/O in Oracle/RDBMS logical storage?",
                    options: ["A) Extent", "B) Data Block", "C) Segment", "D) Tablespace"],
                    answer: 1,
                    explanation: "The data block (often 8KB) is the finest-grained unit of database I/O."
                }
            ]
        },
        'cs502-u5t3': {
            title: 'Distributed DB, Data Dictionary, Security, Roles & Privilege Management',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Data Dictionary & Security Roles</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h4 class="text-cyan-300 font-bold mb-2">The Data Dictionary / System Catalog</h4>
        <p class="text-xs text-gray-300">Read-only metadata tables automatically maintained by the DBMS. Stores table schemas, column data types, constraints, user privileges, and index statistics (e.g. <code>ALL_TABLES, USER_TAB_COLUMNS</code>).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h4 class="text-green-300 font-bold mb-2">Roles & Privilege Management</h4>
        <p class="text-xs text-gray-300 mb-2">Privileges are grouped into <strong>Roles</strong> for administrative scalability:</p>
        <div class="bg-gray-900 p-2 rounded font-mono text-xs text-yellow-300">
            CREATE ROLE clerk;<br>
            GRANT SELECT, INSERT ON accounts TO clerk;<br>
            GRANT clerk TO user_john;
        </div>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What command is used in SQL to assign a permission or role to a database user?",
                    options: ["A) ASSIGN", "B) PERMIT", "C) GRANT", "D) ALLOW"],
                    answer: 2,
                    explanation: "The standard SQL DCL statement is GRANT."
                }
            ]
        },
        'cs502-u5t4': {
            title: 'Advanced Queries: Joins, LIKE, ANY, ALL, EXISTS, Hierarchical & Flashback',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Advanced SQL Operators & Techniques</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">Subquery Quantifiers: ANY, ALL & EXISTS</h4>
        <p class="text-xs text-gray-300 mb-1"><code>WHERE salary &gt; ALL (SELECT salary FROM employees WHERE dept = 'Sales')</code>: True if salary exceeds every single sales employee.</p>
        <p class="text-xs text-gray-300"><code>WHERE EXISTS (SELECT 1 FROM orders WHERE customer_id = c.id)</code>: Correlated subquery testing for existence of matching child records (fast short-circuit).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 class="font-bold text-teal-400">Hierarchical & Flashback Queries</h4>
        <p class="text-xs text-gray-300 mb-1"><strong>Hierarchical (CONNECT BY):</strong> Traverses organizational charts / tree structures recursively in Oracle SQL.</p>
        <p class="text-xs text-gray-300"><strong>Flashback Query:</strong> Queries historical table states at a past timestamp: <code>SELECT * FROM emp AS OF TIMESTAMP (SYSTIMESTAMP - INTERVAL '1' HOUR)</code>.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which SQL operator is used in a subquery condition to test whether any rows are returned without retrieving the data?",
                    options: ["A) EXISTS", "B) CONTAINS", "C) HAS_ROWS", "D) IN_TABLE"],
                    answer: 0,
                    explanation: "EXISTS returns true if the subquery returns at least one row, and short-circuits immediately."
                }
            ]
        },
        'cs502-u5t5': {
            title: 'PL/SQL: Anonymous Blocks, Cursors & Exception Handling',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">PL/SQL Programming Language</h3>
<p class="mb-4">PL/SQL (Procedural Language / SQL) extends SQL with procedural constructs, exception handling, and cursors:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">DECLARE</span><br>
&nbsp;&nbsp;v_name employee.emp_name%<span class="text-blue-400">TYPE</span>;<br>
&nbsp;&nbsp;<span class="text-yellow-300">CURSOR</span> c_emp <span class="text-blue-400">IS SELECT</span> emp_name <span class="text-blue-400">FROM</span> employee <span class="text-blue-400">WHERE</span> salary &gt; 50000;<br>
<span class="text-purple-400">BEGIN</span><br>
&nbsp;&nbsp;<span class="text-blue-400">OPEN</span> c_emp;<br>
&nbsp;&nbsp;<span class="text-blue-400">LOOP</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">FETCH</span> c_emp <span class="text-blue-400">INTO</span> v_name;<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">EXIT WHEN</span> c_emp%<span class="text-blue-400">NOTFOUND</span>;<br>
&nbsp;&nbsp;&nbsp;&nbsp;DBMS_OUTPUT.PUT_LINE(<span class="text-green-300">'High earner: '</span> || v_name);<br>
&nbsp;&nbsp;<span class="text-blue-400">END LOOP</span>;<br>
&nbsp;&nbsp;<span class="text-blue-400">CLOSE</span> c_emp;<br>
<span class="text-purple-400">EXCEPTION</span><br>
&nbsp;&nbsp;<span class="text-blue-400">WHEN</span> NO_DATA_FOUND <span class="text-blue-400">THEN</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;DBMS_OUTPUT.PUT_LINE(<span class="text-red-400">'No matching records found'</span>);<br>
<span class="text-purple-400">END</span>;
</div>
            `,
            quizzes: [
                {
                    question: "What is the correct lifecycle sequence for an explicit PL/SQL cursor?",
                    options: [
                        "A) DECLARE -> OPEN -> FETCH -> CLOSE",
                        "B) OPEN -> DECLARE -> CLOSE -> FETCH",
                        "C) FETCH -> OPEN -> CLOSE",
                        "D) RUN -> STOP"
                    ],
                    answer: 0,
                    explanation: "Explicit cursors are declared in DECLARE, opened with OPEN, iterated with FETCH, and finalized with CLOSE."
                }
            ]
        },
        'cs502-u5t6': {
            title: 'Stored Procedures, Parameters, User-Defined Functions & Triggers',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Stored Subprograms & Database Triggers</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-green-500">
        <h4 class="text-green-400 font-bold mb-2">Stored Procedures vs Functions</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li><strong>Procedures:</strong> Executed as standalone statements; can return zero, one, or multiple values via <code>OUT / IN OUT</code> parameters.</li>
            <li><strong>Functions:</strong> Must return a single value via <code>RETURN</code>; can be invoked directly inside SQL queries (e.g. <code>SELECT calculate_bonus(sal) FROM emp</code>).</li>
            <li>Pre-compiled in database memory for maximum performance.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-amber-500">
        <h4 class="text-amber-400 font-bold mb-2">Row-Level vs Statement Triggers</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li><strong>FOR EACH ROW:</strong> Fires once for every affected row. Provides <code>:OLD</code> and <code>:NEW</code> bind variables to inspect modifications.</li>
            <li><strong>Statement-Level:</strong> Fires once for the entire SQL statement regardless of row count.</li>
            <li><strong>Mutating Table Error (ORA-04091):</strong> Occurs when a row trigger attempts to query or modify the table currently being modified by the triggering statement.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the key functional difference between a Stored Procedure and a Stored Function in SQL/PLSQL?",
                    options: [
                        "A) Functions cannot access database tables.",
                        "B) A Function must return a value and can be called directly in SQL expressions, while a Procedure does not have a return type in its signature.",
                        "C) Procedures are written in C, while Functions are written in Java.",
                        "D) There is no difference."
                    ],
                    answer: 1,
                    explanation: "Functions must return a value via RETURN and can be embedded in SQL queries."
                }
            ],
            references: [
                { title: "SQL Lab Manual & Triggers Handbook", url: "../assets/resources/cs502/assignments/cs502-sql-lab-manual-and-queries.md" },
                { title: "PostgreSQL PL/pgSQL Documentation", url: "https://www.postgresql.org/docs/current/plpgsql.html" }
            ]
        }
    }
});
