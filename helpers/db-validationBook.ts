import Book from "../models/books"

export const existeTitle=async(title:string)=>{
    const existeTitle = await Book.findOne({title})
    if (existeTitle) {
        throw new Error('El titulo ya esta registrado')
    }
}
export const existeBookById=async(id:string)=>{
    const existeBook = await Book.findById(id)
    if (!existeBook) {
        throw new Error(`No hay libro con el id: ${id}`)
    }
}


