# EC-303 Digital System Design — Question Bank with Answer Hints

## Unit 1: Logic Simplification

### Short answer (2-3 marks)

- **Q.** Define *Consensus Theorem*.  
  **Ans.** AB + A'C + BC = AB + A'C
- **Q.** Define *De Morgan's Theorem*.  
  **Ans.** complement of a sum is the product of complements
- **Q.** Define *Duality*.  
  **Ans.** interchanging AND/OR and 0/1 gives a valid identity
- **Q.** Define *Karnaugh Map*.  
  **Ans.** Gray-ordered grid for grouping 1s
- **Q.** Define *Essential Prime Implicant*.  
  **Ans.** prime implicant covering a minterm no other covers
- **Q.** Define *Don't-care Condition*.  
  **Ans.** unspecified output usable for larger groups
- **Q.** Define *Quine-McCluskey*.  
  **Ans.** tabular minimisation by combining minterms differing in one bit
- **Q.** Define *Prime Implicant Chart*.  
  **Ans.** table selecting implicants that cover all minterms
- **Q.** Define *Petrick's Method*.  
  **Ans.** algebraic way to choose minimal cover
- **Q.** Define *Static Hazard*.  
  **Ans.** output momentarily changes when it should stay constant
- **Q.** Define *Dynamic Hazard*.  
  **Ans.** output changes several times instead of once
- **Q.** Define *Hazard Cover*.  
  **Ans.** adding redundant terms to remove static hazards

### Long answer (7 marks)

- **Q.** Explain *Boolean Algebra Review* in detail with a neat diagram.  
  **Key points:** Boolean laws simplify digital expressions. Consensus Theorem — AB + A'C + BC = AB + A'C; De Morgan's Theorem — complement of a sum is the product of complements; Duality — interchanging AND/OR and 0/1 gives a valid identity.
- **Q.** Explain *K-Map Minimisation* in detail with a neat diagram.  
  **Key points:** K-maps group adjacent minterms. Karnaugh Map — Gray-ordered grid for grouping 1s; Essential Prime Implicant — prime implicant covering a minterm no other covers; Don't-care Condition — unspecified output usable for larger groups.
- **Q.** Explain *Quine-McCluskey Method* in detail with a neat diagram.  
  **Key points:** Tabulation suits many variables. Quine-McCluskey — tabular minimisation by combining minterms differing in one bit; Prime Implicant Chart — table selecting implicants that cover all minterms; Petrick's Method — algebraic way to choose minimal cover.
- **Q.** Explain *Hazards in Combinational Circuits* in detail with a neat diagram.  
  **Key points:** Hazards cause glitches during transitions. Static Hazard — output momentarily changes when it should stay constant; Dynamic Hazard — output changes several times instead of once; Hazard Cover — adding redundant terms to remove static hazards.

## Unit 2: Combinational Design

### Short answer (2-3 marks)

- **Q.** Define *Full Adder*.  
  **Ans.** Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B)
- **Q.** Define *Carry Look-ahead*.  
  **Ans.** generate and propagate terms compute carries quickly
- **Q.** Define *BCD Adder*.  
  **Ans.** adds BCD digits with correction when sum exceeds 9
- **Q.** Define *Multiplexer*.  
  **Ans.** selects one input with select lines
- **Q.** Define *Function Implementation with MUX*.  
  **Ans.** n-variable function on 2^(n−1):1 MUX
- **Q.** Define *Demultiplexer*.  
  **Ans.** routes one input to one of several outputs
- **Q.** Define *Decoder*.  
  **Ans.** activates one of 2^n outputs
- **Q.** Define *Priority Encoder*.  
  **Ans.** encodes the highest-priority active input
- **Q.** Define *7-Segment Decoder*.  
  **Ans.** drives display segments from a BCD input
- **Q.** Define *Magnitude Comparator*.  
  **Ans.** indicates greater, equal or less
- **Q.** Define *74181 ALU*.  
  **Ans.** classic 4-bit arithmetic logic unit IC
- **Q.** Define *Parity Checker*.  
  **Ans.** detects odd number of errors

### Long answer (7 marks)

- **Q.** Explain *Arithmetic Circuits* in detail with a neat diagram.  
  **Key points:** Adders and subtractors build ALUs. Full Adder — Sum = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B); Carry Look-ahead — generate and propagate terms compute carries quickly; BCD Adder — adds BCD digits with correction when sum exceeds 9.
- **Q.** Explain *MUX & DEMUX Design* in detail with a neat diagram.  
  **Key points:** Data selectors implement functions. Multiplexer — selects one input with select lines; Function Implementation with MUX — n-variable function on 2^(n−1):1 MUX; Demultiplexer — routes one input to one of several outputs.
- **Q.** Explain *Decoders & Encoders* in detail with a neat diagram.  
  **Key points:** Code conversion circuits support addressing. Decoder — activates one of 2^n outputs; Priority Encoder — encodes the highest-priority active input; 7-Segment Decoder — drives display segments from a BCD input.
- **Q.** Explain *Comparators & ALU Design* in detail with a neat diagram.  
  **Key points:** Comparators and ALUs perform decisions and operations. Magnitude Comparator — indicates greater, equal or less; 74181 ALU — classic 4-bit arithmetic logic unit IC; Parity Checker — detects odd number of errors.

## Unit 3: Sequential Circuits

### Short answer (2-3 marks)

- **Q.** Define *JK Flip-Flop*.  
  **Ans.** J = K = 1 toggles the state
- **Q.** Define *T Flip-Flop*.  
  **Ans.** toggles when T = 1
- **Q.** Define *Master-Slave Flip-Flop*.  
  **Ans.** avoids race-around using two latches
- **Q.** Define *Ripple Counter*.  
  **Ans.** asynchronous counter with cumulative delay
- **Q.** Define *Synchronous Counter*.  
  **Ans.** all flip-flops clocked together
- **Q.** Define *Johnson Counter*.  
  **Ans.** twisted ring counter with 2n states
- **Q.** Define *SISO*.  
  **Ans.** serial-in serial-out
- **Q.** Define *Universal Shift Register*.  
  **Ans.** shifts left, right and loads in parallel
- **Q.** Define *Serial-to-parallel Conversion*.  
  **Ans.** data shifted in serially and read in parallel
- **Q.** Define *Setup Time*.  
  **Ans.** input stable before clock edge
- **Q.** Define *Hold Time*.  
  **Ans.** input stable after clock edge
- **Q.** Define *Clock Skew*.  
  **Ans.** arrival time difference of the clock at different flip-flops

### Long answer (7 marks)

- **Q.** Explain *Flip-Flops* in detail with a neat diagram.  
  **Key points:** Bistable elements store state. JK Flip-Flop — J = K = 1 toggles the state; T Flip-Flop — toggles when T = 1; Master-Slave Flip-Flop — avoids race-around using two latches.
- **Q.** Explain *Counters* in detail with a neat diagram.  
  **Key points:** Counters cycle through states. Ripple Counter — asynchronous counter with cumulative delay; Synchronous Counter — all flip-flops clocked together; Johnson Counter — twisted ring counter with 2n states.
- **Q.** Explain *Shift Registers* in detail with a neat diagram.  
  **Key points:** Shift registers move data serially. SISO — serial-in serial-out; Universal Shift Register — shifts left, right and loads in parallel; Serial-to-parallel Conversion — data shifted in serially and read in parallel.
- **Q.** Explain *Timing & Clocking* in detail with a neat diagram.  
  **Key points:** Clocking constraints govern reliable operation. Setup Time — input stable before clock edge; Hold Time — input stable after clock edge; Clock Skew — arrival time difference of the clock at different flip-flops.

## Unit 4: Finite State Machines

### Short answer (2-3 marks)

- **Q.** Define *Moore Machine*.  
  **Ans.** outputs depend only on present state
- **Q.** Define *Mealy Machine*.  
  **Ans.** outputs depend on present state and inputs
- **Q.** Define *State Diagram*.  
  **Ans.** graph of states and transitions
- **Q.** Define *Equivalent States*.  
  **Ans.** states with same outputs and equivalent next states
- **Q.** Define *State Assignment*.  
  **Ans.** choosing binary codes for states
- **Q.** Define *One-hot Encoding*.  
  **Ans.** one flip-flop per state
- **Q.** Define *Sequence Detector*.  
  **Ans.** FSM outputting 1 when a pattern appears
- **Q.** Define *Overlapping Detection*.  
  **Ans.** allows a pattern to start within a previous match
- **Q.** Define *Excitation Equations*.  
  **Ans.** flip-flop input equations derived from tables
- **Q.** Define *Fundamental Mode*.  
  **Ans.** only one input changes at a time
- **Q.** Define *Critical Race*.  
  **Ans.** race whose outcome depends on delays
- **Q.** Define *Flow Table*.  
  **Ans.** table of states for asynchronous circuits

### Long answer (7 marks)

- **Q.** Explain *Mealy & Moore Machines* in detail with a neat diagram.  
  **Key points:** FSMs model sequential behaviour. Moore Machine — outputs depend only on present state; Mealy Machine — outputs depend on present state and inputs; State Diagram — graph of states and transitions.
- **Q.** Explain *State Reduction & Assignment* in detail with a neat diagram.  
  **Key points:** Fewer states mean less hardware. Equivalent States — states with same outputs and equivalent next states; State Assignment — choosing binary codes for states; One-hot Encoding — one flip-flop per state.
- **Q.** Explain *Sequence Detector Design* in detail with a neat diagram.  
  **Key points:** FSMs recognise bit patterns. Sequence Detector — FSM outputting 1 when a pattern appears; Overlapping Detection — allows a pattern to start within a previous match; Excitation Equations — flip-flop input equations derived from tables.
- **Q.** Explain *Asynchronous Sequential Circuits* in detail with a neat diagram.  
  **Key points:** Circuits without clocks respond to input changes. Fundamental Mode — only one input changes at a time; Critical Race — race whose outcome depends on delays; Flow Table — table of states for asynchronous circuits.

## Unit 5: Memories, PLDs & HDL

### Short answer (2-3 marks)

- **Q.** Define *ROM*.  
  **Ans.** non-volatile read-only memory
- **Q.** Define *SRAM*.  
  **Ans.** static RAM using flip-flops
- **Q.** Define *DRAM*.  
  **Ans.** dynamic RAM needing periodic refresh
- **Q.** Define *PLA*.  
  **Ans.** programmable AND and OR arrays
- **Q.** Define *PAL*.  
  **Ans.** programmable AND array with fixed OR array
- **Q.** Define *FPGA*.  
  **Ans.** array of configurable logic blocks and interconnects
- **Q.** Define *TTL*.  
  **Ans.** bipolar logic family, 74 series
- **Q.** Define *CMOS*.  
  **Ans.** complementary MOS with very low static power
- **Q.** Define *Fan-out*.  
  **Ans.** number of loads an output can drive
- **Q.** Define *HDL*.  
  **Ans.** hardware description language such as Verilog or VHDL
- **Q.** Define *Behavioural Modelling*.  
  **Ans.** describing what a circuit does
- **Q.** Define *Synthesis*.  
  **Ans.** converting HDL into a gate-level netlist

### Long answer (7 marks)

- **Q.** Explain *Semiconductor Memories* in detail with a neat diagram.  
  **Key points:** Memories store binary data in arrays. ROM — non-volatile read-only memory; SRAM — static RAM using flip-flops; DRAM — dynamic RAM needing periodic refresh.
- **Q.** Explain *Programmable Logic Devices* in detail with a neat diagram.  
  **Key points:** PLDs implement custom logic. PLA — programmable AND and OR arrays; PAL — programmable AND array with fixed OR array; FPGA — array of configurable logic blocks and interconnects.
- **Q.** Explain *Logic Families* in detail with a neat diagram.  
  **Key points:** Technologies differ in speed and power. TTL — bipolar logic family, 74 series; CMOS — complementary MOS with very low static power; Fan-out — number of loads an output can drive.
- **Q.** Explain *Introduction to Verilog/VHDL* in detail with a neat diagram.  
  **Key points:** HDLs describe hardware for simulation and synthesis. HDL — hardware description language such as Verilog or VHDL; Behavioural Modelling — describing what a circuit does; Synthesis — converting HDL into a gate-level netlist.

