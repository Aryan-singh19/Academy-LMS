# ME-302 Thermodynamics — Unit-wise Study Notes

> Basic concepts, first and second laws, entropy, properties of steam, gas cycles and availability.

## Unit 1: Basic Concepts & Zeroth Law

### System, Surroundings & Properties

Thermodynamics studies energy interactions of systems.

- **Closed System:** mass fixed, energy may cross the boundary
- **Open System:** both mass and energy cross the boundary (control volume)
- **Intensive Property:** independent of mass, e.g. pressure and temperature

### State, Process & Cycle

Processes change the state of a system.

- **Quasi-static Process:** infinitely slow process passing through equilibrium states
- **Thermodynamic Cycle:** series of processes returning to the initial state
- **Point Function:** property depending only on state, not path

### Zeroth Law & Temperature

Thermal equilibrium defines temperature.

- **Zeroth Law:** two bodies in equilibrium with a third are in equilibrium with each other
- **Thermometric Property:** property that varies with temperature
- **Absolute Temperature:** Kelvin scale, T(K) = T(°C) + 273.15

### Work & Heat

Work and heat are energy in transit.

- **Displacement Work:** W = ∫ p dV
- **Path Function:** quantity depending on the path, e.g. work and heat
- **Sign Convention:** heat added and work done by system are positive

## Unit 2: First Law of Thermodynamics

### First Law for Closed Systems

Energy is conserved in every process.

- **First Law for a Cycle:** net heat equals net work
- **Internal Energy:** energy stored in molecular motion; a property
- **First Law for a Process:** Q − W = ΔU

### Steady Flow Energy Equation

Open systems use the SFEE.

- **SFEE:** h1 + V1²/2 + gz1 + q = h2 + V2²/2 + gz2 + w
- **Enthalpy:** h = u + pv
- **Steady Flow:** properties at each point do not change with time

### Applications of SFEE

Devices are analysed with SFEE.

- **Nozzle:** increases fluid velocity at the expense of enthalpy
- **Turbine:** produces work as fluid expands
- **Throttling:** isenthalpic process, h1 = h2

### PMM1 & Ideal Gas Processes

First law forbids free energy.

- **PMM1:** perpetual motion machine of first kind, impossible
- **Isothermal Work:** W = p1V1 ln(V2/V1)
- **Polytropic Process:** pV^n = constant

## Unit 3: Second Law & Entropy

### Heat Engines & Heat Pumps

Second law limits conversion of heat into work.

- **Thermal Efficiency:** η = W/Q1
- **COP of Refrigerator:** Q2/W
- **COP Relation:** COP(HP) = COP(R) + 1

### Kelvin-Planck & Clausius Statements

Two equivalent statements of the second law.

- **Kelvin-Planck Statement:** no engine can convert all heat from a single reservoir into work
- **Clausius Statement:** heat cannot flow from cold to hot without external work
- **PMM2:** perpetual motion machine of second kind, impossible

### Carnot Cycle

Carnot cycle is the most efficient between two temperatures.

- **Carnot Efficiency:** η = 1 − T2/T1
- **Carnot Theorem:** no engine is more efficient than a reversible engine
- **Reversible Process:** can be reversed leaving no trace on surroundings

### Entropy

Entropy measures irreversibility.

- **Clausius Inequality:** cyclic integral of dQ/T ≤ 0
- **Entropy Change:** dS = dQrev/T
- **Principle of Increase of Entropy:** entropy of an isolated system never decreases

## Unit 4: Properties of Pure Substances

### Phase Change of Water

Pure substances change phase at fixed conditions.

- **Saturation Temperature:** boiling temperature at a given pressure
- **Critical Point:** state where liquid and vapour become indistinguishable, 22.06 MPa for water
- **Triple Point:** state where solid, liquid and vapour coexist

### Dryness Fraction & Steam Tables

Wet steam properties use dryness fraction.

- **Dryness Fraction:** x = mass of vapour / total mass
- **Wet Steam Enthalpy:** h = hf + x·hfg
- **Superheated Steam:** steam above saturation temperature

### T-s & h-s Diagrams

Property charts aid analysis.

- **Mollier Diagram:** h-s chart for steam
- **T-s Diagram:** area under curve represents heat transfer
- **Isentropic Process:** vertical line on T-s and h-s diagrams

### Measurement of Dryness Fraction

Calorimeters measure steam quality.

- **Throttling Calorimeter:** throttles steam to superheat to find x
- **Separating Calorimeter:** separates water droplets mechanically
- **Combined Calorimeter:** separating plus throttling for wet steam

## Unit 5: Gas Power Cycles & Availability

### Air Standard Cycles

Engine cycles are idealised with air.

- **Otto Cycle Efficiency:** η = 1 − 1/r^(γ−1)
- **Diesel Cycle:** heat added at constant pressure
- **Dual Cycle:** heat added partly at constant volume and partly at constant pressure

### Brayton Cycle

Gas turbines follow the Brayton cycle.

- **Brayton Cycle:** two isentropic and two isobaric processes
- **Brayton Efficiency:** η = 1 − 1/rp^((γ−1)/γ)
- **Regeneration:** exhaust heats compressed air to improve efficiency

### Mean Effective Pressure

MEP compares engine work output.

- **Mean Effective Pressure:** net work divided by swept volume
- **Swept Volume:** displacement volume of the piston
- **Compression Ratio:** total volume / clearance volume

### Availability & Irreversibility

Exergy is the useful part of energy.

- **Availability:** maximum useful work obtainable relative to the dead state
- **Irreversibility:** I = T0 × entropy generated
- **Dead State:** system in equilibrium with environment

## Standard Textbooks

- *Engineering Thermodynamics* — P. K. Nag
- *Thermodynamics: An Engineering Approach* — Cengel & Boles
- *Fundamentals of Classical Thermodynamics* — Van Wylen & Sonntag

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
