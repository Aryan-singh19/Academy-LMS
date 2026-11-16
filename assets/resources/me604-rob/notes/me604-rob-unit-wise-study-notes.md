# ME-604(A) Robotics — Unit-wise Study Notes

> Robot anatomy, kinematics, dynamics, trajectory planning, sensors, actuators, programming and applications.

## Unit 1: Introduction to Robotics

### Robot Anatomy

Robots are programmable manipulators.

- **Industrial Robot:** reprogrammable multifunctional manipulator
- **Degrees of Freedom:** number of independent joint motions
- **Work Envelope:** space reachable by the end effector

### Robot Configurations

Coordinate systems classify robots.

- **Cartesian Robot:** three linear joints
- **SCARA:** selective compliance robot arm for assembly
- **Articulated Robot:** rotary joints like a human arm

### Robot Specifications

Specifications describe capability.

- **Payload:** maximum load robot can carry
- **Repeatability:** ability to return to the same point
- **Accuracy:** ability to reach a commanded point

### End Effectors

Tools at the robot wrist interact with work.

- **Gripper:** end effector for grasping
- **Vacuum Gripper:** uses suction cups
- **Tool Changer:** allows automatic tool swapping

## Unit 2: Robot Kinematics

### Homogeneous Transformations

4×4 matrices represent position and orientation.

- **Homogeneous Transformation:** combines rotation and translation in 4×4 matrix
- **Rotation Matrix:** 3×3 orthonormal matrix
- **Frame:** coordinate system attached to a link

### Forward Kinematics

Joint values give end-effector pose.

- **Forward Kinematics:** computing pose from joint variables
- **DH Parameters:** link length, twist, offset and joint angle
- **DH Convention:** systematic assignment of link frames

### Inverse Kinematics

Pose gives required joint values.

- **Inverse Kinematics:** finding joint variables for a desired pose
- **Multiple Solutions:** several joint sets may reach the same pose
- **Singularity:** configuration losing a degree of freedom

### Jacobian & Velocity Kinematics

Jacobian maps joint rates to end-effector velocity.

- **Jacobian:** matrix relating joint velocities to end-effector velocities
- **Singular Jacobian:** determinant zero at singularity
- **Static Force Relation:** τ = J^T F

## Unit 3: Dynamics & Trajectory Planning

### Robot Dynamics

Dynamics relates torques to motion.

- **Lagrange-Euler Formulation:** dynamics from kinetic and potential energy
- **Newton-Euler Formulation:** recursive force and moment balance
- **Inertia Matrix:** joint-space mass matrix

### Trajectory Planning

Planned paths are smooth in time.

- **Joint-space Trajectory:** interpolating joint angles
- **Cubic Polynomial Trajectory:** satisfies position and velocity at ends
- **Via Points:** intermediate points along a path

### Path Planning

Robots avoid obstacles.

- **Configuration Space:** space of all joint configurations
- **Potential Field Method:** attractive goal and repulsive obstacles
- **Path vs Trajectory:** path is geometric, trajectory adds timing

### Robot Control

Controllers make robots follow trajectories.

- **PID Joint Control:** independent joint control
- **Computed Torque Control:** cancels non-linear dynamics
- **Force Control:** regulates contact forces

## Unit 4: Sensors & Actuators

### Internal Sensors

Sensors measure robot state.

- **Encoder:** measures joint position
- **Resolver:** analog angular position sensor
- **Tachometer:** measures joint velocity

### External Sensors

Sensors perceive the environment.

- **Proximity Sensor:** detects nearby objects
- **Force-Torque Sensor:** measures forces at the wrist
- **Tactile Sensor:** senses touch and pressure

### Robot Vision

Cameras give rich information.

- **Machine Vision:** image acquisition and analysis for robots
- **Image Segmentation:** separating objects from background
- **Camera Calibration:** finding camera parameters

### Robot Actuators

Robots are driven by motors or fluid power.

- **Servo Motor:** closed-loop motor for joints
- **Stepper Motor:** open-loop position control
- **Harmonic Drive:** compact high-ratio gearing for joints

## Unit 5: Programming & Applications

### Robot Programming Methods

Robots are taught or programmed.

- **Lead-through Programming:** operator moves robot to teach points
- **Teach Pendant:** handheld device for programming
- **Offline Programming:** programs created in simulation

### Robot Languages

Languages express robot tasks.

- **VAL:** early robot programming language
- **Motion Commands:** MOVE, APPROACH and DEPART
- **ROS:** robot operating system framework

### Industrial Applications

Robots automate manufacturing.

- **Spot Welding Robots:** used in automobile body shops
- **Painting Robots:** spray painting with consistent quality
- **Material Handling:** pick-and-place and palletising

### Mobile Robots & Safety

Robots move and work with humans.

- **Mobile Robot:** wheeled or legged robot that navigates
- **Cobot:** collaborative robot working safely with humans
- **Robot Safety:** guarding, sensors and emergency stops

## Standard Textbooks

- *Introduction to Robotics: Mechanics and Control* — John J. Craig
- *Industrial Robotics* — Groover, Weiss, Nagel & Odrey
- *Robotics and Control* — R. K. Mittal & I. J. Nagrath

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
