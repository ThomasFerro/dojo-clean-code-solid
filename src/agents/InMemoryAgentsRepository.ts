import { Agent } from "./Agent";
import { AgentsRepository } from "./AgentsRepository";

export class InMemoryAgentsRepository implements AgentsRepository {
    private agents: Agent[];

    constructor() {
        this.agents = [];
    }

    public async add(agent: Agent): Promise<boolean> {
        this.agents = this.agents.concat(agent);
        return true;
    }

    public async findAll(): Promise<Agent[]> {
        return this.agents;
    }

    public async findById(id: string): Promise<Agent | undefined> {
        return this.agents.find((agent) => agent.getId() === id) || undefined;
    }
}
