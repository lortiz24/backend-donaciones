import { Response, Request } from 'express'
import Proyectos from '../models/ProyectosModels'


export const getProyectos = async (req: Request, res: Response) => {
    try {
        const proyectos = await Proyectos.find({})
        res.status(200).send(proyectos)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const proyecto = await Proyectos.findById(id)
        res.status(200).send(proyecto)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const createProyecto = async (req: Request, res: Response) => {
    try {
        const { descripcion, img, title, other, fecha_inicio, fecha_objetivo, monto_meta } = req.body as IRequestBodyProyectos

        const proyecto = new Proyectos({ descripcion, title, fecha_inicio });

        if (fecha_objetivo !== undefined) proyecto.fecha_objetivo = fecha_objetivo;
        if (monto_meta !== undefined) proyecto.monto_meta = monto_meta;
        if (img !== undefined) proyecto.img = img
        if (other !== undefined) proyecto.img = other
        //Guardar en base de datos
        await proyecto.save()
        res.status(201).send(proyecto)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

export const updateProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { descripcion, img, title, other, fecha_inicio, fecha_objetivo, monto_meta, monto_recaudado } = req.body as IRequestBodyProyectos
        let updateProyect = {}

        if (descripcion !== undefined) updateProyect = { ...updateProyect, descripcion }
        if (img !== undefined) updateProyect = { ...updateProyect, img }
        if (title !== undefined) updateProyect = { ...updateProyect, title }
        if (other !== undefined) updateProyect = { ...updateProyect, other }
        if (fecha_inicio !== undefined) updateProyect = { ...updateProyect, fecha_inicio }
        if (fecha_objetivo !== undefined) updateProyect = { ...updateProyect, fecha_objetivo }
        if (monto_meta !== undefined) updateProyect = { ...updateProyect, monto_meta }
        if (monto_recaudado !== undefined) updateProyect = { ...updateProyect, monto_recaudado }



        console.log(updateProyect)
        //Actualizar en base de datos
        const proyecto = await Proyectos.findByIdAndUpdate(id, updateProyect);
        res.status(201).send(proyecto);
    } catch (error: any) {
        res.json({ error: error.message });
    }
}
export const deleteProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const proyecto = await Proyectos.findByIdAndDelete(id);
        res.send(proyecto)
    } catch (error: any) {
        res.json({ error: error.message });
    }


}