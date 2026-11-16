# CSIT-402 Analog & Digital Communication — Unit-wise Study Notes

> Signals, AM/FM modulation, sampling, pulse modulation, digital modulation and information theory.

## Unit 1: Signals & Spectra

### Signals & Classification

Communication systems process signals in time and frequency.

- **Periodic Signal:** repeats every fixed period T
- **Energy Signal:** finite total energy, zero average power
- **Power Signal:** finite non-zero average power, e.g. periodic signals

### Fourier Analysis of Signals

Fourier methods reveal frequency content.

- **Fourier Series:** periodic signal expressed as sum of harmonics
- **Fourier Transform:** frequency spectrum of a non-periodic signal
- **Bandwidth:** range of frequencies a signal occupies

### Communication System Model

Every system has source, transmitter, channel and receiver.

- **Transmitter:** converts message into a signal suitable for the channel
- **Channel:** medium carrying the signal, adding noise and distortion
- **Receiver:** recovers the message from the received signal

### Noise

Unwanted signals degrade communication.

- **Thermal Noise:** noise power N = kTB from random electron motion
- **Signal-to-Noise Ratio:** signal power divided by noise power, often in dB
- **Noise Figure:** degradation of SNR caused by a device

## Unit 2: Analog Modulation

### Amplitude Modulation

Carrier amplitude varies with the message.

- **AM:** carrier amplitude varied in proportion to the message
- **Modulation Index:** ratio of message amplitude to carrier amplitude
- **AM Power:** Pt = Pc(1 + m²/2)

### DSB-SC & SSB

Suppressing carrier or one sideband saves power and bandwidth.

- **DSB-SC:** double sideband suppressed carrier modulation
- **SSB:** single sideband transmission halving the bandwidth
- **Balanced Modulator:** circuit producing DSB-SC by cancelling the carrier

### Frequency & Phase Modulation

Angle modulation varies frequency or phase.

- **FM:** carrier frequency varied with the message
- **Frequency Deviation:** maximum shift of carrier frequency from its centre
- **Carson's Rule:** FM bandwidth ≈ 2(Δf + fm)

### Radio Receivers

Receivers select and demodulate the wanted station.

- **Superheterodyne Receiver:** converts incoming signal to a fixed intermediate frequency
- **Envelope Detector:** diode circuit demodulating AM
- **Image Frequency:** unwanted frequency that also produces the IF

## Unit 3: Sampling & Pulse Modulation

### Sampling Theorem

Band-limited signals are recovered from samples.

- **Nyquist Rate:** sampling at least twice the highest frequency, fs ≥ 2fm
- **Aliasing:** overlap of spectra when sampling too slowly
- **Anti-aliasing Filter:** low-pass filter before sampling

### PAM, PWM & PPM

Pulse parameters carry the message.

- **PAM:** pulse amplitude modulation
- **PWM:** pulse width varied with the message
- **PPM:** pulse position varied with the message

### Pulse Code Modulation

PCM digitises analog signals.

- **PCM:** sampling, quantising and encoding into binary
- **Quantisation Noise:** error due to rounding samples to levels
- **Companding:** compressing then expanding to equalise SNR, e.g. μ-law

### Delta & Adaptive Delta Modulation

DM sends one bit per sample of the change.

- **Delta Modulation:** transmits whether the signal rose or fell
- **Slope Overload:** staircase cannot follow a rapidly changing signal
- **Granular Noise:** hunting of the staircase around a slowly varying signal

## Unit 4: Digital Modulation

### ASK, FSK & PSK

Digital data modulates amplitude, frequency or phase.

- **ASK:** amplitude shift keying
- **FSK:** frequency shift keying using two frequencies
- **BPSK:** binary phase shift keying with phases 0° and 180°

### QPSK & QAM

Multi-level schemes send several bits per symbol.

- **QPSK:** four phases, 2 bits per symbol
- **QAM:** combines amplitude and phase changes
- **Constellation Diagram:** plot of symbol points in the I-Q plane

### Line Coding

Line codes represent bits as voltage levels.

- **NRZ:** non-return-to-zero line code
- **Manchester Coding:** transition in the middle of every bit
- **AMI:** alternate mark inversion with alternating polarity for 1s

### Multiplexing

Multiple signals share a single channel.

- **FDM:** frequency division multiplexing
- **TDM:** time division multiplexing
- **CDMA:** code division multiple access using spreading codes

## Unit 5: Information Theory & Coding

### Information & Entropy

Information theory quantifies uncertainty.

- **Information Content:** I = log2(1/p) bits
- **Entropy:** average information per symbol, H = −Σ p log2 p
- **Information Rate:** R = r × H bits per second

### Channel Capacity

Capacity limits the error-free data rate.

- **Shannon-Hartley Theorem:** C = B log2(1 + S/N)
- **Channel Capacity:** maximum reliable information rate of a channel
- **Bandwidth-SNR Trade-off:** bandwidth can be exchanged for signal power

### Source Coding

Source codes remove redundancy.

- **Shannon-Fano Coding:** splits symbols into equally probable groups
- **Huffman Coding:** optimal prefix code from least probable merges
- **Code Efficiency:** entropy divided by average code length

### Error Control Coding

Channel codes detect and correct errors.

- **Linear Block Code:** n-bit codewords from k message bits
- **Cyclic Code:** code where any cyclic shift is a codeword
- **CRC:** cyclic redundancy check for error detection

## Standard Textbooks

- *Communication Systems* — Simon Haykin
- *Modern Digital and Analog Communication Systems* — B. P. Lathi
- *Electronic Communication Systems* — George Kennedy

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
