import { Response, Request } from 'express'
import moment from 'moment';
import DonaccionesModels from '../models/DonacionesModels'
import ProyectosModels from '../models/ProyectosModels'
const mongoose = require('mongoose');

export const getCantidadProyectos = async (req: Request, res: Response) => {
    const { proyecto_id } = req.params
    try {
        const donaciones = await DonaccionesModels.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) })
        res.status(200).json({ cantidad: donaciones.length })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getMetricasProyectos = async (req: Request, res: Response) => {
    const { proyecto_id } = req.params
    try {
        const donaciones = await DonaccionesModels.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) })
        const proyectos = await ProyectosModels.findById(proyecto_id)
        let mongoAlcanzado = 0
        donaciones.forEach((element: any) => {
            mongoAlcanzado += element.monto_donacion
        });
        const inicio = moment(proyectos.fecha_inicio);
        const final = moment(proyectos.fecha_objetivo);
        const diasFaltantes = final.diff(inicio, "days")
        const procentajeAlcanzado = ((mongoAlcanzado / proyectos.monto_meta) * 100).toFixed()
        res.status(200).json({ mongoAlcanzado, diasFaltantes, monto_meta: proyectos.monto_meta, procentajeAlcanzado })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

