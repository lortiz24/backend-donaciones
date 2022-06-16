import { Response, Request } from 'express'
import Reservacion from '../models/reservaciones'
import Book from '../models/books'

export const getReservaciones = async (req: Request, res: Response) => {
    const { desde = 0, page = 1, limit = 5, resolucion } = req.query
    let query;
    if (resolucion) {
        query = { estado: true, resolucion }
    } else {
        query = { estado: true }
    }
    const [reservaciones, total] = await Promise.all(
        [Reservacion.
            find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            .populate({ path: 'lector', select: ['nombre', 'cedula', 'rol'] }).
            populate({ path: 'book', select: ['title', 'portada'] }).
            exec()

            , Reservacion.countDocuments(query)
        ])


    res.json({ desde, limit, page, total, body: reservaciones })

}

export const createReservacion = async (req: Request, res: Response) => {
    const { fechaReservacion, lector, book } = req.body
    //Validar un usuario no reserve el mismo libro
    //const reservacionesByLector = await Reservacion.find({ lector, book, estado: true })
    const [reservacionesByLector,cantReservas] = await Promise.all([
        Reservacion.find({ lector, book, estado: true }),
        Reservacion.find({ book, estado: true })
    ])
    if (reservacionesByLector.length !== 0) {
        return res.status(400).json({ msg: `Ya existe una reservacion del libro ${book} por el usuario: ${lector}` })
    }
    
    const reservacion = new Reservacion({ fechaReservacion, lector, book });
    //Establecer prioridad
    console.log(cantReservas.length+1)
    reservacion.prioridad=cantReservas.length+1
    //Guardar en base de datos
    await reservacion.save()
    res.json({ reservacion })
}

export const updateReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { resolucion } = req.body;

    //Actualizar en base de datos
    const reservacion = await Reservacion.findByIdAndUpdate(id, { resolucion });
    res.json({
        reservacion
    });
}
export const deleteReservacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const reservacion = await Reservacion.findByIdAndUpdate(id, { estado: false });
    res.json({ reservacion })


}