const { Schema, model } = require('mongoose')


const Proyectos = Schema({
    img: {
        type: String,
        default: 'none',
    },
    descripcion: {
        type: String,
        required: [true, "La descripcion es requerida"],

    },
    title: {
        type: String,
        default: 'none',
        required: [true, "El tittle es requerido"], 

    },
    monto_meta: {
        type: Number,
    },
    fecha_inicio: {
        type: Date,
        required: [true, "La fecha de inicio es requerida"]
    },
    fecha_objetivo: {
        type: Date,
    },
    dias: {
        type: Number,
    },
    other: {
        type: JSON,
    },


})
Proyectos.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.uid = _id
    return donante;
}
export default model('proyecto', Proyectos);