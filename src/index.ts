import dotenv from 'dotenv';
import app from './app';
import Database from "./Database/Mysql";
import { config } from "./config";


const main = async ()=>{
    try {
        app.listen(config.PORT || 3000,()=>{
            console.log("Server running on ",config.PORT || 3000);
        });    
    } catch (error) {
        console.log(error);    
    }
    
}

main();