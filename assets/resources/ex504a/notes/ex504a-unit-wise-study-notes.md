# EX-504(A) Industrial Electronics — Unit-wise Study Notes

> Power devices in industry, timers, heating, welding, motor control, PLCs and industrial instrumentation.

## Unit 1: Industrial Power Devices

### Thyristor Family

Thyristors control industrial power.

- **SCR:** unidirectional controlled switch
- **TRIAC:** bidirectional thyristor
- **DIAC:** bidirectional trigger diode

### Triggering Circuits

Triggering controls firing.

- **UJT Relaxation Oscillator:** generates trigger pulses
- **Pulse Transformer:** isolates gate circuit
- **Opto-isolator:** optical isolation of control

### Protection Circuits

Devices are protected from stress.

- **Snubber:** RC network limiting dv/dt
- **Crowbar:** protects against overvoltage
- **Fuse:** overcurrent protection

### Power Supplies

Regulated supplies feed industrial electronics.

- **Linear Regulator:** series pass regulator
- **SMPS:** switched-mode power supply
- **UPS:** uninterruptible power supply

## Unit 2: Timers & Control Circuits

### Timers

Timers delay or sequence operations.

- **555 Timer:** versatile timing IC
- **Monostable Mode:** single pulse output
- **Astable Mode:** continuous oscillation

### Time Delay Relays

Relays switch after delay.

- **On-delay Timer:** output after delay on energising
- **Off-delay Timer:** output persists after de-energising
- **Electronic Timer:** IC-based timing

### Counters & Sequencers

Digital circuits sequence processes.

- **Industrial Counter:** counts products
- **Sequencer:** steps through operations
- **Interlocking:** prevents unsafe sequences

### Photoelectric Controls

Light-based sensing.

- **Photoelectric Sensor:** detects objects with light beam
- **Burglar Alarm:** light interruption detector
- **Automatic Street Light:** LDR-based switching

## Unit 3: Heating & Welding

### Induction Heating

Eddy currents heat conductive material.

- **Induction Heating:** heating by induced eddy currents
- **Skin Depth:** depth of current penetration
- **Applications:** hardening, melting, brazing

### Dielectric Heating

High-frequency field heats insulators.

- **Dielectric Heating:** heating non-conductors by dielectric loss
- **Applications:** wood gluing and plastic welding
- **Frequency Range:** 1-100 MHz

### Resistance Welding Control

Electronics control weld timing.

- **Resistance Welding:** heat from current through contact
- **Weld Timer:** controls current duration
- **Synchronous Timer:** synchronised with supply

### Electric Arc Furnace

Arc heating melts metals.

- **Arc Furnace:** melting by electric arc
- **Electrode Control:** maintains arc length
- **Power Factor in Furnaces:** typically low

## Unit 4: Motor Control

### DC Motor Control

Converters control DC motor speed.

- **Phase-controlled DC Drive:** SCR rectifier feeding motor
- **Chopper Drive:** DC-DC converter control
- **Closed-loop Speed Control:** tachogenerator feedback

### AC Motor Control

Inverters control AC motors.

- **VFD:** variable frequency drive
- **V/f Control:** constant flux control
- **Soft Starter:** reduces inrush current

### Stepper & Servo Control

Precise positioning motors.

- **Stepper Motor Driver:** sequences phase currents
- **Servo Drive:** closed-loop position control
- **Encoder Feedback:** position measurement

### Motor Protection

Protection prevents damage.

- **Overload Relay:** trips on sustained overcurrent
- **Single Phasing Preventer:** trips on phase loss
- **Thermistor Protection:** winding temperature sensing

## Unit 5: PLC & Industrial Automation

### PLC Basics

PLCs automate industrial processes.

- **PLC:** programmable logic controller
- **Scan Cycle:** input scan, program execution, output update
- **I/O Module:** connects field devices

### Ladder Programming

Ladder logic programs PLCs.

- **Ladder Diagram:** relay-style program
- **Timer and Counter Instructions:** TON, TOF, CTU
- **Latching Circuit:** holds output on

### SCADA & DCS

Supervisory systems monitor plants.

- **SCADA:** supervisory control and data acquisition
- **DCS:** distributed control system
- **HMI:** human machine interface

### Industrial Communication

Networks connect devices.

- **Modbus:** common industrial protocol
- **Profibus:** fieldbus for automation
- **Industrial Ethernet:** Ethernet-based control networks

## Standard Textbooks

- *Industrial Electronics and Control* — S. K. Bhattacharya & S. Chatterjee
- *Power Electronics* — P. S. Bimbhra
- *Programmable Logic Controllers* — W. Bolton

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
