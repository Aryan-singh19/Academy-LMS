# CSIT-402 Analog & Digital Communication — Question Bank with Answer Hints

## Unit 1: Signals & Spectra

### Short answer (2-3 marks)

- **Q.** Define *Periodic Signal*.  
  **Ans.** repeats every fixed period T
- **Q.** Define *Energy Signal*.  
  **Ans.** finite total energy, zero average power
- **Q.** Define *Power Signal*.  
  **Ans.** finite non-zero average power, e.g. periodic signals
- **Q.** Define *Fourier Series*.  
  **Ans.** periodic signal expressed as sum of harmonics
- **Q.** Define *Fourier Transform*.  
  **Ans.** frequency spectrum of a non-periodic signal
- **Q.** Define *Bandwidth*.  
  **Ans.** range of frequencies a signal occupies
- **Q.** Define *Transmitter*.  
  **Ans.** converts message into a signal suitable for the channel
- **Q.** Define *Channel*.  
  **Ans.** medium carrying the signal, adding noise and distortion
- **Q.** Define *Receiver*.  
  **Ans.** recovers the message from the received signal
- **Q.** Define *Thermal Noise*.  
  **Ans.** noise power N = kTB from random electron motion
- **Q.** Define *Signal-to-Noise Ratio*.  
  **Ans.** signal power divided by noise power, often in dB
- **Q.** Define *Noise Figure*.  
  **Ans.** degradation of SNR caused by a device

### Long answer (7 marks)

- **Q.** Explain *Signals & Classification* in detail with a neat diagram.  
  **Key points:** Communication systems process signals in time and frequency. Periodic Signal — repeats every fixed period T; Energy Signal — finite total energy, zero average power; Power Signal — finite non-zero average power, e.g. periodic signals.
- **Q.** Explain *Fourier Analysis of Signals* in detail with a neat diagram.  
  **Key points:** Fourier methods reveal frequency content. Fourier Series — periodic signal expressed as sum of harmonics; Fourier Transform — frequency spectrum of a non-periodic signal; Bandwidth — range of frequencies a signal occupies.
- **Q.** Explain *Communication System Model* in detail with a neat diagram.  
  **Key points:** Every system has source, transmitter, channel and receiver. Transmitter — converts message into a signal suitable for the channel; Channel — medium carrying the signal, adding noise and distortion; Receiver — recovers the message from the received signal.
- **Q.** Explain *Noise* in detail with a neat diagram.  
  **Key points:** Unwanted signals degrade communication. Thermal Noise — noise power N = kTB from random electron motion; Signal-to-Noise Ratio — signal power divided by noise power, often in dB; Noise Figure — degradation of SNR caused by a device.

## Unit 2: Analog Modulation

### Short answer (2-3 marks)

- **Q.** Define *AM*.  
  **Ans.** carrier amplitude varied in proportion to the message
- **Q.** Define *Modulation Index*.  
  **Ans.** ratio of message amplitude to carrier amplitude
- **Q.** Define *AM Power*.  
  **Ans.** Pt = Pc(1 + m²/2)
- **Q.** Define *DSB-SC*.  
  **Ans.** double sideband suppressed carrier modulation
- **Q.** Define *SSB*.  
  **Ans.** single sideband transmission halving the bandwidth
- **Q.** Define *Balanced Modulator*.  
  **Ans.** circuit producing DSB-SC by cancelling the carrier
- **Q.** Define *FM*.  
  **Ans.** carrier frequency varied with the message
- **Q.** Define *Frequency Deviation*.  
  **Ans.** maximum shift of carrier frequency from its centre
- **Q.** Define *Carson's Rule*.  
  **Ans.** FM bandwidth ≈ 2(Δf + fm)
- **Q.** Define *Superheterodyne Receiver*.  
  **Ans.** converts incoming signal to a fixed intermediate frequency
- **Q.** Define *Envelope Detector*.  
  **Ans.** diode circuit demodulating AM
- **Q.** Define *Image Frequency*.  
  **Ans.** unwanted frequency that also produces the IF

### Long answer (7 marks)

- **Q.** Explain *Amplitude Modulation* in detail with a neat diagram.  
  **Key points:** Carrier amplitude varies with the message. AM — carrier amplitude varied in proportion to the message; Modulation Index — ratio of message amplitude to carrier amplitude; AM Power — Pt = Pc(1 + m²/2).
- **Q.** Explain *DSB-SC & SSB* in detail with a neat diagram.  
  **Key points:** Suppressing carrier or one sideband saves power and bandwidth. DSB-SC — double sideband suppressed carrier modulation; SSB — single sideband transmission halving the bandwidth; Balanced Modulator — circuit producing DSB-SC by cancelling the carrier.
- **Q.** Explain *Frequency & Phase Modulation* in detail with a neat diagram.  
  **Key points:** Angle modulation varies frequency or phase. FM — carrier frequency varied with the message; Frequency Deviation — maximum shift of carrier frequency from its centre; Carson's Rule — FM bandwidth ≈ 2(Δf + fm).
- **Q.** Explain *Radio Receivers* in detail with a neat diagram.  
  **Key points:** Receivers select and demodulate the wanted station. Superheterodyne Receiver — converts incoming signal to a fixed intermediate frequency; Envelope Detector — diode circuit demodulating AM; Image Frequency — unwanted frequency that also produces the IF.

## Unit 3: Sampling & Pulse Modulation

### Short answer (2-3 marks)

- **Q.** Define *Nyquist Rate*.  
  **Ans.** sampling at least twice the highest frequency, fs ≥ 2fm
- **Q.** Define *Aliasing*.  
  **Ans.** overlap of spectra when sampling too slowly
- **Q.** Define *Anti-aliasing Filter*.  
  **Ans.** low-pass filter before sampling
- **Q.** Define *PAM*.  
  **Ans.** pulse amplitude modulation
- **Q.** Define *PWM*.  
  **Ans.** pulse width varied with the message
- **Q.** Define *PPM*.  
  **Ans.** pulse position varied with the message
- **Q.** Define *PCM*.  
  **Ans.** sampling, quantising and encoding into binary
- **Q.** Define *Quantisation Noise*.  
  **Ans.** error due to rounding samples to levels
- **Q.** Define *Companding*.  
  **Ans.** compressing then expanding to equalise SNR, e.g. μ-law
- **Q.** Define *Delta Modulation*.  
  **Ans.** transmits whether the signal rose or fell
- **Q.** Define *Slope Overload*.  
  **Ans.** staircase cannot follow a rapidly changing signal
- **Q.** Define *Granular Noise*.  
  **Ans.** hunting of the staircase around a slowly varying signal

### Long answer (7 marks)

- **Q.** Explain *Sampling Theorem* in detail with a neat diagram.  
  **Key points:** Band-limited signals are recovered from samples. Nyquist Rate — sampling at least twice the highest frequency, fs ≥ 2fm; Aliasing — overlap of spectra when sampling too slowly; Anti-aliasing Filter — low-pass filter before sampling.
- **Q.** Explain *PAM, PWM & PPM* in detail with a neat diagram.  
  **Key points:** Pulse parameters carry the message. PAM — pulse amplitude modulation; PWM — pulse width varied with the message; PPM — pulse position varied with the message.
- **Q.** Explain *Pulse Code Modulation* in detail with a neat diagram.  
  **Key points:** PCM digitises analog signals. PCM — sampling, quantising and encoding into binary; Quantisation Noise — error due to rounding samples to levels; Companding — compressing then expanding to equalise SNR, e.g. μ-law.
- **Q.** Explain *Delta & Adaptive Delta Modulation* in detail with a neat diagram.  
  **Key points:** DM sends one bit per sample of the change. Delta Modulation — transmits whether the signal rose or fell; Slope Overload — staircase cannot follow a rapidly changing signal; Granular Noise — hunting of the staircase around a slowly varying signal.

## Unit 4: Digital Modulation

### Short answer (2-3 marks)

- **Q.** Define *ASK*.  
  **Ans.** amplitude shift keying
- **Q.** Define *FSK*.  
  **Ans.** frequency shift keying using two frequencies
- **Q.** Define *BPSK*.  
  **Ans.** binary phase shift keying with phases 0° and 180°
- **Q.** Define *QPSK*.  
  **Ans.** four phases, 2 bits per symbol
- **Q.** Define *QAM*.  
  **Ans.** combines amplitude and phase changes
- **Q.** Define *Constellation Diagram*.  
  **Ans.** plot of symbol points in the I-Q plane
- **Q.** Define *NRZ*.  
  **Ans.** non-return-to-zero line code
- **Q.** Define *Manchester Coding*.  
  **Ans.** transition in the middle of every bit
- **Q.** Define *AMI*.  
  **Ans.** alternate mark inversion with alternating polarity for 1s
- **Q.** Define *FDM*.  
  **Ans.** frequency division multiplexing
- **Q.** Define *TDM*.  
  **Ans.** time division multiplexing
- **Q.** Define *CDMA*.  
  **Ans.** code division multiple access using spreading codes

### Long answer (7 marks)

- **Q.** Explain *ASK, FSK & PSK* in detail with a neat diagram.  
  **Key points:** Digital data modulates amplitude, frequency or phase. ASK — amplitude shift keying; FSK — frequency shift keying using two frequencies; BPSK — binary phase shift keying with phases 0° and 180°.
- **Q.** Explain *QPSK & QAM* in detail with a neat diagram.  
  **Key points:** Multi-level schemes send several bits per symbol. QPSK — four phases, 2 bits per symbol; QAM — combines amplitude and phase changes; Constellation Diagram — plot of symbol points in the I-Q plane.
- **Q.** Explain *Line Coding* in detail with a neat diagram.  
  **Key points:** Line codes represent bits as voltage levels. NRZ — non-return-to-zero line code; Manchester Coding — transition in the middle of every bit; AMI — alternate mark inversion with alternating polarity for 1s.
- **Q.** Explain *Multiplexing* in detail with a neat diagram.  
  **Key points:** Multiple signals share a single channel. FDM — frequency division multiplexing; TDM — time division multiplexing; CDMA — code division multiple access using spreading codes.

## Unit 5: Information Theory & Coding

### Short answer (2-3 marks)

- **Q.** Define *Information Content*.  
  **Ans.** I = log2(1/p) bits
- **Q.** Define *Entropy*.  
  **Ans.** average information per symbol, H = −Σ p log2 p
- **Q.** Define *Information Rate*.  
  **Ans.** R = r × H bits per second
- **Q.** Define *Shannon-Hartley Theorem*.  
  **Ans.** C = B log2(1 + S/N)
- **Q.** Define *Channel Capacity*.  
  **Ans.** maximum reliable information rate of a channel
- **Q.** Define *Bandwidth-SNR Trade-off*.  
  **Ans.** bandwidth can be exchanged for signal power
- **Q.** Define *Shannon-Fano Coding*.  
  **Ans.** splits symbols into equally probable groups
- **Q.** Define *Huffman Coding*.  
  **Ans.** optimal prefix code from least probable merges
- **Q.** Define *Code Efficiency*.  
  **Ans.** entropy divided by average code length
- **Q.** Define *Linear Block Code*.  
  **Ans.** n-bit codewords from k message bits
- **Q.** Define *Cyclic Code*.  
  **Ans.** code where any cyclic shift is a codeword
- **Q.** Define *CRC*.  
  **Ans.** cyclic redundancy check for error detection

### Long answer (7 marks)

- **Q.** Explain *Information & Entropy* in detail with a neat diagram.  
  **Key points:** Information theory quantifies uncertainty. Information Content — I = log2(1/p) bits; Entropy — average information per symbol, H = −Σ p log2 p; Information Rate — R = r × H bits per second.
- **Q.** Explain *Channel Capacity* in detail with a neat diagram.  
  **Key points:** Capacity limits the error-free data rate. Shannon-Hartley Theorem — C = B log2(1 + S/N); Channel Capacity — maximum reliable information rate of a channel; Bandwidth-SNR Trade-off — bandwidth can be exchanged for signal power.
- **Q.** Explain *Source Coding* in detail with a neat diagram.  
  **Key points:** Source codes remove redundancy. Shannon-Fano Coding — splits symbols into equally probable groups; Huffman Coding — optimal prefix code from least probable merges; Code Efficiency — entropy divided by average code length.
- **Q.** Explain *Error Control Coding* in detail with a neat diagram.  
  **Key points:** Channel codes detect and correct errors. Linear Block Code — n-bit codewords from k message bits; Cyclic Code — code where any cyclic shift is a codeword; CRC — cyclic redundancy check for error detection.

