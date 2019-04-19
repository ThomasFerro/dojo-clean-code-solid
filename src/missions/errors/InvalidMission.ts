import { Mission } from "../Mission";

export class InvalidMission implements Error {
    public name: string;
    public message: string;

    constructor(mission: Mission) {
        this.name = "Invalid Mission";
        this.message = `Mission ${this.missionId(mission)} is invalid`;
    }

    private missionId(mission: Mission): string {
        return (mission && mission.getId()) || "N/A";
    }
}
