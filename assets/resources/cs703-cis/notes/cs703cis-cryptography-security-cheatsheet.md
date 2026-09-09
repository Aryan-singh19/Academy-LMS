# CS-703 (InfoSec): Cryptography & Security Master Cheat Sheet
**Course Code:** CS-703 (CIS) | **7th Semester B.Tech Computer Science Core Notes**

---

## Unit 1: Foundations of Cryptography & Classical Ciphers
### 1. The CIA Triad & Security Attacks
- **Confidentiality:** Preventing unauthorized disclosure of data (Symmetric/Asymmetric Encryption).
- **Integrity:** Ensuring data has not been altered, forged, or replayed (Cryptographic Hashes, HMAC).
- **Availability:** Ensuring legitimate users have timely and reliable access (DoS/DDoS mitigations).
- **Attacks Classification:**
  - **Passive Attacks:** Eavesdropping, packet sniffing, traffic analysis. Goal: Obtain information without altering resources. Hard to detect; must prevent with encryption.
  - **Active Attacks:** Masquerade (spoofing), replay attacks, message modification, denial of service. Goal: Alter system resources. Detected through message digests and digital signatures.

### 2. Classical Cipher Formulas
- **Caesar Cipher:** $C = (P + k) \pmod{26}, \quad P = (C - k) \pmod{26}$.
- **Playfair Cipher:** $5 \times 5$ matrix constructed with key keyword. Letters $I$ and $J$ share a cell. Rules:
  - If in same row: replace with immediate right letter (wrap around).
  - If in same column: replace with immediate bottom letter.
  - If rectangle: replace with letters in same row at opposite column corners.
- **Hill Cipher:** Matrix multiplication over $\mathbb{Z}_{26}$:
  $$C = P \cdot K \pmod{26}, \quad P = C \cdot K^{-1} \pmod{26}$$
  Requires $\gcd(\det(K), 26) = 1$ for matrix invertibility.

---

## Unit 2: Symmetric Key Cryptography (DES & AES)
### 1. Data Encryption Standard (DES)
- Block size: 64 bits. Key size: 56 bits (8 bits used for parity check).
- **Feistel Cipher Structure:** 16 identical rounds.
  $$L_i = R_{i-1}, \quad R_i = L_{i-1} \oplus F(R_{i-1}, K_i)$$
  - Decryption is identical to encryption, merely reversing the order of the subkeys ($K_{16}$ down to $K_1$).
- **Triple-DES (3DES):** $C = E_{K_3}(D_{K_2}(E_{K_1}(P)))$ with effective key length 112 or 168 bits.

### 2. Advanced Encryption Standard (AES)
- Block size: 128 bits. Key sizes: 128 (10 rounds), 192 (12 rounds), 256 (14 rounds).
- Non-Feistel substitution-permutation network. Each round consists of 4 algebraic layers:
  1. **SubBytes:** Non-linear byte substitution using S-box over $GF(2^8)$.
  2. **ShiftRows:** Cyclic byte shifting (Row 0: 0 shifts; Row 1: 1 shift left; Row 2: 2 shifts; Row 3: 3 shifts).
  3. **MixColumns:** Matrix multiplication over $GF(2^8)$ providing diffusion. (Omitted in final round).
  4. **AddRoundKey:** Bitwise XOR with round key schedule.

---

## Unit 3: Asymmetric Key Cryptography (RSA & Diffie-Hellman)
### 1. RSA Algorithm Steps
1. Choose two large prime numbers $p$ and $q$.
2. Compute modulus $n = p \times q$.
3. Compute Euler's Totient function $\phi(n) = (p - 1)(q - 1)$.
4. Select public exponent $e$ such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
5. Compute private exponent $d$ such that $d \cdot e \equiv 1 \pmod{\phi(n)}$ using Extended Euclidean Algorithm.
6. **Public Key:** $(e, n)$, **Private Key:** $(d, n)$.
7. **Encryption:** $C = M^e \pmod{n}$.
8. **Decryption:** $M = C^d \pmod{n}$.

### 2. Diffie-Hellman Key Exchange
- Shared public parameters: Prime $q$, primitive root $\alpha < q$.
- Alice chooses private key $X_A < q$, computes public key $Y_A = \alpha^{X_A} \pmod{q}$.
- Bob chooses private key $X_B < q$, computes public key $Y_B = \alpha^{X_B} \pmod{q}$.
- Alice and Bob exchange public keys $Y_A$ and $Y_B$.
- Alice computes shared secret: $K = (Y_B)^{X_A} \pmod{q}$.
- Bob computes shared secret: $K = (Y_A)^{X_B} \pmod{q}$.
- *Vulnerability:* Susceptible to Man-in-the-Middle (MITM) attacks if unauthenticated.
