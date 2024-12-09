---
title: Clean Architecture
description: Clean Architecture Used in Software Development
author: Nguyen Nang
authorImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
coverImage: /images/blogs/clean-architecture.jpeg
tags:
  - software design
date: 2024-11-24
draft: false
---

Clean Architecture is a software design philosophy aimed at creating systems that are flexible, maintainable, and scalable. Introduced by Robert C. Martin, it emphasizes the separation of concerns and the independence of various components within a software system. Here’s a detailed overview of its principles, structure, and benefits/disadvantages.

## Core Principles of Clean Architecture

1. **Separation of Concerns (SoC)**: is a design principle in software engineering. It suggests that a system should be divided into distinct sections, each responsible for a specific part of the functionality. This principle helps reduce complexity and makes the system easier to understand and modify 
 
	*Distinct Responsibility*: Each component or module in the system should handle a single aspect or concern. For example, in a web application, you might have separate modules for handling user input, processing data, and displaying results.

	*Reducing Complexity*: By separating concerns, you make each part of the system simpler and more focused. This reduces the overall complexity because each module can be developed, tested, and understood independently.

	*Ease of Understanding and Modification*: When concerns are separated, it's easier to understand how the system works because you can look at one part at a time. It also makes the system easier to modify. If you need to change how data is processed, you can do so without affecting the user input or display modules.

	Example: Imagine a car. The engine, transmission, and brakes are all separate components with distinct responsibilities. If you need to repair the brakes, you don't need to touch the engine. This separation makes the car easier to maintain and understand.

2. **Dependency Rule**: is a principle in software architecture that dictates how different parts of a system should depend on each other. Specifically, it states that dependencies should only point inward toward more abstract layers. The inner layers (like business rules) should not depend on outer layers (like UI or database), ensuring that core logic remains unaffected by changes in external components

	*Layered Architecture*: In a typical layered architecture, you have different layers with varying levels of abstraction:
	  - Outer Layers: These include the user interface (UI), database, and other external components.
	  - Inner Layers: These are more abstract and include core business logic and rules.

	*Inward Dependencies*: According to the Dependency Rule, outer layers can depend on inner layers, but not the other way around. This means:
	  - The UI can call functions from the business logic layer.
	  - The business logic layer should not call functions from the UI layer.

	*Benefits*:
	  - Isolation of Core Logic: By ensuring that core business logic does not depend on external components, you protect it from changes in those components. For example, if you change the database or UI, the core logic remains unaffected.
	  - Easier Testing: Inner layers can be tested independently of the outer layers. This makes unit testing more straightforward and reliable.
	  - Flexibility and Maintainability: You can modify or replace outer layers without impacting the core logic. This makes the system more adaptable to changes and easier to maintain.

	*Example*: Imagine you have an application with a user interface, a business logic layer, and a database. If you decide to switch from a SQL database to a NoSQL database, the business logic layer should not need any changes because it does not depend on the database directly. Instead, it interacts with an abstract data access layer that can be adapted to different databases.

3. **Single Responsibility Principle (SRP)**: SRP states that a class or module should have only one reason to change. This means that each class or module should be responsible for a single part of the functionality provided by the software. 

	*One Reason to Change*: If a class has more than one responsibility, it has more than one reason to change. For example, if a class handles both user authentication and data logging, changes in either of these areas would require changes to the class. This can lead to a more complex and error-prone codebase
	
	*Simplifies Maintenance*: By ensuring that each class or module has a single responsibility, you make the system easier to maintain. When a change is needed, you know exactly where to make it, and you can do so without worrying about unintended side effects in other parts of the system.

	*Enhances Clarity*: Classes and modules with a single responsibility are easier to understand. Each one does one thing and does it well, making the overall system more comprehensible.
	
	Example: Imagine you have a class that handles both user input validation and database operations. According to SRP, you should split this into two classes: one for input validation and one for database operations. This way, if you need to change the validation logic, you only need to modify the validation class, leaving the database operations class untouched.

4. **Open-Closed Principle (OCP)**: OCP states that software entities (such as classes, modules, and functions) should be open for extension but closed for modification. This means you should be able to add new functionality to a system without changing existing code.

	*Open for Extension*: You can extend the behavior of a system by adding new code. For example, you might add new classes or methods to introduce new features or capabilities

	*Closed for Modification*: Existing code should not be changed when adding new functionality. This helps to prevent introducing bugs into the system and ensures that existing functionality remains stable.

	*Benefits*:
	  - Stability: By not modifying existing code, you reduce the risk of breaking existing functionality.
	  - Maintainability: The system becomes easier to maintain because new features can be added without altering the core codebase.
	  - Scalability: It allows the system to grow and evolve over time without requiring significant rewrites.

	Example: Imagine you have a class that calculates discounts for a shopping cart. Initially, it only supports a percentage discount. Later, you want to add support for a fixed amount discount. Instead of modifying the existing class, you can extend it by creating a new class that handles the fixed amount discount. The original class remains unchanged, adhering to the OCP.

5. **Interface Segregation Principle (ISP)**: ISP states that clients (i.e., classes or modules that use interfaces) should not be forced to depend on interfaces they do not use. This means that interfaces should be specific and focused, rather than large and general.

	*Focused Interfaces*: Instead of having one large interface with many methods, it's better to have several smaller, more specific interfaces. Each interface should contain only the methods that are relevant to a particular client

	*Benefits*:
	  - Manageability: Smaller, focused interfaces are easier to understand and manage. Clients only need to implement the methods they actually use.
	  - Flexibility: Changes to an interface are less likely to affect clients that do not use the modified methods. This reduces the risk of breaking existing code.
	  - Decoupling: By using specific interfaces, you decouple clients from unnecessary functionality, making the system more modular and easier to maintain.

	Example: Imagine you have a large interface called IWorker with methods like StartWork(), StopWork(), PauseWork(), and ResumeWork(). Not all clients need all these methods. According to ISP, you should split this into smaller interfaces, such as IStartable, IStoppable, IPausable, and IResumable. Clients can then implement only the interfaces they need.

## Structure of Clean Architecture

Clean Architecture is typically represented as concentric circles or layers, each serving a specific role:

- **Entities**: The innermost layer contains business rules and domain logic that define the core functionality of the application. Entities are independent of any external factors. Think of them as the essential parts of your system that define what your application is all about. For example, in an e-commerce application, entities might include things like Product, Order, and Customer.
	- Innermost Layer: This means that entities are at the heart of your application. They are the foundation upon which everything else is built.
	- Business Rules and Domain Logic: Entities contain the rules and logic that are specific to your business. For instance, an Order entity might have rules about how to calculate the total price or how to apply discounts.
	- Core Functionality: Entities define the main functions and behaviors of your application. They are crucial for the application to work correctly.
	- Independent of External Factors: Entities do not depend on external systems like databases, user interfaces, or APIs. This independence makes them reusable and easy to test. For example, the logic for calculating an order total should work the same way regardless of where the data comes from or how it's displayed to the user.
- **Use Cases**: also known as application services or interactors. This layer describes the interactions users can have with the system, encapsulating the application-specific business rules. Use cases interact with entities but remain agnostic of how data is presented or stored.
	- Interactions with the System: Use cases outline the specific ways users can interact with the application. For example, in an e-commerce application, use cases might include "Place an Order," "Add a Product to Cart," or "Process a Payment."
	- Application-Specific Business Rules: Use cases encapsulate the business logic that is specific to the application's operations. They define the steps and rules that need to be followed to complete a particular task. For instance, the "Place an Order" use case would include rules for validating the order, checking inventory, and calculating the total cost.
	- Interaction with Entities: Use cases interact with entities to perform their tasks. They use the core business objects (entities) to execute the necessary operations. For example, the "Place an Order" use case would interact with the Order and Product entities to create and validate an order.
	- Agnostic of Data Presentation and Storage: Use cases do not concern themselves with how data is presented to the user or how it is stored in the database. Their focus is solely on the business logic and rules. This separation ensures that the use cases remain flexible and can be reused across different interfaces and storage mechanisms.
- **Interface Adapters**: This layer translates data between the format used by the use cases and that used by external agents like databases or user interfaces. It acts as a bridge between the inner business logic and outer technical details.
    - Data Translation: This layer is responsible for converting data formats. For example, it might transform data from a database format into a format that the use cases can work with, and vice versa. This ensures that the core business logic doesn't need to worry about the specifics of data storage or presentation.
    - Bridge Between Layers: Interface adapters act as intermediaries between the inner layers (like use cases and entities) and the outer layers (like databases, web services, and user interfaces). This separation allows each layer to focus on its specific responsibilities without being tightly coupled to other layers.
    - Adapters for Different Interfaces: There are typically different types of adapters for different interfaces:
	    - Database Adapters: These handle the interaction with the database, converting data to and from the format required by the database.
	    - UI Adapters: These manage the interaction with the user interface, ensuring that data is presented in a user-friendly way and that user inputs are correctly processed.
	    - API Adapters: These facilitate communication with external APIs, translating data to and from the format required by the external services.
	- Maintaining Independence: By using interface adapters, the core business logic (use cases and entities) remains independent of the technical details of data storage and presentation. This makes the system more modular, easier to maintain, and more adaptable to changes.
- **Frameworks and Drivers**: also known as the Infrastructure Layer, is the outermost layer includes all external tools and frameworks (e.g., web frameworks, databases). This layer is subject to change without impacting the core business logic.
	- External Tools and Frameworks: This layer includes all the external technologies that your application relies on. Examples include web frameworks (like Django or Spring), databases (like MySQL or MongoDB), messaging systems (like RabbitMQ), and other third-party libraries and services.
	- Subject to Change: One of the key characteristics of this layer is that it can change without affecting the core business logic of your application. For instance, you might switch from one database to another or update a web framework to a new version. These changes should not require modifications to the core business rules and logic encapsulated in the inner layers.
	- Implementation Details: This layer handles the technical details of how things are done. For example, it manages how data is stored in a database, how HTTP requests are handled, or how messages are sent and received. The core business logic doesn't need to know these details; it just relies on the interfaces provided by this layer.
	- Dependency Inversion Principle: Often, this layer is designed following the Dependency Inversion Principle, which means that the high-level modules (like use cases and entities) do not depend on low-level modules (like frameworks and drivers). Instead, both depend on abstractions. This principle helps in keeping the core business logic independent of the technical details.

![Clean Architecture Cone](/images/blogs/clean-architecture-cone.png)

![Clean Architecture Concentric Circle](/images/blogs/clean-architecture-concentric-circle.png)

## Benefits of Clean Architecture

- **Maintainability**: By isolating components and defining clear interfaces, developers can make changes with minimal risk of introducing errors into other parts of the system.
- **Testability**: The separation of concerns allows for easier unit testing as components can be tested independently without requiring the entire system to be operational.
- **Scalability**: Clean architecture supports adding new features or modifying existing ones without significant rework, making it easier to evolve systems over time.
- **Independence from Frameworks**: Applications built using clean architecture can switch frameworks or libraries with minimal impact on the overall system, facilitating long-term adaptability to new technologies.
- **Flexibility**: The architecture allows changes in user interface or database technology without affecting core business rules, making it suitable for applications that need to adapt to changing requirements.

## Disadvantages of Clean Architecture

Clean Architecture, while offering numerous benefits such as maintainability and scalability, also presents several disadvantages that can impact software development processes. Here are the key drawbacks:

- **Complexity and Learning Curve:** Implementing Clean Architecture introduces a significant level of complexity due to its layered structure. Developers often face a steep learning curve, which can hinder productivity, especially for those unfamiliar with the principles involved
- **Increased Development Time:** The initial setup and planning required to implement Clean Architecture can lead to longer development times compared to simpler architectures. This overhead may not be justified for small projects where the benefits of Clean Architecture are less pronounced
- **Boilerplate Code:** Clean Architecture often requires substantial boilerplate code to establish the necessary abstractions and interfaces between layers. This can clutter the codebase and make it more challenging to navigate, particularly for new developers
- **Over-Engineering Risks:** For simple applications or those primarily involving CRUD operations, Clean Architecture may be overkill. The effort to enforce strict architectural boundaries can lead to unnecessary complexity without providing significant advantages
- **Potential for Rigid Structures:** While Clean Architecture aims for flexibility, overly strict adherence to its principles can result in rigidity, making it difficult to adapt the architecture as requirements evolve or as new technologies emerge
- **Not Universally Applicable:** The principles of Clean Architecture may not apply well to every project or team. In cases where business logic is minimal or straightforward, simpler architectural patterns may be more effective and easier to implement
- **Team Familiarity and Adoption Challenges:** Teams may struggle with adopting Clean Architecture if they lack familiarity with its concepts. Resistance to change can arise, leading to inconsistent application across projects within the same organization

In summary, Clean Architecture provides a robust framework for developing software systems that are modular, maintainable, and adaptable to change, ultimately improving developer productivity and reducing long-term costs associated with software maintenance. Its implementation comes with challenges that need careful consideration, particularly in relation to project size, complexity, and team capabilities.