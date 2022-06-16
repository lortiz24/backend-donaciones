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
exports.libroReservadoByLector = exports.existeReservacionById = exports.resolucionValido = void 0;
const reservaciones_1 = __importDefault(require("../models/reservaciones"));
const resolucionValido = (devuelto) => {
    if (['Pendiente', 'Suspendido'].indexOf(devuelto) === -1 && devuelto !== undefined) {
        throw new Error(`El valor ${devuelto} no es un valor valido para la resolucion, debe ser: ['Pendiente', 'Suspendido']`);
    }
    else {
        return true;
    }
};
exports.resolucionValido = resolucionValido;
const existeReservacionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeReservacion = yield reservaciones_1.default.findById(id);
    if (!existeReservacion) {
        throw new Error(`No existe una reservacion con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeReservacionById = existeReservacionById;
const libroReservadoByLector = (book, lector = '') => __awaiter(void 0, void 0, void 0, function* () {
    console.log(book);
    /*   const reservacionesByLector= await Reservacion.find({lector})
      reservacionesByLector.map((item: typeof Reservacion)=>{
          if (item.book === book) {
              throw new Error(`Ya existe una reservacion del libro ${book} por el usuario: ${lector}`)
          }
      }) */
});
exports.libroReservadoByLector = libroReservadoByLector;
//# sourceMappingURL=db-validationReservaciones.js.map