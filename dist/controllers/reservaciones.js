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
exports.deleteReservacion = exports.updateReservacion = exports.createReservacion = exports.getReservaciones = void 0;
const reservaciones_1 = __importDefault(require("../models/reservaciones"));
const getReservaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { desde = 0, page = 1, limit = 5, resolucion } = req.query;
    let query;
    if (resolucion) {
        query = { estado: true, resolucion };
    }
    else {
        query = { estado: true };
    }
    const [reservaciones, total] = yield Promise.all([reservaciones_1.default.
            find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            .populate({ path: 'lector', select: ['nombre', 'cedula', 'rol'] }).
            populate({ path: 'book', select: ['title', 'portada'] }).
            exec(),
        reservaciones_1.default.countDocuments(query)
    ]);
    res.json({ desde, limit, page, total, body: reservaciones });
});
exports.getReservaciones = getReservaciones;
const createReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fechaReservacion, lector, book } = req.body;
    //Validar un usuario no reserve el mismo libro
    //const reservacionesByLector = await Reservacion.find({ lector, book, estado: true })
    const [reservacionesByLector, cantReservas] = yield Promise.all([
        reservaciones_1.default.find({ lector, book, estado: true }),
        reservaciones_1.default.find({ book, estado: true })
    ]);
    if (reservacionesByLector.length !== 0) {
        return res.status(400).json({ msg: `Ya existe una reservacion del libro ${book} por el usuario: ${lector}` });
    }
    const reservacion = new reservaciones_1.default({ fechaReservacion, lector, book });
    //Establecer prioridad
    console.log(cantReservas.length + 1);
    reservacion.prioridad = cantReservas.length + 1;
    //Guardar en base de datos
    yield reservacion.save();
    res.json({ reservacion });
});
exports.createReservacion = createReservacion;
const updateReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { resolucion } = req.body;
    //Actualizar en base de datos
    const reservacion = yield reservaciones_1.default.findByIdAndUpdate(id, { resolucion });
    res.json({
        reservacion
    });
});
exports.updateReservacion = updateReservacion;
const deleteReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = yield reservaciones_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ reservacion });
});
exports.deleteReservacion = deleteReservacion;
//# sourceMappingURL=reservaciones.js.map