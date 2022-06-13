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
exports.existeBookById = exports.existeTitle = void 0;
const books_1 = __importDefault(require("../models/books"));
const existeTitle = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const existeTitle = yield books_1.default.findOne({ title });
    if (existeTitle) {
        throw new Error('El titulo ya esta registrado');
    }
});
exports.existeTitle = existeTitle;
const existeBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeBook = yield books_1.default.findById(id);
    if (!existeBook) {
        throw new Error(`No hay libro con el id: ${id}`);
    }
});
exports.existeBookById = existeBookById;
//# sourceMappingURL=db-validationBook.js.map