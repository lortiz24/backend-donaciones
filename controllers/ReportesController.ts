import { Response, Request } from 'express'
import Proyectos from '../models/ProyectosModels'


export const getCantidadProyectos = async (req: Request, res: Response) => {
    try {
        const proyectos = await Proyectos.find({})
        res.status(200).send(proyectos)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

