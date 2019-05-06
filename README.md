# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Dependency Inversion Principle

> "High level modules should not depend upon low level modules. Both should depend upon abstractions." Robert C. Martin.

> "Abstractions should not depend upon details. Details should depend upon abstraction." Robert C. Martin.

This may be the least expansive principle to apply.

If you are not already convinced that you should always depends on abstraction (abstract classes or interfaces), try to think of the last time you have committed to this specific database, let us say *MongoDB*.

You build your entire application with explicit references to this provider, using the technology as it's full potential.

Then, right before the shipping, your boss tells you that a contract has been signed with Microsoft to use *Microsoft SQL Server*, and that you **have to** use this database !

Now you have to search for every *MongoDB* reference in the codebase, replacing it with the new provider... And, of course, you have used specific features that is not available in the new provider !

This is a common case where the **Dependency Inversion Principle** can save you hours, even days !

In the previous example, instead of referencing *MongoDB*, an abstract **Repository** would have been used, later implemented with the chosen provider. This way, changing a provider can be simply done by adding a new implementation, and configure the application to use this one instead.

```
One last thing to greatly improve our project and you will be free to go.

The team wants to be able to try numerous technical choices before deciding which one to use in production.

To do so, we need to rethink our application to remove any explicit references !
```

#### Exercise 

Checkout into the `exercise-5` branch.

The `AgentsService` make explicit reference to an implementation of the `AgentsRepository`. Abstract the used repository.

You will find a solution to this exercise in the `exercise-5-solution` branch.
