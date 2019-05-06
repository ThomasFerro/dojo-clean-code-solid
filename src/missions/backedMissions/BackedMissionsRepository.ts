import { Add, FindAll, FindById } from "../../../src/standards/repositories/Repository";
import { BackedMission } from "./BackedMission";

export interface BackedMissionsRepository extends
    Add<BackedMission>,
    FindAll<BackedMission>,
    FindById<BackedMission, string> {

    findByAgent(agentId: string): Promise<BackedMission[]>;
    removeBackup(missionId: string, backupId: string): Promise<boolean>;
}
