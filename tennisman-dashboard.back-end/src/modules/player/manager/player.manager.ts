import { Player } from "../../../entities/player.entity"

export class PlayerManager {


    static getAvgBMI(players : Player[]):number{
        return players.map(player => player.getBMI()).reduce((bmi1,bmi2)=>bmi1+bmi2)/players.length
    }

    static getPlayerMedianHeight(players : Player[]):number{
        let allPlayersHeight = players.map(player => player.height).sort((height1,height2) => height1-height2);
        let numberOfPlayers = allPlayersHeight.length;
        if(numberOfPlayers%2)
            return allPlayersHeight[(numberOfPlayers+1)/2]
        return (allPlayersHeight[(numberOfPlayers/2)]+allPlayersHeight[(numberOfPlayers/2)+1])/2
    }
}