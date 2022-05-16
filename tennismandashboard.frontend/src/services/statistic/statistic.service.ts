import Config from "../../utils/Config";
import client from "../../utils/HttpClient";
import { statistics } from "./statistic.model";

const baseURL = Config.serverAddress+'statistics';

const statisticsApiRoutes = {
    get : '/',
}


export const getStatistic = async () : Promise<statistics> =>{
    const url = baseURL+statisticsApiRoutes.get;
    let results : statistics = {
        countryWithMostWinRation : {
            code : '',
            picture : ''
        },
        playersAvgBMI : -1,
        playersMedianHeight:-1
    };
    await client.get<statistics>(url)
            .then((res)=>{
                return (results = res.data);
            }).catch(err=>{
                console.log(err)
            });
    return results;
}