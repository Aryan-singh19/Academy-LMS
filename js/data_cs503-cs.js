window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs503cs-u1': {
        'cs503cs-u1t1': {
            title: 'Introduction to Cyber Crime & Challenges',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    R[1. Reconnaissance] --> W[2. Weaponization]
    W --> D[3. Delivery]
    D --> E[4. Exploitation]
    E --> I[5. Installation]
    I --> C[6. Command & Control]
    C --> A[7. Actions on Objectives]
    style R fill:#1e293b,stroke:#64748b,color:#fff
    style E fill:#1e293b,stroke:#ef4444,color:#fff
    style C fill:#1e293b,stroke:#f59e0b,color:#fff
    style A fill:#1e293b,stroke:#dc2626,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Introduction to Cybercrime</h3>
<p class="mb-4"><strong>Cybercrime</strong> refers to any unlawful act involving a computer, computing device, or computer network either as a tool, a target, or a repository of criminal evidence.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-md">
        <h4 class="text-red-400 font-bold mb-2">Unique Challenges of Cybercrime</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li><strong>Borderlessness & Jurisdictional Hurdles:</strong> A perpetrator in country A attacks a server in country B from an IP routed through country C.</li>
            <li><strong>Anonymity & Spoofing:</strong> The Internet was designed for open communication, not strict identity verification (TOR, VPNs, proxy chains).</li>
            <li><strong>Velocity & Scale:</strong> A physical bank robber can hit one branch; a cybercriminal can siphon funds from 100,000 accounts simultaneously within seconds.</li>
            <li><strong>Digital Evidence Fragility:</strong> RAM contents, temporary cache files, and volatile network packets can vanish upon system power-down.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500 shadow-md">
        <h4 class="text-blue-400 font-bold mb-2">Computer Roles in Cybercrime</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li><strong>As a Target:</strong> Attacks aiming to disrupt or compromise computer integrity (DDoS attacks, ransomware encrypting servers).</li>
            <li><strong>As a Weapon:</strong> Tools used to commit conventional crimes online (credit card fraud, digital extortion, online stalking).</li>
            <li><strong>As an Incidental Accessory:</strong> Digital records stored during offline crimes (chat records in murder investigations, narcotics ledgers).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why does cybercrime pose severe challenges for traditional law enforcement compared to physical street crime?",
                    options: [
                        "A) Computers are too heavy to seize.",
                        "B) Transnational jurisdiction, perpetrator anonymity, spoofing, and volatile digital evidence.",
                        "C) Laws only apply to paper documents.",
                        "D) Police cannot use laptops."
                    ],
                    answer: 1,
                    explanation: "Jurisdictional barriers across borders, strong encryption/anonymity, and the ease of wiping volatile evidence make cyber investigations uniquely difficult."
                }
            ]
        },
        'cs503cs-u1t2': {
            title: 'Classifications of Cybercrimes',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Taxonomy of Cybercrimes</h3>
<p class="mb-4">Cybercrimes are broadly classified based on the target of the criminal act:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-yellow-500">
        <h4 class="text-yellow-300 font-bold mb-2">Against Individuals</h4>
        <ul class="list-disc pl-4 text-xs text-gray-300 space-y-1">
            <li>Cyberstalking & Harassment</li>
            <li>Identity Theft & Impersonation</li>
            <li>Defamation & Slander</li>
            <li>Non-consensual media distribution & Phishing</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-purple-500">
        <h4 class="text-purple-300 font-bold mb-2">Against Property</h4>
        <ul class="list-disc pl-4 text-xs text-gray-300 space-y-1">
            <li>Unauthorized computer trespass (Hacking)</li>
            <li>Intellectual Property Theft & Software Piracy</li>
            <li>Ransomware & Extortion</li>
            <li>Salami attacks on financial balances</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-red-500">
        <h4 class="text-red-400 font-bold mb-2">Against Government / Society</h4>
        <ul class="list-disc pl-4 text-xs text-gray-300 space-y-1">
            <li>Cyber Terrorism & Critical Infrastructure Attacks (SCADA)</li>
            <li>State-Sponsored Cyber Warfare</li>
            <li>Unauthorized access to classified defense networks</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Attacking a nation's power grid or air traffic control system via malicious network intrusions falls under which classification of cybercrime?",
                    options: [
                        "A) Crime against Individuals",
                        "B) Crime against Property",
                        "C) Cyber Terrorism / Crime against Government and Society",
                        "D) Minor civil infraction"
                    ],
                    answer: 2,
                    explanation: "Targeting critical national infrastructure to intimidate a government or destabilize society constitutes cyber terrorism."
                }
            ]
        },
        'cs503cs-u1t3': {
            title: 'Email Spoofing & Spamming',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Email Spoofing & Spamming</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">Email Spoofing</h4>
        <p class="text-sm text-gray-300 mb-2">Forging the sender header in an email so it appears to originate from a legitimate, trusted entity (e.g. <code>security@yourbank.com</code>). Possible because the basic Simple Mail Transfer Protocol (SMTP, RFC 821) lacks native sender authentication.</p>
        <p class="text-xs text-cyan-300">Defenses: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">Email Spamming</h4>
        <p class="text-sm text-gray-300">Unsolicited Bulk Email (UBE) sent indiscriminately to millions of email addresses. Often weaponized to deliver malicious links, macro malware, or advance-fee scams (419 Nigerian scams), consuming enterprise bandwidth and storage.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why was email spoofing historically easy to perform on the internet?",
                    options: [
                        "A) Because email servers only operate on Windows.",
                        "B) Because the foundational SMTP protocol had no built-in sender authentication mechanism.",
                        "C) Because email does not use TCP/IP.",
                        "D) Because all emails are public."
                    ],
                    answer: 1,
                    explanation: "Original SMTP allowed sending clients to specify arbitrary 'From' addresses without verifying domain ownership."
                }
            ]
        },
        'cs503cs-u1t4': {
            title: 'Internet Time Theft',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Internet Time Theft</h3>
<p class="mb-4"><strong>Internet Time Theft</strong> occurs when an unauthorized user surreptitiously misappropriates another party’s paid internet allocation, bandwidth quota, or login credentials to access the internet without paying for it.</p>

<div class="bg-gray-800 p-5 rounded-xl border border-gray-700 mb-6 text-sm text-gray-300">
    <h5 class="text-yellow-300 font-bold mb-2">Historical Context & Modern Manifestations</h5>
    <p class="mb-2">In the dial-up era, attackers cracked ISP usernames and passwords to browse for free while the legitimate subscriber was billed per minute.</p>
    <p>In modern high-speed environments, this manifests as unauthorized Wi-Fi piggybacking (cracking WEP/WPA2 handshakes), tapping into enterprise VPNs, or abusing corporate proxies for private crypto-mining or torrenting.</p>
</div>
            `,
            quizzes: [
                {
                    question: "What constitutes Internet Time Theft?",
                    options: [
                        "A) Changing the system clock on a computer.",
                        "B) Misappropriating another subscriber's internet access credentials or bandwidth without authorization.",
                        "C) Forgetting to log off from email.",
                        "D) Downloading files after midnight."
                    ],
                    answer: 1,
                    explanation: "Time theft involves fraudulently using another person's or organization's paid internet access or connection time."
                }
            ]
        },
        'cs503cs-u1t5': {
            title: 'Salami Attack / Salami Technique',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Salami Technique (Penny Shaving)</h3>
<p class="mb-4">A <strong>Salami Attack</strong> is a cyber-financial fraud technique where the perpetrator extracts minuscule, unnoticeable amounts of money or data from a massive number of accounts. Like slicing a salami paper-thin slice by slice, no single slice is noticeable, but aggregated together it yields a fortune.</p>

<div class="bg-gray-900 p-5 rounded-xl border-l-4 border-emerald-500 mb-6 shadow-md text-sm text-gray-300">
    <h5 class="text-emerald-400 font-bold mb-2">Round-Off Fraud in Banking</h5>
    <p class="mb-2">When calculating fractional interest payments on savings accounts (e.g. $12.4586), financial software typically rounds down to two decimal places ($12.45). An insider programmer modifies the interest subroutine to divert the remaining 0.0086 fraction into their own private dummy account.</p>
    <p class="text-xs text-yellow-300">Across 10 million bank accounts every day, these microscopic fractions yield hundreds of thousands of dollars without triggering customer suspicion or standard threshold alarms.</p>
</div>
            `,
            quizzes: [
                {
                    question: "How does a Salami Attack operate in financial systems?",
                    options: [
                        "A) By stealing large sums of money in a single transaction.",
                        "B) By shaving minuscule, unnoticed amounts (such as rounding fractions) from thousands or millions of accounts into a target account.",
                        "C) By launching distributed denial-of-service on ATMs.",
                        "D) By encrypting the bank's database."
                    ],
                    answer: 1,
                    explanation: "The salami technique extracts negligible increments from numerous sources so that no single victim notices the loss."
                }
            ]
        }
    },
    'cs503cs-u2': {
        'cs503cs-u2t1': {
            title: 'Web Jacking & Online Frauds',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Web Jacking & Online Financial Frauds</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">Web Jacking</h4>
        <p class="text-sm text-gray-300">The forceful takeover or cloning of a website. Attackers compromise the DNS registration or web server credentials, redirecting legitimate visitors to an identical-looking fraudulent clone. Once there, victim credentials, session cookies, and credit card numbers are intercepted.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Online Financial Frauds</h4>
        <p class="text-sm text-gray-300">Includes fake e-commerce storefronts, investment Ponzi schemes disguised as crypto cloud mining, fake lottery notifications, and impersonation of tax/utility authorities.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is Web Jacking in cyber crime terminology?",
                    options: [
                        "A) Purchasing web hosting domains legally.",
                        "B) Taking unauthorized control of a website or redirecting visitors to a malicious counterfeit clone to harvest user data.",
                        "C) Writing HTML code without a license.",
                        "D) Increasing internet speed via cable."
                    ],
                    answer: 1,
                    explanation: "Web jacking involves seizing control of a site or redirecting traffic to a malicious cloned site."
                }
            ]
        },
        'cs503cs-u2t2': {
            title: 'Software Piracy & Computer Network Intrusions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Software Piracy & Unauthorized Intrusions</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-pink-300 font-bold mb-2">Software Piracy</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Unauthorized copying, distribution, or cracking of copyrighted software.</li>
            <li>Key generators (Keygens), license cracks, and torrent distribution.</li>
            <li>Violates intellectual property rights and often delivers bundled trojans.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-indigo-300 font-bold mb-2">Network Intrusions</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Unauthorized access gained across perimeter firewalls.</li>
            <li>Port scanning (Nmap) to discover vulnerable services.</li>
            <li>Exploitation of unpatched CVE vulnerabilities (e.g. Log4j, EternalBlue) leading to privilege escalation.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which tool is commonly used by network administrators and ethical hackers to identify open ports and services on a target network?",
                    options: ["A) Nmap", "B) Microsoft Word", "C) WinZip", "D) Notepad"],
                    answer: 0,
                    explanation: "Nmap is the de-facto standard network scanner for port scanning and service enumeration."
                }
            ]
        },
        'cs503cs-u2t3': {
            title: 'Password Sniffing & Identity Theft',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Password Sniffing & Identity Theft</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
        <h4 class="font-bold text-cyan-300">Packet Sniffing / Password Sniffing</h4>
        <p class="text-sm text-gray-300">Using network packet analyzers (Wireshark, tcpdump) on unencrypted shared media (open Wi-Fi networks, hub networks) or via ARP spoofing to capture cleartext credentials transmitted over legacy protocols (HTTP, Telnet, FTP).</p>
        <p class="text-xs text-yellow-300 mt-1">Mitigation: End-to-end transport layer security (HTTPS, SSH, SFTP) and Multi-Factor Authentication (MFA).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 class="font-bold text-purple-300">Identity Theft</h4>
        <p class="text-sm text-gray-300">The deliberate acquisition and fraudulent use of another person's personal identifying information (Social Security / Aadhaar numbers, date of birth, mother's maiden name, biometric scans) to obtain credit lines, loan disbursements, or file fraudulent tax refunds.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why should credentials never be transmitted over plain HTTP or Telnet?",
                    options: [
                        "A) They will consume too much memory.",
                        "B) They are sent in cleartext, making them easily interceptable by any packet sniffer on the route.",
                        "C) Telnet is too fast.",
                        "D) HTTP cannot transmit strings."
                    ],
                    answer: 1,
                    explanation: "Unencrypted protocols transmit passwords in cleartext, easily captured by network packet sniffers."
                }
            ]
        },
        'cs503cs-u2t4': {
            title: 'Cyber Terrorism & Virtual Crime',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Cyber Terrorism & Virtual Crimes</h3>
<p class="mb-4"><strong>Cyber Terrorism</strong> is the convergence of cyberspace and terrorism, involving premeditated, politically or ideologically motivated attacks against information networks, computer systems, and critical national infrastructure (CNI) intended to cause widespread destruction, physical violence, or panic.</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>SCADA / Industrial Control Attacks:</strong> Attacking programmable logic controllers (PLCs) in water purification plants, nuclear reactors (e.g. Stuxnet), and electrical distribution grids.</li>
    <li><strong>Virtual Asset Crime:</strong> Laundering illicit funds through decentralized virtual currencies, privacy coins (Monero), and NFT wash-trading.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which malware is widely recognized as the first cyber weapon specifically engineered to sabotage industrial SCADA systems (nuclear centrifuges)?",
                    options: ["A) ILOVEYOU", "B) Stuxnet", "C) Melissa", "D) Code Red"],
                    answer: 1,
                    explanation: "Stuxnet was the first known worm engineered to physically manipulate industrial SCADA PLCs."
                }
            ]
        },
        'cs503cs-u2t5': {
            title: 'Perception of Cyber Criminals: Hackers, Insurgents & Extremists',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
sequenceDiagram
    autonumber
    Victim->>Server: 1. Login with credentials
    Server-->>Victim: 2. Issues Session Cookie (SID=abc123xyz)
    Attacker->>Victim: 3. Steals cookie via XSS / Sniffing
    Attacker->>Server: 4. Replays SID=abc123xyz directly
    Server-->>Attacker: 5. Grants full authenticated access!
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Psychology & Profiles of Threat Actors</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-green-500">
        <h4 class="text-green-300 font-bold mb-2">Hackers & Script Kiddies</h4>
        <p class="text-xs text-gray-300 mb-2"><strong>White Hat:</strong> Ethical researchers identifying flaws to secure them.</p>
        <p class="text-xs text-gray-300 mb-2"><strong>Black Hat:</strong> Malicious actors driven by financial greed.</p>
        <p class="text-xs text-gray-300"><strong>Script Kiddie:</strong> Unskilled novices running downloaded exploit scripts.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-yellow-500">
        <h4 class="text-yellow-300 font-bold mb-2">Hacktivists</h4>
        <p class="text-xs text-gray-300">Politically or socially motivated groups (e.g. Anonymous) performing website defacements, data dumps, and DDoS attacks to promote a socio-political agenda.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-xl border-t-4 border-red-500">
        <h4 class="text-red-400 font-bold mb-2">Nation-State APTs</h4>
        <p class="text-xs text-gray-300">Advanced Persistent Threats funded by nation-states, operating stealthily over months/years for geopolitical espionage and intellectual property theft.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is an Advanced Persistent Threat (APT) in cyber threat intelligence?",
                    options: [
                        "A) An antivirus software update.",
                        "B) A sophisticated, well-funded adversary (often nation-state backed) that establishes continuous, stealthy access to high-value networks.",
                        "C) A teenager downloading torrents.",
                        "D) A hardware printer error."
                    ],
                    answer: 1,
                    explanation: "APTs are sophisticated, stealthy threat groups targeting specific strategic entities over sustained periods."
                }
            ]
        },
        'cs503cs-u2t6': {
            title: 'Web Server Hacking & Session Hijacking',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Web Server Exploits & Session Hijacking</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">Session Hijacking (Cookie Theft)</h4>
        <p class="text-sm text-gray-300">Attackers intercept or steal a valid user session ID token (via Cross-Site Scripting [XSS], man-in-the-middle sniffing, or session fixation), allowing them to impersonate the logged-in user without knowing their password.</p>
        <p class="text-xs text-yellow-300 mt-1">Defenses: Setting <code>HttpOnly</code> (prevents JS access) and <code>Secure</code> (HTTPS only) cookie flags, plus regular session token regeneration.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 class="font-bold text-teal-400">Common Web Server Vulnerabilities (OWASP Top 10)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>SQL Injection (SQLi):</strong> Injecting SQL fragments through untrusted user inputs.</li>
            <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious JavaScript executed in victim browsers.</li>
            <li><strong>Remote Code Execution (RCE):</strong> Exploiting deserialization or buffer flaws to execute arbitrary server commands.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What browser cookie attribute prevents JavaScript code from reading the session cookie, thus mitigating session theft via XSS?",
                    options: ["A) SameSite", "B) HttpOnly", "C) Domain", "D) Path"],
                    answer: 1,
                    explanation: "The HttpOnly flag blocks client-side scripts from reading document.cookie, thwarting session hijacking via XSS."
                }
            ]
        }
    },
    'cs503cs-u3': {
        'cs503cs-u3t1': {
            title: 'Concept of Cyber Crime and the IT Act 2000',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Complaint[Cyber Complaint Filed] --> Offence{Nature of Crime}
    Offence -- Civil Offence Sec 43 --> Adj[Adjudicating Officer: Up to Rs 5 Crore Damage Award]
    Offence -- Criminal Offence Sec 66 --> Court[Metropolitan / Judicial Magistrate: Imprisonment & Fine]
    Adj --> AppTribunal[Telecom Dispute / Cyber Appellate Tribunal]
    Court --> Sessions[Sessions Court]
    AppTribunal & Sessions --> HighCourt[High Court]
    style Offence fill:#1e293b,stroke:#f59e0b,color:#fff
    style Adj fill:#1e293b,stroke:#3b82f6,color:#fff
    style Court fill:#1e293b,stroke:#ef4444,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Information Technology Act, 2000 (India)</h3>
<p class="mb-4">Enacted on June 9, 2000 (based on the UNCITRAL Model Law on Electronic Commerce), the <strong>IT Act 2000</strong> provides legal recognition for electronic transactions, e-governance, digital signatures, and defines penal provisions for cyber violations.</p>

<div class="bg-gray-800 p-5 rounded-xl border border-gray-700 mb-6 text-sm text-gray-300">
    <h4 class="text-yellow-300 font-bold mb-2">Primary Objectives of the IT Act</h4>
    <ul class="list-disc pl-5 space-y-1">
        <li>Grant legal recognition to transactions carried out by electronic data interchange (EDI) and other means of electronic commerce.</li>
        <li>Confer legal validity to digital signatures for authentication.</li>
        <li>Facilitate electronic filing of documents with government agencies (E-Governance).</li>
        <li>Amend the Indian Penal Code (IPC), Indian Evidence Act 1872, and Bankers' Books Evidence Act 1891.</li>
    </ul>
</div>
            `,
            quizzes: [
                {
                    question: "On which United Nations model law is the Indian Information Technology Act 2000 primarily based?",
                    options: [
                        "A) UNCITRAL Model Law on Electronic Commerce (1996)",
                        "B) Geneva Convention",
                        "C) Kyoto Protocol",
                        "D) Universal Declaration of Human Rights"
                    ],
                    answer: 0,
                    explanation: "The IT Act 2000 was drafted following the UNCITRAL Model Law on Electronic Commerce adopted in 1996."
                }
            ]
        },
        'cs503cs-u3t2': {
            title: 'Hacking & Teenage Web Vandals',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Section 66: Computer-Related Offences & Hacking</h3>
<p class="mb-4">Under Section 66 of the amended IT Act 2000, hacking and computer tampering are cognizable criminal offences:</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 mb-6 shadow-md">
    <h4 class="text-red-400 font-bold mb-2">Legal Definition of Hacking (Section 66)</h4>
    <p class="text-sm text-gray-300 mb-3">If any person, dishonestly or fraudulently, does any act referred to in Section 43 (unauthorized downloading, copying, introducing virus, causing denial of service, damaging data), he shall be punishable with:</p>
    <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm">
        Imprisonment up to 3 years OR fine up to ₹5,00,000 (5 Lakh Rupees), or both.
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the maximum imprisonment prescribed under Section 66 of the Information Technology Act for hacking/computer-related offences?",
                    options: ["A) 1 year", "B) 3 years", "C) 10 years", "D) Life imprisonment"],
                    answer: 1,
                    explanation: "Section 66 prescribes imprisonment for a term which may extend up to three years, or a fine up to five lakh rupees, or both."
                }
            ]
        },
        'cs503cs-u3t3': {
            title: 'Cyber Fraud, Cheating, Defamation, Harassment & Email Abuse',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Key Sections of the IT Act (2008 Amendments)</h3>

<div class="space-y-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Section 66C: Identity Theft</h4>
        <p class="text-gray-300">Punishes fraudulently using the electronic signature, password, or any other unique identification feature of another person. Up to 3 years imprisonment and fine.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
        <h4 class="font-bold text-cyan-300">Section 66D: Cheating by Personation Using Computer Resource</h4>
        <p class="text-gray-300">Punishes cheating by impersonating someone online (e.g. phishing, fake job interviews, fake customer care handles). Up to 3 years imprisonment.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-pink-500">
        <h4 class="font-bold text-pink-300">Section 66E: Violation of Privacy</h4>
        <p class="text-gray-300">Intentionally capturing, publishing, or transmitting images of a private area of any person without consent. Up to 3 years imprisonment.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">Section 67: Publishing Obscene Material</h4>
        <p class="text-gray-300">Transmitting lascivious or sexually explicit material electronically. First conviction up to 3 years, second conviction up to 5 years.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which section of the Information Technology Act penalizes cheating by impersonation using a computer resource (such as phishing scams)?",
                    options: ["A) Section 43", "B) Section 66D", "C) Section 72", "D) Section 85"],
                    answer: 1,
                    explanation: "Section 66D penalizes cheating by personation through computer resources with up to three years imprisonment."
                }
            ]
        },
        'cs503cs-u3t4': {
            title: 'Other IT Act Offences, Monetary Penalties & Jurisdiction',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Civil Penalties, Adjudication & Extraterritorial Jurisdiction</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-indigo-500">
        <h4 class="text-indigo-300 font-bold mb-2">Section 43: Civil Penalties</h4>
        <p class="text-xs text-gray-300">Imposes civil compensation payable to the victim for unauthorized access, downloading, disruption, virus injection, or data destruction (handled by the Adjudicating Officer).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-teal-500">
        <h4 class="text-teal-300 font-bold mb-2">Section 75: Extraterritorial Jurisdiction</h4>
        <p class="text-xs text-gray-300">The IT Act applies to <strong>any offence committed outside of India</strong> by any person, irrespective of nationality, if the act involves a computer, computer system, or network <strong>located in India</strong>!</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Under Section 75 of the IT Act, does the Act apply to a foreign national who hacks an Indian server from abroad?",
                    options: [
                        "A) No, Indian law only applies to Indian citizens.",
                        "B) Yes, it applies to any person irrespective of nationality if the target computer system or network is located in India.",
                        "C) Only if the hacker visits India within 30 days.",
                        "D) Only for physical servers in New Delhi."
                    ],
                    answer: 1,
                    explanation: "Section 75 provides extraterritorial jurisdiction over any individual globally if the affected computer resource is located in India."
                }
            ]
        },
        'cs503cs-u3t5': {
            title: 'Nature of Criminality & Strategies to Tackle Cyber Crime',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Institutional Framework & National Strategies</h3>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>CERT-In (Indian Computer Emergency Response Team):</strong> National nodal agency under Section 70B for cybersecurity incident response, vulnerability coordination, and issuing mandatory incident reporting guidelines.</li>
    <li><strong>NCIIPC (National Critical Information Infrastructure Protection Centre):</strong> Designated under Section 70 to protect critical infrastructure across power, defense, banking, and telecom.</li>
    <li><strong>National Cyber Crime Reporting Portal (cybercrime.gov.in):</strong> Citizen-facing portal for reporting financial frauds and crimes with immediate coordination with banks for freezing illicit fund flows (Helpline 1930).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which Indian organization acts as the national nodal agency for monitoring cyber security incidents and issuing security alerts under the IT Act?",
                    options: ["A) ISRO", "B) CERT-In", "C) TRAI", "D) RBI"],
                    answer: 1,
                    explanation: "CERT-In (Indian Computer Emergency Response Team) is the designated statutory body for cybersecurity incident response."
                }
            ]
        }
    },
    'cs503cs-u4': {
        'cs503cs-u4t1': {
            title: 'Indian Evidence Act 1872 vs IT Act 2000',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Digital Evidence & The Indian Evidence Act</h3>
<p class="mb-4">Prior to the IT Act 2000, the Indian Evidence Act of 1872 recognized only physical paper documents as primary or secondary documentary evidence. The Second Schedule of the IT Act fundamentally amended the Evidence Act to incorporate electronic records.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 mb-6 shadow-md text-sm text-gray-300">
    <h4 class="text-yellow-300 font-bold mb-2">Section 65A & 65B Overview</h4>
    <p class="mb-2"><strong>Section 65A:</strong> Contents of electronic records may be proved in accordance with the special provisions of Section 65B.</p>
    <p><strong>Section 65B:</strong> Establishes a specialized code for the admissibility of electronic evidence (computer printouts, optical disks, hard disk dumps, call data records) without needing to produce the original server in the courtroom.</p>
</div>
            `,
            quizzes: [
                {
                    question: "Which section of the Indian Evidence Act governs the admissibility of electronic records in a court of law?",
                    options: ["A) Section 45", "B) Section 65B", "C) Section 100", "D) Section 12"],
                    answer: 1,
                    explanation: "Section 65B of the Indian Evidence Act lays down the statutory conditions and certification required for electronic records to be admissible."
                }
            ]
        },
        'cs503cs-u4t2': {
            title: 'Status, Proof & Management of Electronic Records as Evidence',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Electronic Records as Documentary Evidence</h3>
<p class="mb-4">Under Section 2(t) of the IT Act, an <strong>electronic record</strong> means data, record, image, sound, or generated message sent, received, or stored electronically or in optical/magnetic media.</p>

<h4 class="text-lg font-bold text-teal-300 mb-2">Digital Forensics Evidence Management Lifecycle</h4>
<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-300 mb-6 bg-gray-800 p-4 rounded-lg">
    <li><strong>Identification:</strong> Identifying physical and cloud sources of evidence.</li>
    <li><strong>Seizure & Preservation:</strong> Placing mobile devices in Faraday bags, write-blockers on disks.</li>
    <li><strong>Bit-Stream Imaging:</strong> Creating an exact forensic clone (raw dd / E01) without modifying source drive metadata.</li>
    <li><strong>Cryptographic Hashing:</strong> Generating MD5 / SHA-256 hashes to establish evidence integrity.</li>
    <li><strong>Chain of Custody:</strong> Chronological documentation of who possessed and handled the evidence.</li>
</ol>
            `,
            quizzes: [
                {
                    question: "Why do digital forensics investigators use hardware write-blockers when seizing storage media?",
                    options: [
                        "A) To speed up file downloads.",
                        "B) To prevent any accidental write, modification, or timestamp change on the original physical evidence during imaging.",
                        "C) To erase passwords.",
                        "D) To encrypt files."
                    ],
                    answer: 1,
                    explanation: "Write-blockers physically or logically prevent any data modification on the source drive, preserving pristine evidentiary integrity."
                }
            ]
        },
        'cs503cs-u4t3': {
            title: 'Relevancy, Admissibility & Probative Value of E-Evidence',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Section 65B Certification & Landmark Rulings</h3>
<p class="mb-4">In the landmark ruling <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (Supreme Court, 2020)</em>, the Supreme Court of India settled the mandatory requirement of Section 65B:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">Mandatory Section 65B(4) Certificate</h4>
        <p class="text-sm text-gray-300">Production of a signed certificate under Section 65B(4) is an <strong>absolute condition precedent</strong> to the admissibility of secondary electronic records (CDs, printouts, USB drives, CCTV footage). Without this certificate, electronic secondary evidence is inadmissible!</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h4 class="font-bold text-green-400">Four Statutory Conditions of Section 65B(2)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>The computer output was produced during the period over which the computer was used regularly to store or process information.</li>
            <li>Information of the kind was regularly fed into the computer in the ordinary course of activities.</li>
            <li>Throughout the material part of the period, the computer was operating properly.</li>
            <li>The computer output reproduces or is derived from information fed into the computer in the ordinary course.</li>
        </ul>
    </div>
</div>
            

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: RSA Public-Key Cryptosystem</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given:</strong> Prime numbers <code>p = 7</code>, <code>q = 11</code>, and public exponent <code>e = 13</code>. Encrypt message <code>M = 9</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Compute Modulus: n = p &times; q = 7 &times; 11 = 77</div>
        <div>2. Compute Euler Totient: &phi;(n) = (p - 1)(q - 1) = 6 &times; 10 = 60</div>
        <div>3. Find Private Key d such that: (d &times; e) &equiv; 1 (mod &phi;(n))</div>
        <div class="text-cyan-300">   (d &times; 13) &equiv; 1 (mod 60)</div>
        <div class="text-cyan-300">   Testing values: 13 &times; 37 = 481 = (8 &times; 60) + 1. Hence, d = 37.</div>
        <div>4. Public Key: {e=13, n=77} | Private Key: {d=37, n=77}</div>
        <div>5. Encryption of M = 9:</div>
        <div class="text-yellow-300 font-bold">   C = M^e mod n = 9^13 mod 77 = 4</div>
        <div class="text-slate-400 mt-1">// Decryption check: M = C^d mod n = 4^37 mod 77 = 9 (Original Message restored!)</div>
    </div>
</div>
`,
            quizzes: [
                {
                    question: "According to the Supreme Court ruling in Arjun Panditrao Khotkar (2020), is a Section 65B certificate mandatory for secondary electronic evidence?",
                    options: [
                        "A) No, it is purely optional.",
                        "B) Yes, it is an absolute mandatory condition precedent for secondary electronic records to be admitted in evidence.",
                        "C) Only for traffic tickets.",
                        "D) Only in civil cases."
                    ],
                    answer: 1,
                    explanation: "The Supreme Court confirmed that a Section 65B(4) certificate is an indispensable requirement for secondary electronic evidence."
                }
            ]
        },
        'cs503cs-u4t4': {
            title: 'Proving Digital Signatures',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    subgraph Signing [Digital Signing: Sender Side]
        Doc1[Plaintext Contract] -->|SHA-256| Hash1[Computed Hash Value]
        Hash1 -->|Sender Private Key| Sig[Digital Signature Block]
    end
    subgraph Verifying [Verification: Receiver Side]
        Sig -->|Sender Public Key| DecHash[Decrypted Original Hash]
        RecDoc[Received Contract] -->|SHA-256| RecHash[Newly Computed Hash]
        DecHash & RecHash -->|Integrity Comparison| Comp{Match?}
        Comp -- Identical --> Valid[Authentic & Legally Binding]
        Comp -- Mismatch --> Alert[Tampered or Forged: Rejected]
    end
    style Sig fill:#1e293b,stroke:#3b82f6,color:#fff
    style Valid fill:#1e293b,stroke:#10b981,color:#fff
    style Alert fill:#1e293b,stroke:#ef4444,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Indian Evidence Act Section 65B Mandatory Certificate Checklist</h4>
    <p class="text-sm text-gray-300 mb-2">Under the landmark Supreme Court ruling in <em>Anvar P.V. vs P.K. Basheer (2014)</em>, secondary electronic records (printouts, CDs, hard disk images) are strictly inadmissible without a 65B certificate stating:</p>
    <ul class="list-disc pl-5 text-xs text-slate-300 space-y-1">
        <li>The computer was used regularly to store or process information during the period.</li>
        <li>Information of that kind was regularly supplied into the device in the ordinary course of activities.</li>
        <li>The computer was operating properly throughout the material period (or brief outages did not affect accuracy).</li>
        <li>The reproduction is a true copy produced by the computer in the ordinary course.</li>
    </ul>
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Digital Signatures & Asymmetric Cryptography</h3>
<p class="mb-4">Digital signatures provide <strong>Authentication, Non-repudiation, and Integrity</strong> using public-key cryptography (RSA):</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-purple-500">
        <h4 class="text-purple-300 font-bold mb-2">Signing Process (Signer)</h4>
        <p class="text-xs text-gray-300 mb-1">1. Message hash is computed: <code>H = SHA-256(Document)</code>.</p>
        <p class="text-xs text-gray-300">2. Hash is encrypted using signer's <strong>Private Key</strong>: <code>Signature = Encrypt(H, PrivateKey)</code>.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-teal-500">
        <h4 class="text-teal-300 font-bold mb-2">Verification Process (Recipient / Court)</h4>
        <p class="text-xs text-gray-300 mb-1">1. Signature is decrypted using signer's <strong>Public Key</strong>: <code>H' = Decrypt(Signature, PublicKey)</code>.</p>
        <p class="text-xs text-gray-300">2. If <code>H' == SHA-256(Document)</code> &rarr; Document is authentic and unaltered!</p>
    </div>
</div>
<p class="text-sm text-gray-300">Public key certificates are issued by licensed <strong>Certifying Authorities (CA)</strong> supervised by the Controller of Certifying Authorities (CCA) under Section 17 of the IT Act.</p>
            `,
            quizzes: [
                {
                    question: "Which cryptographic key is used by the sender to generate a Digital Signature on a document?",
                    options: ["A) Sender's Public Key", "B) Sender's Private Key", "C) Recipient's Public Key", "D) Symmetric Session Key"],
                    answer: 1,
                    explanation: "A digital signature is created by encrypting the document's cryptographic hash with the sender's Private Key."
                }
            ]
        },
        'cs503cs-u4t5': {
            title: 'Proof of Electronic Agreements & Electronic Messages',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Electronic Contracts & Presumptions</h3>
<p class="mb-4">Section 10A of the IT Act gives explicit legal validity to contracts formed through electronic means (clickwrap, browsewrap, and shrinkwrap agreements).</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-400">Statutory Legal Presumptions (Indian Evidence Act)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Section 85A:</strong> Presumption as to electronic agreements signed by digital signatures.</li>
            <li><strong>Section 85B:</strong> Presumption that a secure electronic record has not been altered since the specific point in time.</li>
            <li><strong>Section 88A:</strong> Presumption that an electronic message sent corresponds to the message received by the email server, but <em>no presumption as to the person by whom such message was sent</em> (authentication must still be proved).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Does Section 88A of the Evidence Act presume the identity of the person who sent an electronic message?",
                    options: [
                        "A) Yes, sender identity is always presumed true.",
                        "B) No, the court shall not make any presumption as to the person by whom the electronic message was actually sent.",
                        "C) Only for verified WhatsApp messages.",
                        "D) Only if sent from a government email."
                    ],
                    answer: 1,
                    explanation: "Section 88A explicitly clarifies that the court presumes the content delivered matches what was dispatched, but makes NO presumption about who actually sent it."
                }
            ]
        }
    },
    'cs503cs-u5': {
        'cs503cs-u5t1': {
            title: 'Proxy Servers & Anonymizers',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Proxy Servers, VPNs & Anonymizers</h3>
<p class="mb-4">Attackers and privacy advocates use intermediate routing proxies to mask geographic location and origin IP addresses:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-cyan-300 font-bold mb-2">Proxy Servers</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Forward Proxy:</strong> Acts on behalf of clients, caching requests and filtering outbound access.</li>
            <li><strong>Reverse Proxy:</strong> Sits in front of web servers for load balancing, SSL termination, and DDoS protection (e.g. Cloudflare, NGINX).</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-purple-300 font-bold mb-2">The Onion Router (Tor)</h5>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Routes traffic through a multi-hop decentralized circuit (Guard &rarr; Middle &rarr; Exit node).</li>
            <li>Each hop peels away one layer of encryption (like an onion), so no single node knows both source and destination.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "How does the Tor network achieve anonymization for web traffic?",
                    options: [
                        "A) By disabling the user's internet cable.",
                        "B) By routing packets through three encrypted decentralized relays (Guard, Middle, Exit), peeling one layer of encryption at each hop.",
                        "C) By deleting the victim's hard drive.",
                        "D) By using plain HTTP."
                    ],
                    answer: 1,
                    explanation: "Tor uses multi-layered onion routing across volunteer relays so that no single node knows both the origin and destination."
                }
            ]
        },
        'cs503cs-u5t2': {
            title: 'Password Cracking Tools & Methods',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Password Cracking Methodologies</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Cracking Techniques</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Brute Force:</strong> Systematically trying every permutation of characters (A-Z, 0-9, symbols). Computationally intensive for long passphrases.</li>
            <li><strong>Dictionary Attack:</strong> Testing thousands of known dictionary words and leaked credential lists (e.g. <code>rockyou.txt</code>).</li>
            <li><strong>Rainbow Tables:</strong> Precomputed lookup tables of cryptographic hashes, trading memory storage for instant crack time. Neutralized by <strong>Salted Hashes</strong>.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-300">Industry Password Auditing Tools</h4>
        <p class="text-sm text-gray-300"><strong>Hashcat</strong> (GPU-accelerated hash cracker) and <strong>John the Ripper</strong> (versatile CPU/GPU password auditing tool).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What cryptographic technique defeats precomputed Rainbow Table password attacks?",
                    options: [
                        "A) Using DES encryption.",
                        "B) Salting (appending a random unique string to each password before hashing).",
                        "C) Disabling the monitor.",
                        "D) Writing passwords on sticky notes."
                    ],
                    answer: 1,
                    explanation: "Cryptographic salting makes each password hash unique, rendering precomputed rainbow tables completely ineffective."
                }
            ]
        },
        'cs503cs-u5t3': {
            title: 'Keyloggers, Spyware, Viruses, Worms, Trojans & Backdoors',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Malware Categories & Characteristics</h3>

<div class="overflow-x-auto mb-6">
    <table class="w-full text-left bg-gray-900 border border-gray-700 rounded-lg text-sm">
        <thead class="bg-gray-800 text-yellow-300">
            <tr>
                <th class="p-3">Malware Type</th>
                <th class="p-3">Propagation Method</th>
                <th class="p-3">Primary Malicious Behavior</th>
            </tr>
        </thead>
        <tbody class="text-gray-300 divide-y divide-gray-800">
            <tr>
                <td class="p-3 font-bold text-red-400">Virus</td>
                <td class="p-3">Attaches to host executable; requires human execution</td>
                <td class="p-3">Corrupts files, consumes disk space, damages OS</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-orange-400">Worm</td>
                <td class="p-3">Self-replicating across networks without human action</td>
                <td class="p-3">Saturates network bandwidth, infects vulnerable open ports</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-amber-400">Trojan Horse</td>
                <td class="p-3">Disguised as useful software (e.g. game, utility)</td>
                <td class="p-3">Opens covert backdoors, drops secondary payloads</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-teal-400">Keylogger</td>
                <td class="p-3">Hardware dongle or kernel driver hook</td>
                <td class="p-3">Silently logs every physical keystroke to capture credentials</td>
            </tr>
            <tr>
                <td class="p-3 font-bold text-purple-400">Backdoor / RAT</td>
                <td class="p-3">Installed via phishing or drive-by download</td>
                <td class="p-3">Provides complete remote command-and-control access</td>
            </tr>
        </tbody>
    </table>
</div>
            `,
            quizzes: [
                {
                    question: "What is the key difference between a computer Virus and a computer Worm?",
                    options: [
                        "A) Viruses are written in Python; worms are written in C.",
                        "B) A virus requires an infected host file and user execution to spread, whereas a worm is autonomous and self-propagates across networks without human interaction.",
                        "C) Worms only attack Macs.",
                        "D) Viruses do not harm files."
                    ],
                    answer: 1,
                    explanation: "Worms are self-propagating and spread across networks independently without requiring human action or host file attachment."
                }
            ]
        },
        'cs503cs-u5t4': {
            title: 'DoS and DDoS Attacks, Buffer Overflow',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Master[Attacker Command & Control C2] --> B1[Bot Zombie 1] & B2[Bot Zombie 2] & B3[Bot Zombie 3] & B4[Bot Zombie 4]
    B1 & B2 & B3 & B4 -->|Volumetric SYN/UDP Flood| Victim[(Target Web Server: Crashed!)]
    style Master fill:#1e293b,stroke:#ef4444,color:#fff
    style Victim fill:#1e293b,stroke:#dc2626,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Denial of Service & Buffer Overflow Attacks</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-rose-500">
        <h4 class="text-rose-400 font-bold mb-2">DDoS (Distributed Denial of Service)</h4>
        <p class="text-xs text-gray-300 mb-2">Flooding a target server with massive traffic from thousands of compromised IoT botnets (Mirai), exhausting bandwidth or application resources:</p>
        <ul class="list-disc pl-4 text-xs text-gray-300 space-y-1">
            <li><strong>SYN Flood:</strong> Exploits TCP 3-way handshake by leaving half-open connections.</li>
            <li><strong>NTP/DNS Amplification:</strong> Uses UDP reflection to multiply attack volume 50x.</li>
            <li><strong>HTTP Flood:</strong> Layer 7 GET/POST requests targeting database queries.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="text-amber-400 font-bold mb-2">Buffer Overflow (Memory Vulnerability)</h4>
        <p class="text-xs text-gray-300 mb-2">Occurs in low-level languages (C/C++) when data written to a buffer exceeds allocated memory capacity, overwriting adjacent stack memory, specifically the <strong>Instruction Pointer (EIP/RIP)</strong>, diverting execution flow to malicious shellcode.</p>
        <p class="text-xs text-cyan-300">Mitigations: ASLR (Address Space Layout Randomization) and Stack Canaries.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What does an attacker overwrite during a stack-based Buffer Overflow exploit to divert the processor's execution flow to shellcode?",
                    options: [
                        "A) The system power button",
                        "B) The Return Address / Instruction Pointer (EIP/RIP) stored on the call stack",
                        "C) The CSS stylesheet",
                        "D) The network interface MAC address"
                    ],
                    answer: 1,
                    explanation: "Overwriting the return address allows an attacker to hijack the instruction pointer to execute injected shellcode."
                }
            ]
        },
        'cs503cs-u5t5': {
            title: 'Attack on Wireless Networks',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Wireless Security Attacks (802.11)</h3>
<p class="mb-4">Wireless signals propagate through open air, making physical proximity the only boundary for attack:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>WEP Cracking:</strong> The legacy WEP protocol uses RC4 with weak 24-bit Initialization Vectors (IVs), crackable in under 60 seconds (Aircrack-ng).</li>
    <li><strong>WPA/WPA2 4-Way Handshake Capture:</strong> Sending 802.11 Deauthentication packets to force a client to reconnect, capturing the 4-way handshake for offline dictionary cracking.</li>
    <li><strong>Evil Twin / Rogue Access Point:</strong> Setting up an access point broadcasting the identical SSID of a legitimate café or airport network to intercept victim traffic via DNS spoofing.</li>
    <li><strong>WPS PIN Brute Force (Reaver):</strong> Exploiting the design flaw in Wi-Fi Protected Setup PIN validation.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is an 'Evil Twin' wireless attack?",
                    options: [
                        "A) Buying two identical routers.",
                        "B) A rogue access point broadcasting the same SSID as a legitimate trusted network to trick victims into connecting.",
                        "C) Splitting a fiber optic cable.",
                        "D) A microwave interfering with 2.4 GHz signals."
                    ],
                    answer: 1,
                    explanation: "An Evil Twin mimics a legitimate Wi-Fi network's SSID to eavesdrop on connected victims."
                }
            ]
        },
        'cs503cs-u5t6': {
            title: 'Phishing: Methods & Advanced Phishing Techniques',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Phishing Spectrum & Social Engineering</h3>
<p class="mb-4">Phishing exploits the human element—the weakest link in information security:</p>

<div class="space-y-4 mb-6 text-sm">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 class="font-bold text-blue-300">1. Spear Phishing & Whaling</h4>
        <p class="text-gray-300"><strong>Spear Phishing:</strong> Highly customized, researched attacks targeting specific employees using personal reconnaissance.</p>
        <p class="text-gray-300 mt-1"><strong>Whaling:</strong> Targeting C-level executives (CEO/CFO) or high-net-worth individuals for large wire fraud (Business Email Compromise - BEC).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">2. Vishing & Smishing</h4>
        <p class="text-gray-300"><strong>Smishing:</strong> Phishing via SMS text messages (e.g. fake courier parcel delivery links, bank KYC update alerts).</p>
        <p class="text-gray-300 mt-1"><strong>Vishing:</strong> Voice phishing calls impersonating police, tax agents, or tech support, often enhanced by AI voice cloning.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">3. Modern Adversary-in-the-Middle (AitM) Phishing</h4>
        <p class="text-gray-300">Using reverse proxy frameworks (e.g. Evilginx2) that sit between victim and real login portal (e.g. Microsoft 365), intercepting login credentials AND real-time MFA session cookies, completely bypassing traditional 2FA!</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is 'Whaling' in social engineering cyber attacks?",
                    options: [
                        "A) Overclocking marine computers.",
                        "B) A targeted spear-phishing attack directed specifically at high-profile executives, CEOs, or board members.",
                        "C) Spamming millions of random emails.",
                        "D) Encrypting water sensors."
                    ],
                    answer: 1,
                    explanation: "Whaling specifically targets high-value senior executives (the 'big fish') to authorize high-value fund transfers or steal corporate secrets."
                }
            ]
        }
    }
});
