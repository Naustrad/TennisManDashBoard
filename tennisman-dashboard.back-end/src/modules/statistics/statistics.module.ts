import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from '../../repository/country.repository';
import { PlayerRepository } from '../../repository/player.repository';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

@Module({
    controllers : [StatisticsController],
    imports : [TypeOrmModule.forFeature([PlayerRepository,CountryRepository])],
    providers : [StatisticsService]

})
export class StatisticsModule {}
