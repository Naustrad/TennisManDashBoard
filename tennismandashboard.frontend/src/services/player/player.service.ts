import Config from "../../utils/Config"
import client from "../../utils/HttpClient"
import { PlayerGeneral } from "./player.model"

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