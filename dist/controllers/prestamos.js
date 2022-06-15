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
exports.deletePrestamos = exports.updatePrestamos = exports.createPrestamos = exports.getPrestamos = void 0;
const prestamos_1 = __importDefault(require("../models/prestamos"));
const getPrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { desde = 0, page = 1, limit = 5, devuelto } = req.query;
    let query;
    if (devuelto) {
        query = { estado: true, devuelto };
    }
    else {
        query = { estado: true };
    }
    const [prestamos, total] = yield Promise.all([prestamos_1.default.
            find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            .populate({ path: 'lector', select: ['nombre', 'cedula', 'rol'] }).
            populate({ path: 'book', select: ['title', 'portada'] }).
            exec(),
        prestamos_1.default.countDocuments(query)
    ]);
    res.json({ desde, limit, page, total, body: prestamos });
});
exports.getPrestamos = getPrestamos;
const createPrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lector, book, fechaI, fechaF } = req.body;
    const prestamo = new prestamos_1.default({ lector, book, fechaI, fechaF });
    //Guardar en base de datos
    yield prestamo.save();
    res.json({ prestamo });
});
exports.createPrestamos = createPrestamos;
const updatePrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { fechaF, devuelto } = req.body;
    //Actualizar en base de datos
    const prestamo = yield prestamos_1.default.findByIdAndUpdate(id, { fechaF, devuelto });
    res.json({
        prestamo
    });
});
exports.updatePrestamos = updatePrestamos;
const deletePrestamos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const prestamo = yield prestamos_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ prestamo });
});
exports.deletePrestamos = deletePrestamos;
//# sourceMappingURL=prestamos.js.map