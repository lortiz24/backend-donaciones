import { Response, Request } from 'express'
import moment from 'moment'
import { existeVisitaById } from '../helpers/Validaciones-db'
import VisitasModels from '../models/VisitasModels'



export const getVisitas = async (req: Request, res: Response) => {
    try {
        const Visitas = await VisitasModels.find({})
        res.status(200).send(Visitas)
    } catch (error: any) {
        res.json({ error: error.message });
    }
}

export const createVisita = async (req: Request, res: Response) => {

    const ip = req.ip;

     try {
         if (await existeVisitaById(ip)) {
             return res.status(500).send({ error: "ip existente" })
         }
         const { fecha = moment().format('YYYY-MM-DD ') } = req.body as IRequestBodyVisita;
         const Visita = new VisitasModels({ fecha, ip });
         //Guardar en base de datos
         await Visita.save()
         res.status(201).send(Visita)
     } catch (error: any) {
         console.log(error)
         res.status(500).json({ error: error.message });
     }

}



