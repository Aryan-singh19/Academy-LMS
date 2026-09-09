window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs504-u1': {
        'cs504-u1t1': {
            title: 'Concept of WWW, Internet and WWW Architecture',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The World Wide Web & Internet Architecture</h3>
<p class="mb-4">While often used interchangeably, the <strong>Internet</strong> and the <strong>World Wide Web (WWW)</strong> represent two distinct computational layers:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-indigo-500 shadow-md">
        <h4 class="text-indigo-300 font-bold mb-2">The Internet (Global Physical Network)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>A massive network of interconnected computers, fiber cables, routers, and switches.</li>
            <li>Operates on the TCP/IP networking protocol stack.</li>
            <li>Supports multiple services: Web (HTTP), Email (SMTP/IMAP), File Transfer (FTP), Shells (SSH).</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-emerald-500 shadow-md">
        <h4 class="text-emerald-300 font-bold mb-2">The World Wide Web (Information Space)</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>An application layer service invented by Sir Tim Berners-Lee at CERN in 1989.</li>
            <li>A global collection of hypertext documents linked via hyperlinks.</li>
            <li>Trio of foundational standards: <strong>HTML</strong> (structure), <strong>HTTP</strong> (transmission), and <strong>URI/URL</strong> (addressing).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Who invented the World Wide Web at CERN in 1989?",
                    options: ["A) Alan Turing", "B) Tim Berners-Lee", "C) Linus Torvalds", "D) Dennis Ritchie"],
                    answer: 1,
                    explanation: "Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN."
                }
            ]
        },
        'cs504-u1t2': {
            title: 'HTTP Protocol: Request and Response Model',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
sequenceDiagram
    autonumber
    Browser->>Server: 1. TCP SYN (Handshake Initiated)
    Server-->>Browser: 2. TCP SYN-ACK
    Browser->>Server: 3. TCP ACK (Connection Established)
    Browser->>Server: 4. HTTP GET /index.html (Headers + Cookies)
    Server-->>Browser: 5. HTTP/1.1 200 OK (Content-Type text/html + HTML payload)
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Hypertext Transfer Protocol (HTTP)</h3>
<p class="mb-4">HTTP is an application-level, stateless client-server protocol. A client (browser) sends a request, and a web server responds with status and content:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-yellow-300 font-bold mb-2">HTTP Methods (Verbs)</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>GET:</strong> Retrieves resource representation without side effects (Idempotent).</li>
            <li><strong>POST:</strong> Submits data to be processed by resource (e.g. form submission).</li>
            <li><strong>PUT:</strong> Replaces entire resource or creates if not existing (Idempotent).</li>
            <li><strong>PATCH:</strong> Partially updates an existing resource.</li>
            <li><strong>DELETE:</strong> Removes the specified resource.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-green-300 font-bold mb-2">HTTP Status Codes</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>1xx (Informational):</strong> 101 Switching Protocols.</li>
            <li><strong>2xx (Success):</strong> 200 OK, 201 Created, 204 No Content.</li>
            <li><strong>3xx (Redirection):</strong> 301 Moved Permanently, 304 Not Modified.</li>
            <li><strong>4xx (Client Error):</strong> 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found.</li>
            <li><strong>5xx (Server Error):</strong> 500 Internal Error, 502 Bad Gateway, 503 Unavailable.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which HTTP status code signifies that a requested resource was not found on the server?",
                    options: ["A) 200", "B) 301", "C) 404", "D) 500"],
                    answer: 2,
                    explanation: "404 Not Found indicates that the server cannot locate the requested URI."
                }
            ]
        },
        'cs504-u1t3': {
            title: 'Web Browsers, Web Servers & Features of Web 2.0',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Web Evolution: From Web 1.0 to Web 2.0</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
        <h4 class="font-bold text-cyan-300">Web 1.0 (The Read-Only Web, 1990-2004)</h4>
        <p class="text-sm text-gray-300">Static HTML pages authored by webmasters. Users were passive consumers of information with no participatory generation or interactivity.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-300">Web 2.0 (The Read-Write & Social Web, 2004-Present)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1 mt-2">
            <li><strong>User-Generated Content:</strong> Wikis, blogs, social media, comments, and collaborative editing.</li>
            <li><strong>Rich Internet Applications (AJAX):</strong> Asynchronous JS and XML updates pages dynamically without full page reloads.</li>
            <li><strong>REST APIs & Web Services:</strong> Interoperable data exchange across platforms.</li>
        </ul>
    </div>
</div>
            

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">HTTP Status Codes Cheat Sheet (University Viva Essential)</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="bg-gray-950 p-3 rounded border border-slate-800">
            <span class="text-emerald-400 font-bold">2xx Success:</span>
            <ul class="text-gray-300 mt-1 space-y-1">
                <li><code>200 OK</code>: Standard successful GET/PUT</li>
                <li><code>201 Created</code>: New resource created via POST</li>
                <li><code>204 No Content</code>: Success, no body returned</li>
            </ul>
        </div>
        <div class="bg-gray-950 p-3 rounded border border-slate-800">
            <span class="text-blue-400 font-bold">3xx Redirection:</span>
            <ul class="text-gray-300 mt-1 space-y-1">
                <li><code>301 Moved Permanently</code>: Permanent URL change</li>
                <li><code>304 Not Modified</code>: Client can use cached copy</li>
            </ul>
        </div>
        <div class="bg-gray-950 p-3 rounded border border-slate-800">
            <span class="text-amber-400 font-bold">4xx Client Errors:</span>
            <ul class="text-gray-300 mt-1 space-y-1">
                <li><code>400 Bad Request</code>: Malformed payload syntax</li>
                <li><code>401 Unauthorized</code>: Missing/invalid credentials</li>
                <li><code>403 Forbidden</code>: Authenticated but not permitted</li>
                <li><code>404 Not Found</code>: Endpoint or resource missing</li>
            </ul>
        </div>
        <div class="bg-gray-950 p-3 rounded border border-slate-800">
            <span class="text-red-400 font-bold">5xx Server Errors:</span>
            <ul class="text-gray-300 mt-1 space-y-1">
                <li><code>500 Internal Server Error</code>: Uncaught backend crash</li>
                <li><code>502 Bad Gateway</code>: Upstream proxy failure</li>
                <li><code>503 Service Unavailable</code>: Server overloaded/down</li>
            </ul>
        </div>
    </div>
</div>
`,
            quizzes: [
                {
                    question: "What core technological paradigm enabled seamless dynamic updates in Web 2.0 applications without reloading the entire webpage?",
                    options: ["A) Flash animations", "B) AJAX (Asynchronous JavaScript and XML)", "C) Dial-up modems", "D) Floppy disks"],
                    answer: 1,
                    explanation: "AJAX allows web pages to send and retrieve data asynchronously in the background without reloading."
                }
            ]
        },
        'cs504-u1t4': {
            title: 'Concepts of Effective Web Design: Browser, Bandwidth & Cache',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Web Performance & Browser Optimization</h3>
<p class="mb-4">Building fast, resilient websites requires engineering around bandwidth, latency, and browser rendering:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Browser Caching (Cache-Control & ETag):</strong> Storing static assets (CSS, JS, images) locally on the client's device to eliminate redundant network roundtrips on repeated visits.</li>
    <li><strong>Asset Minification & Compression:</strong> Removing whitespace/comments from code (minifying) and serving assets compressed via Gzip or Brotli.</li>
    <li><strong>Critical Rendering Path:</strong> Minimizing render-blocking resources (deferring non-critical JS) to optimize First Contentful Paint (FCP).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What HTTP header is primarily used by web servers to instruct client browsers how long to cache static assets locally?",
                    options: ["A) Cache-Control", "B) User-Agent", "C) Host", "D) Referer"],
                    answer: 0,
                    explanation: "Cache-Control defines caching policies (e.g. max-age=31536000, immutable) for client and proxy caches."
                }
            ]
        },
        'cs504-u1t5': {
            title: 'Display Resolution, Look & Feel, Page Layout & Linking',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Responsive Visual Layouts & Information Architecture</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-yellow-300 font-bold mb-1">Fluid & Responsive Grids</h5>
        <p class="text-xs text-gray-300">Using CSS Flexbox, Grid, and relative units (%, rem, vh/vw) rather than fixed pixel dimensions to gracefully adapt to screens from 360px mobile phones to 4K desktop displays.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-purple-300 font-bold mb-1">Visual Hierarchy & F-Pattern</h5>
        <p class="text-xs text-gray-300">Eye-tracking studies demonstrate users scan web pages in an F-shaped or Z-shaped pattern. Crucial calls-to-action, branding, and navigation headers must align with natural scanning paths.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "According to web usability eye-tracking studies, in what pattern do readers typically scan text-dense web content?",
                    options: ["A) In a perfect circle", "B) In an F-shaped pattern", "C) From bottom to top", "D) In reverse alphabetical order"],
                    answer: 1,
                    explanation: "The F-shaped reading pattern is the standard scanning behavior identified by Jakob Nielsen for web content."
                }
            ]
        },
        'cs504-u1t6': {
            title: 'User Centric Design, Sitemap, Planning & Navigation Design',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">User-Centric Design (UCD) & Site Planning</h3>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><strong>User Personas & Wireframing:</strong> Mapping target audience demographics, user journeys, and structural page wireframes before coding.</li>
    <li><strong>Sitemaps:</strong> Hierarchical diagrams detailing the structural taxonomy and URL relationships across all web pages for users and search engine crawlers (<code>sitemap.xml</code>).</li>
    <li><strong>Navigation Design:</strong> Persistent global navigation, breadcrumbs (<code>Home &gt; Courses &gt; CS-504</code>), and accessibility compliance (WCAG standards for keyboard navigation and screen readers).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the purpose of breadcrumb navigation on a website?",
                    options: [
                        "A) To display food recipes.",
                        "B) To show the user's current location within the site hierarchy and provide one-click links back to higher-level parent pages.",
                        "C) To increase browser cache size.",
                        "D) To encrypt internet traffic."
                    ],
                    answer: 1,
                    explanation: "Breadcrumbs provide contextual awareness and an easy path back to parent pages."
                }
            ]
        }
    },
    'cs504-u2': {
        'cs504-u2t1': {
            title: 'Basics of HTML, Formatting, Fonts & Commenting Code',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">HTML Document Anatomy & Structure</h3>
<p class="mb-4"><strong>HyperText Markup Language (HTML)</strong> provides the structural skeleton of web pages:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-yellow-300">&lt;!DOCTYPE html&gt;</span><br>
<span class="text-blue-400">&lt;html <span class="text-purple-300">lang</span>=<span class="text-green-300">"en"</span>&gt;</span><br>
&nbsp;&nbsp;<span class="text-blue-400">&lt;head&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;meta <span class="text-purple-300">charset</span>=<span class="text-green-300">"UTF-8"</span>&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;title&gt;</span>My Web Page<span class="text-blue-400">&lt;/title&gt;</span><br>
&nbsp;&nbsp;<span class="text-blue-400">&lt;/head&gt;</span><br>
&nbsp;&nbsp;<span class="text-blue-400">&lt;body&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-gray-500">&lt;!-- This is a comment --&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;h1&gt;</span>Main Heading<span class="text-blue-400">&lt;/h1&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;p&gt;</span>Paragraph with <span class="text-blue-400">&lt;strong&gt;</span>bold<span class="text-blue-400">&lt;/strong&gt;</span> and <span class="text-blue-400">&lt;em&gt;</span>italic<span class="text-blue-400">&lt;/em&gt;</span> text.<span class="text-blue-400">&lt;/p&gt;</span><br>
&nbsp;&nbsp;<span class="text-blue-400">&lt;/body&gt;</span><br>
<span class="text-blue-400">&lt;/html&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "What is the correct syntax for an HTML comment?",
                    options: [
                        "A) // This is a comment",
                        "B) /* This is a comment */",
                        "C) <!-- This is a comment -->",
                        "D) # This is a comment"
                    ],
                    answer: 2,
                    explanation: "HTML comments are enclosed inside <!-- and --> tags."
                }
            ]
        },
        'cs504-u2t2': {
            title: 'Color, Hyperlinks, Lists, Tables & Images',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Core HTML Elements</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-cyan-300 font-bold mb-2">Hyperlinks & Images</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li><code>&lt;a href="url" target="_blank"&gt;Link&lt;/a&gt;</code>: Anchor tag.</li>
            <li><code>&lt;img src="pic.jpg" alt="Description"&gt;</code>: Void element. The <code>alt</code> attribute is essential for accessibility and SEO.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-yellow-300 font-bold mb-2">Lists & Tables</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-2">
            <li>Unordered (<code>&lt;ul&gt; &lt;li&gt;</code>) vs Ordered (<code>&lt;ol&gt; &lt;li&gt;</code>).</li>
            <li>Tables: <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code> (row), <code>&lt;th&gt;</code> (header), <code>&lt;td&gt;</code> (data cell). Span columns with <code>colspan</code> and rows with <code>rowspan</code>.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which HTML attribute specifies alternate text for an image if the image cannot be displayed?",
                    options: ["A) title", "B) alt", "C) src", "D) caption"],
                    answer: 1,
                    explanation: "The alt attribute provides alternative text for accessibility and screen readers."
                }
            ]
        },
        'cs504-u2t3': {
            title: 'HTML Forms, Input Controls & Attributes',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Interactive HTML Forms</h3>
<p class="mb-4">Forms collect user input for server processing via <code>&lt;form action="process.php" method="POST"&gt;</code>:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-xs text-gray-300 mb-6 border border-gray-700">
&lt;form action="/submit" method="POST"&gt;<br>
&nbsp;&nbsp;&lt;label for="email"&gt;Email Address:&lt;/label&gt;<br>
&nbsp;&nbsp;&lt;input type="email" id="email" name="user_email" required placeholder="name@domain.com"&gt;<br><br>
&nbsp;&nbsp;&lt;label for="pass"&gt;Password:&lt;/label&gt;<br>
&nbsp;&nbsp;&lt;input type="password" id="pass" name="password" minlength="8"&gt;<br><br>
&nbsp;&nbsp;&lt;select name="role"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="std"&gt;Student&lt;/option&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="tch"&gt;Teacher&lt;/option&gt;<br>
&nbsp;&nbsp;&lt;/select&gt;<br><br>
&nbsp;&nbsp;&lt;button type="submit"&gt;Register&lt;/button&gt;<br>
&lt;/form&gt;
</div>
            `,
            quizzes: [
                {
                    question: "Why should sensitive data like passwords be transmitted via POST rather than GET in HTML forms?",
                    options: [
                        "A) GET cannot send text.",
                        "B) GET appends form data directly to the URL query string in browser history and server logs, whereas POST sends it inside the HTTP request body.",
                        "C) POST is twice as fast.",
                        "D) GET only works in Chrome."
                    ],
                    answer: 1,
                    explanation: "GET parameters appear in the URL query string, exposing sensitive credentials in browser histories and server logs."
                }
            ]
        },
        'cs504-u2t4': {
            title: 'XHTML, Meta Tags, Character Entities, Frames & Framesets',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">XHTML Strictness & Meta Elements</h3>

<div class="space-y-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">XHTML (Extensible Hypertext Markup Language)</h4>
        <p class="text-gray-300 mb-1">HTML reformulated as strict XML. Key strict rules:</p>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>All tags must be in lowercase (<code>&lt;body&gt;</code>, not <code>&lt;BODY&gt;</code>).</li>
            <li>All tags must be explicitly closed (e.g. self-closing <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>).</li>
            <li>All attribute values must be enclosed in quotes: <code>&lt;input type="text" /&gt;</code>.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-300">Character Entities</h4>
        <p class="text-gray-300">Reserved characters represented as entity names: <code>&amp;lt;</code> (&lt;), <code>&amp;gt;</code> (&gt;), <code>&amp;amp;</code> (&amp;), <code>&amp;quot;</code> (&quot;), <code>&amp;nbsp;</code> (non-breaking space).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which of the following is a strict syntax rule in XHTML?",
                    options: [
                        "A) Tags can be unclosed if at the end of the line.",
                        "B) All elements must be strictly closed and tag names must be in lowercase.",
                        "C) Attribute values do not require quotes.",
                        "D) All text must be capitalized."
                    ],
                    answer: 1,
                    explanation: "XHTML requires well-formed XML: all tags lowercase, properly nested, and closed."
                }
            ]
        },
        'cs504-u2t5': {
            title: 'Browser Architecture & Website Structure',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    HTML[HTML Tokens] --> DOM[DOM Tree]
    CSS[CSS Rules] --> CSSOM[CSSOM Tree]
    DOM & CSSOM --> Render[Render Tree]
    Render --> Layout[Layout / Geometry Reflow]
    Layout --> Paint[Paint & GPU Compositing]
    style DOM fill:#1e293b,stroke:#3b82f6,color:#fff
    style CSSOM fill:#1e293b,stroke:#ec4899,color:#fff
    style Render fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Modern Browser Rendering Engine Architecture</h3>
<p class="mb-4">Browsers parse HTML and CSS to paint pixels on the screen via discrete subsystems:</p>

<div class="bg-gray-900 p-5 rounded-xl border border-gray-700 mb-6 text-sm text-gray-300">
    <ol class="list-decimal pl-5 space-y-2">
        <li><strong>HTML Parser:</strong> Constructs the <strong>DOM (Document Object Model)</strong> tree from raw HTML bytes.</li>
        <li><strong>CSS Parser:</strong> Constructs the <strong>CSSOM (CSS Object Model)</strong> tree from stylesheets.</li>
        <li><strong>Render Tree:</strong> Combines DOM and CSSOM, computing visibility and computed styles.</li>
        <li><strong>Layout (Reflow):</strong> Calculates the exact geometric position and size of every box on screen.</li>
        <li><strong>Paint & Compositing:</strong> Fills pixels (colors, borders, shadows) and merges layers via the GPU.</li>
    </ol>
</div>
            `,
            quizzes: [
                {
                    question: "In browser rendering architecture, what tree structure is formed by combining the DOM and CSSOM trees?",
                    options: ["A) Binary Search Tree", "B) Render Tree", "C) Syntax Tree", "D) B-Tree"],
                    answer: 1,
                    explanation: "The Render Tree merges the DOM and CSSOM to represent all visible elements on screen with their computed styles."
                }
            ]
        },
        'cs504-u2t6': {
            title: 'Overview and Features of HTML5',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">HTML5 Modern Enhancements</h3>
<p class="mb-4">HTML5 (W3C/WHATWG standard) eliminated the need for third-party plugins (Flash, Silverlight):</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-green-300 font-bold mb-1">Semantic Structural Elements</h5>
        <p class="text-xs text-gray-300 mb-2">Replaced generic <code>&lt;div&gt;</code> soup with: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-cyan-300 font-bold mb-1">Native Multimedia & Graphics</h5>
        <p class="text-xs text-gray-300 mb-2">Native <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> tags, plus <code>&lt;canvas&gt;</code> (immediate 2D/3D pixel rendering) and <code>&lt;svg&gt;</code> (scalable vectors).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which of the following is a semantic layout element introduced in HTML5?",
                    options: ["A) <div>", "B) <article>", "C) <font>", "D) <center>"],
                    answer: 1,
                    explanation: "<article>, <section>, <nav>, and <header> are semantic HTML5 tags."
                }
            ]
        }
    },
    'cs504-u3': {
        'cs504-u3t1': {
            title: 'Need for CSS, Basic Syntax, Structure & Inclusion Types',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Cascading Style Sheets (CSS)</h3>
<p class="mb-4">CSS decouples document presentation/styling from document structure (HTML):</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-yellow-500">
        <h5 class="text-yellow-300 font-bold mb-1">1. Inline CSS</h5>
        <p class="text-xs text-gray-300">Using the <code>style</code> attribute directly on HTML elements. Highest specificity; poor maintainability.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-cyan-500">
        <h5 class="text-cyan-300 font-bold mb-1">2. Internal CSS</h5>
        <p class="text-xs text-gray-300">Inside the <code>&lt;style&gt;</code> block within the HTML <code>&lt;head&gt;</code>. Applies to that single document.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500">
        <h5 class="text-green-300 font-bold mb-1">3. External CSS</h5>
        <p class="text-xs text-gray-300">Separate <code>.css</code> file linked via <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>. Best practice for site-wide caching.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the recommended best practice for applying CSS across a multi-page web application?",
                    options: [
                        "A) Inline styles on every HTML element",
                        "B) External stylesheet linked using <link rel='stylesheet' ...>",
                        "C) Copy-pasting style tags into each file",
                        "D) Hardcoding colors in HTML attributes"
                    ],
                    answer: 1,
                    explanation: "External stylesheets promote code reuse, consistency, and client caching."
                }
            ]
        },
        'cs504-u3t2': {
            title: 'Backgrounds, Colors, Fonts, Text Manipulation & Box Model',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    M[Margin: External Spacing] --> B[Border: Outer Frame]
    B --> P[Padding: Internal Breathing Space]
    P --> C[Content: Text, Image or Video]
    style M fill:#1e293b,stroke:#f59e0b,color:#fff
    style B fill:#1e293b,stroke:#ef4444,color:#fff
    style P fill:#1e293b,stroke:#10b981,color:#fff
    style C fill:#1e293b,stroke:#3b82f6,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">The CSS Box Model</h3>
<p class="mb-4">Every HTML element rendered on screen is enclosed in a rectangular box consisting of four distinct layers:</p>

<div class="bg-gray-900 p-5 rounded-xl border border-gray-700 mb-6 text-center text-sm font-mono text-gray-300">
    <div class="border-2 border-dashed border-red-500 p-4 rounded">
        <span class="text-red-400 font-bold">Margin (Transparent space outside border)</span>
        <div class="border-2 border-solid border-yellow-500 p-4 mt-2 rounded">
            <span class="text-yellow-400 font-bold">Border (Surrounding edge)</span>
            <div class="border-2 border-dotted border-green-500 p-4 mt-2 rounded">
                <span class="text-green-400 font-bold">Padding (Clear space inside border)</span>
                <div class="bg-blue-900 p-4 mt-2 rounded text-blue-200 font-bold">
                    Content (Text, images, child elements)
                </div>
            </div>
        </div>
    </div>
</div>
<p class="text-sm text-gray-300">Modern layout resets use <code>box-sizing: border-box;</code> so that padding and border are included within the specified width, preventing unexpected layout overflows.</p>
            `,
            quizzes: [
                {
                    question: "In the CSS Box Model, which layer represents the space between the element's content and its border?",
                    options: ["A) Margin", "B) Padding", "C) Outline", "D) Shadow"],
                    answer: 1,
                    explanation: "Padding is the space between the content and the border."
                }
            ]
        },
        'cs504-u3t3': {
            title: 'Positioning using CSS, CSS2 & Features of CSS3',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">CSS Positioning Schemes & CSS3</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-teal-300 font-bold mb-2">CSS Positioning Values</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>static:</strong> Default flow in document order.</li>
            <li><strong>relative:</strong> Offset relative to its normal position without moving siblings.</li>
            <li><strong>absolute:</strong> Positioned relative to its closest positioned ancestor.</li>
            <li><strong>fixed:</strong> Positioned relative to the browser viewport; remains sticky during scrolling.</li>
            <li><strong>sticky:</strong> Toggles between relative and fixed based on scroll threshold.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-pink-300 font-bold mb-2">CSS3 Superpowers</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Flexbox & CSS Grid Layout for two-dimensional grids.</li>
            <li>Transitions, Keyframe Animations, and 2D/3D Transforms.</li>
            <li>CSS Variables (Custom Properties: <code>--primary-color</code>).</li>
            <li>Media Queries (<code>@media (max-width: 768px)</code>).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which CSS position value keeps an element anchored in the same location on screen even when the user scrolls the page?",
                    options: ["A) static", "B) relative", "C) fixed", "D) inherit"],
                    answer: 2,
                    explanation: "position: fixed fixes an element relative to the viewport window."
                }
            ]
        },
        'cs504-u3t4': {
            title: 'Client-Side Scripting with JavaScript: Variables, Functions, Loops & Popups',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">JavaScript Programming Fundamentals</h3>
<p class="mb-4">JavaScript is a lightweight, dynamically typed, interpreted programming language supporting first-class functions:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-gray-500">// Modern variable declarations</span><br>
<span class="text-blue-400">const</span> appName = <span class="text-green-300">"Portal"</span>; <span class="text-gray-500">// Immutable binding</span><br>
<span class="text-blue-400">let</span> score = 0;             <span class="text-gray-500">// Block-scoped mutable</span><br><br>
<span class="text-gray-500">// Arrow function with array transformation</span><br>
<span class="text-blue-400">const</span> calculateSquares = (nums) =&gt; nums.map(n =&gt; n * n);<br><br>
<span class="text-blue-400">for</span> (<span class="text-blue-400">let</span> i = 0; i &lt; 5; i++) {<br>
&nbsp;&nbsp;console.log(<span class="text-green-300">\`Current iteration: \${i}\`</span>);<br>
}
</div>
            `,
            quizzes: [
                {
                    question: "What is the difference between 'let' and 'const' in modern JavaScript (ES6)?",
                    options: [
                        "A) let cannot be used in loops.",
                        "B) const cannot be reassigned after initialization, whereas let can be reassigned.",
                        "C) const is only for numbers.",
                        "D) There is no difference."
                    ],
                    answer: 1,
                    explanation: "const creates a block-scoped binding that cannot be reassigned; let allows reassignment."
                }
            ]
        },
        'cs504-u3t5': {
            title: 'Advanced JS: JavaScript Objects & DOM Environments',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Objects & Document Object Model (DOM)</h3>
<p class="mb-4">The DOM represents an HTML document as a hierarchical node tree. JavaScript accesses and updates this tree in real time:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Selecting Elements:</strong> <code>document.getElementById('id')</code>, <code>document.querySelector('.class')</code>, <code>document.querySelectorAll('div')</code>.</li>
    <li><strong>Modifying Content & Styles:</strong> <code>element.textContent = "New Text"</code>, <code>element.classList.add('active')</code>.</li>
    <li><strong>Creating & Appending:</strong> <code>document.createElement('li')</code> and <code>parent.appendChild(node)</code>.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which modern DOM method returns the first element matching a specified CSS selector string?",
                    options: ["A) document.querySelector()", "B) document.findFirst()", "C) document.getElement()", "D) document.search()"],
                    answer: 0,
                    explanation: "document.querySelector() selects the first matching element using CSS selector syntax."
                }
            ]
        },
        'cs504-u3t6': {
            title: 'Manipulation using DOM, Form Validations & Event Handling',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Window[1. Window / Document] -->|Capturing Phase| Body[2. Body]
    Body -->|Capturing Phase| Form[3. Form Container]
    Form -->|Target Phase| Button[4. Clicked Target Button]
    Button -->|Bubbling Phase| Form
    Form -->|Bubbling Phase| Body
    Body -->|Bubbling Phase| Window
    style Button fill:#1e293b,stroke:#ef4444,color:#fff
    style Window fill:#1e293b,stroke:#3b82f6,color:#fff
    style Form fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Event-Driven Architecture & Validation</h3>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-blue-400">const</span> form = document.querySelector(<span class="text-green-300">'#loginForm'</span>);<br><br>
form.addEventListener(<span class="text-green-300">'submit'</span>, (event) =&gt; {<br>
&nbsp;&nbsp;<span class="text-blue-400">const</span> passwordInput = document.querySelector(<span class="text-green-300">'#password'</span>);<br>
&nbsp;&nbsp;<span class="text-blue-400">if</span> (passwordInput.value.length &lt; 8) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault(); <span class="text-gray-500">// Stop form submission</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;alert(<span class="text-red-400">'Password must be at least 8 characters long!'</span>);<br>
&nbsp;&nbsp;}<br>
});
</div>
<p class="text-sm text-gray-300"><strong>Event Bubbling:</strong> Events propagate up the DOM tree from target element to root, enabling <strong>Event Delegation</strong> where a single listener on a parent handles events for hundreds of child nodes.</p>
            `,
            quizzes: [
                {
                    question: "What does event.preventDefault() do inside an event handler for an HTML form submission?",
                    options: [
                        "A) Deletes the form elements.",
                        "B) Prevents the browser's default behavior (submitting the form and reloading the page).",
                        "C) Encrypts the password.",
                        "D) Logs out the user."
                    ],
                    answer: 1,
                    explanation: "event.preventDefault() stops the default browser action from triggering."
                }
            ]
        },
        'cs504-u3t7': {
            title: 'DHTML: Combining HTML, CSS and JavaScript',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Dynamic HTML (DHTML)</h3>
<p class="mb-4"><strong>DHTML</strong> is not a language; it is the synergistic combination of HTML (structure), CSS (presentation), and JavaScript (behavior) operating via the DOM to create animated, interactive, and responsive web experiences.</p>
            `,
            quizzes: [
                {
                    question: "What constitutes DHTML (Dynamic HTML)?",
                    options: [
                        "A) A new programming language from Microsoft.",
                        "B) The collective combination of HTML, CSS, and JavaScript manipulated via the DOM.",
                        "C) An XML database.",
                        "D) A hardware graphics card."
                    ],
                    answer: 1,
                    explanation: "DHTML describes the coordinated use of HTML, CSS, and JavaScript to build dynamic, interactive interfaces."
                }
            ]
        }
    },
    'cs504-u4': {
        'cs504-u4t1': {
            title: 'Introduction to XML, Uses, DTD and Schemas',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Extensible Markup Language (XML)</h3>
<p class="mb-4">XML is a W3C standard self-describing markup language designed to store and transport structured data across heterogeneous platforms:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h5 class="text-yellow-300 font-bold mb-1">DTD (Document Type Definition)</h5>
        <p class="text-xs text-gray-300">Legacy grammar defining allowed elements, order, and cardinality: <code>&lt;!ELEMENT note (to, from, heading, body)&gt;</code>. Lacks rich data typing.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h5 class="text-emerald-300 font-bold mb-1">XSD (XML Schema Definition)</h5>
        <p class="text-xs text-gray-300">Modern XML-based schema supporting namespaces, strict data types (integer, date, string), and complex constraints.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary advantage of XML Schema (XSD) over traditional DTDs?",
                    options: [
                        "A) XSD is written in Python.",
                        "B) XSD is itself written in XML syntax and supports rich data types (such as dates, decimals, and custom regex patterns).",
                        "C) DTD is too fast.",
                        "D) XSD only works on Linux."
                    ],
                    answer: 1,
                    explanation: "XSD is XML-based and offers strong data typing, unlike DTD."
                }
            ]
        },
        'cs504-u4t2': {
            title: 'Transforming XML using XSL and XSLT',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    XML[(XML Source Data)] --> Engine[XSLT Transformation Processor]
    XSL[XSL Stylesheet Template] --> Engine
    Engine --> Output[Output: Clean Responsive HTML / XHTML]
    style XML fill:#1e293b,stroke:#3b82f6,color:#fff
    style XSL fill:#1e293b,stroke:#f59e0b,color:#fff
    style Output fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">XSL & XSLT Transformations</h3>
<p class="mb-4"><strong>XSLT (Extensible Stylesheet Language Transformations)</strong> is a declarative, template-based language used to transform an XML document into other document formats (such as HTML, CSV, or another XML schema).</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-xs text-gray-300 mb-6 border border-gray-700">
&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;<br>
&nbsp;&nbsp;&lt;xsl:template match="/"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;html&gt;&lt;body&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Product Catalog&lt;/h2&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;xsl:for-each select="catalog/product"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;xsl:value-of select="title"/&gt; - &lt;xsl:value-of select="price"/&gt;&lt;/p&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/xsl:for-each&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;&lt;/html&gt;<br>
&nbsp;&nbsp;&lt;/xsl:template&gt;<br>
&lt;/xsl:stylesheet&gt;
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary function of XSLT in web technologies?",
                    options: [
                        "A) Managing server passwords.",
                        "B) Transforming an XML document into other representations, such as HTML or alternate XML formats.",
                        "C) Compiling Java code.",
                        "D) Defragmenting hard disks."
                    ],
                    answer: 1,
                    explanation: "XSLT transforms source XML documents into target formats like HTML or text."
                }
            ]
        },
        'cs504-u4t3': {
            title: 'Introduction & Basic Syntax of PHP, Decision & Looping',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Server-Side Scripting with PHP</h3>
<p class="mb-4"><strong>PHP (Hypertext Preprocessor)</strong> is an open-source, server-side scripting language executed on the web server (Apache/Nginx) before sending rendered HTML to the client:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">&lt;?php</span><br>
<span class="text-blue-400">$score</span> = 85;<br><br>
<span class="text-blue-400">if</span> (<span class="text-blue-400">$score</span> &gt;= 90) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-green-300">"Grade A"</span>;<br>
} <span class="text-blue-400">elseif</span> (<span class="text-blue-400">$score</span> &gt;= 75) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-green-300">"Grade B"</span>;<br>
} <span class="text-blue-400">else</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-green-300">"Pass"</span>;<br>
}<br><br>
<span class="text-blue-400">for</span> (<span class="text-blue-400">$i</span> = 1; <span class="text-blue-400">$i</span> &lt;= 5; <span class="text-blue-400">$i</span>++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-green-300">"Step $i &lt;br&gt;"</span>;<br>
}<br>
<span class="text-purple-400">?&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "With what character must all variables in PHP begin?",
                    options: ["A) @", "B) $", "C) #", "D) &"],
                    answer: 1,
                    explanation: "All variable identifiers in PHP start with a dollar sign ($)."
                }
            ]
        },
        'cs504-u4t4': {
            title: 'PHP & HTML Integration, Arrays & Functions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">PHP Arrays & Modular Functions</h3>
<p class="mb-4">PHP supports indexed, associative, and multidimensional arrays:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">&lt;?php</span><br>
<span class="text-gray-500">// Associative Array (Key-Value)</span><br>
<span class="text-blue-400">$user</span> = [<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"name"</span> =&gt; <span class="text-green-300">"Alice"</span>,<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"email"</span> =&gt; <span class="text-green-300">"alice@example.com"</span>,<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"role"</span> =&gt; <span class="text-green-300">"Admin"</span><br>
];<br><br>
<span class="text-blue-400">function</span> greet(<span class="text-blue-400">$person</span>) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">return</span> <span class="text-green-300">"Hello, "</span> . <span class="text-blue-400">$person</span>[<span class="text-green-300">'name'</span>] . <span class="text-green-300">"!"</span>;<br>
}<br><br>
<span class="text-blue-400">echo</span> greet(<span class="text-blue-400">$user</span>);<br>
<span class="text-purple-400">?&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "What operator is used for string concatenation in PHP?",
                    options: ["A) +", "B) . (dot)", "C) &", "D) :"],
                    answer: 1,
                    explanation: "PHP uses the dot (.) operator for string concatenation."
                }
            ]
        },
        'cs504-u4t5': {
            title: 'Browser Control, Detection, String & Form Processing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Superglobals & Form Processing</h3>
<p class="mb-4">PHP provides predefined superglobal arrays accessible from any scope:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><code>$_POST</code>: Collects form values sent via HTTP POST.</li>
    <li><code>$_GET</code>: Collects URL query string parameters.</li>
    <li><code>$_SERVER</code>: Header, path, and script location information (e.g. <code>$_SERVER['REQUEST_METHOD']</code>, <code>$_SERVER['HTTP_USER_AGENT']</code>).</li>
    <li><code>htmlspecialchars()</code>: Crucial sanitization converting <code>&lt;, &gt;, &amp;, "</code> to entities, preventing Cross-Site Scripting (XSS).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which PHP built-in function prevents Cross-Site Scripting (XSS) when printing user-submitted data into HTML?",
                    options: ["A) md5()", "B) htmlspecialchars()", "C) strlen()", "D) json_encode()"],
                    answer: 1,
                    explanation: "htmlspecialchars() escapes HTML special characters to prevent malicious script injection."
                }
            ]
        },
        'cs504-u4t6': {
            title: 'Files, Cookies, Sessions & OOP with PHP',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">State Management: Sessions, Cookies & OOP</h3>

<div class="space-y-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Cookies vs Sessions</h4>
        <p class="text-gray-300 mb-1"><strong>Cookie (Client-side):</strong> Small text files saved on client browser via <code>setcookie('name', 'val', time()+3600)</code>. Visible to user.</p>
        <p class="text-gray-300"><strong>Session (Server-side):</strong> Sensitive data stored securely on the server via <code>session_start()</code> and <code>$_SESSION['user_id'] = 42</code>. Client stores only a random session identifier cookie (PHPSESSID).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Where is PHP session data stored?",
                    options: [
                        "A) Entirely inside the client's browser cookies",
                        "B) On the web server, with only a session ID token stored on the client",
                        "C) On the DNS root server",
                        "D) In the HTML source code"
                    ],
                    answer: 1,
                    explanation: "Session variables are securely held on the server; the client only holds the session ID cookie."
                }
            ]
        }
    },
    'cs504-u5': {
        'cs504-u5t1': {
            title: 'Basic Commands with PHP Examples & Server Connection',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Client[Web Browser] -->|HTTP Request| Server[Apache / Nginx Web Server]
    Server -->|Pass .php script| Engine[Zend PHP Engine]
    Engine <-->|PDO / MySQLi Driver| DB[(MySQL Database)]
    Engine -->|Compiled HTML| Server
    Server -->|HTTP Response| Client
    style Server fill:#1e293b,stroke:#3b82f6,color:#fff
    style Engine fill:#1e293b,stroke:#f59e0b,color:#fff
    style DB fill:#1e293b,stroke:#10b981,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Best Practice Code: Secure PHP PDO Prepared Statements</h4>
    <p class="text-sm text-gray-300 mb-2">Always use parameterized queries with PDO to neutralize SQL Injection attacks in production:</p>
    <pre class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 overflow-x-auto border border-slate-800">
&lt;?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=university_db;charset=utf8mb4", "db_user", "secure_password", [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    // Secure query with parameterized placeholder
    $stmt = $pdo->prepare("SELECT id, name, email FROM students WHERE semester = :sem AND branch = :branch");
    $stmt->execute([
        ':sem' => 5,
        ':branch' => 'CSE'
    ]);
    $results = $stmt->fetchAll();
    
    foreach ($results as $row) {
        echo htmlspecialchars($row['name']) . "&lt;br&gt;";
    }
} catch (PDOException $e) {
    error_log($e->getMessage());
    echo "Database query could not be completed safely.";
}
?&gt;</pre>
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Connecting PHP to MySQL (PDO)</h3>
<p class="mb-4">Modern PHP uses <strong>PDO (PHP Data Objects)</strong> for secure, database-agnostic database connections with prepared statements:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">&lt;?php</span><br>
<span class="text-blue-400">$dsn</span> = <span class="text-green-300">"mysql:host=localhost;dbname=university;charset=utf8mb4"</span>;<br>
<span class="text-blue-400">$user</span> = <span class="text-green-300">"db_user"</span>;<br>
<span class="text-blue-400">$pass</span> = <span class="text-green-300">"secure_password"</span>;<br><br>
<span class="text-blue-400">try</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$pdo</span> = <span class="text-blue-400">new</span> PDO(<span class="text-blue-400">$dsn</span>, <span class="text-blue-400">$user</span>, <span class="text-blue-400">$pass</span>, [<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PDO::ATTR_ERRMODE =&gt; PDO::ERRMODE_EXCEPTION,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PDO::ATTR_DEFAULT_FETCH_MODE =&gt; PDO::FETCH_ASSOC<br>
&nbsp;&nbsp;&nbsp;&nbsp;]);<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-green-300">"Database connected successfully!"</span>;<br>
} <span class="text-blue-400">catch</span> (PDOException <span class="text-blue-400">$e</span>) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">die</span>(<span class="text-red-400">"Connection failed: "</span> . <span class="text-blue-400">$e</span>-&gt;getMessage());<br>
}<br>
<span class="text-purple-400">?&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "Why is PDO preferred over the legacy mysql_* extension in PHP?",
                    options: [
                        "A) Legacy mysql_* is deprecated/removed and does not support prepared statements against SQL injection, whereas PDO is secure and supports multiple database engines.",
                        "B) PDO only works on Windows.",
                        "C) Legacy mysql_* could not connect to databases.",
                        "D) PDO requires no password."
                    ],
                    answer: 0,
                    explanation: "PDO provides parameterized prepared statements that neutralize SQL injection vulnerabilities and supports multiple RDBMS engines."
                }
            ]
        },
        'cs504-u5t2': {
            title: 'Creating, Selecting, Listing & Deleting Databases',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Administration via SQL</h3>
<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-blue-400">CREATE DATABASE</span> college_db <span class="text-blue-400">CHARACTER SET</span> utf8mb4;<br>
<span class="text-blue-400">SHOW DATABASES</span>;<br>
<span class="text-blue-400">USE</span> college_db;<br>
<span class="text-blue-400">DROP DATABASE IF EXISTS</span> old_college_db;
</div>
            `,
            quizzes: [
                {
                    question: "Which SQL command selects a specific active database for subsequent queries in MySQL?",
                    options: ["A) OPEN database_name", "B) USE database_name", "C) SELECT database_name", "D) SWITCH database_name"],
                    answer: 1,
                    explanation: "The USE command selects the default active database in MySQL."
                }
            ]
        },
        'cs504-u5t3': {
            title: 'Creating Tables, Inserting Data, Altering Tables & Queries',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">CRUD Operations & Prepared Statements</h3>
<p class="mb-4">Always use parameterized prepared statements to prevent SQL Injection:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">&lt;?php</span><br>
<span class="text-gray-500">// Prepared INSERT statement</span><br>
<span class="text-blue-400">$stmt</span> = <span class="text-blue-400">$pdo</span>-&gt;prepare(<span class="text-green-300">"INSERT INTO students (name, email, gpa) VALUES (:name, :email, :gpa)"</span>);<br>
<span class="text-blue-400">$stmt</span>-&gt;execute([<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">':name'</span> =&gt; <span class="text-blue-400">$_POST</span>[<span class="text-green-300">'student_name'</span>],<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">':email'</span> =&gt; <span class="text-blue-400">$_POST</span>[<span class="text-green-300">'student_email'</span>],<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">':gpa'</span> =&gt; <span class="text-blue-400">$_POST</span>[<span class="text-green-300">'gpa'</span>]<br>
]);<br><br>
<span class="text-gray-500">// Querying and Fetching data</span><br>
<span class="text-blue-400">$stmt</span> = <span class="text-blue-400">$pdo</span>-&gt;query(<span class="text-green-300">"SELECT * FROM students ORDER BY gpa DESC"</span>);<br>
<span class="text-blue-400">$students</span> = <span class="text-blue-400">$stmt</span>-&gt;fetchAll();<br>
<span class="text-purple-400">?&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary security reason for using PDO prepared statements with parameter placeholders (:name)?",
                    options: [
                        "A) To save memory.",
                        "B) To completely prevent SQL injection by separating the query structure from untrusted user data.",
                        "C) To convert strings to uppercase.",
                        "D) To bypass database passwords."
                    ],
                    answer: 1,
                    explanation: "Prepared statements treat user input strictly as literal data rather than executable SQL code, preventing SQL injection."
                }
            ]
        },
        'cs504-u5t4': {
            title: 'Deleting Data & Tables with PHP',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Safe Deletion & Transactional Rollbacks</h3>
<p class="mb-4">Deleting database records safely using parameterized statements and transactions:</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">&lt;?php</span><br>
<span class="text-blue-400">$id</span> = <span class="text-blue-400">$_POST</span>[<span class="text-green-300">'id'</span>];<br><br>
<span class="text-blue-400">$pdo</span>-&gt;beginTransaction();<br>
<span class="text-blue-400">try</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$stmt</span> = <span class="text-blue-400">$pdo</span>-&gt;prepare(<span class="text-green-300">"DELETE FROM enrollments WHERE student_id = ?"</span>);<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$stmt</span>-&gt;execute([<span class="text-blue-400">$id</span>]);<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$stmt2</span> = <span class="text-blue-400">$pdo</span>-&gt;prepare(<span class="text-green-300">"DELETE FROM students WHERE id = ?"</span>);<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$stmt2</span>-&gt;execute([<span class="text-blue-400">$id</span>]);<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$pdo</span>-&gt;commit();<br>
} <span class="text-blue-400">catch</span> (Exception <span class="text-blue-400">$e</span>) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">$pdo</span>-&gt;rollBack();<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">echo</span> <span class="text-red-400">"Error deleting record: "</span> . <span class="text-blue-400">$e</span>-&gt;getMessage();<br>
}<br>
<span class="text-purple-400">?&gt;</span>
</div>
            `,
            quizzes: [
                {
                    question: "What does $pdo->rollBack() do if an error occurs during a multi-query transaction?",
                    options: [
                        "A) Deletes the whole database.",
                        "B) Reverts all changes made during the transaction back to the initial state, preserving database consistency.",
                        "C) Closes the browser.",
                        "D) Resends the form."
                    ],
                    answer: 1,
                    explanation: "rollBack() undoes all modifications performed since beginTransaction(), maintaining atomicity."
                }
            ]
        },
        'cs504-u5t5': {
            title: 'phpMyAdmin Usage, Database Administration & Debugging',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Database Administration with phpMyAdmin</h3>
<p class="mb-4"><strong>phpMyAdmin</strong> is an open-source, web-based graphical interface for administering MySQL and MariaDB databases:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Visual Schema Management:</strong> Create tables, define primary keys, AUTO_INCREMENT columns, and indexes with a single click.</li>
    <li><strong>Query Execution & Profiling:</strong> Execute custom SQL queries, view visual execution plans, and profile query bottlenecks.</li>
    <li><strong>Import & Export:</strong> Export databases to SQL dumps or CSV files for disaster recovery and migrations.</li>
    <li><strong>User Privilege Management:</strong> Visually configure database users, host restrictions, and grant granular privileges.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is phpMyAdmin primarily used for?",
                    options: [
                        "A) Compiling C++ programs.",
                        "B) Providing a web-based graphical interface to manage, query, and administer MySQL databases.",
                        "C) Editing photos.",
                        "D) Streaming video."
                    ],
                    answer: 1,
                    explanation: "phpMyAdmin is a widely used web UI for managing MySQL databases."
                }
            ]
        }
    }
});
