# EC-601 Digital Signal Processing — Question Bank with Answer Hints

## Unit 1: Discrete-time Signals & Systems

### Short answer (2-3 marks)

- **Q.** Define *Unit Sample Sequence*.  
  **Ans.** δ[n] = 1 at n = 0, else 0
- **Q.** Define *Periodic Sequence*.  
  **Ans.** x[n + N] = x[n] for integer N
- **Q.** Define *Energy of Sequence*.  
  **Ans.** Σ x[n]² over all n
- **Q.** Define *Linear Convolution*.  
  **Ans.** y[n] = Σ x[k] h[n − k]
- **Q.** Define *Causal System*.  
  **Ans.** h[n] = 0 for n < 0
- **Q.** Define *Stable System*.  
  **Ans.** Σ of absolute h[n] is finite
- **Q.** Define *Recursive System*.  
  **Ans.** output depends on past outputs
- **Q.** Define *Non-recursive System*.  
  **Ans.** output depends only on inputs (FIR)
- **Q.** Define *Zero-state Response*.  
  **Ans.** response with zero initial conditions
- **Q.** Define *Cross-correlation*.  
  **Ans.** r_xy[l] = Σ x[n] y[n − l]
- **Q.** Define *Autocorrelation*.  
  **Ans.** correlation of a sequence with itself
- **Q.** Define *Application*.  
  **Ans.** radar echo delay estimation

### Long answer (7 marks)

- **Q.** Explain *Discrete-time Signals* in detail with a neat diagram.  
  **Key points:** DSP works on sequences of samples. Unit Sample Sequence — δ[n] = 1 at n = 0, else 0; Periodic Sequence — x[n + N] = x[n] for integer N; Energy of Sequence — Σ x[n]² over all n.
- **Q.** Explain *LTI Systems & Convolution* in detail with a neat diagram.  
  **Key points:** LTI systems are fully described by impulse response. Linear Convolution — y[n] = Σ x[k] h[n − k]; Causal System — h[n] = 0 for n < 0; Stable System — Σ of absolute h[n] is finite.
- **Q.** Explain *Difference Equations* in detail with a neat diagram.  
  **Key points:** Recursive equations describe digital filters. Recursive System — output depends on past outputs; Non-recursive System — output depends only on inputs (FIR); Zero-state Response — response with zero initial conditions.
- **Q.** Explain *Correlation of Sequences* in detail with a neat diagram.  
  **Key points:** Correlation finds similarity and delay. Cross-correlation — r_xy[l] = Σ x[n] y[n − l]; Autocorrelation — correlation of a sequence with itself; Application — radar echo delay estimation.

## Unit 2: Z-Transform & Frequency Analysis

### Short answer (2-3 marks)

- **Q.** Define *Z-Transform*.  
  **Ans.** X(z) = Σ x[n] z^(−n)
- **Q.** Define *ROC*.  
  **Ans.** values of z for which the series converges
- **Q.** Define *Unit Circle*.  
  **Ans.** z = e^(jω); Z-transform on it gives DTFT
- **Q.** Define *System Function*.  
  **Ans.** H(z) = Y(z)/X(z)
- **Q.** Define *Causal Stable System*.  
  **Ans.** all poles inside the unit circle
- **Q.** Define *Minimum Phase System*.  
  **Ans.** all zeros inside the unit circle
- **Q.** Define *Magnitude Response*.  
  **Ans.** magnitude of H(e^jω)
- **Q.** Define *Phase Response*.  
  **Ans.** angle of H(e^jω)
- **Q.** Define *Linear Phase*.  
  **Ans.** constant group delay, no phase distortion
- **Q.** Define *Partial Fractions*.  
  **Ans.** expand into first-order terms
- **Q.** Define *Long Division*.  
  **Ans.** gives samples as power series
- **Q.** Define *One-sided Z-transform*.  
  **Ans.** handles initial conditions in difference equations

### Long answer (7 marks)

- **Q.** Explain *Z-Transform & ROC* in detail with a neat diagram.  
  **Key points:** Z-transform analyses discrete systems. Z-Transform — X(z) = Σ x[n] z^(−n); ROC — values of z for which the series converges; Unit Circle — z = e^(jω); Z-transform on it gives DTFT.
- **Q.** Explain *System Function & Pole-Zero Analysis* in detail with a neat diagram.  
  **Key points:** H(z) reveals stability and frequency response. System Function — H(z) = Y(z)/X(z); Causal Stable System — all poles inside the unit circle; Minimum Phase System — all zeros inside the unit circle.
- **Q.** Explain *Frequency Response* in detail with a neat diagram.  
  **Key points:** Frequency response is H evaluated on the unit circle. Magnitude Response — magnitude of H(e^jω); Phase Response — angle of H(e^jω); Linear Phase — constant group delay, no phase distortion.
- **Q.** Explain *Inverse Z-Transform* in detail with a neat diagram.  
  **Key points:** Time sequences are recovered from X(z). Partial Fractions — expand into first-order terms; Long Division — gives samples as power series; One-sided Z-transform — handles initial conditions in difference equations.

## Unit 3: DFT & FFT

### Short answer (2-3 marks)

- **Q.** Define *DFT*.  
  **Ans.** X[k] = Σ x[n] e^(−j2πkn/N)
- **Q.** Define *Twiddle Factor*.  
  **Ans.** W_N = e^(−j2π/N)
- **Q.** Define *Frequency Resolution*.  
  **Ans.** fs/N
- **Q.** Define *Circular Shift*.  
  **Ans.** shift in time multiplies DFT by a phase factor
- **Q.** Define *Circular Convolution*.  
  **Ans.** product of DFTs
- **Q.** Define *Zero Padding*.  
  **Ans.** appending zeros to interpolate the spectrum
- **Q.** Define *Radix-2 DIT FFT*.  
  **Ans.** splits even and odd time samples
- **Q.** Define *Butterfly*.  
  **Ans.** basic two-point FFT computation
- **Q.** Define *FFT Complexity*.  
  **Ans.** (N/2) log2 N complex multiplications
- **Q.** Define *Overlap-Add Method*.  
  **Ans.** adds overlapping output blocks
- **Q.** Define *Overlap-Save Method*.  
  **Ans.** discards aliased output samples
- **Q.** Define *Linear via Circular*.  
  **Ans.** zero-pad to length L + M − 1

### Long answer (7 marks)

- **Q.** Explain *Discrete Fourier Transform* in detail with a neat diagram.  
  **Key points:** DFT samples the DTFT at N points. DFT — X[k] = Σ x[n] e^(−j2πkn/N); Twiddle Factor — W_N = e^(−j2π/N); Frequency Resolution — fs/N.
- **Q.** Explain *DFT Properties* in detail with a neat diagram.  
  **Key points:** Properties simplify computation. Circular Shift — shift in time multiplies DFT by a phase factor; Circular Convolution — product of DFTs; Zero Padding — appending zeros to interpolate the spectrum.
- **Q.** Explain *FFT Algorithms* in detail with a neat diagram.  
  **Key points:** FFT reduces DFT complexity. Radix-2 DIT FFT — splits even and odd time samples; Butterfly — basic two-point FFT computation; FFT Complexity — (N/2) log2 N complex multiplications.
- **Q.** Explain *Linear Filtering via DFT* in detail with a neat diagram.  
  **Key points:** Long signals are filtered in blocks. Overlap-Add Method — adds overlapping output blocks; Overlap-Save Method — discards aliased output samples; Linear via Circular — zero-pad to length L + M − 1.

## Unit 4: Digital Filter Design

### Short answer (2-3 marks)

- **Q.** Define *Window Method*.  
  **Ans.** multiply ideal h[n] by a window
- **Q.** Define *Hamming Window*.  
  **Ans.** reduces side lobes compared to rectangular
- **Q.** Define *Linear Phase FIR*.  
  **Ans.** symmetric impulse response
- **Q.** Define *Frequency Sampling*.  
  **Ans.** specifies H at equally spaced frequencies
- **Q.** Define *Transition Samples*.  
  **Ans.** intermediate values reduce ripple
- **Q.** Define *Optimal Equiripple*.  
  **Ans.** Parks-McClellan minimax design
- **Q.** Define *Butterworth Filter*.  
  **Ans.** maximally flat passband
- **Q.** Define *Chebyshev Filter*.  
  **Ans.** equiripple passband, sharper roll-off
- **Q.** Define *Elliptic Filter*.  
  **Ans.** ripple in both bands, sharpest transition
- **Q.** Define *Bilinear Transformation*.  
  **Ans.** s = (2/T)(z − 1)/(z + 1)
- **Q.** Define *Frequency Warping*.  
  **Ans.** non-linear frequency mapping in bilinear transform; prewarp
- **Q.** Define *Impulse Invariance*.  
  **Ans.** samples analog impulse response; suffers aliasing

### Long answer (7 marks)

- **Q.** Explain *FIR Filter Design by Windowing* in detail with a neat diagram.  
  **Key points:** FIR filters truncate an ideal impulse response. Window Method — multiply ideal h[n] by a window; Hamming Window — reduces side lobes compared to rectangular; Linear Phase FIR — symmetric impulse response.
- **Q.** Explain *Frequency Sampling Design* in detail with a neat diagram.  
  **Key points:** FIR filters designed from frequency samples. Frequency Sampling — specifies H at equally spaced frequencies; Transition Samples — intermediate values reduce ripple; Optimal Equiripple — Parks-McClellan minimax design.
- **Q.** Explain *IIR Filters from Analog Prototypes* in detail with a neat diagram.  
  **Key points:** IIR filters map analog designs to digital. Butterworth Filter — maximally flat passband; Chebyshev Filter — equiripple passband, sharper roll-off; Elliptic Filter — ripple in both bands, sharpest transition.
- **Q.** Explain *Bilinear & Impulse Invariant Transformation* in detail with a neat diagram.  
  **Key points:** Mappings convert s-plane to z-plane. Bilinear Transformation — s = (2/T)(z − 1)/(z + 1); Frequency Warping — non-linear frequency mapping in bilinear transform; prewarp; Impulse Invariance — samples analog impulse response; suffers aliasing.

## Unit 5: Filter Structures, Multirate & DSP Processors

### Short answer (2-3 marks)

- **Q.** Define *Direct Form I*.  
  **Ans.** separate delays for input and output
- **Q.** Define *Direct Form II*.  
  **Ans.** canonic form with minimum delays
- **Q.** Define *Cascade Form*.  
  **Ans.** second-order sections in series
- **Q.** Define *Coefficient Quantisation*.  
  **Ans.** changes pole-zero positions
- **Q.** Define *Limit Cycles*.  
  **Ans.** sustained oscillations from rounding
- **Q.** Define *Overflow*.  
  **Ans.** result exceeds register range
- **Q.** Define *Decimation*.  
  **Ans.** filtering then downsampling by M
- **Q.** Define *Interpolation*.  
  **Ans.** upsampling by L then filtering
- **Q.** Define *Polyphase Filter*.  
  **Ans.** efficient structure for multirate filtering
- **Q.** Define *MAC Unit*.  
  **Ans.** multiply-accumulate in one cycle
- **Q.** Define *Harvard Architecture*.  
  **Ans.** separate program and data memories
- **Q.** Define *Circular Buffer*.  
  **Ans.** efficient delay-line addressing

### Long answer (7 marks)

- **Q.** Explain *Filter Realisation Structures* in detail with a neat diagram.  
  **Key points:** Same filter can be built in several structures. Direct Form I — separate delays for input and output; Direct Form II — canonic form with minimum delays; Cascade Form — second-order sections in series.
- **Q.** Explain *Finite Word-length Effects* in detail with a neat diagram.  
  **Key points:** Quantisation affects digital filters. Coefficient Quantisation — changes pole-zero positions; Limit Cycles — sustained oscillations from rounding; Overflow — result exceeds register range.
- **Q.** Explain *Multirate Signal Processing* in detail with a neat diagram.  
  **Key points:** Sampling rates are changed by decimation and interpolation. Decimation — filtering then downsampling by M; Interpolation — upsampling by L then filtering; Polyphase Filter — efficient structure for multirate filtering.
- **Q.** Explain *DSP Processors* in detail with a neat diagram.  
  **Key points:** Special processors execute DSP efficiently. MAC Unit — multiply-accumulate in one cycle; Harvard Architecture — separate program and data memories; Circular Buffer — efficient delay-line addressing.

