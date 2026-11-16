# EC-303 Digital System Design — Unit-wise Study Notes

> Logic minimisation, combinational and sequential design, state machines, memories, PLDs and logic families.

## Unit 1: Logic Simplification

### Boolean Algebra Review

Boolean laws simplify digital expressions.

- **Consensus Theorem:** AB + A'C + BC = AB + A'C
- **De Morgan's Theorem:** complement of a sum is the product of complements
- **Duality:** interchanging AND/OR and 0/1 gives a valid identity

### K-Map Minimisation

K-maps group adjacent minterms.

- **Karnaugh Map:** Gray-ordered grid for grouping 1s
- **Essential Prime Implicant:** prime implicant covering a minterm no other covers
- **Don't-care Condition:** unspecified output usable for larger groups

### Quine-McCluskey Method

Tabulation suits many variables.

- **Quine-McCluskey:** tabular minimisation by combining minterms differing in one bit
- **Prime Implicant Chart:** table selecting implicants that cover all minterms
- **Petrick's Method:** algebraic way to choose minimal cover

### Hazards in Combinational Circuits

Hazards cause glitches during transitions.

- **Static Hazard:** output momentarily changes when it should stay constant
- **Dynamic Hazard:** output changes several times instead of once
- **Hazard Cover:** adding redundant terms to remove static hazards

## Unit 2: Combinational Design

### Arithmetic Circuits

Adders and subtractors build ALUs.

- **Full Adder:** Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B)
- **Carry Look-ahead:** generate and propagate terms compute carries quickly
- **BCD Adder:** adds BCD digits with correction when sum exceeds 9

### MUX & DEMUX Design

Data selectors implement functions.

- **Multiplexer:** selects one input with select lines
- **Function Implementation with MUX:** n-variable function on 2^(n−1):1 MUX
- **Demultiplexer:** routes one input to one of several outputs

### Decoders & Encoders

Code conversion circuits support addressing.

- **Decoder:** activates one of 2^n outputs
- **Priority Encoder:** encodes the highest-priority active input
- **7-Segment Decoder:** drives display segments from a BCD input

### Comparators & ALU Design

Comparators and ALUs perform decisions and operations.

- **Magnitude Comparator:** indicates greater, equal or less
- **74181 ALU:** classic 4-bit arithmetic logic unit IC
- **Parity Checker:** detects odd number of errors

## Unit 3: Sequential Circuits

### Flip-Flops

Bistable elements store state.

- **JK Flip-Flop:** J = K = 1 toggles the state
- **T Flip-Flop:** toggles when T = 1
- **Master-Slave Flip-Flop:** avoids race-around using two latches

### Counters

Counters cycle through states.

- **Ripple Counter:** asynchronous counter with cumulative delay
- **Synchronous Counter:** all flip-flops clocked together
- **Johnson Counter:** twisted ring counter with 2n states

### Shift Registers

Shift registers move data serially.

- **SISO:** serial-in serial-out
- **Universal Shift Register:** shifts left, right and loads in parallel
- **Serial-to-parallel Conversion:** data shifted in serially and read in parallel

### Timing & Clocking

Clocking constraints govern reliable operation.

- **Setup Time:** input stable before clock edge
- **Hold Time:** input stable after clock edge
- **Clock Skew:** arrival time difference of the clock at different flip-flops

## Unit 4: Finite State Machines

### Mealy & Moore Machines

FSMs model sequential behaviour.

- **Moore Machine:** outputs depend only on present state
- **Mealy Machine:** outputs depend on present state and inputs
- **State Diagram:** graph of states and transitions

### State Reduction & Assignment

Fewer states mean less hardware.

- **Equivalent States:** states with same outputs and equivalent next states
- **State Assignment:** choosing binary codes for states
- **One-hot Encoding:** one flip-flop per state

### Sequence Detector Design

FSMs recognise bit patterns.

- **Sequence Detector:** FSM outputting 1 when a pattern appears
- **Overlapping Detection:** allows a pattern to start within a previous match
- **Excitation Equations:** flip-flop input equations derived from tables

### Asynchronous Sequential Circuits

Circuits without clocks respond to input changes.

- **Fundamental Mode:** only one input changes at a time
- **Critical Race:** race whose outcome depends on delays
- **Flow Table:** table of states for asynchronous circuits

## Unit 5: Memories, PLDs & HDL

### Semiconductor Memories

Memories store binary data in arrays.

- **ROM:** non-volatile read-only memory
- **SRAM:** static RAM using flip-flops
- **DRAM:** dynamic RAM needing periodic refresh

### Programmable Logic Devices

PLDs implement custom logic.

- **PLA:** programmable AND and OR arrays
- **PAL:** programmable AND array with fixed OR array
- **FPGA:** array of configurable logic blocks and interconnects

### Logic Families

Technologies differ in speed and power.

- **TTL:** bipolar logic family, 74 series
- **CMOS:** complementary MOS with very low static power
- **Fan-out:** number of loads an output can drive

### Introduction to Verilog/VHDL

HDLs describe hardware for simulation and synthesis.

- **HDL:** hardware description language such as Verilog or VHDL
- **Behavioural Modelling:** describing what a circuit does
- **Synthesis:** converting HDL into a gate-level netlist

## Standard Textbooks

- *Digital Design* — M. Morris Mano
- *Fundamentals of Logic Design* — Charles H. Roth
- *Modern Digital Electronics* — R. P. Jain

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
