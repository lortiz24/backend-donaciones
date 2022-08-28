import { Response, Request } from 'express'
import Proyectos from '../models/ProyectosModels'


export const getProyectos = async (req: Request, res: Response) => {
    const proyectos = await Proyectos.find({})
    res.status(200).send(proyectos)

}
export const getProyecto = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id)
    const proyecto = await Proyectos.findById(id)
    res.status(200).send(proyecto)

}
export const createProyecto = async (req: Request, res: Response) => {
    const { descripcion, caracteristica, img, lider } = req.body as IRequestBodyProyectos

    const proyecto = new Proyectos({ descripcion, caracteristica, img, lider });

    //Guardar en base de datos
    await proyecto.save()
    res.status(201).send(proyecto)

}

export const updateProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { descripcion, img, caracteristica, lider } = req.body as IRequestBodyProyectos;
    let updateProyect = {}

    if (descripcion !== undefined) updateProyect = { ...updateProyect, descripcion }
    if (img !== undefined) updateProyect = { ...updateProyect, img }
    if (caracteristica !== undefined) updateProyect = { ...updateProyect, caracteristica }
    if (lider !== undefined) updateProyect = { ...updateProyect, lider }
    //Actualizar en base de datos
    const proyecto = await Proyectos.findByIdAndUpdate(id, updateProyect);
    res.status(201).send(proyecto);
}
export const deleteProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const proyecto = await Proyectos.findByIdAndDelete(id);
    res.send(proyecto)


}