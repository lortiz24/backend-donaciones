"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const Usuario = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerido"],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    google: {
        type: Boolean,
        default: false,
    },
    estado: {
        type: Boolean,
        default: true,
    },
});
exports.default = model('user', Usuario);
//# sourceMappingURL=Usuarios.js.map