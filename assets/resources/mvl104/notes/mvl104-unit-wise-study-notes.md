# MVL-104 Advanced Digital System Design & Verification — Unit-wise Study Notes

> RTL design with Verilog/SystemVerilog, FSMs, datapaths, synthesis, static timing analysis and functional verification.

## Unit 1: HDL-based Design

### Verilog Constructs

HDLs describe hardware.

- **Module:** basic design unit with ports
- **Continuous Assignment:** assign for combinational logic
- **Always Block:** procedural description

### Blocking vs Non-blocking

Assignment types affect simulation.

- **Blocking Assignment:** executes in order (=)
- **Non-blocking Assignment:** updates at end of time step (<=)
- **Race Condition:** order-dependent simulation result

### SystemVerilog for Design

Extensions improve design.

- **always_ff:** sequential logic block
- **always_comb:** combinational logic block
- **Interface:** bundles signals between modules

### Parameterised Design

Reusable modules.

- **Parameter:** compile-time constant
- **Generate Block:** replicates hardware
- **Hierarchy:** modules instantiated within modules

## Unit 2: FSMs & Datapaths

### FSM Design

State machines control datapaths.

- **Moore FSM:** outputs depend on state
- **Mealy FSM:** outputs depend on state and input
- **State Encoding:** binary, Gray or one-hot

### Datapath & Controller

Designs split into data and control.

- **ASMD Chart:** algorithmic state machine with datapath
- **Register Transfer:** data moves between registers
- **Control Signals:** select datapath operations

### Pipelining in RTL

Pipelines raise throughput.

- **Pipeline Register:** splits combinational path
- **Latency:** cycles from input to output
- **Throughput:** results per cycle

### Memories & FIFOs

Storage structures in RTL.

- **Synchronous FIFO:** same clock for read and write
- **Asynchronous FIFO:** Gray-code pointers across clocks
- **Inferred RAM:** HDL pattern mapped to memory

## Unit 3: Synthesis & Timing

### Logic Synthesis

RTL becomes gates.

- **Synthesis:** translate, optimise and map to library
- **Technology Library:** cell timing and area data
- **Constraints File:** SDC timing constraints

### Static Timing Analysis

STA checks timing without simulation.

- **STA:** exhaustive path timing analysis
- **Slack:** required time minus arrival time
- **Critical Path:** longest delay path

### Timing Closure

Fixing violations.

- **Setup Violation:** path too slow
- **Hold Violation:** path too fast
- **Clock Gating:** reduces dynamic power

### Clock Domain Crossing

Signals crossing clocks need care.

- **CDC:** signals between asynchronous clocks
- **Synchroniser:** two flip-flops reduce metastability
- **Handshake:** safe multi-bit transfer

## Unit 4: Functional Verification

### Verification Planning

Verification consumes most effort.

- **Verification Plan:** features and coverage goals
- **Testbench:** environment driving and checking DUT
- **Directed Test:** specific stimulus for a feature

### Constrained Random Verification

Random tests explore corners.

- **Constrained Random:** random stimulus within constraints
- **Functional Coverage:** covergroups measure tested features
- **Scoreboard:** compares DUT output with reference

### UVM

Standard methodology for testbenches.

- **UVM:** universal verification methodology
- **Agent:** driver, monitor and sequencer
- **Sequence:** stimulus generator

### Assertions

Assertions check properties.

- **SVA:** SystemVerilog assertions
- **Immediate Assertion:** checks at a point in time
- **Concurrent Assertion:** checks temporal behaviour

## Unit 5: FPGA & Formal Methods

### FPGA Architecture

FPGAs implement RTL directly.

- **CLB:** configurable logic block
- **LUT:** look-up table implementing logic
- **DSP Slice:** hardened multiply-accumulate block

### FPGA Design Flow

From RTL to bitstream.

- **Place and Route:** maps netlist onto FPGA
- **Bitstream:** configuration file
- **Timing Report:** shows achieved frequency

### Formal Verification

Mathematical proofs of correctness.

- **Equivalence Checking:** proves two designs match
- **Model Checking:** exhaustively checks properties
- **Bounded Model Checking:** checks up to depth k

### Emulation & Prototyping

Fast pre-silicon validation.

- **Hardware Emulation:** runs design on special hardware
- **FPGA Prototyping:** runs design on FPGA boards
- **Hardware-software Co-verification:** tests software on hardware model

## Standard Textbooks

- *Verilog HDL* — Samir Palnitkar
- *SystemVerilog for Verification* — Chris Spear
- *Static Timing Analysis for Nanometer Designs* — Bhasker & Chadha

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
