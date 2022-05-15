import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig }  from 'config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './modules/player/player.module';
import { Connection } from 'typeorm'
import { StatisticsModule } from './modules/statistics/statistics.module';
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [
    PlayerModule,
    StatisticsModule,
    CountryModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(
      databaseConfig
    )
],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
