# EC-601 Digital Signal Processing — Unit-wise Study Notes

> Discrete-time systems, Z-transform, DFT/FFT, FIR and IIR filter design, multirate DSP and DSP processors.

## Unit 1: Discrete-time Signals & Systems

### Discrete-time Signals

DSP works on sequences of samples.

- **Unit Sample Sequence:** δ[n] = 1 at n = 0, else 0
- **Periodic Sequence:** x[n + N] = x[n] for integer N
- **Energy of Sequence:** Σ x[n]² over all n

### LTI Systems & Convolution

LTI systems are fully described by impulse response.

- **Linear Convolution:** y[n] = Σ x[k] h[n − k]
- **Causal System:** h[n] = 0 for n < 0
- **Stable System:** Σ of absolute h[n] is finite

### Difference Equations

Recursive equations describe digital filters.

- **Recursive System:** output depends on past outputs
- **Non-recursive System:** output depends only on inputs (FIR)
- **Zero-state Response:** response with zero initial conditions

### Correlation of Sequences

Correlation finds similarity and delay.

- **Cross-correlation:** r_xy[l] = Σ x[n] y[n − l]
- **Autocorrelation:** correlation of a sequence with itself
- **Application:** radar echo delay estimation

## Unit 2: Z-Transform & Frequency Analysis

### Z-Transform & ROC

Z-transform analyses discrete systems.

- **Z-Transform:** X(z) = Σ x[n] z^(−n)
- **ROC:** values of z for which the series converges
- **Unit Circle:** z = e^(jω); Z-transform on it gives DTFT

### System Function & Pole-Zero Analysis

H(z) reveals stability and frequency response.

- **System Function:** H(z) = Y(z)/X(z)
- **Causal Stable System:** all poles inside the unit circle
- **Minimum Phase System:** all zeros inside the unit circle

### Frequency Response

Frequency response is H evaluated on the unit circle.

- **Magnitude Response:** magnitude of H(e^jω)
- **Phase Response:** angle of H(e^jω)
- **Linear Phase:** constant group delay, no phase distortion

### Inverse Z-Transform

Time sequences are recovered from X(z).

- **Partial Fractions:** expand into first-order terms
- **Long Division:** gives samples as power series
- **One-sided Z-transform:** handles initial conditions in difference equations

## Unit 3: DFT & FFT

### Discrete Fourier Transform

DFT samples the DTFT at N points.

- **DFT:** X[k] = Σ x[n] e^(−j2πkn/N)
- **Twiddle Factor:** W_N = e^(−j2π/N)
- **Frequency Resolution:** fs/N

### DFT Properties

Properties simplify computation.

- **Circular Shift:** shift in time multiplies DFT by a phase factor
- **Circular Convolution:** product of DFTs
- **Zero Padding:** appending zeros to interpolate the spectrum

### FFT Algorithms

FFT reduces DFT complexity.

- **Radix-2 DIT FFT:** splits even and odd time samples
- **Butterfly:** basic two-point FFT computation
- **FFT Complexity:** (N/2) log2 N complex multiplications

### Linear Filtering via DFT

Long signals are filtered in blocks.

- **Overlap-Add Method:** adds overlapping output blocks
- **Overlap-Save Method:** discards aliased output samples
- **Linear via Circular:** zero-pad to length L + M − 1

## Unit 4: Digital Filter Design

### FIR Filter Design by Windowing

FIR filters truncate an ideal impulse response.

- **Window Method:** multiply ideal h[n] by a window
- **Hamming Window:** reduces side lobes compared to rectangular
- **Linear Phase FIR:** symmetric impulse response

### Frequency Sampling Design

FIR filters designed from frequency samples.

- **Frequency Sampling:** specifies H at equally spaced frequencies
- **Transition Samples:** intermediate values reduce ripple
- **Optimal Equiripple:** Parks-McClellan minimax design

### IIR Filters from Analog Prototypes

IIR filters map analog designs to digital.

- **Butterworth Filter:** maximally flat passband
- **Chebyshev Filter:** equiripple passband, sharper roll-off
- **Elliptic Filter:** ripple in both bands, sharpest transition

### Bilinear & Impulse Invariant Transformation

Mappings convert s-plane to z-plane.

- **Bilinear Transformation:** s = (2/T)(z − 1)/(z + 1)
- **Frequency Warping:** non-linear frequency mapping in bilinear transform; prewarp
- **Impulse Invariance:** samples analog impulse response; suffers aliasing

## Unit 5: Filter Structures, Multirate & DSP Processors

### Filter Realisation Structures

Same filter can be built in several structures.

- **Direct Form I:** separate delays for input and output
- **Direct Form II:** canonic form with minimum delays
- **Cascade Form:** second-order sections in series

### Finite Word-length Effects

Quantisation affects digital filters.

- **Coefficient Quantisation:** changes pole-zero positions
- **Limit Cycles:** sustained oscillations from rounding
- **Overflow:** result exceeds register range

### Multirate Signal Processing

Sampling rates are changed by decimation and interpolation.

- **Decimation:** filtering then downsampling by M
- **Interpolation:** upsampling by L then filtering
- **Polyphase Filter:** efficient structure for multirate filtering

### DSP Processors

Special processors execute DSP efficiently.

- **MAC Unit:** multiply-accumulate in one cycle
- **Harvard Architecture:** separate program and data memories
- **Circular Buffer:** efficient delay-line addressing

## Standard Textbooks

- *Digital Signal Processing: Principles, Algorithms and Applications* — Proakis & Manolakis
- *Discrete-Time Signal Processing* — Oppenheim & Schafer
- *Digital Signal Processing* — S. K. Mitra

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
