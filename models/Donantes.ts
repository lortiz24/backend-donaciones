const { Schema, model } = require('mongoose')


const Donantes = Schema({
    nombre: {
        type: String,
        default: 'donante Anonimo',

    },
    montoDonacion: {
        type: Number,
        required: [true, "El monto es requerido"],

    },
    tipo: {
        type: String,
        required: [true, "El tipo es requerido"],
        unique: true

    },
    
    // google: {
    //     type: Boolean,
    //     default: false,
    // },
    estado: {
        type: Boolean,
        default: true,
    },
})
Donantes.methods.toJSON = function(){
    const {__v,_id,...donante}=this.toObject();
    donante.uid=_id
    return donante;
}
export default model('donante',Donantes);