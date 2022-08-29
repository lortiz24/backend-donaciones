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
    const {donante,proyecto,medio_pago} = req.body as IRequestBodyDonacion;

    const Donacion = new DonacionesModels({ donante,proyecto,medio_pago });
    
    //Guardar en base de datos
    await Donacion.save()
    res.status(201).send(Donacion)

}

export const updateDonacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {donante,proyecto} = req.body as IRequestBodyDonacion;
    let updateDonacion = {}

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