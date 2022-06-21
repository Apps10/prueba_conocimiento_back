import { Router  } from "express";
import EmpCon from "../Controller/Empleados";

const router = Router();

router.post("/",EmpCon.NewEmpleado);
router.get("/",EmpCon.GetAllEmpleado);
router.get("/:id",EmpCon.GetEmpleado);
router.put("/:id",EmpCon.UpdateEmpleado);
router.delete("/:id",EmpCon.DeleteEmpleado);

router.post("/telefono",EmpCon.NewTelefonoEmpleado);
router.delete("/telefono/:id",EmpCon.DeleteTelefonoEmpleado);
router.get("/telefono/:id",EmpCon.GetTelefonoEmpleado);

router.post("/email",EmpCon.NewEmailEmpleado);
router.delete("/email/:id",EmpCon.NewEmailEmpleado);
router.get("/email/:id",EmpCon.DeleteEmailEmpleado);

export default router;



