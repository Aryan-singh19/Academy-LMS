# MVL-201 Low Power VLSI Design — Question Bank with Answer Hints

## Unit 1: Power Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Switching Power*.  
  **Ans.** α C V² f
- **Q.** Define *Short-circuit Power*.  
  **Ans.** during input transitions
- **Q.** Define *Leakage Power*.  
  **Ans.** subthreshold, gate and junction leakage
- **Q.** Define *Battery Life*.  
  **Ans.** depends on average power
- **Q.** Define *Thermal Design Power*.  
  **Ans.** maximum sustained heat
- **Q.** Define *Energy per Operation*.  
  **Ans.** key metric for efficiency
- **Q.** Define *Subthreshold Leakage*.  
  **Ans.** exponential with VT
- **Q.** Define *Gate Tunnelling*.  
  **Ans.** current through thin oxide
- **Q.** Define *GIDL*.  
  **Ans.** gate-induced drain leakage
- **Q.** Define *Switching Activity*.  
  **Ans.** fraction of cycles a node toggles
- **Q.** Define *Probabilistic Estimation*.  
  **Ans.** statistical activity propagation
- **Q.** Define *Gate-level Power Simulation*.  
  **Ans.** activity from simulation

### Long answer (7 marks)

- **Q.** Explain *Sources of Power Dissipation* in detail with a neat diagram.  
  **Key points:** Power has several components. Switching Power — α C V² f; Short-circuit Power — during input transitions; Leakage Power — subthreshold, gate and junction leakage.
- **Q.** Explain *Need for Low Power* in detail with a neat diagram.  
  **Key points:** Battery and thermal limits. Battery Life — depends on average power; Thermal Design Power — maximum sustained heat; Energy per Operation — key metric for efficiency.
- **Q.** Explain *Leakage Mechanisms* in detail with a neat diagram.  
  **Key points:** Leakage grows with scaling. Subthreshold Leakage — exponential with VT; Gate Tunnelling — current through thin oxide; GIDL — gate-induced drain leakage.
- **Q.** Explain *Power Estimation* in detail with a neat diagram.  
  **Key points:** Estimating power early. Switching Activity — fraction of cycles a node toggles; Probabilistic Estimation — statistical activity propagation; Gate-level Power Simulation — activity from simulation.

## Unit 2: Circuit-level Techniques

### Short answer (2-3 marks)

- **Q.** Define *Dynamic Voltage Scaling*.  
  **Ans.** lower VDD for lower speed
- **Q.** Define *Near-threshold Computing*.  
  **Ans.** operate near VT
- **Q.** Define *Energy-Delay Product*.  
  **Ans.** metric balancing speed and energy
- **Q.** Define *MTCMOS*.  
  **Ans.** high-VT sleep transistors
- **Q.** Define *Dual-VT Assignment*.  
  **Ans.** low VT on critical paths
- **Q.** Define *Leakage Reduction*.  
  **Ans.** high VT off critical paths
- **Q.** Define *Reverse Body Bias*.  
  **Ans.** raises VT to cut leakage
- **Q.** Define *Forward Body Bias*.  
  **Ans.** lowers VT for speed
- **Q.** Define *Adaptive Body Bias*.  
  **Ans.** compensates variation
- **Q.** Define *Adiabatic Logic*.  
  **Ans.** recovers charge
- **Q.** Define *Stack Forcing*.  
  **Ans.** series transistors cut leakage
- **Q.** Define *Glitch Reduction*.  
  **Ans.** balanced paths reduce spurious toggles

### Long answer (7 marks)

- **Q.** Explain *Voltage Scaling* in detail with a neat diagram.  
  **Key points:** Supply voltage strongly affects power. Dynamic Voltage Scaling — lower VDD for lower speed; Near-threshold Computing — operate near VT; Energy-Delay Product — metric balancing speed and energy.
- **Q.** Explain *Multi-threshold CMOS* in detail with a neat diagram.  
  **Key points:** Mix of high and low VT. MTCMOS — high-VT sleep transistors; Dual-VT Assignment — low VT on critical paths; Leakage Reduction — high VT off critical paths.
- **Q.** Explain *Body Biasing* in detail with a neat diagram.  
  **Key points:** Body voltage tunes VT. Reverse Body Bias — raises VT to cut leakage; Forward Body Bias — lowers VT for speed; Adaptive Body Bias — compensates variation.
- **Q.** Explain *Low-power Logic Styles* in detail with a neat diagram.  
  **Key points:** Logic families for low power. Adiabatic Logic — recovers charge; Stack Forcing — series transistors cut leakage; Glitch Reduction — balanced paths reduce spurious toggles.

## Unit 3: Architecture & System Techniques

### Short answer (2-3 marks)

- **Q.** Define *Clock Gating*.  
  **Ans.** stops clock to idle registers
- **Q.** Define *Integrated Clock Gate*.  
  **Ans.** latch-based gating cell
- **Q.** Define *Fine-grained Gating*.  
  **Ans.** per-register enables
- **Q.** Define *Power Gating*.  
  **Ans.** cutting supply to blocks
- **Q.** Define *Retention Register*.  
  **Ans.** saves state during power-down
- **Q.** Define *Isolation Cell*.  
  **Ans.** clamps outputs of off blocks
- **Q.** Define *Voltage Island*.  
  **Ans.** block with own supply
- **Q.** Define *Level Shifter*.  
  **Ans.** converts signals between domains
- **Q.** Define *UPF*.  
  **Ans.** unified power format specification
- **Q.** Define *DVFS*.  
  **Ans.** dynamic voltage and frequency scaling
- **Q.** Define *Performance State*.  
  **Ans.** voltage-frequency pair
- **Q.** Define *Governor*.  
  **Ans.** OS policy selecting states

### Long answer (7 marks)

- **Q.** Explain *Clock Gating* in detail with a neat diagram.  
  **Key points:** Disabling unused clocks. Clock Gating — stops clock to idle registers; Integrated Clock Gate — latch-based gating cell; Fine-grained Gating — per-register enables.
- **Q.** Explain *Power Gating* in detail with a neat diagram.  
  **Key points:** Switching off idle blocks. Power Gating — cutting supply to blocks; Retention Register — saves state during power-down; Isolation Cell — clamps outputs of off blocks.
- **Q.** Explain *Multi-voltage Design* in detail with a neat diagram.  
  **Key points:** Different domains at different voltages. Voltage Island — block with own supply; Level Shifter — converts signals between domains; UPF — unified power format specification.
- **Q.** Explain *DVFS* in detail with a neat diagram.  
  **Key points:** Adapting voltage and frequency at runtime. DVFS — dynamic voltage and frequency scaling; Performance State — voltage-frequency pair; Governor — OS policy selecting states.

## Unit 4: Low-power Memory & Arithmetic

### Short answer (2-3 marks)

- **Q.** Define *Bitline Power*.  
  **Ans.** from charging long bitlines
- **Q.** Define *Sleep Mode SRAM*.  
  **Ans.** reduced retention voltage
- **Q.** Define *Read Assist*.  
  **Ans.** improves stability at low voltage
- **Q.** Define *Way Prediction*.  
  **Ans.** accesses only predicted way
- **Q.** Define *Drowsy Cache*.  
  **Ans.** low voltage for inactive lines
- **Q.** Define *Filter Cache*.  
  **Ans.** small cache before L1
- **Q.** Define *Operand Isolation*.  
  **Ans.** blocks inputs of unused units
- **Q.** Define *Approximate Computing*.  
  **Ans.** trades accuracy for energy
- **Q.** Define *Bit-width Optimisation*.  
  **Ans.** fewer bits reduce switching
- **Q.** Define *Bus-invert Coding*.  
  **Ans.** inverts data to cut toggles
- **Q.** Define *Gray Code Addressing*.  
  **Ans.** one bit change per step
- **Q.** Define *Low-swing Signalling*.  
  **Ans.** smaller voltage swing on buses

### Long answer (7 marks)

- **Q.** Explain *SRAM Power* in detail with a neat diagram.  
  **Key points:** Memories dominate power. Bitline Power — from charging long bitlines; Sleep Mode SRAM — reduced retention voltage; Read Assist — improves stability at low voltage.
- **Q.** Explain *Low-power Caches* in detail with a neat diagram.  
  **Key points:** Cache architecture reduces energy. Way Prediction — accesses only predicted way; Drowsy Cache — low voltage for inactive lines; Filter Cache — small cache before L1.
- **Q.** Explain *Low-power Arithmetic* in detail with a neat diagram.  
  **Key points:** Efficient arithmetic units. Operand Isolation — blocks inputs of unused units; Approximate Computing — trades accuracy for energy; Bit-width Optimisation — fewer bits reduce switching.
- **Q.** Explain *Bus Encoding* in detail with a neat diagram.  
  **Key points:** Reducing bus transitions. Bus-invert Coding — inverts data to cut toggles; Gray Code Addressing — one bit change per step; Low-swing Signalling — smaller voltage swing on buses.

## Unit 5: Power Analysis & Management

### Short answer (2-3 marks)

- **Q.** Define *RTL Power Analysis*.  
  **Ans.** early estimation
- **Q.** Define *Power Intent*.  
  **Ans.** UPF describing domains
- **Q.** Define *Sign-off Power*.  
  **Ans.** final verified power numbers
- **Q.** Define *IR Drop*.  
  **Ans.** voltage drop on supply network
- **Q.** Define *Decap*.  
  **Ans.** decoupling capacitance
- **Q.** Define *EM Analysis*.  
  **Ans.** checks current density limits
- **Q.** Define *Hotspot*.  
  **Ans.** local high temperature
- **Q.** Define *Thermal Throttling*.  
  **Ans.** reduces frequency when hot
- **Q.** Define *Dark Silicon*.  
  **Ans.** unpowered regions due to power limits
- **Q.** Define *Energy Harvesting*.  
  **Ans.** power from ambient sources
- **Q.** Define *Subthreshold Design*.  
  **Ans.** operation below VT
- **Q.** Define *Wake-up Radio*.  
  **Ans.** low-power receiver for duty cycling

### Long answer (7 marks)

- **Q.** Explain *Power-aware Design Flow* in detail with a neat diagram.  
  **Key points:** Power considered at every step. RTL Power Analysis — early estimation; Power Intent — UPF describing domains; Sign-off Power — final verified power numbers.
- **Q.** Explain *IR Drop & Electromigration* in detail with a neat diagram.  
  **Key points:** Power grid integrity. IR Drop — voltage drop on supply network; Decap — decoupling capacitance; EM Analysis — checks current density limits.
- **Q.** Explain *Thermal Management* in detail with a neat diagram.  
  **Key points:** Heat must be controlled. Hotspot — local high temperature; Thermal Throttling — reduces frequency when hot; Dark Silicon — unpowered regions due to power limits.
- **Q.** Explain *Energy Harvesting & IoT Chips* in detail with a neat diagram.  
  **Key points:** Ultra-low-power systems. Energy Harvesting — power from ambient sources; Subthreshold Design — operation below VT; Wake-up Radio — low-power receiver for duty cycling.

