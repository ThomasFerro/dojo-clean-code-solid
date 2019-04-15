import { Mission } from "./Mission";

// TODO : Refacto to be a generic repo
export interface MissionsRepository {
    add(mission: Mission): Promise<boolean>;
    findAll(): Promise<Mission[]>;
    findById(missionId: string): Promise<Mission | undefined>;
    findByAgent(agentId: string): Promise<Mission[]>;
}
