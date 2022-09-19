const { Schema, model } = require('mongoose')


const ObjetosVarios = Schema({
    tipo: {
        type: String,
        required: [true, "El tipo es requerido"]
    },
    objeto: {
        type: JSON,
    },
    descripcion: {
        type: String,    
    },



})
ObjetosVarios.methods.toJSON = function () {
    const { __v, _id, ...donante } = this.toObject();
    donante.id = _id
    return donante;
}
export default model('objeto', ObjetosVarios);