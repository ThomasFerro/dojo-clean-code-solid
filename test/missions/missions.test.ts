import { Agent } from "../../src/agents/Agent";
import { InMemoryMissionsRepository } from "../../src/missions/InMemoryMissionsRepository";
import { Mission } from "../../src/missions/Mission";
import { MissionsRepository } from "../../src/missions/MissionsRepository";
import { MissionsService } from "../../src/missions/MissionsService";

describe("missions", () => {
    let missionsRepository: MissionsRepository;
    let missionsService: MissionsService;

    let solidSnake: Agent;
    let shadowMosesMission: Mission;
    let zanzibarLandMission: Mission;
    let missions: Mission[];

    beforeEach(async () => {
        solidSnake = new Agent("solid-snake");
        shadowMosesMission = new Mission("shadow-moses-island", "Shadow Moses Island", solidSnake);
        shadowMosesMission.setEndDate(new Date().getTime());
        zanzibarLandMission = new Mission("zanzibar-land", "Zanzibar Land", solidSnake);
        missions = [
            shadowMosesMission,
            zanzibarLandMission,
        ];

        missionsRepository = new InMemoryMissionsRepository();
        missions.forEach(async (mission) => await missionsRepository.add(mission));
        missionsService = new MissionsService(missionsRepository);
    });

    it("should provide the list of all missions", async () => {
        expect(await missionsService.getAllMissions()).toEqual(missions);
    });

    it("should provide the information of a specific mission", async () => {
        expect(await missionsService.getMissionInformation("shadow-moses-island")).toEqual(shadowMosesMission);
    });

    it("should provide the list of missions assigned to an agent", async () => {
        expect(await missionsService.getAgentMissions("solid-snake")).toEqual(missions);
    });

    it("should provide the information about an agent's current mission", async () => {
        zanzibarLandMission.setStartDate(new Date().getTime() - 10000);
        zanzibarLandMission.setEndDate(new Date().getTime() + 10000);

        expect(await missionsService.getAgentCurrentMission("solid-snake")).toEqual(zanzibarLandMission);
    });

    it("should not provide any information if the agent has no current mission", async () => {
        zanzibarLandMission.setEndDate(new Date().getTime());
        expect(await missionsService.getAgentCurrentMission("solid-snake")).toBeUndefined();
    });
});
