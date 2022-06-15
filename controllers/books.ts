import { Response, Request } from 'express'
import Book from '../models/books'

export const getBooks = async (req: Request, res: Response) => {
    const { desde = 0, page = 1, limit = 5 } = req.query
    const query = { estado: true }
    const [books, total] = await Promise.all(
        [Book.find(query)
            .skip(Number(desde))
            .limit(Number(limit))
            , Book.countDocuments(query)
        ])
    res.json({ desde, limit, page, total, body: books })
}
export const createBook = async (req: Request, res: Response) => {
    const { title, autores, paginas, genero,portada,editorial } = req.body;
    const book = new Book({ title, autores, paginas, genero,portada,editorial });

    //Guardar en base de datos
    await book.save()
    res.json({ book })
}

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;
   
    //Actualizar en base de datos
    const book = await Book.findByIdAndUpdate(id, resto);
    res.json({
        book
    });
}
export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    //Efectuar eliminacion
    const book = await Book.findByIdAndUpdate(id, { estado: false });
    res.json({ book })
}