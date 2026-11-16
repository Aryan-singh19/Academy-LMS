# MPS-201 Power System Operation & Control — Unit-wise Study Notes

> Load frequency control, AGC, voltage and reactive power control, energy management systems and electricity markets.

## Unit 1: Load Frequency Control

### Frequency Control Basics

Balancing generation and load.

- **Frequency Deviation:** due to generation-load mismatch
- **Primary Control:** governor droop response
- **Secondary Control:** restores nominal frequency

### Single-area LFC

Model of an isolated area.

- **LFC Block Diagram:** governor, turbine and power system
- **Steady-state Error:** −ΔPL/(β) with droop
- **Integral Control:** eliminates steady-state error

### Two-area LFC

Interconnected areas.

- **Tie-line Power:** exchange between areas
- **Area Control Error:** ACE = ΔPtie + B Δf
- **Frequency Bias:** B setting for each area

### AGC & Modern Control

Automatic generation control.

- **AGC:** automatic generation control
- **Optimal LFC:** state feedback control
- **Renewable Impact:** reduced inertia challenges

## Unit 2: Voltage & Reactive Power Control

### Reactive Power Sources

Generating and absorbing VARs.

- **Synchronous Generator:** controllable reactive source
- **Shunt Capacitor:** supplies reactive power
- **Shunt Reactor:** absorbs reactive power

### Voltage Control Methods

Maintaining voltage profile.

- **OLTC:** on-load tap changer
- **SVC:** static VAR compensator
- **STATCOM:** static synchronous compensator

### Hierarchical Voltage Control

Coordinated control levels.

- **Primary Voltage Control:** AVR action
- **Secondary Voltage Control:** regional coordination
- **Tertiary Voltage Control:** system-wide optimisation

### Reactive Power Management

Planning reactive resources.

- **Reactive Reserve:** available reactive capacity
- **Voltage-VAR Optimisation:** minimises losses
- **Power Factor Correction:** at loads

## Unit 3: Energy Management Systems

### Control Centres

System operation centres.

- **Load Despatch Centre:** operates grid, e.g. NLDC, RLDC, SLDC
- **SCADA:** supervisory control and data acquisition
- **EMS:** energy management system applications

### EMS Functions

Real-time applications.

- **State Estimation:** system state from measurements
- **Contingency Analysis:** security assessment
- **Optimal Power Flow:** economic and secure dispatch

### Load Forecasting

Predicting demand.

- **Short-term Load Forecasting:** hours to days ahead
- **Time Series Methods:** ARIMA models
- **ML Forecasting:** neural networks and gradient boosting

### WAMS

Wide area monitoring.

- **WAMS:** wide area measurement system
- **PMU:** synchronised phasor measurements
- **Oscillation Monitoring:** detects poorly damped modes

## Unit 4: Electricity Markets

### Power Sector Restructuring

From monopoly to competition.

- **Deregulation:** unbundling of generation, transmission, distribution
- **Electricity Act 2003:** Indian power sector reform law
- **Open Access:** non-discriminatory transmission use

### Market Structures

How electricity is traded.

- **Power Exchange:** IEX, PXIL in India
- **Day-ahead Market:** trading for next day
- **Real-time Market:** trading close to delivery

### Pricing

Price formation.

- **Market Clearing Price:** intersection of supply and demand
- **LMP:** locational marginal price
- **Congestion Management:** handling transmission limits

### Ancillary Services

Services for reliability.

- **Ancillary Services:** reserves, frequency and voltage support
- **Spinning Reserve:** online backup capacity
- **Deviation Settlement Mechanism:** penalises schedule deviations in India

## Unit 5: Grid Operation with Renewables

### Variability & Forecasting

Renewables are variable.

- **RE Forecasting:** predicting solar and wind output
- **Ramp Rate:** rate of change of generation
- **Net Load:** load minus renewable generation

### Flexibility

Handling variability.

- **Flexible Generation:** fast-ramping units
- **Battery Storage:** fast frequency response
- **Demand Response:** shifting consumer load

### Inertia & Frequency Stability

Low inertia grids.

- **System Inertia:** stored kinetic energy
- **RoCoF:** rate of change of frequency
- **Synthetic Inertia:** converter-based inertial response

### Grid Codes for RE

Requirements for renewables.

- **LVRT:** low voltage ride through
- **Reactive Power Capability:** required from RE plants
- **Scheduling and Forecasting Regulations:** for RE generators

## Standard Textbooks

- *Power Generation, Operation and Control* — Wood & Wollenberg
- *Power System Operation and Control* — S. Sivanagaraju
- *Operation of Restructured Power Systems* — Bhattacharya, Bollen & Daalder

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
