"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const Roles = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        unique: true,
    }
});
exports.default = model('role', Roles);
//# sourceMappingURL=Roles.js.map