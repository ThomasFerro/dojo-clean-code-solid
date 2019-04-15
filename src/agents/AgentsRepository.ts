import { Agent } from "./Agent";

export interface AgentsRepository {
    findAll(): Promise<Agent[]>;
    findById(id: string): Promise<Agent | null>;
}
