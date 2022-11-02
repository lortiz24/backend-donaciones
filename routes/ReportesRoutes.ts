import { Router } from "express";
import {getCantidadProyectos,getCountPersonsDonacion,getEstadisticasVisitas,getMetricasProyectos } from '../controllers/ReportesController';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/cantidad_donaciones/:proyecto_id', getCantidadProyectos);
router.get('/metricas/estadisticasGenerales', getCountPersonsDonacion);
router.get('/metricas/getEstadisticasVisitas', getEstadisticasVisitas);
router.get('/metricas/:proyecto_id', getMetricasProyectos);




export default router;