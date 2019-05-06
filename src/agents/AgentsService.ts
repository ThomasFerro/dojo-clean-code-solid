import { Agent } from "./Agent";
import { isAgentValid } from "./AgentPolicies";
import { AgentsRepository } from "./AgentsRepository";
import { InvalidAgent } from "./errors/InvalidAgent";
import { InMemoryAgentsRepository } from "./InMemoryAgentsRepository";

export class AgentsService {
    private agentsRepository: InMemoryAgentsRepository;

    constructor(agentsRepository: InMemoryAgentsRepository) {
        this.agentsRepository = agentsRepository;
    }

    public async addAgent(agent: Agent): Promise<boolean> {
        if (!isAgentValid(agent)) {
            throw new InvalidAgent(agent);
        }

        return await this.agentsRepository.add(agent);
    }

    public async getAllAgents(): Promise<Agent[]> {
        return await this.agentsRepository.findAll();
    }

    public async getAgentInformation(id: string): Promise<Agent | undefined> {
        return await this.agentsRepository.findById(id);
    }
}
