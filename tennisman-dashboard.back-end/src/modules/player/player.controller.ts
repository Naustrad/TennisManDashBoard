import { Body, Controller,Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { response } from 'express';
import { EntityNotFoundError } from 'typeorm';
import { AddPlayerDto } from './dto/addPlayerDto';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {

    constructor(private readonly playerService:PlayerService) {}

    //Get all player general data check getAllPlayerDto for more details
    @Get()
    @HttpCode(200)
    async getAll(){
        try {
            return await this.playerService.getAllPlayers();
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

    //Get a Player Details by his Id
    @Get('/:id')
    @HttpCode(200)
    async getById(@Param('id',ParseIntPipe) id : number){
        try {
            return await this.playerService.getPlayerById(id);
        } catch (error) {
            if(error instanceof EntityNotFoundError)
                throw new HttpException('Player not found',HttpStatus.NOT_FOUND)
            else
                throw new HttpException('Unknown Error',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //Add One player Check addPlayerDto for more details
    @Post()
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    async add(@Body() player:AddPlayerDto){

        try {
            return await this.playerService.add(player);
        } catch (error) {
            return response.status(500).send(error);
        }
        
    }


    //Add many players Check addPlayerDto for more details
    @Post('/addRange')
    @HttpCode(201)
    async addRange(@Body() players){
        
        try {
            return await this.playerService.addRange(players.players);
        } catch (error) {
            return response.status(500).send(error);
        }
        
    }



    
}
