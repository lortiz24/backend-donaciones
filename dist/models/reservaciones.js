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
const ReservacionSchema = new mongoose_1.Schema({
    fechaReservacion: {
        type: String,
        required: [true, "La fecha de prestamo es requerida"],
    },
    resolucion: {
        type: String,
        enum: ['Pendiente', 'Suspendido'],
        default: 'Pendiente'
    },
    prioridad: {
        type: String,
        default: '1'
    },
    lector: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "El id del usuario es requerido"]
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "book",
        required: [true, "El id del libro es requerido"]
    },
    estado: {
        type: Boolean,
        default: true,
    }
});
ReservacionSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, prestamo = __rest(_a, ["__v"]);
    return prestamo;
};
exports.default = (0, mongoose_1.model)('reservacione', ReservacionSchema);
//# sourceMappingURL=reservaciones.js.map