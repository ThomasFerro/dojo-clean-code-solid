# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Single Responsibility Principle

#### Solution

In order to simplify the `MissionsService`, I have created a class responsible for the policies linked to a mission.

Here, this `MissionPolicies` class exposes two pure methods: `isMissionValid` and `hasAlreadyAMissionWithinThisPeriod`.

The `MissionsService` can then focus on his primary responsability, and simply call the policies when needed.

Checkout into the Dojo's second part's branch :

```
git checkout exercise-2
```
