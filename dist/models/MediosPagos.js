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
const MediosPagos = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "The name is required"],
    },
    tipo: {
        type: String,
        required: [true, "the tipi is required"],
        enum: ['DEBITO', 'CREDITO']
    },
    estado: {
        type: Boolean,
        default: true,
    }
});
MediosPagos.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, prestamo = __rest(_a, ["__v"]);
    return prestamo;
};
exports.default = (0, mongoose_1.model)('mediosPago', MediosPagos);
//# sourceMappingURL=MediosPagos.js.map