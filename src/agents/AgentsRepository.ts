import { Add, FindAll, FindById } from "../../src/standards/repositories/Repository";
import { Agent } from "./Agent";

export interface AgentsRepository extends Add<Agent>, FindAll<Agent>, FindById<Agent, string> {
}
