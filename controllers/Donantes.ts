import { Response, Request } from 'express'
import { mongo } from 'mongoose';
import Donantes from '../models/Donantes';




export const getDonantes = async (req: Request, res: Response) => {

    const donantes = await Donantes.find({})
    res.send(donantes)

}


export const getDonante = async (req: Request, res: Response) => {
    const { id } = req.params
    const donantes = await Donantes.findById(id)
    res.send(donantes)

}

export const createDonantes = async (req: Request, res: Response) => {
    const { monto_donacion, nombre, tipo } = req.body as IRequestBodyDonantes;
    const donante = new Donantes({ monto_donacion, nombre, tipo });

    //Guardar en base de datos
    await donante.save()
    res.send(donante)
}

export const updateDonantes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { monto_donacion, nombre, tipo } = req.body as IRequestBodyDonantes;
    console.log(id, nombre)
    //Actualizar en base de datos
    const donante = await Donantes.findByIdAndUpdate(new mongo.ObjectId(id), { monto_donacion, nombre, tipo });
    res.send(donante);
}
export const deleteDonantes = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const donante = await Donantes.findByIdAndDelete(id);
    res.json({ donante })


}