import { MissionsService } from "../MissionsService";
import { BackedMission } from "./BackedMission";
import { isAgentInBackup } from "./BackedMissionsHelpers";
import { BackedMissionsRepository } from "./BackedMissionsRepository";

export class BackedMissionService extends MissionsService {
    private backedMissionsRepository: BackedMissionsRepository;

    constructor(backedMissionsRepository: BackedMissionsRepository) {
        super(backedMissionsRepository);

        this.backedMissionsRepository = backedMissionsRepository;
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
