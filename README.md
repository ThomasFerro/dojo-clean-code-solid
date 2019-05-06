# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Liskov Substitution Principle

#### Solution

I could not find a suitable solution for this specific problem without letting the `MissionsService` know about the `BackedMission`.

Knowing this, and the fact that the new domain rule (no backed mission without backup) is specific to the `BackedMissionsService`, I have decided to create a whole new method, `addBackedMission`, that checks this rule.

Checkout into the Dojo's fourth part's branch :

```
git checkout exercise-4
```
