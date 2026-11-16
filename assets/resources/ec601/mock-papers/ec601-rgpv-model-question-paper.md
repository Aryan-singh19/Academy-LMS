# EC-601 Digital Signal Processing — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 6: EC-601.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Unit Sample Sequence. Explain its role in Discrete-time Signals with a suitable example or diagram. **[7]**

(b) Explain LTI Systems & Convolution in detail. Differentiate between Linear Convolution and Causal System. **[7]**

**Q2.** *(Unit 2)*

(a) Define Causal Stable System. Explain its role in System Function & Pole-Zero Analysis with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Frequency Response. Bring out the significance of Magnitude Response and Phase Response. **[7]**

**Q3.** *(Unit 3)*

(a) Define FFT Complexity. Explain its role in FFT Algorithms with a suitable example or diagram. **[7]**

(b) Explain Linear Filtering via DFT in detail. Differentiate between Overlap-Add Method and Overlap-Save Method. **[7]**

**Q4.** *(Unit 4)*

(a) Define Bilinear Transformation. Explain its role in Bilinear & Impulse Invariant Transformation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss FIR Filter Design by Windowing. Bring out the significance of Window Method and Hamming Window. **[7]**

**Q5.** *(Unit 5)*

(a) Define Direct Form II. Explain its role in Filter Realisation Structures with a suitable example or diagram. **[7]**

(b) Explain Finite Word-length Effects in detail. Differentiate between Coefficient Quantisation and Limit Cycles. **[7]**

**Q6.** *(Unit 1)*

(a) Define Application. Explain its role in Correlation of Sequences with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Discrete-time Signals. Bring out the significance of Unit Sample Sequence and Periodic Sequence. **[7]**

**Q7.** *(Unit 3)*

(a) Define DFT. Explain its role in Discrete Fourier Transform with a suitable example or diagram. **[7]**

(b) Explain DFT Properties in detail. Differentiate between Circular Shift and Circular Convolution. **[7]**

**Q8.** *(Unit 5)*

(a) Define Limit Cycles. Explain its role in Finite Word-length Effects with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Multirate Signal Processing. Bring out the significance of Decimation and Interpolation. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Causal System. Explain its role in LTI Systems & Convolution with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Difference Equations. Bring out the significance of Recursive System and Non-recursive System. **[7]**

**Q2.** *(Unit 2)*

(a) Define Linear Phase. Explain its role in Frequency Response with a suitable example or diagram. **[7]**

(b) Explain Inverse Z-Transform in detail. Differentiate between Partial Fractions and Long Division. **[7]**

**Q3.** *(Unit 3)*

(a) Define Overlap-Add Method. Explain its role in Linear Filtering via DFT with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Discrete Fourier Transform. Bring out the significance of DFT and Twiddle Factor. **[7]**

**Q4.** *(Unit 4)*

(a) Define Hamming Window. Explain its role in FIR Filter Design by Windowing with a suitable example or diagram. **[7]**

(b) Explain Frequency Sampling Design in detail. Differentiate between Frequency Sampling and Transition Samples. **[7]**

**Q5.** *(Unit 5)*

(a) Define Overflow. Explain its role in Finite Word-length Effects with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Multirate Signal Processing. Bring out the significance of Decimation and Interpolation. **[7]**

**Q6.** *(Unit 2)*

(a) Define Z-Transform. Explain its role in Z-Transform & ROC with a suitable example or diagram. **[7]**

(b) Explain System Function & Pole-Zero Analysis in detail. Differentiate between System Function and Causal Stable System. **[7]**

**Q7.** *(Unit 4)*

(a) Define Transition Samples. Explain its role in Frequency Sampling Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss IIR Filters from Analog Prototypes. Bring out the significance of Butterworth Filter and Chebyshev Filter. **[7]**

**Q8.** *(Unit 1)*

(a) Define Zero-state Response. Explain its role in Difference Equations with a suitable example or diagram. **[7]**

(b) Explain Correlation of Sequences in detail. Differentiate between Cross-correlation and Autocorrelation. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Unit Sample Sequence: δ[n] = 1 at n = 0, else 0
- **Q1(b):** Linear Convolution: y[n] = Σ x[k] h[n − k] | Causal System: h[n] = 0 for n < 0 | Stable System: Σ of absolute h[n] is finite
- **Q2(a):** Causal Stable System: all poles inside the unit circle
- **Q2(b):** Magnitude Response: magnitude of H(e^jω) | Phase Response: angle of H(e^jω) | Linear Phase: constant group delay, no phase distortion
- **Q3(a):** FFT Complexity: (N/2) log2 N complex multiplications
- **Q3(b):** Overlap-Add Method: adds overlapping output blocks | Overlap-Save Method: discards aliased output samples | Linear via Circular: zero-pad to length L + M − 1
- **Q4(a):** Bilinear Transformation: s = (2/T)(z − 1)/(z + 1)
- **Q4(b):** Window Method: multiply ideal h[n] by a window | Hamming Window: reduces side lobes compared to rectangular | Linear Phase FIR: symmetric impulse response
- **Q5(a):** Direct Form II: canonic form with minimum delays
- **Q5(b):** Coefficient Quantisation: changes pole-zero positions | Limit Cycles: sustained oscillations from rounding | Overflow: result exceeds register range
- **Q6(a):** Application: radar echo delay estimation
- **Q6(b):** Unit Sample Sequence: δ[n] = 1 at n = 0, else 0 | Periodic Sequence: x[n + N] = x[n] for integer N | Energy of Sequence: Σ x[n]² over all n
- **Q7(a):** DFT: X[k] = Σ x[n] e^(−j2πkn/N)
- **Q7(b):** Circular Shift: shift in time multiplies DFT by a phase factor | Circular Convolution: product of DFTs | Zero Padding: appending zeros to interpolate the spectrum
- **Q8(a):** Limit Cycles: sustained oscillations from rounding
- **Q8(b):** Decimation: filtering then downsampling by M | Interpolation: upsampling by L then filtering | Polyphase Filter: efficient structure for multirate filtering

## Recommended Books

- *Digital Signal Processing: Principles, Algorithms and Applications* — Proakis & Manolakis
- *Discrete-Time Signal Processing* — Oppenheim & Schafer
- *Digital Signal Processing* — S. K. Mitra
