import Config from "../../utils/Config"
import client from "../../utils/HttpClient"
import { PlayerDetails, PlayerGeneral } from "./player.model"

const baseURL = Config.serverAddress+'players';

const playerRoutes = {
    getAllPlayers : '/',
    getPlayerById : '/:id'
}

export const getAllPlayers = async ():Promise<PlayerGeneral[]> =>{
    const url = baseURL+playerRoutes.getAllPlayers;
    let results : PlayerGeneral[]=[]
    await client.get<PlayerGeneral[]>(url)
            .then((res)=>{
                return (results = res.data);
            }).catch(err=>{
                console.log(err)
            });
    return results;
}

export const getPlayerById = async (id:number):Promise<PlayerDetails> =>{
    const url = baseURL+playerRoutes.getPlayerById.replace(':id',id.toString());
    let results : PlayerDetails = {
        id: -1,
        firstname: "",
        lastname: "",
        shortname: "",
        sex: "",
        picture: "",
        rank: -1,
        points: -1,
        height: -1,
        weight: -1,
        age: -1,
        last: [],
        country: {
            code : '',
            picture : ''
        }
    }
    await client.get<PlayerDetails>(url)
            .then((res)=>{
                return (results = res.data)
            }).catch(err=>{
                console.log(err)
            });
    return results;
}