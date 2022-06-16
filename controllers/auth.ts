import { Response, Request } from 'express'
import Usuario from '../models/Usuarios'
import bcryptjs from 'bcryptjs'

import { generarJWT } from "../helpers/generar-JWT"

export const login= async(req:Request,res:Response)=>{
    
    const {correo,password}=req.body
    try {
        //Verificar si el email existe
            const usuairo=await Usuario.findOne({correo,estado:true});
            
            if (!usuairo) {
                return res.status(400).json({
                    msg:`Usuario / password no son correctos -correo o estado`
                })
            }

        //Verificar contraseña
        const validPassword=bcryptjs.compareSync(password,usuairo.password)
        
        if (!validPassword) {
            return res.status(400).json({
                msg:`Usuario / password no son correctos -password`
            })
        };

        //Generar el JWT
       
        const token=await generarJWT(usuairo.id)   
        //Dar respuesta al front
        res.status(200).json({
            usuairo,
            token
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
} 