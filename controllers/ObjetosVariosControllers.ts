import { Response, Request } from 'express'
import ObjetosVariosModels from '../models/ObjetosVariosModels'



export const getObjetosVarios = async (req: Request, res: Response) => {
    try {
        const Objetos = await ObjetosVariosModels.find({})
        res.status(200).send(Objetos)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getObjetosVario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const Objeto = await ObjetosVariosModels.findById(id)
        res.status(200).send(Objeto)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getObjetosVarioByTipo = async (req: Request, res: Response) => {
    try {
        const { tipo } = req.params
        const Objeto = await ObjetosVariosModels.find({tipo:tipo.toUpperCase()})
        res.status(200).send(Objeto)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const createObjetosVario = async (req: Request, res: Response) => {
    try {
        const { descripcion="",objeto={},tipo=""} = req.body as IRequestBodyObjeto;
        const Objeto = new ObjetosVariosModels({ tipo:tipo.toUpperCase(),objeto,descripcion});
        //Guardar en base de datos
        await Objeto.save()
        res.status(201).send(Objeto)
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }

}

export const updateObjetosVario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { descripcion,objeto,tipo} = req.body as IRequestBodyObjeto;
        let updateObjeto = {}
        if (descripcion !== undefined) updateObjeto = { ...updateObjeto, descripcion }
        if (objeto !== undefined) updateObjeto = { ...updateObjeto, objeto }
        if (tipo !== undefined) updateObjeto = { ...updateObjeto, tipo:tipo.toUpperCase() }
        
        //Actualizar en base de datos
        const Objeto = await ObjetosVariosModels.findByIdAndUpdate(id, updateObjeto);
        res.status(201).send(Objeto);

    } catch (error: any) {
        res.status(500).json(error.message);
    }
}
export const deleteObjetosVario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Objeto = await ObjetosVariosModels.findByIdAndDelete(id);
        res.send(Objeto)
    } catch (error: any) {
        res.json({ error: error.message });
    }


}