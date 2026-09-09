# CS-703 (CIS): University Solved Exam Question Bank
**Course Code:** CS-703 Cryptography & InfoSec | **Step-by-Step Solved Mathematical Numericals**

---

### Question 1: In an RSA cryptosystem, the prime factors are chosen as p = 7 and q = 11. The encryption exponent is selected as e = 17.
1. Calculate the public key and private key.
2. If plaintext message M = 8, compute the ciphertext C.
3. Perform the decryption step on ciphertext C to retrieve the original plaintext M.

**Solution:**
**Step 1: Compute Modulus $n$ and Totient $\phi(n)$**
$$n = p \times q = 7 \times 11 = 77$$
$$\phi(n) = (p - 1)(q - 1) = (7 - 1)(11 - 1) = 6 \times 10 = 60$$

**Step 2: Verify $\gcd(e, \phi(n)) = 1$**
Given $e = 17$. Factors of 60 are $2, 3, 5$. Since 17 is prime and not a divisor of 60, $\gcd(17, 60) = 1$.

**Step 3: Compute Private Exponent $d$ ($d \cdot e \equiv 1 \pmod{\phi(n)}$)**
$$17d \equiv 1 \pmod{60} \implies 17d = 60k + 1$$
Testing $k$:
- $k = 1: 61 / 17$ (not an integer)
- $k = 2: 121 / 17$ (not an integer)
- $k = 3: 181 / 17$ (not an integer)
- $k = 4: 241 / 17$ (not an integer)
- $k = 5: 301 / 17$ (not an integer)
- $k = 15: 17 \times 53 = 901 \equiv 60 \times 15 + 1 \implies d = 53$
Alternatively using Extended Euclidean:
$60 = 3 \times 17 + 9$  
$17 = 1 \times 9 + 8$  
$9 = 1 \times 8 + 1 \implies 1 = 9 - 8 = 9 - (17 - 9) = 2 \times 9 - 17 = 2(60 - 3 \times 17) - 17 = 2(60) - 7(17)$  
$-7 \equiv 53 \pmod{60} \implies d = 53$.

- **Public Key:** $\{e = 17, n = 77\}$
- **Private Key:** $\{d = 53, n = 77\}$

**Step 4: Encryption ($C = M^e \pmod{n}$)**
$$C = 8^{17} \pmod{77}$$
Using Modular Exponentiation:
- $8^2 = 64 \equiv -13 \pmod{77}$
- $8^4 = (-13)^2 = 169 = 2 \times 77 + 15 \equiv 15 \pmod{77}$
- $8^8 = 15^2 = 225 = 2 \times 77 + 71 \equiv -6 \pmod{77}$
- $8^{16} = (-6)^2 = 36 \pmod{77}$
- $C = 8^{17} = 8^{16} \times 8^1 = 36 \times 8 = 288 = 3 \times 77 + 57 = 57 \pmod{77}$
$$\mathbf{C = 57}$$

**Step 5: Decryption ($M = C^d \pmod{n}$)**
$$M = 57^{53} \pmod{77}$$
Using Chinese Remainder Theorem mod 7 and mod 11:
- $57 \equiv 1 \pmod{7} \implies 57^{53} \equiv 1^{53} \equiv 1 \pmod{7}$
- $57 \equiv 2 \pmod{11} \implies 57^{53} \equiv 2^{53} = (2^{10})^5 \times 2^3 \equiv 1^5 \times 8 = 8 \pmod{11}$
- Number between $0$ and $76$ that is $\equiv 1 \pmod{7}$ and $\equiv 8 \pmod{11}$:
  $8 \pmod{7} = 1$.
$$\mathbf{M = 8} \quad \text{(Verified accurately!)}$$

---

### Question 2: In Diffie-Hellman Key Exchange, Alice and Bob share public prime q = 23 and primitive root alpha = 5.
- Alice selects private key $X_A = 6$.
- Bob selects private key $X_B = 15$.
1. Compute Alice's and Bob's public keys ($Y_A$ and $Y_B$).
2. Compute the shared secret key $K$.

**Solution:**
**Step 1: Alice's Public Key $Y_A$**
$$Y_A = \alpha^{X_A} \pmod{q} = 5^6 \pmod{23}$$
- $5^2 = 25 \equiv 2 \pmod{23}$
- $5^6 = (5^2)^3 = 2^3 = 8 \pmod{23}$
$$\mathbf{Y_A = 8}$$

**Step 2: Bob's Public Key $Y_B$**
$$Y_B = \alpha^{X_B} \pmod{q} = 5^{15} \pmod{23}$$
- By Fermat's Little Theorem: $5^{22} \equiv 1 \pmod{23}$
- $5^3 = 125 = 5 \times 23 + 10 \equiv 10 \pmod{23}$
- $5^6 \equiv 8 \pmod{23}$
- $5^{12} = 8^2 = 64 = 2 \times 23 + 18 \equiv -5 \pmod{23}$
- $5^{15} = 5^{12} \times 5^3 \equiv (-5) \times 10 = -50 = -3 \times 23 + 19 \equiv 19 \pmod{23}$
$$\mathbf{Y_B = 19}$$

**Step 3: Compute Shared Secret Key $K$**
Alice computes:
$$K = (Y_B)^{X_A} \pmod{q} = 19^6 \pmod{23}$$
- $19 \equiv -4 \pmod{23}$
- $(-4)^2 = 16 \equiv -7 \pmod{23}$
- $(-4)^6 = (-7)^3 = -343 = -15 \times 23 + 2 \equiv 2 \pmod{23}$
$$\mathbf{K = 2}$$
Bob computes:
$$K = (Y_A)^{X_B} \pmod{q} = 8^{15} \pmod{23}$$
- $8^2 = 64 \equiv 18 \equiv -5 \pmod{23}$
- $8^4 = (-5)^2 = 25 \equiv 2 \pmod{23}$
- $8^8 = 2^2 = 4 \pmod{23}$
- $8^{15} = 8^8 \times 8^4 \times 8^2 \times 8^1 = 4 \times 2 \times (-5) \times 8 = -320 = -14 \times 23 + 2 \equiv 2 \pmod{23}$
$$\mathbf{K = 2} \quad \text{(Both sides independently agree!)}$$
