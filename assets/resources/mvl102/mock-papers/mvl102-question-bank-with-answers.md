# MVL-102 Analog IC Design — Question Bank with Answer Hints

## Unit 1: Single-stage Amplifiers

### Short answer (2-3 marks)

- **Q.** Define *Transconductance*.  
  **Ans.** gm = 2ID/(VGS − VT)
- **Q.** Define *Output Resistance*.  
  **Ans.** ro = 1/(λID)
- **Q.** Define *Intrinsic Gain*.  
  **Ans.** gm ro
- **Q.** Define *CS Gain*.  
  **Ans.** −gm (ro parallel RD)
- **Q.** Define *Source Degeneration*.  
  **Ans.** improves linearity, reduces gain
- **Q.** Define *Diode-connected Load*.  
  **Ans.** gain set by transconductance ratio
- **Q.** Define *Source Follower*.  
  **Ans.** unity gain buffer
- **Q.** Define *Common-gate*.  
  **Ans.** low input impedance
- **Q.** Define *Cascode*.  
  **Ans.** CS with CG for high output resistance
- **Q.** Define *Current Source Bias*.  
  **Ans.** sets drain current
- **Q.** Define *Bandgap Reference*.  
  **Ans.** temperature-stable voltage
- **Q.** Define *Constant-gm Bias*.  
  **Ans.** transconductance independent of process

### Long answer (7 marks)

- **Q.** Explain *Small-signal Models* in detail with a neat diagram.  
  **Key points:** Models analyse amplifiers. Transconductance — gm = 2ID/(VGS − VT); Output Resistance — ro = 1/(λID); Intrinsic Gain — gm ro.
- **Q.** Explain *Common-source Amplifier* in detail with a neat diagram.  
  **Key points:** Basic voltage amplifier. CS Gain — −gm (ro parallel RD); Source Degeneration — improves linearity, reduces gain; Diode-connected Load — gain set by transconductance ratio.
- **Q.** Explain *Common-gate & Source Follower* in detail with a neat diagram.  
  **Key points:** Other configurations. Source Follower — unity gain buffer; Common-gate — low input impedance; Cascode — CS with CG for high output resistance.
- **Q.** Explain *Biasing* in detail with a neat diagram.  
  **Key points:** Stable bias points. Current Source Bias — sets drain current; Bandgap Reference — temperature-stable voltage; Constant-gm Bias — transconductance independent of process.

## Unit 2: Current Mirrors & Differential Pairs

### Short answer (2-3 marks)

- **Q.** Define *Basic Current Mirror*.  
  **Ans.** Iout = Iref (W/L)2/(W/L)1
- **Q.** Define *Cascode Current Mirror*.  
  **Ans.** higher output resistance
- **Q.** Define *Wide-swing Mirror*.  
  **Ans.** preserves headroom
- **Q.** Define *Differential Gain*.  
  **Ans.** gm RD
- **Q.** Define *CMRR*.  
  **Ans.** differential gain / common-mode gain
- **Q.** Define *Input Offset*.  
  **Ans.** due to mismatch
- **Q.** Define *Active-load Differential Amplifier*.  
  **Ans.** mirror load converts to single-ended
- **Q.** Define *Gain*.  
  **Ans.** gm (ro2 parallel ro4)
- **Q.** Define *Systematic Offset*.  
  **Ans.** from asymmetry
- **Q.** Define *Pelgrom's Law*.  
  **Ans.** mismatch ∝ 1/√(WL)
- **Q.** Define *Common Centroid Layout*.  
  **Ans.** cancels gradients
- **Q.** Define *Dummy Devices*.  
  **Ans.** improve matching

### Long answer (7 marks)

- **Q.** Explain *Current Mirrors* in detail with a neat diagram.  
  **Key points:** Mirrors copy currents. Basic Current Mirror — Iout = Iref (W/L)2/(W/L)1; Cascode Current Mirror — higher output resistance; Wide-swing Mirror — preserves headroom.
- **Q.** Explain *Differential Pair* in detail with a neat diagram.  
  **Key points:** Differential amplifiers reject common mode. Differential Gain — gm RD; CMRR — differential gain / common-mode gain; Input Offset — due to mismatch.
- **Q.** Explain *Active Load* in detail with a neat diagram.  
  **Key points:** Mirrors as loads boost gain. Active-load Differential Amplifier — mirror load converts to single-ended; Gain — gm (ro2 parallel ro4); Systematic Offset — from asymmetry.
- **Q.** Explain *Mismatch* in detail with a neat diagram.  
  **Key points:** Random variations limit precision. Pelgrom's Law — mismatch ∝ 1/√(WL); Common Centroid Layout — cancels gradients; Dummy Devices — improve matching.

## Unit 3: Operational Amplifiers

### Short answer (2-3 marks)

- **Q.** Define *Two-stage Op-amp*.  
  **Ans.** differential pair plus CS stage
- **Q.** Define *Miller Compensation*.  
  **Ans.** capacitor splits poles
- **Q.** Define *Unity-gain Bandwidth*.  
  **Ans.** gm1/Cc
- **Q.** Define *Folded Cascode*.  
  **Ans.** high gain and wide input range
- **Q.** Define *Telescopic Cascode*.  
  **Ans.** highest gain, limited swing
- **Q.** Define *Output Swing*.  
  **Ans.** limited by stacked devices
- **Q.** Define *Phase Margin*.  
  **Ans.** typically 60° target
- **Q.** Define *Right-half-plane Zero*.  
  **Ans.** from feedforward through Cc
- **Q.** Define *Nulling Resistor*.  
  **Ans.** cancels RHP zero
- **Q.** Define *Fully Differential Op-amp*.  
  **Ans.** differential output
- **Q.** Define *CMFB*.  
  **Ans.** sets output common-mode
- **Q.** Define *Slew Rate*.  
  **Ans.** I/Cc

### Long answer (7 marks)

- **Q.** Explain *Two-stage Op-amp* in detail with a neat diagram.  
  **Key points:** High gain with compensation. Two-stage Op-amp — differential pair plus CS stage; Miller Compensation — capacitor splits poles; Unity-gain Bandwidth — gm1/Cc.
- **Q.** Explain *Folded Cascode Op-amp* in detail with a neat diagram.  
  **Key points:** Single-stage high gain. Folded Cascode — high gain and wide input range; Telescopic Cascode — highest gain, limited swing; Output Swing — limited by stacked devices.
- **Q.** Explain *Stability & Compensation* in detail with a neat diagram.  
  **Key points:** Feedback amplifiers must be stable. Phase Margin — typically 60° target; Right-half-plane Zero — from feedforward through Cc; Nulling Resistor — cancels RHP zero.
- **Q.** Explain *Common-mode Feedback* in detail with a neat diagram.  
  **Key points:** Fully differential amplifiers need CMFB. Fully Differential Op-amp — differential output; CMFB — sets output common-mode; Slew Rate — I/Cc.

## Unit 4: Noise & Frequency Response

### Short answer (2-3 marks)

- **Q.** Define *Miller Effect*.  
  **Ans.** input capacitance multiplied
- **Q.** Define *Dominant Pole*.  
  **Ans.** sets bandwidth
- **Q.** Define *Gain-bandwidth Product*.  
  **Ans.** constant for single pole
- **Q.** Define *Thermal Noise*.  
  **Ans.** 4kTγ gm current noise in MOSFET
- **Q.** Define *Flicker Noise*.  
  **Ans.** 1/f noise dominant at low frequency
- **Q.** Define *Input-referred Noise*.  
  **Ans.** output noise divided by gain
- **Q.** Define *Corner Frequency*.  
  **Ans.** where flicker equals thermal noise
- **Q.** Define *Chopper Stabilisation*.  
  **Ans.** moves offset and flicker noise
- **Q.** Define *kT/C Noise*.  
  **Ans.** sampling noise on capacitor
- **Q.** Define *Switched-capacitor Integrator*.  
  **Ans.** resistor emulated by switched capacitor
- **Q.** Define *Charge Injection*.  
  **Ans.** error from switch turn-off
- **Q.** Define *Clock Feedthrough*.  
  **Ans.** coupling of clock to output

### Long answer (7 marks)

- **Q.** Explain *Frequency Response* in detail with a neat diagram.  
  **Key points:** Poles limit bandwidth. Miller Effect — input capacitance multiplied; Dominant Pole — sets bandwidth; Gain-bandwidth Product — constant for single pole.
- **Q.** Explain *Noise Sources* in detail with a neat diagram.  
  **Key points:** Devices generate noise. Thermal Noise — 4kTγ gm current noise in MOSFET; Flicker Noise — 1/f noise dominant at low frequency; Input-referred Noise — output noise divided by gain.
- **Q.** Explain *Noise Optimisation* in detail with a neat diagram.  
  **Key points:** Design for low noise. Corner Frequency — where flicker equals thermal noise; Chopper Stabilisation — moves offset and flicker noise; kT/C Noise — sampling noise on capacitor.
- **Q.** Explain *Switched-capacitor Circuits* in detail with a neat diagram.  
  **Key points:** Capacitor ratios set gain. Switched-capacitor Integrator — resistor emulated by switched capacitor; Charge Injection — error from switch turn-off; Clock Feedthrough — coupling of clock to output.

## Unit 5: Comparators & Data Converters

### Short answer (2-3 marks)

- **Q.** Define *Latched Comparator*.  
  **Ans.** regenerative positive feedback
- **Q.** Define *Kickback Noise*.  
  **Ans.** disturbance to input
- **Q.** Define *Comparator Offset*.  
  **Ans.** limits resolution
- **Q.** Define *Current-steering DAC*.  
  **Ans.** high-speed switched currents
- **Q.** Define *R-2R DAC*.  
  **Ans.** resistor ladder
- **Q.** Define *DNL and INL*.  
  **Ans.** differential and integral non-linearity
- **Q.** Define *SAR ADC*.  
  **Ans.** binary search with capacitor DAC
- **Q.** Define *Pipeline ADC*.  
  **Ans.** stages each resolving few bits
- **Q.** Define *Flash ADC*.  
  **Ans.** fastest with 2^N − 1 comparators
- **Q.** Define *Oversampling Ratio*.  
  **Ans.** fs / 2fB
- **Q.** Define *Noise Shaping*.  
  **Ans.** pushes quantisation noise out of band
- **Q.** Define *ENOB*.  
  **Ans.** effective number of bits

### Long answer (7 marks)

- **Q.** Explain *Comparators* in detail with a neat diagram.  
  **Key points:** Comparators make binary decisions. Latched Comparator — regenerative positive feedback; Kickback Noise — disturbance to input; Comparator Offset — limits resolution.
- **Q.** Explain *DAC Architectures* in detail with a neat diagram.  
  **Key points:** DACs convert digital to analog. Current-steering DAC — high-speed switched currents; R-2R DAC — resistor ladder; DNL and INL — differential and integral non-linearity.
- **Q.** Explain *ADC Architectures* in detail with a neat diagram.  
  **Key points:** ADCs digitise signals. SAR ADC — binary search with capacitor DAC; Pipeline ADC — stages each resolving few bits; Flash ADC — fastest with 2^N − 1 comparators.
- **Q.** Explain *Sigma-Delta Converters* in detail with a neat diagram.  
  **Key points:** Oversampling and noise shaping. Oversampling Ratio — fs / 2fB; Noise Shaping — pushes quantisation noise out of band; ENOB — effective number of bits.

