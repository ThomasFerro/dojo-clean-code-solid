import { Repository } from "../../src/standards/repositories/Repository";
import { Mission } from "./Mission";

export interface MissionsRepository extends Repository<Mission, string> {
    findByAgent(agentId: string): Promise<Mission[]>;
}
