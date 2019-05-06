import { Add, FindAll, FindById } from "../../src/standards/repositories/Repository";
import { Mission } from "./Mission";

export interface MissionsRepository extends
    Add<Mission>,
    FindAll<Mission>,
    FindById<Mission, string> {

    findByAgent(agentId: string): Promise<Mission[]>;
}
