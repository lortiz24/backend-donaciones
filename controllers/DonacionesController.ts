import { Response, Request } from 'express'
import DonacionesModels from '../models/DonacionesModels'


export const getDonaciones = async (req: Request, res: Response) => {
    const Donaciones = await DonacionesModels.find({})
    res.status(200).send(Donaciones)

}
export const getDonacion = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id)
    const Donacion = await DonacionesModels.findById(id)
    res.status(200).send(Donacion)

}
export const createDonacion = async (req: Request, res: Response) => {
    const { donante, proyecto, medio_pago, monto_donacion, nombre, tipo } = req.body as IRequestBodyDonacion;

    const Donacion = new DonacionesModels({ donante, proyecto, medio_pago, monto_donacion, nombre, tipo });

    //Guardar en base de datos
    await Donacion.save()
    res.status(201).send(Donacion)

}

export const updateDonacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { donante, proyecto, medio_pago, monto_donacion, nombre, tipo } = req.body as IRequestBodyDonacion;
    let updateDonacion = {}

    if (tipo !== undefined) updateDonacion = { ...updateDonacion, tipo }
    if (nombre !== undefined) updateDonacion = { ...updateDonacion, nombre }
    if (medio_pago !== undefined) updateDonacion = { ...updateDonacion, medio_pago }
    if (monto_donacion !== undefined) updateDonacion = { ...updateDonacion, monto_donacion }
    if (donante !== undefined) updateDonacion = { ...updateDonacion, donante }
    if (proyecto !== undefined) updateDonacion = { ...updateDonacion, proyecto }

    //Actualizar en base de datos
    const Donacion = await DonacionesModels.findByIdAndUpdate(id, updateDonacion);
    res.status(201).send(Donacion);
}
export const deleteDonacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const Donacion = await DonacionesModels.findByIdAndDelete(id);
    res.send(Donacion)


}