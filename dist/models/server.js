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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../db/config");
const donantes_1 = __importDefault(require("../routes/donantes"));
const MediosPagos_1 = __importDefault(require("../routes/MediosPagos"));
const ProyectosRoutes_1 = __importDefault(require("../routes/ProyectosRoutes"));
const DonacionesRoutes_1 = __importDefault(require("../routes/DonacionesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Inicializando rutas
        this.donanteRoute = '/api/donante';
        this.mediosPagosRoute = '/api/medios_pagos';
        this.proyectosRoute = '/api/proyectos';
        this.donacionesRoute = '/api/donaciones';
        //conection to DB
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //routes
        this.routes();
    }
    routes() {
        this.app.use(this.donanteRoute, donantes_1.default);
        this.app.use(this.mediosPagosRoute, MediosPagos_1.default);
        this.app.use(this.proyectosRoute, ProyectosRoutes_1.default);
        this.app.use(this.donacionesRoute, DonacionesRoutes_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map