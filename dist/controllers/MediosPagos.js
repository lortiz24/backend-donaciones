"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReservacion = exports.updateReservacion = exports.createReservacion = exports.getMediosDePago = void 0;
const MediosPagos_1 = __importDefault(require("../models/MediosPagos"));
const getMediosDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reservaciones = MediosPagos_1.default.find({});
    res.send(reservaciones);
});
exports.getMediosDePago = getMediosDePago;
const createReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, nombre } = req.body;
    const reservacion = new MediosPagos_1.default({ tipo, nombre });
    //Guardar en base de datos
    yield reservacion.save();
    res.json({ reservacion });
});
exports.createReservacion = createReservacion;
const updateReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, tipo } = req.body;
    //Actualizar en base de datos
    const reservacion = MediosPagos_1.default.findByIdAndUpdate(id, { nombre, tipo });
    res.json({
        reservacion
    });
});
exports.updateReservacion = updateReservacion;
const deleteReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = MediosPagos_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ reservacion });
});
exports.deleteReservacion = deleteReservacion;
//# sourceMappingURL=MediosPagos.js.map