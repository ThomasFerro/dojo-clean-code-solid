import { Agent } from "../../../src/agents/Agent";
import { BackedMission } from "./BackedMission";
import { isAgentInBackup } from "./BackedMissionsHelpers";
import { BackedMissionsRepository } from "./BackedMissionsRepository";

export class InMemoryBackedMissionsRepository implements BackedMissionsRepository {
    private missions: BackedMission[];

    constructor() {
        this.missions = [];
    }

    public async add(mission: BackedMission): Promise<boolean> {
        this.missions = this.missions.concat(mission);
        return true;
    }

    public async findAll(): Promise<BackedMission[]> {
        return this.missions;
    }

    public async findById(missionId: string): Promise<BackedMission | undefined> {
        return this.missions.find((mission) => missionId === mission.getId());
    }

    public async findByAgent(agentId: string): Promise<BackedMission[]> {
        return this.missions.filter((mission) => {
            const agent = mission.getAgent();
            return agent && agent.getId() === agentId || isAgentInBackup(agentId, mission);
        });
    }

    public async removeBackup(missionId: string, backupId: string): Promise<boolean> {
        const mission: BackedMission | undefined = await this.findById(missionId);

        if (mission === undefined || !mission.getBackup()) {
            return false;
        }

        const backup: Agent | undefined = mission.getBackup()
            && mission.getBackup().find((agent: Agent) => agent && agent.getId() === backupId);

        if (backup === undefined) {
            return false;
        }

        const [ _, ...otherBackup ] = mission.getBackup();

        mission.setBackup(otherBackup);

        return true;
    }
}
