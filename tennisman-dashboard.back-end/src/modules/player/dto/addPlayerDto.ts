import { IsNotEmpty, IsPositive } from "class-validator";
import { Country } from "../../../entities/country.entity";
import { sex } from "../../../entities/player.entity";

export class AddPlayerDto {

    id: number;

    @IsNotEmpty({   message: 'filed not found'})
    firstname: string;

    @IsNotEmpty({   message: 'filed not found'})
    lastname: string;

    @IsNotEmpty({   message: 'filed not found'})
    shortname: string;

    @IsNotEmpty({   message: 'filed not found'})
    sex: sex;

    @IsNotEmpty({   message: 'filed not found'})
    picture: string;

    @IsNotEmpty({   message: 'filed not found'})
    @IsPositive()
    rank: number;

    @IsNotEmpty({   message: 'filed not found'})
    @IsPositive()
    points: number;

    @IsNotEmpty({   message: 'filed not found'})
    @IsPositive()
    height: number;

    @IsNotEmpty({   message: 'filed not found'})
    @IsPositive()
    weight: number;

    @IsNotEmpty({   message: 'filed not found'})
    @IsPositive()
    age: number;

    @IsNotEmpty({   message: 'filed not found'})
    last: number[];

    @IsNotEmpty({   message: 'No country is set'})
    country: Country;
}