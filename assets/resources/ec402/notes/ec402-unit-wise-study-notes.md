# EC-402 Signals & Systems — Unit-wise Study Notes

> Signal classification, LTI systems, convolution, Fourier series and transforms, Laplace and Z-transforms, sampling.

## Unit 1: Signals & Their Classification

### Continuous & Discrete Signals

Signals are defined in continuous or discrete time.

- **Continuous-time Signal:** defined for every instant t
- **Discrete-time Signal:** defined only at integer n
- **Digital Signal:** discrete in both time and amplitude

### Elementary Signals

Basic signals build more complex ones.

- **Unit Step:** u(t) = 1 for t ≥ 0, else 0
- **Unit Impulse:** δ(t) with unit area concentrated at t = 0
- **Complex Exponential:** e^(jωt), the eigenfunction of LTI systems

### Signal Operations

Signals are shifted, scaled and reflected.

- **Time Shifting:** x(t − t0) delays a signal
- **Time Scaling:** x(at) compresses or expands a signal
- **Time Reversal:** x(−t) reflects the signal about t = 0

### Even, Odd, Energy & Power Signals

Signals are decomposed and classified by energy.

- **Even Signal:** x(t) = x(−t)
- **Odd Signal:** x(t) = −x(−t)
- **Energy Signal:** finite energy and zero average power

## Unit 2: LTI Systems

### System Properties

Systems are classified by their input-output behaviour.

- **Linearity:** superposition holds
- **Time Invariance:** a delayed input gives an equally delayed output
- **Causality:** output depends only on present and past inputs

### Convolution

LTI output equals input convolved with impulse response.

- **Convolution Integral:** y(t) = ∫ x(τ) h(t − τ) dτ
- **Convolution Sum:** y[n] = Σ x[k] h[n − k]
- **Commutative Property:** x * h = h * x

### Stability & Impulse Response

Impulse response reveals system properties.

- **BIBO Stability:** bounded input gives bounded output
- **Stability Condition:** impulse response absolutely integrable
- **Memoryless System:** output depends only on current input

### Difference & Differential Equations

LTI systems are described by constant-coefficient equations.

- **Difference Equation:** relates y[n] to past outputs and inputs
- **FIR System:** finite-duration impulse response
- **IIR System:** infinite-duration impulse response with feedback

## Unit 3: Fourier Analysis

### Fourier Series

Periodic signals are sums of harmonics.

- **Exponential Fourier Series:** x(t) = Σ ck e^(jkω0t)
- **Parseval's Theorem:** signal power equals sum of squared coefficient magnitudes
- **Gibbs Phenomenon:** overshoot near discontinuities in partial sums

### Continuous-time Fourier Transform

CTFT gives the spectrum of aperiodic signals.

- **CTFT:** X(jω) = ∫ x(t) e^(−jωt) dt
- **Duality:** time and frequency roles can be swapped
- **Convolution Property:** convolution in time is multiplication in frequency

### Discrete-time Fourier Transform

DTFT is periodic in frequency.

- **DTFT:** X(e^jω) = Σ x[n] e^(−jωn)
- **Periodicity of DTFT:** DTFT repeats every 2π
- **Frequency Response:** DTFT of the impulse response

### DFT & FFT

Computable transforms of finite sequences.

- **DFT:** N-point transform of a finite sequence
- **FFT:** fast algorithm computing DFT in O(N log N)
- **Circular Convolution:** convolution corresponding to DFT multiplication

## Unit 4: Laplace & Z-Transform

### Laplace Transform & ROC

Laplace generalises Fourier analysis.

- **Bilateral Laplace:** X(s) = ∫ x(t) e^(−st) dt over all t
- **ROC:** region of s-plane where the transform converges
- **Stable Causal System:** all poles in the left half s-plane

### Z-Transform

Z-transform is the discrete counterpart of Laplace.

- **Z-Transform:** X(z) = Σ x[n] z^(−n)
- **ROC of Causal Sequence:** exterior of a circle
- **Stability in z-domain:** all poles inside the unit circle

### Inverse Z-Transform

Sequences are recovered from X(z).

- **Partial Fraction Method:** expands X(z)/z into simple terms
- **Power Series Method:** long division gives samples directly
- **Residue Method:** contour integration using residues

### System Analysis with Transforms

Transforms give transfer functions and responses.

- **Transfer Function H(z):** Y(z)/X(z)
- **Pole-Zero Plot:** locations of poles and zeros in the complex plane
- **Initial Value Theorem (Z):** x[0] = lim X(z) as z → ∞

## Unit 5: Sampling & Correlation

### Sampling Theorem

Sampling links continuous and discrete signals.

- **Sampling Theorem:** signal recoverable if fs > 2fmax
- **Aliasing:** spectral overlap from undersampling
- **Nyquist Rate:** twice the highest frequency

### Reconstruction

Samples are interpolated back into a continuous signal.

- **Ideal Reconstruction:** sinc interpolation by an ideal low-pass filter
- **Zero-order Hold:** holds each sample until the next
- **Interpolation:** estimating values between samples

### Correlation

Correlation measures similarity between signals.

- **Cross-correlation:** similarity of one signal with a shifted other
- **Autocorrelation:** correlation of a signal with itself
- **Power Spectral Density:** Fourier transform of autocorrelation

### Random Signals

Random processes model noise.

- **Random Process:** ensemble of random signals indexed by time
- **Wide-sense Stationary:** constant mean and shift-invariant autocorrelation
- **White Noise:** flat power spectral density

## Standard Textbooks

- *Signals and Systems* — Oppenheim, Willsky & Nawab
- *Signals and Systems* — Simon Haykin & Barry Van Veen
- *Principles of Linear Systems and Signals* — B. P. Lathi

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
