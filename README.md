# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Interface Segregation Principle

#### Solution

I have splitted the `Repository` into three interfaces. This way, every implementation can choose which action they want to provide, depending on their specifications :

```
export interface Add<T> {
    add(element: T): Promise<boolean>;
}

export interface FindAll<T> {
    findAll(): Promise<T[]>;
}

export interface FindById<T, K> {
    findById(id: K): Promise<T | undefined>;
}
```

And now, the team can simple add a new `delete` interface and make their repository implements what they need !

Checkout into the Dojo's fifth part's branch :

```
git checkout exercise-5
```
