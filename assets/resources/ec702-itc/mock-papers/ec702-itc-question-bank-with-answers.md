# EC-702(B) Information Theory & Coding — Question Bank with Answer Hints

## Unit 1: Information & Entropy

### Short answer (2-3 marks)

- **Q.** Define *Self-information*.  
  **Ans.** I(x) = −log2 p(x) bits
- **Q.** Define *Unit of Information*.  
  **Ans.** bit for log base 2
- **Q.** Define *Less Probable Events*.  
  **Ans.** carry more information
- **Q.** Define *Entropy*.  
  **Ans.** H(X) = −Σ p log2 p
- **Q.** Define *Maximum Entropy*.  
  **Ans.** log2 M for equiprobable symbols
- **Q.** Define *Entropy of Binary Source*.  
  **Ans.** maximum 1 bit when p = 0.5
- **Q.** Define *Joint Entropy*.  
  **Ans.** H(X,Y)
- **Q.** Define *Conditional Entropy*.  
  **Ans.** H(Y given X), remaining uncertainty
- **Q.** Define *Chain Rule*.  
  **Ans.** H(X,Y) = H(X) + H(Y given X)
- **Q.** Define *Mutual Information*.  
  **Ans.** I(X;Y) = H(X) − H(X given Y)
- **Q.** Define *Non-negativity*.  
  **Ans.** I(X;Y) ≥ 0
- **Q.** Define *Symmetry*.  
  **Ans.** I(X;Y) = I(Y;X)

### Long answer (7 marks)

- **Q.** Explain *Measure of Information* in detail with a neat diagram.  
  **Key points:** Information depends on probability. Self-information — I(x) = −log2 p(x) bits; Unit of Information — bit for log base 2; Less Probable Events — carry more information.
- **Q.** Explain *Entropy* in detail with a neat diagram.  
  **Key points:** Entropy is average information. Entropy — H(X) = −Σ p log2 p; Maximum Entropy — log2 M for equiprobable symbols; Entropy of Binary Source — maximum 1 bit when p = 0.5.
- **Q.** Explain *Joint & Conditional Entropy* in detail with a neat diagram.  
  **Key points:** Entropies describe pairs of variables. Joint Entropy — H(X,Y); Conditional Entropy — H(Y given X), remaining uncertainty; Chain Rule — H(X,Y) = H(X) + H(Y given X).
- **Q.** Explain *Mutual Information* in detail with a neat diagram.  
  **Key points:** Mutual information measures shared information. Mutual Information — I(X;Y) = H(X) − H(X given Y); Non-negativity — I(X;Y) ≥ 0; Symmetry — I(X;Y) = I(Y;X).

## Unit 2: Source Coding

### Short answer (2-3 marks)

- **Q.** Define *Shannon's Source Coding Theorem*.  
  **Ans.** L ≥ H(X)
- **Q.** Define *Code Efficiency*.  
  **Ans.** H/L
- **Q.** Define *Redundancy*.  
  **Ans.** 1 − efficiency
- **Q.** Define *Prefix Code*.  
  **Ans.** no codeword is a prefix of another
- **Q.** Define *Kraft Inequality*.  
  **Ans.** Σ 2^(−li) ≤ 1
- **Q.** Define *Uniquely Decodable*.  
  **Ans.** every sequence decodes in only one way
- **Q.** Define *Shannon-Fano Coding*.  
  **Ans.** recursive splitting into equal-probability halves
- **Q.** Define *Huffman Coding*.  
  **Ans.** merges two least probable symbols repeatedly
- **Q.** Define *Optimal Code*.  
  **Ans.** Huffman gives minimum average length
- **Q.** Define *Lempel-Ziv*.  
  **Ans.** dictionary-based coding without known statistics
- **Q.** Define *Arithmetic Coding*.  
  **Ans.** encodes a message as a sub-interval of [0,1)
- **Q.** Define *Run-length Coding*.  
  **Ans.** encodes repeated symbols compactly

### Long answer (7 marks)

- **Q.** Explain *Source Coding Theorem* in detail with a neat diagram.  
  **Key points:** Average code length is bounded by entropy. Shannon's Source Coding Theorem — L ≥ H(X); Code Efficiency — H/L; Redundancy — 1 − efficiency.
- **Q.** Explain *Prefix Codes & Kraft Inequality* in detail with a neat diagram.  
  **Key points:** Prefix codes are instantaneously decodable. Prefix Code — no codeword is a prefix of another; Kraft Inequality — Σ 2^(−li) ≤ 1; Uniquely Decodable — every sequence decodes in only one way.
- **Q.** Explain *Shannon-Fano & Huffman Coding* in detail with a neat diagram.  
  **Key points:** Constructive algorithms build efficient codes. Shannon-Fano Coding — recursive splitting into equal-probability halves; Huffman Coding — merges two least probable symbols repeatedly; Optimal Code — Huffman gives minimum average length.
- **Q.** Explain *Lempel-Ziv & Arithmetic Coding* in detail with a neat diagram.  
  **Key points:** Universal methods adapt to data. Lempel-Ziv — dictionary-based coding without known statistics; Arithmetic Coding — encodes a message as a sub-interval of [0,1); Run-length Coding — encodes repeated symbols compactly.

## Unit 3: Channel Capacity

### Short answer (2-3 marks)

- **Q.** Define *DMC*.  
  **Ans.** channel where each output depends only on current input
- **Q.** Define *Channel Matrix*.  
  **Ans.** matrix of P(y given x)
- **Q.** Define *Binary Symmetric Channel*.  
  **Ans.** crossover probability p for both symbols
- **Q.** Define *Channel Capacity*.  
  **Ans.** C = max I(X;Y) over input distributions
- **Q.** Define *BSC Capacity*.  
  **Ans.** C = 1 − H(p)
- **Q.** Define *Noiseless Channel*.  
  **Ans.** capacity log2 M
- **Q.** Define *Shannon-Hartley*.  
  **Ans.** C = B log2(1 + S/N)
- **Q.** Define *Shannon Limit*.  
  **Ans.** Eb/N0 of −1.6 dB as bandwidth → ∞
- **Q.** Define *Bandwidth-Power Trade-off*.  
  **Ans.** increasing B reduces required S/N
- **Q.** Define *Channel Coding Theorem*.  
  **Ans.** error probability can be made arbitrarily small if R < C
- **Q.** Define *Code Rate*.  
  **Ans.** R = k/n
- **Q.** Define *Converse*.  
  **Ans.** reliable communication impossible if R > C

### Long answer (7 marks)

- **Q.** Explain *Discrete Memoryless Channels* in detail with a neat diagram.  
  **Key points:** Channels are modelled by transition probabilities. DMC — channel where each output depends only on current input; Channel Matrix — matrix of P(y given x); Binary Symmetric Channel — crossover probability p for both symbols.
- **Q.** Explain *Channel Capacity* in detail with a neat diagram.  
  **Key points:** Capacity is maximum mutual information. Channel Capacity — C = max I(X;Y) over input distributions; BSC Capacity — C = 1 − H(p); Noiseless Channel — capacity log2 M.
- **Q.** Explain *Shannon-Hartley Theorem* in detail with a neat diagram.  
  **Key points:** Capacity of band-limited AWGN channel. Shannon-Hartley — C = B log2(1 + S/N); Shannon Limit — Eb/N0 of −1.6 dB as bandwidth → ∞; Bandwidth-Power Trade-off — increasing B reduces required S/N.
- **Q.** Explain *Channel Coding Theorem* in detail with a neat diagram.  
  **Key points:** Reliable transmission possible below capacity. Channel Coding Theorem — error probability can be made arbitrarily small if R < C; Code Rate — R = k/n; Converse — reliable communication impossible if R > C.

## Unit 4: Linear Block & Cyclic Codes

### Short answer (2-3 marks)

- **Q.** Define *(n, k) Code*.  
  **Ans.** k message bits mapped to n-bit codewords
- **Q.** Define *Generator Matrix*.  
  **Ans.** G = [I P] in systematic form
- **Q.** Define *Parity Check Matrix*.  
  **Ans.** H with GH^T = 0
- **Q.** Define *Syndrome*.  
  **Ans.** s = rH^T; zero if no detectable error
- **Q.** Define *Hamming Code*.  
  **Ans.** single-error-correcting code with n = 2^m − 1
- **Q.** Define *Standard Array*.  
  **Ans.** table used for syndrome decoding
- **Q.** Define *Generator Polynomial*.  
  **Ans.** g(x) divides x^n − 1
- **Q.** Define *Systematic Cyclic Encoding*.  
  **Ans.** remainder of x^(n−k)m(x) / g(x) gives parity
- **Q.** Define *Shift Register Encoder*.  
  **Ans.** LFSR implementation of cyclic encoding
- **Q.** Define *BCH Code*.  
  **Ans.** cyclic code correcting multiple random errors
- **Q.** Define *Reed-Solomon Code*.  
  **Ans.** non-binary code correcting burst errors
- **Q.** Define *Application*.  
  **Ans.** RS codes in CDs, QR codes and DVB

### Long answer (7 marks)

- **Q.** Explain *Linear Block Codes* in detail with a neat diagram.  
  **Key points:** Codewords are linear combinations of basis vectors. (n, k) Code — k message bits mapped to n-bit codewords; Generator Matrix — G = [I P] in systematic form; Parity Check Matrix — H with GH^T = 0.
- **Q.** Explain *Syndrome Decoding & Hamming Codes* in detail with a neat diagram.  
  **Key points:** Syndromes locate errors. Syndrome — s = rH^T; zero if no detectable error; Hamming Code — single-error-correcting code with n = 2^m − 1; Standard Array — table used for syndrome decoding.
- **Q.** Explain *Cyclic Codes* in detail with a neat diagram.  
  **Key points:** Cyclic codes are generated by polynomials. Generator Polynomial — g(x) divides x^n − 1; Systematic Cyclic Encoding — remainder of x^(n−k)m(x) / g(x) gives parity; Shift Register Encoder — LFSR implementation of cyclic encoding.
- **Q.** Explain *BCH & Reed-Solomon Codes* in detail with a neat diagram.  
  **Key points:** Powerful cyclic codes correct multiple errors. BCH Code — cyclic code correcting multiple random errors; Reed-Solomon Code — non-binary code correcting burst errors; Application — RS codes in CDs, QR codes and DVB.

## Unit 5: Convolutional & Modern Codes

### Short answer (2-3 marks)

- **Q.** Define *Constraint Length*.  
  **Ans.** K, number of shifts affecting output
- **Q.** Define *Code Tree*.  
  **Ans.** tree representation of encoder outputs
- **Q.** Define *State Diagram*.  
  **Ans.** encoder states and transitions
- **Q.** Define *Trellis*.  
  **Ans.** time-indexed state diagram
- **Q.** Define *Path Metric*.  
  **Ans.** accumulated distance along a path
- **Q.** Define *Survivor Path*.  
  **Ans.** best path into each state retained
- **Q.** Define *Interleaver*.  
  **Ans.** spreads burst errors into random errors
- **Q.** Define *Concatenated Code*.  
  **Ans.** inner and outer codes combined
- **Q.** Define *Burst Error*.  
  **Ans.** consecutive bit errors
- **Q.** Define *Turbo Code*.  
  **Ans.** parallel concatenated convolutional codes with iterative decoding
- **Q.** Define *LDPC Code*.  
  **Ans.** low-density parity-check code decoded by belief propagation
- **Q.** Define *Polar Code*.  
  **Ans.** capacity-achieving code used in 5G control channels

### Long answer (7 marks)

- **Q.** Explain *Convolutional Encoding* in detail with a neat diagram.  
  **Key points:** Encoders have memory. Constraint Length — K, number of shifts affecting output; Code Tree — tree representation of encoder outputs; State Diagram — encoder states and transitions.
- **Q.** Explain *Viterbi Decoding* in detail with a neat diagram.  
  **Key points:** Maximum-likelihood decoding uses the trellis. Trellis — time-indexed state diagram; Path Metric — accumulated distance along a path; Survivor Path — best path into each state retained.
- **Q.** Explain *Interleaving & Concatenated Codes* in detail with a neat diagram.  
  **Key points:** Combining codes handles bursts. Interleaver — spreads burst errors into random errors; Concatenated Code — inner and outer codes combined; Burst Error — consecutive bit errors.
- **Q.** Explain *Turbo & LDPC Codes* in detail with a neat diagram.  
  **Key points:** Modern codes approach Shannon limit. Turbo Code — parallel concatenated convolutional codes with iterative decoding; LDPC Code — low-density parity-check code decoded by belief propagation; Polar Code — capacity-achieving code used in 5G control channels.

