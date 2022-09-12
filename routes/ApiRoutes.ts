import { Router } from "express";
import { createProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../controllers/ProyectosControllers';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/', (req, res) => {
    res.json({
        donacionesRoute: {
            getDonaciones: "/api/visitas",
            getDonacion: "/api/visitas/:idDonacion",
            post: "/api/visitas",
            put: "/api/visitas/:idDonacion",
            delete: "/api/visitas/:idDonacion",

        },
        proyectosRoute: {
            getDonaciones: "/api/proyectos",
            getDonacion: "/api/proyectos/:idProyecto",
            post: "/api/proyectos",
            put: "/api/proyectos/:idProyecto",
            delete: "/api/proyectos/:idProyecto",

        },
        usuarioRoute: {
            getDonaciones: "/api/usuarios",
            getDonacion: "/api/usuarios:idUsuario",
            post: "/api/usuarios",
            put: "/api/usuarios/:idUsuario",
            delete: "/api/usuarios:idUsuario",

        },
        reportes: {
            candidadDonacionesByProyecto: "/cantidad_donaciones/:proyecto_id"
        }
    })
});

export default router;