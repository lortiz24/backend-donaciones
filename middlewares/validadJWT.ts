import { Response, Request, NextFunction } from 'express'
import jwt, { JwtPayload } from "jsonwebtoken"
import Usuario from '../models/Usuarios';
const validadJWT = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token as string;
    //VERIFICAR SI EXISTE TOKEN
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const {uid}=jwt.verify(token,process.env.SECRETORPRIVATEKEY || '') as JwtPayload ;
        
        //leer usuario que corresponde al uid
        const usuario=await Usuario.findById(uid)
        req.usuario=usuario
        //USUARIO EXISTENTE FISICAMENTE
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no valido -usuario no existe en base de datos'
            })
        }
        console.log('LLego final')
        //USUARIO EN ESTADO TRUE
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no valido -usuario en estado false'
            })
        }
        
        
      
        next()

    } catch (error) {
        return res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

export {
    validadJWT
}