# EC-701 VLSI Design — Question Bank with Answer Hints

## Unit 1: MOS Transistor Theory

### Short answer (2-3 marks)

- **Q.** Define *NMOS*.  
  **Ans.** n-channel MOSFET conducting with positive gate voltage
- **Q.** Define *Threshold Voltage*.  
  **Ans.** gate voltage needed to invert the channel
- **Q.** Define *Inversion Layer*.  
  **Ans.** channel formed under the gate
- **Q.** Define *Linear Region*.  
  **Ans.** ID ∝ (VGS − VT)VDS for small VDS
- **Q.** Define *Saturation Region*.  
  **Ans.** ID = (k/2)(VGS − VT)²
- **Q.** Define *Body Effect*.  
  **Ans.** threshold rises with source-to-body voltage
- **Q.** Define *Channel Length Modulation*.  
  **Ans.** ID increases with VDS in saturation
- **Q.** Define *Velocity Saturation*.  
  **Ans.** carrier speed limit at high fields
- **Q.** Define *Subthreshold Conduction*.  
  **Ans.** leakage current below VT
- **Q.** Define *Constant Field Scaling*.  
  **Ans.** dimensions and voltages scaled by 1/S
- **Q.** Define *Moore's Law*.  
  **Ans.** transistor count doubles about every two years
- **Q.** Define *Short Channel Effects*.  
  **Ans.** threshold roll-off in small devices

### Long answer (7 marks)

- **Q.** Explain *MOSFET Structure & Operation* in detail with a neat diagram.  
  **Key points:** MOSFET is the building block of VLSI. NMOS — n-channel MOSFET conducting with positive gate voltage; Threshold Voltage — gate voltage needed to invert the channel; Inversion Layer — channel formed under the gate.
- **Q.** Explain *I-V Characteristics* in detail with a neat diagram.  
  **Key points:** Drain current depends on region of operation. Linear Region — ID ∝ (VGS − VT)VDS for small VDS; Saturation Region — ID = (k/2)(VGS − VT)²; Body Effect — threshold rises with source-to-body voltage.
- **Q.** Explain *Second-order Effects* in detail with a neat diagram.  
  **Key points:** Small devices deviate from ideal models. Channel Length Modulation — ID increases with VDS in saturation; Velocity Saturation — carrier speed limit at high fields; Subthreshold Conduction — leakage current below VT.
- **Q.** Explain *Scaling* in detail with a neat diagram.  
  **Key points:** Shrinking devices improves density and speed. Constant Field Scaling — dimensions and voltages scaled by 1/S; Moore's Law — transistor count doubles about every two years; Short Channel Effects — threshold roll-off in small devices.

## Unit 2: CMOS Logic & Fabrication

### Short answer (2-3 marks)

- **Q.** Define *CMOS Inverter*.  
  **Ans.** PMOS pull-up and NMOS pull-down
- **Q.** Define *Voltage Transfer Characteristic*.  
  **Ans.** output versus input voltage curve
- **Q.** Define *Noise Margin*.  
  **Ans.** NMH = VOH − VIH, NML = VIL − VOL
- **Q.** Define *Pull-down Network*.  
  **Ans.** NMOS series/parallel network
- **Q.** Define *Pull-up Network*.  
  **Ans.** dual PMOS network
- **Q.** Define *NAND vs NOR*.  
  **Ans.** NAND preferred as PMOS are in parallel
- **Q.** Define *Photolithography*.  
  **Ans.** transfers patterns using light and photoresist
- **Q.** Define *n-well Process*.  
  **Ans.** PMOS built in n-well on p-substrate
- **Q.** Define *Ion Implantation*.  
  **Ans.** doping by accelerated ions
- **Q.** Define *Lambda Rules*.  
  **Ans.** scalable design rules in units of λ
- **Q.** Define *Stick Diagram*.  
  **Ans.** symbolic layout showing layers
- **Q.** Define *Latch-up*.  
  **Ans.** parasitic thyristor causing short circuit

### Long answer (7 marks)

- **Q.** Explain *CMOS Inverter* in detail with a neat diagram.  
  **Key points:** The CMOS inverter is the fundamental gate. CMOS Inverter — PMOS pull-up and NMOS pull-down; Voltage Transfer Characteristic — output versus input voltage curve; Noise Margin — NMH = VOH − VIH, NML = VIL − VOL.
- **Q.** Explain *Static CMOS Gates* in detail with a neat diagram.  
  **Key points:** Complementary networks implement logic. Pull-down Network — NMOS series/parallel network; Pull-up Network — dual PMOS network; NAND vs NOR — NAND preferred as PMOS are in parallel.
- **Q.** Explain *Fabrication Process* in detail with a neat diagram.  
  **Key points:** ICs are made by layered photolithographic steps. Photolithography — transfers patterns using light and photoresist; n-well Process — PMOS built in n-well on p-substrate; Ion Implantation — doping by accelerated ions.
- **Q.** Explain *Layout & Design Rules* in detail with a neat diagram.  
  **Key points:** Layout follows rules for manufacturability. Lambda Rules — scalable design rules in units of λ; Stick Diagram — symbolic layout showing layers; Latch-up — parasitic thyristor causing short circuit.

## Unit 3: Circuit Characterisation

### Short answer (2-3 marks)

- **Q.** Define *Propagation Delay*.  
  **Ans.** average of rise and fall delays
- **Q.** Define *Elmore Delay*.  
  **Ans.** RC delay model for networks
- **Q.** Define *Logical Effort*.  
  **Ans.** method for sizing gates for minimum delay
- **Q.** Define *Dynamic Power*.  
  **Ans.** P = α C V² f
- **Q.** Define *Static Power*.  
  **Ans.** leakage power when idle
- **Q.** Define *Short-circuit Power*.  
  **Ans.** current while both networks conduct
- **Q.** Define *Wire Resistance*.  
  **Ans.** R = ρL/(W·t)
- **Q.** Define *Crosstalk*.  
  **Ans.** coupling between neighbouring wires
- **Q.** Define *Repeater Insertion*.  
  **Ans.** buffers break long wires
- **Q.** Define *Clock Gating*.  
  **Ans.** disables clock to idle blocks
- **Q.** Define *Power Gating*.  
  **Ans.** shuts off supply to unused blocks
- **Q.** Define *Voltage Scaling*.  
  **Ans.** lowering VDD reduces power quadratically

### Long answer (7 marks)

- **Q.** Explain *Delay Estimation* in detail with a neat diagram.  
  **Key points:** Gate delay depends on resistance and capacitance. Propagation Delay — average of rise and fall delays; Elmore Delay — RC delay model for networks; Logical Effort — method for sizing gates for minimum delay.
- **Q.** Explain *Power Dissipation* in detail with a neat diagram.  
  **Key points:** Power has dynamic and static components. Dynamic Power — P = α C V² f; Static Power — leakage power when idle; Short-circuit Power — current while both networks conduct.
- **Q.** Explain *Interconnect* in detail with a neat diagram.  
  **Key points:** Wires add delay and noise. Wire Resistance — R = ρL/(W·t); Crosstalk — coupling between neighbouring wires; Repeater Insertion — buffers break long wires.
- **Q.** Explain *Low-power Design* in detail with a neat diagram.  
  **Key points:** Techniques reduce energy. Clock Gating — disables clock to idle blocks; Power Gating — shuts off supply to unused blocks; Voltage Scaling — lowering VDD reduces power quadratically.

## Unit 4: Combinational & Sequential Design

### Short answer (2-3 marks)

- **Q.** Define *Pass Transistor*.  
  **Ans.** MOSFET passing a signal
- **Q.** Define *Transmission Gate*.  
  **Ans.** parallel NMOS and PMOS passing full swing
- **Q.** Define *Threshold Drop*.  
  **Ans.** NMOS passes weak 1
- **Q.** Define *Dynamic Logic*.  
  **Ans.** precharge then evaluate phases
- **Q.** Define *Domino Logic*.  
  **Ans.** dynamic gate followed by static inverter
- **Q.** Define *Charge Sharing*.  
  **Ans.** charge redistribution corrupting dynamic node
- **Q.** Define *Static Latch*.  
  **Ans.** cross-coupled inverters with clocked access
- **Q.** Define *Master-slave Flip-flop*.  
  **Ans.** two latches on opposite clock phases
- **Q.** Define *Metastability*.  
  **Ans.** unstable state when timing is violated
- **Q.** Define *Ripple Carry Adder*.  
  **Ans.** simple but slow
- **Q.** Define *Carry Select Adder*.  
  **Ans.** precomputes sums for both carries
- **Q.** Define *Array Multiplier*.  
  **Ans.** regular array of AND gates and adders

### Long answer (7 marks)

- **Q.** Explain *Pass Transistor & Transmission Gate Logic* in detail with a neat diagram.  
  **Key points:** Alternatives to static CMOS. Pass Transistor — MOSFET passing a signal; Transmission Gate — parallel NMOS and PMOS passing full swing; Threshold Drop — NMOS passes weak 1.
- **Q.** Explain *Dynamic Logic* in detail with a neat diagram.  
  **Key points:** Precharge-evaluate logic is fast. Dynamic Logic — precharge then evaluate phases; Domino Logic — dynamic gate followed by static inverter; Charge Sharing — charge redistribution corrupting dynamic node.
- **Q.** Explain *Latches & Flip-flops* in detail with a neat diagram.  
  **Key points:** Sequential elements store data. Static Latch — cross-coupled inverters with clocked access; Master-slave Flip-flop — two latches on opposite clock phases; Metastability — unstable state when timing is violated.
- **Q.** Explain *Datapath Elements* in detail with a neat diagram.  
  **Key points:** Datapaths implement arithmetic. Ripple Carry Adder — simple but slow; Carry Select Adder — precomputes sums for both carries; Array Multiplier — regular array of AND gates and adders.

## Unit 5: Memories & Design Methodology

### Short answer (2-3 marks)

- **Q.** Define *6T SRAM Cell*.  
  **Ans.** two cross-coupled inverters with two access transistors
- **Q.** Define *1T1C DRAM Cell*.  
  **Ans.** transistor and capacitor storing charge
- **Q.** Define *Sense Amplifier*.  
  **Ans.** detects small bit-line differences
- **Q.** Define *FPGA*.  
  **Ans.** configurable logic blocks and routing
- **Q.** Define *LUT*.  
  **Ans.** look-up table implementing any function of k inputs
- **Q.** Define *CPLD*.  
  **Ans.** complex PLD with macrocells
- **Q.** Define *RTL Design*.  
  **Ans.** register-transfer level description in HDL
- **Q.** Define *Logic Synthesis*.  
  **Ans.** RTL to gate netlist
- **Q.** Define *Place and Route*.  
  **Ans.** physical placement and wiring
- **Q.** Define *Stuck-at Fault*.  
  **Ans.** node stuck at 0 or 1
- **Q.** Define *Scan Chain*.  
  **Ans.** flip-flops linked to shift test data
- **Q.** Define *BIST*.  
  **Ans.** built-in self-test

### Long answer (7 marks)

- **Q.** Explain *Semiconductor Memories* in detail with a neat diagram.  
  **Key points:** Memory arrays dominate chip area. 6T SRAM Cell — two cross-coupled inverters with two access transistors; 1T1C DRAM Cell — transistor and capacitor storing charge; Sense Amplifier — detects small bit-line differences.
- **Q.** Explain *Programmable Logic* in detail with a neat diagram.  
  **Key points:** FPGAs implement custom logic post-fabrication. FPGA — configurable logic blocks and routing; LUT — look-up table implementing any function of k inputs; CPLD — complex PLD with macrocells.
- **Q.** Explain *ASIC Design Flow* in detail with a neat diagram.  
  **Key points:** Designs move from RTL to silicon. RTL Design — register-transfer level description in HDL; Logic Synthesis — RTL to gate netlist; Place and Route — physical placement and wiring.
- **Q.** Explain *Testing & Design for Testability* in detail with a neat diagram.  
  **Key points:** Chips must be testable after fabrication. Stuck-at Fault — node stuck at 0 or 1; Scan Chain — flip-flops linked to shift test data; BIST — built-in self-test.

