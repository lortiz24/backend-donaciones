import { Response, Request } from 'express'
import moment from 'moment'
import DonacionesModels from '../models/DonacionesModels'
import ProyectosModels from '../models/ProyectosModels'


export const getDonaciones = async (req: Request, res: Response) => {
    try {
        const Donaciones = await DonacionesModels.find({})
        res.status(200).send(Donaciones)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getDonacion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const Donacion = await DonacionesModels.findById(id)
        res.status(200).send(Donacion)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const createDonacion = async (req: Request, res: Response) => {
    try {
        const fecha = moment().format('YYYY-MM-DD HH:mm:ss');
        const { donante, proyecto, medio_pago, monto_donacion, nombre, tipo } = req.body as IRequestBodyDonacion;
        const Donacion = new DonacionesModels({ donante, proyecto, medio_pago, monto_donacion, tipo, fecha });
        
        if(nombre.length !==0) Donacion.nombre=nombre
        //Guardar en base de datos
        await Donacion.save()
        res.status(201).send(Donacion)
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }

}

export const updateDonacion = async (req: Request, res: Response) => {
    try {
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

    } catch (error: any) {
        res.status(500).json(error.message);
    }
}
export const deleteDonacion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Donacion = await DonacionesModels.findByIdAndDelete(id);
        res.send(Donacion)
    } catch (error: any) {
        res.json({ error: error.message });
    }


}