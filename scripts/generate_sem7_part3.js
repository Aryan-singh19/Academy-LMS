const fs = require('fs');
const path = require('path');

function createTopicEntry(title, intro, keyPoints, mermaidDiagram, formulaOrNote, quiz) {
    let content = `
<h3 class="text-2xl font-bold mb-4 text-blue-400">${title}</h3>
<p class="mb-4 text-slate-300 leading-relaxed">${intro}</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg">
        <h4 class="text-blue-300 font-bold mb-3 text-lg">Theoretical Foundations & Mechanics</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-emerald-500 shadow-lg">
        <h4 class="text-emerald-300 font-bold mb-3 text-lg">Exam Focus & Cryptanalytic / Field Practice</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
</div>
`;

    if (mermaidDiagram) {
        content += `
<h3 class="text-xl font-bold mb-2 text-blue-400">Cryptographic / Process Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
${mermaidDiagram}
</div>
`;
    }

    if (formulaOrNote) {
        content += `
<div class="bg-slate-900 border border-amber-500/30 rounded-xl p-5 mb-6 text-sm text-amber-200/90">
    <h4 class="font-bold text-amber-300 mb-2 flex items-center gap-2">
        <span>&#128221;</span> Exam Mathematical Derivation / Operational Blueprint
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
// CS-703 (A): CRYPTOGRAPHY & INFORMATION SECURITY
// -------------------------------------------------------------
const cs703cisData = {
    'cs703cis-u1': {
        'cs703cis-u1t1': createTopicEntry(
            'CIA Triad, Security Attacks (Passive vs Active) & Threat Models',
            'Information security safeguards data against unauthorized access, corruption, or denial. The foundational paradigm is the CIA Triad (Confidentiality, Integrity, Availability), extended by Authenticity, Non-repudiation, and Accountability.',
            [
                '<strong>Confidentiality:</strong> Preventing unauthorized reading of information (enforced by encryption, access controls).',
                '<strong>Integrity:</strong> Guaranteeing data cannot be modified, deleted, or fabricated without detection (enforced by hashes, digital signatures).',
                '<strong>Availability:</strong> Ensuring system services are accessible when requested by authorized entities (defended against DoS/DDoS).',
                '<strong>Passive Attacks:</strong> Eavesdropping, packet sniffing, traffic analysis; aim is to learn information without altering system resources.',
                '<strong>Active Attacks:</strong> Modification of messages, replay attacks, masquerading (spoofing), denial of service.'
            ],
            `graph TD
    Sec[Information Security] --> CIA[CIA Triad: Confidentiality, Integrity, Availability]
    Sec --> Attacks[Threat Landscape]
    Attacks --> Pass[Passive Attacks: Sniffing & Traffic Analysis]
    Attacks --> Act[Active Attacks: Replay, Masquerade, DoS]
    style CIA fill:#1e293b,stroke:#3b82f6,color:#fff
    style Pass fill:#1e293b,stroke:#f59e0b,color:#fff
    style Act fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Passive vs Active Defense: Passive attacks cannot be easily detected (since data is untouched), so focus is on PREVENTION (strong cryptography). Active attacks cannot be 100% prevented, so focus is on DETECTION and rapid recovery.',
            [
                {
                    question: 'Which of the following is classified as a Passive Attack?',
                    options: ['Denial of Service (DoS)', 'Replay Attack', 'Traffic Analysis / Eavesdropping', 'Message Alteration'],
                    answer: 2,
                    explanation: 'Traffic analysis observes message frequency and packet lengths without modifying data, making it a passive attack.'
                }
            ]
        ),
        'cs703cis-u1t2': createTopicEntry(
            'Substitution Ciphers: Caesar, Playfair, Monoalphabetic & Vigenère',
            'Classical substitution ciphers replace plaintext letters or blocks with alternate characters or symbols. They are categorized into monoalphabetic (single mapping) and polyalphabetic (multiple shifting alphabets).',
            [
                '<strong>Caesar Cipher:</strong> Simple shift cipher: $C = (P + k) \\pmod{26}$. Key space is only 26 (brute-forced instantly).',
                '<strong>Monoalphabetic Substitution:</strong> Arbitrary permutation of 26 letters ($26! \\approx 4 \\times 10^{26}$ keys). Broken easily via letter frequency analysis (E, T, A, O, I, N).',
                '<strong>Playfair Cipher:</strong> Digraph substitution using a $5 \\times 5$ matrix constructed from a keyword (I and J combined). 676 digraph pairs.',
                '<strong>Vigenère Cipher:</strong> Polyalphabetic cipher using repeated keyword letters as Caesar shifts: $C_i = (P_i + K_{i \\pmod m}) \\pmod{26}$.',
                '<strong>Kasiski Examination:</strong> Cryptanalytic method finding distances between repeated ciphertext patterns to deduce Vigenère key length $m$.'
            ],
            `graph LR
    P[Plaintext Digraph: 'HE'] --> Matrix[5x5 Playfair Key Matrix]
    Matrix -->|Same Row: Shift Right / Same Col: Shift Down / Rectangle: Swap Cols| C[Ciphertext Digraph: 'EC']
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style Matrix fill:#1e293b,stroke:#f59e0b,color:#fff
    style C fill:#1e293b,stroke:#10b981,color:#fff`,
            'Playfair Rules: (1) If letters in same row, replace with letters to immediate right (wrap around). (2) If in same column, replace with letters immediately below. (3) If at corners of rectangle, replace with letters in same row at opposite horizontal corner.',
            [
                {
                    question: 'What classical cryptanalytic technique is used to determine the key length of a Vigenère polyalphabetic cipher?',
                    options: ['Kasiski Examination', 'Frequency Analysis of single letters', 'Rainbow Table lookups', 'Known-IV attack'],
                    answer: 0,
                    explanation: 'The Kasiski test identifies common factors in the distances between repeated ciphertext n-grams to uncover the key length.'
                }
            ]
        ),
        'cs703cis-u1t3': createTopicEntry(
            'Transposition Ciphers: Rail Fence, Columnar & One-Time Pad',
            'Transposition ciphers preserve the identity of plaintext characters but permute their positional ordering. The Vernam One-Time Pad is the only mathematically unbreakable cipher.',
            [
                '<strong>Rail Fence Cipher:</strong> Plaintext is written in a zigzag diagonal wave across $d$ rails and read out row by row.',
                '<strong>Columnar Transposition:</strong> Plaintext written into a rectangle of fixed width; columns read out in order determined by an alphabetical keyword key.',
                '<strong>Double Transposition:</strong> Applying columnar transposition twice using different keys drastically scrambles positional bigram correlations.',
                '<strong>Vernam One-Time Pad (OTP):</strong> Plaintext bits XORed with an equal-length, truly random, non-repeating key: $C = P \\oplus K$.',
                '<strong>Information-Theoretic Security (Shannon 1949):</strong> OTP achieves perfect secrecy: $P(P = m \\mid C = c) = P(P = m)$. The ciphertext reveals zero statistical info about the message.'
            ],
            `graph LR
    P[Plaintext: 'ATTACK'] --> ZigZag[Rail Fence Wave across 2 Rails]
    ZigZag --> Row1['A T A']
    ZigZag --> Row2['T C K']
    Row1 & Row2 --> C[Ciphertext: 'ATATCK']
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style ZigZag fill:#1e293b,stroke:#f59e0b,color:#fff
    style C fill:#1e293b,stroke:#10b981,color:#fff`,
            'Three mandatory conditions for Perfect Secrecy (One-Time Pad): (1) Key length must equal message length $|K| = |P|$, (2) Key must be generated by truly random physical entropy, (3) Key must NEVER be reused.',
            [
                {
                    question: 'Why is the Vernam One-Time Pad considered mathematically unbreakable (perfect secrecy)?',
                    options: [
                        'It uses a 4096-bit prime number',
                        'Every possible plaintext of that length is equally probable given the ciphertext when the truly random key is used once',
                        'It requires quantum supercomputers to decrypt',
                        'The algorithm is proprietary and kept secret'
                    ],
                    answer: 1,
                    explanation: 'Claude Shannon proved that a one-time truly random key of equal length yields zero conditional statistical information, providing perfect secrecy.'
                }
            ]
        ),
        'cs703cis-u1t4': createTopicEntry(
            'Modular Arithmetic, Euclidean Algorithm & Extended GCD',
            'Modern cryptography relies on abstract algebra and number theory over finite rings $\\mathbb{Z}_n$ and fields $\\mathbb{F}_p$. Congruence arithmetic forms the backbone of public key systems.',
            [
                '<strong>Modular Congruence:</strong> $a \\equiv b \\pmod m \\iff m \\mid (a - b)$.',
                '<strong>Euclidean Algorithm:</strong> Rapidly computes Greatest Common Divisor $\\gcd(a, b)$ by repeated division: $\\gcd(a, b) = \\gcd(b, a \\pmod b)$. Runs in $O(\\log(\\min(a, b)))$ time.',
                '<strong>Extended Euclidean Algorithm:</strong> Finds integer coefficients $x$ and $y$ satisfying Bézout\'s identity: $ax + by = \\gcd(a, b)$.',
                '<strong>Modular Multiplicative Inverse:</strong> $a^{-1} \\pmod m$ exists IF AND ONLY IF $\\gcd(a, m) = 1$ (coprime). Computed as $x$ from Bézout: $ax \\equiv 1 \\pmod m$.',
                '<strong>Fundamental Theorem of Arithmetic:</strong> Every integer $n > 1$ has a unique prime factorization $n = p_1^{e_1} p_2^{e_2} \\dots p_k^{e_k}$.'
            ],
            `graph TD
    Step1["gcd(421, 111): 421 = 3 * 111 + 88"] --> Step2["gcd(111, 88): 111 = 1 * 88 + 23"]
    Step2 --> Step3["gcd(88, 23): 88 = 3 * 23 + 19"]
    Step3 --> Step4["gcd(23, 19): 23 = 1 * 19 + 4"]
    Step4 --> Step5["gcd(19, 4): 19 = 4 * 4 + 3"]
    Step5 --> Step6["gcd(4, 3): 4 = 1 * 3 + 1 -> gcd=1"]
    style Step1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style Step6 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Bézout\'s Identity for Modular Inverse: If $\\gcd(a, m) = 1$, then $ax + my = 1 \\implies ax \\equiv 1 \\pmod m$, meaning $a^{-1} \\equiv x \\pmod m$.',
            [
                {
                    question: 'Under what exact mathematical condition does an integer "a" possess a modular multiplicative inverse modulo "m"?',
                    options: ['a must be greater than m', 'gcd(a, m) must equal 1 (a and m are coprime)', 'm must be an even number', 'a must divide m without remainder'],
                    answer: 1,
                    explanation: 'A modular inverse exists if and only if gcd(a, m) = 1.'
                }
            ]
        ),
        'cs703cis-u1t5': createTopicEntry(
            'Fermat’s Little Theorem, Euler’s Totient & Chinese Remainder Theorem',
            'Advanced number-theoretic theorems underpin key generation and fast exponentiation in asymmetric cryptosystems like RSA and Diffie-Hellman.',
            [
                '<strong>Fermat’s Little Theorem (FLT):</strong> If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod p$. Consequently, $a^p \\equiv a \\pmod p$.',
                '<strong>Euler’s Totient Function $\\phi(n)$:</strong> Counts integers $1 \\le k \\le n$ that are coprime to $n$. For prime $p$, $\\phi(p) = p - 1$.',
                '<strong>Euler’s Totient for RSA Modulus ($n = pq$):</strong> If $p$ and $q$ are distinct primes, $\\phi(n) = (p-1)(q-1)$.',
                '<strong>Euler’s Generalization of FLT:</strong> If $\\gcd(a, n) = 1$, then $a^{\\phi(n)} \\equiv 1 \\pmod n$.',
                '<strong>Chinese Remainder Theorem (CRT):</strong> Solves simultaneous system of congruences $x \\equiv a_i \\pmod{m_i}$ with pairwise coprime moduli, speeding up RSA private key operations by $4\\times$.'
            ],
            `graph LR
    Input["System: x = a1 mod m1, x = a2 mod m2"] --> CRT[Compute M = m1 * m2]
    CRT --> Mi[Compute M1 = M/m1, M2 = M/m2]
    Mi --> Inv[Find Inverses: M1*y1 = 1 mod m1]
    Inv --> Sol["Unique Solution: x = (a1*M1*y1 + a2*M2*y2) mod M"]
    style Input fill:#1e293b,stroke:#3b82f6,color:#fff
    style Sol fill:#1e293b,stroke:#10b981,color:#fff`,
            'Euler\'s theorem proof of RSA correctness: If $ed \\equiv 1 \\pmod{\\phi(n)}$, then $ed = 1 + k\\phi(n)$. Therefore $C^d \\equiv (M^e)^d = M^{ed} = M^{1 + k\\phi(n)} = M \\cdot (M^{\\phi(n)})^k \\equiv M \\cdot 1^k \\equiv M \\pmod n$.',
            [
                {
                    question: 'What is the value of Euler\'s Totient function φ(n) for an RSA modulus n = 77 (where 77 = 7 × 11)?',
                    options: ['76', '70', '60', '18'],
                    answer: 2,
                    explanation: 'For n = p * q with distinct primes, φ(n) = (p - 1)(q - 1) = (7 - 1)(11 - 1) = 6 * 10 = 60.'
                }
            ]
        )
    },
    'cs703cis-u2': {
        'cs703cis-u2t1': createTopicEntry(
            'Feistel Cipher Architecture: Confusion, Diffusion & Round Keys',
            'Claude Shannon established two fundamental principles of modern symmetric cryptographic design: Confusion and Diffusion. Horst Feistel operationalized these into the Feistel Network structure.',
            [
                '<strong>Confusion:</strong> Obscures the relationship between the plaintext, ciphertext, and key (implemented via non-linear S-Boxes).',
                '<strong>Diffusion:</strong> Spreads the statistical influence of a single plaintext bit across many ciphertext bits (implemented via permutations and P-Boxes).',
                '<strong>Feistel Split:</strong> Divides block of size $2w$ into left and right halves: $(L_i, R_i)$.',
                '<strong>Round Function:</strong> $L_{i+1} = R_i$, $R_{i+1} = L_i \\oplus F(R_i, K_i)$.',
                '<strong>Reversibility:</strong> Decryption uses the EXACT SAME hardware circuit with round keys applied in reverse order ($K_{16}, K_{15}, \\dots, K_1$), regardless of whether round function $F$ is invertible!'
            ],
            `graph TD
    L0[Left Half: L_i] & R0[Right Half: R_i]
    R0 --> F[Round Function F with Key K_i]
    L0 --> XOR((XOR))
    F --> XOR
    XOR --> R1[Next R_{i+1}]
    R0 --> L1[Next L_{i+1}]
    style L0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style F fill:#1e293b,stroke:#f59e0b,color:#fff
    style L1 fill:#1e293b,stroke:#10b981,color:#fff
    style R1 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Avalanche Effect: A desirable property where changing a single bit in the plaintext or key causes approximately 50% of the ciphertext bits to flip after multiple rounds.',
            [
                {
                    question: 'Why is the Feistel cipher architecture particularly advantageous for hardware and software implementation?',
                    options: [
                        'It uses zero memory registers',
                        'The decryption process is identical to encryption, requiring round keys to be applied merely in reverse order',
                        'It does not require a secret key',
                        'It generates infinite keystreams'
                    ],
                    answer: 1,
                    explanation: 'Feistel networks guarantee invertibility using the exact same hardware/code circuit for both encryption and decryption.'
                }
            ]
        ),
        'cs703cis-u2t2': createTopicEntry(
            'Data Encryption Standard (DES): 16 Rounds, S-Boxes & 3DES',
            'Adopted in 1977 as FIPS PUB 46, DES was the dominant symmetric encryption standard for decades. It processes 64-bit plaintext blocks using a 56-bit effective key through 16 Feistel rounds.',
            [
                '<strong>Key Size:</strong> 64 bits total, but 8 bits are parity checks, yielding an effective key space of only $2^{56} \\approx 7.2 \\times 10^{16}$ keys.',
                '<strong>Initial & Final Permutations (IP / FP):</strong> Transposition operations that are exact inverses of each other ($FP = IP^{-1}$).',
                '<strong>S-Boxes (Substitution Boxes):</strong> 8 non-linear S-Boxes; each takes 6 input bits and produces 4 output bits. The ONLY non-linear step in DES!',
                '<strong>Key Schedule:</strong> 56-bit key undergoes Permuted Choice 1 (PC-1), split into two 28-bit halves, left-shifted by 1 or 2 bits per round, compressed to 48-bit subkeys via PC-2.',
                '<strong>Triple DES (3DES):</strong> EDE mode: $C = E_{K3}(D_{K2}(E_{K1}(P)))$ provides 112 or 168-bit security to defend against Meet-in-the-Middle attacks.'
            ],
            `graph LR
    P[64-bit Plaintext] --> IP[Initial Permutation IP]
    IP --> Rounds[16 Feistel Rounds with 48-bit Subkeys]
    Rounds --> Swap[32-bit Half Swap]
    Swap --> FP[Final Inverse Permutation FP]
    FP --> C[64-bit Ciphertext]
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style Rounds fill:#1e293b,stroke:#f59e0b,color:#fff
    style C fill:#1e293b,stroke:#10b981,color:#fff`,
            'Meet-in-the-Middle on 2DES: Why $2^{112}$ keys collapse to $2^{57}$ operations: compute table of $E_{K1}(P)$ for all $2^{56}$ keys and match against $D_{K2}(C)$. Hence 3DES requires 3 executions (EDE).',
            [
                {
                    question: 'How many effective key bits does single Data Encryption Standard (DES) possess after stripping parity bits?',
                    options: ['48 bits', '56 bits', '64 bits', '128 bits'],
                    answer: 1,
                    explanation: 'DES takes a 64-bit input key, but 8 bits are discarded for parity, leaving an effective 56-bit key.'
                }
            ]
        ),
        'cs703cis-u2t3': createTopicEntry(
            'Advanced Encryption Standard (AES): SubBytes, ShiftRows, MixColumns',
            'Standardized in 2001 (FIPS 197) to replace broken DES, AES is based on the Rijndael algorithm designed by Joan Daemen and Vincent Rijmen. Unlike DES, AES is NOT a Feistel cipher; it is a Substitution-Permutation Network (SPN) operating on an entire $4 \\times 4$ byte state matrix.',
            [
                '<strong>Block Size:</strong> Fixed 128 bits (16 bytes). Key lengths: 128 bits (10 rounds), 192 bits (12 rounds), 256 bits (14 rounds).',
                '<strong>SubBytes:</strong> Non-linear byte substitution using a Rijndael S-Box derived from multiplicative inverses in finite field $GF(2^8)$ followed by affine transformation.',
                '<strong>ShiftRows:</strong> Circular byte shifting of matrix rows: Row 0 shifted 0 bytes, Row 1 shifted 1 byte, Row 2 shifted 2 bytes, Row 3 shifted 3 bytes.',
                '<strong>MixColumns:</strong> Matrix multiplication of state columns over $GF(2^8)$ modulo irreducible polynomial $m(x) = x^8 + x^4 + x^3 + x + 1$. Omitted in final round!',
                '<strong>AddRoundKey:</strong> Bitwise XOR of the $4 \\times 4$ state matrix with the 128-bit round key expanded from the master key.'
            ],
            `graph TD
    State[128-bit State 4x4 Matrix] --> SB[1. SubBytes: Non-linear S-Box GF 2^8]
    SB --> SR[2. ShiftRows: Byte Rotations]
    SR --> MC[3. MixColumns: Matrix Multiply GF 2^8 *Omitted in Round 10]
    MC --> ARK[4. AddRoundKey: XOR with Expanded Round Key]
    ARK --> Next[Next Round State]
    style State fill:#1e293b,stroke:#3b82f6,color:#fff
    style SB fill:#1e293b,stroke:#f59e0b,color:#fff
    style SR fill:#1e293b,stroke:#10b981,color:#fff
    style MC fill:#1e293b,stroke:#8b5cf6,color:#fff
    style ARK fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Decryption in AES: Requires inverse transformations: <code>InvShiftRows</code>, <code>InvSubBytes</code>, <code>InvMixColumns</code>, and <code>AddRoundKey</code>, which use different polynomial matrices in $GF(2^8)$.',
            [
                {
                    question: 'Which of the four transformations in an AES round is omitted in the very final round of encryption?',
                    options: ['SubBytes', 'ShiftRows', 'MixColumns', 'AddRoundKey'],
                    answer: 2,
                    explanation: 'MixColumns is omitted in the final round of AES to make the decryption structure symmetrical.'
                }
            ]
        ),
        'cs703cis-u2t4': createTopicEntry(
            'Block Cipher Modes of Operation: ECB, CBC, CFB, OFB & CTR',
            'Block ciphers process fixed-size blocks (e.g., 128 bits). Modes of operation govern how longer sequences of arbitrary length are processed securely.',
            [
                '<strong>ECB (Electronic Codebook):</strong> Each block encrypted independently: $C_i = E_K(P_i)$. FATAL FLAW: Identical plaintext blocks produce identical ciphertext blocks (reveals patterns, e.g., the ECB Penguin).',
                '<strong>CBC (Cipher Block Chaining):</strong> Previous ciphertext block is XORed with current plaintext: $C_i = E_K(P_i \\oplus C_{i-1})$. Requires a random Initialization Vector ($IV$). Bit errors in transmission corrupt 2 blocks.',
                '<strong>CFB (Cipher Feedback):</strong> Turns block cipher into self-synchronizing stream cipher: $C_i = P_i \\oplus E_K(C_{i-1})$.',
                '<strong>OFB (Output Feedback):</strong> Synchronous stream cipher: keystream generated independently of plaintext by looping $O_i = E_K(O_{i-1})$.',
                '<strong>CTR (Counter Mode):</strong> Encrypts sequential counter values: $C_i = P_i \\oplus E_K(Nonce \\parallel i)$. Allows high-speed parallel processing and random read access.'
            ],
            `graph TD
    subgraph CBC[CBC Mode Encryption]
        P1[Plaintext Block 1] --> XOR1((XOR))
        IV[Random IV] --> XOR1
        XOR1 --> E1[AES Encrypt]
        E1 --> C1[Ciphertext Block 1]
        C1 --> XOR2((XOR))
        P2[Plaintext Block 2] --> XOR2
        XOR2 --> E2[AES Encrypt]
        E2 --> C2[Ciphertext Block 2]
    end
    style CBC fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'GCM (Galois/Counter Mode): Combines Counter Mode (CTR) encryption with Galois field authentication hash (GHASH) to provide high-speed Authenticated Encryption with Associated Data (AEAD).',
            [
                {
                    question: 'Why is Electronic Codebook (ECB) mode strictly prohibited for encrypting confidential structured data and images?',
                    options: [
                        'It requires 4096-bit keys',
                        'Identical plaintext blocks produce identical ciphertext blocks, preserving visual and structural patterns',
                        'It can only run on quantum computers',
                        'It alters the length of the plaintext randomly'
                    ],
                    answer: 1,
                    explanation: 'ECB lacks diffusion across blocks; identical plaintext blocks encrypt to identical ciphertext blocks, leaking structural information.'
                }
            ]
        ),
        'cs703cis-u2t5': createTopicEntry(
            'Stream Ciphers: RC4 Keystream Generation & LFSR',
            'Stream ciphers encrypt plaintext digits one at a time with a pseudorandom keystream sequence: $C_i = P_i \\oplus K_i$. They require minimal memory and zero padding latency.',
            [
                '<strong>LFSR (Linear Feedback Shift Register):</strong> Hardware shift register where input bit is a linear function (XOR) of previous state taps determined by a primitive feedback polynomial.',
                '<strong>RC4 (Rivest Cipher 4):</strong> Byte-oriented stream cipher with a 256-byte state array $S[0 \\dots 255]$ permuted dynamically.',
                '<strong>Key-Scheduling Algorithm (KSA):</strong> Initializes $S[i] = i$, then permutes $S$ using secret key of length 40-2048 bits.',
                '<strong>Pseudo-Random Generation Algorithm (PRGA):</strong> Generates output keystream byte $K$ by swapping elements of $S$: $K = S[(S[i] + S[j]) \\pmod{256}]$.',
                '<strong>RC4 Vulnerabilities (Fluhrer-Mantin-Shamir attack):</strong> Biased first bytes in output keystream broke WEP Wi-Fi encryption; RC4 is now deprecated in TLS (RFC 7465).'
            ],
            `graph LR
    Key[Variable Key: 40-256 bits] --> KSA[Key Scheduling Algorithm KSA: Permutes S[0..255]]
    KSA --> PRGA[PRGA Keystream Generator]
    PRGA --> Byte[Keystream Byte K]
    Plain[Plaintext Byte P] --> XOR((XOR))
    Byte --> XOR
    XOR --> Cipher[Ciphertext Byte C]
    style Key fill:#1e293b,stroke:#3b82f6,color:#fff
    style PRGA fill:#1e293b,stroke:#f59e0b,color:#fff
    style XOR fill:#1e293b,stroke:#10b981,color:#fff`,
            'LFSR Maximum Period: An $n$-stage LFSR achieves maximum sequence period $2^n - 1$ (m-sequence) if and only if its feedback polynomial $P(x)$ is primitive over $GF(2)$.',
            [
                {
                    question: 'What famous stream cipher developed by Ron Rivest was broken in WEP Wi-Fi security due to keystream biases and key-reuse vulnerabilities?',
                    options: ['AES-GCM', 'ChaCha20', 'RC4', 'DES'],
                    answer: 2,
                    explanation: 'RC4 had systematic keystream biases in its early bytes that allowed attackers to recover WEP keys within minutes.'
                }
            ]
        )
    },
    'cs703cis-u3': {
        'cs703cis-u3t1': createTopicEntry(
            'Public Key Principles: One-Way Trapdoor Functions & Number Theory',
            'Proposed by Diffie and Hellman in 1976, asymmetric cryptography solved the symmetric key distribution crisis. Every entity possesses two keys: a Public Key (distributed openly) and a Private Key (kept strictly secret).',
            [
                '<strong>One-Way Function:</strong> A function $y = f(x)$ that is easy to compute in polynomial time $O(n^k)$, but computationally infeasible to invert ($x = f^{-1}(y)$ takes exponential time).',
                '<strong>Trapdoor One-Way Function:</strong> An asymmetric one-way function that is trivial to invert IF AND ONLY IF special side-information (the "trapdoor" private key) is known.',
                '<strong>Confidentiality via Asymmetric:</strong> Sender encrypts with Receiver\'s Public Key: $C = E_{PU_B}(M)$. Only Receiver\'s Private Key can decrypt: $M = D_{PR_B}(C)$.',
                '<strong>Authentication / Signature:</strong> Sender signs with their Private Key: $S = E_{PR_A}(M)$. Anyone can verify with Sender\'s Public Key: $M = D_{PU_A}(S)$.',
                '<strong>Computational Overhead:</strong> Asymmetric operations are 1,000x slower than symmetric ciphers; modern protocols use hybrid encryption (asymmetric encrypts a symmetric session key).'
            ],
            `graph LR
    Plain[Plaintext Message M] --> Enc[Encrypt with Bob's Public Key PU_B]
    Enc --> Cipher[Ciphertext C]
    Cipher --> Dec[Decrypt with Bob's Private Key PR_B]
    Dec --> RecPlain[Recovered Plaintext M]
    style Plain fill:#1e293b,stroke:#3b82f6,color:#fff
    style Enc fill:#1e293b,stroke:#f59e0b,color:#fff
    style Dec fill:#1e293b,stroke:#10b981,color:#fff`,
            'Mathematical difficulty foundations: RSA relies on the Integer Factorization Problem; Diffie-Hellman & DSA rely on the Discrete Logarithm Problem; ECC relies on the Elliptic Curve Discrete Logarithm Problem.',
            [
                {
                    question: 'What mathematical construct makes public-key encryption possible by being easy to compute forward but impossible to reverse without secret side-information?',
                    options: ['Hash collision algorithm', 'Trapdoor One-Way Function', 'Linear Feedback Shift Register', 'Parity generator'],
                    answer: 1,
                    explanation: 'A Trapdoor One-Way function is easy to calculate in one direction but intractable to reverse unless the trapdoor private key is known.'
                }
            ]
        ),
        'cs703cis-u3t2': createTopicEntry(
            'RSA Cryptosystem: Key Generation, Encryption, Proof & Factoring Attacks',
            'Published in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, RSA is the most widely deployed asymmetric algorithm. Its security rests on the computational intractability of factoring large semi-primes.',
            [
                '<strong>Key Generation Step 1:</strong> Select two large distinct primes $p$ and $q$ (typically 1024 to 2048 bits each).',
                '<strong>Key Generation Step 2:</strong> Compute modulus $n = pq$ and Euler\'s totient $\\phi(n) = (p-1)(q-1)$.',
                '<strong>Key Generation Step 3:</strong> Choose public exponent $e$ such that $1 < e < \\phi(n)$ and $\\gcd(e, \\phi(n)) = 1$ (commonly $e = 65537 = 2^{16}+1$).',
                '<strong>Key Generation Step 4:</strong> Compute private exponent $d$ such that $ed \\equiv 1 \\pmod{\\phi(n)}$ using Extended Euclidean Algorithm.',
                '<strong>Encryption & Decryption:</strong> Ciphertext $C = M^e \\pmod n$; Recovered message $M = C^d \\pmod n$.'
            ],
            `graph TD
    Primes["Select large primes p, q"] --> Mod["Compute n = p*q and phi(n) = (p-1)*(q-1)"]
    Mod --> Exp["Pick e coprime to phi(n)"]
    Exp --> Inv["Compute d = e^(-1) mod phi(n)"]
    Inv --> Pub["Public Key: {e, n}"]
    Inv --> Priv["Private Key: {d, n}"]
    style Primes fill:#1e293b,stroke:#3b82f6,color:#fff
    style Pub fill:#1e293b,stroke:#10b981,color:#fff
    style Priv fill:#1e293b,stroke:#ef4444,color:#fff`,
            'OAEP Padding Requirement: Textbook RSA ($C = M^e \\pmod n$) is deterministic and vulnerable to Wiener\'s attack and Chosen Ciphertext Attacks. Real-world RSA mandates Optimal Asymmetric Encryption Padding (RSA-OAEP, PKCS #1).',
            [
                {
                    question: 'Given small RSA primes p = 3 and q = 11, with public exponent e = 7, what is the private decryption key d?',
                    options: ['d = 3', 'd = 5', 'd = 7', 'd = 13'],
                    answer: 0,
                    explanation: 'n = 33, φ(n) = (3-1)(11-1) = 20. We need e * d ≡ 1 mod 20 -> 7 * d ≡ 1 mod 20. Since 7 * 3 = 21 ≡ 1 mod 20, d = 3.'
                }
            ]
        ),
        'cs703cis-u3t3': createTopicEntry(
            'Diffie-Hellman Key Exchange: Discrete Logarithm & MITM Attack',
            'The Diffie-Hellman protocol allows two communicating parties to establish a shared secret key over an insecure public channel without sending the secret itself.',
            [
                '<strong>Global Parameters:</strong> Large prime $q$ and primitive root $\\alpha \\pmod q$.',
                '<strong>Alice\'s Actions:</strong> Generates private key $X_A < q$; transmits public value $Y_A = \\alpha^{X_A} \\pmod q$.',
                '<strong>Bob\'s Actions:</strong> Generates private key $X_B < q$; transmits public value $Y_B = \\alpha^{X_B} \\pmod q$.',
                '<strong>Shared Secret Computation:</strong> Alice computes $K = (Y_B)^{X_A} \\pmod q$; Bob computes $K = (Y_A)^{X_B} \\pmod q$. Both reach identical $K = \\alpha^{X_A X_B} \\pmod q$.',
                '<strong>Man-in-the-Middle (MITM) Flaw:</strong> Unauthenticated DH is vulnerable to an active attacker who intercepts public values and establishes separate keys with Alice and Bob. Defended via digital certificates.'
            ],
            `graph LR
    Alice[Alice: Private X_A] -->|Sends Y_A = a^X_A mod q| Bob[Bob: Private X_B]
    Bob -->|Sends Y_B = a^X_B mod q| Alice
    Alice -->|Computes K = Y_B^X_A mod q| KeyA[Shared Key K]
    Bob -->|Computes K = Y_A^X_B mod q| KeyB[Shared Key K]
    style Alice fill:#1e293b,stroke:#3b82f6,color:#fff
    style Bob fill:#1e293b,stroke:#3b82f6,color:#fff
    style KeyA fill:#1e293b,stroke:#10b981,color:#fff
    style KeyB fill:#1e293b,stroke:#10b981,color:#fff`,
            'Discrete Logarithm Problem (DLP): Given prime $q$, generator $\\alpha$, and $Y = \\alpha^X \\pmod q$, finding the exponent $X = \\text{dlog}_{\\alpha, q}(Y)$ is computationally intractable for 2048-bit primes.',
            [
                {
                    question: 'Why is basic unauthenticated Diffie-Hellman key exchange vulnerable to a Man-in-the-Middle (MITM) attack?',
                    options: [
                        'The prime number q is kept secret',
                        'It lacks cryptographic identity authentication; Alice and Bob cannot verify who sent the public keys',
                        'It uses symmetric encryption keys',
                        'It only functions over satellite links'
                    ],
                    answer: 1,
                    explanation: 'Diffie-Hellman does not authenticate participant identities, allowing an attacker in the middle to impersonate both ends.'
                }
            ]
        ),
        'cs703cis-u3t4': createTopicEntry(
            'Elliptic Curve Cryptography (ECC) & ElGamal Cryptosystem',
            'Elliptic Curve Cryptography (ECC) delivers security equivalent to RSA with vastly smaller key sizes, dramatically accelerating handshakes and reducing mobile power consumption.',
            [
                '<strong>Weierstrass Equation:</strong> $y^2 = x^3 + ax + b \\pmod p$, where $4a^3 + 27b^2 \\not\\equiv 0 \\pmod p$ to prevent singular cusps.',
                '<strong>Point Addition & Point Doubling:</strong> Geometric chord-and-tangent rule defining an abelian group over the curve with point at infinity $\\mathcal{O}$.',
                '<strong>Scalar Multiplication:</strong> $Q = kP$ (adding base point $P$ to itself $k$ times using Double-and-Add).',
                '<strong>ECDLP (Elliptic Curve Discrete Log Problem):</strong> Given points $P$ and $Q = kP$, it is exponentially hard to determine scalar $k$.',
                '<strong>Key Size Superiority:</strong> A 256-bit ECC key offers equivalent cryptographic strength to a 3072-bit RSA key!'
            ],
            `graph LR
    P[Base Generator Point G] -->|Scalar Multiply with Private d| Pub[Public Key Point Q = d * G]
    Pub -->|ECDLP: Infeasible to reverse for d| Secret[Private Scalar d]
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style Pub fill:#1e293b,stroke:#10b981,color:#fff
    style Secret fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Key size comparison for 128-bit symmetric security level: AES = 128 bits, RSA = 3072 bits, ECC = 256 bits (NIST P-256 or Curve25519).',
            [
                {
                    question: 'Approximately how large must an RSA key be to offer equivalent cryptographic security to a 256-bit Elliptic Curve (ECC) key?',
                    options: ['512 bits', '1024 bits', '3072 bits', '16384 bits'],
                    answer: 2,
                    explanation: 'A 256-bit ECC key provides roughly 128 bits of security, equivalent to a 3072-bit RSA key.'
                }
            ]
        )
    },
    'cs703cis-u4': {
        'cs703cis-u4t1': createTopicEntry(
            'Cryptographic Hash Properties: Preimage & Collision Resistance',
            'A cryptographic hash function takes an arbitrary-length message and compresses it into a fixed-length digest $h = H(M)$. It serves as a digital fingerprint for message integrity.',
            [
                '<strong>Fixed Output Length:</strong> Any input size maps to exact $n$-bit digest (e.g., 256 bits for SHA-256).',
                '<strong>Preimage Resistance (One-Way):</strong> Given digest $h$, it is computationally infeasible to find message $M$ such that $H(M) = h$ (cost $2^n$).',
                '<strong>Second Preimage Resistance (Weak Collision):</strong> Given message $M_1$, it is infeasible to find a different message $M_2$ such that $H(M_1) = H(M_2)$ (cost $2^n$).',
                '<strong>Collision Resistance (Strong Collision):</strong> It is infeasible to find ANY pair of distinct messages $(M_1, M_2)$ such that $H(M_1) = H(M_2)$ (cost $2^{n/2}$).',
                '<strong>Avalanche Effect:</strong> Flipping one bit in the input message completely randomizes over 50% of the output digest bits.'
            ],
            `graph TD
    Msg1["Input: 'Hello World'"] --> SHA[SHA-256 Engine]
    Msg2["Input: 'hello World'"] --> SHA
    SHA --> Dig1["Digest 1: a591a6d40bf420404..."]
    SHA --> Dig2["Digest 2: 7f83b1657ff1fc53b... Completely Different"]
    style SHA fill:#1e293b,stroke:#f59e0b,color:#fff
    style Dig1 fill:#1e293b,stroke:#10b981,color:#fff
    style Dig2 fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'Birthday Paradox Collision Bound: Due to the birthday problem, finding ANY hash collision among $N = 2^n$ possibilities requires only $\\sqrt{N} = 2^{n/2}$ hash evaluations. Thus an $n=128$-bit hash (MD5) yields only 64 bits of collision security!',
            [
                {
                    question: 'According to the Birthday Paradox, how many operations are required to find a collision in an n-bit cryptographic hash function?',
                    options: ['2^n', '2^(n/2)', 'n^2', 'n!'],
                    answer: 1,
                    explanation: 'The birthday attack allows finding a collision in approximately 2^(n/2) operations.'
                }
            ]
        ),
        'cs703cis-u4t2': createTopicEntry(
            'Secure Hash Algorithm: SHA-256 Architecture & Merkle-Damgård',
            'SHA-2 (Secure Hash Algorithm 2) was designed by the NSA and standardized by NIST in FIPS 180-4. It uses the Merkle-Damgård iterative compression construction.',
            [
                '<strong>Padding:</strong> Appends a single \'1\' bit, followed by \'0\' bits, and ending with a 64-bit big-endian representation of message length, making total length a multiple of 512 bits.',
                '<strong>State Registers:</strong> Eight 32-bit working variables $(A, B, C, D, E, F, G, H)$ initialized with fractional parts of square roots of first 8 primes.',
                '<strong>Message Schedule:</strong> 512-bit block expanded into 64 words $W_0 \\dots W_{63}$ using rotation and shift operations.',
                '<strong>64 Compression Rounds:</strong> Employs bitwise non-linear functions: Ch (Choice), Maj (Majority), and summation shifts $\\Sigma_0, \\Sigma_1$.',
                '<strong>Davies-Meyer Feedforward:</strong> Round outputs are added back to the previous chaining state: $H_i = H_{i-1} + State_{final}$, preventing invertibility.'
            ],
            `graph LR
    Block[512-bit Message Block M_i] --> Exp[Expand to 64 Words W_t]
    Exp --> Comp[64 Compression Rounds with Constants K_t]
    PrevH[Previous Hash State H_{i-1}] --> Comp
    Comp --> Add((+ Word Addition))
    PrevH --> Add
    Add --> NextH[Next Hash State H_i]
    style Block fill:#1e293b,stroke:#3b82f6,color:#fff
    style Comp fill:#1e293b,stroke:#f59e0b,color:#fff
    style Add fill:#1e293b,stroke:#10b981,color:#fff`,
            'SHA-256 Majority and Choice functions: $\\text{Maj}(x, y, z) = (x \\land y) \\oplus (x \\land z) \\oplus (y \\land z)$; $\\text{Ch}(x, y, z) = (x \\land y) \\oplus (\\neg x \\land z)$.',
            [
                {
                    question: 'What is the block size of the input data chunks processed in each iteration of SHA-256?',
                    options: ['128 bits', '256 bits', '512 bits', '1024 bits'],
                    answer: 2,
                    explanation: 'SHA-256 pads input data and processes it in 512-bit iterative blocks.'
                }
            ]
        ),
        'cs703cis-u4t3': createTopicEntry(
            'Message Authentication Codes (HMAC) & Birthday Paradox Attacks',
            'Hash functions alone provide integrity but NOT authenticity; an attacker in the middle can alter a message and recompute its plain hash. A Message Authentication Code (MAC) binds message integrity to a secret key.',
            [
                '<strong>MAC Concept:</strong> Cryptographic checksum computed with a shared secret key: $T = \\text{MAC}(K, M)$.',
                '<strong>Flaw of Naive Hashing:</strong> Simply computing $H(K \\parallel M)$ is vulnerable to Length Extension Attacks in Merkle-Damgård constructions.',
                '<strong>HMAC (RFC 2104):</strong> Nested construction: $\\text{HMAC}(K, M) = H((K^+ \\oplus \\text{opad}) \\parallel H((K^+ \\oplus \\text{ipad}) \\parallel M))$.',
                '<strong>Pads in HMAC:</strong> $\\text{ipad} = \\text{0x36}$ repeated to block size; $\\text{opad} = \\text{0x5C}$ repeated to block size.',
                '<strong>Provable Security:</strong> Bellare proved HMAC is secure as long as the underlying compression function is a pseudorandom function (PRF).'
            ],
            `graph TD
    Key[Secret Key K] --> Pad1[XOR with ipad: 0x36]
    Key --> Pad2[XOR with opad: 0x5C]
    Pad1 --> HashInner[Inner Hash: H Key XOR ipad || Message]
    Pad2 --> HashOuter[Outer Hash: H Key XOR opad || InnerHash]
    HashOuter --> HMAC[Final HMAC Tag]
    style Key fill:#1e293b,stroke:#3b82f6,color:#fff
    style HashInner fill:#1e293b,stroke:#f59e0b,color:#fff
    style HashOuter fill:#1e293b,stroke:#10b981,color:#fff`,
            'Length Extension Defense: By executing a second outer hash pass with $K^+ \\oplus \\text{opad}$, HMAC strips the internal state exposure, preventing attackers from appending unauthenticated data.',
            [
                {
                    question: 'Why is simple concatenation H(Key || Message) dangerous for message authentication?',
                    options: [
                        'It causes CPU overheating',
                        'It is vulnerable to Length Extension Attacks in Merkle-Damgård hash architectures',
                        'It produces an output that cannot be decoded',
                        'It cannot work over TCP/IP'
                    ],
                    answer: 1,
                    explanation: 'Merkle-Damgård hashes allow an attacker who knows H(K || M) and length of M to append new data without knowing the key (Length Extension Attack).'
                }
            ]
        ),
        'cs703cis-u4t4': createTopicEntry(
            'Digital Signatures: RSA Signatures, DSA & ECDSA Verification',
            'Digital signatures provide the electronic equivalent of a physical signature, establishing Authenticity, Integrity, and Non-Repudiation (the signer cannot deny having signed the message).',
            [
                '<strong>Signature Generation:</strong> Signer hashes message $h = H(M)$, then encrypts digest with their private key: $S = \\text{Sign}(PR_A, h)$.',
                '<strong>Signature Verification:</strong> Verifier decrypts $S$ using signer\'s public key to obtain $h\' = \\text{Verify}(PU_A, S)$, compares against independent hash $H(M)$.',
                '<strong>DSA (Digital Signature Algorithm):</strong> Based on discrete logarithm problem; generates signature pair $(r, s)$ using random nonce $k$.',
                '<strong>Critical Nonce Vulnerability:</strong> In DSA/ECDSA, if the random nonce $k$ is reused even ONCE across two signatures, an attacker can mathematically recover the signer\'s private key!',
                '<strong>ECDSA:</strong> Elliptic curve variant adopted across cryptocurrency blockchains (Bitcoin secp256k1) and secure TLS handshakes.'
            ],
            `graph TD
    M[Document Message M] --> Hash[SHA-256 Hash]
    Hash --> Sign[Sign with Signer Private Key PR_A]
    Sign --> Sig[Digital Signature S]
    Sig --> Net[Transmit Message + Signature S]
    Net --> Ver[Verify with Signer Public Key PU_A]
    Hash2[Compute SHA-256 of Received M] --> Comp{Digests Match?}
    Ver --> Comp
    Comp -->|Yes| Valid[Valid Signature: Authentic & Non-repudiated]
    Comp -->|No| Reject[Signature Invalid / Tampered]
    style Sign fill:#1e293b,stroke:#f59e0b,color:#fff
    style Valid fill:#1e293b,stroke:#10b981,color:#fff
    style Reject fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Sony PS3 Root Key Disaster: Sony used a fixed constant instead of a random nonce $k$ in their ECDSA signature generator, allowing hackers to compute the master private signing key: $d = \\frac{s_1 k - z_1}{r} \\pmod n$.',
            [
                {
                    question: 'What catastrophic security consequence occurs in DSA and ECDSA if the ephemeral nonce "k" is repeated across two different message signatures?',
                    options: [
                        'The hash algorithm crashes',
                        'The signer\'s private secret key can be directly solved and recovered',
                        'The signature file size increases by 400%',
                        'The message is decrypted into plaintext publicly'
                    ],
                    answer: 1,
                    explanation: 'Reusing or predicting the random nonce k in DSA/ECDSA allows algebra to expose the signer\'s private key.'
                }
            ]
        ),
        'cs703cis-u4t5': createTopicEntry(
            'Public Key Infrastructure (PKI): X.509 Certificates & Trust Chains',
            'Public Key Infrastructure (PKI) binds public keys to real-world identities (people, companies, domains) through digitally signed certificates issued by trusted Certificate Authorities (CAs).',
            [
                '<strong>X.509 Standard:</strong> Specifies format for digital identity certificates: Version, Serial Number, Issuer Name, Validity Period, Subject Name, Subject Public Key Info, CA Signature.',
                '<strong>Certificate Authority (CA):</strong> Trusted third party (Let\'s Encrypt, DigiCert) that validates domain ownership and signs certificates with its private key.',
                '<strong>Chain of Trust:</strong> End-Entity Certificate $\\to$ Intermediate CA Certificate $\\to$ Root CA Certificate (stored in browser/OS trust store).',
                '<strong>Revocation Mechanisms:</strong> CRL (Certificate Revocation List) and OCSP (Online Certificate Status Protocol) + OCSP Stapling.',
                '<strong>Certificate Transparency (CT):</strong> Public append-only cryptographic logs (Merkle trees) recording all issued certificates to audit Rogue CAs.'
            ],
            `graph TD
    Root[Root CA: Self-Signed in Browser Trust Store] -->|Signs| Inter[Intermediate CA Certificate]
    Inter -->|Signs| Leaf[Leaf SSL Certificate: google.com]
    Leaf --> Browser[Client Browser Validates Full Path]
    style Root fill:#1e293b,stroke:#ef4444,color:#fff
    style Inter fill:#1e293b,stroke:#f59e0b,color:#fff
    style Leaf fill:#1e293b,stroke:#10b981,color:#fff`,
            'OCSP Stapling: Eliminates privacy leak and CA latency by requiring the web server to periodically query the CA for a signed timestamped OCSP response and "staple" it directly into the TLS handshake.',
            [
                {
                    question: 'How does a web browser verify that an SSL/TLS certificate presented by a website is genuine and untampered?',
                    options: [
                        'By contacting the website administrator via email',
                        'By verifying the digital signature of the issuing Certificate Authority against its built-in Root CA trust store',
                        'By checking if the IP address contains numbers',
                        'By reversing the MD5 checksum'
                    ],
                    answer: 1,
                    explanation: 'The browser validates the cryptographic signature chain leading up to a trusted Root CA pre-installed in the OS/browser trust store.'
                }
            ]
        )
    },
    'cs703cis-u5': {
        'cs703cis-u5t1': createTopicEntry(
            'Transport Layer Security: SSL/TLS Handshake & Session Keys',
            'Transport Layer Security (TLS 1.3 - RFC 8446) secures communications over TCP. It authenticates server and client endpoints, negotiates cryptographic suites, and encrypts traffic.',
            [
                '<strong>TLS 1.2 vs 1.3:</strong> TLS 1.3 reduced handshake latency from 2-RTT to 1-RTT (and 0-RTT resumption), and completely deprecated obsolete ciphers (RC4, DES, 3DES, MD5, SHA-1).',
                '<strong>ClientHello:</strong> Client advertises supported cipher suites, key shares (Diffie-Hellman public parameters), and SNI (Server Name Indication).',
                '<strong>ServerHello:</strong> Server selects cipher suite, returns its key share, server certificate, and finished verification tag.',
                '<strong>Forward Secrecy (PFS):</strong> Ephemeral Diffie-Hellman (ECDHE) generates fresh session keys for every connection; if server private key is stolen years later, historical recordings cannot be decrypted.',
                '<strong>Record Protocol:</strong> Segments, compresses (disabled to avoid CRIME/BREACH), and encrypts data using AEAD ciphers (AES-GCM or ChaCha20-Poly1305).'
            ],
            `graph LR
    Client -->|1. ClientHello: Supported Ciphers + Key Share| Server
    Server -->|2. ServerHello: Selected Cipher + Key Share + Cert| Client
    Client -->|3. Finished & Encrypted HTTP Request| Server
    Server -->|4. Finished & Encrypted HTTP Response| Client
    style Client fill:#1e293b,stroke:#3b82f6,color:#fff
    style Server fill:#1e293b,stroke:#10b981,color:#fff`,
            'Perfect Forward Secrecy condition: Session keys must be derived from ephemeral keys ($K = \\text{HKDF}(\\alpha^{ab} \\pmod q)$) that are permanently erased from RAM after the session terminates.',
            [
                {
                    question: 'What crucial security property ensures that past recorded encrypted communications cannot be decrypted even if the server\'s private key is compromised in the future?',
                    options: ['Non-Repudiation', 'Perfect Forward Secrecy (PFS)', 'Zero-Knowledge Proof', 'Role-Based Access Control'],
                    answer: 1,
                    explanation: 'Perfect Forward Secrecy generates temporary ephemeral session keys that prevent retrospective decryption of recorded traffic.'
                }
            ]
        ),
        'cs703cis-u5t2': createTopicEntry(
            'IPSec Protocol Suite: AH vs ESP, Tunnel Mode vs Transport Mode',
            'IP Security (IPSec) is a framework of open standards developed by the IETF to provide secure communications at the IP network layer (OSI Layer 3), securing all traffic transparently across Virtual Private Networks (VPNs).',
            [
                '<strong>Authentication Header (AH - Protocol 51):</strong> Provides data integrity and origin authentication, but NO encryption (confidentiality). Authenticates IP header fields.',
                '<strong>Encapsulating Security Payload (ESP - Protocol 50):</strong> Provides confidentiality (encryption), integrity, authentication, and anti-replay protection.',
                '<strong>Transport Mode:</strong> Only the IP payload (data) is encrypted/authenticated; original IP header is preserved. Used for end-to-end host-to-host communication.',
                '<strong>Tunnel Mode:</strong> The ENTIRE original IP packet (header + payload) is encrypted and nested inside a brand-new outer IP packet. Used for Gateway-to-Gateway (VPN) tunnels.',
                '<strong>Security Association (SA):</strong> Simplex (one-way) logical connection parameterized by SPI (Security Parameter Index), Destination IP, and Security Protocol.'
            ],
            `graph TD
    subgraph Tunnel[IPSec Tunnel Mode ESP Packet]
        NewIP[New Outer IP Header: VPN Gateway IPs]
        ESPH[ESP Header: SPI & Sequence]
        EncOrig[Encrypted: Original Inner IP Header + TCP + Payload]
        ESPT[ESP Trailer: Padding]
        Auth[ESP Auth: Integrity ICV HMAC]
    end
    style Tunnel fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'NAT Traversal (NAT-T): AH breaks through NAT routers because NAT modifies the IP header (violating AH integrity). ESP with UDP encapsulation on port 4500 is mandated to pass through NAT.',
            [
                {
                    question: 'Which IPSec mode encrypts the entire original IP packet and prepends a new outer IP header for gateway-to-gateway VPN tunnels?',
                    options: ['Transport Mode', 'Tunnel Mode', 'Bridge Mode', 'Pass-through Mode'],
                    answer: 1,
                    explanation: 'Tunnel Mode encrypts both the original IP header and payload, enclosing them inside a new outer IP header.'
                }
            ]
        ),
        'cs703cis-u5t3': createTopicEntry(
            'Kerberos Authentication Architecture: KDC, AS, TGS & Tickets',
            'Kerberos (RFC 4120) is a network authentication protocol based on symmetric key cryptography using a trusted third-party Key Distribution Center (KDC). It allows single sign-on (SSO) across enterprise networks.',
            [
                '<strong>Authentication Server (AS):</strong> Authenticates the user and issues a Ticket Granting Ticket (TGT) encrypted with the TGS master secret.',
                '<strong>Ticket Granting Server (TGS):</strong> Validates user\'s TGT and issues a Service Ticket (ST) for specific target application servers (e.g., file server).',
                '<strong>Ticket Granting Ticket (TGT):</strong> Contains user identity, session key, and timestamp; prevents user from re-entering password for every service.',
                '<strong>Replay Attack Defense:</strong> Employs Authenticators containing current timestamp; KDC rejects authenticators where $|T_{client} - T_{server}| > 5$ minutes.',
                '<strong>Clock Synchronization:</strong> Strict dependency on NTP (Network Time Protocol) to prevent replay of captured tickets.'
            ],
            `graph LR
    Client[Client] -->|1. Request TGT| AS[Authentication Server]
    AS -->|2. Return TGT + Session Key| Client
    Client -->|3. Present TGT for Service Ticket| TGS[Ticket Granting Server]
    TGS -->|4. Return Service Ticket| Client
    Client -->|5. Present Service Ticket| Server[Target File / Web Server]
    Server -->|6. Authenticated Access| Client
    style Client fill:#1e293b,stroke:#3b82f6,color:#fff
    style AS fill:#1e293b,stroke:#f59e0b,color:#fff
    style TGS fill:#1e293b,stroke:#10b981,color:#fff
    style Server fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Kerberos TGT Decryption Secret: The TGT can only be decrypted by the TGS because it is encrypted under $K_{TGS}$. The client cannot modify its identity inside the ticket.',
            [
                {
                    question: 'Why does Kerberos authentication mandate synchronized system clocks (typically within 5 minutes) across the network?',
                    options: [
                        'To schedule daily automated backups',
                        'To validate timestamped authenticators and defeat replay attacks',
                        'To calculate the speed of network cables',
                        'To rotate SSL certificates'
                    ],
                    answer: 1,
                    explanation: 'Kerberos uses timestamps in tickets to limit their validity window and prevent captured packets from being replayed.'
                }
            ]
        ),
        'cs703cis-u5t4': createTopicEntry(
            'Firewalls (Stateful / Proxy), DMZ & Intrusion Detection (IDS/IPS)',
            'Perimeter defenses monitor and filter traffic entering private corporate networks. Layered defense incorporates packet inspection firewalls, Demilitarized Zones (DMZs), and intrusion detection systems.',
            [
                '<strong>Packet Filtering Firewall (Stateless):</strong> Filters packets based strictly on Layer 3/4 headers (Src/Dst IP, Src/Dst Port, Protocol flag) without session context.',
                '<strong>Stateful Inspection Firewall:</strong> Maintains a dynamic state table tracking established TCP connections (SYN, ACK, FIN); only permits incoming packets matching an active outbound session.',
                '<strong>Application Proxy Firewall (Layer 7):</strong> Terminates client connection, inspects full application payload (HTTP, FTP) for malicious commands, and initiates separate connection to backend.',
                '<strong>Demilitarized Zone (DMZ):</strong> Subnet positioned between untrusted Internet and internal private network hosting public-facing servers (Web, Mail).',
                '<strong>IDS vs IPS:</strong> Intrusion Detection Systems (IDS - passive alert) vs Intrusion Prevention Systems (IPS - inline active packet dropping).'
            ],
            `graph LR
    Internet((Public Internet)) --> FW1[External Firewall]
    FW1 --> DMZ[DMZ: Public Web & Mail Servers]
    DMZ --> FW2[Internal Stateful Firewall]
    FW2 --> LAN[Protected Corporate LAN / Core DBs]
    style Internet fill:#1e293b,stroke:#ef4444,color:#fff
    style DMZ fill:#1e293b,stroke:#f59e0b,color:#fff
    style LAN fill:#1e293b,stroke:#10b981,color:#fff`,
            'Signature-based vs Anomaly-based IDS: Signature matching detects known CVE exploits with zero false positives; Anomaly detection trains machine learning baselines to catch novel zero-day exploits.',
            [
                {
                    question: 'What is the key functional advantage of a Stateful Inspection Firewall over a traditional Stateless Packet Filter?',
                    options: [
                        'It tracks ongoing connection state in a dynamic session table, allowing return traffic only for legitimate established connections',
                        'It requires zero electricity',
                        'It eliminates the need for IP addresses',
                        'It performs automatic hard drive defragmentation'
                    ],
                    answer: 0,
                    explanation: 'Stateful firewalls maintain connection state tables, automatically allowing inbound packets that correspond to verified outbound requests.'
                }
            ]
        )
    }
};

// -------------------------------------------------------------
// CS-703 (B): DISASTER MANAGEMENT
// -------------------------------------------------------------
const cs703dmData = {
    'cs703dm-u1': {
        'cs703dm-u1t1': createTopicEntry(
            'Core Concepts: Hazards, Risks, Vulnerability & Capacity Equation',
            'Disaster management is the systematic process of organizing and managing resources and responsibilities for dealing with all humanitarian aspects of emergencies. Understanding disaster dynamics begins with clarifying foundational terminology.',
            [
                '<strong>Hazard:</strong> A dangerous physical event, human activity, or condition that may cause loss of life, injury, property damage, or environmental destruction.',
                '<strong>Vulnerability:</strong> The characteristics and circumstances of a community, system, or asset that make it susceptible to the damaging effects of a hazard.',
                '<strong>Capacity:</strong> The combination of all strengths, attributes, and resources available within a community that can be used to manage and reduce disaster risks.',
                '<strong>Disaster:</strong> A serious disruption of the functioning of a community exceeding its ability to cope using its own resources: $\\text{Disaster} = \\text{Hazard} \\times \\text{Vulnerability}$.',
                '<strong>The Risk Equation:</strong> Quantifies disaster exposure mathematically.'
            ],
            `graph LR
    H[Hazard: Natural or Manmade Trigger] --> Inter((Interaction))
    V[Vulnerability: Physical, Social, Economic] --> Inter
    Inter --> Risk[Disaster Risk]
    Cap[Capacity: Resources, Early Warning, Planning] -.->|Mitigates / Divides| Risk
    style H fill:#1e293b,stroke:#ef4444,color:#fff
    style V fill:#1e293b,stroke:#f59e0b,color:#fff
    style Cap fill:#1e293b,stroke:#10b981,color:#fff
    style Risk fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'The Disaster Risk Equation: $\\text{Risk} = \\frac{\\text{Hazard} \\times \\text{Vulnerability}}{\\text{Capacity}}$. Disasters are NOT natural; hazards are natural events, but disasters occur only when hazards impact vulnerable human systems lacking adequate capacity.',
            [
                {
                    question: 'In disaster management, which formula accurately represents Disaster Risk?',
                    options: [
                        'Risk = (Hazard × Vulnerability) / Capacity',
                        'Risk = Hazard + Vulnerability + Capacity',
                        'Risk = Capacity / (Hazard × Vulnerability)',
                        'Risk = Hazard × Temperature × Speed'
                    ],
                    answer: 0,
                    explanation: 'Disaster Risk is directly proportional to Hazard and Vulnerability, and inversely proportional to coping Capacity.'
                }
            ]
        ),
        'cs703dm-u1t2': createTopicEntry(
            'Natural Hazards: Earthquakes, Floods, Cyclones, Tsunamis & Drought',
            'Natural hazards originate from geological, meteorological, hydrological, or biological phenomena occurring in the earth\'s geophysical systems.',
            [
                '<strong>Earthquakes:</strong> Sudden release of stored elastic strain energy along tectonic fault lines; measured by Magnitude (Richter / Moment Magnitude $M_w$, energy release) and Intensity (Modified Mercalli, observed surface damage).',
                '<strong>Floods:</strong> Inundation caused by prolonged rainfall, cloudbursts, dam breaches, or storm surges; flash floods characterize rapid mountain runoff.',
                '<strong>Tropical Cyclones:</strong> Intense low-pressure atmospheric vortex systems fueled by warm sea-surface temperatures ($> 26.5^\\circ\\text{C}$); Coriolis force imparts rotational spin.',
                '<strong>Tsunamis:</strong> Long-wavelength sea waves triggered by submarine tectonic earthquakes, underwater landslides, or volcanic eruptions; travel at 700-800 km/h in deep ocean.',
                '<strong>Drought:</strong> Slow-onset creeping disaster categorized into Meteorological (rainfall deficit), Hydrological (surface/groundwater depletion), and Agricultural (crop failure).'
            ],
            `graph TD
    Hazards[Natural Hazard Categories] --> Geo[Geological: Earthquakes, Tsunamis, Landslides]
    Hazards --> Hydro[Hydrometeorological: Floods, Cyclones, Cloudbursts, Droughts]
    Hazards --> Bio[Biological: Pandemics, Pest Infestations]
    style Hazards fill:#1e293b,stroke:#3b82f6,color:#fff
    style Geo fill:#1e293b,stroke:#ef4444,color:#fff
    style Hydro fill:#1e293b,stroke:#f59e0b,color:#fff
    style Bio fill:#1e293b,stroke:#10b981,color:#fff`,
            'Earthquake Energy Scaling: Each increase of 1 on the Richter/Moment scale represents a $\\approx 31.6\\times$ increase in radiated seismic energy: $\\log_{10} E = 4.8 + 1.5 M_w$.',
            [
                {
                    question: 'What physical sea-surface condition is mandatory to initiate and sustain tropical cyclones?',
                    options: [
                        'Water temperature strictly below 10°C',
                        'Warm sea surface temperature exceeding approximately 26.5°C with sufficient Coriolis force',
                        'Zero atmospheric humidity',
                        'Deep ocean seismic fault lines'
                    ],
                    answer: 1,
                    explanation: 'Tropical cyclones require sea surface temperatures of at least 26.5°C over a depth of ~50 meters to provide convective latent heat energy.'
                }
            ]
        ),
        'cs703dm-u1t3': createTopicEntry(
            'Anthropogenic Disasters: Industrial Leaks, Chemical & Nuclear Events',
            'Anthropogenic (man-made) disasters result from technological or industrial accidents, infrastructure collapses, human negligence, or malicious warfare.',
            [
                '<strong>CBRN Threats:</strong> Chemical, Biological, Radiological, and Nuclear emergencies.',
                '<strong>Bhopal Gas Tragedy (1984):</strong> World\'s worst industrial disaster; water contamination triggered exothermic runaway reaction in storage tank, releasing 40 tonnes of toxic Methyl Isocyanate (MIC).',
                '<strong>Chernobyl (1986) & Fukushima (2011):</strong> Level 7 International Nuclear Event Scale (INES) accidents; reactor core meltdown and containment breach releasing iodine-131 and cesium-137.',
                '<strong>Infrastructure Failures:</strong> Bridge collapses, dam failures (Morbi 1979), urban fires, and mine inundations.',
                '<strong>Cyber-Physical Sabotage:</strong> Malware attacks against SCADA systems controlling electric power grids, water purification, and nuclear centrifuges (e.g., Stuxnet).'
            ],
            `graph TD
    Ind[Industrial / Anthropogenic Risks] --> Chem[Chemical: Toxic Gas Releases MIC, Chlorine]
    Ind --> Nuc[Nuclear: Core Meltdown, Radiation Release]
    Ind --> Inf[Structural: Dam Breaches, Bridge Collapses]
    Ind --> Cyber[Cyber-Physical: Grid Blackouts, SCADA Sabotage]
    style Ind fill:#1e293b,stroke:#3b82f6,color:#fff
    style Chem fill:#1e293b,stroke:#ef4444,color:#fff
    style Nuc fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'INES Scale: International Nuclear Event Scale ranges from 1 (Anomaly) to 7 (Major Accident). Only Chernobyl and Fukushima Daiichi have been rated level 7.',
            [
                {
                    question: 'What highly toxic chemical compound was accidentally released during the 1984 Bhopal Gas Tragedy in India?',
                    options: ['Sulphur Dioxide', 'Methyl Isocyanate (MIC)', 'Carbon Monoxide', 'Nitrous Oxide'],
                    answer: 1,
                    explanation: 'The Bhopal disaster was caused by the release of Methyl Isocyanate (MIC) gas from the Union Carbide pesticide plant.'
                }
            ]
        ),
        'cs703dm-u1t4': createTopicEntry(
            'Climate Change, Deforestation & Environmental Amplifiers',
            'Human-induced environmental degradation alters the planetary energy balance, increasing both the frequency and severity of extreme weather events.',
            [
                '<strong>Global Warming Drivers:</strong> Atmospheric greenhouse gas concentrations ($CO_2, CH_4$) trapping thermal radiation; average global temperature rise $> 1.1^\\circ\\text{C}$.',
                '<strong>Sea Level Rise:</strong> Thermal expansion of ocean water combined with glacial ice sheet melting; exacerbates coastal storm surges and saltwater intrusion.',
                '<strong>Deforestation & Landslides:</strong> Clearing tree roots on steep hill slopes destabilizes soil shear strength, triggering catastrophic mudslides during heavy monsoons.',
                '<strong>Wetland & Mangrove Loss:</strong> Destruction of natural mangrove buffers (Sundarbans) magnifies wave energy impacts of tropical cyclones on coastal towns.',
                '<strong>Urban Heat Islands (UHI):</strong> Dense concrete and asphalt replacing vegetation elevates urban temperatures by 3-5°C, multiplying heatwave mortalities.'
            ],
            `graph LR
    GHG[Greenhouse Emissions] --> Temp[Global Temperature Increase]
    Temp --> Extr[Extreme Weather: Megadroughts, Cyclones]
    Temp --> Ice[Glacial Melting & Sea Level Rise]
    Ice & Extr --> Dis[Amplified Disaster Losses & Climate Refugees]
    style GHG fill:#1e293b,stroke:#ef4444,color:#fff
    style Temp fill:#1e293b,stroke:#f59e0b,color:#fff
    style Dis fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'Clausius-Clapeyron Relation: For every $1^\\circ\\text{C}$ of atmospheric warming, the air\'s water-holding capacity increases by approximately $7\\%$, supercharging intense rainfall and cloudbursts.',
            [
                {
                    question: 'According to the Clausius-Clapeyron atmospheric relation, approximately how much does the water-holding capacity of air increase per 1°C of warming?',
                    options: ['1%', '7%', '25%', '50%'],
                    answer: 1,
                    explanation: 'The atmosphere holds approximately 7% more moisture per 1°C rise in temperature, leading to more extreme precipitation events.'
                }
            ]
        )
    },
    'cs703dm-u2': {
        'cs703dm-u2t1': createTopicEntry(
            'The Complete Cycle: Pre-Disaster, During & Post-Disaster Phases',
            'Disaster management is not an ad-hoc emergency reaction; it is a continuous cycle of interconnected phases designed to minimize human and economic losses.',
            [
                '<strong>Pre-Disaster Phase (Risk Reduction):</strong> Prevention, Mitigation, and Preparedness before a hazard event occurs.',
                '<strong>During Disaster Phase (Crisis Management):</strong> Early warning dissemination, search and rescue, evacuation, emergency medical triage, relief supplies.',
                '<strong>Post-Disaster Phase (Recovery):</strong> Damage assessment, debris clearance, rehabilitation, and long-term resilient reconstruction.',
                '<strong>Paradigm Shift:</strong> Global policy shifted from traditional "post-disaster relief and compensation" to proactive "pre-disaster mitigation and preparedness".',
                '<strong>Interconnectedness:</strong> Quality of reconstruction dictates resilience against the next cyclical hazard.'
            ],
            `graph TD
    subgraph Cycle[Disaster Management Continuum]
        Prev[1. Prevention & Mitigation] --> Prep[2. Preparedness & Early Warning]
        Prep --> Event((Hazard Strike))
        Event --> Resp[3. Emergency Response & Relief]
        Resp --> Rec[4. Rehabilitation & Reconstruction]
        Rec --> Prev
    end
    style Prev fill:#1e293b,stroke:#10b981,color:#fff
    style Prep fill:#1e293b,stroke:#3b82f6,color:#fff
    style Event fill:#1e293b,stroke:#ef4444,color:#fff
    style Resp fill:#1e293b,stroke:#f59e0b,color:#fff
    style Rec fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Cost-Benefit of Pre-Disaster Mitigation: The World Bank estimates that every $1 invested in disaster preparedness and hazard mitigation saves $4 to $7 in emergency response and recovery costs.',
            [
                {
                    question: 'Which of the following activities belongs strictly to the Pre-Disaster phase of the disaster management continuum?',
                    options: ['Medical triage', 'Search and rescue', 'Hazard zoning and mock evacuation drills', 'Debris removal'],
                    answer: 2,
                    explanation: 'Hazard zoning, building code enforcement, and mock drills are proactive pre-disaster preparedness and mitigation measures.'
                }
            ]
        ),
        'cs703dm-u2t2': createTopicEntry(
            'Prevention, Mitigation & Preparedness: Zoning & Building Codes',
            'Pre-disaster risk reduction measures aim to prevent new risks and reduce existing vulnerabilities. Structural and non-structural interventions build baseline community resilience.',
            [
                '<strong>Prevention:</strong> Outright avoidance of adverse hazard impacts (e.g., prohibiting human settlements inside active floodways).',
                '<strong>Mitigation:</strong> Lessening or limiting the adverse impact of hazards that cannot be fully prevented.',
                '<strong>Structural Mitigation:</strong> Engineered dams, sea walls, earthquake-resistant retrofitting (base isolators, cross-bracing), safe rooms.',
                '<strong>Non-Structural Mitigation:</strong> Land-use zoning laws, building codes (IS 1893 seismic code in India), insurance schemes, mangrove reforestation.',
                '<strong>Preparedness:</strong> Developing emergency response plans, stockpiling medical supplies, installing siren networks, community training.'
            ],
            `graph TD
    Mitigation[Disaster Mitigation Strategies] --> Struct[Structural: Base Isolation, Levees, Sea Walls]
    Mitigation --> NonStruct[Non-Structural: Seismic Building Codes, Land Zoning, Public Training]
    style Mitigation fill:#1e293b,stroke:#3b82f6,color:#fff
    style Struct fill:#1e293b,stroke:#10b981,color:#fff
    style NonStruct fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Indian Seismic Zoning Map: India is divided into 4 seismic zones: Zone II (Low), Zone III (Moderate), Zone IV (Severe, e.g., Delhi), and Zone V (Very Severe, e.g., Himalayas, Kutch, NE India). Zone I was abolished.',
            [
                {
                    question: 'Under the Indian Standard seismic code (IS 1893), how many active seismic zones is the country divided into?',
                    options: ['2 zones', '4 zones (Zones II, III, IV, V)', '6 zones', '10 zones'],
                    answer: 1,
                    explanation: 'India is divided into 4 seismic zones: Zone II, Zone III, Zone IV, and Zone V (Zone I was merged into Zone II).'
                }
            ]
        ),
        'cs703dm-u2t3': createTopicEntry(
            'Emergency Response, Search & Rescue, Incident Command & Triage',
            'Immediate post-disaster response operates in high-stress, chaotic environments with destroyed communications. Standardized command structures and medical prioritization save maximum lives during the "Golden Hour".',
            [
                '<strong>Golden Hour:</strong> The first 60 minutes following severe trauma where prompt medical intervention yields highest survival rates.',
                '<strong>Incident Command System (ICS):</strong> Standardized on-scene emergency management organizational structure: Incident Commander, Operations, Planning, Logistics, and Finance/Admin.',
                '<strong>Search and Rescue (SAR):</strong> Specialized canine units, acoustic life detectors, thermal cameras, and hydraulic cutting tools.',
                '<strong>START Triage (Simple Triage and Rapid Treatment):</strong> Color-coded tag system sorting mass casualties within 30 seconds per victim.',
                '<strong>Triage Colors:</strong> Black (Deceased/Expectant), Red (Immediate life-threatening), Yellow (Delayed serious), Green (Minor "walking wounded").'
            ],
            `graph TD
    ICS[Incident Commander] --> Ops[Operations Section: Field SAR & Medical]
    ICS --> Plan[Planning Section: Situation Reports & Maps]
    ICS --> Log[Logistics Section: Food, Fuel, Transports]
    ICS --> Fin[Finance & Admin: Contracts & Tracking]
    style ICS fill:#1e293b,stroke:#ef4444,color:#fff
    style Ops fill:#1e293b,stroke:#10b981,color:#fff
    style Plan fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'START Triage RPM criteria: Check Respiration (> 30/min $\\to$ RED), Perfusion (Radial pulse absent or Capillary refill > 2s $\\to$ RED), Mental Status (Cannot follow simple commands $\\to$ RED).',
            [
                {
                    question: 'In disaster medical triage (START protocol), what does a RED tag signify?',
                    options: ['Deceased or non-salvageable', 'Immediate life-threatening emergency requiring priority transport', 'Minor cuts (walking wounded)', 'Uninjured spectator'],
                    answer: 1,
                    explanation: 'A RED tag indicates immediate high-priority casualties whose airway, breathing, or circulation requires urgent hospital intervention.'
                }
            ]
        ),
        'cs703dm-u2t4': createTopicEntry(
            'Rehabilitation, Reconstruction & "Building Back Better" (BBB)',
            'Recovery restores community life after emergency needs are met. The internationally recognized "Build Back Better" principle ensures that rebuilt infrastructure is more resilient than it was prior to the disaster.',
            [
                '<strong>Short-Term Relief:</strong> Temporary shelter, clean drinking water, sanitation facilities to prevent waterborne epidemic outbreaks (cholera).',
                '<strong>Medium-Term Rehabilitation:</strong> Psycho-social counseling, restoring electric grids, schools, livelihoods, micro-credit loans.',
                '<strong>Long-Term Reconstruction:</strong> Permanent engineered housing, disaster-resilient roads, hospitals, and communication towers.',
                '<strong>Build Back Better (BBB):</strong> Utilizing disaster recovery to integrate disaster risk reduction into development, preventing recreation of past vulnerabilities.',
                '<strong>Owner-Driven Reconstruction (ODR):</strong> Involving local homeowners in rebuilding decisions with technical financial assistance, yielding higher satisfaction than contractor-driven housing.'
            ],
            `graph LR
    Relief[Emergency Relief: Tents & Water] --> Rehab[Rehabilitation: Psychosocial & Utilities]
    Rehab --> Recon[Reconstruction: Resilient Infrastructure]
    Recon --> BBB[Build Back Better: Stronger than Pre-Disaster State]
    style Relief fill:#1e293b,stroke:#ef4444,color:#fff
    style Rehab fill:#1e293b,stroke:#f59e0b,color:#fff
    style Recon fill:#1e293b,stroke:#3b82f6,color:#fff
    style BBB fill:#1e293b,stroke:#10b981,color:#fff`,
            'Sendai Framework Priority 4: "Enhancing disaster preparedness for effective response, and to \'Build Back Better\' in recovery, rehabilitation and reconstruction."',
            [
                {
                    question: 'What is the core philosophy of the "Build Back Better" (BBB) reconstruction principle?',
                    options: [
                        'To rebuild identical structures using the cheapest available materials',
                        'To integrate disaster risk reduction into recovery so the community is significantly more resilient than before the hazard',
                        'To demolish undamaged historical monuments',
                        'To relocate entire populations to different countries'
                    ],
                    answer: 1,
                    explanation: 'Build Back Better uses the post-disaster window to incorporate structural and institutional resilience into new construction.'
                }
            ]
        )
    },
    'cs703dm-u3': {
        'cs703dm-u3t1': createTopicEntry(
            'Disaster Risk Assessment (DRA) Framework & Matrix',
            'Disaster Risk Assessment (DRA) is a quantitative and qualitative methodology to identify the nature, location, and potential scale of disaster consequences across time and space.',
            [
                '<strong>Step 1 - Hazard Identification:</strong> Mapping frequency, intensity, return periods (e.g., 100-year flood level), and historical footprints.',
                '<strong>Step 2 - Exposure Analysis:</strong> Inventorying population, buildings, roads, hospitals, and economic assets situated within hazard zones.',
                '<strong>Step 3 - Vulnerability Analysis:</strong> Calculating fragility curves that estimate percentage damage for a given hazard intensity.',
                '<strong>Risk Matrix:</strong> $5 \\times 5$ grid plotting Hazard Probability vs Consequence Severity to rank risks into Low, Medium, High, and Extreme.',
                '<strong>Risk Treatment Strategies:</strong> Risk Avoidance (zoning), Risk Reduction (mitigation), Risk Transfer (disaster insurance/catastrophe bonds), Risk Retention.'
            ],
            `graph TD
    Haz[Hazard Analysis: Frequency & Footprint] --> Exposure[Exposure Mapping: Assets in Zone]
    Exposure --> Vuln[Vulnerability & Fragility Curves]
    Vuln --> Matrix[Risk Matrix: Probability vs Impact]
    Matrix --> Treat[Risk Treatment: Mitigate, Transfer, Retain]
    style Haz fill:#1e293b,stroke:#3b82f6,color:#fff
    style Exposure fill:#1e293b,stroke:#f59e0b,color:#fff
    style Matrix fill:#1e293b,stroke:#ef4444,color:#fff
    style Treat fill:#1e293b,stroke:#10b981,color:#fff`,
            'Quantitative Risk Calculation: $Risk = \\sum_{i} P(H_i) \\times \\text{Exposure}_i \\times \\text{Vulnerability}_i$, expressed as Expected Annualized Loss (EAL) in economic terms.',
            [
                {
                    question: 'In disaster risk financing, what mechanism transfers catastrophic disaster losses to financial markets through insurance bonds?',
                    options: ['Micro-credit loans', 'Catastrophe (Cat) Bonds', 'Emergency relief food rations', 'Deficit currency printing'],
                    answer: 1,
                    explanation: 'Catastrophe Bonds (Cat Bonds) transfer specific catastrophic hazard risks from governments/insurers directly to institutional capital markets.'
                }
            ]
        ),
        'cs703dm-u3t2': createTopicEntry(
            'Vulnerability Profiling: Physical, Economic, Social & Ecological',
            'Vulnerability is multidimensional. It is determined by social, economic, physical, and environmental factors which increase the susceptibility of an individual or system to the impacts of hazards.',
            [
                '<strong>Physical Vulnerability:</strong> Poor engineering, unreinforced masonry (URM), brittle concrete, lack of drainage, proximity to fault lines or shorelines.',
                '<strong>Social Vulnerability:</strong> Marginalization based on age (children, elderly), gender, disability, poverty, language barriers, literacy.',
                '<strong>Economic Vulnerability:</strong> Single-livelihood dependency (daily wage laborers, subsistence fishermen), lack of savings, absence of insurance.',
                '<strong>Environmental Vulnerability:</strong> Deforested slopes, depleted aquifers, loss of mangroves, degraded ecosystems.',
                '<strong>Compound Disasters:</strong> Cascading failures where an initial earthquake triggers a tsunami, which triggers nuclear power station meltdowns (Fukushima 2011).'
            ],
            `graph TD
    Vuln[Vulnerability Dimensions] --> Phys[Physical: Unreinforced Masonry, Floodplain Siting]
    Vuln --> Soc[Social: Elderly, Poverty, Marginalized Communities]
    Vuln --> Econ[Economic: Livelihood Fragility, No Insurance]
    Vuln --> Eco[Ecological: Mangrove Loss, Soil Erosion]
    style Vuln fill:#1e293b,stroke:#3b82f6,color:#fff
    style Phys fill:#1e293b,stroke:#ef4444,color:#fff
    style Soc fill:#1e293b,stroke:#f59e0b,color:#fff
    style Econ fill:#1e293b,stroke:#10b981,color:#fff
    style Eco fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Social Vulnerability Index (SoVI): Synthesizes socioeconomic Census indicators into a single score using Principal Component Analysis to guide targeted disaster aid distribution.',
            [
                {
                    question: 'Which of the following is an example of Physical Vulnerability to seismic hazards?',
                    options: ['High illiteracy rate in a district', 'Unreinforced masonry buildings lacking seismic tie-beams', 'Absence of agricultural crop insurance', 'High humidity levels in coastal areas'],
                    answer: 1,
                    explanation: 'Unreinforced masonry (URM) structures without seismic reinforcement collapse easily under ground shaking, representing physical vulnerability.'
                }
            ]
        ),
        'cs703dm-u3t3': createTopicEntry(
            'Community-Based Disaster Risk Reduction (CBDRR) & Local Knowledge',
            'Top-down bureaucratic disaster plans often fail because local communities are the true first responders during the critical first hours before government teams arrive. CBDRR empowers local stakeholders.',
            [
                '<strong>Core Philosophy:</strong> Communities are not helpless victims; they are active agents possessive of local coping mechanisms and historical knowledge.',
                '<strong>Participatory Rural Appraisal (PRA):</strong> Participatory community hazard mapping, resource inventorying, and historical timeline construction.',
                '<strong>Village Disaster Management Committees (VDMC):</strong> Local task forces trained in First Aid, Early Warning, Evacuation, and Shelter Management.',
                '<strong>Indigenous Knowledge:</strong> Traditional architectural practices (e.g., Dhajji-Dewari timber-laced masonry in Kashmir that flexes during earthquakes; Bhongas in Kutch).',
                '<strong>Sustainability:</strong> Community-owned evacuation paths and volunteer networks endure far longer than external consultant interventions.'
            ],
            `graph TD
    Community[Local Community] --> Map[Participatory Hazard Mapping]
    Community --> TaskForces[Local Task Forces: First Aid, Search & Rescue]
    Community --> Indigenous[Traditional Architecture & Local Coping]
    TaskForces & Map --> SelfReliance[First-Hour Community Self-Reliance]
    style Community fill:#1e293b,stroke:#3b82f6,color:#fff
    style TaskForces fill:#1e293b,stroke:#10b981,color:#fff
    style SelfReliance fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Traditional Wisdom in Action: During the 2004 Indian Ocean Tsunami, indigenous Onge and Sentinelese tribes of the Andaman Islands evacuated to higher grounds after noticing rapid sea-water recession, suffering near-zero casualties.',
            [
                {
                    question: 'What traditional timber-and-masonry construction technique in the Himalayas successfully survived severe earthquakes due to its flexible joints?',
                    options: ['Dhajji-Dewari / Taq architecture', 'Glass curtain-wall facades', 'Pre-stressed concrete box girders', 'Corrugated tin shacks'],
                    answer: 0,
                    explanation: 'Dhajji-Dewari is a traditional timber-framed masonry technique in Kashmir that dissipates seismic energy without brittle collapse.'
                }
            ]
        ),
        'cs703dm-u3t4': createTopicEntry(
            'Structural vs Non-Structural Mitigation Measures',
            'Effective disaster management integrates both heavy civil engineering interventions (structural) and administrative, legal, and educational mechanisms (non-structural).',
            [
                '<strong>Structural Measures:</strong> Physical constructions aimed at reducing hazard exposure: Levees, check dams, drainage channels, avalanche snow nets, seawalls, earthquake base isolation.',
                '<strong>Levee Effect Hazard:</strong> Building structural flood embankments can induce a false sense of security, encouraging dense settlement in floodplains; when a 500-year breach occurs, losses are catastrophic.',
                '<strong>Non-Structural Measures:</strong> Land-use planning, building codes enforcement, watershed afforestation, disaster insurance, hazard zonation maps, school curriculum drills.',
                '<strong>Cost Comparison:</strong> Non-structural measures require far lower capital expenditure and provide sustainable environmental co-benefits.',
                '<strong>Hybrid Approaches:</strong> Combining coastal mangroves (non-structural) with rock rip-rap breakwaters (structural) for nature-based flood defense.'
            ],
            `graph LR
    subgraph Struct[Structural Interventions]
        S1[Dams & Levees]
        S2[Seismic Base Isolators]
        S3[Reinforced Seawalls]
    end
    subgraph NonStruct[Non-Structural Interventions]
        N1[Building Code Laws]
        N2[Land-Use Zoning]
        N3[Mangrove Afforestation]
        N4[Disaster Insurance]
    end
    style Struct fill:#1e293b,stroke:#3b82f6,color:#fff
    style NonStruct fill:#1e293b,stroke:#10b981,color:#fff`,
            'Base Isolation Mechanism: Elastomeric lead-rubber bearings decoupling the superstructure from the foundation, shifting the natural building period $T$ beyond peak seismic ground resonance frequencies.',
            [
                {
                    question: 'What is the "Levee Effect" paradox in disaster risk reduction?',
                    options: [
                        'Levees cause ocean water to turn acidic',
                        'Building structural embankments creates a false sense of security, spurring high-density development in floodplains that leads to catastrophic damage when breached',
                        'Levees trigger small earthquakes along riverbanks',
                        'Water evaporates faster behind stone walls'
                    ],
                    answer: 1,
                    explanation: 'The Levee Effect occurs when protective barriers encourage dangerous development behind them, multiplying vulnerability if a breach occurs.'
                }
            ]
        )
    },
    'cs703dm-u4': {
        'cs703dm-u4t1': createTopicEntry(
            'GIS & Satellite Remote Sensing for Hazard Mapping & Tracking',
            'Geographic Information Systems (GIS) and Satellite Remote Sensing provide spatial data infrastructure for tracking hazard trajectories, assessing terrain vulnerabilities, and orchestrating relief logistics.',
            [
                '<strong>Remote Sensing:</strong> Collecting data from earth-observation satellites (ISRO Cartosat/Oceansat, NASA/USGS Landsat, Sentinel).',
                '<strong>Synthetic Aperture Radar (SAR):</strong> Penetrates dense clouds, rain, and darkness (active microwave sensor); InSAR detects ground subsidence at millimeter precision.',
                '<strong>GIS Spatial Overlay:</strong> Layering spatial data (slope, soil type, population density, road networks, river basins) to generate unified hazard vulnerability maps.',
                '<strong>NDVI (Normalized Difference Vegetation Index):</strong> Quantifies vegetation health from red and near-infrared reflectance to track agricultural drought.',
                '<strong>Post-Disaster Damage Assessment:</strong> High-resolution optical satellite imagery (0.3m) rapidly identifies collapsed bridges, flooded suburbs, and blocked roads.'
            ],
            `graph TD
    Sat[Satellite Remote Sensing: SAR & Optical] --> Layer1[Layer 1: Terrain & Elevation DEM]
    Layer1 --> GIS[GIS Multi-Criteria Spatial Engine]
    Layer2[Layer 2: Population Density] --> GIS
    Layer3[Layer 3: Flood Inundation Footprint] --> GIS
    GIS --> Output[Output: Evacuation Routes & Targeted Relief Maps]
    style Sat fill:#1e293b,stroke:#3b82f6,color:#fff
    style GIS fill:#1e293b,stroke:#f59e0b,color:#fff
    style Output fill:#1e293b,stroke:#10b981,color:#fff`,
            'NDVI Formula: $\\text{NDVI} = \\frac{\\text{NIR} - \\text{Red}}{\\text{NIR} + \\text{Red}}$. Values range from $-1$ to $+1$; healthy dense green vegetation yields values between $0.6$ and $0.9$.',
            [
                {
                    question: 'Why is Synthetic Aperture Radar (SAR) indispensable for flood mapping and cyclone monitoring compared to optical satellite cameras?',
                    options: [
                        'SAR can only take photos in daylight',
                        'SAR microwave radar penetrates dense storm clouds, torrential rain, and darkness 24/7',
                        'SAR does not require electricity',
                        'SAR outputs data in Microsoft Word format'
                    ],
                    answer: 1,
                    explanation: 'SAR uses active microwave pulses that penetrate clouds, smoke, and darkness, providing uninterrupted imagery during storms.'
                }
            ]
        ),
        'cs703dm-u4t2': createTopicEntry(
            'Early Warning Systems (EWS): Doppler Radar, Ocean Buoys & SMS Alerts',
            'An Early Warning System (EWS) is an integrated system of hazard monitoring, forecasting, risk assessment, communication, and preparedness activities that enables individuals and communities to act with sufficient lead time.',
            [
                '<strong>Four Elements of EWS (UNISDR):</strong> (1) Disaster Risk Knowledge, (2) Detection, Monitoring & Forecasting, (3) Warning Dissemination & Communication, (4) Preparedness to Respond.',
                '<strong>Doppler Weather Radars (DWR):</strong> Tracks cyclone spiral rainbands, wind velocities, and localized cloudbursts within 400 km.',
                '<strong>DART Ocean Buoys (Deep-ocean Assessment and Reporting of Tsunamis):</strong> Bottom pressure recorders detect sea-floor pressure changes of 1 millimeter, transmitting tsunami alerts via satellite.',
                '<strong>Common Alerting Protocol (CAP):</strong> Standardized digital XML format allowing single alert to broadcast simultaneously over SMS, TV sirens, radio, and smartphone apps.',
                '<strong>Last-Mile Challenge:</strong> The failure of early warnings to reach marginalized, remote populations before disaster strikes.'
            ],
            `graph LR
    Sensor[Ocean DART Buoy / Doppler Radar] --> Analysis[Meteorological Warning Center]
    Analysis --> CAP[CAP Alert Message Engine]
    CAP --> Cell[Cell Broadcast SMS: Geo-fenced]
    CAP --> Siren[Coastal Sirens & Television Intercepts]
    Cell & Siren --> Citizen[Citizens Evacuate Safely]
    style Sensor fill:#1e293b,stroke:#3b82f6,color:#fff
    style CAP fill:#1e293b,stroke:#f59e0b,color:#fff
    style Citizen fill:#1e293b,stroke:#10b981,color:#fff`,
            'Cell Broadcast vs SMS: Cell Broadcast transmits directly to all handsets connected to a cell tower without congesting network queues, avoiding single-number queuing delays during emergencies.',
            [
                {
                    question: 'What sensor technology anchored on the deep ocean floor detects passing tsunami waves by measuring minute water pressure fluctuations?',
                    options: ['DART Bottom Pressure Recorders', 'Geiger-Muller tubes', 'Anemometers', 'Thermocouples'],
                    answer: 0,
                    explanation: 'DART (Deep-ocean Assessment and Reporting of Tsunamis) systems use seafloor bottom pressure recorders to detect passing tsunami energy.'
                }
            ]
        ),
        'cs703dm-u4t3': createTopicEntry(
            'Emergency Communications: HAM Radio, Satphones & Mesh Networks',
            'During major earthquakes, cyclones, or floods, terrestrial communications (fiber optic cables, cell towers, electric grid power) fail within minutes. Robust emergency backup communication systems are critical.',
            [
                '<strong>Terrestrial Network Fragility:</strong> Base stations lose backup battery power within 4-6 hours; cellular towers topple; copper cables snap.',
                '<strong>Amateur Radio (HAM Radio):</strong> Licensed volunteers operating HF/VHF battery-powered transceivers; historically the primary lifeline during the 2004 Tsunami and 2001 Gujarat Earthquake.',
                '<strong>Satellite Telephones (Iridium, Inmarsat):</strong> Handheld transceivers communicating with Low-Earth Orbit (LEO) or Geostationary satellite constellations, bypassing terrestrial towers.',
                '<strong>Wireless Mesh Networks:</strong> Ad-hoc peer-to-peer networks where every responder smartphone acts as a repeater, transmitting text messages across the disaster zone without internet.',
                '<strong>Disaster Recovery on Wheels:</strong> Mobile Cell on Wheels (COW) and VSAT satellite terminals dispatched to disaster epicenters.'
            ],
            `graph TD
    Fail[Disaster Strikes: Cell Towers & Power Grid Down] --> Alt[Deploy Alternate Resilient Communications]
    Alt --> HAM[Amateur HAM Radio: HF/VHF Battery Stations]
    Alt --> Sat[Satellite Phones: Iridium / Inmarsat]
    Alt --> COW[Cell-on-Wheels COW & VSAT Trucks]
    HAM & Sat & COW --> HQ[Restored Command Center Link]
    style Fail fill:#1e293b,stroke:#ef4444,color:#fff
    style Alt fill:#1e293b,stroke:#f59e0b,color:#fff
    style HQ fill:#1e293b,stroke:#10b981,color:#fff`,
            'Iridium Constellation: 66 cross-linked Low Earth Orbit (LEO) satellites at 780 km altitude providing 100% global pole-to-pole satellite voice and data coverage independent of ground stations.',
            [
                {
                    question: 'What volunteer-driven radio communication service operating on HF and VHF frequencies is famous for restoring emergency contact when public telephone and cellular networks collapse during disasters?',
                    options: ['Amateur (HAM) Radio', 'Commercial FM Radio', 'Cable Television', 'Bluetooth 4.0'],
                    answer: 0,
                    explanation: 'Amateur (HAM) Radio operators provide independent, battery-powered communications that function reliably when public telecoms fail.'
                }
            ]
        ),
        'cs703dm-u4t4': createTopicEntry(
            'AI, Big Data & Drone/UAV Applications in Disaster Relief',
            'Modern emergency management leverages Artificial Intelligence, Unmanned Aerial Vehicles (drones), and big data analytics to accelerate response and relief delivery.',
            [
                '<strong>Drone / UAV Reconnaissance:</strong> Quadcopters fly over flooded or earthquake-hit zones inaccessible to ground vehicles, generating real-time thermal imagery and 3D terrain models.',
                '<strong>Drone Payloads:</strong> Delivering emergency medicines, snake antivenom, blood packets, and satellite communication relays to stranded communities.',
                '<strong>AI Computer Vision:</strong> Machine learning algorithms scan thousands of square kilometers of satellite photos in minutes to automatically identify collapsed buildings and damaged bridges.',
                '<strong>Social Media Big Data:</strong> Natural Language Processing (NLP) extracts rescue pleas, geo-coordinates, and sentiment from Twitter/X and WhatsApp during disasters.',
                '<strong>Crowdsourcing:</strong> Platforms like OpenStreetMap and Ushahidi where global volunteers trace satellite imagery to map unmapped disaster zones in real time.'
            ],
            `graph LR
    Drones[UAV Drones] --> Video[Thermal & 4K Aerial Video Stream]
    Social[Social Media Feeds] --> NLP[AI NLP: Geo-tagged SOS Extraction]
    Sat[Satellite Imagery] --> CV[Computer Vision: Automated Damage Tagging]
    Video & NLP & CV --> Dashboard[Unified Emergency Operational Dashboard]
    style Drones fill:#1e293b,stroke:#3b82f6,color:#fff
    style Social fill:#1e293b,stroke:#f59e0b,color:#fff
    style Sat fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Dashboard fill:#1e293b,stroke:#10b981,color:#fff`,
            'UAV Photogrammetry: Drones flying programmed grid patterns generate high-density point clouds and Orthomosaics with ground sample distances (GSD) under 2 cm per pixel.',
            [
                {
                    question: 'How do Unmanned Aerial Vehicles (UAVs / Drones) revolutionize post-disaster Search and Rescue?',
                    options: [
                        'By providing thermal imaging over inaccessible wreckage and delivering lightweight critical medical payloads',
                        'By replacing all human doctors permanently',
                        'By sucking water out of flooded rivers',
                        'By preventing tectonic plates from shifting'
                    ],
                    answer: 0,
                    explanation: 'Drones rapidly access hazardous or washed-out zones to provide aerial thermal survivor detection and deliver critical medical kits.'
                }
            ]
        )
    },
    'cs703dm-u5': {
        'cs703dm-u5t1': createTopicEntry(
            'Institutional Setup in India: DM Act 2005, NDMA, SDMA & NDRF',
            'Following the catastrophic 1999 Odisha Super Cyclone and 2004 Tsunami, India enacted the landmark Disaster Management Act 2005, establishing a robust three-tier institutional mechanism.',
            [
                '<strong>National Level:</strong> NDMA (National Disaster Management Authority) headed by the Prime Minister of India; formulates national policies, plans, and guidelines.',
                '<strong>State Level:</strong> SDMA (State Disaster Management Authority) headed by the respective State Chief Minister.',
                '<strong>District Level:</strong> DDMA (District Disaster Management Authority) headed by the District Magistrate / Collector / Deputy Commissioner (the key operational focal point).',
                '<strong>NDRF (National Disaster Response Force):</strong> Dedicated specialist federal paramilitary force trained in CBRN, collapsed structure search and rescue (CSSR), and flood rescue.',
                '<strong>NIDM (National Institute of Disaster Management):</strong> Apex statutory body for capacity building, human resource development, training, and research in disaster management.'
            ],
            `graph TD
    National[National Level: NDMA - Headed by Prime Minister] --> State[State Level: SDMA - Headed by Chief Minister]
    State --> District[District Level: DDMA - Headed by District Collector / DM]
    National --> NDRF[NDRF: Specialized Paramilitary Force 16 Battalions]
    National --> NIDM[NIDM: Research & Capacity Training]
    District --> Field[Field Execution: Police, Fire, Health, Volunteers]
    style National fill:#1e293b,stroke:#ef4444,color:#fff
    style State fill:#1e293b,stroke:#f59e0b,color:#fff
    style District fill:#1e293b,stroke:#3b82f6,color:#fff
    style NDRF fill:#1e293b,stroke:#10b981,color:#fff`,
            'Disaster Response Funds: DM Act 2005 established the National Disaster Response Fund (NDRF) and State Disaster Response Fund (SDRF) to provide dedicated, non-lapsable disaster financing.',
            [
                {
                    question: 'Under the Disaster Management Act 2005 of India, who serves as the ex-officio Chairperson of the National Disaster Management Authority (NDMA)?',
                    options: ['Union Home Minister', 'Prime Minister of India', 'Chief Justice of India', 'Cabinet Secretary'],
                    answer: 1,
                    explanation: 'Under Section 3(2) of the DM Act 2005, the Prime Minister of India is the ex-officio Chairperson of NDMA.'
                }
            ]
        ),
        'cs703dm-u5t2': createTopicEntry(
            'Global Frameworks: Sendai Framework (2015-2030) Priorities',
            'Adopted at the Third UN World Conference in Sendai, Japan, the Sendai Framework for Disaster Risk Reduction (2015-2030) is the 15-year global roadmap succeeding the Hyogo Framework for Action (2005-2015).',
            [
                '<strong>Target:</strong> Substantial reduction of disaster risk and losses in lives, livelihoods, health, and economic, physical, and environmental assets.',
                '<strong>Priority 1:</strong> Understanding disaster risk (hazard, vulnerability, exposure, capacity).',
                '<strong>Priority 2:</strong> Strengthening disaster risk governance to manage disaster risk.',
                '<strong>Priority 3:</strong> Investing in disaster risk reduction for resilience (structural and non-structural).',
                '<strong>Priority 4:</strong> Enhancing disaster preparedness for effective response and to "Build Back Better" in recovery, rehabilitation, and reconstruction.',
                '<strong>Seven Global Targets:</strong> Reduce global disaster mortality, reduce affected people, reduce economic loss, reduce damage to critical infrastructure, increase national DRR strategies, enhance international cooperation, increase multi-hazard early warning systems.'
            ],
            `graph TD
    Sendai[Sendai Framework 2015-2030] --> P1[Priority 1: Understanding Disaster Risk]
    Sendai --> P2[Priority 2: Strengthening Disaster Governance]
    Sendai --> P3[Priority 3: Investing in Resilience & Risk Financing]
    Sendai --> P4[Priority 4: Enhancing Preparedness & Build Back Better]
    style Sendai fill:#1e293b,stroke:#3b82f6,color:#fff
    style P1 fill:#1e293b,stroke:#10b981,color:#fff
    style P2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style P3 fill:#1e293b,stroke:#8b5cf6,color:#fff
    style P4 fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Shift from Hyogo to Sendai: Hyogo focused on disaster management and response; Sendai shifts emphasis to managing DISASTER RISK itself before events manifest.',
            [
                {
                    question: 'How many core Priority Areas are defined under the Sendai Framework for Disaster Risk Reduction (2015-2030)?',
                    options: ['2 priorities', '4 priorities', '8 priorities', '12 priorities'],
                    answer: 1,
                    explanation: 'The Sendai Framework defines exactly 4 Priority Areas for global disaster risk reduction.'
                }
            ]
        ),
        'cs703dm-u5t3': createTopicEntry(
            'Critical IT Infrastructure: Disaster Recovery (DR) Sites & BCP',
            'Modern society depends entirely on digital infrastructure (banking, cloud services, healthcare, telecommunications). IT Disaster Recovery and Business Continuity Planning (BCP) ensure mission-critical systems survive geophysical catastrophes.',
            [
                '<strong>Business Continuity Planning (BCP):</strong> Comprehensive strategy ensuring essential business operations continue during and after a disaster.',
                '<strong>Disaster Recovery (DR):</strong> Technical processes and policies for restoring critical IT infrastructure, databases, and networks following a disaster.',
                '<strong>Recovery Time Objective (RTO):</strong> Maximum acceptable duration of downtime before systems must be restored (e.g., RTO < 15 minutes).',
                '<strong>Recovery Point Objective (RPO):</strong> Maximum acceptable data loss measured in time (e.g., RPO = 0 means zero transactions lost; RPO = 1 hour means up to 1 hour of writes lost).',
                '<strong>DR Site Types:</strong> Cold Site (empty facility with power/cooling), Warm Site (hardware installed but state not synchronized), Hot Site (fully duplicated live mirrored replica with real-time failover).'
            ],
            `graph LR
    Primary[(Primary Data Center: Mumbai)] -->|Real-Time Geo-Replication| HotSite[(Hot DR Site: Hyderabad / Bangalore)]
    Primary <-->|Heartbeat Monitor| Arbiter[Cloud Arbiter / Global DNS]
    Primary -.->|Catastrophic Earthquake Disaster| Failover[Automatic DNS Failover]
    Failover --> HotSite
    style Primary fill:#1e293b,stroke:#ef4444,color:#fff
    style HotSite fill:#1e293b,stroke:#10b981,color:#fff
    style Arbiter fill:#1e293b,stroke:#3b82f6,color:#fff`,
            'RTO vs RPO trade-off: $\\text{Cost} \\propto \\frac{1}{\\text{RTO}} + \\frac{1}{\\text{RPO}}$. Achieving $\\text{RTO} \\to 0$ and $\\text{RPO} \\to 0$ requires expensive dual-active synchronous cross-region clustering.',
            [
                {
                    question: 'What is the term for the maximum targeted duration of acceptable data loss (measured in time) following an IT disaster?',
                    options: ['Recovery Time Objective (RTO)', 'Recovery Point Objective (RPO)', 'Mean Time to Failure (MTTF)', 'Service Level Agreement (SLA)'],
                    answer: 1,
                    explanation: 'RPO (Recovery Point Objective) measures the maximum acceptable age of files that must be recovered from storage for normal operations to resume.'
                }
            ]
        ),
        'cs703dm-u5t4': createTopicEntry(
            'Major Case Studies: 2004 Tsunami, Fukushima 2011 & Kedarnath 2013',
            'Analyzing historical mega-disasters provides essential lessons on engineering vulnerabilities, institutional failures, and successful risk reduction practices.',
            [
                '<strong>2004 Indian Ocean Tsunami ($M_w 9.1$):</strong> Undersea megathrust earthquake off Sumatra generated tsunami waves killing > 230,000 people across 14 nations. Key lesson: Lack of an Indian Ocean early warning system; led to establishment of INCOIS early warning center in Hyderabad.',
                '<strong>2011 Great East Japan Earthquake & Fukushima ($M_w 9.0$):</strong> Earthquake triggered 14m tsunami overtopping Fukushima Daiichi\'s 5.7m seawall, flooding backup diesel generators. Key lesson: Beyond-Design-Basis events; critical infrastructure must anticipate cascading multi-hazard threats.',
                '<strong>2013 Kedarnath Flash Floods (Uttarakhand):</strong> Cloudburst combined with glacial lake outburst flood (Chorabari Lake) devastated Kedarnath town. Key lesson: Unregulated construction on river floodplains, lack of radar warning in mountainous terrain, and ecological fragility.',
                '<strong>Odisha Cyclone Preparedness:</strong> After the 1999 Super Cyclone killed 10,000 people, Odisha built 800+ cyclone shelters, early warning networks, and trained community volunteers, evacuating 1.2 million people during Cyclone Phailin (2013) with fewer than 45 casualties.'
            ],
            `graph TD
    Dis1[1999 Odisha Super Cyclone: 10,000 Deaths] --> Learned1[Odisha Miracle: 800 Shelters & EWS -> Near-Zero Casualties in 2013 Phailin]
    Dis2[2004 Tsunami: No Warning System] --> Learned2[INCOIS Early Warning System in Hyderabad with Ocean Buoys]
    Dis3[2011 Fukushima Meltdown: Generator Flooding] --> Learned3[Watertight Backups & Severe Beyond-Design-Basis Planning]
    style Dis1 fill:#1e293b,stroke:#ef4444,color:#fff
    style Learned1 fill:#1e293b,stroke:#10b981,color:#fff
    style Dis2 fill:#1e293b,stroke:#ef4444,color:#fff
    style Learned2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'The Odisha Evacuation Paradigm: Recognized globally by the United Nations as an exemplar of how high-capacity early warning and political will can reduce disaster mortality to near zero despite extreme cyclone hazard intensity.',
            [
                {
                    question: 'What institutional early warning center was established in Hyderabad following the 2004 Indian Ocean Tsunami to monitor deep-ocean seismic and wave buoys?',
                    options: ['ISRO Satellite Center', 'INCOIS (Indian National Centre for Ocean Information Services)', 'BARC Nuclear Center', 'Survey of India'],
                    answer: 1,
                    explanation: 'INCOIS in Hyderabad operates India\'s world-class Tsunami Early Warning Centre, continuously monitoring DART buoys and seismic stations.'
                }
            ]
        )
    }
};

// Write files
const fullPathCis = path.join(__dirname, '../js/data_cs703-cis.js');
fs.writeFileSync(fullPathCis, `/**
 * Academy LMS - Auto-Generated Curriculum Data
 * Course: data_cs703-cis.js
 */
window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, ${JSON.stringify(cs703cisData, null, 4)});
`, 'utf8');
console.log('[SUCCESS] Wrote data_cs703-cis.js');

const fullPathDm = path.join(__dirname, '../js/data_cs703-dm.js');
fs.writeFileSync(fullPathDm, `/**
 * Academy LMS - Auto-Generated Curriculum Data
 * Course: data_cs703-dm.js
 */
window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, ${JSON.stringify(cs703dmData, null, 4)});
`, 'utf8');
console.log('[SUCCESS] Wrote data_cs703-dm.js');
