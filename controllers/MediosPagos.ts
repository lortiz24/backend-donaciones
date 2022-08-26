import { Response, Request } from 'express'
import MediosPagos from '../models/MediosPagos'

export const getMediosDePago = async (req: Request, res: Response) => {
    const reservaciones = MediosPagos.find({})

    res.send(reservaciones)

}

export const createReservacion = async (req: Request, res: Response) => {
    const { tipo, nombre } = req.body as IRequestBodyMediosPagos

    const reservacion = new MediosPagos({ tipo, nombre });

    //Guardar en base de datos
    await reservacion.save()
    res.json({ reservacion })
}

export const updateReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre,tipo } = req.body as IRequestBodyMediosPagos;

    //Actualizar en base de datos
    const reservacion =  MediosPagos.findByIdAndUpdate(id, { nombre,tipo });
    res.json({
        reservacion
    });
}
export const deleteReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = MediosPagos.findByIdAndUpdate(id, { estado: false });
    res.json({ reservacion })


}