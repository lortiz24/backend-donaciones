const { Schema, model } = require('mongoose')
const Usuario = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],

    },
    cedula: {
        type: String,
        required: [true, "La cedula es requerida"],

    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true

    },
    password: {
        type: String,
        required: [true, "La contraseña es requerido"],

    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    google: {
        type: Boolean,
        default: false,
    },
    estado: {
        type: Boolean,
        default: true,
    },
})
Usuario.methods.toJSON = function(){
    const {__v,password,...usuario}=this.toObject();
    return usuario;
}
export default model('user',Usuario);