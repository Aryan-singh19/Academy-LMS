# CS-305 Object Oriented Programming & Methodology — Unit-wise Study Notes

> Classes, objects, encapsulation, inheritance, polymorphism, exceptions, templates and UML.

## Unit 1: OOP Concepts & Classes

### Procedural vs Object-Oriented Programming

OOP organises programs around objects that combine data and behaviour.

- **Object:** instance of a class with state and behaviour
- **Class:** blueprint defining attributes and methods
- **Procedural Programming:** program organised as functions acting on shared data

### Encapsulation & Data Hiding

Encapsulation bundles data with methods and restricts direct access.

- **Encapsulation:** wrapping data and functions into a single unit
- **Access Specifier:** private, protected or public visibility control
- **Getter and Setter:** methods giving controlled access to private fields

### Constructors & Destructors

Special member functions manage object lifetime.

- **Constructor:** method with the class name called automatically at creation
- **Copy Constructor:** creates an object as a copy of another object
- **Destructor:** called when an object is destroyed to release resources

### Static Members & Friend Functions

Some members belong to the class rather than objects.

- **Static Data Member:** single copy shared by all objects of a class
- **Friend Function:** non-member function allowed to access private members
- **this Pointer:** implicit pointer to the object invoking a member function

## Unit 2: Inheritance

### Inheritance Basics

A derived class reuses and extends a base class.

- **Base Class:** class whose members are inherited
- **Derived Class:** class that inherits and adds members
- **IS-A Relationship:** inheritance models that a derived object is a kind of base

### Types of Inheritance

Classes can be combined in several hierarchies.

- **Multilevel Inheritance:** class derived from another derived class
- **Multiple Inheritance:** class derived from more than one base class
- **Hierarchical Inheritance:** many classes derived from one base

### Diamond Problem & Virtual Base Class

Multiple inheritance can duplicate a common ancestor.

- **Diamond Problem:** ambiguity when two parents share a base class
- **Virtual Base Class:** ensures only one copy of the shared base
- **Constructor Order:** base constructors run before derived constructors

### Composition vs Inheritance

Objects can also be built from other objects.

- **Composition:** HAS-A relationship where an object contains others
- **Aggregation:** weak HAS-A where parts can exist independently
- **Liskov Substitution:** derived objects must be usable wherever base objects are

## Unit 3: Polymorphism

### Function Overloading

Same name, different parameter lists, resolved at compile time.

- **Function Overloading:** multiple functions sharing a name with different signatures
- **Compile-time Polymorphism:** binding decided by the compiler
- **Default Arguments:** parameters given values when the caller omits them

### Operator Overloading

Operators can be redefined for user-defined types.

- **Operator Overloading:** giving an operator a meaning for class objects
- **Unary Operator Overload:** operator function with no explicit argument as a member
- **Non-overloadable Operators:** scope ::, member access ., sizeof and ?:

### Virtual Functions & Runtime Polymorphism

Dynamic binding chooses the method from the object type.

- **Virtual Function:** member function resolved at runtime through a base pointer
- **Late Binding:** function call bound during execution
- **vtable:** table of virtual function pointers kept per class

### Abstract Classes & Interfaces

Abstract classes define contracts for subclasses.

- **Pure Virtual Function:** virtual function declared = 0 with no body
- **Abstract Class:** class with at least one pure virtual function; cannot be instantiated
- **Interface:** class containing only abstract methods, defining a contract

## Unit 4: Exceptions, Templates & I/O

### Exception Handling

Exceptions separate error handling from normal logic.

- **try Block:** code that may throw an exception
- **catch Block:** handler that receives a thrown exception
- **finally or Cleanup:** code that always runs, e.g. to release resources

### Templates & Generic Programming

Templates write type-independent code.

- **Function Template:** generic function parameterised by type
- **Class Template:** generic class such as a container of any type
- **STL:** standard template library of containers, iterators and algorithms

### Streams & File Handling

Streams abstract input and output devices.

- **Stream:** sequence of bytes flowing to or from a device
- **ifstream and ofstream:** classes for reading and writing files
- **File Modes:** flags such as ios::in, ios::out and ios::app

### Java Basics for OOP

Java enforces object orientation with a managed runtime.

- **JVM:** Java virtual machine executing platform-independent bytecode
- **Garbage Collector:** automatically frees unreachable objects
- **Interface in Java:** type declaring methods a class must implement

## Unit 5: Object-Oriented Design & UML

### Object-Oriented Analysis & Design

OOAD identifies objects and their responsibilities from requirements.

- **OOA:** analysis modelling the problem domain as objects
- **OOD:** design defining classes, interfaces and collaborations
- **Cohesion and Coupling:** good design has high cohesion and low coupling

### UML Class & Object Diagrams

Structural diagrams show classes and relationships.

- **Class Diagram:** shows classes, attributes, methods and associations
- **Multiplicity:** number of instances participating in an association, e.g. 1..*
- **Generalisation:** UML arrow showing inheritance

### UML Behavioural Diagrams

Dynamic diagrams show interactions and states.

- **Use Case Diagram:** actors and the services the system provides
- **Sequence Diagram:** ordered message exchange between objects over time
- **State Chart Diagram:** states of an object and transitions between them

### Design Patterns Overview

Patterns are reusable solutions to recurring design problems.

- **Singleton Pattern:** ensures a class has only one instance
- **Factory Pattern:** creates objects without exposing creation logic
- **Observer Pattern:** notifies dependents automatically when a subject changes

## Standard Textbooks

- *Object-Oriented Programming in C++* — Robert Lafore
- *The C++ Programming Language* — Bjarne Stroustrup
- *Object-Oriented Analysis and Design with Applications* — Grady Booch

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
