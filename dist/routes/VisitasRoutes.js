"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VisitasController_1 = require("../controllers/VisitasController");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const router = (0, express_1.Router)();
router.get('/', VisitasController_1.getVisitas);
router.post('/', [(0, express_validator_1.check)("ip").custom(Validaciones_db_1.existeVisitaById), validarCampos_1.validarCampos], VisitasController_1.createVisita);
exports.default = router;
//# sourceMappingURL=VisitasRoutes.js.map