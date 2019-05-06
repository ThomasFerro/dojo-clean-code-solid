# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Single Responsibility Principle

> "A class should have only one reason to change." Robert C. Martin.

Think of the last time you tried to debug that particular method that was responsible of :

1. Checking if there is enough coffee and water left;
2. Prepare the coffee if the first condition is fulfilled;
3. Pour the coffee and the milk if necessary;
4. Add sugar; and
5. Notify the user that his coffee is ready !

All of that in the `CoffeeService` !

Now, imagine a world where all the coffee business is managed by the `CoffeeService`, the sugar business by the `SugarService`, and so on..

Wouldn't it be nice ? Easily testable and debuggable ?

This is the philosophy behind the **Single Responsibility Principle**, every part of the code should be responsible for one thing and it should be very talented at doing it !

**Transmission received...**

```
Snake, we have found your first target.

This is a common case of a junk room class ! Clean it by making sure that the responsibilities are at the right place.
```

#### Exercise

Checkout into the `exercise-1` branch.

Try to clean up the `addMission` in the `MissionService` by splitting the responsabilities in different classes.

You will find a solution to this exercise in the `exercise-1-solution` branch.
