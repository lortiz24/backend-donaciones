const { Schema, model } = require('mongoose')
const Roles = Schema({
    rol: {
        type: String,
        required: [true,'El rol es obligatorio'],
        unique: true,
    }
   
})

export default model('role',Roles);