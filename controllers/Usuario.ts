import {Response,Request} from 'express'
import Usuario from '../models/Usuarios'
import bcryptjs from 'bcryptjs'
export const getUsers = async(req:Request, res:Response) => {
    const query={estado:true}
    const usuarios=await Usuario.find(query);
    const total=await Usuario.countDocuments(query)
    res.json({total,body:usuarios})
}
export const createUser = async(req:Request, res:Response) => {
    
    const {nombre,correo,password,rol}=req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //Encriptar password
    const salt=bcryptjs.genSaltSync(10);
    usuario.password=bcryptjs.hashSync(password,salt);
    //Guardar en base de datos
    await usuario.save()
    res.json({usuario}) 
}
export const deleteUser = async(req:Request, res:Response) => { 
    const {id}=req.params;
    //Efectuar eliminacion
    const usuario=await Usuario.findByIdAndUpdate(id,{estado:false});
    res.json({usuario}) 
}