# EC-502 Digital Communication — Question Bank with Answer Hints

## Unit 1: Sampling & Waveform Coding

### Short answer (2-3 marks)

- **Q.** Define *Nyquist Criterion*.  
  **Ans.** sample at fs ≥ 2fm
- **Q.** Define *Uniform Quantisation*.  
  **Ans.** equal step sizes
- **Q.** Define *Quantisation Noise Power*.  
  **Ans.** Δ²/12
- **Q.** Define *PCM Bit Rate*.  
  **Ans.** n × fs
- **Q.** Define *SQNR*.  
  **Ans.** about 6.02n + 1.76 dB for n bits
- **Q.** Define *Companding*.  
  **Ans.** μ-law or A-law compression for non-uniform quantisation
- **Q.** Define *DPCM*.  
  **Ans.** encodes difference between sample and prediction
- **Q.** Define *Delta Modulation*.  
  **Ans.** 1-bit DPCM
- **Q.** Define *Adaptive Delta Modulation*.  
  **Ans.** step size adapts to reduce slope overload
- **Q.** Define *Unipolar NRZ*.  
  **Ans.** 1 as +V, 0 as zero
- **Q.** Define *Bipolar RZ*.  
  **Ans.** alternate polarity pulses that return to zero
- **Q.** Define *Manchester Code*.  
  **Ans.** self-clocking with mid-bit transition

### Long answer (7 marks)

- **Q.** Explain *Sampling & Quantisation* in detail with a neat diagram.  
  **Key points:** Analog signals are digitised by sampling and quantising. Nyquist Criterion — sample at fs ≥ 2fm; Uniform Quantisation — equal step sizes; Quantisation Noise Power — Δ²/12.
- **Q.** Explain *Pulse Code Modulation* in detail with a neat diagram.  
  **Key points:** PCM encodes each sample into bits. PCM Bit Rate — n × fs; SQNR — about 6.02n + 1.76 dB for n bits; Companding — μ-law or A-law compression for non-uniform quantisation.
- **Q.** Explain *DPCM & Delta Modulation* in detail with a neat diagram.  
  **Key points:** Differential schemes send changes. DPCM — encodes difference between sample and prediction; Delta Modulation — 1-bit DPCM; Adaptive Delta Modulation — step size adapts to reduce slope overload.
- **Q.** Explain *Line Codes & Spectra* in detail with a neat diagram.  
  **Key points:** Line codes shape the baseband spectrum. Unipolar NRZ — 1 as +V, 0 as zero; Bipolar RZ — alternate polarity pulses that return to zero; Manchester Code — self-clocking with mid-bit transition.

## Unit 2: Baseband Transmission

### Short answer (2-3 marks)

- **Q.** Define *ISI*.  
  **Ans.** overlap of adjacent symbol pulses
- **Q.** Define *Nyquist Criterion for Zero ISI*.  
  **Ans.** pulse zero at all other sampling instants
- **Q.** Define *Raised Cosine Filter*.  
  **Ans.** pulse shaping with roll-off factor
- **Q.** Define *Eye Diagram*.  
  **Ans.** overlay of received symbol waveforms
- **Q.** Define *Eye Opening*.  
  **Ans.** margin against noise
- **Q.** Define *Timing Jitter*.  
  **Ans.** width of zero-crossing region
- **Q.** Define *Equaliser*.  
  **Ans.** filter reversing channel distortion
- **Q.** Define *Zero-forcing Equaliser*.  
  **Ans.** forces ISI to zero at sampling instants
- **Q.** Define *Adaptive Equaliser*.  
  **Ans.** updates coefficients using LMS
- **Q.** Define *Matched Filter*.  
  **Ans.** impulse response is time-reversed signal
- **Q.** Define *Maximum SNR*.  
  **Ans.** 2E/N0 at the output
- **Q.** Define *Correlator Receiver*.  
  **Ans.** equivalent implementation using multiplication and integration

### Long answer (7 marks)

- **Q.** Explain *Inter-symbol Interference* in detail with a neat diagram.  
  **Key points:** Pulses spread and overlap in band-limited channels. ISI — overlap of adjacent symbol pulses; Nyquist Criterion for Zero ISI — pulse zero at all other sampling instants; Raised Cosine Filter — pulse shaping with roll-off factor.
- **Q.** Explain *Eye Diagram* in detail with a neat diagram.  
  **Key points:** Eye pattern visualises ISI and noise. Eye Diagram — overlay of received symbol waveforms; Eye Opening — margin against noise; Timing Jitter — width of zero-crossing region.
- **Q.** Explain *Equalisation* in detail with a neat diagram.  
  **Key points:** Equalisers compensate channel distortion. Equaliser — filter reversing channel distortion; Zero-forcing Equaliser — forces ISI to zero at sampling instants; Adaptive Equaliser — updates coefficients using LMS.
- **Q.** Explain *Matched Filter* in detail with a neat diagram.  
  **Key points:** Matched filters maximise SNR at the sampling time. Matched Filter — impulse response is time-reversed signal; Maximum SNR — 2E/N0 at the output; Correlator Receiver — equivalent implementation using multiplication and integration.

## Unit 3: Digital Modulation Techniques

### Short answer (2-3 marks)

- **Q.** Define *BASK*.  
  **Ans.** on-off keying of a carrier
- **Q.** Define *BFSK*.  
  **Ans.** two frequencies for 0 and 1
- **Q.** Define *BPSK*.  
  **Ans.** phases 0 and π; best binary error performance
- **Q.** Define *DPSK*.  
  **Ans.** information in phase change between symbols
- **Q.** Define *QPSK*.  
  **Ans.** 2 bits per symbol with four phases
- **Q.** Define *Offset QPSK*.  
  **Ans.** staggered quadrature avoids 180° phase jumps
- **Q.** Define *M-ary PSK*.  
  **Ans.** M phases on a circle
- **Q.** Define *16-QAM*.  
  **Ans.** 4 bits per symbol using amplitude and phase
- **Q.** Define *Bandwidth Efficiency*.  
  **Ans.** bits per second per hertz
- **Q.** Define *MSK*.  
  **Ans.** minimum shift keying with h = 0.5
- **Q.** Define *GMSK*.  
  **Ans.** Gaussian-filtered MSK used in GSM
- **Q.** Define *Continuous Phase*.  
  **Ans.** no abrupt phase changes

### Long answer (7 marks)

- **Q.** Explain *Binary ASK, FSK & PSK* in detail with a neat diagram.  
  **Key points:** Binary schemes modulate one bit per symbol. BASK — on-off keying of a carrier; BFSK — two frequencies for 0 and 1; BPSK — phases 0 and π; best binary error performance.
- **Q.** Explain *DPSK & QPSK* in detail with a neat diagram.  
  **Key points:** Differential and quadrature schemes improve efficiency. DPSK — information in phase change between symbols; QPSK — 2 bits per symbol with four phases; Offset QPSK — staggered quadrature avoids 180° phase jumps.
- **Q.** Explain *M-ary Modulation & QAM* in detail with a neat diagram.  
  **Key points:** M-ary schemes send log2 M bits per symbol. M-ary PSK — M phases on a circle; 16-QAM — 4 bits per symbol using amplitude and phase; Bandwidth Efficiency — bits per second per hertz.
- **Q.** Explain *MSK & GMSK* in detail with a neat diagram.  
  **Key points:** Continuous-phase schemes reduce bandwidth. MSK — minimum shift keying with h = 0.5; GMSK — Gaussian-filtered MSK used in GSM; Continuous Phase — no abrupt phase changes.

## Unit 4: Detection & Performance

### Short answer (2-3 marks)

- **Q.** Define *Maximum Likelihood Detection*.  
  **Ans.** chooses symbol with highest likelihood
- **Q.** Define *Decision Region*.  
  **Ans.** signal-space region assigned to each symbol
- **Q.** Define *Signal Space*.  
  **Ans.** vector representation using orthonormal basis functions
- **Q.** Define *BPSK BER*.  
  **Ans.** Q(√(2Eb/N0))
- **Q.** Define *Coherent BFSK*.  
  **Ans.** needs 3 dB more Eb/N0 than BPSK
- **Q.** Define *Q-function*.  
  **Ans.** tail probability of a standard normal distribution
- **Q.** Define *Coherent Detection*.  
  **Ans.** uses phase-synchronised local carrier
- **Q.** Define *Non-coherent Detection*.  
  **Ans.** envelope detection without phase
- **Q.** Define *Carrier Recovery*.  
  **Ans.** extracting carrier phase at the receiver
- **Q.** Define *Symbol Synchronisation*.  
  **Ans.** finding correct sampling instants
- **Q.** Define *Costas Loop*.  
  **Ans.** carrier recovery loop for suppressed carriers
- **Q.** Define *Frame Synchronisation*.  
  **Ans.** locating frame boundaries using sync words

### Long answer (7 marks)

- **Q.** Explain *Optimum Detection* in detail with a neat diagram.  
  **Key points:** Receivers decide symbols to minimise error. Maximum Likelihood Detection — chooses symbol with highest likelihood; Decision Region — signal-space region assigned to each symbol; Signal Space — vector representation using orthonormal basis functions.
- **Q.** Explain *Probability of Error* in detail with a neat diagram.  
  **Key points:** Error rates compare modulation schemes. BPSK BER — Q(√(2Eb/N0)); Coherent BFSK — needs 3 dB more Eb/N0 than BPSK; Q-function — tail probability of a standard normal distribution.
- **Q.** Explain *Coherent & Non-coherent Detection* in detail with a neat diagram.  
  **Key points:** Detection may or may not need carrier phase. Coherent Detection — uses phase-synchronised local carrier; Non-coherent Detection — envelope detection without phase; Carrier Recovery — extracting carrier phase at the receiver.
- **Q.** Explain *Synchronisation* in detail with a neat diagram.  
  **Key points:** Receivers align carrier, symbol and frame timing. Symbol Synchronisation — finding correct sampling instants; Costas Loop — carrier recovery loop for suppressed carriers; Frame Synchronisation — locating frame boundaries using sync words.

## Unit 5: Spread Spectrum & Error Control

### Short answer (2-3 marks)

- **Q.** Define *Processing Gain*.  
  **Ans.** spread bandwidth divided by data bandwidth
- **Q.** Define *PN Sequence*.  
  **Ans.** pseudo-noise binary sequence with noise-like properties
- **Q.** Define *Jamming Margin*.  
  **Ans.** tolerable interference relative to signal
- **Q.** Define *DSSS*.  
  **Ans.** data multiplied by a fast PN chip sequence
- **Q.** Define *FHSS*.  
  **Ans.** carrier frequency hops by a PN pattern
- **Q.** Define *CDMA*.  
  **Ans.** multiple users share band using different codes
- **Q.** Define *Generator Matrix*.  
  **Ans.** produces codewords from messages
- **Q.** Define *Syndrome*.  
  **Ans.** s = rH^T reveals error pattern
- **Q.** Define *Minimum Distance*.  
  **Ans.** dmin; corrects (dmin − 1)/2 errors
- **Q.** Define *Constraint Length*.  
  **Ans.** number of input bits affecting output
- **Q.** Define *Trellis Diagram*.  
  **Ans.** state transitions over time
- **Q.** Define *Viterbi Decoding*.  
  **Ans.** maximum-likelihood decoding through the trellis

### Long answer (7 marks)

- **Q.** Explain *Spread Spectrum Concepts* in detail with a neat diagram.  
  **Key points:** Spreading widens bandwidth for robustness. Processing Gain — spread bandwidth divided by data bandwidth; PN Sequence — pseudo-noise binary sequence with noise-like properties; Jamming Margin — tolerable interference relative to signal.
- **Q.** Explain *DSSS & FHSS* in detail with a neat diagram.  
  **Key points:** Two main spread spectrum techniques. DSSS — data multiplied by a fast PN chip sequence; FHSS — carrier frequency hops by a PN pattern; CDMA — multiple users share band using different codes.
- **Q.** Explain *Linear Block Codes* in detail with a neat diagram.  
  **Key points:** Block codes add parity for error control. Generator Matrix — produces codewords from messages; Syndrome — s = rH^T reveals error pattern; Minimum Distance — dmin; corrects (dmin − 1)/2 errors.
- **Q.** Explain *Convolutional Codes* in detail with a neat diagram.  
  **Key points:** Convolutional codes encode continuous streams. Constraint Length — number of input bits affecting output; Trellis Diagram — state transitions over time; Viterbi Decoding — maximum-likelihood decoding through the trellis.

