const { Schema, model } = require('mongoose')


const Donaciones = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: "proyecto",
        required: [true, "El id del proyecto es requerido"]
    },
    // donante: {
    //     type: Schema.Types.ObjectId,
    //     ref: "donante",
    //     required: [true, "El id del donante es requerido"]
    // },
    medio_pago: {
        type: String,
        required: [true, "El id de mediosPago  es requerido"],

    },
    monto_donacion: {
        type: Number,
        required: [true, "monto_donacion es requerido"],

    },
    nombre: {
        type: String,
        default: "ANONIMO",

    },
    tipo: {
        type: String,
        required: [true, "tipo  es requerido"],

    },
    fecha:{
        type:Date,
    }



})
Donaciones.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.id = _id
    return donante;
}
export default model('donacion', Donaciones);