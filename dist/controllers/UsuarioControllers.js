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
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const UsuariosModels_1 = __importDefault(require("../models/UsuariosModels"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield UsuariosModels_1.default.find({});
        res.send(usuarios);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield UsuariosModels_1.default.findById(id);
        res.send(usuario);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getUsuario = getUsuario;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, nombre, tipo } = req.body;
        const usuario = new UsuariosModels_1.default({ email, nombre, tipo });
        //Guardar en base de datos
        yield usuario.save();
        res.send(usuario);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.createUsuario = createUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email, nombre, tipo } = req.body;
    let updateUsuario = {};
    if (email !== undefined)
        updateUsuario = Object.assign(Object.assign({}, updateUsuario), { email });
    if (nombre !== undefined)
        updateUsuario = Object.assign(Object.assign({}, updateUsuario), { nombre });
    if (tipo !== undefined)
        updateUsuario = Object.assign(Object.assign({}, updateUsuario), { tipo });
    //Actualizar en base de datos
    const usuario = yield UsuariosModels_1.default.findByIdAndUpdate(id, updateUsuario);
    res.send(usuario);
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const usuario = yield UsuariosModels_1.default.findByIdAndDelete(id);
        res.json({ usuario });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=UsuarioControllers.js.map