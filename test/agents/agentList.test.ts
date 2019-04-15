import { Agent } from "../../src/agents/Agent";
import { AgentsRepository } from "../../src/agents/AgentsRepository";
import { AgentsService } from "../../src/agents/AgentsService";

const agents: Agent[] = [];
agents.push(new Agent("solid-snake"));
agents.push(new Agent("meryl-silverburgh"));

const agentsRepository: AgentsRepository = {
    findAll: async (): Promise<Agent[]> => {
        return agents;
    },
    findById: async (id: string): Promise<Agent | null> => {
        return agents.find((agent) => agent.getId() === id) || null;
    },
};

describe("agent list", () => {
    let agentsService: AgentsService;

    beforeEach(() => {
        agentsService = new AgentsService(agentsRepository);
    });

    it("should provide the list of all agents", async () => {
        expect(await agentsService.getAllAgents()).toBe(agents);
    });

    it("should provide the information about a specific agent", async () => {
        expect(await agentsService.getAgentInformation("solid-snake")).toBe(agents[0]);
    });
});
