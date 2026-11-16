# EC-502 Digital Communication — Unit-wise Study Notes

> Pulse code modulation, baseband transmission, digital modulation, detection, spread spectrum and error control.

## Unit 1: Sampling & Waveform Coding

### Sampling & Quantisation

Analog signals are digitised by sampling and quantising.

- **Nyquist Criterion:** sample at fs ≥ 2fm
- **Uniform Quantisation:** equal step sizes
- **Quantisation Noise Power:** Δ²/12

### Pulse Code Modulation

PCM encodes each sample into bits.

- **PCM Bit Rate:** n × fs
- **SQNR:** about 6.02n + 1.76 dB for n bits
- **Companding:** μ-law or A-law compression for non-uniform quantisation

### DPCM & Delta Modulation

Differential schemes send changes.

- **DPCM:** encodes difference between sample and prediction
- **Delta Modulation:** 1-bit DPCM
- **Adaptive Delta Modulation:** step size adapts to reduce slope overload

### Line Codes & Spectra

Line codes shape the baseband spectrum.

- **Unipolar NRZ:** 1 as +V, 0 as zero
- **Bipolar RZ:** alternate polarity pulses that return to zero
- **Manchester Code:** self-clocking with mid-bit transition

## Unit 2: Baseband Transmission

### Inter-symbol Interference

Pulses spread and overlap in band-limited channels.

- **ISI:** overlap of adjacent symbol pulses
- **Nyquist Criterion for Zero ISI:** pulse zero at all other sampling instants
- **Raised Cosine Filter:** pulse shaping with roll-off factor

### Eye Diagram

Eye pattern visualises ISI and noise.

- **Eye Diagram:** overlay of received symbol waveforms
- **Eye Opening:** margin against noise
- **Timing Jitter:** width of zero-crossing region

### Equalisation

Equalisers compensate channel distortion.

- **Equaliser:** filter reversing channel distortion
- **Zero-forcing Equaliser:** forces ISI to zero at sampling instants
- **Adaptive Equaliser:** updates coefficients using LMS

### Matched Filter

Matched filters maximise SNR at the sampling time.

- **Matched Filter:** impulse response is time-reversed signal
- **Maximum SNR:** 2E/N0 at the output
- **Correlator Receiver:** equivalent implementation using multiplication and integration

## Unit 3: Digital Modulation Techniques

### Binary ASK, FSK & PSK

Binary schemes modulate one bit per symbol.

- **BASK:** on-off keying of a carrier
- **BFSK:** two frequencies for 0 and 1
- **BPSK:** phases 0 and π; best binary error performance

### DPSK & QPSK

Differential and quadrature schemes improve efficiency.

- **DPSK:** information in phase change between symbols
- **QPSK:** 2 bits per symbol with four phases
- **Offset QPSK:** staggered quadrature avoids 180° phase jumps

### M-ary Modulation & QAM

M-ary schemes send log2 M bits per symbol.

- **M-ary PSK:** M phases on a circle
- **16-QAM:** 4 bits per symbol using amplitude and phase
- **Bandwidth Efficiency:** bits per second per hertz

### MSK & GMSK

Continuous-phase schemes reduce bandwidth.

- **MSK:** minimum shift keying with h = 0.5
- **GMSK:** Gaussian-filtered MSK used in GSM
- **Continuous Phase:** no abrupt phase changes

## Unit 4: Detection & Performance

### Optimum Detection

Receivers decide symbols to minimise error.

- **Maximum Likelihood Detection:** chooses symbol with highest likelihood
- **Decision Region:** signal-space region assigned to each symbol
- **Signal Space:** vector representation using orthonormal basis functions

### Probability of Error

Error rates compare modulation schemes.

- **BPSK BER:** Q(√(2Eb/N0))
- **Coherent BFSK:** needs 3 dB more Eb/N0 than BPSK
- **Q-function:** tail probability of a standard normal distribution

### Coherent & Non-coherent Detection

Detection may or may not need carrier phase.

- **Coherent Detection:** uses phase-synchronised local carrier
- **Non-coherent Detection:** envelope detection without phase
- **Carrier Recovery:** extracting carrier phase at the receiver

### Synchronisation

Receivers align carrier, symbol and frame timing.

- **Symbol Synchronisation:** finding correct sampling instants
- **Costas Loop:** carrier recovery loop for suppressed carriers
- **Frame Synchronisation:** locating frame boundaries using sync words

## Unit 5: Spread Spectrum & Error Control

### Spread Spectrum Concepts

Spreading widens bandwidth for robustness.

- **Processing Gain:** spread bandwidth divided by data bandwidth
- **PN Sequence:** pseudo-noise binary sequence with noise-like properties
- **Jamming Margin:** tolerable interference relative to signal

### DSSS & FHSS

Two main spread spectrum techniques.

- **DSSS:** data multiplied by a fast PN chip sequence
- **FHSS:** carrier frequency hops by a PN pattern
- **CDMA:** multiple users share band using different codes

### Linear Block Codes

Block codes add parity for error control.

- **Generator Matrix:** produces codewords from messages
- **Syndrome:** s = rH^T reveals error pattern
- **Minimum Distance:** dmin; corrects (dmin − 1)/2 errors

### Convolutional Codes

Convolutional codes encode continuous streams.

- **Constraint Length:** number of input bits affecting output
- **Trellis Diagram:** state transitions over time
- **Viterbi Decoding:** maximum-likelihood decoding through the trellis

## Standard Textbooks

- *Digital Communications* — Simon Haykin
- *Digital Communications* — John G. Proakis
- *Digital Communications: Fundamentals and Applications* — Bernard Sklar

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
