"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MediosPagos_1 = require("../controllers/MediosPagos");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const db_validationReservaciones_1 = require("../helpers/db-validationReservaciones");
const router = (0, express_1.Router)();
router.get('/', MediosPagos_1.getMediosDePagos);
router.get('/:id', MediosPagos_1.getMediosDePago);
router.post("/", MediosPagos_1.createReservacion);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], MediosPagos_1.updateReservacion);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], MediosPagos_1.deleteReservacion);
exports.default = router;
//# sourceMappingURL=MediosPagos.js.map