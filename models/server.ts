import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import usuarioRouter from '../routes/usuarios';
import bookRouter from '../routes/books';
import prestamoRouter from '../routes/prestamos';
import reservacionRouter from '../routes/reservaciones';
import authRouter from '../routes/auth';

class Server{
    private app: Application
    private port: string
    private userRoute:string
    private bookRoute:string
    private devolucionesRoute:string
    private reservacionesRoute:string
    private prestamosRoute:string
    private authRoute:string
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'
        //Inicializando rutas
        this.userRoute='/api/users'
        this.bookRoute='/api/books'
        this.devolucionesRoute='/api/devoluciones'
        this.reservacionesRoute='/api/reservaciones'
        this.prestamosRoute='/api/prestamos'
        this.authRoute='/api/auth'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes(){
        this.app.use(this.userRoute, usuarioRouter)
        this.app.use(this.bookRoute, bookRouter)
        this.app.use(this.reservacionesRoute, reservacionRouter)
        this.app.use(this.prestamosRoute, prestamoRouter)
        this.app.use(this.authRoute, authRouter)
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    async dbConnection (){
        await dbConnection();
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Server on port ' + this.port );
        })
    }
}

export default Server