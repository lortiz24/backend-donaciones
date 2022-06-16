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
exports.login = void 0;
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generar_JWT_1 = require("../helpers/generar-JWT");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        //Verificar si el email existe
        const usuairo = yield Usuarios_1.default.findOne({ correo, estado: true });
        if (!usuairo) {
            return res.status(400).json({
                msg: `Usuario / password no son correctos -correo o estado`
            });
        }
        //Verificar contraseña
        const validPassword = bcryptjs_1.default.compareSync(password, usuairo.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: `Usuario / password no son correctos -password`
            });
        }
        ;
        //Generar el JWT
        const token = yield (0, generar_JWT_1.generarJWT)(usuairo.id);
        //Dar respuesta al front
        res.status(200).json({
            usuairo,
            token
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map