import axios from "axios";
import Config from "./Config";

const client = axios.create({
    baseURL:Config.serverAddress
})

client.interceptors.request.use((config)=>{
    return config;
},err=>{
    return Promise.reject(err)
})

export default client;