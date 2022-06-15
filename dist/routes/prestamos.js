"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamos_1 = require("../controllers/prestamos");
const express_validator_1 = require("express-validator");
const db_validationPrestamos_1 = require("../helpers/db-validationPrestamos");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', prestamos_1.getPrestamos);
//router.get('/:id',    getUsuario );
router.post("/", [
    (0, express_validator_1.check)('fechaI', 'La fechaI es requerida').notEmpty(),
    (0, express_validator_1.check)('fechaI', 'La fechaI no es una fecha valida').isDate(),
    (0, express_validator_1.check)('fechaF', 'La fechaF es requerida').notEmpty(),
    (0, express_validator_1.check)('fechaF', 'La fechaF no es una fecha valida').isDate(),
    (0, express_validator_1.check)('lector', 'El id de lector es requerida').notEmpty(),
    (0, express_validator_1.check)('lector', 'El id de lector no es un id valido').isMongoId(),
    (0, express_validator_1.check)('book', 'El id de book es requerida').notEmpty(),
    (0, express_validator_1.check)('book', 'El id de book no es un id valido').isMongoId(),
    validarCampos_1.validarCampos
], prestamos_1.createPrestamos);
router.put('/:id', prestamos_1.updatePrestamos);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationPrestamos_1.existePrestamoById),
    validarCampos_1.validarCampos
], prestamos_1.deletePrestamos);
exports.default = router;
//# sourceMappingURL=prestamos.js.map