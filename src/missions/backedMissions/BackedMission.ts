import { Agent } from "../../../src/agents/Agent";
import { Mission } from "../Mission";

export class BackedMission extends Mission {
    private backup: Agent[];

    constructor(id: string, name: string, agent: Agent, backup: Agent[], startDate?: number) {
        super(id, name, agent, startDate);
        this.backup = backup;
    }

    public getBackup(): Agent[] {
        return this.backup;
    }

    public setBackup(backup: Agent[]) {
        this.backup = backup;
    }
}
