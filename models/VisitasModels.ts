const { Schema, model } = require('mongoose')


const Visitas = Schema({
    ip: {
        type: String,
        unique:false
    },
    fecha: {
        type: String
    },
    action:{
        type:JSON
    }
   


})
Visitas.methods.toJSON = function () {
    const { __v, _id, ...visita } = this.toObject();
    visita.uid = _id
    return visita;
}
export default model('visita', Visitas);