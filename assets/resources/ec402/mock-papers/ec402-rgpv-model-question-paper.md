# EC-402 Signals & Systems — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 4: EC-402.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Continuous-time Signal. Explain its role in Continuous & Discrete Signals with a suitable example or diagram. **[7]**

(b) Explain Elementary Signals in detail. Differentiate between Unit Step and Unit Impulse. **[7]**

**Q2.** *(Unit 2)*

(a) Define Convolution Sum. Explain its role in Convolution with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Stability & Impulse Response. Bring out the significance of BIBO Stability and Stability Condition. **[7]**

**Q3.** *(Unit 3)*

(a) Define Frequency Response. Explain its role in Discrete-time Fourier Transform with a suitable example or diagram. **[7]**

(b) Explain DFT & FFT in detail. Differentiate between DFT and FFT. **[7]**

**Q4.** *(Unit 4)*

(a) Define Transfer Function H(z). Explain its role in System Analysis with Transforms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Laplace Transform & ROC. Bring out the significance of Bilateral Laplace and ROC. **[7]**

**Q5.** *(Unit 5)*

(a) Define Aliasing. Explain its role in Sampling Theorem with a suitable example or diagram. **[7]**

(b) Explain Reconstruction in detail. Differentiate between Ideal Reconstruction and Zero-order Hold. **[7]**

**Q6.** *(Unit 1)*

(a) Define Energy Signal. Explain its role in Even, Odd, Energy & Power Signals with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Continuous & Discrete Signals. Bring out the significance of Continuous-time Signal and Discrete-time Signal. **[7]**

**Q7.** *(Unit 3)*

(a) Define Exponential Fourier Series. Explain its role in Fourier Series with a suitable example or diagram. **[7]**

(b) Explain Continuous-time Fourier Transform in detail. Differentiate between CTFT and Duality. **[7]**

**Q8.** *(Unit 5)*

(a) Define Zero-order Hold. Explain its role in Reconstruction with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Correlation. Bring out the significance of Cross-correlation and Autocorrelation. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Unit Impulse. Explain its role in Elementary Signals with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Signal Operations. Bring out the significance of Time Shifting and Time Scaling. **[7]**

**Q2.** *(Unit 2)*

(a) Define Memoryless System. Explain its role in Stability & Impulse Response with a suitable example or diagram. **[7]**

(b) Explain Difference & Differential Equations in detail. Differentiate between Difference Equation and FIR System. **[7]**

**Q3.** *(Unit 3)*

(a) Define DFT. Explain its role in DFT & FFT with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fourier Series. Bring out the significance of Exponential Fourier Series and Parseval's Theorem. **[7]**

**Q4.** *(Unit 4)*

(a) Define ROC. Explain its role in Laplace Transform & ROC with a suitable example or diagram. **[7]**

(b) Explain Z-Transform in detail. Differentiate between Z-Transform and ROC of Causal Sequence. **[7]**

**Q5.** *(Unit 5)*

(a) Define Interpolation. Explain its role in Reconstruction with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Correlation. Bring out the significance of Cross-correlation and Autocorrelation. **[7]**

**Q6.** *(Unit 2)*

(a) Define Linearity. Explain its role in System Properties with a suitable example or diagram. **[7]**

(b) Explain Convolution in detail. Differentiate between Convolution Integral and Convolution Sum. **[7]**

**Q7.** *(Unit 4)*

(a) Define ROC of Causal Sequence. Explain its role in Z-Transform with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Inverse Z-Transform. Bring out the significance of Partial Fraction Method and Power Series Method. **[7]**

**Q8.** *(Unit 1)*

(a) Define Time Reversal. Explain its role in Signal Operations with a suitable example or diagram. **[7]**

(b) Explain Even, Odd, Energy & Power Signals in detail. Differentiate between Even Signal and Odd Signal. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Continuous-time Signal: defined for every instant t
- **Q1(b):** Unit Step: u(t) = 1 for t ≥ 0, else 0 | Unit Impulse: δ(t) with unit area concentrated at t = 0 | Complex Exponential: e^(jωt), the eigenfunction of LTI systems
- **Q2(a):** Convolution Sum: y[n] = Σ x[k] h[n − k]
- **Q2(b):** BIBO Stability: bounded input gives bounded output | Stability Condition: impulse response absolutely integrable | Memoryless System: output depends only on current input
- **Q3(a):** Frequency Response: DTFT of the impulse response
- **Q3(b):** DFT: N-point transform of a finite sequence | FFT: fast algorithm computing DFT in O(N log N) | Circular Convolution: convolution corresponding to DFT multiplication
- **Q4(a):** Transfer Function H(z): Y(z)/X(z)
- **Q4(b):** Bilateral Laplace: X(s) = ∫ x(t) e^(−st) dt over all t | ROC: region of s-plane where the transform converges | Stable Causal System: all poles in the left half s-plane
- **Q5(a):** Aliasing: spectral overlap from undersampling
- **Q5(b):** Ideal Reconstruction: sinc interpolation by an ideal low-pass filter | Zero-order Hold: holds each sample until the next | Interpolation: estimating values between samples
- **Q6(a):** Energy Signal: finite energy and zero average power
- **Q6(b):** Continuous-time Signal: defined for every instant t | Discrete-time Signal: defined only at integer n | Digital Signal: discrete in both time and amplitude
- **Q7(a):** Exponential Fourier Series: x(t) = Σ ck e^(jkω0t)
- **Q7(b):** CTFT: X(jω) = ∫ x(t) e^(−jωt) dt | Duality: time and frequency roles can be swapped | Convolution Property: convolution in time is multiplication in frequency
- **Q8(a):** Zero-order Hold: holds each sample until the next
- **Q8(b):** Cross-correlation: similarity of one signal with a shifted other | Autocorrelation: correlation of a signal with itself | Power Spectral Density: Fourier transform of autocorrelation

## Recommended Books

- *Signals and Systems* — Oppenheim, Willsky & Nawab
- *Signals and Systems* — Simon Haykin & Barry Van Veen
- *Principles of Linear Systems and Signals* — B. P. Lathi
