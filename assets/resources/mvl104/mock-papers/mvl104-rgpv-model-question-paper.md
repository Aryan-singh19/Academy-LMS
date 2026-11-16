# MVL-104 Advanced Digital System Design & Verification — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech VLSI Sem 1: MVL-104.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Module. Explain its role in Verilog Constructs with a suitable example or diagram. **[7]**

(b) Explain Blocking vs Non-blocking in detail. Differentiate between Blocking Assignment and Non-blocking Assignment. **[7]**

**Q2.** *(Unit 2)*

(a) Define Register Transfer. Explain its role in Datapath & Controller with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Pipelining in RTL. Bring out the significance of Pipeline Register and Latency. **[7]**

**Q3.** *(Unit 3)*

(a) Define Clock Gating. Explain its role in Timing Closure with a suitable example or diagram. **[7]**

(b) Explain Clock Domain Crossing in detail. Differentiate between CDC and Synchroniser. **[7]**

**Q4.** *(Unit 4)*

(a) Define SVA. Explain its role in Assertions with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Verification Planning. Bring out the significance of Verification Plan and Testbench. **[7]**

**Q5.** *(Unit 5)*

(a) Define LUT. Explain its role in FPGA Architecture with a suitable example or diagram. **[7]**

(b) Explain FPGA Design Flow in detail. Differentiate between Place and Route and Bitstream. **[7]**

**Q6.** *(Unit 1)*

(a) Define Hierarchy. Explain its role in Parameterised Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Verilog Constructs. Bring out the significance of Module and Continuous Assignment. **[7]**

**Q7.** *(Unit 3)*

(a) Define Synthesis. Explain its role in Logic Synthesis with a suitable example or diagram. **[7]**

(b) Explain Static Timing Analysis in detail. Differentiate between STA and Slack. **[7]**

**Q8.** *(Unit 5)*

(a) Define Bitstream. Explain its role in FPGA Design Flow with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Formal Verification. Bring out the significance of Equivalence Checking and Model Checking. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Non-blocking Assignment. Explain its role in Blocking vs Non-blocking with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss SystemVerilog for Design. Bring out the significance of always_ff and always_comb. **[7]**

**Q2.** *(Unit 2)*

(a) Define Throughput. Explain its role in Pipelining in RTL with a suitable example or diagram. **[7]**

(b) Explain Memories & FIFOs in detail. Differentiate between Synchronous FIFO and Asynchronous FIFO. **[7]**

**Q3.** *(Unit 3)*

(a) Define CDC. Explain its role in Clock Domain Crossing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Logic Synthesis. Bring out the significance of Synthesis and Technology Library. **[7]**

**Q4.** *(Unit 4)*

(a) Define Testbench. Explain its role in Verification Planning with a suitable example or diagram. **[7]**

(b) Explain Constrained Random Verification in detail. Differentiate between Constrained Random and Functional Coverage. **[7]**

**Q5.** *(Unit 5)*

(a) Define Timing Report. Explain its role in FPGA Design Flow with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Formal Verification. Bring out the significance of Equivalence Checking and Model Checking. **[7]**

**Q6.** *(Unit 2)*

(a) Define Moore FSM. Explain its role in FSM Design with a suitable example or diagram. **[7]**

(b) Explain Datapath & Controller in detail. Differentiate between ASMD Chart and Register Transfer. **[7]**

**Q7.** *(Unit 4)*

(a) Define Functional Coverage. Explain its role in Constrained Random Verification with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss UVM. Bring out the significance of UVM and Agent. **[7]**

**Q8.** *(Unit 1)*

(a) Define Interface. Explain its role in SystemVerilog for Design with a suitable example or diagram. **[7]**

(b) Explain Parameterised Design in detail. Differentiate between Parameter and Generate Block. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Module: basic design unit with ports
- **Q1(b):** Blocking Assignment: executes in order (=) | Non-blocking Assignment: updates at end of time step (<=) | Race Condition: order-dependent simulation result
- **Q2(a):** Register Transfer: data moves between registers
- **Q2(b):** Pipeline Register: splits combinational path | Latency: cycles from input to output | Throughput: results per cycle
- **Q3(a):** Clock Gating: reduces dynamic power
- **Q3(b):** CDC: signals between asynchronous clocks | Synchroniser: two flip-flops reduce metastability | Handshake: safe multi-bit transfer
- **Q4(a):** SVA: SystemVerilog assertions
- **Q4(b):** Verification Plan: features and coverage goals | Testbench: environment driving and checking DUT | Directed Test: specific stimulus for a feature
- **Q5(a):** LUT: look-up table implementing logic
- **Q5(b):** Place and Route: maps netlist onto FPGA | Bitstream: configuration file | Timing Report: shows achieved frequency
- **Q6(a):** Hierarchy: modules instantiated within modules
- **Q6(b):** Module: basic design unit with ports | Continuous Assignment: assign for combinational logic | Always Block: procedural description
- **Q7(a):** Synthesis: translate, optimise and map to library
- **Q7(b):** STA: exhaustive path timing analysis | Slack: required time minus arrival time | Critical Path: longest delay path
- **Q8(a):** Bitstream: configuration file
- **Q8(b):** Equivalence Checking: proves two designs match | Model Checking: exhaustively checks properties | Bounded Model Checking: checks up to depth k

## Recommended Books

- *Verilog HDL* — Samir Palnitkar
- *SystemVerilog for Verification* — Chris Spear
- *Static Timing Analysis for Nanometer Designs* — Bhasker & Chadha
