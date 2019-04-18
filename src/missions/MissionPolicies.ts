import { Mission } from "./Mission";
import { getMissionWithinPeriod } from "./MissionsHelpers";

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
