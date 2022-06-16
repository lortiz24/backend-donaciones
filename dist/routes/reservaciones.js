"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservaciones_1 = require("../controllers/reservaciones");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const db_validationBook_1 = require("../helpers/db-validationBook");
const db_validationUser_1 = require("../helpers/db-validationUser");
const db_validationReservaciones_1 = require("../helpers/db-validationReservaciones");
const router = (0, express_1.Router)();
router.get('/', [
    (0, express_validator_1.query)('resolucion').custom(db_validationReservaciones_1.resolucionValido),
    validarCampos_1.validarCampos
], reservaciones_1.getReservaciones);
//router.get('/:id',    getUsuario );
router.post("/", [
    (0, express_validator_1.check)('fechaReservacion', 'La fechaReservacion es requerida').notEmpty(),
    (0, express_validator_1.check)('fechaReservacion', 'La fechaReservacion no es una fecha valida').isDate(),
    (0, express_validator_1.check)('lector', 'El id de lector es requerida').notEmpty(),
    (0, express_validator_1.check)('lector', 'El id de lector no es un id valido').isMongoId(),
    (0, express_validator_1.check)('lector').custom(db_validationUser_1.existeUserById),
    (0, express_validator_1.check)('book', 'El id de book es requerida').notEmpty(),
    (0, express_validator_1.check)('book', 'El id de book no es un id valido').isMongoId(),
    (0, express_validator_1.check)('book').custom(db_validationBook_1.existeBookById),
    validarCampos_1.validarCampos
], reservaciones_1.createReservacion);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], reservaciones_1.updateReservacion);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationReservaciones_1.existeReservacionById),
    validarCampos_1.validarCampos
], reservaciones_1.deleteReservacion);
exports.default = router;
//# sourceMappingURL=reservaciones.js.map