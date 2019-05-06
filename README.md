# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Open / Closed Principle

#### Solution

To solve this issue and make the extension of the application more straightforward, I have added a `BackedMissionsService` that extends the `MissionsService`.

This new class is responsible for the providing an API used to manage specifically the missions with backup. This way, backward compatibility is kept clean.

However, I found this way of keeping the classes open redundant. To make this new feature, I had to add :

- A new set of helpers;
- A new repository;
- A new implementation of this repository.

Checkout into the Dojo's third part's branch :

```
git checkout exercise-3
```
