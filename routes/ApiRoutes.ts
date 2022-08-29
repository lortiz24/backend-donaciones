import { Router } from "express";
import { createProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../controllers/ProyectosControllers';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/', (req, res) => {
    res.json({
        donanteRoute:'/api/donante',
        proyectosRoute:'/api/proyectos',
        donacionesRoute:'/api/donaciones',
    })
});

export default router;