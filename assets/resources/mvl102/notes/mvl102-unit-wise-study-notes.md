# MVL-102 Analog IC Design — Unit-wise Study Notes

> Single-stage and differential amplifiers, current mirrors, op-amps, frequency response, noise, comparators and data converters.

## Unit 1: Single-stage Amplifiers

### Small-signal Models

Models analyse amplifiers.

- **Transconductance:** gm = 2ID/(VGS − VT)
- **Output Resistance:** ro = 1/(λID)
- **Intrinsic Gain:** gm ro

### Common-source Amplifier

Basic voltage amplifier.

- **CS Gain:** −gm (ro parallel RD)
- **Source Degeneration:** improves linearity, reduces gain
- **Diode-connected Load:** gain set by transconductance ratio

### Common-gate & Source Follower

Other configurations.

- **Source Follower:** unity gain buffer
- **Common-gate:** low input impedance
- **Cascode:** CS with CG for high output resistance

### Biasing

Stable bias points.

- **Current Source Bias:** sets drain current
- **Bandgap Reference:** temperature-stable voltage
- **Constant-gm Bias:** transconductance independent of process

## Unit 2: Current Mirrors & Differential Pairs

### Current Mirrors

Mirrors copy currents.

- **Basic Current Mirror:** Iout = Iref (W/L)2/(W/L)1
- **Cascode Current Mirror:** higher output resistance
- **Wide-swing Mirror:** preserves headroom

### Differential Pair

Differential amplifiers reject common mode.

- **Differential Gain:** gm RD
- **CMRR:** differential gain / common-mode gain
- **Input Offset:** due to mismatch

### Active Load

Mirrors as loads boost gain.

- **Active-load Differential Amplifier:** mirror load converts to single-ended
- **Gain:** gm (ro2 parallel ro4)
- **Systematic Offset:** from asymmetry

### Mismatch

Random variations limit precision.

- **Pelgrom's Law:** mismatch ∝ 1/√(WL)
- **Common Centroid Layout:** cancels gradients
- **Dummy Devices:** improve matching

## Unit 3: Operational Amplifiers

### Two-stage Op-amp

High gain with compensation.

- **Two-stage Op-amp:** differential pair plus CS stage
- **Miller Compensation:** capacitor splits poles
- **Unity-gain Bandwidth:** gm1/Cc

### Folded Cascode Op-amp

Single-stage high gain.

- **Folded Cascode:** high gain and wide input range
- **Telescopic Cascode:** highest gain, limited swing
- **Output Swing:** limited by stacked devices

### Stability & Compensation

Feedback amplifiers must be stable.

- **Phase Margin:** typically 60° target
- **Right-half-plane Zero:** from feedforward through Cc
- **Nulling Resistor:** cancels RHP zero

### Common-mode Feedback

Fully differential amplifiers need CMFB.

- **Fully Differential Op-amp:** differential output
- **CMFB:** sets output common-mode
- **Slew Rate:** I/Cc

## Unit 4: Noise & Frequency Response

### Frequency Response

Poles limit bandwidth.

- **Miller Effect:** input capacitance multiplied
- **Dominant Pole:** sets bandwidth
- **Gain-bandwidth Product:** constant for single pole

### Noise Sources

Devices generate noise.

- **Thermal Noise:** 4kTγ gm current noise in MOSFET
- **Flicker Noise:** 1/f noise dominant at low frequency
- **Input-referred Noise:** output noise divided by gain

### Noise Optimisation

Design for low noise.

- **Corner Frequency:** where flicker equals thermal noise
- **Chopper Stabilisation:** moves offset and flicker noise
- **kT/C Noise:** sampling noise on capacitor

### Switched-capacitor Circuits

Capacitor ratios set gain.

- **Switched-capacitor Integrator:** resistor emulated by switched capacitor
- **Charge Injection:** error from switch turn-off
- **Clock Feedthrough:** coupling of clock to output

## Unit 5: Comparators & Data Converters

### Comparators

Comparators make binary decisions.

- **Latched Comparator:** regenerative positive feedback
- **Kickback Noise:** disturbance to input
- **Comparator Offset:** limits resolution

### DAC Architectures

DACs convert digital to analog.

- **Current-steering DAC:** high-speed switched currents
- **R-2R DAC:** resistor ladder
- **DNL and INL:** differential and integral non-linearity

### ADC Architectures

ADCs digitise signals.

- **SAR ADC:** binary search with capacitor DAC
- **Pipeline ADC:** stages each resolving few bits
- **Flash ADC:** fastest with 2^N − 1 comparators

### Sigma-Delta Converters

Oversampling and noise shaping.

- **Oversampling Ratio:** fs / 2fB
- **Noise Shaping:** pushes quantisation noise out of band
- **ENOB:** effective number of bits

## Standard Textbooks

- *Design of Analog CMOS Integrated Circuits* — Behzad Razavi
- *CMOS Analog Circuit Design* — Allen & Holberg
- *Analysis and Design of Analog Integrated Circuits* — Gray, Hurst, Lewis & Meyer

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
