import { Agent } from "../Agent";

export class InvalidAgent implements Error {
    public name: string;
    public message: string;

    constructor(agent: Agent) {
        this.name = "Invalid Agent";
        this.message = `Agent ${this.agentId(agent)} is invalid`;
    }

    private agentId(agent: Agent): string {
        return (agent && agent.getId()) || "N/A";
    }
}
