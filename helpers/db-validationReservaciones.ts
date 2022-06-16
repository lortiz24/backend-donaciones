import Reservacion from "../models/reservaciones"

export const resolucionValido =(devuelto:string) => {
    if (['Pendiente', 'Suspendido'].indexOf(devuelto) === -1 && devuelto!==undefined) {
        throw new Error(`El valor ${devuelto} no es un valor valido para la resolucion, debe ser: ['Pendiente', 'Suspendido']`)
    }else{
        return true
    }
}

export const existeReservacionById = async(id:string) => {
    const existeReservacion= await Reservacion.findById(id)
    if (!existeReservacion) {
        throw new Error(`No existe una reservacion con id: ${id} `)
    }else{
        return true
    }
}
export const libroReservadoByLector = async(book:string,lector='') => {

    console.log(book)
    
  /*   const reservacionesByLector= await Reservacion.find({lector})
    reservacionesByLector.map((item: typeof Reservacion)=>{
        if (item.book === book) {
            throw new Error(`Ya existe una reservacion del libro ${book} por el usuario: ${lector}`)
        }
    }) */
    
}