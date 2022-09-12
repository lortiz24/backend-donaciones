"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
    });
});
exports.default = router;
//# sourceMappingURL=ApiRoutes.js.map