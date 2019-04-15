import { Agent } from "./Agent";

export interface AgentsRepository {
    add(agent: Agent): Promise<boolean>;
    findAll(): Promise<Agent[]>;
    findById(id: string): Promise<Agent | null>;
}
