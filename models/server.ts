import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import donanteRouter from '../routes/donantes';
import proyectosRoutes from '../routes/ProyectosRoutes';
import donacionesRoutes from '../routes/DonacionesRoutes';
import apiRoutes from '../routes/ApiRoutes';

class Server {
    private app: Application
    private port: string
    // private userRoute: string
    // private reservacionesRoute: string
    // private authRoute: string
    private donanteRoute: string
    private proyectosRoute: string
    private donacionesRoute: string
    private api: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        //Inicializando rutas

        this.donanteRoute = '/api/visitas'
        this.proyectosRoute = '/api/proyectos'
        this.donacionesRoute = '/api/donaciones'
        this.api = '/'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes() {
        this.app.use(this.donanteRoute, donanteRouter)
        this.app.use(this.proyectosRoute, proyectosRoutes)
        this.app.use(this.donacionesRoute, donacionesRoutes)
        this.app.use(this.api, apiRoutes)
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