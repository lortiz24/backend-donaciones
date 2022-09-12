import DonacionesModels from "../models/DonacionesModels"
import ContactosModels from "../models/ContactosModels"
import ProyectosModels from "../models/ProyectosModels"
import Donantes from "../models/Donantes"


export const existeDonacionById = async(id:string) => {
    const existeDonacion=  DonacionesModels.findById(id)
    if (!existeDonacion) {
        throw new Error(`No existe una donacion con id: ${id} `)
    }else{
        return true
    }
}
export const existeContactoById = async(id:string) => {
    const existeContacto=  ContactosModels.findById(id)
    if (!existeContacto) {
        throw new Error(`No existe un contacto con id: ${id} `)
    }else{
        return true
    }
}
export const existeProyectoById = async(id:string) => {
    const existeProyectos=  ProyectosModels.findById(id)
    if (!existeProyectos) {
        throw new Error(`No existe un proyecto con id: ${id} `)
    }else{
        return true
    }
}
export const existeDonanteById = async(id:string) => {
    const existeDonantes=  Donantes.findById(id)
    if (!existeDonantes) {
        throw new Error(`No existe un donantes con id: ${id} `)
    }else{
        return true
    }
}