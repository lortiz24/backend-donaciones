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
exports.deleteDonantes = exports.updateDonantes = exports.createDonantes = exports.getDonantes = void 0;
const Donantes_1 = __importDefault(require("../models/Donantes"));
const getDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const donantes = yield Donantes_1.default.find({});
    res.send(donantes);
});
exports.getDonantes = getDonantes;
const createDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { montoDonacion, nombre, tipo } = req.body;
    const donante = new Donantes_1.default({ montoDonacion, nombre, tipo });
    //Guardar en base de datos
    yield donante.save();
    res.json({ donante });
});
exports.createDonantes = createDonantes;
const updateDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { fechaF, devuelto } = req.body;
    //Actualizar en base de datos
    const donante = yield Donantes_1.default.findByIdAndUpdate(id, { fechaF, devuelto });
    res.json({
        donante
    });
});
exports.updateDonantes = updateDonantes;
const deleteDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const donante = yield Donantes_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ donante });
});
exports.deleteDonantes = deleteDonantes;
//# sourceMappingURL=Donantes.js.map