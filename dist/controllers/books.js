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
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBooks = void 0;
const books_1 = __importDefault(require("../models/books"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { desde = 0, page = 1, limit = 5 } = req.query;
    const query = { estado: true };
    const [books, total] = yield Promise.all([books_1.default.find(query)
            .skip(Number(desde))
            .limit(Number(limit)),
        books_1.default.countDocuments(query)
    ]);
    res.json({ desde, limit, page, total, body: books });
});
exports.getBooks = getBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, autores, paginas, genero, portada, editorial } = req.body;
    const book = new books_1.default({ title, autores, paginas, genero, portada, editorial });
    //Guardar en base de datos
    yield book.save();
    res.json({ book });
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id } = _a, resto = __rest(_a, ["_id"]);
    //Actualizar en base de datos
    const book = yield books_1.default.findByIdAndUpdate(id, resto);
    res.json({
        book
    });
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //Efectuar eliminacion
    const book = yield books_1.default.findByIdAndUpdate(id, { estado: false });
    res.json({ book });
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=books.js.map