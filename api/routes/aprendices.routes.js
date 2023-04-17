// HTPP es un protocologo que permite las condiciones de comunicacion
// En la API usaremos los metodos get,post,put,delete de HTPP
// HTPP nos devolvera un codigo de respuesta(200 si la todo bn 400 si falla)
// las api siempre devuelven al cleinte uin codigo de estado y un json si todo sal bn con los datos
// request = solicitud , response= respuesta.
import { Router } from "express"
import {createAprendiz, deleteAprendiz, editAprendiz, getAprendices,getAprendiz} from "../controller/aprendices.controller.js";
const router = Router();
router.get("/aprendices",getAprendices);
router.get("/aprendices/:id",getAprendiz);
router.post("/aprendices",createAprendiz);
router.put("/aprendices/:id", editAprendiz);
router.delete("/aprendices/:id", deleteAprendiz);
export default router; 
