import {Request,Response} from "express";
class MessageController{
    public Success(req:Request,res:Response,Data:String|object,status:number=200){
        return res.status(status).json({
            "ok":true,
            "body":Data,
        })
    } 

    public Error(req:Request,res:Response,Error:String,status:number=400){
        return res.status(status).json({
            "ok":true,
            "body":Error,
        })
    } 

}

export default new MessageController();