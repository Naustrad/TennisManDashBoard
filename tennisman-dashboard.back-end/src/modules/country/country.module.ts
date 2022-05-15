import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  controllers: [CountryController],
  imports : [TypeOrmModule.forFeature([])],
  providers : [CountryService]
})
export class CountryModule {}
