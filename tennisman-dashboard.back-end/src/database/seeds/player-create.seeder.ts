import { Player, sex } from "../../entities/player.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Country } from "../../entities/country.entity";

export class PlayerCreateSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection.createQueryBuilder()
        .insert()
        .into(Country)
        .values(
            [
                {
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
                    "code": "SRB"
                },
                {
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
                    "code": "USA"
                },
                {
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Suisse.png",
                    "code": "SUI"
                },
                {
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Espagne.png",
                    "code": "ESP"
                }


            ]
        ).execute();
        await connection.createQueryBuilder()
        .insert()
        .into(Player)
        .values(
            [
                {
                    "id": 52,
                    "firstname": "Novak",
                    "lastname": "Djokovic",
                    "shortname": "N.DJO",
                    "sex": sex.M,
                    "country": {
                        "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
                        "code": "SRB"
                    },
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
                    "rank": 2,
                    "points": 2542,
                    "weight": 80000,
                    "height": 188,
                    "age": 31,
                    "last": [
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    "id": 95,
                    "firstname": "Venus",
                    "lastname": "Williams",
                    "shortname": "V.WIL",
                    "sex": sex.F,
                    "country": {
                        "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
                        "code": "USA"
                    },
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Venus.webp",
                    "rank": 52,
                    "points": 1105,
                    "weight": 74000,
                    "height": 185,
                    "age": 38,
                    "last": [
                        0,
                        1,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "id": 65,
                    "firstname": "Stan",
                    "lastname": "Wawrinka",
                    "shortname": "S.WAW",
                    "sex": sex.M,
                    "country": {
                        "picture": "https://data.latelier.co/training/tennis_stats/resources/Suisse.png",
                        "code": "SUI"
                    },
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Wawrinka.png",
                    "rank": 21,
                    "points": 1784,
                    "weight": 81000,
                    "height": 183,
                    "age": 33,
                    "last": [
                        1,
                        1,
                        1,
                        0,
                        1
                    ]
                },
                {
                    "id": 102,
                    "firstname": "Serena",
                    "lastname": "Williams",
                    "shortname": "S.WIL",
                    "sex": sex.F,
                    "country": {
                        "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
                        "code": "USA"
                    },
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Serena.png",
                    "rank": 10,
                    "points": 3521,
                    "weight": 72000,
                    "height": 175,
                    "age": 37,
                    "last": [
                        0,
                        1,
                        1,
                        1,
                        0
                    ]
                },
                {
                    "id": 17,
                    "firstname": "Rafael",
                    "lastname": "Nadal",
                    "shortname": "R.NAD",
                    "sex": sex.M,
                    "country": {
                        "picture": "https://data.latelier.co/training/tennis_stats/resources/Espagne.png",
                        "code": "ESP"
                    },
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/Nadal.png",
                    "rank": 1,
                    "points": 1982,
                    "weight": 85000,
                    "height": 185,
                    "age": 33,
                    "last": [
                        1,
                        0,
                        0,
                        0,
                        1
                    ]
                }
            ]
        ).execute();
    }
    
}