"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const DonacionesController_1 = require("../controllers/DonacionesController");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', DonacionesController_1.getDonaciones);
router.get('/:id', DonacionesController_1.getDonacion);
router.post("/", [
    (0, express_validator_1.check)('proyecto', 'El proyecto no es valido').isMongoId(),
    (0, express_validator_1.check)('donante', 'El donante no es valido').isMongoId(),
    (0, express_validator_1.check)('medio_pago', 'El medio_pago es requerido').isEmpty(),
    (0, express_validator_1.check)('fecha_inicio', 'La fecha_inicio es requerida').isEmpty(),
    validarCampos_1.validarCampos
], DonacionesController_1.createDonacion);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], DonacionesController_1.updateDonacion);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], DonacionesController_1.deleteDonacion);
exports.default = router;
//# sourceMappingURL=DonacionesRoutes.js.map