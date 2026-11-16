# EC-801 Optical Fibre Communication — Unit-wise Study Notes

> Light propagation, fibre types, losses and dispersion, sources, detectors, links and WDM.

## Unit 1: Optical Fibre Fundamentals

### Optical Communication Overview

Light carries data through glass fibres.

- **Optical Fibre:** thin glass waveguide carrying light
- **Advantages of OFC:** huge bandwidth, low loss, EMI immunity
- **Optical Windows:** low-loss bands near 850, 1310 and 1550 nm

### Total Internal Reflection

Light is guided by refraction at core-cladding boundary.

- **Total Internal Reflection:** reflection when angle exceeds critical angle
- **Critical Angle:** sin θc = n2/n1
- **Snell's Law:** n1 sin θ1 = n2 sin θ2

### Numerical Aperture & Acceptance Angle

NA measures light-gathering ability.

- **Numerical Aperture:** NA = √(n1² − n2²)
- **Acceptance Angle:** maximum entry angle for guided rays
- **Relative Index Difference:** Δ = (n1 − n2)/n1

### Modes & V-number

Fibres support modes depending on V.

- **V-number:** V = (2πa/λ)·NA
- **Single-mode Condition:** V < 2.405
- **Number of Modes:** approximately V²/2 for step-index fibre

## Unit 2: Fibre Types & Transmission Characteristics

### Step-index & Graded-index Fibres

Index profile affects dispersion.

- **Step-index Fibre:** uniform core index with abrupt change
- **Graded-index Fibre:** core index decreases radially, reducing modal dispersion
- **Single-mode Fibre:** small core carrying one mode

### Attenuation

Signal power is lost along the fibre.

- **Attenuation:** α = (10/L) log(Pin/Pout) dB/km
- **Rayleigh Scattering:** loss proportional to 1/λ⁴
- **Absorption Loss:** due to impurities such as OH ions

### Dispersion

Pulses broaden and limit bandwidth.

- **Intermodal Dispersion:** different modes arrive at different times
- **Chromatic Dispersion:** different wavelengths travel at different speeds
- **Polarisation Mode Dispersion:** differential delay of polarisation modes

### Bending & Splicing Losses

Mechanical effects cause loss.

- **Macrobending:** loss from large-radius bends
- **Microbending:** loss from small random distortions
- **Fusion Splice:** joining fibres by melting, low loss

## Unit 3: Optical Sources

### LED Sources

LEDs are simple incoherent sources.

- **Surface-emitting LED:** emits from the surface with broad pattern
- **Edge-emitting LED:** higher brightness and narrower spectrum
- **Internal Quantum Efficiency:** fraction of recombinations that emit photons

### Laser Diodes

Lasers give coherent narrow-linewidth light.

- **Stimulated Emission:** photon triggers emission of identical photon
- **Population Inversion:** more electrons in excited state than ground
- **Threshold Current:** current above which lasing begins

### Laser Types

Structures improve single-mode operation.

- **DFB Laser:** distributed feedback laser with grating, single longitudinal mode
- **VCSEL:** vertical-cavity surface-emitting laser
- **Fabry-Perot Laser:** simple cavity laser with multiple modes

### Modulation of Sources

Data is impressed on light.

- **Direct Modulation:** varying drive current
- **External Modulator:** e.g. Mach-Zehnder modulator for high speed
- **Chirp:** frequency shift during modulation causing dispersion

## Unit 4: Optical Detectors & Receivers

### Photodetector Principles

Detectors convert light into current.

- **Responsivity:** R = Ip/P0 A/W
- **Quantum Efficiency:** electrons generated per incident photon
- **Cut-off Wavelength:** λc = 1.24/Eg µm

### PIN & APD Photodiodes

Two main detector types.

- **PIN Photodiode:** intrinsic layer widens depletion region
- **APD:** avalanche photodiode with internal gain
- **Excess Noise Factor:** extra noise due to avalanche multiplication

### Receiver Noise & Sensitivity

Noise limits detection.

- **Shot Noise:** from discrete photon arrivals
- **Thermal Noise:** from load resistor
- **Receiver Sensitivity:** minimum power for a target BER

### Receiver Structures

Front ends amplify the photocurrent.

- **Transimpedance Amplifier:** converts photocurrent to voltage
- **High-impedance Front End:** low noise but limited bandwidth
- **Bit Error Rate:** fraction of erroneous bits, often 10^−9 target

## Unit 5: Optical Links & Networks

### Link Power Budget

Budgets ensure enough power reaches the receiver.

- **Power Budget:** Ptx − Prx(min) ≥ total losses + margin
- **System Margin:** extra power allowed for ageing
- **Splice and Connector Loss:** per-joint losses included in budget

### Rise Time Budget

Bandwidth is checked through rise times.

- **Rise Time Budget:** system rise time is root-sum-square of components
- **NRZ Requirement:** tsys ≤ 0.7/B
- **Component Rise Times:** transmitter, fibre dispersion and receiver

### WDM & Optical Amplifiers

WDM multiplies fibre capacity.

- **WDM:** multiple wavelengths on one fibre
- **DWDM:** dense WDM with narrow channel spacing
- **EDFA:** erbium-doped fibre amplifier for the 1550 nm band

### Optical Networks

Fibres form access and core networks.

- **SONET/SDH:** synchronous optical network standards
- **PON:** passive optical network for FTTH
- **OTDR:** optical time domain reflectometer locating faults

## Standard Textbooks

- *Optical Fiber Communications* — Gerd Keiser
- *Optical Fiber Communications: Principles and Practice* — John M. Senior
- *Fiber-Optic Communication Systems* — Govind P. Agrawal

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
