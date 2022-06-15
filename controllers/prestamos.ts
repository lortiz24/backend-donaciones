import { Response, Request } from 'express'
import Prestamos from '../models/prestamos'
import Book from '../models/books'
import Usuario from '../models/Usuarios'
export const getPrestamos = async (req: Request, res: Response) => {
    const { desde = 0, page = 1, limit = 5, devuelto } = req.query
    let query;
    if (devuelto==='false' || devuelto==='true') {
         query = { estado: true,devuelto }
    } else {
         query = { estado: true }    
    }
    const [prestamos, total] = await Promise.all(
        [Prestamos.
            find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            .populate({ path: 'lector', select: ['nombre', 'cedula', 'rol'] }).
            populate({ path: 'book', select: ['title', 'portada'] }).
            exec()

            , Prestamos.countDocuments(query)
        ])


    res.json({ desde, limit, page, total, body: prestamos })

}

export const createPrestamos = async (req: Request, res: Response) => {
    const { lector, book, fechaI, fechaF } = req.body;
    const prestamo = new Prestamos({ lector, book, fechaI, fechaF });

    //Guardar en base de datos
    await prestamo.save()
    res.json({ prestamo })
}

export const updatePrestamos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fechaF, devuelto } = req.body;

    //Actualizar en base de datos
    const prestamo = await Prestamos.findByIdAndUpdate(id, { fechaF, devuelto });
    res.json({
        prestamo
    });
}
export const deletePrestamos = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const prestamo = await Prestamos.findByIdAndUpdate(id, { estado: false });
    res.json({ prestamo })


}