import { Injectable } from "@nestjs/common";
import { CountryRepository } from "../../repository/country.repository";
import { PlayerRepository } from "../../repository/player.repository";
import { CountryManager } from "../country/manager/country.manager";
import { PlayerManager } from "../player/manager/player.manager";
import { StatisticsDto } from "./dto/statisticsDto";

@Injectable()
export class StatisticsService {
    /**
     *
     */
    constructor(private _playerRepository:PlayerRepository,private _countryRepository:CountryRepository) {
        
    }

    

    async getStats(){
        let countries = await this._countryRepository.find({relations : ['players']});

        let players = countries.map(country => country.players).flat();
        let statistics = new StatisticsDto(
            CountryManager.getCountryWithBestWinRate(countries),
            PlayerManager.getAvgBMI(players),
            PlayerManager.getPlayerMedianHeight(players)
        )
        
        return statistics
    }
}