# MVL-101 Digital IC Design — Unit-wise Study Notes

> MOS devices, CMOS inverter, combinational and sequential logic, interconnect, timing and arithmetic circuits.

## Unit 1: MOS Device Models

### MOSFET Operation

Transistor behaviour sets circuit performance.

- **Square-law Model:** ID = (μCox/2)(W/L)(VGS − VT)²
- **Velocity Saturation:** limits current in short channels
- **Subthreshold Current:** exponential leakage below VT

### Short-channel Effects

Scaling introduces non-idealities.

- **DIBL:** drain-induced barrier lowering
- **Threshold Roll-off:** VT decreases with channel length
- **Hot Carrier Effect:** degradation from energetic carriers

### FinFET & Advanced Devices

New devices continue scaling.

- **FinFET:** 3D multi-gate transistor
- **GAA FET:** gate-all-around nanosheet transistor
- **FD-SOI:** fully depleted silicon on insulator

### Device Capacitances

Capacitances determine delay.

- **Gate Capacitance:** Cox × W × L
- **Junction Capacitance:** depletion capacitance at source/drain
- **Miller Capacitance:** gate-drain capacitance amplified

## Unit 2: CMOS Inverter

### Static Characteristics

VTC defines logic levels.

- **Switching Threshold:** VM where Vin = Vout
- **Noise Margins:** NMH and NML
- **Sizing Ratio:** PMOS wider to balance mobility

### Dynamic Behaviour

Switching delay depends on RC.

- **Propagation Delay:** tp ≈ 0.69 Req CL
- **Rise and Fall Time:** 10-90% transition times
- **Load Capacitance:** intrinsic plus fan-out plus wire

### Power Consumption

Inverter power components.

- **Dynamic Power:** α CL VDD² f
- **Short-circuit Power:** direct path current during switching
- **Leakage Power:** static subthreshold and gate leakage

### Inverter Chains & Sizing

Optimal buffering drives large loads.

- **Fan-out of 4:** typical efficient stage effort
- **Optimal Stage Count:** about ln(F) stages
- **Tapering Factor:** size ratio between stages

## Unit 3: Combinational Logic

### Static CMOS Gates

Complementary networks implement logic.

- **Pull-down Network:** NMOS implementing function complement
- **Stack Effect:** series transistors reduce leakage
- **Transistor Sizing:** equalise worst-case resistance

### Logical Effort

Systematic delay estimation.

- **Logical Effort:** gate input capacitance relative to inverter
- **Electrical Effort:** Cout/Cin
- **Path Effort:** product of stage efforts

### Ratioed & Pass-transistor Logic

Alternatives to static CMOS.

- **Pseudo-NMOS:** PMOS always on load
- **Transmission Gate Logic:** NMOS and PMOS in parallel
- **CPL:** complementary pass-transistor logic

### Dynamic Logic

Precharge-evaluate circuits.

- **Domino Logic:** dynamic stage plus static inverter
- **Charge Sharing:** reduces dynamic node voltage
- **Keeper Transistor:** maintains dynamic node

## Unit 4: Sequential Circuits & Timing

### Latches & Flip-flops

Storage elements.

- **Static Latch:** cross-coupled inverters
- **Master-slave Flip-flop:** two latches
- **Pulsed Latch:** latch with narrow clock pulse

### Timing Constraints

Clocked circuits must meet constraints.

- **Setup Constraint:** Tclk ≥ tcq + tlogic + tsetup
- **Hold Constraint:** tcq + tlogic,min ≥ thold
- **Clock Skew:** arrival time difference of clock

### Clock Distribution

Clocks reach all registers.

- **H-tree:** balanced clock distribution
- **Clock Jitter:** cycle-to-cycle variation
- **PLL:** phase-locked loop generating clock

### Metastability & Synchronisers

Asynchronous inputs cause metastability.

- **Metastability:** unresolved flip-flop output
- **Two-flop Synchroniser:** reduces failure probability
- **MTBF:** mean time between synchronisation failures

## Unit 5: Interconnect & Arithmetic

### Interconnect Modelling

Wires dominate delay.

- **Wire Resistance:** R = ρL/(Wt)
- **Elmore Delay:** RC delay of distributed line
- **Repeater Insertion:** splits long wires

### Crosstalk & Signal Integrity

Coupling disturbs signals.

- **Crosstalk:** coupling between adjacent wires
- **Ground Bounce:** supply noise from switching
- **Shielding:** grounded wires between signals

### Adders

Fast adders reduce carry delay.

- **Carry Look-ahead Adder:** generate and propagate logic
- **Kogge-Stone Adder:** parallel prefix adder
- **Carry Select Adder:** precomputes both carry cases

### Multipliers

Multipliers combine partial products.

- **Array Multiplier:** regular adder array
- **Booth Encoding:** halves partial products
- **Wallace Tree:** fast reduction of partial products

## Standard Textbooks

- *Digital Integrated Circuits* — Rabaey, Chandrakasan & Nikolic
- *CMOS VLSI Design* — Weste & Harris
- *CMOS Digital Integrated Circuits* — Kang & Leblebici

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
