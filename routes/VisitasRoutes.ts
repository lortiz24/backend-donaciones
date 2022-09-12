import { Router } from "express";
import {createVisita,getVisitas } from '../controllers/VisitasController';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/', getVisitas);
router.post('/', createVisita);




export default router;