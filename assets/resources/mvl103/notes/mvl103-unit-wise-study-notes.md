# MVL-103 VLSI Technology & Fabrication — Unit-wise Study Notes

> Crystal growth, oxidation, lithography, etching, diffusion, implantation, deposition, metallisation and CMOS process integration.

## Unit 1: Wafer Preparation

### Crystal Growth

Wafers start as single crystals.

- **Czochralski Method:** pulling crystal from melt
- **Float Zone Method:** high-purity crystal growth
- **Wafer Orientation:** (100) or (111) planes

### Wafer Processing

Wafers are shaped and polished.

- **Slicing:** cutting ingot into wafers
- **CMP:** chemical mechanical polishing
- **Epitaxy:** growing crystalline layer on substrate

### Cleanroom Technology

Contamination control is critical.

- **Cleanroom Class:** particles per cubic foot
- **RCA Clean:** standard wafer cleaning
- **Yield:** fraction of working dies

### Defects

Defects reduce yield.

- **Point Defect:** vacancy or interstitial
- **Dislocation:** line defect in crystal
- **Gettering:** removing impurities from active region

## Unit 2: Oxidation & Lithography

### Thermal Oxidation

SiO2 grows on silicon.

- **Dry Oxidation:** slower, high-quality oxide
- **Wet Oxidation:** faster, thicker oxide
- **Deal-Grove Model:** linear-parabolic oxide growth

### Photolithography

Patterns are transferred optically.

- **Photoresist:** light-sensitive polymer
- **Resolution:** k1 λ/NA
- **Mask Alignment:** overlay of layers

### Advanced Lithography

New methods print smaller features.

- **EUV Lithography:** 13.5 nm wavelength
- **Immersion Lithography:** water increases NA
- **Multiple Patterning:** splits dense patterns

### High-k Dielectrics

Thin gate oxides leak.

- **High-k Dielectric:** e.g. HfO2 replacing SiO2
- **EOT:** equivalent oxide thickness
- **Metal Gate:** replaces polysilicon gate

## Unit 3: Etching & Doping

### Wet & Dry Etching

Material is removed selectively.

- **Wet Etching:** isotropic chemical etch
- **Plasma Etching:** dry etching with reactive ions
- **Anisotropy:** directional etching

### Diffusion

Dopants spread at high temperature.

- **Fick's Laws:** govern dopant diffusion
- **Predeposition:** constant surface concentration
- **Drive-in:** redistributes dopants

### Ion Implantation

Accelerated ions dope precisely.

- **Ion Implantation:** dopant ions shot into wafer
- **Projected Range:** mean penetration depth
- **Annealing:** repairs damage and activates dopants

### Rapid Thermal Processing

Short high-temperature steps.

- **RTA:** rapid thermal annealing
- **Thermal Budget:** time-temperature exposure
- **Spike Anneal:** very short anneal

## Unit 4: Deposition & Metallisation

### CVD

Films form from gas reactions.

- **LPCVD:** low-pressure chemical vapour deposition
- **PECVD:** plasma-enhanced CVD at low temperature
- **ALD:** atomic layer deposition for ultra-thin films

### PVD

Physical deposition methods.

- **Sputtering:** ejecting target atoms by ion bombardment
- **Evaporation:** heating source to vapour
- **Step Coverage:** film uniformity over steps

### Metallisation

Interconnects wire the chip.

- **Copper Damascene:** trench filling and CMP
- **Barrier Layer:** TaN prevents copper diffusion
- **Electromigration:** metal migration under high current

### Low-k Dielectrics

Reduce interconnect capacitance.

- **Low-k Dielectric:** lower permittivity insulator
- **Air Gap:** lowest possible k
- **RC Delay:** reduced by low-k and copper

## Unit 5: Process Integration & Packaging

### CMOS Process Flow

Steps combine into a process.

- **Twin-well Process:** separate n and p wells
- **STI:** shallow trench isolation
- **LDD:** lightly doped drain reduces hot carriers

### Process Monitoring

Measurements control quality.

- **Ellipsometry:** measures film thickness
- **Four-point Probe:** measures sheet resistance
- **SEM:** scanning electron microscopy inspection

### Packaging

Dies are packaged for use.

- **Wire Bonding:** connects die pads to package
- **Flip-chip:** bumps connect face-down die
- **3D IC:** stacked dies with TSVs

### Yield & Reliability

Chips must work and last.

- **Yield Model:** Y = e^(−DA) Poisson model
- **Burn-in:** stress testing to remove early failures
- **TDDB:** time-dependent dielectric breakdown

## Standard Textbooks

- *VLSI Technology* — S. M. Sze
- *Silicon VLSI Technology* — Plummer, Deal & Griffin
- *Fundamentals of Microfabrication* — Marc Madou

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
