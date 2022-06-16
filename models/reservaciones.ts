import { model, Schema } from "mongoose"

const ReservacionSchema = new Schema({

    fechaReservacion: {
        type: String,
        required: [true, "La fecha de prestamo es requerida"],

    },
    resolucion: {
        type: String,
        enum: ['Pendiente', 'Suspendido'],
        default: 'Pendiente'
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
ReservacionSchema.methods.toJSON = function () {
    const { __v, ...prestamo } = this.toObject();
    return prestamo;
}
export default model('reservacione', ReservacionSchema)