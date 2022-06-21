import EmpM from "../Model/Empleado";
import EmpEmailM from "../Model/Email";
import EmpTelefonoM from "../Model/Telefono";

import MessageController from "../Helper/MessageController";
import { EmpleadoI,EmailEmpleadoI,TelefonoEmpleadoI } from "../Interfaces/Empleado";
import {Request,Response} from "express";
import date from 'date-and-time'


class EmpleadosController{

    public async NewEmpleado(req:Request,res:Response){
        const {apellidos,nombres,identificacion,tipoIdentificacion}:EmpleadoI = req.body;
        const fecha_ingreso = date.format(new Date(),'YYYY-MM-DD HH:mm');
        await EmpM.create({apellidos,nombres,identificacion,tipoIdentificacion,fecha_ingreso});
        return MessageController.Success(req,res,"Empleado Creado Correctamente",201);
    }

    public async GetAllEmpleado(req:Request,res:Response){
        const empleados = await EmpM.findAll();
        if(empleados.length==0){
            return MessageController.Error(req,res,"No Exiten Aun Empleados",404);
        }
        return MessageController.Success(req,res,empleados,200);
    }
    
    public async GetEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const empleado = await EmpM.findByPk(id);
        if(!empleado){
            return MessageController.Error(req,res,"No Se Encontro El Empleado",404);
        }
        MessageController.Success(req,res,empleado,200)
    }
    
    public async DeleteEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const empleado = await EmpM.findByPk(id);
        if(!empleado){
            return MessageController.Error(req,res,"No Se Encontro El Empleado",404);
        }
        empleado.destroy();
        MessageController.Success(req,res,"Eliminado Correctamente",200)
    }

    public async UpdateEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const { id:id_empleado, fecha_ingreso , ...obj } = req.body;
        const empleado = await EmpM.findByPk(id);
        if(!empleado){
            return MessageController.Error(req,res,"No Se Encontro El Empleado",404);
        }
        await empleado.update(obj);
        MessageController.Success(req,res,empleado,200)
    }





    public async GetTelefonoEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const TelefonoEmpleado = await EmpTelefonoM.findAll({
            where:{
                personaId:id
            }
        });
        if(TelefonoEmpleado.length==0){
            return MessageController.Error(req,res,"No Se Encontro Telefonos al Empleado",404);
        }
        MessageController.Success(req,res,TelefonoEmpleado,200);
    }

    public async NewTelefonoEmpleado(req:Request,res:Response){
        const {Tipo, indicativo,numero,personaId }:TelefonoEmpleadoI = req.body;
        const telefono = await EmpTelefonoM.create({Tipo, indicativo,numero,personaId },{isNewRecord:true});
        return MessageController.Success(req,res,telefono,201);
    }

    public async DeleteTelefonoEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const telefono = await EmpTelefonoM.findByPk(id);
        console.log(telefono);
        if(!telefono){
            return MessageController.Error(req,res,"No Se Encontro El telefono",404);
        }
        telefono.destroy();
        MessageController.Success(req,res,"Eliminado Correctamente",200)
    }





    public async GetEmailEmpleado(req:Request,res:Response){

    }

    public async NewEmailEmpleado(req:Request,res:Response){
        
    }

    public async DeleteEmailEmpleado(req:Request,res:Response){
        const { id } = req.params;
        const email = await EmpEmailM.findByPk(id);
        if(!email){
            return MessageController.Error(req,res,"No Se Encontro El Empleado",404);
        }
        await email.destroy();
        MessageController.Success(req,res,"Eliminado correctamente",200);
    }
}


export default new EmpleadosController();