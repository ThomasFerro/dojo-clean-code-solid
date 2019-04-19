import { Mission } from "../Mission";

export class MissionConflict implements Error {
    public name: string;
    public message: string;

    constructor(mission: Mission) {
        this.name = "Mission conflict";
        this.message = `Mission ${this.missionId(mission)} cannot be created,`
            + " another mission is already set within the period.";
    }

    private missionId(mission: Mission): string {
        return (mission && mission.getId()) || "N/A";
    }
}
