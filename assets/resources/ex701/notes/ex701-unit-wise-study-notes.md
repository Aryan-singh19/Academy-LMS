# EX-701 Power System Protection — Unit-wise Study Notes

> Fault analysis, relays, protection schemes for generators, transformers, lines, circuit breakers and numerical relaying.

## Unit 1: Protection Fundamentals

### Need for Protection

Protection isolates faults quickly.

- **Protective Relay:** senses fault and trips breaker
- **Zone of Protection:** region a relay protects
- **Primary and Backup Protection:** main and fallback protection

### Relay Characteristics

Good relays are selective and fast.

- **Selectivity:** isolating only faulty section
- **Sensitivity:** detecting smallest fault
- **Reliability:** operating when required

### Instrument Transformers for Protection

CTs and PTs feed relays.

- **Protection CT:** accurate at high fault currents
- **CT Saturation:** distortion at high currents
- **Knee Point Voltage:** onset of CT saturation

### Earthing in Power Systems

Neutral earthing affects fault currents.

- **Solid Earthing:** neutral connected directly to earth
- **Resistance Earthing:** limits earth fault current
- **Peterson Coil:** arc suppression coil

## Unit 2: Relays

### Electromagnetic Relays

Classic relays use magnetic attraction.

- **Attracted Armature Relay:** instantaneous relay
- **Induction Disc Relay:** inverse time characteristic
- **Plug Setting Multiplier:** fault current / (relay setting × CT ratio)

### Overcurrent Relays

Overcurrent relays protect feeders.

- **IDMT Relay:** inverse definite minimum time
- **Time Multiplier Setting:** scales operating time
- **Relay Coordination:** grading of relay times

### Directional & Differential Relays

Relays respond to direction or difference.

- **Directional Relay:** operates for current in one direction
- **Differential Relay:** operates on difference of currents
- **Percentage Differential:** bias for CT mismatch

### Distance Relays

Distance relays measure impedance.

- **Impedance Relay:** operates when Z < setting
- **Mho Relay:** directional circular characteristic
- **Zones of Distance Protection:** zone 1, 2 and 3 settings

## Unit 3: Apparatus Protection

### Generator Protection

Generators face many faults.

- **Stator Differential Protection:** for internal faults
- **Loss of Excitation Protection:** detects field failure
- **Reverse Power Protection:** prevents motoring

### Transformer Protection

Transformers need special schemes.

- **Buchholz Relay:** gas-actuated relay for oil transformers
- **Harmonic Restraint:** prevents tripping on inrush
- **Restricted Earth Fault:** protects winding against earth faults

### Busbar Protection

Busbars need fast protection.

- **Busbar Differential:** sums currents at bus
- **High Impedance Scheme:** stable for through faults
- **Frame Leakage Protection:** for metal-clad switchgear

### Motor Protection

Motors are protected against overloads.

- **Thermal Overload Relay:** models motor heating
- **Negative Sequence Relay:** detects unbalance
- **Locked Rotor Protection:** protects during stall

## Unit 4: Line Protection & Circuit Breakers

### Transmission Line Protection

Lines use distance and pilot schemes.

- **Pilot Protection:** communication between line ends
- **Carrier Current Protection:** PLCC-based scheme
- **Auto-reclosing:** recloses after transient faults

### Circuit Breaker Principles

Breakers interrupt fault currents.

- **Arc Interruption:** high resistance or current zero methods
- **Restriking Voltage:** transient voltage after arc extinction
- **Recovery Voltage:** normal frequency voltage after interruption

### Types of Circuit Breakers

Media quench the arc.

- **SF6 Circuit Breaker:** uses sulphur hexafluoride gas
- **Vacuum Circuit Breaker:** for medium voltage
- **Air Blast Breaker:** compressed air extinguishes arc

### Breaker Ratings & Testing

Ratings describe capability.

- **Breaking Capacity:** maximum interruptible current
- **Making Capacity:** 2.55 × symmetrical breaking current
- **Short Circuit Testing:** verifies ratings

## Unit 5: Modern Protection

### Static Relays

Electronic relays replace electromechanical ones.

- **Static Relay:** solid-state relay
- **Comparator:** compares amplitude or phase
- **Advantages:** fast, low burden

### Numerical Relays

Microprocessor relays sample signals.

- **Numerical Relay:** digital processing of sampled signals
- **Fourier Algorithm:** extracts phasors
- **Self-monitoring:** continuous internal checks

### Substation Automation

IEC 61850 integrates protection.

- **IEC 61850:** substation communication standard
- **GOOSE Message:** fast peer-to-peer signalling
- **IED:** intelligent electronic device

### Protection Against Overvoltages

Surges are diverted.

- **Lightning Arrester:** diverts surges to earth
- **Surge Absorber:** smooths steep fronts
- **Insulation Coordination:** matching insulation to protection

## Standard Textbooks

- *Switchgear and Protection* — Sunil S. Rao
- *Power System Protection and Switchgear* — B. Ram & D. N. Vishwakarma
- *Protective Relaying* — Blackburn & Domin

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
