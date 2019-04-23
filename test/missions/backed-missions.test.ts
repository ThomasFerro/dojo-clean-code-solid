import { Agent } from "../../src/agents/Agent";
import { BackedMission } from "../../src/missions/backedMissions/BackedMission";
import { BackedMissionService } from "../../src/missions/backedMissions/BackedMissionService";
import { BackedMissionsRepository } from "../../src/missions/backedMissions/BackedMissionsRepository";
import { InMemoryBackedMissionsRepository } from "../../src/missions/backedMissions/InMemoryBackedMissionsRepository";

describe("backed missions", () => {
    let backedMissionRepository: BackedMissionsRepository;
    let backedMissionService: BackedMissionService;

    let backedMissions: BackedMission[];

    let solidSnake: Agent;
    let merylSilverburgh: Agent;
    let shadowMosesMission: BackedMission;

    beforeEach(async () => {
        solidSnake = new Agent("solid-snake");
        merylSilverburgh = new Agent("meryl-silverburgh");
        shadowMosesMission = new BackedMission(
            "shadow-moses-island",
            "Shadow Moses Island",
            solidSnake,
            [merylSilverburgh],
        );

        backedMissions = [
            shadowMosesMission,
        ];

        backedMissionRepository = new InMemoryBackedMissionsRepository();
        backedMissions.forEach(async (mission) => await backedMissionRepository.add(mission));
        backedMissionService = new BackedMissionService(backedMissionRepository);
    });

    it("should provide the list of all backed missions", async () => {
        expect(await backedMissionService.getAllMissions()).toEqual(backedMissions);
    });

    it("should provide the mission of an agent when he is a backup", async () => {
        expect(await backedMissionService.getAgentMissions("meryl-silverburgh")).toContain(shadowMosesMission);
    });

    it("should be able to remove a backup from a mission", async () => {
        await backedMissionService.removeBackupFromMission(shadowMosesMission, "meryl-silverburgh");

        const missionInformation: BackedMission | undefined
            = await backedMissionService.getBackedMissionInformation("shadow-moses-island");

        expect(missionInformation && missionInformation.getBackup()).not.toContain(merylSilverburgh);
    });
});
