import { Mission } from "./Mission";
import { MissionsRepository } from "./MissionsRepository";

export class InMemoryMissionsRepository implements MissionsRepository {
    private missions: Mission[];

    constructor() {
        this.missions = [];
    }

    public async add(mission: Mission): Promise<boolean> {
        this.missions = this.missions.concat(mission);
        return true;
    }

    public async findAll(): Promise<Mission[]> {
        return this.missions;
    }

    public async findById(missionId: string): Promise<Mission | undefined> {
        return this.missions.find((mission) => missionId === mission.getId());
    }

    public async findByAgent(agentId: string): Promise<Mission[]> {
        return this.missions.filter((mission) => {
            const agent = mission.getAgent();
            return agent && agent.getId() === agentId;
        });
    }
}
