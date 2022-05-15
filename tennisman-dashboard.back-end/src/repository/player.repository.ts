import { Player } from "../entities/player.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player>{

}