import { Agent } from "../../../src/agents/Agent";
import { BackedMission } from "./BackedMission";

export const hasBackup = (mission: BackedMission): boolean => {
    return mission && mission.getBackup() && mission.getBackup().length > 0;
};

export const isAgentInBackup = (agentId: string, mission: BackedMission): boolean => {
    if (!agentId || !mission || !mission.getBackup() || mission.getBackup().length  === 0) {
        return false;
    }

    return mission.getBackup().find((backup: Agent) => backup && backup.getId() === agentId) !== undefined;
};
