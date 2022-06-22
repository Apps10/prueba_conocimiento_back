import { validationResult } from "express-validator"
import { NextFunction, Request,Response } from "express"
import MC from '../Helper/MessageController'


export const ValidateRequest = (req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return MC.Error(req,res,JSON.parse(JSON.stringify(errors.array())),400);
    }
    next();
}