import { Response, Request } from 'express'
import DonaccionesModels from '../models/DonacionesModels'
const mongoose = require('mongoose');

export const getCantidadProyectos = async (req: Request, res: Response) => {
    const { proyecto_id } = req.params
    try {
        const donaciones = await DonaccionesModels.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) })
        res.status(200).json({cantidad:donaciones.length})
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

