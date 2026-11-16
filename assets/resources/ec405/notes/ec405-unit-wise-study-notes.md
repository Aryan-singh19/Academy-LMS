# EC-405 Analog Circuits — Unit-wise Study Notes

> Amplifier frequency response, feedback, oscillators, power amplifiers, op-amps and their applications.

## Unit 1: Amplifier Frequency Response

### Multistage Amplifiers

Cascading stages raises gain.

- **Cascade Gain:** overall gain is the product of stage gains
- **RC Coupling:** stages coupled by capacitors for audio amplifiers
- **Direct Coupling:** no coupling capacitors, passes DC

### Low-frequency Response

Coupling and bypass capacitors limit low frequencies.

- **Lower Cut-off Frequency:** fL = 1/(2πRC) of dominant capacitor
- **Bypass Capacitor:** shunts emitter resistor for AC
- **Half-power Point:** frequency where gain drops by 3 dB

### High-frequency Response

Device capacitances limit high frequencies.

- **Miller Effect:** feedback capacitance multiplied by (1 − Av) at input
- **Hybrid-π Model:** high-frequency BJT model
- **Gain-bandwidth Product:** constant product of gain and bandwidth

### Cascode & Darlington Amplifiers

Special configurations improve performance.

- **Cascode Amplifier:** CE followed by CB; reduces Miller effect
- **Darlington Pair:** two BJTs giving β1·β2 current gain
- **Bootstrapping:** raises input impedance using positive feedback

## Unit 2: Feedback Amplifiers

### Negative Feedback Concepts

Feedback trades gain for stability.

- **Feedback Gain:** Af = A/(1 + Aβ)
- **Desensitivity:** gain less sensitive to parameter changes
- **Loop Gain:** Aβ

### Feedback Topologies

Topologies differ in sampling and mixing.

- **Voltage-Series Feedback:** increases input and decreases output impedance
- **Current-Shunt Feedback:** decreases input, increases output impedance
- **Sampling Network:** senses output voltage or current

### Effect of Feedback

Negative feedback improves amplifier properties.

- **Bandwidth Improvement:** bandwidth multiplied by (1 + Aβ)
- **Distortion Reduction:** non-linear distortion divided by (1 + Aβ)
- **Noise Reduction:** internal noise reduced by feedback

### Stability of Feedback Amplifiers

Too much phase shift makes feedback positive.

- **Barkhausen Criterion:** Aβ = 1 at 0° or 360° gives oscillation
- **Phase Margin:** margin before feedback turns positive
- **Frequency Compensation:** shaping response to keep amplifiers stable

## Unit 3: Oscillators

### Oscillator Principles

Oscillators produce signals without input.

- **Oscillator:** amplifier with positive feedback sustaining oscillation
- **Barkhausen Conditions:** loop gain magnitude 1 and phase 0°
- **Amplitude Stabilisation:** limiting gain to keep amplitude steady

### RC Oscillators

RC networks set frequency in audio range.

- **RC Phase Shift Oscillator:** three RC sections give 180° shift; f = 1/(2πRC√6)
- **Wien Bridge Oscillator:** f = 1/(2πRC); needs gain of 3
- **Audio Frequency Range:** RC oscillators suit low frequencies

### LC Oscillators

LC tanks set frequency at RF.

- **Hartley Oscillator:** tapped inductor feedback
- **Colpitts Oscillator:** tapped capacitor feedback
- **Clapp Oscillator:** Colpitts with series capacitor for stability

### Crystal Oscillators

Quartz crystals give very stable frequency.

- **Piezoelectric Effect:** mechanical stress produces voltage and vice versa
- **Series Resonance:** crystal acts as low impedance
- **High Q:** crystals have Q of thousands, giving stability

## Unit 4: Power Amplifiers & Tuned Amplifiers

### Classification of Power Amplifiers

Classes differ in conduction angle.

- **Class A:** conducts 360°; max efficiency 25% (50% transformer coupled)
- **Class B:** conducts 180°; max efficiency 78.5%
- **Class C:** conducts less than 180°; used in RF

### Push-Pull Amplifiers

Two devices share alternate half cycles.

- **Push-Pull Amplifier:** two transistors conduct on alternate halves
- **Crossover Distortion:** dead zone near zero crossing in class B
- **Class AB:** slight bias removes crossover distortion

### Complementary Symmetry & Heat Sinks

Output stages need thermal care.

- **Complementary Symmetry:** NPN and PNP pair without transformer
- **Thermal Runaway:** rising temperature increases current further
- **Heat Sink:** dissipates device heat to surroundings

### Tuned Amplifiers

Tuned amplifiers amplify a narrow band.

- **Single-tuned Amplifier:** one LC tank load
- **Double-tuned Amplifier:** two coupled tanks for flatter response
- **Stagger Tuning:** stages tuned to slightly different frequencies

## Unit 5: Operational Amplifiers

### Op-amp Characteristics

Ideal and practical op-amps differ in key parameters.

- **Ideal Op-amp:** infinite gain and input impedance, zero output impedance
- **CMRR:** ratio of differential gain to common-mode gain
- **Slew Rate:** maximum rate of change of output voltage

### Basic Op-amp Circuits

Feedback sets precise gains.

- **Inverting Amplifier:** gain −Rf/R1
- **Non-inverting Amplifier:** gain 1 + Rf/R1
- **Voltage Follower:** unity-gain buffer

### Op-amp Applications

Op-amps compute and condition signals.

- **Integrator:** output proportional to integral of input
- **Differentiator:** output proportional to derivative of input
- **Instrumentation Amplifier:** high-CMRR differential amplifier using three op-amps

### Comparators, Filters & 555 Timer

Non-linear and filter applications.

- **Schmitt Trigger:** comparator with hysteresis
- **Active Filter:** op-amp filter with gain, e.g. Butterworth
- **555 Timer:** IC for astable and monostable timing

## Standard Textbooks

- *Microelectronic Circuits* — Sedra & Smith
- *Integrated Electronics* — Millman & Halkias
- *Op-Amps and Linear Integrated Circuits* — Ramakant Gayakwad

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
