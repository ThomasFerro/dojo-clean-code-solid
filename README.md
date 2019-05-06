# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Liskov Substitution Principle

> "Let φ(x) be a property provable about objects x of type T. Then φ(y) should be true for objects y of type S where S is a subtype of T." Barbara Liskov.

> "Functions that use pointers of references to base classes must be able to use objects of derived classes without knowing it." Robert C. Martin.

This is, in my opinion, the most complicated of the five principles.

Try to think of it this way : 

1. You should never strengthened preconditions in a subtype. Meaning that if you extends the `CoffeeService` class with a `pourCoffee` method, this method in your subclass should accept the same arguments as the original.
2. You should never weakened postconditions in a subtype. Meaning that if the method in the parent class have a condition that throws an error, the same error should be thrown in every subclasses.

This way, there is no need to do specific validation when calling the `pourCoffee` method, whether it is from the `CoffeeService` itself one or his subclasses.

```
Still with us ? We need you more than ever with this issue.

The project act oddly depending on the implementation, no matter how precise the API is..

Spot the weak substitution and clear it, so we can move on.
```

#### Exercise

Checkout into the `exercise-3` branch.

The team has decided to add a new condition for creating a mission with backup.

This condition is that there must be at least one of those backups.

The first implementation seems to fulfill this requirement, adding a `BackedMission` with no backup throws an `InvalidMission` exception.

You may have noticed the violation here : The same entity doest not behave the same while being added in the `MissionsService` or in the `BackedMissionsService`. Thus, we cannot substitue those classes, even if `BackedMissionsService` extends `MissionsService`.

Try to find a way to fix this violation but do not wait too much before reading the solution, and please share with me your solution or your feeling about mine.

You will find a solution to this exercise in the `exercise-3-solution` branch.
