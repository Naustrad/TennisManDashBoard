import { Body, Controller,Get, HttpCode } from '@nestjs/common';
import { response } from 'express';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
    /**
     *
     */
    constructor(private statisticsService : StatisticsService) {
        
    }


    @Get()
    @HttpCode(200)
    async getStats(){
        try {
            return await this.statisticsService.getStats();
        } catch (error) {
            console.log(error);
            return response.status(500).send(error);
        }
    }

}