import { Router  } from "express";
import EmpleadoR from "./Empleado";
const router = Router();

router.use("/empleado",EmpleadoR)
/*router.use('*',(req,res)=>{
    return res.send("page not found");
});*/



export default router;