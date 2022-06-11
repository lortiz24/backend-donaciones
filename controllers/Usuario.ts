import {Response,Request} from 'express'
import Usuario from '../models/Usuarios'
import bcryptjs from 'bcryptjs'
export const getUsers = (req:Request, res:Response) => {
    
    res.json({msg:'Get-Controller'})
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