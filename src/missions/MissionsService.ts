import { isAgentValid } from "../agents/AgentPolicies";
import { InvalidMission } from "./errors/InvalidMission";
import { MissionConflict } from "./errors/MissionsConflict";
import { InMemoryMissionsRepository } from "./InMemoryMissionsRepository";
import { Mission } from "./Mission";
import { getMissionWithinPeriod } from "./MissionsHelpers";

export class MissionsService {
    private missionsRepository: InMemoryMissionsRepository;

    constructor(missionsRepository: InMemoryMissionsRepository) {
        this.missionsRepository = missionsRepository;
    }

    public async addMission(mission: Mission): Promise<boolean> {
        if (!mission
            || !mission.getId() ||
            !isAgentValid(mission.getAgent()) ||
            !mission.getStartDate()
        ) {
            throw new InvalidMission(mission);
        }

        if (getMissionWithinPeriod(
            await this.getAgentMissions(mission.getAgent().getId()),
            mission.getStartDate(),
            mission.getEndDate(),
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
