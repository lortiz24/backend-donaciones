import Reservacion from "../models/MediosPagos"

export const resolucionValido =(devuelto:string) => {
    if (['Pendiente', 'Suspendido'].indexOf(devuelto) === -1 && devuelto!==undefined) {
        throw new Error(`El valor ${devuelto} no es un valor valido para la resolucion, debe ser: ['Pendiente', 'Suspendido']`)
    }else{
        return true
    }
}

export const existeReservacionById = async(id:string) => {
    const existeReservacion=  Reservacion.findById(id)
    if (!existeReservacion) {
        throw new Error(`No existe una reservacion con id: ${id} `)
    }else{
        return true
    }
}