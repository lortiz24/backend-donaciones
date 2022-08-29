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
exports.existeDonanteById = exports.existeProyectoById = exports.existeDonacionById = void 0;
const DonacionesModels_1 = __importDefault(require("../models/DonacionesModels"));
const ProyectosModels_1 = __importDefault(require("../models/ProyectosModels"));
const Donantes_1 = __importDefault(require("../models/Donantes"));
const existeDonacionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeDonacion = DonacionesModels_1.default.findById(id);
    if (!existeDonacion) {
        throw new Error(`No existe una donacion con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeDonacionById = existeDonacionById;
const existeProyectoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeProyectos = ProyectosModels_1.default.findById(id);
    if (!existeProyectos) {
        throw new Error(`No existe un proyecto con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeProyectoById = existeProyectoById;
const existeDonanteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeDonantes = Donantes_1.default.findById(id);
    if (!existeDonantes) {
        throw new Error(`No existe un donantes con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeDonanteById = existeDonanteById;
//# sourceMappingURL=Validaciones-db.js.map