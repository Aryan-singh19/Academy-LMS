# EC-405 Analog Circuits — Question Bank with Answer Hints

## Unit 1: Amplifier Frequency Response

### Short answer (2-3 marks)

- **Q.** Define *Cascade Gain*.  
  **Ans.** overall gain is the product of stage gains
- **Q.** Define *RC Coupling*.  
  **Ans.** stages coupled by capacitors for audio amplifiers
- **Q.** Define *Direct Coupling*.  
  **Ans.** no coupling capacitors, passes DC
- **Q.** Define *Lower Cut-off Frequency*.  
  **Ans.** fL = 1/(2πRC) of dominant capacitor
- **Q.** Define *Bypass Capacitor*.  
  **Ans.** shunts emitter resistor for AC
- **Q.** Define *Half-power Point*.  
  **Ans.** frequency where gain drops by 3 dB
- **Q.** Define *Miller Effect*.  
  **Ans.** feedback capacitance multiplied by (1 − Av) at input
- **Q.** Define *Hybrid-π Model*.  
  **Ans.** high-frequency BJT model
- **Q.** Define *Gain-bandwidth Product*.  
  **Ans.** constant product of gain and bandwidth
- **Q.** Define *Cascode Amplifier*.  
  **Ans.** CE followed by CB; reduces Miller effect
- **Q.** Define *Darlington Pair*.  
  **Ans.** two BJTs giving β1·β2 current gain
- **Q.** Define *Bootstrapping*.  
  **Ans.** raises input impedance using positive feedback

### Long answer (7 marks)

- **Q.** Explain *Multistage Amplifiers* in detail with a neat diagram.  
  **Key points:** Cascading stages raises gain. Cascade Gain — overall gain is the product of stage gains; RC Coupling — stages coupled by capacitors for audio amplifiers; Direct Coupling — no coupling capacitors, passes DC.
- **Q.** Explain *Low-frequency Response* in detail with a neat diagram.  
  **Key points:** Coupling and bypass capacitors limit low frequencies. Lower Cut-off Frequency — fL = 1/(2πRC) of dominant capacitor; Bypass Capacitor — shunts emitter resistor for AC; Half-power Point — frequency where gain drops by 3 dB.
- **Q.** Explain *High-frequency Response* in detail with a neat diagram.  
  **Key points:** Device capacitances limit high frequencies. Miller Effect — feedback capacitance multiplied by (1 − Av) at input; Hybrid-π Model — high-frequency BJT model; Gain-bandwidth Product — constant product of gain and bandwidth.
- **Q.** Explain *Cascode & Darlington Amplifiers* in detail with a neat diagram.  
  **Key points:** Special configurations improve performance. Cascode Amplifier — CE followed by CB; reduces Miller effect; Darlington Pair — two BJTs giving β1·β2 current gain; Bootstrapping — raises input impedance using positive feedback.

## Unit 2: Feedback Amplifiers

### Short answer (2-3 marks)

- **Q.** Define *Feedback Gain*.  
  **Ans.** Af = A/(1 + Aβ)
- **Q.** Define *Desensitivity*.  
  **Ans.** gain less sensitive to parameter changes
- **Q.** Define *Loop Gain*.  
  **Ans.** Aβ
- **Q.** Define *Voltage-Series Feedback*.  
  **Ans.** increases input and decreases output impedance
- **Q.** Define *Current-Shunt Feedback*.  
  **Ans.** decreases input, increases output impedance
- **Q.** Define *Sampling Network*.  
  **Ans.** senses output voltage or current
- **Q.** Define *Bandwidth Improvement*.  
  **Ans.** bandwidth multiplied by (1 + Aβ)
- **Q.** Define *Distortion Reduction*.  
  **Ans.** non-linear distortion divided by (1 + Aβ)
- **Q.** Define *Noise Reduction*.  
  **Ans.** internal noise reduced by feedback
- **Q.** Define *Barkhausen Criterion*.  
  **Ans.** Aβ = 1 at 0° or 360° gives oscillation
- **Q.** Define *Phase Margin*.  
  **Ans.** margin before feedback turns positive
- **Q.** Define *Frequency Compensation*.  
  **Ans.** shaping response to keep amplifiers stable

### Long answer (7 marks)

- **Q.** Explain *Negative Feedback Concepts* in detail with a neat diagram.  
  **Key points:** Feedback trades gain for stability. Feedback Gain — Af = A/(1 + Aβ); Desensitivity — gain less sensitive to parameter changes; Loop Gain — Aβ.
- **Q.** Explain *Feedback Topologies* in detail with a neat diagram.  
  **Key points:** Topologies differ in sampling and mixing. Voltage-Series Feedback — increases input and decreases output impedance; Current-Shunt Feedback — decreases input, increases output impedance; Sampling Network — senses output voltage or current.
- **Q.** Explain *Effect of Feedback* in detail with a neat diagram.  
  **Key points:** Negative feedback improves amplifier properties. Bandwidth Improvement — bandwidth multiplied by (1 + Aβ); Distortion Reduction — non-linear distortion divided by (1 + Aβ); Noise Reduction — internal noise reduced by feedback.
- **Q.** Explain *Stability of Feedback Amplifiers* in detail with a neat diagram.  
  **Key points:** Too much phase shift makes feedback positive. Barkhausen Criterion — Aβ = 1 at 0° or 360° gives oscillation; Phase Margin — margin before feedback turns positive; Frequency Compensation — shaping response to keep amplifiers stable.

## Unit 3: Oscillators

### Short answer (2-3 marks)

- **Q.** Define *Oscillator*.  
  **Ans.** amplifier with positive feedback sustaining oscillation
- **Q.** Define *Barkhausen Conditions*.  
  **Ans.** loop gain magnitude 1 and phase 0°
- **Q.** Define *Amplitude Stabilisation*.  
  **Ans.** limiting gain to keep amplitude steady
- **Q.** Define *RC Phase Shift Oscillator*.  
  **Ans.** three RC sections give 180° shift; f = 1/(2πRC√6)
- **Q.** Define *Wien Bridge Oscillator*.  
  **Ans.** f = 1/(2πRC); needs gain of 3
- **Q.** Define *Audio Frequency Range*.  
  **Ans.** RC oscillators suit low frequencies
- **Q.** Define *Hartley Oscillator*.  
  **Ans.** tapped inductor feedback
- **Q.** Define *Colpitts Oscillator*.  
  **Ans.** tapped capacitor feedback
- **Q.** Define *Clapp Oscillator*.  
  **Ans.** Colpitts with series capacitor for stability
- **Q.** Define *Piezoelectric Effect*.  
  **Ans.** mechanical stress produces voltage and vice versa
- **Q.** Define *Series Resonance*.  
  **Ans.** crystal acts as low impedance
- **Q.** Define *High Q*.  
  **Ans.** crystals have Q of thousands, giving stability

### Long answer (7 marks)

- **Q.** Explain *Oscillator Principles* in detail with a neat diagram.  
  **Key points:** Oscillators produce signals without input. Oscillator — amplifier with positive feedback sustaining oscillation; Barkhausen Conditions — loop gain magnitude 1 and phase 0°; Amplitude Stabilisation — limiting gain to keep amplitude steady.
- **Q.** Explain *RC Oscillators* in detail with a neat diagram.  
  **Key points:** RC networks set frequency in audio range. RC Phase Shift Oscillator — three RC sections give 180° shift; f = 1/(2πRC√6); Wien Bridge Oscillator — f = 1/(2πRC); needs gain of 3; Audio Frequency Range — RC oscillators suit low frequencies.
- **Q.** Explain *LC Oscillators* in detail with a neat diagram.  
  **Key points:** LC tanks set frequency at RF. Hartley Oscillator — tapped inductor feedback; Colpitts Oscillator — tapped capacitor feedback; Clapp Oscillator — Colpitts with series capacitor for stability.
- **Q.** Explain *Crystal Oscillators* in detail with a neat diagram.  
  **Key points:** Quartz crystals give very stable frequency. Piezoelectric Effect — mechanical stress produces voltage and vice versa; Series Resonance — crystal acts as low impedance; High Q — crystals have Q of thousands, giving stability.

## Unit 4: Power Amplifiers & Tuned Amplifiers

### Short answer (2-3 marks)

- **Q.** Define *Class A*.  
  **Ans.** conducts 360°; max efficiency 25% (50% transformer coupled)
- **Q.** Define *Class B*.  
  **Ans.** conducts 180°; max efficiency 78.5%
- **Q.** Define *Class C*.  
  **Ans.** conducts less than 180°; used in RF
- **Q.** Define *Push-Pull Amplifier*.  
  **Ans.** two transistors conduct on alternate halves
- **Q.** Define *Crossover Distortion*.  
  **Ans.** dead zone near zero crossing in class B
- **Q.** Define *Class AB*.  
  **Ans.** slight bias removes crossover distortion
- **Q.** Define *Complementary Symmetry*.  
  **Ans.** NPN and PNP pair without transformer
- **Q.** Define *Thermal Runaway*.  
  **Ans.** rising temperature increases current further
- **Q.** Define *Heat Sink*.  
  **Ans.** dissipates device heat to surroundings
- **Q.** Define *Single-tuned Amplifier*.  
  **Ans.** one LC tank load
- **Q.** Define *Double-tuned Amplifier*.  
  **Ans.** two coupled tanks for flatter response
- **Q.** Define *Stagger Tuning*.  
  **Ans.** stages tuned to slightly different frequencies

### Long answer (7 marks)

- **Q.** Explain *Classification of Power Amplifiers* in detail with a neat diagram.  
  **Key points:** Classes differ in conduction angle. Class A — conducts 360°; max efficiency 25% (50% transformer coupled); Class B — conducts 180°; max efficiency 78.5%; Class C — conducts less than 180°; used in RF.
- **Q.** Explain *Push-Pull Amplifiers* in detail with a neat diagram.  
  **Key points:** Two devices share alternate half cycles. Push-Pull Amplifier — two transistors conduct on alternate halves; Crossover Distortion — dead zone near zero crossing in class B; Class AB — slight bias removes crossover distortion.
- **Q.** Explain *Complementary Symmetry & Heat Sinks* in detail with a neat diagram.  
  **Key points:** Output stages need thermal care. Complementary Symmetry — NPN and PNP pair without transformer; Thermal Runaway — rising temperature increases current further; Heat Sink — dissipates device heat to surroundings.
- **Q.** Explain *Tuned Amplifiers* in detail with a neat diagram.  
  **Key points:** Tuned amplifiers amplify a narrow band. Single-tuned Amplifier — one LC tank load; Double-tuned Amplifier — two coupled tanks for flatter response; Stagger Tuning — stages tuned to slightly different frequencies.

## Unit 5: Operational Amplifiers

### Short answer (2-3 marks)

- **Q.** Define *Ideal Op-amp*.  
  **Ans.** infinite gain and input impedance, zero output impedance
- **Q.** Define *CMRR*.  
  **Ans.** ratio of differential gain to common-mode gain
- **Q.** Define *Slew Rate*.  
  **Ans.** maximum rate of change of output voltage
- **Q.** Define *Inverting Amplifier*.  
  **Ans.** gain −Rf/R1
- **Q.** Define *Non-inverting Amplifier*.  
  **Ans.** gain 1 + Rf/R1
- **Q.** Define *Voltage Follower*.  
  **Ans.** unity-gain buffer
- **Q.** Define *Integrator*.  
  **Ans.** output proportional to integral of input
- **Q.** Define *Differentiator*.  
  **Ans.** output proportional to derivative of input
- **Q.** Define *Instrumentation Amplifier*.  
  **Ans.** high-CMRR differential amplifier using three op-amps
- **Q.** Define *Schmitt Trigger*.  
  **Ans.** comparator with hysteresis
- **Q.** Define *Active Filter*.  
  **Ans.** op-amp filter with gain, e.g. Butterworth
- **Q.** Define *555 Timer*.  
  **Ans.** IC for astable and monostable timing

### Long answer (7 marks)

- **Q.** Explain *Op-amp Characteristics* in detail with a neat diagram.  
  **Key points:** Ideal and practical op-amps differ in key parameters. Ideal Op-amp — infinite gain and input impedance, zero output impedance; CMRR — ratio of differential gain to common-mode gain; Slew Rate — maximum rate of change of output voltage.
- **Q.** Explain *Basic Op-amp Circuits* in detail with a neat diagram.  
  **Key points:** Feedback sets precise gains. Inverting Amplifier — gain −Rf/R1; Non-inverting Amplifier — gain 1 + Rf/R1; Voltage Follower — unity-gain buffer.
- **Q.** Explain *Op-amp Applications* in detail with a neat diagram.  
  **Key points:** Op-amps compute and condition signals. Integrator — output proportional to integral of input; Differentiator — output proportional to derivative of input; Instrumentation Amplifier — high-CMRR differential amplifier using three op-amps.
- **Q.** Explain *Comparators, Filters & 555 Timer* in detail with a neat diagram.  
  **Key points:** Non-linear and filter applications. Schmitt Trigger — comparator with hysteresis; Active Filter — op-amp filter with gain, e.g. Butterworth; 555 Timer — IC for astable and monostable timing.

