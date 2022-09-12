import DonacionesModels from "../models/DonacionesModels"
import ContactosModels from "../models/ContactosModels"
import ProyectosModels from "../models/ProyectosModels"
import UsuariosModels from "../models/UsuariosModels"
import VisitasModels from "../models/VisitasModels"


export const existeDonacionById = async(id:string) => {
    const existeDonacion=  await  DonacionesModels.findById(id)
    if (!existeDonacion) {
        throw new Error(`No existe una donacion con id: ${id} `)
    }else{
        return true
    }
}
export const existeVisitaById = async(ip:string) => {
    const existeVisita=  await VisitasModels.find({ip:ip})
    console.log(existeVisita);
    if (existeVisita.length!==0) {
        return true
    }else{
        return false
    }
}
export const existUsuarioById = async(id:string) => {
    const existeUsuario= await UsuariosModels.findById(id)
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
