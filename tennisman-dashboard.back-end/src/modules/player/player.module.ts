import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from '../../repository/player.repository';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
    controllers : [PlayerController],
    imports : [TypeOrmModule.forFeature([PlayerRepository])],
    providers : [PlayerService]

})
export class PlayerModule {}
