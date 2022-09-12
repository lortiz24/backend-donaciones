const { Schema, model } = require('mongoose')


const Usuario = Schema({
    nombre: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "email es requerido"],
       

    },
    tipo: {
        type: String,
        required: [true, "tipo es requerido"],
        enum: ['ADMIN_ROLE', 'USER_ROLE']

    },
    
})
Usuario.methods.toJSON = function(){
    const {__v,_id,...usuario}=this.toObject();
    usuario.uid=_id
    return usuario;
}
export default model('usuario',Usuario);