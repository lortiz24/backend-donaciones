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
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "El titulo es requerido"],
    },
    autores: {
        type: Array,
        default: ['Desconocido']
    },
    editorial: {
        type: String,
        default: 'Independiente'
    },
    paginas: {
        type: String,
        required: [true, "Las paginas son requeridas"]
    },
    portada: {
        type: String,
        required: [true, "La portada es requerida"],
    },
    genero: {
        type: String,
        required: [true, "El genero es requerido"],
    },
    estado: {
        type: Boolean,
        default: true,
    }
});
BookSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, usuario = __rest(_a, ["__v"]);
    return usuario;
};
exports.default = (0, mongoose_1.model)('book', BookSchema);
//# sourceMappingURL=books.js.map