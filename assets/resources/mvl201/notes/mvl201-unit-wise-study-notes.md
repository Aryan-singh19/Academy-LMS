# MVL-201 Low Power VLSI Design — Unit-wise Study Notes

> Sources of power, device and circuit techniques, architecture-level methods, power management and low-power memories.

## Unit 1: Power Fundamentals

### Sources of Power Dissipation

Power has several components.

- **Switching Power:** α C V² f
- **Short-circuit Power:** during input transitions
- **Leakage Power:** subthreshold, gate and junction leakage

### Need for Low Power

Battery and thermal limits.

- **Battery Life:** depends on average power
- **Thermal Design Power:** maximum sustained heat
- **Energy per Operation:** key metric for efficiency

### Leakage Mechanisms

Leakage grows with scaling.

- **Subthreshold Leakage:** exponential with VT
- **Gate Tunnelling:** current through thin oxide
- **GIDL:** gate-induced drain leakage

### Power Estimation

Estimating power early.

- **Switching Activity:** fraction of cycles a node toggles
- **Probabilistic Estimation:** statistical activity propagation
- **Gate-level Power Simulation:** activity from simulation

## Unit 2: Circuit-level Techniques

### Voltage Scaling

Supply voltage strongly affects power.

- **Dynamic Voltage Scaling:** lower VDD for lower speed
- **Near-threshold Computing:** operate near VT
- **Energy-Delay Product:** metric balancing speed and energy

### Multi-threshold CMOS

Mix of high and low VT.

- **MTCMOS:** high-VT sleep transistors
- **Dual-VT Assignment:** low VT on critical paths
- **Leakage Reduction:** high VT off critical paths

### Body Biasing

Body voltage tunes VT.

- **Reverse Body Bias:** raises VT to cut leakage
- **Forward Body Bias:** lowers VT for speed
- **Adaptive Body Bias:** compensates variation

### Low-power Logic Styles

Logic families for low power.

- **Adiabatic Logic:** recovers charge
- **Stack Forcing:** series transistors cut leakage
- **Glitch Reduction:** balanced paths reduce spurious toggles

## Unit 3: Architecture & System Techniques

### Clock Gating

Disabling unused clocks.

- **Clock Gating:** stops clock to idle registers
- **Integrated Clock Gate:** latch-based gating cell
- **Fine-grained Gating:** per-register enables

### Power Gating

Switching off idle blocks.

- **Power Gating:** cutting supply to blocks
- **Retention Register:** saves state during power-down
- **Isolation Cell:** clamps outputs of off blocks

### Multi-voltage Design

Different domains at different voltages.

- **Voltage Island:** block with own supply
- **Level Shifter:** converts signals between domains
- **UPF:** unified power format specification

### DVFS

Adapting voltage and frequency at runtime.

- **DVFS:** dynamic voltage and frequency scaling
- **Performance State:** voltage-frequency pair
- **Governor:** OS policy selecting states

## Unit 4: Low-power Memory & Arithmetic

### SRAM Power

Memories dominate power.

- **Bitline Power:** from charging long bitlines
- **Sleep Mode SRAM:** reduced retention voltage
- **Read Assist:** improves stability at low voltage

### Low-power Caches

Cache architecture reduces energy.

- **Way Prediction:** accesses only predicted way
- **Drowsy Cache:** low voltage for inactive lines
- **Filter Cache:** small cache before L1

### Low-power Arithmetic

Efficient arithmetic units.

- **Operand Isolation:** blocks inputs of unused units
- **Approximate Computing:** trades accuracy for energy
- **Bit-width Optimisation:** fewer bits reduce switching

### Bus Encoding

Reducing bus transitions.

- **Bus-invert Coding:** inverts data to cut toggles
- **Gray Code Addressing:** one bit change per step
- **Low-swing Signalling:** smaller voltage swing on buses

## Unit 5: Power Analysis & Management

### Power-aware Design Flow

Power considered at every step.

- **RTL Power Analysis:** early estimation
- **Power Intent:** UPF describing domains
- **Sign-off Power:** final verified power numbers

### IR Drop & Electromigration

Power grid integrity.

- **IR Drop:** voltage drop on supply network
- **Decap:** decoupling capacitance
- **EM Analysis:** checks current density limits

### Thermal Management

Heat must be controlled.

- **Hotspot:** local high temperature
- **Thermal Throttling:** reduces frequency when hot
- **Dark Silicon:** unpowered regions due to power limits

### Energy Harvesting & IoT Chips

Ultra-low-power systems.

- **Energy Harvesting:** power from ambient sources
- **Subthreshold Design:** operation below VT
- **Wake-up Radio:** low-power receiver for duty cycling

## Standard Textbooks

- *Low-Power CMOS VLSI Circuit Design* — Kaushik Roy & Sharat Prasad
- *Low Power Methodology Manual* — Keating et al.
- *Practical Low Power Digital VLSI Design* — Gary Yeap

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
