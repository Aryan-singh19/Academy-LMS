# EC-701 VLSI Design — Unit-wise Study Notes

> MOS physics, CMOS logic, fabrication, layout, combinational and sequential design, memories and design flow.

## Unit 1: MOS Transistor Theory

### MOSFET Structure & Operation

MOSFET is the building block of VLSI.

- **NMOS:** n-channel MOSFET conducting with positive gate voltage
- **Threshold Voltage:** gate voltage needed to invert the channel
- **Inversion Layer:** channel formed under the gate

### I-V Characteristics

Drain current depends on region of operation.

- **Linear Region:** ID ∝ (VGS − VT)VDS for small VDS
- **Saturation Region:** ID = (k/2)(VGS − VT)²
- **Body Effect:** threshold rises with source-to-body voltage

### Second-order Effects

Small devices deviate from ideal models.

- **Channel Length Modulation:** ID increases with VDS in saturation
- **Velocity Saturation:** carrier speed limit at high fields
- **Subthreshold Conduction:** leakage current below VT

### Scaling

Shrinking devices improves density and speed.

- **Constant Field Scaling:** dimensions and voltages scaled by 1/S
- **Moore's Law:** transistor count doubles about every two years
- **Short Channel Effects:** threshold roll-off in small devices

## Unit 2: CMOS Logic & Fabrication

### CMOS Inverter

The CMOS inverter is the fundamental gate.

- **CMOS Inverter:** PMOS pull-up and NMOS pull-down
- **Voltage Transfer Characteristic:** output versus input voltage curve
- **Noise Margin:** NMH = VOH − VIH, NML = VIL − VOL

### Static CMOS Gates

Complementary networks implement logic.

- **Pull-down Network:** NMOS series/parallel network
- **Pull-up Network:** dual PMOS network
- **NAND vs NOR:** NAND preferred as PMOS are in parallel

### Fabrication Process

ICs are made by layered photolithographic steps.

- **Photolithography:** transfers patterns using light and photoresist
- **n-well Process:** PMOS built in n-well on p-substrate
- **Ion Implantation:** doping by accelerated ions

### Layout & Design Rules

Layout follows rules for manufacturability.

- **Lambda Rules:** scalable design rules in units of λ
- **Stick Diagram:** symbolic layout showing layers
- **Latch-up:** parasitic thyristor causing short circuit

## Unit 3: Circuit Characterisation

### Delay Estimation

Gate delay depends on resistance and capacitance.

- **Propagation Delay:** average of rise and fall delays
- **Elmore Delay:** RC delay model for networks
- **Logical Effort:** method for sizing gates for minimum delay

### Power Dissipation

Power has dynamic and static components.

- **Dynamic Power:** P = α C V² f
- **Static Power:** leakage power when idle
- **Short-circuit Power:** current while both networks conduct

### Interconnect

Wires add delay and noise.

- **Wire Resistance:** R = ρL/(W·t)
- **Crosstalk:** coupling between neighbouring wires
- **Repeater Insertion:** buffers break long wires

### Low-power Design

Techniques reduce energy.

- **Clock Gating:** disables clock to idle blocks
- **Power Gating:** shuts off supply to unused blocks
- **Voltage Scaling:** lowering VDD reduces power quadratically

## Unit 4: Combinational & Sequential Design

### Pass Transistor & Transmission Gate Logic

Alternatives to static CMOS.

- **Pass Transistor:** MOSFET passing a signal
- **Transmission Gate:** parallel NMOS and PMOS passing full swing
- **Threshold Drop:** NMOS passes weak 1

### Dynamic Logic

Precharge-evaluate logic is fast.

- **Dynamic Logic:** precharge then evaluate phases
- **Domino Logic:** dynamic gate followed by static inverter
- **Charge Sharing:** charge redistribution corrupting dynamic node

### Latches & Flip-flops

Sequential elements store data.

- **Static Latch:** cross-coupled inverters with clocked access
- **Master-slave Flip-flop:** two latches on opposite clock phases
- **Metastability:** unstable state when timing is violated

### Datapath Elements

Datapaths implement arithmetic.

- **Ripple Carry Adder:** simple but slow
- **Carry Select Adder:** precomputes sums for both carries
- **Array Multiplier:** regular array of AND gates and adders

## Unit 5: Memories & Design Methodology

### Semiconductor Memories

Memory arrays dominate chip area.

- **6T SRAM Cell:** two cross-coupled inverters with two access transistors
- **1T1C DRAM Cell:** transistor and capacitor storing charge
- **Sense Amplifier:** detects small bit-line differences

### Programmable Logic

FPGAs implement custom logic post-fabrication.

- **FPGA:** configurable logic blocks and routing
- **LUT:** look-up table implementing any function of k inputs
- **CPLD:** complex PLD with macrocells

### ASIC Design Flow

Designs move from RTL to silicon.

- **RTL Design:** register-transfer level description in HDL
- **Logic Synthesis:** RTL to gate netlist
- **Place and Route:** physical placement and wiring

### Testing & Design for Testability

Chips must be testable after fabrication.

- **Stuck-at Fault:** node stuck at 0 or 1
- **Scan Chain:** flip-flops linked to shift test data
- **BIST:** built-in self-test

## Standard Textbooks

- *CMOS VLSI Design* — Weste & Harris
- *Digital Integrated Circuits* — Rabaey, Chandrakasan & Nikolic
- *Basic VLSI Design* — Pucknell & Eshraghian

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
