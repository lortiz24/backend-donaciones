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
exports.deleteReservacion = exports.updateMedioDePago = exports.createMedioDePago = exports.getMediosDePago = exports.getMediosDePagos = void 0;
const MediosPagos_1 = __importDefault(require("../models/MediosPagos"));
const getMediosDePagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reservaciones = yield MediosPagos_1.default.find({});
    res.status(200).send(reservaciones);
});
exports.getMediosDePagos = getMediosDePagos;
const getMediosDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const reservacion = yield MediosPagos_1.default.findById(id);
    res.status(200).send(reservacion);
});
exports.getMediosDePago = getMediosDePago;
const createMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, nombre } = req.body;
    const reservacion = new MediosPagos_1.default({ tipo, nombre });
    //Guardar en base de datos
    yield reservacion.save();
    res.status(201).send(reservacion);
});
exports.createMedioDePago = createMedioDePago;
const updateMedioDePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, tipo } = req.body;
    //Actualizar en base de datos
    const reservacion = yield MediosPagos_1.default.findByIdAndUpdate(id, { nombre, tipo });
    res.status(201).send(reservacion);
});
exports.updateMedioDePago = updateMedioDePago;
const deleteReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = yield MediosPagos_1.default.findByIdAndDelete(id);
    res.send(reservacion);
});
exports.deleteReservacion = deleteReservacion;
//# sourceMappingURL=MediosPagos.js.map