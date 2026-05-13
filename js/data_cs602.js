window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs602-u1': {
        'cn-u1t1': {
            title: 'The OSI Model & TCP/IP Suite',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The 7-Layer Dip of the Internet</h3>
<p class="mb-4">Imagine trying to send a letter, but instead of just dropping it in a mailbox, you have to translate it into binary, chop it into a million pieces, shoot it through a glass tube using lasers across the ocean, and then magically reassemble it in the correct order in a fraction of a second. This is Computer Networks.</p>

<p class="mb-4">To manage this insane complexity, the industry created the <strong>OSI Model</strong>—a conceptual framework that breaks networking down into 7 distinct layers. When you send an email, it starts at Layer 7 on your computer and travels *down* the layers, goes across the physical wire, and then travels *up* the 7 layers on the receiving computer.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Layer</th>
            <th class="p-3">Name</th>
            <th class="p-3">What it handles</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-red-400">7</td><td class="p-3 font-bold text-red-400">Application</td><td class="p-3">HTTP, DNS, SMTP. The actual apps you use (Chrome, Outlook).</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 text-orange-400">6</td><td class="p-3 text-orange-400">Presentation</td><td class="p-3">Data formatting, Encryption (SSL/TLS), JPEG/ASCII.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 text-yellow-400">5</td><td class="p-3 text-yellow-400">Session</td><td class="p-3">Establishing, maintaining, and terminating connections.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-green-400">4</td><td class="p-3 font-bold text-green-400">Transport</td><td class="p-3">TCP/UDP. Port numbers. Ensures reliable delivery.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-blue-400">3</td><td class="p-3 font-bold text-blue-400">Network</td><td class="p-3">IP Addresses. Routers. Finding the best path across the globe.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-indigo-400">2</td><td class="p-3 font-bold text-indigo-400">Data Link</td><td class="p-3">MAC Addresses. Switches. Moving frames across a local network.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-purple-400">1</td><td class="p-3 font-bold text-purple-400">Physical</td><td class="p-3">Cables, Fiber Optics, Radio waves (Wi-Fi). 1s and 0s.</td></tr>
    </tbody>
</table>

<div class="bg-gray-900 p-4 border border-gray-700 rounded text-sm text-gray-400 shadow-inner">
    <em>Mnemonic to remember the layers (bottom to top):</em> Please Do Not Throw Sausage Pizza Away.
</div>
            `,
            quizzes: [
                {
                    question: "Which layer of the OSI model is responsible for logical addressing (IP addresses) and routing packets across multiple networks?",
                    options: [
                        "A) Layer 2: Data Link",
                        "B) Layer 3: Network",
                        "C) Layer 4: Transport",
                        "D) Layer 7: Application"
                    ],
                    answer: 1,
                    explanation: "Layer 3 (Network) handles IP addresses and routers. Think of it as the postal service determining which highway the mail truck should take to get to another city."
                }
            ]
        },
        'cn-u1t2': {
            title: 'Physical Media & Data Link Layer',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Wires, Lasers, and MAC Addresses</h3>
<p class="mb-4">Before data can fly across the world, it must literally be converted into physical energy.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-indigo-500 shadow-md">
    <li><strong>Layer 1 (Physical):</strong> This is the hardware. Ethernet cables convert 1s and 0s into electrical voltage pulses. Fiber optic cables convert them into flashes of laser light (which bounce inside glass tubes under the ocean). Wi-Fi converts them into radio waves.</li>
    <li><strong>Layer 2 (Data Link):</strong> Once you have a physical connection, how do you talk to the specific computer next to you without everyone else listening? <strong>MAC Addresses</strong>. Every network card on Earth has a unique, hardcoded serial number. Switches use these MAC addresses to direct traffic within a local network (LAN).</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">CSMA/CD: How Computers Stop Yelling</h3>
<p class="mb-4 text-gray-300 text-sm">If two computers on the same physical wire try to talk at the exact same millisecond, their electrical signals crash into each other and become garbage. This is called a <strong>Collision</strong>.</p>
<p class="mb-4 text-gray-300 text-sm">Early Ethernet solved this using CSMA/CD. Think of it like a polite dinner party. You listen before you speak. If someone else is talking, you wait. If you accidentally start talking at the same time as someone else, you both immediately stop, wait a totally random amount of milliseconds, and try again.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary difference between an IP Address and a MAC Address?",
                    options: [
                        "A) IP Addresses are used for local Wi-Fi, MAC addresses are used for Ethernet.",
                        "B) A MAC address is a permanent, physical serial number on a network card used for local delivery (Layer 2). An IP address is a logical, changeable address used for global routing (Layer 3).",
                        "C) MAC Addresses are only used by Apple computers.",
                        "D) IP addresses are faster than MAC addresses."
                    ],
                    answer: 1,
                    explanation: "Think of a MAC address as your Social Security Number (permanent identifier) and an IP address as your home mailing address (changes if you move)."
                }
            ]
        }
    },
    'cs602-u2': {
        'cn-u2t1': {
            title: 'IPv4 vs IPv6 Addressing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Running Out of Houses</h3>
<p class="mb-4">Every device connected to the internet needs a unique IP Address. When the internet was invented, they created <strong>IPv4</strong>, which allows for about 4.3 billion unique addresses. In 1983, that seemed like plenty. Today, your smart fridge, your thermostat, and your dog's collar all need IP addresses. We ran out of IPv4 addresses in 2011.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Feature</th>
            <th class="p-3 text-blue-300">IPv4</th>
            <th class="p-3 text-purple-300">IPv6</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold">Format</td><td class="p-3">32-bit (e.g., 192.168.1.1)</td><td class="p-3">128-bit (e.g., 2001:0db8:85a3::8a2e:0370:7334)</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold">Total Addresses</td><td class="p-3">4.3 Billion</td><td class="p-3">340 Undecillion (Enough for every atom on Earth)</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold">Notation</td><td class="p-3">Dotted Decimal</td><td class="p-3">Hexadecimal</td></tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "Why was IPv6 created?",
                    options: [
                        "A) Because IPv4 was too slow.",
                        "B) Because the world literally ran out of available IPv4 addresses due to the explosion of internet-connected devices.",
                        "C) To make IP addresses easier for humans to memorize.",
                        "D) Because IPv4 was hacked."
                    ],
                    answer: 1,
                    explanation: "IPv6 expands the address space from 32-bit to 128-bit, providing so many addresses that we will never run out again."
                }
            ]
        },
        'cn-u2t2': {
            title: 'Routing Algorithms (Dijkstra, Bellman-Ford)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Finding the Shortest Path</h3>
<p class="mb-4">When you send a packet from New York to Tokyo, it doesn't travel on a single direct wire. It hops from router to router. <strong>Routing Algorithms</strong> are the math equations routers use to instantly calculate the fastest possible path across a web of millions of routers.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-yellow-400">Link-State (Dijkstra's Algorithm):</strong> Every router has a complete, God's-eye view map of the entire network. It calculates the absolute shortest path to the destination from scratch. Very fast, but requires massive memory to store the map. (Used in OSPF).</li>
    <li><strong class="text-green-400">Distance-Vector (Bellman-Ford):</strong> A router only knows about its immediate neighbors. It asks its neighbors, "Hey, how far are you from Tokyo?" and updates its own notebook based on their answers. Slower to adapt to broken wires, but requires very little memory. (Used in RIP and BGP).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In routing, how does a Distance-Vector algorithm (like Bellman-Ford) differ from a Link-State algorithm (like Dijkstra)?",
                    options: [
                        "A) Distance-Vector algorithms require the router to have a complete map of the entire internet.",
                        "B) Distance-Vector algorithms rely on routers sharing information only with their immediate neighbors, rather than having a global map.",
                        "C) Distance-Vector algorithms are only used for physical delivery trucks.",
                        "D) Distance-Vector algorithms cannot detect broken links."
                    ],
                    answer: 1,
                    explanation: "Distance-Vector is like navigating a maze by asking the person next to you for directions. Link-State is like navigating a maze while looking at a drone map from above."
                }
            ]
        }
    },
    'cs602-u3': {
        'cn-u3t1': {
            title: 'TCP vs UDP: The Delivery Drivers',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Layer 4: Transport</h3>
<p class="mb-4">Once Layer 3 (IP) gets the data to the correct computer, Layer 4 (Transport) gets the data to the correct <em>application</em> using <strong>Port Numbers</strong> (e.g., Port 80 for Web, Port 443 for Secure Web). It has two main drivers: TCP and UDP.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg">
        <h4 class="text-green-400 font-bold mb-2">TCP (Transmission Control Protocol)</h4>
        <p class="text-gray-300 text-sm mb-2">The reliable, paranoid delivery driver.</p>
        <ul class="list-disc pl-5 text-gray-400 text-xs space-y-1">
            <li>Requires a 3-way handshake before sending anything.</li>
            <li>Numbers every single packet.</li>
            <li>If a packet is lost, it stops everything and demands a re-transmission.</li>
            <li><strong>Use Case:</strong> Web browsing, Emails, File transfers (Where losing a single 0 or 1 ruins everything).</li>
        </ul>
    </div>
    
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-red-500 shadow-lg">
        <h4 class="text-red-400 font-bold mb-2">UDP (User Datagram Protocol)</h4>
        <p class="text-gray-300 text-sm mb-2">The reckless, lightning-fast delivery driver.</p>
        <ul class="list-disc pl-5 text-gray-400 text-xs space-y-1">
            <li>Just blasts packets at the destination.</li>
            <li>No handshake. No numbering. No error checking.</li>
            <li>If a packet is lost, it doesn't care. It keeps sending.</li>
            <li><strong>Use Case:</strong> Live Video Streaming, Multiplayer Gaming, VoIP calls (Where speed is more important than absolute perfection).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why do live multiplayer games (like Call of Duty) use UDP instead of TCP?",
                    options: [
                        "A) Because UDP is more secure.",
                        "B) Because UDP guarantees that no packets will be lost.",
                        "C) Because if a packet containing a player's position is lost, it's better to just receive the *newest* position instantly rather than pausing the entire game to wait for the lost packet to be re-transmitted (TCP).",
                        "D) Because UDP uses fewer IP addresses."
                    ],
                    answer: 2,
                    explanation: "TCP favors reliability over speed. UDP favors speed over reliability. In live gaming, an old dropped packet is useless, so TCP's re-transmission feature would just cause unbearable lag."
                }
            ]
        },
        'cn-u3t2': {
            title: 'HTTP, DNS & The Web',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Application Layer</h3>
<p class="mb-4">This is the layer you actually interact with. It contains the protocols that allow your web browser to render memes.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">DNS (Domain Name System)</h3>
<p class="mb-4 text-gray-300 text-sm">Computers only understand IP addresses (like <code>142.250.190.46</code>). Humans only understand words (like <code>google.com</code>). <strong>DNS is the phonebook of the internet.</strong> When you type google.com, your computer silently asks a DNS server, "Hey, what is the IP address for google.com?" The server replies, and then your computer connects to that IP.</p>

<h3 class="text-xl font-bold mb-2 text-blue-400">HTTP (HyperText Transfer Protocol)</h3>
<p class="mb-4 text-gray-300 text-sm">The language of the World Wide Web. It is a simple Request/Response protocol.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-4 rounded border border-gray-700">
    <li><strong>GET:</strong> "Give me this webpage."</li>
    <li><strong>POST:</strong> "Here is some data I am submitting to you (like a login form)."</li>
    <li><strong>Status 200:</strong> "OK! Here is the data."</li>
    <li><strong>Status 404:</strong> "I have no idea what you are looking for."</li>
    <li><strong>Status 500:</strong> "My server just caught on fire."</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the primary purpose of DNS?",
                    options: [
                        "A) To encrypt web traffic.",
                        "B) To translate human-readable domain names (like netflix.com) into machine-readable IP addresses.",
                        "C) To route packets across the physical ocean cables.",
                        "D) To format HTML pages."
                    ],
                    answer: 1,
                    explanation: "DNS acts exactly like a contacts list in your phone. You don't memorize your friend's 10-digit phone number, you just click their name. DNS does this for websites."
                }
            ]
        }
    },
    'cs602-u4': {
        'cn-u4t1': {
            title: 'Symmetric vs Asymmetric Encryption (RSA, AES)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Math of Secrets</h3>
<p class="mb-4">Network security relies entirely on Mathematics, specifically prime numbers and factoring. If you send a plain text message across the internet, anyone on any router between you and the destination can read it. <strong>Cryptography</strong> scrambles the message so that only the intended recipient can decipher it.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-yellow-500 shadow-lg">
        <h4 class="text-yellow-400 font-bold mb-2">Symmetric Encryption (AES)</h4>
        <p class="text-gray-300 text-sm mb-2">Bob and Alice use the <strong>exact same key</strong> to lock and unlock the box.</p>
        <p class="text-gray-300 text-sm"><strong>Pros:</strong> Extremely fast. Used for encrypting large amounts of data (like streaming video or your hard drive).</p>
        <p class="text-gray-300 text-sm"><strong>Cons:</strong> How do Bob and Alice securely share the key in the first place? If Eve intercepts the key exchange, the system is broken.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg">
        <h4 class="text-purple-400 font-bold mb-2">Asymmetric Encryption (RSA)</h4>
        <p class="text-gray-300 text-sm mb-2">Alice generates TWO keys: a <strong>Public Key</strong> (which she gives to the entire world) and a <strong>Private Key</strong> (which she keeps hidden).</p>
        <p class="text-gray-300 text-sm">Bob uses Alice's Public Key to lock the box. Once locked, <em>not even Bob can unlock it</em>. Only Alice's Private Key can unlock it.</p>
        <p class="text-gray-300 text-sm"><strong>Pros:</strong> Solves the key exchange problem entirely.</p>
        <p class="text-gray-300 text-sm"><strong>Cons:</strong> Mathematically heavy and very slow.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In Asymmetric Encryption (like RSA), if Bob wants to send a highly confidential message to Alice, which key should he use to encrypt the message?",
                    options: ["A) Bob's Private Key", "B) Alice's Private Key", "C) Alice's Public Key", "D) A Symmetric AES Key"],
                    answer: 2,
                    explanation: "Bob uses Alice's Public Key to lock the message. Because of the mathematical properties of RSA, only Alice's mathematically linked Private Key can decrypt it."
                }
            ]
        },
        'cn-u4t2': {
            title: 'Firewalls, VPNs & IPSec',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Network Perimeter Defense</h3>
<p class="mb-4">Encryption protects the data in transit. <strong>Firewalls</strong> protect the network itself from malicious intruders.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>Packet-Filtering Firewalls:</strong> Looks at the IP address and Port of an incoming packet. If it's coming from an IP address on a blacklist, or trying to access a blocked Port (like Port 22 for SSH), it drops the packet.</li>
    <li><strong>Stateful Firewalls:</strong> Smarter. It remembers the 'state' of the connection. If you requested a webpage, it allows the incoming traffic. If a random server tries to send you unsolicited data, it blocks it.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">Virtual Private Networks (VPN) & IPSec</h3>
<p class="mb-4 text-gray-300">A VPN creates a secure, encrypted "tunnel" across the public, chaotic internet. It is often implemented using <strong>IPSec (Internet Protocol Security)</strong>, which operates at the Network Layer (Layer 3).</p>
<p class="mb-4 text-gray-300 text-sm">When you use a VPN, your packets are encrypted, wrapped inside another IP packet, and sent to a VPN gateway. Your ISP can only see that you are sending encrypted data to a VPN server; they cannot see what websites you are actually requesting.</p>
            `,
            quizzes: [
                {
                    question: "How does a Stateful Firewall differ from a simple Packet-Filtering Firewall?",
                    options: [
                        "A) It is state-owned by the government.",
                        "B) It tracks the context and history of active connections, allowing it to differentiate between legitimate requested traffic and unsolicited malicious traffic.",
                        "C) It encrypts the data.",
                        "D) It only operates on wireless networks."
                    ],
                    answer: 1,
                    explanation: "A packet filter is 'stateless'—it just looks at rules. A stateful firewall actually remembers the conversation you are having with a server."
                }
            ]
        }
    },
    'cs602-u5': {
        'cn-u5t1': {
            title: '802.11 Wi-Fi Standards',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Wireless LANs: Cutting the Cord</h3>
<p class="mb-4">Wired networks use CSMA/CD to detect collisions. Wireless networks (Wi-Fi) cannot detect collisions because radios cannot easily listen and transmit at the same time on the same frequency. Therefore, Wi-Fi uses <strong>CSMA/CA (Collision Avoidance)</strong>.</p>
<p class="mb-4">Instead of detecting a crash, a Wi-Fi device listens to the airwaves. If it's clear, it sends a tiny "Request to Send (RTS)" packet. The router replies with "Clear to Send (CTS)". Then, the device transmits.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-4">Standard</th>
            <th class="p-4">Frequency</th>
            <th class="p-4">Max Speed (Theoretical)</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-blue-300">802.11b (1999)</td>
            <td class="p-4">2.4 GHz</td>
            <td class="p-4">11 Mbps</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-green-300">802.11n (Wi-Fi 4)</td>
            <td class="p-4">2.4 / 5 GHz</td>
            <td class="p-4">600 Mbps (introduced MIMO)</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-yellow-300">802.11ax (Wi-Fi 6)</td>
            <td class="p-4">2.4 / 5 GHz</td>
            <td class="p-4">9.6 Gbps</td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "Why do Wireless networks (802.11) use CSMA/CA (Avoidance) instead of CSMA/CD (Detection) used in wired Ethernet?",
                    options: [
                        "A) Because collisions do not happen in the air.",
                        "B) Because a wireless radio antenna cannot transmit data and listen for collisions simultaneously on the same channel.",
                        "C) Because the FCC mandated it.",
                        "D) Because wireless networks are immune to interference."
                    ],
                    answer: 1,
                    explanation: "Radios are half-duplex by nature on a single channel. If you are screaming (transmitting), you can't hear if someone else is screaming at the exact same time."
                }
            ]
        },
        'cn-u5t2': {
            title: 'Cellular Architecture (4G/5G) & Mobile IP',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Cellular Grid</h3>
<p class="mb-4">Cellular networks divide geography into hexagonal "Cells". Each cell has a base station (tower). Frequencies are carefully allocated so that adjacent cells do not use the same frequencies (preventing interference), but cells further away can reuse them.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Generations of Speed</h3>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>3G:</strong> Brought the mobile internet. Allowed basic web browsing and email.</li>
    <li><strong>4G (LTE):</strong> Brought broadband speeds. Enabled HD video streaming and ride-sharing apps like Uber. Entirely IP-based.</li>
    <li><strong>5G:</strong> Utilizes millimeter waves. Massively reduces <strong>latency</strong> (sub-1 millisecond). Designed not just for phones, but for IoT, self-driving cars, and remote robotic surgery.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">Mobile IP: Keeping Your Connection</h3>
<p class="mb-4 text-gray-300">If you are watching a YouTube video in a moving car, your phone is constantly jumping from one cell tower to the next. In traditional networking, moving to a new network means getting a new IP address, which breaks all active TCP connections (dropping the video). <strong>Mobile IP</strong> solves this by using a "Home Agent" that intercepts packets meant for your original IP and seamlessly tunnels them to your current "Care-of" address.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary breakthrough of 5G cellular technology over 4G?",
                    options: [
                        "A) It introduced text messaging.",
                        "B) Ultra-low latency and massive device density, enabling real-time IoT applications like self-driving cars.",
                        "C) It allows phones to work completely without cell towers.",
                        "D) It uses symmetric cryptography."
                    ],
                    answer: 1,
                    explanation: "While 5G is faster, its main architectural advantage is nearly zero-latency response times and the ability to connect thousands of IoT devices per square kilometer."
                }
            ]
        }
    }
});
