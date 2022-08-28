const { Schema, model } = require('mongoose')


const Donaciones = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: "proyecto",
        required: [true, "El id del proyecto es requerido"]
    },
    donante: {
        type: Schema.Types.ObjectId,
        ref: "donante",
        required: [true, "El id del donante es requerido"]
    },
    monto_meta: {
        type: String,
    },
    monto_recaudado: {
        type: Number,
    },

    fecha_inicio: {
        type: Date,
        required: [true, "La fecha de inicio es requerida"]
    },
    fecha_objetivo: {
        type: Date,
    },


})
Donaciones.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.id = _id
    return donante;
}
export default model('donacion', Donaciones);