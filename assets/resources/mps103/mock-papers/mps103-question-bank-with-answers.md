# MPS-103 Advanced Power Electronic Converters — Question Bank with Answer Hints

## Unit 1: Power Semiconductor Devices

### Short answer (2-3 marks)

- **Q.** Define *IGBT*.  
  **Ans.** high-voltage high-current switch
- **Q.** Define *Power MOSFET*.  
  **Ans.** fast switching at low voltage
- **Q.** Define *Safe Operating Area*.  
  **Ans.** voltage-current limits
- **Q.** Define *SiC MOSFET*.  
  **Ans.** high voltage, high temperature
- **Q.** Define *GaN HEMT*.  
  **Ans.** very fast switching
- **Q.** Define *Switching Loss*.  
  **Ans.** energy lost during transitions
- **Q.** Define *Gate Driver*.  
  **Ans.** provides gate voltage and current
- **Q.** Define *Dead Time*.  
  **Ans.** prevents shoot-through
- **Q.** Define *Isolation*.  
  **Ans.** galvanic isolation of gate signals
- **Q.** Define *Junction Temperature*.  
  **Ans.** device internal temperature
- **Q.** Define *Thermal Resistance*.  
  **Ans.** °C/W from junction to ambient
- **Q.** Define *Heat Sink Design*.  
  **Ans.** based on losses

### Long answer (7 marks)

- **Q.** Explain *Silicon Devices* in detail with a neat diagram.  
  **Key points:** Workhorse switches. IGBT — high-voltage high-current switch; Power MOSFET — fast switching at low voltage; Safe Operating Area — voltage-current limits.
- **Q.** Explain *Wide Bandgap Devices* in detail with a neat diagram.  
  **Key points:** SiC and GaN improve efficiency. SiC MOSFET — high voltage, high temperature; GaN HEMT — very fast switching; Switching Loss — energy lost during transitions.
- **Q.** Explain *Gate Drivers* in detail with a neat diagram.  
  **Key points:** Driving switches correctly. Gate Driver — provides gate voltage and current; Dead Time — prevents shoot-through; Isolation — galvanic isolation of gate signals.
- **Q.** Explain *Thermal Management* in detail with a neat diagram.  
  **Key points:** Removing device heat. Junction Temperature — device internal temperature; Thermal Resistance — °C/W from junction to ambient; Heat Sink Design — based on losses.

## Unit 2: DC-DC Converters

### Short answer (2-3 marks)

- **Q.** Define *Buck Converter*.  
  **Ans.** Vo = D Vin
- **Q.** Define *Boost Converter*.  
  **Ans.** Vo = Vin/(1 − D)
- **Q.** Define *CCM vs DCM*.  
  **Ans.** continuous or discontinuous inductor current
- **Q.** Define *Flyback Converter*.  
  **Ans.** stores energy in coupled inductor
- **Q.** Define *Forward Converter*.  
  **Ans.** transfers energy directly
- **Q.** Define *Full-bridge Converter*.  
  **Ans.** high power isolated
- **Q.** Define *ZVS*.  
  **Ans.** zero voltage switching
- **Q.** Define *ZCS*.  
  **Ans.** zero current switching
- **Q.** Define *LLC Converter*.  
  **Ans.** resonant converter for high efficiency
- **Q.** Define *Inductor Design*.  
  **Ans.** ripple current specification
- **Q.** Define *Output Capacitor*.  
  **Ans.** ripple voltage specification
- **Q.** Define *Magnetics Design*.  
  **Ans.** core selection and winding

### Long answer (7 marks)

- **Q.** Explain *Non-isolated Converters* in detail with a neat diagram.  
  **Key points:** Basic topologies. Buck Converter — Vo = D Vin; Boost Converter — Vo = Vin/(1 − D); CCM vs DCM — continuous or discontinuous inductor current.
- **Q.** Explain *Isolated Converters* in detail with a neat diagram.  
  **Key points:** Transformer-isolated topologies. Flyback Converter — stores energy in coupled inductor; Forward Converter — transfers energy directly; Full-bridge Converter — high power isolated.
- **Q.** Explain *Resonant Converters* in detail with a neat diagram.  
  **Key points:** Soft switching reduces losses. ZVS — zero voltage switching; ZCS — zero current switching; LLC Converter — resonant converter for high efficiency.
- **Q.** Explain *Converter Design* in detail with a neat diagram.  
  **Key points:** Component sizing. Inductor Design — ripple current specification; Output Capacitor — ripple voltage specification; Magnetics Design — core selection and winding.

## Unit 3: Inverters & Multilevel Converters

### Short answer (2-3 marks)

- **Q.** Define *Three-phase VSI*.  
  **Ans.** six-switch bridge
- **Q.** Define *Sinusoidal PWM*.  
  **Ans.** triangle carrier comparison
- **Q.** Define *Overmodulation*.  
  **Ans.** modulation index above 1
- **Q.** Define *Space Vector*.  
  **Ans.** represents switching states
- **Q.** Define *SVPWM*.  
  **Ans.** 15% better DC bus utilisation
- **Q.** Define *Sector Identification*.  
  **Ans.** locates reference vector
- **Q.** Define *NPC Inverter*.  
  **Ans.** neutral point clamped
- **Q.** Define *Cascaded H-bridge*.  
  **Ans.** series H-bridge cells
- **Q.** Define *Flying Capacitor Inverter*.  
  **Ans.** capacitor-clamped levels
- **Q.** Define *MMC*.  
  **Ans.** submodules in arms
- **Q.** Define *Submodule*.  
  **Ans.** half-bridge with capacitor
- **Q.** Define *Capacitor Voltage Balancing*.  
  **Ans.** key MMC control

### Long answer (7 marks)

- **Q.** Explain *Voltage Source Inverters* in detail with a neat diagram.  
  **Key points:** DC to AC conversion. Three-phase VSI — six-switch bridge; Sinusoidal PWM — triangle carrier comparison; Overmodulation — modulation index above 1.
- **Q.** Explain *Space Vector PWM* in detail with a neat diagram.  
  **Key points:** Efficient modulation. Space Vector — represents switching states; SVPWM — 15% better DC bus utilisation; Sector Identification — locates reference vector.
- **Q.** Explain *Multilevel Inverters* in detail with a neat diagram.  
  **Key points:** More levels, better waveforms. NPC Inverter — neutral point clamped; Cascaded H-bridge — series H-bridge cells; Flying Capacitor Inverter — capacitor-clamped levels.
- **Q.** Explain *MMC* in detail with a neat diagram.  
  **Key points:** Modular multilevel converter. MMC — submodules in arms; Submodule — half-bridge with capacitor; Capacitor Voltage Balancing — key MMC control.

## Unit 4: Grid-connected Converters

### Short answer (2-3 marks)

- **Q.** Define *PLL*.  
  **Ans.** phase-locked loop for grid angle
- **Q.** Define *SRF-PLL*.  
  **Ans.** synchronous reference frame PLL
- **Q.** Define *Grid Code*.  
  **Ans.** connection requirements
- **Q.** Define *dq Current Control*.  
  **Ans.** PI control in rotating frame
- **Q.** Define *Proportional-resonant Control*.  
  **Ans.** tracks AC references
- **Q.** Define *Decoupling*.  
  **Ans.** cross-coupling compensation
- **Q.** Define *L Filter*.  
  **Ans.** simple inductor filter
- **Q.** Define *LCL Filter*.  
  **Ans.** better attenuation, risk of resonance
- **Q.** Define *Active Damping*.  
  **Ans.** control-based resonance damping
- **Q.** Define *Grid-following Converter*.  
  **Ans.** injects current following grid
- **Q.** Define *Grid-forming Converter*.  
  **Ans.** establishes voltage and frequency
- **Q.** Define *Virtual Synchronous Machine*.  
  **Ans.** emulates inertia

### Long answer (7 marks)

- **Q.** Explain *Grid Synchronisation* in detail with a neat diagram.  
  **Key points:** Converters lock to grid. PLL — phase-locked loop for grid angle; SRF-PLL — synchronous reference frame PLL; Grid Code — connection requirements.
- **Q.** Explain *Current Control* in detail with a neat diagram.  
  **Key points:** Regulating injected current. dq Current Control — PI control in rotating frame; Proportional-resonant Control — tracks AC references; Decoupling — cross-coupling compensation.
- **Q.** Explain *Filters* in detail with a neat diagram.  
  **Key points:** Reducing harmonics. L Filter — simple inductor filter; LCL Filter — better attenuation, risk of resonance; Active Damping — control-based resonance damping.
- **Q.** Explain *Grid-forming Converters* in detail with a neat diagram.  
  **Key points:** Converters that set voltage. Grid-following Converter — injects current following grid; Grid-forming Converter — establishes voltage and frequency; Virtual Synchronous Machine — emulates inertia.

## Unit 5: Applications & Control

### Short answer (2-3 marks)

- **Q.** Define *PV Inverter*.  
  **Ans.** with MPPT
- **Q.** Define *Wind Converter*.  
  **Ans.** back-to-back converter
- **Q.** Define *Battery Converter*.  
  **Ans.** bidirectional DC-DC
- **Q.** Define *Vector Control*.  
  **Ans.** field-oriented control
- **Q.** Define *DTC*.  
  **Ans.** direct torque control
- **Q.** Define *Regenerative Drive*.  
  **Ans.** returns energy to grid
- **Q.** Define *On-board Charger*.  
  **Ans.** AC to DC in vehicle
- **Q.** Define *DC Fast Charger*.  
  **Ans.** high-power off-board converter
- **Q.** Define *Wireless Charging*.  
  **Ans.** inductive power transfer
- **Q.** Define *State-space Averaging*.  
  **Ans.** averaged converter model
- **Q.** Define *Small-signal Model*.  
  **Ans.** linearised around operating point
- **Q.** Define *PLECS/MATLAB*.  
  **Ans.** converter simulation tools

### Long answer (7 marks)

- **Q.** Explain *Renewable Converters* in detail with a neat diagram.  
  **Key points:** Solar and wind interfaces. PV Inverter — with MPPT; Wind Converter — back-to-back converter; Battery Converter — bidirectional DC-DC.
- **Q.** Explain *Motor Drive Converters* in detail with a neat diagram.  
  **Key points:** Inverters for motors. Vector Control — field-oriented control; DTC — direct torque control; Regenerative Drive — returns energy to grid.
- **Q.** Explain *EV Chargers* in detail with a neat diagram.  
  **Key points:** Charging infrastructure converters. On-board Charger — AC to DC in vehicle; DC Fast Charger — high-power off-board converter; Wireless Charging — inductive power transfer.
- **Q.** Explain *Modelling & Simulation* in detail with a neat diagram.  
  **Key points:** Analysing converter behaviour. State-space Averaging — averaged converter model; Small-signal Model — linearised around operating point; PLECS/MATLAB — converter simulation tools.

