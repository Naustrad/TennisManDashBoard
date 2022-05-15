import { Injectable } from "@nestjs/common";
import { PlayerRepository } from "../../repository/player.repository";
import { AddPlayerDto } from "./dto/addPlayerDto";
import { getAllPlayerDto } from "./dto/getAllPlayerDto";
import { PlayerDetailsDto } from "./dto/playerDetailsDto";

@Injectable()
export class PlayerService  {

    constructor(
        private _playerRepository: PlayerRepository
    ) {
        
    }

    async getAllPlayers(){
        let players = await this._playerRepository.find({relations : ['country']});

        //Map Entity Player to GetDto "If the map was more complexe we may need mapper class"
        let playersGeneral = players.map(player => new getAllPlayerDto(player));

        return playersGeneral.sort( (x,y) =>x.rank-y.rank );
    }


    async getPlayerById(id : number){
        let player = await this._playerRepository.findOneOrFail(id,{relations : ['country']})
        return new PlayerDetailsDto(player);
        
    }


    async add(player:AddPlayerDto){
        return await this._playerRepository.save(player);
    }

    async addRange(players:AddPlayerDto[]){
        
        return await this._playerRepository.save(players);
    }


}