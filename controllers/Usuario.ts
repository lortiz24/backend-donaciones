import { Response, Request } from 'express'
import Usuario from '../models/Usuarios'
import bcryptjs from 'bcryptjs'
import { validationResult } from 'express-validator'
export const getUsers = async (req: Request, res: Response) => {
    const { desde = 0, page = 1, limit = 5 } = req.query
    const query = { estado: true }
    const [usuarios, total] = await Promise.all(
        [Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            , Usuario.countDocuments(query)
        ])
    res.json({ desde, limit, page, total, body: usuarios })
}
export const createUser = async (req: Request, res: Response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //Encriptar password
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);
    //Guardar en base de datos
    await usuario.save()
    res.json({ usuario })
}

export const updateUSer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;
    if (password) {
        //Encriptar password y actualizar password
        const salt = bcryptjs.genSaltSync(10);
        resto['password'] = bcryptjs.hashSync(password, salt);
    }
    //Actualizar en base de datos
    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json({
        usuario
    });
}
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json({ usuario })
}