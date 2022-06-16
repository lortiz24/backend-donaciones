"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = require("../controllers/Usuario");
const express_validator_1 = require("express-validator");
const db_validationUser_1 = require("../helpers/db-validationUser");
const validarCampos_1 = require("../middlewares/validarCampos");
const validadJWT_1 = require("../middlewares/validadJWT");
const validar_Roles_1 = require("../middlewares/validar-Roles");
const router = (0, express_1.Router)();
router.get('/', Usuario_1.getUsers);
//router.get('/:id',    getUsuario );
router.post("/", [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('cedula', 'La cedula es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password es obligatorio y debe tener mas de 6 letras').isLength({ min: 6 }),
    (0, express_validator_1.check)('rol').custom(db_validationUser_1.esRolValido),
    (0, express_validator_1.check)('correo').custom(db_validationUser_1.emailExists),
    validarCampos_1.validarCampos
], Usuario_1.createUser);
router.put('/:id', [
    validadJWT_1.validadJWT,
    (0, validar_Roles_1.tieneRole)('ADMIN_ROLE'),
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationUser_1.existeUserById),
    (0, express_validator_1.check)('rol').custom(db_validationUser_1.esRolValido),
    validarCampos_1.validarCampos
], Usuario_1.updateUSer);
router.delete('/:id', [
    validadJWT_1.validadJWT,
    (0, validar_Roles_1.tieneRole)('ADMIN_ROLE'),
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validationUser_1.existeUserById),
    validarCampos_1.validarCampos
], Usuario_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuarios.js.map