import { Country } from "../src/entities/country.entity";
import { Player } from "../src/entities/player.entity";
import * as dotenv from "dotenv";
export = {
    type: 'mysql',

    host: dotenv.config().parsed.DATABASE_HOST || "",

    port: +dotenv.config().parsed.DATABASE_PORT || 3306,

    username: dotenv.config().parsed.DATABASE_USERNAME || '',

    password: dotenv.config().parsed.DATABASE_PASSWORD || '',

    database: dotenv.config().parsed.DATABASE_NAME || '',

    entities: [
      Country,
      Player 
    ],
    
    synchronize: true,

    migrations: [__dirname + '/../migrations'],
    cli : {
      migrationsDir: __dirname + '/../migrations'
    },

    extra: {
      charset : 'utf8mb4_unicode_ci'
    }
  }