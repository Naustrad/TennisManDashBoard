import { Country } from "../country/country.model";

export interface PlayerGeneral {
    id: number;

    firstname: string;

    lastname: string;

    picture: string;

    rank: number;

    points: number;

    countryCode: string;
}

export interface PlayerDetails {
    id: number;

    firstname: string;

    lastname: string;

    shortname: string;

    sex: string;

    picture: string;

    rank: number;

    points: number;

    height: number;

    weight: number;

    age: number;

    last: number[];
    
    country: Country;
}