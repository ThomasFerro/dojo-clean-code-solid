import { Agent } from "../../../src/agents/Agent";
import { BackedMission } from "./BackedMission";

export const isAgentInBackup = (agentId: string, mission: BackedMission): boolean => {
    if (!agentId || !mission || !mission.getBackup() || mission.getBackup().length  === 0) {
        return false;
    }

    return mission.getBackup().find((backup: Agent) => backup && backup.getId() === agentId) !== undefined;
};
