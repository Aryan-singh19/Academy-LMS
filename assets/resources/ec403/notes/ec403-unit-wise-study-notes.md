# EC-403 Analog Communication — Unit-wise Study Notes

> Amplitude, angle and pulse modulation, transmitters, receivers, noise and performance.

## Unit 1: Amplitude Modulation

### AM Fundamentals

AM varies carrier amplitude with the message.

- **Modulation Index:** m = Am/Ac; overmodulation when m > 1
- **AM Spectrum:** carrier plus upper and lower sidebands
- **Total Power:** Pt = Pc(1 + m²/2)

### AM Generation

AM is produced by linear or square-law methods.

- **Square-law Modulator:** uses non-linear device to produce AM
- **Collector Modulation:** high-level AM in the final stage
- **Switching Modulator:** diode switching to generate AM

### AM Detection

Detectors recover the message from AM.

- **Envelope Detector:** diode-RC circuit following the envelope
- **Diagonal Clipping:** distortion when RC is too large
- **Square-law Detector:** demodulates small-signal AM

### DSB-SC, SSB & VSB

Variants save power or bandwidth.

- **DSB-SC:** carrier suppressed; needs coherent detection
- **SSB:** one sideband; half the AM bandwidth
- **VSB:** vestigial sideband used for TV video

## Unit 2: Angle Modulation

### Frequency Modulation

FM varies carrier frequency with the message.

- **Frequency Deviation:** Δf = kf × Am
- **FM Modulation Index:** β = Δf / fm
- **Narrowband FM:** β much less than 1, bandwidth about 2fm

### FM Spectrum & Bandwidth

FM produces many sidebands given by Bessel functions.

- **Bessel Function Coefficients:** amplitudes of FM sidebands
- **Carson's Rule:** BW ≈ 2(Δf + fm)
- **Wideband FM:** β greater than 1

### FM Generation

FM is generated directly or indirectly.

- **Direct Method:** varactor varies oscillator frequency
- **Armstrong Method:** indirect FM via narrowband PM and frequency multiplication
- **Frequency Multiplier:** multiplies carrier and deviation

### FM Detection

Discriminators convert frequency changes to amplitude.

- **Foster-Seeley Discriminator:** phase-shift discriminator
- **Ratio Detector:** discriminator insensitive to amplitude variations
- **PLL Demodulator:** phase-locked loop tracks frequency changes

## Unit 3: Transmitters & Receivers

### AM & FM Transmitters

Transmitters generate and amplify modulated signals.

- **Low-level Modulation:** modulation before final amplification
- **High-level Modulation:** modulation at the final stage
- **Pre-emphasis:** boosting high audio frequencies before FM transmission

### Tuned Radio Frequency Receiver

Early receivers amplify at RF directly.

- **TRF Receiver:** cascaded tuned RF amplifiers
- **Selectivity Problem:** bandwidth varies with tuning
- **Sensitivity:** minimum input for a specified output

### Superheterodyne Receiver

Converting to a fixed IF gives uniform performance.

- **Intermediate Frequency:** fixed frequency, e.g. 455 kHz for AM
- **Image Frequency:** fs + 2IF, rejected by RF stage
- **Mixer:** combines signal and local oscillator to produce IF

### AGC & Receiver Characteristics

Control circuits keep output steady.

- **AGC:** automatic gain control adjusting gain with signal strength
- **Fidelity:** faithful reproduction of all modulating frequencies
- **De-emphasis:** restores audio balance after pre-emphasis

## Unit 4: Noise in Communication

### Sources of Noise

Noise originates inside and outside the system.

- **Thermal Noise:** Pn = kTB
- **Shot Noise:** random arrival of charge carriers
- **Atmospheric Noise:** noise from lightning and natural sources

### Noise Figure & Temperature

Noise is quantified for amplifiers and receivers.

- **Noise Figure:** ratio of input SNR to output SNR
- **Friis Formula:** overall noise factor of cascaded stages
- **Equivalent Noise Temperature:** Te = (F − 1)T0

### Noise in AM Systems

AM performance depends on detection method.

- **Figure of Merit:** output SNR divided by channel SNR
- **Threshold Effect:** sharp SNR drop in envelope detection at low input
- **Coherent Detection:** synchronous demodulation with a local carrier

### Noise in FM Systems

FM trades bandwidth for noise performance.

- **FM Noise Advantage:** output SNR grows with β²
- **Capture Effect:** stronger FM signal suppresses the weaker
- **FM Threshold:** minimum carrier-to-noise ratio for good FM performance

## Unit 5: Pulse Modulation & Multiplexing

### Sampling & PAM

Pulse modulation starts with sampling.

- **Natural Sampling:** pulse tops follow the signal
- **Flat-top Sampling:** sample-and-hold pulses
- **Aperture Effect:** distortion from flat-top pulse width

### PWM & PPM

Pulse timing carries the message.

- **PWM:** pulse width proportional to sample value
- **PPM:** pulse position varies with sample value
- **PPM Generation:** derived from PWM trailing edges

### Frequency Division Multiplexing

FDM stacks signals in frequency.

- **FDM:** signals placed in separate frequency bands
- **Guard Band:** unused band separating channels
- **Group and Supergroup:** FDM hierarchy in telephony

### Time Division Multiplexing

TDM interleaves samples in time.

- **TDM:** signals share time slots
- **Frame:** one cycle of all channel samples
- **Synchronisation:** aligning receiver timing with transmitter

## Standard Textbooks

- *Communication Systems* — Simon Haykin
- *Electronic Communication Systems* — George Kennedy
- *Principles of Communication Systems* — Taub & Schilling

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
