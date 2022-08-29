const { Schema, model } = require('mongoose')


const Donantes = Schema({
    fecha: {
        type: Date,
    },
    ip: {
        type: String,
        required: [true, "Ip es requerido"],
        unique: true,

    },
    
})
Donantes.methods.toJSON = function(){
    const {__v,_id,...donante}=this.toObject();
    donante.uid=_id
    return donante;
}
export default model('visita',Donantes);