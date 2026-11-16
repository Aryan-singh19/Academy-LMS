# EC-702(B) Information Theory & Coding — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 7: EC-702(B).

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Self-information. Explain its role in Measure of Information with a suitable example or diagram. **[7]**

(b) Explain Entropy in detail. Differentiate between Entropy and Maximum Entropy. **[7]**

**Q2.** *(Unit 2)*

(a) Define Kraft Inequality. Explain its role in Prefix Codes & Kraft Inequality with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Shannon-Fano & Huffman Coding. Bring out the significance of Shannon-Fano Coding and Huffman Coding. **[7]**

**Q3.** *(Unit 3)*

(a) Define Bandwidth-Power Trade-off. Explain its role in Shannon-Hartley Theorem with a suitable example or diagram. **[7]**

(b) Explain Channel Coding Theorem in detail. Differentiate between Channel Coding Theorem and Code Rate. **[7]**

**Q4.** *(Unit 4)*

(a) Define BCH Code. Explain its role in BCH & Reed-Solomon Codes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Linear Block Codes. Bring out the significance of (n, k) Code and Generator Matrix. **[7]**

**Q5.** *(Unit 5)*

(a) Define Code Tree. Explain its role in Convolutional Encoding with a suitable example or diagram. **[7]**

(b) Explain Viterbi Decoding in detail. Differentiate between Trellis and Path Metric. **[7]**

**Q6.** *(Unit 1)*

(a) Define Symmetry. Explain its role in Mutual Information with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Measure of Information. Bring out the significance of Self-information and Unit of Information. **[7]**

**Q7.** *(Unit 3)*

(a) Define DMC. Explain its role in Discrete Memoryless Channels with a suitable example or diagram. **[7]**

(b) Explain Channel Capacity in detail. Differentiate between Channel Capacity and BSC Capacity. **[7]**

**Q8.** *(Unit 5)*

(a) Define Path Metric. Explain its role in Viterbi Decoding with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Interleaving & Concatenated Codes. Bring out the significance of Interleaver and Concatenated Code. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Maximum Entropy. Explain its role in Entropy with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Joint & Conditional Entropy. Bring out the significance of Joint Entropy and Conditional Entropy. **[7]**

**Q2.** *(Unit 2)*

(a) Define Optimal Code. Explain its role in Shannon-Fano & Huffman Coding with a suitable example or diagram. **[7]**

(b) Explain Lempel-Ziv & Arithmetic Coding in detail. Differentiate between Lempel-Ziv and Arithmetic Coding. **[7]**

**Q3.** *(Unit 3)*

(a) Define Channel Coding Theorem. Explain its role in Channel Coding Theorem with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Discrete Memoryless Channels. Bring out the significance of DMC and Channel Matrix. **[7]**

**Q4.** *(Unit 4)*

(a) Define Generator Matrix. Explain its role in Linear Block Codes with a suitable example or diagram. **[7]**

(b) Explain Syndrome Decoding & Hamming Codes in detail. Differentiate between Syndrome and Hamming Code. **[7]**

**Q5.** *(Unit 5)*

(a) Define Survivor Path. Explain its role in Viterbi Decoding with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Interleaving & Concatenated Codes. Bring out the significance of Interleaver and Concatenated Code. **[7]**

**Q6.** *(Unit 2)*

(a) Define Shannon's Source Coding Theorem. Explain its role in Source Coding Theorem with a suitable example or diagram. **[7]**

(b) Explain Prefix Codes & Kraft Inequality in detail. Differentiate between Prefix Code and Kraft Inequality. **[7]**

**Q7.** *(Unit 4)*

(a) Define Hamming Code. Explain its role in Syndrome Decoding & Hamming Codes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Cyclic Codes. Bring out the significance of Generator Polynomial and Systematic Cyclic Encoding. **[7]**

**Q8.** *(Unit 1)*

(a) Define Chain Rule. Explain its role in Joint & Conditional Entropy with a suitable example or diagram. **[7]**

(b) Explain Mutual Information in detail. Differentiate between Mutual Information and Non-negativity. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Self-information: I(x) = −log2 p(x) bits
- **Q1(b):** Entropy: H(X) = −Σ p log2 p | Maximum Entropy: log2 M for equiprobable symbols | Entropy of Binary Source: maximum 1 bit when p = 0.5
- **Q2(a):** Kraft Inequality: Σ 2^(−li) ≤ 1
- **Q2(b):** Shannon-Fano Coding: recursive splitting into equal-probability halves | Huffman Coding: merges two least probable symbols repeatedly | Optimal Code: Huffman gives minimum average length
- **Q3(a):** Bandwidth-Power Trade-off: increasing B reduces required S/N
- **Q3(b):** Channel Coding Theorem: error probability can be made arbitrarily small if R < C | Code Rate: R = k/n | Converse: reliable communication impossible if R > C
- **Q4(a):** BCH Code: cyclic code correcting multiple random errors
- **Q4(b):** (n, k) Code: k message bits mapped to n-bit codewords | Generator Matrix: G = [I P] in systematic form | Parity Check Matrix: H with GH^T = 0
- **Q5(a):** Code Tree: tree representation of encoder outputs
- **Q5(b):** Trellis: time-indexed state diagram | Path Metric: accumulated distance along a path | Survivor Path: best path into each state retained
- **Q6(a):** Symmetry: I(X;Y) = I(Y;X)
- **Q6(b):** Self-information: I(x) = −log2 p(x) bits | Unit of Information: bit for log base 2 | Less Probable Events: carry more information
- **Q7(a):** DMC: channel where each output depends only on current input
- **Q7(b):** Channel Capacity: C = max I(X;Y) over input distributions | BSC Capacity: C = 1 − H(p) | Noiseless Channel: capacity log2 M
- **Q8(a):** Path Metric: accumulated distance along a path
- **Q8(b):** Interleaver: spreads burst errors into random errors | Concatenated Code: inner and outer codes combined | Burst Error: consecutive bit errors

## Recommended Books

- *Elements of Information Theory* — Cover & Thomas
- *Information Theory, Coding and Cryptography* — Ranjan Bose
- *Error Control Coding* — Shu Lin & Daniel Costello
