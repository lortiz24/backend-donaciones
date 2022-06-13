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
exports.deleteUser = exports.createUser = exports.getUsers = void 0;
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    const usuarios = yield Usuarios_1.default.find(query);
    const total = yield Usuarios_1.default.countDocuments(query);
    res.json({ total, body: usuarios });
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuarios_1.default({ nombre, correo, password, rol });
    //Encriptar password
    const salt = bcryptjs_1.default.genSaltSync(10);
    usuario.password = bcryptjs_1.default.hashSync(password, salt);
    //Guardar en base de datos
    yield usuario.save();
    res.json({ usuario });
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const usuario = yield Usuarios_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ usuario });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=Usuario.js.map