import { Country } from "../../../entities/country.entity";

export class CountryManager{
    static getCountryWithBestWinRate(countries : Country[]):Country{

        let countryWithBestWinRate = new Country();
        let bestWinRate = 0;
        countries.forEach(country => {
            let winsStats = country.players.flat().map( player => player.last).flat();
            let totalWins = winsStats.reduce( (a,b) => a+b );
            let winRate = totalWins/winsStats.length;
            if(bestWinRate<winRate)
            {
                bestWinRate = winRate;
                countryWithBestWinRate = country;
            }
        });

        return countryWithBestWinRate;
    }
}