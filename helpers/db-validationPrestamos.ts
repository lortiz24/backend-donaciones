import Prestamo from "../models/prestamos"

export const existePrestamoById = async (id: string) => {
    const devuValido = await Prestamo.findById(id)
    if (!devuValido) {
        throw new Error(`No existe un registro de prestamos con el id: ${id}`)
    }
}



export const devueltoValido = (devuelto:string) => {
    if (['true', 'false'].indexOf(devuelto) === -1 && devuelto!==undefined) {
        throw new Error(`El valor ${devuelto} no es un valor Boolean`)
    }else{
        return true
    }
}

export const libroNoPrestado =async (book:string) => {
    const prestado=await Prestamo.findOne({book,devuelto:false})
    console.log(prestado)
    if (prestado) {
        throw new Error(`No es posible registrar un prestamo de un libro prestado: ${book}`)
    }else{
        return true
    }
}


