# Coding Dojo - Clean Code - SOLID

> An introduction to Clean Code / Architecture in disguise.

A Coding Dojo based on the universe of Metal Gear Solid. Five exercises will be presented to introduce the principles behind the SOLID acronym.

## Dojo

### Dependency Inversion Principle

#### Solution

This exercise was not quite elaborate, it was just a means to talk to you about the principle.

You should always depends on abstraction, even if you are doing a """disposable service""" (spoiler: it will never be disposed).

In this case, the `AgentsService` should depend on an abstract `AgentsRepository`.

The only thing that the service should know is that the repository can perform various actions (here: fetching and adding agents) :

```
export class AgentsService {
    private agentsRepository: AgentsRepository;

    constructor(agentsRepository: AgentsRepository) {
        this.agentsRepository = agentsRepository;
    }
    [...]
}
```

Checkout into the Dojo's conclusion's branch :

```
git checkout conclusion
```
