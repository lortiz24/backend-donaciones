import DonacionesModels from "../models/DonacionesModels"
import ContactosModels from "../models/ContactosModels"
import ProyectosModels from "../models/ProyectosModels"
import UsuariosModels from "../models/UsuariosModels"


export const existeDonacionById = async(id:string) => {
    const existeDonacion=  await  DonacionesModels.findById(id)
    if (!existeDonacion) {
        throw new Error(`No existe una donacion con id: ${id} `)
    }else{
        return true
    }
}
export const existUsuarioById = async(id:string) => {
    const existeUsuario= await UsuariosModels.findById(id)
    console.log(id);
    console.log(existeUsuario);
    if (!existeUsuario) {
        throw new Error(`No existe un usuario con id: ${id} `)
    }else{
        return true
    }
}
export const existeContactoById = async(id:string) => {
    const existeContacto=  await ContactosModels.findById(id)
    if (!existeContacto) {
        throw new Error(`No existe un contacto con id: ${id} `)
    }else{
        return true
    }
}
export const existeProyectoById = async(id:string) => {
    const existeProyectos= await ProyectosModels.findById(id)
    if (!existeProyectos) {
        throw new Error(`No existe un proyecto con id: ${id} `)
    }else{
        return true
    }
}
