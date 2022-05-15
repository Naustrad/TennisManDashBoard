import { Country } from "../../../entities/country.entity";

export class StatisticsDto {

    constructor(countryWithMostWinRation: Country, playersAvgBMI:number, playersMedianHeight:number) {

        this.countryWithMostWinRation = new Country();
        this.countryWithMostWinRation.code = countryWithMostWinRation.code;
        this.countryWithMostWinRation.picture = countryWithMostWinRation.picture;
        this.playersAvgBMI = playersAvgBMI;
        this.playersMedianHeight = playersMedianHeight;

    }
    countryWithMostWinRation: Country

    playersAvgBMI: number

    playersMedianHeight: number
}