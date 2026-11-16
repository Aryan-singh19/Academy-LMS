# CE-601 Structural Design & Drawing (RCC-I) — Unit-wise Study Notes

> Limit state design of RCC beams, slabs, columns, footings and staircases as per IS 456.

## Unit 1: Design Philosophies

### Working Stress vs Limit State

Design methods ensure safety and serviceability.

- **Working Stress Method:** elastic stresses within permissible limits
- **Limit State Method:** safety against collapse and serviceability
- **IS 456:2000:** Indian code for plain and reinforced concrete

### Limit States

Structures must avoid failure states.

- **Limit State of Collapse:** flexure, shear, torsion, compression
- **Limit State of Serviceability:** deflection and cracking
- **Partial Safety Factor:** 1.5 for loads, 1.5 for concrete, 1.15 for steel

### Characteristic Values

Design uses characteristic strengths.

- **Characteristic Strength:** 95% exceedance value
- **Design Strength:** characteristic strength / partial safety factor
- **Characteristic Load:** 95% non-exceedance load

### Stress-Strain Behaviour

Material models define design.

- **Concrete Stress Block:** parabolic-rectangular, max 0.446 fck
- **Ultimate Concrete Strain:** 0.0035 in flexure
- **Steel Design Stress:** 0.87 fy

## Unit 2: Design of Beams

### Singly Reinforced Beams

Tension steel resists bending.

- **Limiting Depth of Neutral Axis:** xu,max = 0.48d for Fe 415
- **Moment of Resistance:** Mu = 0.36 fck b xu (d − 0.42 xu)
- **Under-reinforced Section:** steel yields before concrete crushes

### Doubly Reinforced Beams

Compression steel adds capacity.

- **Doubly Reinforced Beam:** steel in tension and compression
- **Additional Moment:** Mu − Mu,lim taken by compression steel
- **Compression Steel Stress:** from strain compatibility

### Flanged Beams

T and L beams use slab as flange.

- **Effective Flange Width:** lo/6 + bw + 6Df for T-beam
- **Neutral Axis in Flange:** rectangular beam behaviour
- **T-beam:** monolithic beam and slab

### Shear & Bond

Shear reinforcement prevents diagonal tension failure.

- **Nominal Shear Stress:** τv = Vu/(bd)
- **Stirrups:** vertical shear reinforcement
- **Development Length:** Ld = φσs/(4τbd)

## Unit 3: Design of Slabs

### One-way Slabs

Slabs spanning in one direction.

- **One-way Slab:** ly/lx > 2
- **Minimum Reinforcement:** 0.12% for HYSD bars
- **Distribution Steel:** perpendicular to main steel

### Two-way Slabs

Slabs spanning both directions.

- **Two-way Slab:** ly/lx ≤ 2
- **Moment Coefficients:** IS 456 Table 26
- **Corner Reinforcement:** torsion steel at restrained corners

### Continuous Slabs

Slabs over multiple supports.

- **Moment Coefficients:** for continuous slabs
- **Negative Moment Steel:** at supports
- **Cantilever Slab:** balcony and chajja design

### Deflection Control

Span-to-depth ratios limit deflection.

- **Basic Span/Depth Ratio:** 20 for simply supported
- **Modification Factor:** depends on steel stress
- **Cracking:** limited by bar spacing

## Unit 4: Columns & Footings

### Short Columns

Short columns fail by crushing.

- **Short Column:** effective length / lateral dimension < 12
- **Axial Load Capacity:** Pu = 0.4 fck Ac + 0.67 fy Asc
- **Minimum Eccentricity:** l/500 + D/30, not less than 20 mm

### Columns with Bending

Interaction diagrams combine axial and bending.

- **Interaction Diagram:** Pu versus Mu capacity
- **Uniaxial Bending:** moment about one axis
- **Biaxial Bending:** moments about both axes

### Isolated Footings

Footings spread column loads.

- **Footing Area:** load / safe bearing capacity
- **One-way Shear:** checked at d from column face
- **Punching Shear:** checked at d/2 from column face

### Combined Footings

One footing for two columns.

- **Combined Footing:** supports two columns
- **Rectangular Combined Footing:** centroid coincides with load resultant
- **Strap Footing:** connects two footings with beam

## Unit 5: Staircases & Detailing

### Staircase Design

Stairs are designed as slabs.

- **Dog-legged Staircase:** waist slab spanning longitudinally
- **Waist Slab:** inclined slab of stair
- **Effective Span:** includes landings

### Reinforcement Detailing

Details ensure performance.

- **Clear Cover:** 20-75 mm depending on exposure
- **Lap Length:** overlap for bar continuity
- **Bar Bending Schedule:** list of bar shapes and lengths

### Durability Requirements

Concrete must resist environment.

- **Exposure Conditions:** mild to extreme as per IS 456
- **Minimum Grade:** M20 for RCC
- **Maximum w/c Ratio:** depends on exposure

### Structural Drawing

Drawings communicate reinforcement.

- **Beam Detail:** longitudinal and cross-section reinforcement
- **Slab Detail:** bar spacing in both directions
- **Column Schedule:** sizes and bars of columns

## Standard Textbooks

- *Limit State Design of Reinforced Concrete* — P. C. Varghese
- *Reinforced Concrete Design* — S. Unnikrishna Pillai & Devdas Menon
- *IS 456:2000* — Bureau of Indian Standards

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
