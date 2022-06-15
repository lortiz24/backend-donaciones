import Prestamo from "../models/prestamos"
export const existePrestamoById=async (id:string)=>{
    const existePres = await Prestamo.findById(id)
    if (!existePres) {
        throw new Error(`No existe un registro de prestamos con el id: ${id}`)
    }
}