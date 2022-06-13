"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = require("../controllers/Usuario");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/', Usuario_1.getUsers);
//router.get('/:id',    getUsuario );
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio y debe tener mas de 6 letras').isLength({ min: 6 }),
], Usuario_1.createUser);
//router.put('/:id',    putUsuario );
router.delete('/:id', [], Usuario_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuarios.js.map