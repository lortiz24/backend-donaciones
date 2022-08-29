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
    medio_pago: {
        type: String,
        required: [true, "El id de mediosPago  es requerido"],
        enum: ['DEBITO', 'CREDITO']
    },
    


})
Donaciones.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.id = _id
    return donante;
}
export default model('donacion', Donaciones);