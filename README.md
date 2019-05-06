# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Interface Segregation Principle

> "The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use." Robert C. Martin.

> "ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces." Wikipedia.

Just like the *Liskov Substitution Principle*, the **Interface Segregation Principle** helps for a more maintainable application.

To stay with the coffee example, imagine that you have a `DrinkService` that expose three method : 

- `fillWater`
- `pourDrink`
- `doMaintenance`

The **Interface Segregation Principle** says that you should segregate these operation in *role interfaces*. So you will have three interfaces that all uses the `DrinkService` for a different purpose :

- `WaterFillerService` with a `fillWater` method exposed
- `DrinkPourerService` with a `pourDrink` method exposed
- `MaintenanceService` with a `doMaintenance` method exposed

This way, a `WaterFillerService`'s client will not depend on any of the maintenance business.

```
The previous mission was the most difficult, keep on cleaning !

A lot of integrators expressed their frustration about our API. They keep telling us that there is way too much useless things to implement, even unnecessary methods...
```

#### Exercise 

Checkout into the `exercise-4` branch.

Our engineers are working on a new feature, the possibility to manage the information of the missions' locations.

The data will be fetched from a `Repository`, but they need to be able to delete elements from this repository.

To do so, they have started to add a new `delete` method.

As you can imagine, the compiler indicates a lot of error based on this new addition, exemple :

```
Property 'delete' is missing in type 'InMemoryMissionsRepository' but required in type 'MissionsRepository'
```

It might be due to the fact that the interface holds to many methods !

Split this interface to best suit the new needs of the team.

You will find a solution to this exercise in the `exercise-4-solution` branch.
