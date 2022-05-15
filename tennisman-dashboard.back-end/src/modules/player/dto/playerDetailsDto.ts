import { Country } from "../../../entities/country.entity";
import { Player } from "../../../entities/player.entity";


export class PlayerDetailsDto {
    /**
     *
     */
    constructor(player:Player) {
        
        this.id = player.id;
        this.firstname = player.firstname;
        this.lastname = player.lastname;
        this.shortname = player.shortname;
        this.sex = player.sex;
        this.picture = player.picture;
        this.rank = player.rank;
        this.points = player.points;
        this.height = player.height;
        this.weight = player.weight;
        this.age = player.age;
        this.last = player.last;
        this.country = player.country;
        
    }
    
    id: number;

    firstname: string;

    lastname: string;

    shortname: string;

    sex: string;

    picture: string;

    rank: number;

    points: number;

    height: number;

    weight: number;

    age: number;

    last: number[];
    
    country: Country;
}

