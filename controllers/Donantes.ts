import { Response, Request } from 'express'
import Donantes from '../models/Donantes';




export const getDonantes = async (req: Request, res: Response) => {

    const donantes = await Donantes.find({})
    res.send(donantes)

}

export const createDonantes = async (req: Request, res: Response) => {
    const { montoDonacion,nombre,tipo } = req.body as IRequestBodyDonaciones;
    const donante = new Donantes({  montoDonacion,nombre,tipo });

    //Guardar en base de datos
    await donante.save()
    res.json({ donante })
}

export const updateDonantes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fechaF, devuelto } = req.body;

    //Actualizar en base de datos
    const donante = await Donantes.findByIdAndUpdate(id, { fechaF, devuelto });
    res.json({
        donante
    });
}
export const deleteDonantes = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const donante = await Donantes.findByIdAndUpdate(id, { estado: false });
    res.json({ donante })


}