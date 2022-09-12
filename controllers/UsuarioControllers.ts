import { Response, Request } from 'express'
import { mongo } from 'mongoose';
import Usuarios from '../models/UsuariosModels';




export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuarios.find({})
        res.send(usuarios)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}


export const getUsuario = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const usuario = await Usuarios.findById(id)
        res.send(usuario)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

export const createUsuario = async (req: Request, res: Response) => {
    try {

        const { email, nombre, tipo } = req.body as IRequestBodyUsuarios;
        const usuario = new Usuarios({ email, nombre, tipo });

        //Guardar en base de datos
        await usuario.save()
        res.send(usuario)

    } catch (error: any) {
        res.json({ error: error.message });
    }
}

export const updateUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, nombre, tipo } = req.body as IRequestBodyUsuarios;
    let updateUsuario = {}
    if (email !== undefined) updateUsuario = { ...updateUsuario, email }
    if (nombre !== undefined) updateUsuario = { ...updateUsuario, nombre }
    if (tipo !== undefined) updateUsuario = { ...updateUsuario, tipo }
    //Actualizar en base de datos
    const usuario = await Usuarios.findByIdAndUpdate(id, updateUsuario);
    res.send(usuario);
}
export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const usuario = await Usuarios.findByIdAndDelete(id);
        res.json({ usuario })
    } catch (error: any) {
        res.json({ error: error.message });
    }


}