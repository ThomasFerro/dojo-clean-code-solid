import { Agent } from "../../src/agents/Agent";
import { InMemoryBackedMissionsRepository } from "../../src/missions/backedMissions/InMemoryBackedMissionsRepository";
import { InvalidMission } from "../../src/missions/errors/InvalidMission";
import { MissionConflict } from "../../src/missions/errors/MissionsConflict";
import { InMemoryMissionsRepository } from "../../src/missions/InMemoryMissionsRepository";
import { Mission } from "../../src/missions/Mission";
import { MissionsRepository } from "../../src/missions/MissionsRepository";
import { MissionsService } from "../../src/missions/MissionsService";

describe("missions", () => {
    let missionsRepository: InMemoryMissionsRepository;
    let missionsService: MissionsService;

    let solidSnake: Agent;
    let nakedSnake: Agent;
    let shadowMosesMission: Mission;
    let zanzibarLandMission: Mission;
    let dremuchijMission: Mission;
    let missions: Mission[];

    beforeEach(async () => {
        solidSnake = new Agent("solid-snake");
        nakedSnake = new Agent("naked-snake");
        shadowMosesMission = new Mission("shadow-moses-island", "Shadow Moses Island", solidSnake);
        shadowMosesMission.setEndDate(new Date().getTime());
        zanzibarLandMission = new Mission("zanzibar-land", "Zanzibar Land", solidSnake);
        dremuchijMission = new Mission("dremuchij", "Dremuchij", nakedSnake);
        missions = [
            shadowMosesMission,
            zanzibarLandMission,
        ];

        missionsRepository = new InMemoryMissionsRepository();
        missions.forEach(async (mission) => await missionsRepository.add(mission));
        missionsService = new MissionsService(missionsRepository);
    });

    describe("data", () => {
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

            expect(await missionsService.getAgentCurrentMission("solid-snake")).toEqual(zanzibarLandMission);
        });

        it("should not provide any information if the agent has no current mission", async () => {
            zanzibarLandMission.setEndDate(new Date().getTime() - 1000);
            expect(await missionsService.getAgentCurrentMission("solid-snake")).toBeUndefined();
        });

        it("should create a new mission with the provided informations", async () => {
            await missionsService.addMission(dremuchijMission);

            expect(await missionsService.getAgentMissions("naked-snake")).toEqual([
                dremuchijMission,
            ]);
        });

        it("should not be able to create an invalid mission", async () => {
            const tselinoyarskMission = new Mission(
                "",
                "Tselinoyarsk",
                nakedSnake,
            );

            await expect(missionsService.addMission(tselinoyarskMission))
                .rejects.toEqual(new InvalidMission(tselinoyarskMission));

        });

        it("should not be able to create a mission within the same period", async () => {
            const tselinoyarskMission = new Mission(
                "tselinoyarsk",
                "Tselinoyarsk",
                nakedSnake,
                dremuchijMission.getStartDate(),
            );
            tselinoyarskMission.setEndDate(new Date().getTime());

            await missionsService.addMission(dremuchijMission);

            await expect(missionsService.addMission(tselinoyarskMission))
                .rejects.toEqual(new MissionConflict(tselinoyarskMission));
        });
    });
});
