import Usuario from "../models/Usuarios"
import Role from "../models/Roles"
export const esRolValido=async(rol:string)=>{
    const existeRol = await Role.findOne({rol})
    if (!existeRol) {
        throw new Error('El rol ingresado no es un rol validos')
    }
}

export const emailExists=async(correo:string)=> {
    const existeEmail = await Usuario.findOne({correo})
    console.log(existeEmail)
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe`)
    }
}

export const existeUserById=async(id:string)=> {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) throw new Error(`El id ${id} no existe en la base de datos` );
}

