"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolucionValido = void 0;
const resolucionValido = (devuelto) => {
    if (['true', 'false'].indexOf(devuelto) === -1 && devuelto !== undefined) {
        throw new Error(`El valor ${devuelto} no es un valor Boolean`);
    }
    else {
        return true;
    }
};
exports.resolucionValido = resolucionValido;
//# sourceMappingURL=db-validacionReservaciones.js.map