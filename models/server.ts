import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import donanteRouter from '../routes/donantes';
import mediosPagosRouter from '../routes/MediosPagos';

class Server {
    private app: Application
    private port: string
    // private userRoute: string
    // private reservacionesRoute: string
    // private authRoute: string
    private donanteRoute: string
    private mediosPagosRoute: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        //Inicializando rutas

        this.donanteRoute = '/api/donante'
        this.mediosPagosRoute = '/api/medios_pagos'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes() {
        this.app.use(this.donanteRoute, donanteRouter)
        this.app.use(this.mediosPagosRoute, mediosPagosRouter)
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    async dbConnection() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port ' + this.port);
        })
    }
}

export default Server