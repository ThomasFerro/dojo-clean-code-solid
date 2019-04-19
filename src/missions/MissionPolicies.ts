import { isAgentValid } from "../agents/AgentPolicies";
import { Mission } from "./Mission";
import { getMissionWithinPeriod } from "./MissionsHelpers";

export const isMissionValid = (mission: Mission): boolean => {
    return !!(mission && mission.getId() && isAgentValid(mission.getAgent()) && mission.getStartDate());
};

export const hasAlreadyAMissionWithinThisPeriod = (
    agentMissions: Mission[],
    newMission: Mission,
): boolean => {
    return getMissionWithinPeriod(
        agentMissions,
        newMission.getStartDate(),
        newMission.getEndDate(),
    ) !== undefined;
};
