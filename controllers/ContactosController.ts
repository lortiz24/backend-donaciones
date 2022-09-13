import { Response, Request } from 'express'
import ContactoModels from '../models/ContactosModels'



export const getContactos = async (req: Request, res: Response) => {
    try {
        const Contactos = await ContactoModels.find({})
        res.status(200).send(Contactos)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const Donacion = await ContactoModels.findById(id)
        res.status(200).send(Donacion)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const createContacto = async (req: Request, res: Response) => {
    try {
        const { email,message,name,asunto} = req.body as IRequestBodyContacto;
        const Donacion = new ContactoModels({ email,message,name ,asunto});
        //Guardar en base de datos
        await Donacion.save()
        res.status(201).send(Donacion)
    } catch (error: any) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }

}

export const updateContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { email,message,name} = req.body as IRequestBodyContacto;
        let updateContacto = {}
        if (email !== undefined) updateContacto = { ...updateContacto, email }
        if (message !== undefined) updateContacto = { ...updateContacto, message }
        if (name !== undefined) updateContacto = { ...updateContacto, name }
        
        //Actualizar en base de datos
        const Donacion = await ContactoModels.findByIdAndUpdate(id, updateContacto);
        res.status(201).send(Donacion);

    } catch (error: any) {
        res.status(500).json(error.message);
    }
}
export const deleteContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Donacion = await ContactoModels.findByIdAndDelete(id);
        res.send(Donacion)
    } catch (error: any) {
        res.json({ error: error.message });
    }


}