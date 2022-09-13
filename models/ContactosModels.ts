const { Schema, model } = require('mongoose')


const Contactos = Schema({
    name: {
        type: String,
        ref: "proyecto",
        required: [true, "El nombre es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
    },
    asunto: {
        type: String,
        required: [true, "El message es requerido"],
    },
    message: {
        type: String,
        required: [true, "El message es requerido"],
    },



})
Contactos.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.id = _id
    return donante;
}
export default model('contacto', Contactos);