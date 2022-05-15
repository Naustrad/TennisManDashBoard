import { Player } from "../../../entities/player.entity";

export class getAllPlayerDto {
    constructor(player : Player) {
        this.id = player.id;
        this.firstname = player.firstname;
        this.lastname = player.lastname;
        this.picture = player.picture;
        this.rank = player.rank;
        this.points = player.points;
        this.countryCode = player.country?.code ;
    }

    id: number;

    firstname: string;

    lastname: string;

    picture: string;

    rank: number;

    points: number;

    countryCode: string;
}