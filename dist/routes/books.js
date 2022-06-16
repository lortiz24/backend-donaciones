"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_1 = require("../controllers/books");
const express_validator_1 = require("express-validator");
const db_validationBook_1 = require("../helpers/db-validationBook");
const validarCampos_1 = require("../middlewares/validarCampos");
const validadJWT_1 = require("../middlewares/validadJWT");
const validar_Roles_1 = require("../middlewares/validar-Roles");
const router = (0, express_1.Router)();
router.get('/', books_1.getBooks);
//router.get('/:id',    getUsuario );
router.post("/", [
    validadJWT_1.validadJWT,
    (0, validar_Roles_1.tieneRole)('ADMIN_ROLE'),
    (0, express_validator_1.check)('title', 'El titulo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('paginas', 'Las paginas son obligatorias').not().isEmpty(),
    (0, express_validator_1.check)('portada', 'La portada es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('genero', 'El genero es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('title').custom(db_validationBook_1.existeTitle),
    validarCampos_1.validarCampos
], books_1.createBook);
router.put('/:id', [
    validadJWT_1.validadJWT,
    (0, validar_Roles_1.tieneRole)('ADMIN_ROLE'),
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationBook_1.existeBookById),
    validarCampos_1.validarCampos
], books_1.updateBook);
router.delete('/:id', [
    validadJWT_1.validadJWT,
    (0, validar_Roles_1.tieneRole)('ADMIN_ROLE'),
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationBook_1.existeBookById),
    validarCampos_1.validarCampos
], books_1.deleteBook);
exports.default = router;
//# sourceMappingURL=books.js.map