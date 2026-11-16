# EC-402 Signals & Systems — Question Bank with Answer Hints

## Unit 1: Signals & Their Classification

### Short answer (2-3 marks)

- **Q.** Define *Continuous-time Signal*.  
  **Ans.** defined for every instant t
- **Q.** Define *Discrete-time Signal*.  
  **Ans.** defined only at integer n
- **Q.** Define *Digital Signal*.  
  **Ans.** discrete in both time and amplitude
- **Q.** Define *Unit Step*.  
  **Ans.** u(t) = 1 for t ≥ 0, else 0
- **Q.** Define *Unit Impulse*.  
  **Ans.** δ(t) with unit area concentrated at t = 0
- **Q.** Define *Complex Exponential*.  
  **Ans.** e^(jωt), the eigenfunction of LTI systems
- **Q.** Define *Time Shifting*.  
  **Ans.** x(t − t0) delays a signal
- **Q.** Define *Time Scaling*.  
  **Ans.** x(at) compresses or expands a signal
- **Q.** Define *Time Reversal*.  
  **Ans.** x(−t) reflects the signal about t = 0
- **Q.** Define *Even Signal*.  
  **Ans.** x(t) = x(−t)
- **Q.** Define *Odd Signal*.  
  **Ans.** x(t) = −x(−t)
- **Q.** Define *Energy Signal*.  
  **Ans.** finite energy and zero average power

### Long answer (7 marks)

- **Q.** Explain *Continuous & Discrete Signals* in detail with a neat diagram.  
  **Key points:** Signals are defined in continuous or discrete time. Continuous-time Signal — defined for every instant t; Discrete-time Signal — defined only at integer n; Digital Signal — discrete in both time and amplitude.
- **Q.** Explain *Elementary Signals* in detail with a neat diagram.  
  **Key points:** Basic signals build more complex ones. Unit Step — u(t) = 1 for t ≥ 0, else 0; Unit Impulse — δ(t) with unit area concentrated at t = 0; Complex Exponential — e^(jωt), the eigenfunction of LTI systems.
- **Q.** Explain *Signal Operations* in detail with a neat diagram.  
  **Key points:** Signals are shifted, scaled and reflected. Time Shifting — x(t − t0) delays a signal; Time Scaling — x(at) compresses or expands a signal; Time Reversal — x(−t) reflects the signal about t = 0.
- **Q.** Explain *Even, Odd, Energy & Power Signals* in detail with a neat diagram.  
  **Key points:** Signals are decomposed and classified by energy. Even Signal — x(t) = x(−t); Odd Signal — x(t) = −x(−t); Energy Signal — finite energy and zero average power.

## Unit 2: LTI Systems

### Short answer (2-3 marks)

- **Q.** Define *Linearity*.  
  **Ans.** superposition holds
- **Q.** Define *Time Invariance*.  
  **Ans.** a delayed input gives an equally delayed output
- **Q.** Define *Causality*.  
  **Ans.** output depends only on present and past inputs
- **Q.** Define *Convolution Integral*.  
  **Ans.** y(t) = ∫ x(τ) h(t − τ) dτ
- **Q.** Define *Convolution Sum*.  
  **Ans.** y[n] = Σ x[k] h[n − k]
- **Q.** Define *Commutative Property*.  
  **Ans.** x * h = h * x
- **Q.** Define *BIBO Stability*.  
  **Ans.** bounded input gives bounded output
- **Q.** Define *Stability Condition*.  
  **Ans.** impulse response absolutely integrable
- **Q.** Define *Memoryless System*.  
  **Ans.** output depends only on current input
- **Q.** Define *Difference Equation*.  
  **Ans.** relates y[n] to past outputs and inputs
- **Q.** Define *FIR System*.  
  **Ans.** finite-duration impulse response
- **Q.** Define *IIR System*.  
  **Ans.** infinite-duration impulse response with feedback

### Long answer (7 marks)

- **Q.** Explain *System Properties* in detail with a neat diagram.  
  **Key points:** Systems are classified by their input-output behaviour. Linearity — superposition holds; Time Invariance — a delayed input gives an equally delayed output; Causality — output depends only on present and past inputs.
- **Q.** Explain *Convolution* in detail with a neat diagram.  
  **Key points:** LTI output equals input convolved with impulse response. Convolution Integral — y(t) = ∫ x(τ) h(t − τ) dτ; Convolution Sum — y[n] = Σ x[k] h[n − k]; Commutative Property — x * h = h * x.
- **Q.** Explain *Stability & Impulse Response* in detail with a neat diagram.  
  **Key points:** Impulse response reveals system properties. BIBO Stability — bounded input gives bounded output; Stability Condition — impulse response absolutely integrable; Memoryless System — output depends only on current input.
- **Q.** Explain *Difference & Differential Equations* in detail with a neat diagram.  
  **Key points:** LTI systems are described by constant-coefficient equations. Difference Equation — relates y[n] to past outputs and inputs; FIR System — finite-duration impulse response; IIR System — infinite-duration impulse response with feedback.

## Unit 3: Fourier Analysis

### Short answer (2-3 marks)

- **Q.** Define *Exponential Fourier Series*.  
  **Ans.** x(t) = Σ ck e^(jkω0t)
- **Q.** Define *Parseval's Theorem*.  
  **Ans.** signal power equals sum of squared coefficient magnitudes
- **Q.** Define *Gibbs Phenomenon*.  
  **Ans.** overshoot near discontinuities in partial sums
- **Q.** Define *CTFT*.  
  **Ans.** X(jω) = ∫ x(t) e^(−jωt) dt
- **Q.** Define *Duality*.  
  **Ans.** time and frequency roles can be swapped
- **Q.** Define *Convolution Property*.  
  **Ans.** convolution in time is multiplication in frequency
- **Q.** Define *DTFT*.  
  **Ans.** X(e^jω) = Σ x[n] e^(−jωn)
- **Q.** Define *Periodicity of DTFT*.  
  **Ans.** DTFT repeats every 2π
- **Q.** Define *Frequency Response*.  
  **Ans.** DTFT of the impulse response
- **Q.** Define *DFT*.  
  **Ans.** N-point transform of a finite sequence
- **Q.** Define *FFT*.  
  **Ans.** fast algorithm computing DFT in O(N log N)
- **Q.** Define *Circular Convolution*.  
  **Ans.** convolution corresponding to DFT multiplication

### Long answer (7 marks)

- **Q.** Explain *Fourier Series* in detail with a neat diagram.  
  **Key points:** Periodic signals are sums of harmonics. Exponential Fourier Series — x(t) = Σ ck e^(jkω0t); Parseval's Theorem — signal power equals sum of squared coefficient magnitudes; Gibbs Phenomenon — overshoot near discontinuities in partial sums.
- **Q.** Explain *Continuous-time Fourier Transform* in detail with a neat diagram.  
  **Key points:** CTFT gives the spectrum of aperiodic signals. CTFT — X(jω) = ∫ x(t) e^(−jωt) dt; Duality — time and frequency roles can be swapped; Convolution Property — convolution in time is multiplication in frequency.
- **Q.** Explain *Discrete-time Fourier Transform* in detail with a neat diagram.  
  **Key points:** DTFT is periodic in frequency. DTFT — X(e^jω) = Σ x[n] e^(−jωn); Periodicity of DTFT — DTFT repeats every 2π; Frequency Response — DTFT of the impulse response.
- **Q.** Explain *DFT & FFT* in detail with a neat diagram.  
  **Key points:** Computable transforms of finite sequences. DFT — N-point transform of a finite sequence; FFT — fast algorithm computing DFT in O(N log N); Circular Convolution — convolution corresponding to DFT multiplication.

## Unit 4: Laplace & Z-Transform

### Short answer (2-3 marks)

- **Q.** Define *Bilateral Laplace*.  
  **Ans.** X(s) = ∫ x(t) e^(−st) dt over all t
- **Q.** Define *ROC*.  
  **Ans.** region of s-plane where the transform converges
- **Q.** Define *Stable Causal System*.  
  **Ans.** all poles in the left half s-plane
- **Q.** Define *Z-Transform*.  
  **Ans.** X(z) = Σ x[n] z^(−n)
- **Q.** Define *ROC of Causal Sequence*.  
  **Ans.** exterior of a circle
- **Q.** Define *Stability in z-domain*.  
  **Ans.** all poles inside the unit circle
- **Q.** Define *Partial Fraction Method*.  
  **Ans.** expands X(z)/z into simple terms
- **Q.** Define *Power Series Method*.  
  **Ans.** long division gives samples directly
- **Q.** Define *Residue Method*.  
  **Ans.** contour integration using residues
- **Q.** Define *Transfer Function H(z)*.  
  **Ans.** Y(z)/X(z)
- **Q.** Define *Pole-Zero Plot*.  
  **Ans.** locations of poles and zeros in the complex plane
- **Q.** Define *Initial Value Theorem (Z)*.  
  **Ans.** x[0] = lim X(z) as z → ∞

### Long answer (7 marks)

- **Q.** Explain *Laplace Transform & ROC* in detail with a neat diagram.  
  **Key points:** Laplace generalises Fourier analysis. Bilateral Laplace — X(s) = ∫ x(t) e^(−st) dt over all t; ROC — region of s-plane where the transform converges; Stable Causal System — all poles in the left half s-plane.
- **Q.** Explain *Z-Transform* in detail with a neat diagram.  
  **Key points:** Z-transform is the discrete counterpart of Laplace. Z-Transform — X(z) = Σ x[n] z^(−n); ROC of Causal Sequence — exterior of a circle; Stability in z-domain — all poles inside the unit circle.
- **Q.** Explain *Inverse Z-Transform* in detail with a neat diagram.  
  **Key points:** Sequences are recovered from X(z). Partial Fraction Method — expands X(z)/z into simple terms; Power Series Method — long division gives samples directly; Residue Method — contour integration using residues.
- **Q.** Explain *System Analysis with Transforms* in detail with a neat diagram.  
  **Key points:** Transforms give transfer functions and responses. Transfer Function H(z) — Y(z)/X(z); Pole-Zero Plot — locations of poles and zeros in the complex plane; Initial Value Theorem (Z) — x[0] = lim X(z) as z → ∞.

## Unit 5: Sampling & Correlation

### Short answer (2-3 marks)

- **Q.** Define *Sampling Theorem*.  
  **Ans.** signal recoverable if fs > 2fmax
- **Q.** Define *Aliasing*.  
  **Ans.** spectral overlap from undersampling
- **Q.** Define *Nyquist Rate*.  
  **Ans.** twice the highest frequency
- **Q.** Define *Ideal Reconstruction*.  
  **Ans.** sinc interpolation by an ideal low-pass filter
- **Q.** Define *Zero-order Hold*.  
  **Ans.** holds each sample until the next
- **Q.** Define *Interpolation*.  
  **Ans.** estimating values between samples
- **Q.** Define *Cross-correlation*.  
  **Ans.** similarity of one signal with a shifted other
- **Q.** Define *Autocorrelation*.  
  **Ans.** correlation of a signal with itself
- **Q.** Define *Power Spectral Density*.  
  **Ans.** Fourier transform of autocorrelation
- **Q.** Define *Random Process*.  
  **Ans.** ensemble of random signals indexed by time
- **Q.** Define *Wide-sense Stationary*.  
  **Ans.** constant mean and shift-invariant autocorrelation
- **Q.** Define *White Noise*.  
  **Ans.** flat power spectral density

### Long answer (7 marks)

- **Q.** Explain *Sampling Theorem* in detail with a neat diagram.  
  **Key points:** Sampling links continuous and discrete signals. Sampling Theorem — signal recoverable if fs > 2fmax; Aliasing — spectral overlap from undersampling; Nyquist Rate — twice the highest frequency.
- **Q.** Explain *Reconstruction* in detail with a neat diagram.  
  **Key points:** Samples are interpolated back into a continuous signal. Ideal Reconstruction — sinc interpolation by an ideal low-pass filter; Zero-order Hold — holds each sample until the next; Interpolation — estimating values between samples.
- **Q.** Explain *Correlation* in detail with a neat diagram.  
  **Key points:** Correlation measures similarity between signals. Cross-correlation — similarity of one signal with a shifted other; Autocorrelation — correlation of a signal with itself; Power Spectral Density — Fourier transform of autocorrelation.
- **Q.** Explain *Random Signals* in detail with a neat diagram.  
  **Key points:** Random processes model noise. Random Process — ensemble of random signals indexed by time; Wide-sense Stationary — constant mean and shift-invariant autocorrelation; White Noise — flat power spectral density.

