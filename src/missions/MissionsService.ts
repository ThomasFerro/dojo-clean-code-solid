import { Mission } from "./Mission";
import { MissionConflict } from "./MissionConflict";
import { hasAlreadyAMissionWithinThisPeriod } from "./MissionPolicies";
import { getMissionWithinPeriod } from "./MissionsHelpers";
import { MissionsRepository } from "./MissionsRepository";

export class MissionsService {
    private missionsRepository: MissionsRepository;

    constructor(missionsRepository: MissionsRepository) {
        this.missionsRepository = missionsRepository;
    }

    public async addMission(mission: Mission): Promise<boolean> {
        // TODO : Validate mission

        if (hasAlreadyAMissionWithinThisPeriod(
            await this.getAgentMissions(mission.getAgent().getId()),
            mission,
        )) {
            throw new MissionConflict(mission);
        }

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
        const currentDate = (new Date()).getTime();
        return getMissionWithinPeriod(await this.getAgentMissions(agentId), currentDate, currentDate);
    }
}
