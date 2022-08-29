"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Donantes_1 = require("../controllers/Donantes");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', Donantes_1.getDonantes);
router.get('/:id', Donantes_1.getDonante);
router.post("/", [
    (0, express_validator_1.check)('monto_donacion', 'El monto_donacion es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('tipo', 'El tipo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos_1.validarCampos
], Donantes_1.createDonantes);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonanteById),
    validarCampos_1.validarCampos
], Donantes_1.updateDonantes);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonanteById),
    validarCampos_1.validarCampos
], Donantes_1.deleteDonantes);
exports.default = router;
//# sourceMappingURL=donantes.js.map