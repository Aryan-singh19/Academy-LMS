# EC-403 Analog Communication — Question Bank with Answer Hints

## Unit 1: Amplitude Modulation

### Short answer (2-3 marks)

- **Q.** Define *Modulation Index*.  
  **Ans.** m = Am/Ac; overmodulation when m > 1
- **Q.** Define *AM Spectrum*.  
  **Ans.** carrier plus upper and lower sidebands
- **Q.** Define *Total Power*.  
  **Ans.** Pt = Pc(1 + m²/2)
- **Q.** Define *Square-law Modulator*.  
  **Ans.** uses non-linear device to produce AM
- **Q.** Define *Collector Modulation*.  
  **Ans.** high-level AM in the final stage
- **Q.** Define *Switching Modulator*.  
  **Ans.** diode switching to generate AM
- **Q.** Define *Envelope Detector*.  
  **Ans.** diode-RC circuit following the envelope
- **Q.** Define *Diagonal Clipping*.  
  **Ans.** distortion when RC is too large
- **Q.** Define *Square-law Detector*.  
  **Ans.** demodulates small-signal AM
- **Q.** Define *DSB-SC*.  
  **Ans.** carrier suppressed; needs coherent detection
- **Q.** Define *SSB*.  
  **Ans.** one sideband; half the AM bandwidth
- **Q.** Define *VSB*.  
  **Ans.** vestigial sideband used for TV video

### Long answer (7 marks)

- **Q.** Explain *AM Fundamentals* in detail with a neat diagram.  
  **Key points:** AM varies carrier amplitude with the message. Modulation Index — m = Am/Ac; overmodulation when m > 1; AM Spectrum — carrier plus upper and lower sidebands; Total Power — Pt = Pc(1 + m²/2).
- **Q.** Explain *AM Generation* in detail with a neat diagram.  
  **Key points:** AM is produced by linear or square-law methods. Square-law Modulator — uses non-linear device to produce AM; Collector Modulation — high-level AM in the final stage; Switching Modulator — diode switching to generate AM.
- **Q.** Explain *AM Detection* in detail with a neat diagram.  
  **Key points:** Detectors recover the message from AM. Envelope Detector — diode-RC circuit following the envelope; Diagonal Clipping — distortion when RC is too large; Square-law Detector — demodulates small-signal AM.
- **Q.** Explain *DSB-SC, SSB & VSB* in detail with a neat diagram.  
  **Key points:** Variants save power or bandwidth. DSB-SC — carrier suppressed; needs coherent detection; SSB — one sideband; half the AM bandwidth; VSB — vestigial sideband used for TV video.

## Unit 2: Angle Modulation

### Short answer (2-3 marks)

- **Q.** Define *Frequency Deviation*.  
  **Ans.** Δf = kf × Am
- **Q.** Define *FM Modulation Index*.  
  **Ans.** β = Δf / fm
- **Q.** Define *Narrowband FM*.  
  **Ans.** β much less than 1, bandwidth about 2fm
- **Q.** Define *Bessel Function Coefficients*.  
  **Ans.** amplitudes of FM sidebands
- **Q.** Define *Carson's Rule*.  
  **Ans.** BW ≈ 2(Δf + fm)
- **Q.** Define *Wideband FM*.  
  **Ans.** β greater than 1
- **Q.** Define *Direct Method*.  
  **Ans.** varactor varies oscillator frequency
- **Q.** Define *Armstrong Method*.  
  **Ans.** indirect FM via narrowband PM and frequency multiplication
- **Q.** Define *Frequency Multiplier*.  
  **Ans.** multiplies carrier and deviation
- **Q.** Define *Foster-Seeley Discriminator*.  
  **Ans.** phase-shift discriminator
- **Q.** Define *Ratio Detector*.  
  **Ans.** discriminator insensitive to amplitude variations
- **Q.** Define *PLL Demodulator*.  
  **Ans.** phase-locked loop tracks frequency changes

### Long answer (7 marks)

- **Q.** Explain *Frequency Modulation* in detail with a neat diagram.  
  **Key points:** FM varies carrier frequency with the message. Frequency Deviation — Δf = kf × Am; FM Modulation Index — β = Δf / fm; Narrowband FM — β much less than 1, bandwidth about 2fm.
- **Q.** Explain *FM Spectrum & Bandwidth* in detail with a neat diagram.  
  **Key points:** FM produces many sidebands given by Bessel functions. Bessel Function Coefficients — amplitudes of FM sidebands; Carson's Rule — BW ≈ 2(Δf + fm); Wideband FM — β greater than 1.
- **Q.** Explain *FM Generation* in detail with a neat diagram.  
  **Key points:** FM is generated directly or indirectly. Direct Method — varactor varies oscillator frequency; Armstrong Method — indirect FM via narrowband PM and frequency multiplication; Frequency Multiplier — multiplies carrier and deviation.
- **Q.** Explain *FM Detection* in detail with a neat diagram.  
  **Key points:** Discriminators convert frequency changes to amplitude. Foster-Seeley Discriminator — phase-shift discriminator; Ratio Detector — discriminator insensitive to amplitude variations; PLL Demodulator — phase-locked loop tracks frequency changes.

## Unit 3: Transmitters & Receivers

### Short answer (2-3 marks)

- **Q.** Define *Low-level Modulation*.  
  **Ans.** modulation before final amplification
- **Q.** Define *High-level Modulation*.  
  **Ans.** modulation at the final stage
- **Q.** Define *Pre-emphasis*.  
  **Ans.** boosting high audio frequencies before FM transmission
- **Q.** Define *TRF Receiver*.  
  **Ans.** cascaded tuned RF amplifiers
- **Q.** Define *Selectivity Problem*.  
  **Ans.** bandwidth varies with tuning
- **Q.** Define *Sensitivity*.  
  **Ans.** minimum input for a specified output
- **Q.** Define *Intermediate Frequency*.  
  **Ans.** fixed frequency, e.g. 455 kHz for AM
- **Q.** Define *Image Frequency*.  
  **Ans.** fs + 2IF, rejected by RF stage
- **Q.** Define *Mixer*.  
  **Ans.** combines signal and local oscillator to produce IF
- **Q.** Define *AGC*.  
  **Ans.** automatic gain control adjusting gain with signal strength
- **Q.** Define *Fidelity*.  
  **Ans.** faithful reproduction of all modulating frequencies
- **Q.** Define *De-emphasis*.  
  **Ans.** restores audio balance after pre-emphasis

### Long answer (7 marks)

- **Q.** Explain *AM & FM Transmitters* in detail with a neat diagram.  
  **Key points:** Transmitters generate and amplify modulated signals. Low-level Modulation — modulation before final amplification; High-level Modulation — modulation at the final stage; Pre-emphasis — boosting high audio frequencies before FM transmission.
- **Q.** Explain *Tuned Radio Frequency Receiver* in detail with a neat diagram.  
  **Key points:** Early receivers amplify at RF directly. TRF Receiver — cascaded tuned RF amplifiers; Selectivity Problem — bandwidth varies with tuning; Sensitivity — minimum input for a specified output.
- **Q.** Explain *Superheterodyne Receiver* in detail with a neat diagram.  
  **Key points:** Converting to a fixed IF gives uniform performance. Intermediate Frequency — fixed frequency, e.g. 455 kHz for AM; Image Frequency — fs + 2IF, rejected by RF stage; Mixer — combines signal and local oscillator to produce IF.
- **Q.** Explain *AGC & Receiver Characteristics* in detail with a neat diagram.  
  **Key points:** Control circuits keep output steady. AGC — automatic gain control adjusting gain with signal strength; Fidelity — faithful reproduction of all modulating frequencies; De-emphasis — restores audio balance after pre-emphasis.

## Unit 4: Noise in Communication

### Short answer (2-3 marks)

- **Q.** Define *Thermal Noise*.  
  **Ans.** Pn = kTB
- **Q.** Define *Shot Noise*.  
  **Ans.** random arrival of charge carriers
- **Q.** Define *Atmospheric Noise*.  
  **Ans.** noise from lightning and natural sources
- **Q.** Define *Noise Figure*.  
  **Ans.** ratio of input SNR to output SNR
- **Q.** Define *Friis Formula*.  
  **Ans.** overall noise factor of cascaded stages
- **Q.** Define *Equivalent Noise Temperature*.  
  **Ans.** Te = (F − 1)T0
- **Q.** Define *Figure of Merit*.  
  **Ans.** output SNR divided by channel SNR
- **Q.** Define *Threshold Effect*.  
  **Ans.** sharp SNR drop in envelope detection at low input
- **Q.** Define *Coherent Detection*.  
  **Ans.** synchronous demodulation with a local carrier
- **Q.** Define *FM Noise Advantage*.  
  **Ans.** output SNR grows with β²
- **Q.** Define *Capture Effect*.  
  **Ans.** stronger FM signal suppresses the weaker
- **Q.** Define *FM Threshold*.  
  **Ans.** minimum carrier-to-noise ratio for good FM performance

### Long answer (7 marks)

- **Q.** Explain *Sources of Noise* in detail with a neat diagram.  
  **Key points:** Noise originates inside and outside the system. Thermal Noise — Pn = kTB; Shot Noise — random arrival of charge carriers; Atmospheric Noise — noise from lightning and natural sources.
- **Q.** Explain *Noise Figure & Temperature* in detail with a neat diagram.  
  **Key points:** Noise is quantified for amplifiers and receivers. Noise Figure — ratio of input SNR to output SNR; Friis Formula — overall noise factor of cascaded stages; Equivalent Noise Temperature — Te = (F − 1)T0.
- **Q.** Explain *Noise in AM Systems* in detail with a neat diagram.  
  **Key points:** AM performance depends on detection method. Figure of Merit — output SNR divided by channel SNR; Threshold Effect — sharp SNR drop in envelope detection at low input; Coherent Detection — synchronous demodulation with a local carrier.
- **Q.** Explain *Noise in FM Systems* in detail with a neat diagram.  
  **Key points:** FM trades bandwidth for noise performance. FM Noise Advantage — output SNR grows with β²; Capture Effect — stronger FM signal suppresses the weaker; FM Threshold — minimum carrier-to-noise ratio for good FM performance.

## Unit 5: Pulse Modulation & Multiplexing

### Short answer (2-3 marks)

- **Q.** Define *Natural Sampling*.  
  **Ans.** pulse tops follow the signal
- **Q.** Define *Flat-top Sampling*.  
  **Ans.** sample-and-hold pulses
- **Q.** Define *Aperture Effect*.  
  **Ans.** distortion from flat-top pulse width
- **Q.** Define *PWM*.  
  **Ans.** pulse width proportional to sample value
- **Q.** Define *PPM*.  
  **Ans.** pulse position varies with sample value
- **Q.** Define *PPM Generation*.  
  **Ans.** derived from PWM trailing edges
- **Q.** Define *FDM*.  
  **Ans.** signals placed in separate frequency bands
- **Q.** Define *Guard Band*.  
  **Ans.** unused band separating channels
- **Q.** Define *Group and Supergroup*.  
  **Ans.** FDM hierarchy in telephony
- **Q.** Define *TDM*.  
  **Ans.** signals share time slots
- **Q.** Define *Frame*.  
  **Ans.** one cycle of all channel samples
- **Q.** Define *Synchronisation*.  
  **Ans.** aligning receiver timing with transmitter

### Long answer (7 marks)

- **Q.** Explain *Sampling & PAM* in detail with a neat diagram.  
  **Key points:** Pulse modulation starts with sampling. Natural Sampling — pulse tops follow the signal; Flat-top Sampling — sample-and-hold pulses; Aperture Effect — distortion from flat-top pulse width.
- **Q.** Explain *PWM & PPM* in detail with a neat diagram.  
  **Key points:** Pulse timing carries the message. PWM — pulse width proportional to sample value; PPM — pulse position varies with sample value; PPM Generation — derived from PWM trailing edges.
- **Q.** Explain *Frequency Division Multiplexing* in detail with a neat diagram.  
  **Key points:** FDM stacks signals in frequency. FDM — signals placed in separate frequency bands; Guard Band — unused band separating channels; Group and Supergroup — FDM hierarchy in telephony.
- **Q.** Explain *Time Division Multiplexing* in detail with a neat diagram.  
  **Key points:** TDM interleaves samples in time. TDM — signals share time slots; Frame — one cycle of all channel samples; Synchronisation — aligning receiver timing with transmitter.

