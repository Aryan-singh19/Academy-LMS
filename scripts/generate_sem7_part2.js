const fs = require('fs');
const path = require('path');

// Helper to wrap topic details
function createTopicEntry(title, intro, keyPoints, mermaidDiagram, formulaOrNote, quiz) {
    let content = `
<h3 class="text-2xl font-bold mb-4 text-blue-400">${title}</h3>
<p class="mb-4 text-slate-300 leading-relaxed">${intro}</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg">
        <h4 class="text-blue-300 font-bold mb-3 text-lg">Core Principles & Physics / Architecture</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-emerald-500 shadow-lg">
        <h4 class="text-emerald-300 font-bold mb-3 text-lg">Exam Focus & Practical Implementation</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
</div>
`;

    if (mermaidDiagram) {
        content += `
<h3 class="text-xl font-bold mb-2 text-blue-400">Protocol & System Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
${mermaidDiagram}
</div>
`;
    }

    if (formulaOrNote) {
        content += `
<div class="bg-slate-900 border border-amber-500/30 rounded-xl p-5 mb-6 text-sm text-amber-200/90">
    <h4 class="font-bold text-amber-300 mb-2 flex items-center gap-2">
        <span>&#128221;</span> Exam Formula / Analytical Formulation
    </h4>
    <p class="leading-relaxed">${formulaOrNote}</p>
</div>
`;
    }

    return {
        title,
        content: content.trim(),
        quiz: quiz || []
    };
}

// -------------------------------------------------------------
// CS-702 (B): WIRELESS & MOBILE COMPUTING
// -------------------------------------------------------------
const cs702wmcData = {
    'cs702wmc-u1': {
        'cs702wmc-u1t1': createTopicEntry(
            'Electromagnetic Spectrum & Radio Frequency Propagation',
            'Wireless communications utilize radio frequency (RF) and microwave bands of the electromagnetic spectrum. Electromagnetic waves propagate through space at the speed of light $c \\approx 3 \\times 10^8$ m/s, governed by Maxwell\'s equations.',
            [
                '<strong>RF Spectrum Bands:</strong> VLF, LF, MF, HF, VHF (30-300 MHz), UHF (300 MHz - 3 GHz, cellular/Wi-Fi), SHF (3-30 GHz), EHF (millimeter waves, 5G).',
                '<strong>Propagation Modes:</strong> Ground wave (< 2 MHz, follows earth curvature), Sky wave (2-30 MHz, ionospheric refraction), Line-of-Sight (LOS, > 30 MHz).',
                '<strong>Wavelength and Frequency:</strong> $\\lambda = \\frac{c}{f}$. Higher frequencies provide larger bandwidth but suffer severe attenuation through physical obstacles.',
                '<strong>Transmission Impairments:</strong> Attenuation, distortion, thermal noise ($N = kTB$), interference.',
                '<strong>Antenna Length Rule:</strong> Optimal resonant antenna length is $\\frac{\\lambda}{2}$ (half-wave dipole) or $\\frac{\\lambda}{4}$ (monopole).'
            ],
            `graph LR
    Tx[Transmitter Antenna] -->|Ground Wave: < 2 MHz| Surf[Earth Surface Follow]
    Tx -->|Sky Wave: 2-30 MHz| Iono[Ionosphere Bounce]
    Tx -->|LOS: > 30 MHz| Rx[Direct Line-of-Sight Receiver]
    style Tx fill:#1e293b,stroke:#3b82f6,color:#fff
    style Iono fill:#1e293b,stroke:#f59e0b,color:#fff
    style Rx fill:#1e293b,stroke:#10b981,color:#fff`,
            'Free Space Path Loss (Friis Equation): $P_r = P_t G_t G_r \\left(\\frac{\\lambda}{4\\pi d}\\right)^2$. Received power decreases with the square of distance $d^2$ and square of frequency $f^2$.',
            [
                {
                    question: 'Which electromagnetic propagation mode relies on reflection from the charged ionosphere layer for long-distance communication?',
                    options: ['Ground wave propagation', 'Sky wave propagation', 'Line-of-Sight propagation', 'Surface wave conduction'],
                    answer: 1,
                    explanation: 'Sky wave propagation reflects HF radio signals (2-30 MHz) off the ionosphere, enabling intercontinental transmission.'
                }
            ]
        ),
        'cs702wmc-u1t2': createTopicEntry(
            'Modulation: FSK, PSK, QAM & OFDM Principles',
            'Modulation translates digital bits into analog signals suitable for transmission over wireless channels. Advanced schemes maximize spectral efficiency (bits per second per Hertz).',
            [
                '<strong>FSK (Frequency Shift Keying):</strong> Digital data represented by discrete frequency shifts of carrier wave.',
                '<strong>PSK (Phase Shift Keying):</strong> BPSK (1 bit/symbol), QPSK (2 bits/symbol), 8-PSK (3 bits/symbol).',
                '<strong>QAM (Quadrature Amplitude Modulation):</strong> Combines amplitude and phase changes: 16-QAM (4 bits/symbol), 64-QAM (6 bits/symbol), 256-QAM (8 bits/symbol).',
                '<strong>OFDM (Orthogonal Frequency Division Multiplexing):</strong> Splits wideband channel into hundreds of closely spaced orthogonal narrowband subcarriers.',
                '<strong>Inter-Symbol Interference (ISI) Defense:</strong> OFDM inserts a Cyclic Prefix (CP) guard interval longer than channel delay spread to completely eliminate ISI.'
            ],
            `graph TD
    Bitstream[Serial High-Speed Bits] --> S2P[Serial to Parallel Splitter]
    S2P --> Subcarriers[Orthogonal Subcarriers: f0, f1, f2... fn]
    Subcarriers --> IFFT[Inverse Fast Fourier Transform IFFT]
    IFFT --> CP[Add Cyclic Prefix Guard]
    CP --> RF[RF Analog Upconverter & Antenna]
    style Bitstream fill:#1e293b,stroke:#3b82f6,color:#fff
    style IFFT fill:#1e293b,stroke:#f59e0b,color:#fff
    style RF fill:#1e293b,stroke:#10b981,color:#fff`,
            'Shannon Channel Capacity Theorem: $C = B \\log_2\\left(1 + \\frac{S}{N}\\right)$ bps. To increase capacity $C$, one must either increase bandwidth $B$ or Signal-to-Noise Ratio ($S/N$).',
            [
                {
                    question: 'How does OFDM prevent Inter-Symbol Interference (ISI) caused by multipath channel delays?',
                    options: [
                        'By increasing transmitter power exponentially',
                        'By appending a Cyclic Prefix (CP) guard interval before each OFDM symbol',
                        'By converting all radio signals to infrared light',
                        'By using only single-frequency carriers'
                    ],
                    answer: 1,
                    explanation: 'A Cyclic Prefix guard interval longer than channel delay spread absorbs multipath echoes and preserves orthogonality.'
                }
            ]
        ),
        'cs702wmc-u1t3': createTopicEntry(
            'Signal Fading: Path Loss, Multipath Fading & Doppler Shift',
            'Wireless channels are hostile and time-varying. Transmitted waves bounce off buildings, terrain, and vehicles, arriving at the receiver along multiple paths with differing phases and amplitudes.',
            [
                '<strong>Large-Scale Fading (Path Loss & Shadowing):</strong> Signal decay over large distances; log-normal distribution due to terrain obstacles.',
                '<strong>Small-Scale Fading (Multipath Fading):</strong> Rapid fluctuations in signal strength over fractions of a wavelength due to constructive/destructive interference.',
                '<strong>Rayleigh Fading:</strong> Occurs when there is NO dominant Line-of-Sight (LOS) path between transmitter and receiver.',
                '<strong>Rician Fading:</strong> Occurs when a strong direct LOS path exists along with weaker scattered multipath components.',
                '<strong>Doppler Shift:</strong> Frequency change caused by relative movement between transmitter and receiver: $f_d = \\frac{v}{\\lambda} \\cos\\theta$.'
            ],
            `graph LR
    Tx[Base Station] -->|Direct Path LOS| Rx[Mobile Car Receiver]
    Tx -->|Reflected Path: Delay t1| Build[Skyscraper]
    Build --> Rx
    Tx -->|Scattered Path: Delay t2| Tree[Tree / Hill]
    Tree --> Rx
    style Tx fill:#1e293b,stroke:#3b82f6,color:#fff
    style Rx fill:#1e293b,stroke:#10b981,color:#fff
    style Build fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Coherence Time equation: $T_c \\approx \\frac{1}{f_m} = \\frac{\\lambda}{v}$. Time duration over which the wireless channel impulse response is considered invariant.',
            [
                {
                    question: 'Which fading distribution model applies when there is a strong, dominant Line-of-Sight (LOS) path between transmitter and receiver?',
                    options: ['Rayleigh fading', 'Rician fading', 'Log-normal shadow fading', 'Weibull distribution'],
                    answer: 1,
                    explanation: 'Rician fading characterizes channels with a strong direct LOS component (Rician K-factor > 0).'
                }
            ]
        ),
        'cs702wmc-u1t4': createTopicEntry(
            'Antennas, Beamforming & Multi-Input Multi-Output (MIMO)',
            'Multiple antenna systems drastically enhance wireless capacity and link reliability without requiring additional spectrum or transmit power.',
            [
                '<strong>Diversity Gain:</strong> Multiple antennas receive independent fading replicas of the signal, drastically reducing the probability of deep fades.',
                '<strong>Spatial Multiplexing:</strong> Transmits independent data streams simultaneously over the same frequency channel across $M$ antennas (multiplies data rate by $M$).',
                '<strong>Beamforming:</strong> Adjusts amplitude and phase of array elements to focus RF energy into a narrow directional beam toward the user device.',
                '<strong>Massive MIMO:</strong> Employs hundreds of antenna elements at base stations (5G), serving dozens of users simultaneously (MU-MIMO).',
                '<strong>MIMO Capacity:</strong> $C \\approx \\min(N_t, N_r) B \\log_2(1 + \\text{SNR})$. Capacity scales linearly with antenna count.'
            ],
            `graph TD
    BS[5G Base Station: Massive MIMO Array] -->|Focused Beam 1| User1[Smartphone User A]
    BS -->|Focused Beam 2| User2[Smartphone User B]
    BS -->|Focused Beam 3| Car[Autonomous Vehicle C]
    style BS fill:#1e293b,stroke:#3b82f6,color:#fff
    style User1 fill:#1e293b,stroke:#10b981,color:#fff
    style User2 fill:#1e293b,stroke:#10b981,color:#fff
    style Car fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'MIMO Spatial Multiplexing Gain: If channel matrix $H$ is full rank, capacity $C = \\sum_{i=1}^{\\min(N_t, N_r)} \\log_2(1 + \\frac{\\text{SNR}}{N_t} \\sigma_i^2)$.',
            [
                {
                    question: 'What mechanism in MIMO transmits different independent data streams across multiple antennas simultaneously on the exact same frequency band?',
                    options: ['Space-Time Block Coding', 'Spatial Multiplexing', 'Beamforming Nulling', 'Equalization'],
                    answer: 1,
                    explanation: 'Spatial Multiplexing divides data into parallel streams transmitted simultaneously to multiply channel capacity.'
                }
            ]
        )
    },
    'cs702wmc-u2': {
        'cs702wmc-u2t1': createTopicEntry(
            'Hidden Terminal & Exposed Terminal Problems in Wireless',
            'Wireless media access control cannot use standard Ethernet CSMA/CD because wireless transceivers cannot transmit and listen for collisions simultaneously (half-duplex RF constraints).',
            [
                '<strong>Hidden Terminal Problem:</strong> Node A and Node C both transmit to Node B. A and C cannot hear each other (out of radio range), causing a collision at B.',
                '<strong>Exposed Terminal Problem:</strong> Node B is transmitting to Node A. Node C wants to transmit to Node D. C hears B and needlessly defers transmission, wasting capacity.',
                '<strong>Solution - MACA / CSMA/CA:</strong> RTS (Request to Send) and CTS (Clear to Send) control frame exchange.',
                '<strong>NAV (Network Allocation Vector):</strong> Virtual carrier sensing timer set in all listening nodes indicating duration channel will be busy.',
                '<strong>Collision Avoidance:</strong> Exponential random backoff timer whenever medium is sensed busy.'
            ],
            `graph LR
    A[Node A] -->|RTS| B[Node B: Target]
    B -->|CTS Broadcast| A
    B -.->|CTS heard by C| C[Node C: Defers Transmission]
    style A fill:#1e293b,stroke:#3b82f6,color:#fff
    style B fill:#1e293b,stroke:#10b981,color:#fff
    style C fill:#1e293b,stroke:#ef4444,color:#fff`,
            'CTS Solves Hidden Terminal: Node B broadcasts CTS with NAV reservation duration. Even though Node C cannot hear Node A, C hears B\'s CTS and silences itself.',
            [
                {
                    question: 'In CSMA/CA, how does the RTS/CTS handshake solve the Hidden Terminal problem?',
                    options: [
                        'By increasing node battery capacity',
                        'The receiver broadcasts CTS, which informs hidden neighboring nodes to defer transmission',
                        'By converting the wireless channel to full-duplex fiber optic',
                        'By running Dijkstra\'s shortest path algorithm'
                    ],
                    answer: 1,
                    explanation: 'When the receiver emits a Clear to Send (CTS) frame, all nodes within the receiver\'s range (including hidden ones) learn to defer.'
                }
            ]
        ),
        'cs702wmc-u2t2': createTopicEntry(
            'Multiple Access: FDMA, TDMA, CDMA & Walsh Orthogonal Codes',
            'Multiple access techniques allow many users to share a common communications spectrum without mutual interference.',
            [
                '<strong>FDMA:</strong> Bandwidth divided into distinct frequency sub-channels; guard bands prevent adjacent channel bleed.',
                '<strong>TDMA:</strong> Entire frequency band allocated to one user for a discrete recurring time slot; guard times prevent overlap.',
                '<strong>CDMA (Code Division Multiple Access):</strong> All users transmit simultaneously across the ENTIRE frequency band; separated by unique orthogonal pseudo-random codes.',
                '<strong>Spread Spectrum:</strong> Multiplies data bits by high-rate pseudorandom chip sequence, spreading signal across wide bandwidth.',
                '<strong>Walsh Codes:</strong> Mathematically orthogonal code sequences: inner product of distinct codes is ZERO: $\\mathbf{C}_i \\cdot \\mathbf{C}_j = 0$ for $i \\neq j$.'
            ],
            `graph TD
    UserA["User A Data bit: +1"] -->|Multiply by Walsh Code [1, 1, 1, 1]| ChipA["Chips: [+1, +1, +1, +1]"]
    UserB["User B Data bit: -1"] -->|Multiply by Walsh Code [1, -1, 1, -1]| ChipB["Chips: [-1, +1, -1, +1]"]
    ChipA & ChipB --> Air[Combined Channel: [0, +2, 0, +2]]
    Air -->|Dot product with Code A| RxA["Recover User A: (+1)"]
    style UserA fill:#1e293b,stroke:#3b82f6,color:#fff
    style UserB fill:#1e293b,stroke:#f59e0b,color:#fff
    style Air fill:#1e293b,stroke:#10b981,color:#fff`,
            'CDMA Orthogonality Property: $\\frac{1}{N} \\sum_{k=1}^{N} C_i(k) C_j(k) = \\delta_{ij}$. Decoding simply takes the inner product of the composite signal with the user\'s private code.',
            [
                {
                    question: 'What mathematical property allows CDMA receivers to separate simultaneous transmissions on identical frequencies?',
                    options: ['Fast Fourier Transform', 'Orthogonality of spreading codes (inner product is zero)', 'Shannon capacity theorem', 'Parity bit checksums'],
                    answer: 1,
                    explanation: 'Orthogonal codes (like Walsh codes) have zero cross-correlation, allowing receivers to extract the desired user\'s signal by dot-product.'
                }
            ]
        ),
        'cs702wmc-u2t3': createTopicEntry(
            'IEEE 802.11 Wi-Fi: CSMA/CA, RTS/CTS Handshake & NAV',
            'The IEEE 802.11 Wi-Fi standard governs wireless local area networks (WLAN). It specifies physical layer variations (802.11a/b/g/n/ac/ax) and MAC mechanisms.',
            [
                '<strong>DCF (Distributed Coordination Function):</strong> Contention-based access using CSMA/CA and binary exponential backoff.',
                '<strong>PCF (Point Coordination Function):</strong> Contention-free centralized polling handled by the Access Point (AP).',
                '<strong>Inter-Frame Spaces (IFS):</strong> SIFS (Short IFS, highest priority for ACK/CTS), PIFS (PCF IFS), DIFS (Distributed IFS for DCF data).',
                '<strong>Contention Window (CW):</strong> Randomized backoff counter $CW \\in [0, CW_{\\min}]$. Doubles upon collision up to $CW_{\\max}$.',
                '<strong>Evolution:</strong> 802.11ac (Wi-Fi 5, 5 GHz, 256-QAM) $\\to$ 802.11ax (Wi-Fi 6, OFDMA, Target Wake Time, 1024-QAM).'
            ],
            `graph LR
    DIFS[Wait DIFS Time] --> Sensed{Channel Busy?}
    Sensed -->|No| Tx[Transmit Frame]
    Sensed -->|Yes| Backoff[Pick Random Backoff in CW]
    Backoff --> SIFS[Wait SIFS after Frame]
    SIFS --> ACK[Receive ACK Frame]
    style DIFS fill:#1e293b,stroke:#3b82f6,color:#fff
    style Backoff fill:#1e293b,stroke:#f59e0b,color:#fff
    style ACK fill:#1e293b,stroke:#10b981,color:#fff`,
            'Priority rule: $\\text{SIFS} < \\text{PIFS} < \\text{DIFS}$. High-priority control frames (ACK, CTS) use SIFS, ensuring they seize the channel before data frames can interrupt.',
            [
                {
                    question: 'Which Inter-Frame Space (IFS) in 802.11 Wi-Fi has the shortest duration and highest transmission priority?',
                    options: ['DIFS', 'PIFS', 'SIFS', 'EIFS'],
                    answer: 2,
                    explanation: 'SIFS (Short Inter-Frame Space) is the shortest gap, giving immediate priority to ACK and CTS control packets.'
                }
            ]
        ),
        'cs702wmc-u2t4': createTopicEntry(
            'Bluetooth Architecture: Piconet, Scatternet & Frequency Hopping',
            'Bluetooth (IEEE 802.15.1) is a Wireless Personal Area Network (WPAN) standard designed for low-power, short-range cable replacement operating in the 2.4 GHz ISM band.',
            [
                '<strong>FHSS (Frequency Hopping Spread Spectrum):</strong> Hops across 79 channels (1 MHz wide) at 1600 hops/sec to avoid Wi-Fi interference.',
                '<strong>Piconet:</strong> Star topology comprising 1 Master and up to 7 active Slaves (plus up to 255 parked nodes).',
                '<strong>Master Node:</strong> Controls the clock and allocates alternating transmit/receive time slots (TDD - Time Division Duplex).',
                '<strong>Scatternet:</strong> Interconnection of multiple piconets via a bridge node that acts as a slave in one piconet and master/slave in another.',
                '<strong>BLE (Bluetooth Low Energy):</strong> Simplified stack with 40 channels (3 advertising, 37 data), sub-second connection setup, microamp standby current.'
            ],
            `graph TD
    subgraph P1[Piconet 1]
        M1[Master 1] --> S1[Slave 1A]
        M1 --> S2[Slave 1B]
        M1 --> Bridge[Bridge Node: Slave 1C]
    end
    subgraph P2[Piconet 2]
        Bridge --> M2[Master 2]
        M2 --> S3[Slave 2A]
    end
    style M1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style Bridge fill:#1e293b,stroke:#f59e0b,color:#fff
    style M2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'FHSS Hop Sequence equation: Channel $f_k = 2402 + k$ MHz for $k \\in [0, 78]$. Pseudo-random hop sequence is derived entirely from the Master\'s 48-bit Bluetooth Device Address (BD_ADDR).',
            [
                {
                    question: 'How many active slave nodes can simultaneously communicate with a single master in a standard Bluetooth piconet?',
                    options: ['3', '7', '16', '255'],
                    answer: 1,
                    explanation: 'A Bluetooth piconet supports exactly 1 master and up to 7 active slave devices (with additional parked devices).'
                }
            ]
        )
    },
    'cs702wmc-u3': {
        'cs702wmc-u3t1': createTopicEntry(
            'Cellular Concept: Frequency Reuse, Cluster Size N & Cell Splitting',
            'The cellular concept replaces high-power broadcast transmitters with a grid of low-power hexagonal cells, enabling the same radio frequencies to be reused repeatedly across geographical distances.',
            [
                '<strong>Frequency Reuse:</strong> Allocating the total spectrum across $N$ cells (a cluster) and repeating the pattern geographically.',
                '<strong>Cluster Size ($N$):</strong> Can only take values given by $N = i^2 + ij + j^2$ where $i, j \\ge 0$ (e.g., $N = 3, 4, 7, 12$).',
                '<strong>Co-Channel Cells:</strong> Cells that share the identical set of frequencies; separated by co-channel reuse distance $D$.',
                '<strong>Co-Channel Reuse Ratio:</strong> $Q = \\frac{D}{R} = \\sqrt{3N}$, where $R$ is cell radius.',
                '<strong>Capacity Expansion:</strong> Cell Splitting (dividing congested cells into smaller microcells) and Sectoring (directional antennas, 120° or 60°).'
            ],
            `graph TD
    subgraph Cluster[7-Cell Cluster N=7]
        C1[Cell A] --- C2[Cell B]
        C1 --- C3[Cell C]
        C1 --- C4[Cell D]
        C1 --- C5[Cell E]
        C1 --- C6[Cell F]
        C1 --- C7[Cell G]
    end
    style C1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style C2 fill:#1e293b,stroke:#10b981,color:#fff
    style C3 fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Signal-to-Interference Ratio (SIR): For a 7-cell cluster ($N=7$) with 6 first-tier co-channel interferers: $\\frac{S}{I} = \\frac{(\\sqrt{3N})^n}{6} = \\frac{(\\sqrt{21})^4}{6} \\approx 73.5 = 18.66$ dB (exceeding standard 18 dB GSM threshold).',
            [
                {
                    question: 'Which of the following CANNOT be a valid cellular cluster size N according to the geometry formula N = i² + ij + j²?',
                    options: ['N = 3', 'N = 7', 'N = 9', 'N = 10'],
                    answer: 3,
                    explanation: 'N=10 cannot be formed by i² + ij + j² with non-negative integers (valid sizes include 1, 3, 4, 7, 9, 12, 13).'
                }
            ]
        ),
        'cs702wmc-u3t2': createTopicEntry(
            'GSM Architecture: BTS, BSC, MSC, HLR, VLR & Security',
            'GSM (Global System for Mobile Communications) is the foundational 2G digital cellular standard, separating radio transmission from network switching and subscriber database tracking.',
            [
                '<strong>BSS (Base Station Subsystem):</strong> BTS (Base Transceiver Station: antennas/RF transceivers) controlled by BSC (Base Station Controller: radio channels/handoffs).',
                '<strong>NSS (Network & Switching Subsystem):</strong> MSC (Mobile Switching Center: telephony call routing and circuit switching).',
                '<strong>HLR (Home Location Register):</strong> Central database holding permanent subscriber profiles, IMSI, subscribed services, and current VLR location pointer.',
                '<strong>VLR (Visitor Location Register):</strong> Temporary database attached to an MSC caching profiles of roaming mobiles currently inside its local area.',
                '<strong>GSM Security:</strong> SIM card, A3 algorithm (authentication), A8 algorithm (session key generation), A5 algorithm (air-interface encryption).'
            ],
            `graph TD
    MS[Mobile Station: SIM] <--> BTS[BTS: Tower Antennas]
    BTS <--> BSC[BSC: Controller]
    BSC <--> MSC[MSC: Mobile Switching Center]
    MSC <--> HLR[(HLR: Permanent Profile)]
    MSC <--> VLR[(VLR: Local Temporary Caches)]
    MSC <--> AuC[AuC: Authentication Center]
    style MS fill:#1e293b,stroke:#3b82f6,color:#fff
    style BSC fill:#1e293b,stroke:#f59e0b,color:#fff
    style MSC fill:#1e293b,stroke:#10b981,color:#fff
    style HLR fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Authentication Triplets: $(RAND, SRES, K_c)$. AuC runs $A3(RAND, K_i) = SRES$ and $A8(RAND, K_i) = K_c$. If mobile\'s computed SRES matches network SRES, access is granted.',
            [
                {
                    question: 'In GSM cellular networks, which database holds the master permanent record of a subscriber, their subscribed services, and their current serving VLR address?',
                    options: ['Visitor Location Register (VLR)', 'Home Location Register (HLR)', 'Base Station Controller (BSC)', 'Equipment Identity Register (EIR)'],
                    answer: 1,
                    explanation: 'The HLR (Home Location Register) is the authoritative home database for all registered network subscribers.'
                }
            ]
        ),
        'cs702wmc-u3t3': createTopicEntry(
            'Handoff Strategies: Hard Handoff, Soft Handoff & Power Control',
            'As mobile subscribers traverse cell boundaries during an active call, the connection must transfer to the adjacent base station seamlessly without dropping the call.',
            [
                '<strong>Hard Handoff ("Break-Before-Make"):</strong> Mobile releases existing radio channel before connecting to the new base station (standard in FDMA/TDMA/GSM).',
                '<strong>Soft Handoff ("Make-Before-Break"):</strong> Mobile communicates simultaneously with two or more base stations on the same frequency; rake receiver combines signals (standard in CDMA/WCDMA).',
                '<strong>Handoff Decision Criteria:</strong> Received Signal Strength (RSS), Signal-to-Interference Ratio (SIR), Distance, Bit Error Rate (BER).',
                '<strong>Hysteresis Margin:</strong> Handoff triggered only when $RSS_{new} > RSS_{old} + \\Delta_h$ to prevent the "ping-pong" effect at boundaries.',
                '<strong>Power Control:</strong> Open-loop and closed-loop power control solves the Near-Far problem in CDMA systems.'
            ],
            `graph LR
    subgraph Hard[Hard Handoff: Break-Before-Make]
        H1[Connected Cell A] -->|Disconnect| H2[Channel Gap]
        H2 -->|Connect| H3[Connected Cell B]
    end
    subgraph Soft[Soft Handoff: Make-Before-Break]
        S1[Cell A Active] --> S2[Simultaneous Active: Cell A + Cell B]
        S2 --> S3[Cell B Active: Drop Cell A]
    end
    style Hard fill:#1e293b,stroke:#ef4444,color:#fff
    style Soft fill:#1e293b,stroke:#10b981,color:#fff`,
            'Ping-Pong prevention threshold: Handover condition is $RSS_{target} > RSS_{serving} + \\text{Hysteresis Margin}$ maintained continuously for Time-to-Trigger (TTT) duration.',
            [
                {
                    question: 'What is the characteristic mechanism of a "Soft Handoff" in wireless communications?',
                    options: [
                        'Break-before-make: immediate disconnection before establishing a new link',
                        'Make-before-break: simultaneous connection to both old and new base stations during transition',
                        'Handoff conducted over satellite link',
                        'Manual frequency switching by the smartphone user'
                    ],
                    answer: 1,
                    explanation: 'Soft handoff uses "make-before-break" where the handset connects to the target cell before releasing the original cell.'
                }
            ]
        ),
        'cs702wmc-u3t4': createTopicEntry(
            '4G LTE vs 5G NR: Network Slicing, Massive MIMO & Millimeter Wave',
            'Cellular generations transitioned from circuit-switched voice to all-IP broadband (4G LTE) and ultra-reliable low-latency multi-service platforms (5G New Radio).',
            [
                '<strong>4G LTE Architecture:</strong> EPC (Evolved Packet Core) with eNodeB, MME (Mobility Management Entity), SGW (Serving Gateway), and PGW (Packet Gateway).',
                '<strong>5G Use Cases (ITU Triad):</strong> eMBB (Enhanced Mobile Broadband, > 10 Gbps), URLLC (Ultra-Reliable Low Latency, < 1ms), mMTC (Massive Machine-Type Comms, $10^6$ devices/km²).',
                '<strong>Network Slicing:</strong> Running multiple isolated virtual networks on a common physical infrastructure using SDN and NFV.',
                '<strong>Millimeter Wave (mmWave):</strong> High frequencies (24-100 GHz) delivering gigabit speeds with low propagation ranges.',
                '<strong>5G Service-Based Architecture (SBA):</strong> Core network control plane functions communicate via HTTP/2 REST APIs (AMF, SMF, UPF).'
            ],
            `graph TD
    User[5G Core Physical Network] --> Slice1[Slice 1: eMBB - 4K Video Streaming]
    User --> Slice2[Slice 2: URLLC - Autonomous Vehicles < 1ms]
    User --> Slice3[Slice 3: mMTC - Smart City Smart Meters]
    style User fill:#1e293b,stroke:#3b82f6,color:#fff
    style Slice1 fill:#1e293b,stroke:#10b981,color:#fff
    style Slice2 fill:#1e293b,stroke:#ef4444,color:#fff
    style Slice3 fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'URLLC target reliability: $99.999\\%$ packet delivery within 1 millisecond radio latency, enabled by mini-slot scheduling in 5G NR.',
            [
                {
                    question: 'Which 5G service category is specifically engineered for self-driving cars, remote surgery, and industrial robotics requiring sub-millisecond latency?',
                    options: ['eMBB (Enhanced Mobile Broadband)', 'URLLC (Ultra-Reliable Low-Latency Communication)', 'mMTC (Massive Machine-Type Communication)', 'GSM Circuit Voice'],
                    answer: 1,
                    explanation: 'URLLC guarantees mission-critical sub-millisecond latency and 99.999% reliability.'
                }
            ]
        )
    },
    'cs702wmc-u4': {
        'cs702wmc-u4t1': createTopicEntry(
            'Mobile IP Architecture: Home Agent (HA), Foreign Agent & CoA',
            'Standard IP routing assumes that an IP address uniquely identifies a device\'s topological point of attachment to the Internet. If a mobile node moves to a different subnet, its IP must change, breaking active TCP connections. Mobile IP solves this.',
            [
                '<strong>Mobile Node (MN):</strong> A host that changes its point of attachment from one network to another while keeping its home IP address.',
                '<strong>Home Agent (HA):</strong> Router on the mobile node\'s home network that intercepts packets destined for the MN and tunnels them to its current location.',
                '<strong>Foreign Agent (FA):</strong> Router on the foreign visited network that decapsulates packets and delivers them to the MN.',
                '<strong>Care-of Address (CoA):</strong> Temporary IP address identifying the mobile node\'s current location (either FA-CoA or Co-located CoA via DHCP).',
                '<strong>Binding Registration:</strong> Whenever MN moves, it registers its newly acquired CoA with its Home Agent.'
            ],
            `graph LR
    CN[Correspondent Node] -->|Standard IP to Home Address| HA[Home Agent]
    HA -->|IP Tunnel / Encapsulate to CoA| FA[Foreign Agent]
    FA -->|Deliver Decapsulated Packet| MN[Mobile Node on Visited Network]
    MN -->|Direct Egress Return| CN
    style CN fill:#1e293b,stroke:#3b82f6,color:#fff
    style HA fill:#1e293b,stroke:#f59e0b,color:#fff
    style FA fill:#1e293b,stroke:#10b981,color:#fff
    style MN fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Two IP Addresses per Mobile Node: Permanent Home Address (identifies identity/TCP sockets) and temporary Care-of Address (identifies current topological routing location).',
            [
                {
                    question: 'In Mobile IP, what entity intercepts packets sent to a roaming mobile node\'s permanent address and forwards them via tunneling?',
                    options: ['Domain Name Server (DNS)', 'Home Agent (HA)', 'Border Gateway Router', 'Dynamic Host Configuration Server'],
                    answer: 1,
                    explanation: 'The Home Agent maintains the mobile node\'s registration binding and tunnels incoming packets to its Care-of Address.'
                }
            ]
        ),
        'cs702wmc-u4t2': createTopicEntry(
            'IP Tunneling & Encapsulation: IP-in-IP & Minimal Encapsulation',
            'Tunneling is the mechanism used by the Home Agent to forward packets to the Care-of Address without altering the original packet\'s destination header.',
            [
                '<strong>IP-in-IP Encapsulation (RFC 2004):</strong> The entire original IP packet (header + payload) is inserted as the payload of an outer IP packet.',
                '<strong>Outer IP Header:</strong> Source = Home Agent IP, Destination = Care-of Address (CoA), Protocol field = 4 (IP-in-IP).',
                '<strong>Overhead of IP-in-IP:</strong> Adds a full 20-byte outer IPv4 header to every single forwarded packet.',
                '<strong>Minimal Encapsulation (RFC 2004):</strong> Compresses header overhead to 8-12 bytes by replacing parts of original header and moving original destination into an inner minimal forward header.',
                '<strong>Generic Routing Encapsulation (GRE):</strong> Cisco protocol (RFC 1701) capable of tunneling arbitrary network-layer protocols over IP.'
            ],
            `graph TD
    Orig[Original IP Packet: Src=CN, Dst=MN Home IP, Payload]
    Tunnel[IP-in-IP Packet]
    Tunnel --> Outer[Outer IP Header: Src=HA, Dst=CoA]
    Tunnel --> Orig
    style Orig fill:#1e293b,stroke:#3b82f6,color:#fff
    style Tunnel fill:#1e293b,stroke:#10b981,color:#fff`,
            'Encapsulation protocol number in IPv4: Protocol field is set to <code>4</code> for IP-in-IP, <code>47</code> for GRE, and <code>55</code> for Minimal Encapsulation.',
            [
                {
                    question: 'What is the standard header overhead added by IP-in-IP encapsulation for every tunneled packet in Mobile IPv4?',
                    options: ['4 bytes', '8 bytes', '20 bytes', '64 bytes'],
                    answer: 2,
                    explanation: 'A standard outer IPv4 header adds exactly 20 bytes of encapsulation overhead.'
                }
            ]
        ),
        'cs702wmc-u4t3': createTopicEntry(
            'Triangle Routing Problem & Route Optimization Techniques',
            'In standard Mobile IP, packets sent by a Correspondent Node (CN) must first travel to the Home Agent, which tunnels them to the Foreign Agent, even if the CN and MN sit in adjacent rooms. Return packets travel directly. This asymmetric loop is called Triangle Routing.',
            [
                '<strong>Triangle Routing Inefficiency:</strong> Waste of wide-area Internet bandwidth and significant round-trip latency inflation.',
                '<strong>Route Optimization (RFC 3775 / MIPv6):</strong> Home Agent sends a Binding Update message to the CN informing it of the MN\'s current Care-of Address.',
                '<strong>Direct Tunneling:</strong> Once CN caches the binding in its local binding cache, CN tunnels future packets directly to the CoA, bypassing HA.',
                '<strong>Security Risk:</strong> Malicious nodes can spoof Binding Updates to hijack traffic (addressed in MIPv6 using Return Routability tests).',
                '<strong>Ingress Filtering Hazard:</strong> Visited network firewalls drop packets sent directly by MN if source IP is from foreign home network; solved via reverse tunneling.'
            ],
            `graph TD
    CN[Correspondent Node] -->|Standard: Long Path via Home| HA[Home Agent]
    HA -->|Tunnel| FA[Foreign Agent]
    FA --> MN[Mobile Node]
    CN -.->|Optimized Direct Route with Binding Cache| MN
    MN -->|Direct Return Path| CN
    style CN fill:#1e293b,stroke:#3b82f6,color:#fff
    style HA fill:#1e293b,stroke:#ef4444,color:#fff
    style MN fill:#1e293b,stroke:#10b981,color:#fff`,
            'Path latency comparison: $Latency_{optimized} = \\text{RTT}(CN, MN)$. In triangle routing: $Latency_{triangle} = \\text{RTT}(CN, HA) + \\text{RTT}(HA, MN)$.',
            [
                {
                    question: 'How does Route Optimization eliminate the Triangle Routing penalty in Mobile IP?',
                    options: [
                        'By making the Foreign Agent the permanent DNS authority',
                        'By providing a Binding Update to the Correspondent Node so it can tunnel packets directly to the Care-of Address',
                        'By shutting down the Home Agent permanently',
                        'By forcing all traffic over satellite links'
                    ],
                    answer: 1,
                    explanation: 'Binding Updates allow the Correspondent Node to cache the mobile node\'s Care-of Address and transmit directly.'
                }
            ]
        ),
        'cs702wmc-u4t4': createTopicEntry(
            'Dynamic Host Configuration Protocol (DHCP) for Mobile Devices',
            'DHCP (RFC 2131) automates the configuration of network parameters for mobile hosts entering a local subnet, allocating dynamic IP addresses, default gateway routes, and DNS server IPs.',
            [
                '<strong>DORA Transaction:</strong> Discover (broadcast), Offer (server unicast/broadcast), Request (client broadcast), Acknowledgment (server unicast/broadcast).',
                '<strong>Co-Located Care-of Address:</strong> In Mobile IP, an MN can use DHCP to acquire its own local IP address in the foreign network, eliminating the need for a separate Foreign Agent router.',
                '<strong>Lease Mechanism:</strong> Addresses are leased for a finite duration (e.g., 2 hours). Clients renew at $T_1 = 0.5 \\times \\text{LeaseTime}$ and $T_2 = 0.875 \\times \\text{LeaseTime}$.',
                '<strong>Relay Agents:</strong> DHCP Relay Agents allow a single centralized DHCP server to service multiple subnets across routers.',
                '<strong>IPv6 SLAAC alternative:</strong> Stateless Address Autoconfiguration (SLAAC) using router advertisements and EUI-64 MAC derivation.'
            ],
            `graph TD
    Client[Mobile Client] -->|1. DHCPDISCOVER: Broadcast 255.255.255.255| Server[DHCP Server]
    Server -->|2. DHCPOFFER: Proposed IP & Lease| Client
    Client -->|3. DHCPREQUEST: Accepts Offer Broadcast| Server
    Server -->|4. DHCPACK: Configuration Committed| Client
    style Client fill:#1e293b,stroke:#3b82f6,color:#fff
    style Server fill:#1e293b,stroke:#10b981,color:#fff`,
            'DHCP Port bindings: Client sends on UDP port <code>68</code>; Server listens on UDP port <code>67</code>.',
            [
                {
                    question: 'What is the correct 4-step message sequence in a standard DHCP address negotiation?',
                    options: ['Discover, Offer, Request, Acknowledge (DORA)', 'Request, Confirm, Bind, Release', 'Query, Response, Handshake, Connect', 'Syn, Syn-Ack, Ack, Fin'],
                    answer: 0,
                    explanation: 'DHCP follows the DORA sequence: Discover, Offer, Request, and Acknowledgment.'
                }
            ]
        )
    },
    'cs702wmc-u5': {
        'cs702wmc-u5t1': createTopicEntry(
            'TCP over Wireless: Packet Loss vs Congestion Misinterpretations',
            'Traditional TCP (Tahoe, Reno) was engineered for wired networks where bit errors are negligible ($< 10^{-9}$). When a packet is lost, TCP assumes network congestion, cuts its Congestion Window (cwnd) in half, and triggers slow-start.',
            [
                '<strong>The Fundamental Wireless Mismatch:</strong> Wireless channels have high bit error rates ($10^{-3}$) and frequent packet loss due to fading, handoffs, and interference—NOT buffer congestion.',
                '<strong>Performance Collapse:</strong> TCP misinterprets wireless noise as router congestion, throttling throughput to near-zero.',
                '<strong>Round Trip Time (RTT) Fluctuations:</strong> Variable wireless latencies cause spurious retransmission timeouts (RTO).',
                '<strong>Asymmetric Bandwidth:</strong> High downlink bandwidth with very slow uplink causes ACK compression and pacing stalls.',
                '<strong>Solutions:</strong> Split-TCP connections, Link-layer local ARQ retransmissions, explicit loss notification (ELN).'
            ],
            `graph LR
    PktLoss[Bit Error / Fade on RF Link] --> TCP[Standard TCP Reno Engine]
    TCP -->|Misdiagnoses as Router Congestion| Drop[Halves Congestion Window cwnd]
    Drop --> Crash[Drastic Throughput Degradation]
    style PktLoss fill:#1e293b,stroke:#ef4444,color:#fff
    style TCP fill:#1e293b,stroke:#3b82f6,color:#fff
    style Crash fill:#1e293b,stroke:#ef4444,color:#fff`,
            'TCP Reno throughput formula: $R \\le \\frac{MSS}{RTT \\sqrt{p}}$, where $p$ is packet loss rate. High wireless loss $p$ destroys throughput even when bandwidth is completely empty.',
            [
                {
                    question: 'Why does standard wired TCP perform poorly over wireless channels?',
                    options: [
                        'Wireless signals cannot transmit binary numbers',
                        'TCP misinterprets wireless transmission bit errors and fading losses as network router congestion, needlessly halving its transmission rate',
                        'TCP packets are too large for radio waves',
                        'Wireless networks do not support IP addresses'
                    ],
                    answer: 1,
                    explanation: 'TCP assumes all packet losses indicate buffer overflow congestion, needlessly throttling bandwidth when losses are actually caused by RF noise.'
                }
            ]
        ),
        'cs702wmc-u5t2': createTopicEntry(
            'Mobile TCP Variants: Indirect-TCP (I-TCP), Snooping TCP & M-TCP',
            'Specialized TCP extensions optimize transport performance across heterogeneous wired/wireless boundaries without breaking end-to-end semantics.',
            [
                '<strong>Indirect-TCP (I-TCP):</strong> Splits the connection into two at the Base Station: Fixed Host $\\leftrightarrow$ BS (Standard TCP), BS $\\leftrightarrow$ Mobile Host (Specialized wireless TCP).',
                '<strong>I-TCP Drawback:</strong> Violates end-to-end TCP semantics; BS sends ACK to sender before the mobile actually receives the data.',
                '<strong>Snooping TCP:</strong> Base station snoops on TCP packets and ACKs. If packet lost on wireless hop, BS retransmits locally without letting the wired sender know.',
                '<strong>Mobile-TCP (M-TCP):</strong> Designed for frequent handoff disconnections. Freezes sender by setting receiver window size to ZERO, preventing timeout backoff.',
                '<strong>Selective Repeat / SACK:</strong> Informs sender exactly which packets were lost in bursts, avoiding retransmitting successful packets.'
            ],
            `graph LR
    FH[Fixed Wired Host] <-->|Standard TCP Connection| BS[Base Station / Snooping Agent]
    BS <-->|Loss-Tolerant Wireless TCP| MH[Mobile Wireless Host]
    style FH fill:#1e293b,stroke:#3b82f6,color:#fff
    style BS fill:#1e293b,stroke:#f59e0b,color:#fff
    style MH fill:#1e293b,stroke:#10b981,color:#fff`,
            'M-TCP Zero Window Freeze: By advertising $w = 0$, sender enters persist mode: sending probes but halting all timeout exponential backoff until mobile reconnects.',
            [
                {
                    question: 'What is the main architectural criticism of Indirect-TCP (I-TCP)?',
                    options: [
                        'It increases battery drain on the mobile host',
                        'It breaks end-to-end TCP semantics because the base station acknowledges packets before they reach the mobile node',
                        'It cannot support IPv6',
                        'It requires fiber optic cabling to the mobile handset'
                    ],
                    answer: 1,
                    explanation: 'I-TCP violates end-to-end semantics by acknowledging delivery at the intermediate base station before the mobile node receives the packet.'
                }
            ]
        ),
        'cs702wmc-u5t3': createTopicEntry(
            'Mobile Ad-Hoc Networks (MANET): DSDV vs AODV & DSR Routing',
            'A MANET is an autonomous collection of mobile nodes forming a dynamic, multi-hop wireless network without pre-existing fixed infrastructure or central base stations.',
            [
                '<strong>Table-Driven (Proactive) Protocols:</strong> Continuous background updates. E.g., DSDV (Destination-Sequenced Distance-Vector). High control overhead.',
                '<strong>On-Demand (Reactive) Protocols:</strong> Routes discovered only when a source needs to send data. E.g., AODV, DSR.',
                '<strong>DSDV:</strong> Uses sequence numbers tagged to routing updates to prevent routing loops and count-to-infinity.',
                '<strong>AODV (Ad-Hoc On-Demand Distance Vector):</strong> Broadcasts RREQ (Route Request); nodes reply with RREP (Route Reply); uses RERR (Route Error) on broken links.',
                '<strong>DSR (Dynamic Source Routing):</strong> Employs Source Routing: entire list of intermediate hop addresses is embedded in the packet header.'
            ],
            `graph LR
    Src[Source Node S] -->|Broadcast RREQ| N1[Intermediate Node A]
    N1 -->|Forward RREQ| N2[Intermediate Node B]
    N2 -->|Forward RREQ| Dst[Destination Node D]
    Dst -->|Unicast RREP along reverse path| N2
    N2 --> N1
    N1 --> Src
    style Src fill:#1e293b,stroke:#3b82f6,color:#fff
    style Dst fill:#1e293b,stroke:#10b981,color:#fff
    style N1 fill:#1e293b,stroke:#f59e0b,color:#fff
    style N2 fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'AODV Loop Freedom: Enforced by destination sequence numbers. A route is preferred only if $SeqNum_{new} > SeqNum_{current}$ or ($SeqNum_{new} == SeqNum_{current}$ and $HopCount_{new} < HopCount_{current}$).',
            [
                {
                    question: 'In Mobile Ad-Hoc Networks, how does Dynamic Source Routing (DSR) differ fundamentally from AODV?',
                    options: [
                        'DSR uses table-driven routing, whereas AODV is reactive',
                        'DSR embeds the entire sequence of intermediate hop addresses inside every data packet header',
                        'DSR requires centralized satellite infrastructure',
                        'AODV cannot recover from broken links'
                    ],
                    answer: 1,
                    explanation: 'DSR utilizes source routing where the complete path of intermediate nodes is recorded directly into each data packet header.'
                }
            ]
        ),
        'cs702wmc-u5t4': createTopicEntry(
            'Wireless Sensor Networks (WSN) & Low-Power IoT (ZigBee, LoRaWAN)',
            'Wireless Sensor Networks (WSNs) and IoT protocols connect energy-constrained autonomous sensor nodes monitoring environmental and industrial telemetry.',
            [
                '<strong>Sensor Node Constraints:</strong> Finite battery energy, limited computational capacity, low memory (kilobytes), unreliable radio links.',
                '<strong>ZigBee (IEEE 802.15.4):</strong> Short-range (10-100m), low-rate (250 kbps), 2.4 GHz mesh topology for home automation and industrial telemetry.',
                '<strong>LoRaWAN:</strong> Long-Range Wide Area Network operating on sub-GHz ISM bands (868/915 MHz), Chirp Spread Spectrum (CSS), up to 15 km range, 10-year battery life.',
                '<strong>LEACH Protocol (Low-Energy Adaptive Clustering Hierarchy):</strong> Self-organizing clustering protocol where cluster heads rotate randomly to evenly distribute battery drain.',
                '<strong>Sleep Cycles:</strong> Nodes spend 99% of time in low-power sleep mode, waking periodically to sample sensors and transmit bursts.'
            ],
            `graph TD
    S1[Battery Sensor Node 1] -->|Short-Hop Wireless| CH[Cluster Head: LEACH Rotating]
    S2[Battery Sensor Node 2] -->|Short-Hop Wireless| CH
    S3[Battery Sensor Node 3] -->|Short-Hop Wireless| CH
    CH -->|High-Power Long Hop| Sink[Base Station / Cloud Sink]
    style CH fill:#1e293b,stroke:#f59e0b,color:#fff
    style Sink fill:#1e293b,stroke:#10b981,color:#fff
    style S1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style S2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style S3 fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'LEACH Cluster Head Probability: $T(n) = \\frac{p}{1 - p \\cdot (r \\pmod{\\frac{1}{p}})}$ for node $n \\in G$. Ensures every sensor takes turn acting as energy-intensive cluster head.',
            [
                {
                    question: 'What modulation technique does LoRaWAN utilize to achieve long-range communication (up to 15 km) with ultra-low battery consumption?',
                    options: ['Chirp Spread Spectrum (CSS)', 'Orthogonal Frequency Division Multiplexing (OFDM)', 'Quadrature Amplitude Modulation (QAM)', 'Pulse Code Modulation (PCM)'],
                    answer: 0,
                    explanation: 'LoRaWAN uses Chirp Spread Spectrum (CSS) modulation, which provides extreme sensitivity and noise immunity across long distances.'
                }
            ]
        )
    }
};

// Write CS-702 WMC
const fullPathWmc = path.join(__dirname, '../js/data_cs702-wmc.js');
fs.writeFileSync(fullPathWmc, `/**
 * Academy LMS - Auto-Generated Curriculum Data
 * Course: data_cs702-wmc.js
 */
window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, ${JSON.stringify(cs702wmcData, null, 4)});
`, 'utf8');
console.log('[SUCCESS] Wrote data_cs702-wmc.js');
