"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
Usuario.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password } = _a, usuario = __rest(_a, ["__v", "password"]);
    return usuario;
};
exports.default = model('user', Usuario);
//# sourceMappingURL=Usuarios.js.map