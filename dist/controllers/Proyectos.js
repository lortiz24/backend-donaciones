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
exports.deleteProyecto = exports.updateProyecto = exports.createProyecto = exports.getProyecto = exports.getProyectos = void 0;
const ProyectosModels_1 = __importDefault(require("../models/ProyectosModels"));
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proyectos = yield ProyectosModels_1.default.find({});
    res.status(200).send(proyectos);
});
exports.getProyectos = getProyectos;
const getProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const proyecto = yield ProyectosModels_1.default.findById(id);
    res.status(200).send(proyecto);
});
exports.getProyecto = getProyecto;
const createProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion, caracteristica, img, lider } = req.body;
    const proyecto = new ProyectosModels_1.default({ descripcion, caracteristica, img, lider });
    //Guardar en base de datos
    yield proyecto.save();
    res.status(201).send(proyecto);
});
exports.createProyecto = createProyecto;
const updateProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion, img, caracteristica, lider } = req.body;
    let updateProyect = {};
    if (descripcion !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { descripcion });
    if (img !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { img });
    if (caracteristica !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { caracteristica });
    if (lider !== undefined)
        updateProyect = Object.assign(Object.assign({}, updateProyect), { lider });
    //Actualizar en base de datos
    const proyecto = yield ProyectosModels_1.default.findByIdAndUpdate(id, updateProyect);
    res.status(201).send(proyecto);
});
exports.updateProyecto = updateProyecto;
const deleteProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const proyecto = yield ProyectosModels_1.default.findByIdAndDelete(id);
    res.send(proyecto);
});
exports.deleteProyecto = deleteProyecto;
//# sourceMappingURL=Proyectos.js.map