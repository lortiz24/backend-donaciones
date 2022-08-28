"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProyectosControllers_1 = require("../controllers/ProyectosControllers");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const db_validationReservaciones_1 = require("../helpers/db-validationReservaciones");
const router = (0, express_1.Router)();
router.get('/', ProyectosControllers_1.getProyectos);
router.get('/:id', ProyectosControllers_1.getProyecto);
router.post("/", ProyectosControllers_1.createProyecto);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], ProyectosControllers_1.updateProyecto);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], ProyectosControllers_1.deleteProyecto);
exports.default = router;
//# sourceMappingURL=ProyectosRoutes.js.map