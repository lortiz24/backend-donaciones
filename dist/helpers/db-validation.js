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
exports.existeUserById = exports.emailExists = exports.esRolValido = void 0;
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const Roles_1 = __importDefault(require("../models/Roles"));
const esRolValido = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    const existeRol = yield Roles_1.default.findOne({ rol });
    if (!existeRol) {
        throw new Error('El rol ingresado no es un rol validos');
    }
});
exports.esRolValido = esRolValido;
const emailExists = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    const existeEmail = yield Usuarios_1.default.findOne({ correo });
    console.log(existeEmail);
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe`);
    }
});
exports.emailExists = emailExists;
const existeUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeUsuario = yield Usuarios_1.default.findById(id);
    if (!existeUsuario)
        throw new Error(`El id ${id} no existe en la base de datos`);
});
exports.existeUserById = existeUserById;
//# sourceMappingURL=db-validation.js.map