import { Mission } from "./Mission";
import { getMissionWithinPeriod } from "./MissionsHelpers";

export const isMissionValid = (mission: Mission): boolean => {
    // TODO : Add check -> isAgentValid
    return !!(mission && mission.getId() && mission.getAgent() && mission.getStartDate());
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
