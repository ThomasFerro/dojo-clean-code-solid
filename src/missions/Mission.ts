import { Agent } from "../agents/Agent";

export class Mission {
    private id: string;
    private name: string;
    private agent: Agent;
    private startDate: number;
    private endDate: number | undefined;

    constructor(id: string, name: string, agent: Agent, startDate?: number) {
        this.id = id;
        this.name = name;
        this.agent = agent;
        this.startDate = startDate || (new Date()).getTime();
    }

    public getId(): string {
        return this.id;
    }

    public getAgent(): Agent {
        return this.agent;
    }

    public getStartDate() {
        return this.startDate;
    }

    public setStartDate(startDate: number) {
        this.startDate = startDate;
    }

    public getEndDate() {
        return this.endDate;
    }

    public setEndDate(endDate: number) {
        this.endDate = endDate;
    }
}
