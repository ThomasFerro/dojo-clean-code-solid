import { Mission } from "./Mission";
import { MissionsRepository } from "./MissionsRepository";

export class MissionsService {
    private missionsRepository: MissionsRepository;

    constructor(missionsRepository: MissionsRepository) {
        this.missionsRepository = missionsRepository;
    }

    public async addMission(mission: Mission): Promise<boolean> {
        return await this.missionsRepository.add(mission);
    }

    public async getAllMissions(): Promise<Mission[]> {
        return await this.missionsRepository.findAll();
    }

    public async getMissionInformation(missionId: string): Promise<Mission | undefined> {
        return await this.missionsRepository.findById(missionId);
    }

    public async getAgentMissions(agentId: string): Promise<Mission[]> {
        return await this.missionsRepository.findByAgent(agentId);
    }

    public async getAgentCurrentMission(agentId: string): Promise<Mission | undefined> {
        return (await this.getAgentMissions(agentId)).find(
            (mission) => {
                const currentDate = (new Date()).getTime();
                const endDate = mission.getEndDate();

                return mission.getStartDate() < currentDate &&
                    (!endDate || endDate > currentDate);
            },
        );
    }
}
