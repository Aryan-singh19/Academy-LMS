# MVL-101 Digital IC Design — Question Bank with Answer Hints

## Unit 1: MOS Device Models

### Short answer (2-3 marks)

- **Q.** Define *Square-law Model*.  
  **Ans.** ID = (μCox/2)(W/L)(VGS − VT)²
- **Q.** Define *Velocity Saturation*.  
  **Ans.** limits current in short channels
- **Q.** Define *Subthreshold Current*.  
  **Ans.** exponential leakage below VT
- **Q.** Define *DIBL*.  
  **Ans.** drain-induced barrier lowering
- **Q.** Define *Threshold Roll-off*.  
  **Ans.** VT decreases with channel length
- **Q.** Define *Hot Carrier Effect*.  
  **Ans.** degradation from energetic carriers
- **Q.** Define *FinFET*.  
  **Ans.** 3D multi-gate transistor
- **Q.** Define *GAA FET*.  
  **Ans.** gate-all-around nanosheet transistor
- **Q.** Define *FD-SOI*.  
  **Ans.** fully depleted silicon on insulator
- **Q.** Define *Gate Capacitance*.  
  **Ans.** Cox × W × L
- **Q.** Define *Junction Capacitance*.  
  **Ans.** depletion capacitance at source/drain
- **Q.** Define *Miller Capacitance*.  
  **Ans.** gate-drain capacitance amplified

### Long answer (7 marks)

- **Q.** Explain *MOSFET Operation* in detail with a neat diagram.  
  **Key points:** Transistor behaviour sets circuit performance. Square-law Model — ID = (μCox/2)(W/L)(VGS − VT)²; Velocity Saturation — limits current in short channels; Subthreshold Current — exponential leakage below VT.
- **Q.** Explain *Short-channel Effects* in detail with a neat diagram.  
  **Key points:** Scaling introduces non-idealities. DIBL — drain-induced barrier lowering; Threshold Roll-off — VT decreases with channel length; Hot Carrier Effect — degradation from energetic carriers.
- **Q.** Explain *FinFET & Advanced Devices* in detail with a neat diagram.  
  **Key points:** New devices continue scaling. FinFET — 3D multi-gate transistor; GAA FET — gate-all-around nanosheet transistor; FD-SOI — fully depleted silicon on insulator.
- **Q.** Explain *Device Capacitances* in detail with a neat diagram.  
  **Key points:** Capacitances determine delay. Gate Capacitance — Cox × W × L; Junction Capacitance — depletion capacitance at source/drain; Miller Capacitance — gate-drain capacitance amplified.

## Unit 2: CMOS Inverter

### Short answer (2-3 marks)

- **Q.** Define *Switching Threshold*.  
  **Ans.** VM where Vin = Vout
- **Q.** Define *Noise Margins*.  
  **Ans.** NMH and NML
- **Q.** Define *Sizing Ratio*.  
  **Ans.** PMOS wider to balance mobility
- **Q.** Define *Propagation Delay*.  
  **Ans.** tp ≈ 0.69 Req CL
- **Q.** Define *Rise and Fall Time*.  
  **Ans.** 10-90% transition times
- **Q.** Define *Load Capacitance*.  
  **Ans.** intrinsic plus fan-out plus wire
- **Q.** Define *Dynamic Power*.  
  **Ans.** α CL VDD² f
- **Q.** Define *Short-circuit Power*.  
  **Ans.** direct path current during switching
- **Q.** Define *Leakage Power*.  
  **Ans.** static subthreshold and gate leakage
- **Q.** Define *Fan-out of 4*.  
  **Ans.** typical efficient stage effort
- **Q.** Define *Optimal Stage Count*.  
  **Ans.** about ln(F) stages
- **Q.** Define *Tapering Factor*.  
  **Ans.** size ratio between stages

### Long answer (7 marks)

- **Q.** Explain *Static Characteristics* in detail with a neat diagram.  
  **Key points:** VTC defines logic levels. Switching Threshold — VM where Vin = Vout; Noise Margins — NMH and NML; Sizing Ratio — PMOS wider to balance mobility.
- **Q.** Explain *Dynamic Behaviour* in detail with a neat diagram.  
  **Key points:** Switching delay depends on RC. Propagation Delay — tp ≈ 0.69 Req CL; Rise and Fall Time — 10-90% transition times; Load Capacitance — intrinsic plus fan-out plus wire.
- **Q.** Explain *Power Consumption* in detail with a neat diagram.  
  **Key points:** Inverter power components. Dynamic Power — α CL VDD² f; Short-circuit Power — direct path current during switching; Leakage Power — static subthreshold and gate leakage.
- **Q.** Explain *Inverter Chains & Sizing* in detail with a neat diagram.  
  **Key points:** Optimal buffering drives large loads. Fan-out of 4 — typical efficient stage effort; Optimal Stage Count — about ln(F) stages; Tapering Factor — size ratio between stages.

## Unit 3: Combinational Logic

### Short answer (2-3 marks)

- **Q.** Define *Pull-down Network*.  
  **Ans.** NMOS implementing function complement
- **Q.** Define *Stack Effect*.  
  **Ans.** series transistors reduce leakage
- **Q.** Define *Transistor Sizing*.  
  **Ans.** equalise worst-case resistance
- **Q.** Define *Logical Effort*.  
  **Ans.** gate input capacitance relative to inverter
- **Q.** Define *Electrical Effort*.  
  **Ans.** Cout/Cin
- **Q.** Define *Path Effort*.  
  **Ans.** product of stage efforts
- **Q.** Define *Pseudo-NMOS*.  
  **Ans.** PMOS always on load
- **Q.** Define *Transmission Gate Logic*.  
  **Ans.** NMOS and PMOS in parallel
- **Q.** Define *CPL*.  
  **Ans.** complementary pass-transistor logic
- **Q.** Define *Domino Logic*.  
  **Ans.** dynamic stage plus static inverter
- **Q.** Define *Charge Sharing*.  
  **Ans.** reduces dynamic node voltage
- **Q.** Define *Keeper Transistor*.  
  **Ans.** maintains dynamic node

### Long answer (7 marks)

- **Q.** Explain *Static CMOS Gates* in detail with a neat diagram.  
  **Key points:** Complementary networks implement logic. Pull-down Network — NMOS implementing function complement; Stack Effect — series transistors reduce leakage; Transistor Sizing — equalise worst-case resistance.
- **Q.** Explain *Logical Effort* in detail with a neat diagram.  
  **Key points:** Systematic delay estimation. Logical Effort — gate input capacitance relative to inverter; Electrical Effort — Cout/Cin; Path Effort — product of stage efforts.
- **Q.** Explain *Ratioed & Pass-transistor Logic* in detail with a neat diagram.  
  **Key points:** Alternatives to static CMOS. Pseudo-NMOS — PMOS always on load; Transmission Gate Logic — NMOS and PMOS in parallel; CPL — complementary pass-transistor logic.
- **Q.** Explain *Dynamic Logic* in detail with a neat diagram.  
  **Key points:** Precharge-evaluate circuits. Domino Logic — dynamic stage plus static inverter; Charge Sharing — reduces dynamic node voltage; Keeper Transistor — maintains dynamic node.

## Unit 4: Sequential Circuits & Timing

### Short answer (2-3 marks)

- **Q.** Define *Static Latch*.  
  **Ans.** cross-coupled inverters
- **Q.** Define *Master-slave Flip-flop*.  
  **Ans.** two latches
- **Q.** Define *Pulsed Latch*.  
  **Ans.** latch with narrow clock pulse
- **Q.** Define *Setup Constraint*.  
  **Ans.** Tclk ≥ tcq + tlogic + tsetup
- **Q.** Define *Hold Constraint*.  
  **Ans.** tcq + tlogic,min ≥ thold
- **Q.** Define *Clock Skew*.  
  **Ans.** arrival time difference of clock
- **Q.** Define *H-tree*.  
  **Ans.** balanced clock distribution
- **Q.** Define *Clock Jitter*.  
  **Ans.** cycle-to-cycle variation
- **Q.** Define *PLL*.  
  **Ans.** phase-locked loop generating clock
- **Q.** Define *Metastability*.  
  **Ans.** unresolved flip-flop output
- **Q.** Define *Two-flop Synchroniser*.  
  **Ans.** reduces failure probability
- **Q.** Define *MTBF*.  
  **Ans.** mean time between synchronisation failures

### Long answer (7 marks)

- **Q.** Explain *Latches & Flip-flops* in detail with a neat diagram.  
  **Key points:** Storage elements. Static Latch — cross-coupled inverters; Master-slave Flip-flop — two latches; Pulsed Latch — latch with narrow clock pulse.
- **Q.** Explain *Timing Constraints* in detail with a neat diagram.  
  **Key points:** Clocked circuits must meet constraints. Setup Constraint — Tclk ≥ tcq + tlogic + tsetup; Hold Constraint — tcq + tlogic,min ≥ thold; Clock Skew — arrival time difference of clock.
- **Q.** Explain *Clock Distribution* in detail with a neat diagram.  
  **Key points:** Clocks reach all registers. H-tree — balanced clock distribution; Clock Jitter — cycle-to-cycle variation; PLL — phase-locked loop generating clock.
- **Q.** Explain *Metastability & Synchronisers* in detail with a neat diagram.  
  **Key points:** Asynchronous inputs cause metastability. Metastability — unresolved flip-flop output; Two-flop Synchroniser — reduces failure probability; MTBF — mean time between synchronisation failures.

## Unit 5: Interconnect & Arithmetic

### Short answer (2-3 marks)

- **Q.** Define *Wire Resistance*.  
  **Ans.** R = ρL/(Wt)
- **Q.** Define *Elmore Delay*.  
  **Ans.** RC delay of distributed line
- **Q.** Define *Repeater Insertion*.  
  **Ans.** splits long wires
- **Q.** Define *Crosstalk*.  
  **Ans.** coupling between adjacent wires
- **Q.** Define *Ground Bounce*.  
  **Ans.** supply noise from switching
- **Q.** Define *Shielding*.  
  **Ans.** grounded wires between signals
- **Q.** Define *Carry Look-ahead Adder*.  
  **Ans.** generate and propagate logic
- **Q.** Define *Kogge-Stone Adder*.  
  **Ans.** parallel prefix adder
- **Q.** Define *Carry Select Adder*.  
  **Ans.** precomputes both carry cases
- **Q.** Define *Array Multiplier*.  
  **Ans.** regular adder array
- **Q.** Define *Booth Encoding*.  
  **Ans.** halves partial products
- **Q.** Define *Wallace Tree*.  
  **Ans.** fast reduction of partial products

### Long answer (7 marks)

- **Q.** Explain *Interconnect Modelling* in detail with a neat diagram.  
  **Key points:** Wires dominate delay. Wire Resistance — R = ρL/(Wt); Elmore Delay — RC delay of distributed line; Repeater Insertion — splits long wires.
- **Q.** Explain *Crosstalk & Signal Integrity* in detail with a neat diagram.  
  **Key points:** Coupling disturbs signals. Crosstalk — coupling between adjacent wires; Ground Bounce — supply noise from switching; Shielding — grounded wires between signals.
- **Q.** Explain *Adders* in detail with a neat diagram.  
  **Key points:** Fast adders reduce carry delay. Carry Look-ahead Adder — generate and propagate logic; Kogge-Stone Adder — parallel prefix adder; Carry Select Adder — precomputes both carry cases.
- **Q.** Explain *Multipliers* in detail with a neat diagram.  
  **Key points:** Multipliers combine partial products. Array Multiplier — regular adder array; Booth Encoding — halves partial products; Wallace Tree — fast reduction of partial products.

