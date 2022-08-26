import { Response, Request } from 'express'
import MediosPagos from '../models/MediosPagos'


export const getMediosDePagos = async (req: Request, res: Response) => {
    const reservaciones = await MediosPagos.find({})
    res.status(200).send(reservaciones)

}
export const getMediosDePago = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id)
    const reservacion = await MediosPagos.findById(id)
    res.status(200).send(reservacion)

}
export const createReservacion = async (req: Request, res: Response) => {
    const { tipo, nombre } = req.body as IRequestBodyMediosPagos

    const reservacion = new MediosPagos({ tipo, nombre });

    //Guardar en base de datos
    await reservacion.save()
    res.status(201).send(reservacion)

}

export const updateReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, tipo } = req.body as IRequestBodyMediosPagos;

    //Actualizar en base de datos
    const reservacion = await MediosPagos.findByIdAndUpdate(id, { nombre, tipo });
    res.status(201).send(reservacion);
}
export const deleteReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = await MediosPagos.findByIdAndDelete(id);
    res.send(reservacion)


}