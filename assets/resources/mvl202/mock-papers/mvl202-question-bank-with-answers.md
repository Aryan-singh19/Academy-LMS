# MVL-202 VLSI Testing & Testability — Question Bank with Answer Hints

## Unit 1: Testing Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Testing*.  
  **Ans.** detecting manufacturing defects
- **Q.** Define *Verification vs Testing*.  
  **Ans.** design correctness versus physical defects
- **Q.** Define *Test Cost*.  
  **Ans.** significant share of chip cost
- **Q.** Define *Stuck-at Fault*.  
  **Ans.** node fixed at 0 or 1
- **Q.** Define *Bridging Fault*.  
  **Ans.** short between nets
- **Q.** Define *Transition Fault*.  
  **Ans.** slow-to-rise or slow-to-fall
- **Q.** Define *Fault Equivalence*.  
  **Ans.** faults with identical tests
- **Q.** Define *Fault Dominance*.  
  **Ans.** test for one detects another
- **Q.** Define *Fault Collapsing*.  
  **Ans.** removes redundant faults
- **Q.** Define *Defect Level*.  
  **Ans.** fraction of bad chips shipped
- **Q.** Define *Fault Coverage*.  
  **Ans.** detected faults / total faults
- **Q.** Define *DPPM*.  
  **Ans.** defective parts per million

### Long answer (7 marks)

- **Q.** Explain *Need for Testing* in detail with a neat diagram.  
  **Key points:** Manufacturing defects must be screened. Testing — detecting manufacturing defects; Verification vs Testing — design correctness versus physical defects; Test Cost — significant share of chip cost.
- **Q.** Explain *Defects & Fault Models* in detail with a neat diagram.  
  **Key points:** Faults abstract physical defects. Stuck-at Fault — node fixed at 0 or 1; Bridging Fault — short between nets; Transition Fault — slow-to-rise or slow-to-fall.
- **Q.** Explain *Fault Equivalence & Collapsing* in detail with a neat diagram.  
  **Key points:** Reduce fault list. Fault Equivalence — faults with identical tests; Fault Dominance — test for one detects another; Fault Collapsing — removes redundant faults.
- **Q.** Explain *Yield & Quality* in detail with a neat diagram.  
  **Key points:** Test quality affects shipped quality. Defect Level — fraction of bad chips shipped; Fault Coverage — detected faults / total faults; DPPM — defective parts per million.

## Unit 2: Test Generation

### Short answer (2-3 marks)

- **Q.** Define *D-algorithm*.  
  **Ans.** uses D and D-bar notation
- **Q.** Define *PODEM*.  
  **Ans.** path-oriented decision making
- **Q.** Define *FAN*.  
  **Ans.** fanout-oriented test generation
- **Q.** Define *Fault Activation*.  
  **Ans.** set node opposite to stuck value
- **Q.** Define *Fault Propagation*.  
  **Ans.** sensitise path to output
- **Q.** Define *Justification*.  
  **Ans.** set inputs to achieve values
- **Q.** Define *Time-frame Expansion*.  
  **Ans.** unrolls circuit over cycles
- **Q.** Define *Initialisation*.  
  **Ans.** bringing circuit to known state
- **Q.** Define *Scan Converts*.  
  **Ans.** sequential to combinational test problem
- **Q.** Define *Path Delay Fault*.  
  **Ans.** path slower than specified
- **Q.** Define *Launch-on-capture*.  
  **Ans.** at-speed test method
- **Q.** Define *Small Delay Defects*.  
  **Ans.** subtle timing defects

### Long answer (7 marks)

- **Q.** Explain *Combinational ATPG* in detail with a neat diagram.  
  **Key points:** Algorithms generate tests. D-algorithm — uses D and D-bar notation; PODEM — path-oriented decision making; FAN — fanout-oriented test generation.
- **Q.** Explain *Fault Activation & Propagation* in detail with a neat diagram.  
  **Key points:** Tests excite and observe faults. Fault Activation — set node opposite to stuck value; Fault Propagation — sensitise path to output; Justification — set inputs to achieve values.
- **Q.** Explain *Sequential ATPG* in detail with a neat diagram.  
  **Key points:** Sequential circuits are harder. Time-frame Expansion — unrolls circuit over cycles; Initialisation — bringing circuit to known state; Scan Converts — sequential to combinational test problem.
- **Q.** Explain *Delay Testing* in detail with a neat diagram.  
  **Key points:** Timing defects need two-pattern tests. Path Delay Fault — path slower than specified; Launch-on-capture — at-speed test method; Small Delay Defects — subtle timing defects.

## Unit 3: Fault Simulation

### Short answer (2-3 marks)

- **Q.** Define *Fault Simulation*.  
  **Ans.** determines faults detected by tests
- **Q.** Define *Serial Fault Simulation*.  
  **Ans.** one fault at a time
- **Q.** Define *Fault Dropping*.  
  **Ans.** remove detected faults
- **Q.** Define *Parallel Fault Simulation*.  
  **Ans.** bits represent faulty machines
- **Q.** Define *Deductive Fault Simulation*.  
  **Ans.** propagates fault lists
- **Q.** Define *Concurrent Fault Simulation*.  
  **Ans.** simulates differences only
- **Q.** Define *Static Compaction*.  
  **Ans.** merges compatible patterns
- **Q.** Define *Dynamic Compaction*.  
  **Ans.** during generation
- **Q.** Define *Test Data Volume*.  
  **Ans.** storage required for patterns
- **Q.** Define *Fault Diagnosis*.  
  **Ans.** identifies likely fault locations
- **Q.** Define *Failure Analysis*.  
  **Ans.** physical inspection of defect
- **Q.** Define *Volume Diagnosis*.  
  **Ans.** statistics across many chips

### Long answer (7 marks)

- **Q.** Explain *Fault Simulation Purpose* in detail with a neat diagram.  
  **Key points:** Measures test effectiveness. Fault Simulation — determines faults detected by tests; Serial Fault Simulation — one fault at a time; Fault Dropping — remove detected faults.
- **Q.** Explain *Parallel & Deductive Simulation* in detail with a neat diagram.  
  **Key points:** Faster simulation techniques. Parallel Fault Simulation — bits represent faulty machines; Deductive Fault Simulation — propagates fault lists; Concurrent Fault Simulation — simulates differences only.
- **Q.** Explain *Test Compaction* in detail with a neat diagram.  
  **Key points:** Fewer patterns save time. Static Compaction — merges compatible patterns; Dynamic Compaction — during generation; Test Data Volume — storage required for patterns.
- **Q.** Explain *Diagnosis* in detail with a neat diagram.  
  **Key points:** Locating defects in failing chips. Fault Diagnosis — identifies likely fault locations; Failure Analysis — physical inspection of defect; Volume Diagnosis — statistics across many chips.

## Unit 4: Design for Testability

### Short answer (2-3 marks)

- **Q.** Define *SCOAP*.  
  **Ans.** testability measures
- **Q.** Define *Controllability*.  
  **Ans.** ease of setting a node
- **Q.** Define *Observability*.  
  **Ans.** ease of observing a node
- **Q.** Define *Scan Flip-flop*.  
  **Ans.** mux selects functional or scan input
- **Q.** Define *Scan Chain*.  
  **Ans.** flip-flops linked as shift register
- **Q.** Define *Scan Overhead*.  
  **Ans.** area and timing cost
- **Q.** Define *IEEE 1149.1*.  
  **Ans.** JTAG boundary scan standard
- **Q.** Define *TAP Controller*.  
  **Ans.** 16-state test access port FSM
- **Q.** Define *Boundary Scan Cell*.  
  **Ans.** cell at each I/O pin
- **Q.** Define *Test Compression*.  
  **Ans.** decompressor feeds many scan chains
- **Q.** Define *EDT*.  
  **Ans.** embedded deterministic test
- **Q.** Define *X-masking*.  
  **Ans.** handles unknown values

### Long answer (7 marks)

- **Q.** Explain *Testability Measures* in detail with a neat diagram.  
  **Key points:** Controllability and observability. SCOAP — testability measures; Controllability — ease of setting a node; Observability — ease of observing a node.
- **Q.** Explain *Scan Design* in detail with a neat diagram.  
  **Key points:** Scan chains make flip-flops accessible. Scan Flip-flop — mux selects functional or scan input; Scan Chain — flip-flops linked as shift register; Scan Overhead — area and timing cost.
- **Q.** Explain *Boundary Scan* in detail with a neat diagram.  
  **Key points:** Testing boards and I/O. IEEE 1149.1 — JTAG boundary scan standard; TAP Controller — 16-state test access port FSM; Boundary Scan Cell — cell at each I/O pin.
- **Q.** Explain *Test Compression* in detail with a neat diagram.  
  **Key points:** Reducing test data. Test Compression — decompressor feeds many scan chains; EDT — embedded deterministic test; X-masking — handles unknown values.

## Unit 5: BIST & Memory Testing

### Short answer (2-3 marks)

- **Q.** Define *BIST*.  
  **Ans.** circuit tests itself
- **Q.** Define *LFSR*.  
  **Ans.** pseudo-random pattern generator
- **Q.** Define *MISR*.  
  **Ans.** multiple input signature register compactor
- **Q.** Define *Pseudo-random Testing*.  
  **Ans.** LFSR patterns
- **Q.** Define *Test Points*.  
  **Ans.** improve random-pattern testability
- **Q.** Define *Aliasing*.  
  **Ans.** faulty signature equals good signature
- **Q.** Define *Coupling Fault*.  
  **Ans.** one cell affects another
- **Q.** Define *Address Decoder Fault*.  
  **Ans.** wrong cell accessed
- **Q.** Define *Retention Fault*.  
  **Ans.** cell loses data over time
- **Q.** Define *March Test*.  
  **Ans.** sequence of read/write operations, e.g. March C−
- **Q.** Define *MBIST*.  
  **Ans.** memory built-in self-test
- **Q.** Define *Redundancy Repair*.  
  **Ans.** spare rows and columns

### Long answer (7 marks)

- **Q.** Explain *Built-in Self-Test* in detail with a neat diagram.  
  **Key points:** On-chip test generation and checking. BIST — circuit tests itself; LFSR — pseudo-random pattern generator; MISR — multiple input signature register compactor.
- **Q.** Explain *Logic BIST* in detail with a neat diagram.  
  **Key points:** Random patterns test logic. Pseudo-random Testing — LFSR patterns; Test Points — improve random-pattern testability; Aliasing — faulty signature equals good signature.
- **Q.** Explain *Memory Fault Models* in detail with a neat diagram.  
  **Key points:** Memories have specific faults. Coupling Fault — one cell affects another; Address Decoder Fault — wrong cell accessed; Retention Fault — cell loses data over time.
- **Q.** Explain *Memory BIST & Repair* in detail with a neat diagram.  
  **Key points:** Testing and repairing memories. March Test — sequence of read/write operations, e.g. March C−; MBIST — memory built-in self-test; Redundancy Repair — spare rows and columns.

