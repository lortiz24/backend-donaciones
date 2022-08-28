const { Schema, model } = require('mongoose')


const Proyectos = Schema({
    img:{
        type:String,
        default:'none',
    },
    descripcion: {
        type: String,
        required: [true, "La descripcion es requerida"],

    },
    title: {
        type: String,
        default: 'none',

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