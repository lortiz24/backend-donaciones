"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = require("../controllers/Usuario");
const router = (0, express_1.Router)();
//router.get('/',       getUsuarios );
//router.get('/:id',    getUsuario );
router.post('/', Usuario_1.createUser);
//router.put('/:id',    putUsuario );
//router.delete('/:id', deleteUsuario );
exports.default = router;
//# sourceMappingURL=usuarios.js.map