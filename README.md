# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Open / Closed Principle

> "A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients." Bertrand Meyer.

This is one of the most important principle, if you want to be able to make your application grow.

To paraphrase Bertrand Meyer, the goal is to build an application when a new feature will take the form of a new class, a new method or a new module, while leaving the rest of the application untouched.

To apply this principle efficiently, you must already have a modular application, respecting the **Single Responsability Principle**.

To put it in context, let's take back our **CoffeeService** example. What if we want to be able to serve tea as well ?

One could rush the making of this feature by adding a parameter with the type of drink and surround the treatment in a big and dirty `if`... But not us !

We can, for instance, make a new `TeaService` with the specific treatment, and make both this service and the coffee one implements the `DrinkService`, providing the necessary API. 

```
Well done with the previous mess !

Now, if we want to be able to add more specificities to the project, we will need to rethink our classes strategy.
```

#### Exercise

Checkout into the `exercise-2` branch.

We have add a new feature, the missions with backup. These are just an extension of the previous missions, but with a list of agents that can be used as backup.

Unfortunately, we rushed the feature and now with have a messy `MissionsService`.

Try to clean it by putting all of the `BackedMission` specifics in an extension of the `MissionsService`.

You will find a solution to this exercise in the `exercise-2-solution` branch.
