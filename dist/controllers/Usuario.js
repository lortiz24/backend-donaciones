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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUSer = exports.createUser = exports.getUsers = void 0;
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { desde = 0, page = 1, limit = 5 } = req.query;
    const query = { estado: true };
    const [usuarios, total] = yield Promise.all([Usuarios_1.default.find(query)
            .skip(Number(desde))
            .limit(Number(limit)),
        Usuarios_1.default.countDocuments(query)
    ]);
    res.json({ desde, limit, page, total, body: usuarios });
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
const updateUSer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, password, google, correo } = _a, resto = __rest(_a, ["_id", "password", "google", "correo"]);
    if (password) {
        //Encriptar password y actualizar password
        const salt = bcryptjs_1.default.genSaltSync(10);
        resto['password'] = bcryptjs_1.default.hashSync(password, salt);
    }
    //Actualizar en base de datos
    const usuario = yield Usuarios_1.default.findByIdAndUpdate(id, resto);
    res.json({
        usuario
    });
});
exports.updateUSer = updateUSer;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const usuario = yield Usuarios_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ usuario });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=Usuario.js.map