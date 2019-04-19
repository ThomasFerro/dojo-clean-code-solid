import { Agent } from "./Agent";

export const isAgentValid = (agent: Agent): boolean => {
    return !!(agent && agent.getId());
};