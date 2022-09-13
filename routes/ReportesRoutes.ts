import { Router } from "express";
import {getCantidadProyectos,getMetricasProyectos } from '../controllers/ReportesController';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/cantidad_donaciones/:proyecto_id', getCantidadProyectos);
router.get('/metricas/:proyecto_id', getMetricasProyectos);




export default router;