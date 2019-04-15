import { Agent } from "./Agent";
import { AgentsRepository } from "./AgentsRepository";

export class AgentsService {
    private agentsRepository: AgentsRepository;

    constructor(agentsRepository: AgentsRepository) {
        this.agentsRepository = agentsRepository;
    }

    public async addAgent(agent: Agent): Promise<boolean> {
        return await this.agentsRepository.add(agent);
    }

    public async getAllAgents(): Promise<Agent[]> {
        return await this.agentsRepository.findAll();
    }

    public async getAgentInformation(id: string): Promise<Agent|null> {
        return await this.agentsRepository.findById(id);
    }
}
