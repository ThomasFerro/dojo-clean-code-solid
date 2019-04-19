import { Agent } from "../../src/agents/Agent";
import { AgentsRepository } from "../../src/agents/AgentsRepository";
import { AgentsService } from "../../src/agents/AgentsService";
import { InvalidAgent } from "../../src/agents/errors/InvalidAgent";
import { InMemoryAgentsRepository } from "../../src/agents/InMemoryAgentsRepository";

const agents: Agent[] = [];
agents.push(new Agent("solid-snake"));
agents.push(new Agent("meryl-silverburgh"));

describe("agents", () => {
    let agentsRepository: AgentsRepository;
    let agentsService: AgentsService;

    beforeEach(async () => {
        agentsRepository = new InMemoryAgentsRepository();
        agents.forEach(async (agent) => await agentsRepository.add(agent));
        agentsService = new AgentsService(agentsRepository);
    });

    describe("data", () => {
        it("should provide the list of all agents", async () => {
            expect(await agentsService.getAllAgents()).toEqual(agents);
        });

        it("should provide the information about a specific agent", async () => {
            expect(await agentsService.getAgentInformation("solid-snake")).toEqual(agents[0]);
        });

        it("should not provide information for an unknown agent", async () => {
            expect(await agentsService.getAgentInformation("liquid-snake")).toBeUndefined();
        });

        it("should add an agent to the list", async () => {
            const newAgent = new Agent("liquid-snake");
            await agentsService.addAgent(newAgent);

            expect(await agentsService.getAgentInformation(newAgent.getId())).toEqual(newAgent);
        });

        it("should not be able to create an invalid agent", async () => {
            const nakedSnake = new Agent("");

            await expect(agentsService.addAgent(nakedSnake))
                .rejects.toEqual(new InvalidAgent(nakedSnake));
        });
    });
});
