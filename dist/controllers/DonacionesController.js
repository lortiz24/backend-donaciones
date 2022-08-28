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
exports.deleteDonacion = exports.updateDonacion = exports.createDonacion = exports.getDonacion = exports.getDonaciones = void 0;
const DonacionesModels_1 = __importDefault(require("../models/DonacionesModels"));
const getDonaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Donaciones = yield DonacionesModels_1.default.find({});
    res.status(200).send(Donaciones);
});
exports.getDonaciones = getDonaciones;
const getDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const Donacion = yield DonacionesModels_1.default.findById(id);
    res.status(200).send(Donacion);
});
exports.getDonacion = getDonacion;
const createDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { donante, proyecto, fecha_inicio, fecha_objetivo, monto_meta, medio_pago } = req.body;
    const Donacion = new DonacionesModels_1.default({ donante, proyecto, fecha_inicio, medio_pago });
    if (fecha_objetivo !== undefined)
        Donacion.fecha_objetivo = fecha_objetivo;
    if (monto_meta !== undefined)
        Donacion.monto_meta = monto_meta;
    //Guardar en base de datos
    yield Donacion.save();
    res.status(201).send(Donacion);
});
exports.createDonacion = createDonacion;
const updateDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { donante, proyecto, fecha_inicio, fecha_objetivo, monto_meta } = req.body;
    let updateProyect = {};
    if (donante !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { donante });
    if (proyecto !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { proyecto });
    if (fecha_inicio !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { fecha_inicio });
    if (fecha_objetivo !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { fecha_objetivo });
    if (monto_meta !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { monto_meta });
    //Actualizar en base de datos
    const Donacion = yield DonacionesModels_1.default.findByIdAndUpdate(id, updateProyect);
    res.status(201).send(Donacion);
});
exports.updateDonacion = updateDonacion;
const deleteDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const Donacion = yield DonacionesModels_1.default.findByIdAndDelete(id);
    res.send(Donacion);
});
exports.deleteDonacion = deleteDonacion;
//# sourceMappingURL=DonacionesController.js.map