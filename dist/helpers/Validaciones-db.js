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
exports.existeProyectoById = exports.existeContactoById = exports.existUsuarioById = exports.existeVisitaById = exports.existeDonacionById = void 0;
const DonacionesModels_1 = __importDefault(require("../models/DonacionesModels"));
const ContactosModels_1 = __importDefault(require("../models/ContactosModels"));
const ProyectosModels_1 = __importDefault(require("../models/ProyectosModels"));
const UsuariosModels_1 = __importDefault(require("../models/UsuariosModels"));
const VisitasModels_1 = __importDefault(require("../models/VisitasModels"));
const existeDonacionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeDonacion = yield DonacionesModels_1.default.findById(id);
    if (!existeDonacion) {
        throw new Error(`No existe una donacion con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeDonacionById = existeDonacionById;
const existeVisitaById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeVisita = yield VisitasModels_1.default.findById(id);
    if (existeVisita) {
        throw new Error(`Ya existe una donacion con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeVisitaById = existeVisitaById;
const existUsuarioById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeUsuario = yield UsuariosModels_1.default.findById(id);
    if (!existeUsuario) {
        throw new Error(`No existe un usuario con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existUsuarioById = existUsuarioById;
const existeContactoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeContacto = yield ContactosModels_1.default.findById(id);
    if (!existeContacto) {
        throw new Error(`No existe un contacto con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeContactoById = existeContactoById;
const existeProyectoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeProyectos = yield ProyectosModels_1.default.findById(id);
    if (!existeProyectos) {
        throw new Error(`No existe un proyecto con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeProyectoById = existeProyectoById;
//# sourceMappingURL=Validaciones-db.js.map