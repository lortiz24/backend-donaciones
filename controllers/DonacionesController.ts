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
    const {donante,proyecto,fecha_inicio,fecha_objetivo,monto_meta} = req.body as IRequestBodyDonacion;

    const Donacion = new DonacionesModels({ donante,proyecto,fecha_inicio });
    if(fecha_objetivo !== undefined) Donacion.fecha_objetivo=fecha_objetivo;
    if(monto_meta !== undefined) Donacion.monto_meta=monto_meta;
    //Guardar en base de datos
    await Donacion.save()
    res.status(201).send(Donacion)

}

export const updateDonacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {donante,proyecto,fecha_inicio,fecha_objetivo,monto_meta} = req.body as IRequestBodyDonacion;
    let updateProyect = {}

    if (donante !== undefined) updateProyect = { ...updateProyect, donante }
    if (proyecto !== undefined) updateProyect = { ...updateProyect, proyecto }
    if (fecha_inicio !== undefined) updateProyect = { ...updateProyect, fecha_inicio }
    if (fecha_objetivo !== undefined) updateProyect = { ...updateProyect, fecha_objetivo }
    if (monto_meta !== undefined) updateProyect = { ...updateProyect, monto_meta }
    //Actualizar en base de datos
    const Donacion = await DonacionesModels.findByIdAndUpdate(id, updateProyect);
    res.status(201).send(Donacion);
}
export const deleteDonacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const Donacion = await DonacionesModels.findByIdAndDelete(id);
    res.send(Donacion)


}