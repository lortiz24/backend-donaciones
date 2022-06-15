import { model, Schema } from "mongoose"

const PrestamoSchema = new Schema({

    
    fechaI: {
        type: String,
        required: [true, "La fecha de prestamo es requerida"],

    },
    fechaF: {
        type: String,
        required: [true, "La fecha de devolucion es requerida"]
    },
    devuelto: {
        type: Boolean,
        default: false
    },
    lector: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required:[true, "El id del usuario es requerido"]
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "book",
        required:[true, "El id del libro es requerido"]
    },
    estado: {
        type: Boolean,
        default: true,
    }

})
PrestamoSchema.methods.toJSON = function () {
    const { __v, ...prestamo } = this.toObject();
    return prestamo;
}
export default model('prestamo', PrestamoSchema)