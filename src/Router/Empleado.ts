import { Router  } from "express";
import EmpCon from "../Controller/Empleados";
import { body } from "express-validator";
import { ValidateRequest } from "../Middlewares/Validator";
const router = Router();


router.post("/",[
    body("nombres","El Parametro es Obligatorio").bail().notEmpty(),
    body("nombres","Tamaño Maximo Superado").bail().isLength({max:255}),

    body("apellidos","El Parametro es Obligatorio").bail().notEmpty(),
    body("apellidos","Tamaño Maximo Superado").bail().isLength({max:255}),

    body("tipoIdentificacion","El Parametro es Obligatorio").notEmpty(),
    body("tipoIdentificacion","Seleccione Un tipoIdentificacion Valido").isIn(["cc","nit"]),

    body("identificacion","El Parametro es Obligatorio").notEmpty(),
    body("identificacion","Tamaño Maximo Superado").bail().isLength({max:20}),
    ValidateRequest
],EmpCon.NewEmpleado);

router.get("/",EmpCon.GetAllEmpleado);

router.get("/:id",EmpCon.GetEmpleado);

router.put("/:id",[
    body("nombres","El Parametro es Obligatorio").bail().notEmpty(),
    body("nombres","Tamaño Maximo Superado").bail().isLength({max:255}),

    body("apellidos","El Parametro es Obligatorio").bail().notEmpty(),
    body("apellidos","Tamaño Maximo Superado").bail().isLength({max:255}),

    body("tipoIdentificacion","El Parametro es Obligatorio").notEmpty(),
    body("tipoIdentificacion","Seleccione Un tipoIdentificacion Valido").isIn(["cc","nit"]),

    body("identificacion","El Parametro es Obligatorio").notEmpty(),
    body("identificacion","Tamaño Maximo Superado").bail().isLength({max:20}),
    ValidateRequest
],EmpCon.UpdateEmpleado);

router.delete("/:id",EmpCon.DeleteEmpleado);




router.post("/telefono",[
    body("Tipo","El Parametro es Obligatorio").notEmpty(),
    body("Tipo","Seleccione Un tipoIdentificacion Valido").isIn(["cell","tel"]),
    
    body("numero","El Parametro es Obligatorio").notEmpty(),
    body("numero","El Numero es Invalido").isNumeric(),
    body("numero","tamaño maximo superado").isLength({max:20}),

    body("indicativo","El Parametro es Obligatorio").bail().notEmpty(),
    body("indicativo","Tamaño Maximo Superado").bail().isLength({max:10}),
    ValidateRequest
],EmpCon.NewTelefonoEmpleado);

router.delete("/telefono/:id",[
    ValidateRequest
],EmpCon.DeleteTelefonoEmpleado);

router.get("/telefono/:id",[
    ValidateRequest
],EmpCon.GetTelefonoEmpleado);




router.post("/email",[
    body("email","El Parametro es Obligatorio").notEmpty(),
    body("email","email invalido").isEmail(),
    body("email","tamaño maximo superado").isLength({max:255}),
    
    body("personaId","El Parametro es Obligatorio").notEmpty(),
    body("personaId","El Numero es Invalido").isNumeric(),
    ValidateRequest
],EmpCon.NewEmailEmpleado);

router.delete("/email/:id",[
    ValidateRequest
],EmpCon.DeleteEmailEmpleado);

router.get("/email/:id",[
    ValidateRequest
],EmpCon.GetEmailEmpleado);

export default router;



