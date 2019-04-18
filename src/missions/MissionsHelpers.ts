import { Mission } from "./Mission";

export const isMissionWithinPeriod = (mission: Mission, startDate: number, endDate?: number): boolean => {
    const missionEndDate = mission.getEndDate();

    return mission.getStartDate() <= startDate &&
        (!endDate || !missionEndDate || missionEndDate > endDate);
};

export const getMissionWithinPeriod = (
    missions: Mission[],
    startDate: number,
    endDate?: number,
): Mission | undefined => {

    return missions && missions.find(
        (mission) => isMissionWithinPeriod(mission, startDate, endDate),
    );
};
