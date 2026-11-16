# MVL-104 Advanced Digital System Design & Verification — Question Bank with Answer Hints

## Unit 1: HDL-based Design

### Short answer (2-3 marks)

- **Q.** Define *Module*.  
  **Ans.** basic design unit with ports
- **Q.** Define *Continuous Assignment*.  
  **Ans.** assign for combinational logic
- **Q.** Define *Always Block*.  
  **Ans.** procedural description
- **Q.** Define *Blocking Assignment*.  
  **Ans.** executes in order (=)
- **Q.** Define *Non-blocking Assignment*.  
  **Ans.** updates at end of time step (<=)
- **Q.** Define *Race Condition*.  
  **Ans.** order-dependent simulation result
- **Q.** Define *always_ff*.  
  **Ans.** sequential logic block
- **Q.** Define *always_comb*.  
  **Ans.** combinational logic block
- **Q.** Define *Interface*.  
  **Ans.** bundles signals between modules
- **Q.** Define *Parameter*.  
  **Ans.** compile-time constant
- **Q.** Define *Generate Block*.  
  **Ans.** replicates hardware
- **Q.** Define *Hierarchy*.  
  **Ans.** modules instantiated within modules

### Long answer (7 marks)

- **Q.** Explain *Verilog Constructs* in detail with a neat diagram.  
  **Key points:** HDLs describe hardware. Module — basic design unit with ports; Continuous Assignment — assign for combinational logic; Always Block — procedural description.
- **Q.** Explain *Blocking vs Non-blocking* in detail with a neat diagram.  
  **Key points:** Assignment types affect simulation. Blocking Assignment — executes in order (=); Non-blocking Assignment — updates at end of time step (<=); Race Condition — order-dependent simulation result.
- **Q.** Explain *SystemVerilog for Design* in detail with a neat diagram.  
  **Key points:** Extensions improve design. always_ff — sequential logic block; always_comb — combinational logic block; Interface — bundles signals between modules.
- **Q.** Explain *Parameterised Design* in detail with a neat diagram.  
  **Key points:** Reusable modules. Parameter — compile-time constant; Generate Block — replicates hardware; Hierarchy — modules instantiated within modules.

## Unit 2: FSMs & Datapaths

### Short answer (2-3 marks)

- **Q.** Define *Moore FSM*.  
  **Ans.** outputs depend on state
- **Q.** Define *Mealy FSM*.  
  **Ans.** outputs depend on state and input
- **Q.** Define *State Encoding*.  
  **Ans.** binary, Gray or one-hot
- **Q.** Define *ASMD Chart*.  
  **Ans.** algorithmic state machine with datapath
- **Q.** Define *Register Transfer*.  
  **Ans.** data moves between registers
- **Q.** Define *Control Signals*.  
  **Ans.** select datapath operations
- **Q.** Define *Pipeline Register*.  
  **Ans.** splits combinational path
- **Q.** Define *Latency*.  
  **Ans.** cycles from input to output
- **Q.** Define *Throughput*.  
  **Ans.** results per cycle
- **Q.** Define *Synchronous FIFO*.  
  **Ans.** same clock for read and write
- **Q.** Define *Asynchronous FIFO*.  
  **Ans.** Gray-code pointers across clocks
- **Q.** Define *Inferred RAM*.  
  **Ans.** HDL pattern mapped to memory

### Long answer (7 marks)

- **Q.** Explain *FSM Design* in detail with a neat diagram.  
  **Key points:** State machines control datapaths. Moore FSM — outputs depend on state; Mealy FSM — outputs depend on state and input; State Encoding — binary, Gray or one-hot.
- **Q.** Explain *Datapath & Controller* in detail with a neat diagram.  
  **Key points:** Designs split into data and control. ASMD Chart — algorithmic state machine with datapath; Register Transfer — data moves between registers; Control Signals — select datapath operations.
- **Q.** Explain *Pipelining in RTL* in detail with a neat diagram.  
  **Key points:** Pipelines raise throughput. Pipeline Register — splits combinational path; Latency — cycles from input to output; Throughput — results per cycle.
- **Q.** Explain *Memories & FIFOs* in detail with a neat diagram.  
  **Key points:** Storage structures in RTL. Synchronous FIFO — same clock for read and write; Asynchronous FIFO — Gray-code pointers across clocks; Inferred RAM — HDL pattern mapped to memory.

## Unit 3: Synthesis & Timing

### Short answer (2-3 marks)

- **Q.** Define *Synthesis*.  
  **Ans.** translate, optimise and map to library
- **Q.** Define *Technology Library*.  
  **Ans.** cell timing and area data
- **Q.** Define *Constraints File*.  
  **Ans.** SDC timing constraints
- **Q.** Define *STA*.  
  **Ans.** exhaustive path timing analysis
- **Q.** Define *Slack*.  
  **Ans.** required time minus arrival time
- **Q.** Define *Critical Path*.  
  **Ans.** longest delay path
- **Q.** Define *Setup Violation*.  
  **Ans.** path too slow
- **Q.** Define *Hold Violation*.  
  **Ans.** path too fast
- **Q.** Define *Clock Gating*.  
  **Ans.** reduces dynamic power
- **Q.** Define *CDC*.  
  **Ans.** signals between asynchronous clocks
- **Q.** Define *Synchroniser*.  
  **Ans.** two flip-flops reduce metastability
- **Q.** Define *Handshake*.  
  **Ans.** safe multi-bit transfer

### Long answer (7 marks)

- **Q.** Explain *Logic Synthesis* in detail with a neat diagram.  
  **Key points:** RTL becomes gates. Synthesis — translate, optimise and map to library; Technology Library — cell timing and area data; Constraints File — SDC timing constraints.
- **Q.** Explain *Static Timing Analysis* in detail with a neat diagram.  
  **Key points:** STA checks timing without simulation. STA — exhaustive path timing analysis; Slack — required time minus arrival time; Critical Path — longest delay path.
- **Q.** Explain *Timing Closure* in detail with a neat diagram.  
  **Key points:** Fixing violations. Setup Violation — path too slow; Hold Violation — path too fast; Clock Gating — reduces dynamic power.
- **Q.** Explain *Clock Domain Crossing* in detail with a neat diagram.  
  **Key points:** Signals crossing clocks need care. CDC — signals between asynchronous clocks; Synchroniser — two flip-flops reduce metastability; Handshake — safe multi-bit transfer.

## Unit 4: Functional Verification

### Short answer (2-3 marks)

- **Q.** Define *Verification Plan*.  
  **Ans.** features and coverage goals
- **Q.** Define *Testbench*.  
  **Ans.** environment driving and checking DUT
- **Q.** Define *Directed Test*.  
  **Ans.** specific stimulus for a feature
- **Q.** Define *Constrained Random*.  
  **Ans.** random stimulus within constraints
- **Q.** Define *Functional Coverage*.  
  **Ans.** covergroups measure tested features
- **Q.** Define *Scoreboard*.  
  **Ans.** compares DUT output with reference
- **Q.** Define *UVM*.  
  **Ans.** universal verification methodology
- **Q.** Define *Agent*.  
  **Ans.** driver, monitor and sequencer
- **Q.** Define *Sequence*.  
  **Ans.** stimulus generator
- **Q.** Define *SVA*.  
  **Ans.** SystemVerilog assertions
- **Q.** Define *Immediate Assertion*.  
  **Ans.** checks at a point in time
- **Q.** Define *Concurrent Assertion*.  
  **Ans.** checks temporal behaviour

### Long answer (7 marks)

- **Q.** Explain *Verification Planning* in detail with a neat diagram.  
  **Key points:** Verification consumes most effort. Verification Plan — features and coverage goals; Testbench — environment driving and checking DUT; Directed Test — specific stimulus for a feature.
- **Q.** Explain *Constrained Random Verification* in detail with a neat diagram.  
  **Key points:** Random tests explore corners. Constrained Random — random stimulus within constraints; Functional Coverage — covergroups measure tested features; Scoreboard — compares DUT output with reference.
- **Q.** Explain *UVM* in detail with a neat diagram.  
  **Key points:** Standard methodology for testbenches. UVM — universal verification methodology; Agent — driver, monitor and sequencer; Sequence — stimulus generator.
- **Q.** Explain *Assertions* in detail with a neat diagram.  
  **Key points:** Assertions check properties. SVA — SystemVerilog assertions; Immediate Assertion — checks at a point in time; Concurrent Assertion — checks temporal behaviour.

## Unit 5: FPGA & Formal Methods

### Short answer (2-3 marks)

- **Q.** Define *CLB*.  
  **Ans.** configurable logic block
- **Q.** Define *LUT*.  
  **Ans.** look-up table implementing logic
- **Q.** Define *DSP Slice*.  
  **Ans.** hardened multiply-accumulate block
- **Q.** Define *Place and Route*.  
  **Ans.** maps netlist onto FPGA
- **Q.** Define *Bitstream*.  
  **Ans.** configuration file
- **Q.** Define *Timing Report*.  
  **Ans.** shows achieved frequency
- **Q.** Define *Equivalence Checking*.  
  **Ans.** proves two designs match
- **Q.** Define *Model Checking*.  
  **Ans.** exhaustively checks properties
- **Q.** Define *Bounded Model Checking*.  
  **Ans.** checks up to depth k
- **Q.** Define *Hardware Emulation*.  
  **Ans.** runs design on special hardware
- **Q.** Define *FPGA Prototyping*.  
  **Ans.** runs design on FPGA boards
- **Q.** Define *Hardware-software Co-verification*.  
  **Ans.** tests software on hardware model

### Long answer (7 marks)

- **Q.** Explain *FPGA Architecture* in detail with a neat diagram.  
  **Key points:** FPGAs implement RTL directly. CLB — configurable logic block; LUT — look-up table implementing logic; DSP Slice — hardened multiply-accumulate block.
- **Q.** Explain *FPGA Design Flow* in detail with a neat diagram.  
  **Key points:** From RTL to bitstream. Place and Route — maps netlist onto FPGA; Bitstream — configuration file; Timing Report — shows achieved frequency.
- **Q.** Explain *Formal Verification* in detail with a neat diagram.  
  **Key points:** Mathematical proofs of correctness. Equivalence Checking — proves two designs match; Model Checking — exhaustively checks properties; Bounded Model Checking — checks up to depth k.
- **Q.** Explain *Emulation & Prototyping* in detail with a neat diagram.  
  **Key points:** Fast pre-silicon validation. Hardware Emulation — runs design on special hardware; FPGA Prototyping — runs design on FPGA boards; Hardware-software Co-verification — tests software on hardware model.

