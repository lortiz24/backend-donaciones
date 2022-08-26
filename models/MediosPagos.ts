import { model, Schema } from "mongoose"

const MediosPagos = new Schema({

    nombre: {
        type: String,
        required: [true, "The name is required"],

    },
    tipo: {
        type: String,
        required: [true, "the tipi is required"],
        enum: ['DEBITO', 'CREDITO']

    },
    
    estado: {
        type: Boolean,
        default: true,
    }

})
MediosPagos.methods.toJSON = function () {
    const { __v, ...prestamo } = this.toObject();
    return prestamo;
}
export default model('mediosPago', MediosPagos)