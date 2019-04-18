import { Repository } from "../../src/standards/repositories/Repository";
import { Agent } from "./Agent";

export interface AgentsRepository extends Repository<Agent, string> {
}
