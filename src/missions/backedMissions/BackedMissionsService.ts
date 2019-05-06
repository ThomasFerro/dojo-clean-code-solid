import { InvalidMission } from "../errors/InvalidMission";
import { MissionConflict } from "../errors/MissionsConflict";
import { hasAlreadyAMissionWithinThisPeriod, isMissionValid } from "../MissionPolicies";
import { MissionsService } from "../MissionsService";
import { BackedMission } from "./BackedMission";
import { hasBackup, isAgentInBackup } from "./BackedMissionsHelpers";
import { BackedMissionsRepository } from "./BackedMissionsRepository";

export class BackedMissionsService extends MissionsService {
    private backedMissionsRepository: BackedMissionsRepository;

    constructor(backedMissionsRepository: BackedMissionsRepository) {
        super(backedMissionsRepository);

        this.backedMissionsRepository = backedMissionsRepository;
    }

    public async addMission(mission: BackedMission): Promise<boolean> {
        if (!hasBackup(mission)) {
            throw new InvalidMission(mission);
        }

        return super.addMission(mission);
    }

    public async getBackedMissionInformation(missionId: string): Promise<BackedMission | undefined> {
        return await this.backedMissionsRepository.findById(missionId);
    }

    public async removeBackupFromMission(mission: BackedMission, backupId: string): Promise<boolean> {
        if (!isAgentInBackup(backupId, mission)) {
            return false;
        }

        return this.backedMissionsRepository.removeBackup(mission.getId(), backupId);
    }
}