import { Repository } from "../../../src/standards/repositories/Repository";
import { BackedMission } from "./BackedMission";

export interface BackedMissionsRepository extends Repository<BackedMission, string> {
    findByAgent(agentId: string): Promise<BackedMission[]>;
    removeBackup(missionId: string, backupId: string): Promise<boolean>;
}
