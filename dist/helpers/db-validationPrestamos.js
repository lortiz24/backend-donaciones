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
exports.devueltoValido = exports.existePrestamoById = void 0;
const prestamos_1 = __importDefault(require("../models/prestamos"));
const existePrestamoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const devuValido = yield prestamos_1.default.findById(id);
    if (!devuValido) {
        throw new Error(`No existe un registro de prestamos con el id: ${id}`);
    }
});
exports.existePrestamoById = existePrestamoById;
const devueltoValido = (devuelto) => {
    if (['true', 'false'].indexOf(devuelto) === -1 && devuelto !== undefined) {
        throw new Error(`El valor ${devuelto} no es un valor Boolean`);
    }
    else {
        return true;
    }
};
exports.devueltoValido = devueltoValido;
//# sourceMappingURL=db-validationPrestamos.js.map