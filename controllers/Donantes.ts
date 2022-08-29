import { Response, Request } from 'express'
import { mongo } from 'mongoose';
import Donantes from '../models/Donantes';




export const getDonantes = async (req: Request, res: Response) => {
    try {
        const donantes = await Donantes.find({})
        res.send(donantes)
    } catch (error: any) {
        res.json({error:error.message});
    }

}


export const getDonante = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const donantes = await Donantes.findById(id)
        res.send(donantes)
    } catch (error: any) {
        res.json({error:error.message});
    }

}

export const createDonantes = async (req: Request, res: Response) => {
    try {

        const { ip } = req.body as IRequestBodyDonantes;
        const donante = new Donantes({ ip });

        //Guardar en base de datos
        await donante.save()
        res.send(donante)

    } catch (error: any) {
        res.json({error:error.message});
    }
}

export const updateDonantes = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ip } = req.body as IRequestBodyDonantes;
    
    //Actualizar en base de datos
    const donante = await Donantes.findByIdAndUpdate(new mongo.ObjectId(id), { ip });
    res.send(donante);
}
export const deleteDonantes = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const donante = await Donantes.findByIdAndDelete(id);
        res.json({ donante })
    } catch (error: any) {
        res.json({error:error.message});
    }


}