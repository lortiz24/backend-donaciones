import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import usuarioRoutes from '../routes/UsuarioRoutes';
import proyectosRoutes from '../routes/ProyectosRoutes';
import donacionesRoutes from '../routes/DonacionesRoutes';
import apiRoutes from '../routes/ApiRoutes';
import contacctosRoutes from '../routes/ContactosRoutes';
import reportesRoutes from '../routes/ReportesRoutes';
import visitasRoutes from '../routes/VisitasRoutes';
import objetosVariosRoutes from '../routes/ObjetosVariosRoutes';

class Server {
    private app: Application
    private port: string
    private usuarioRoute: string
    private proyectosRoute: string
    private donacionesRoute: string
    private api: string
    private contactosRoute: string
    private reportesRoute: string
    private visitasRoute: string
    private objetoVarioRoute: string

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        
        //Inicializando rutas

        this.usuarioRoute = '/api/usuarios'
        this.proyectosRoute = '/api/proyectos'
        this.donacionesRoute = '/api/donaciones'
        this.contactosRoute = '/api/contactos'
        this.reportesRoute = '/api/reportes'
        this.visitasRoute = '/api/visitas'
        this.objetoVarioRoute = '/api/objetosvarios'
        this.api = '/'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes() {
        this.app.use(this.usuarioRoute, usuarioRoutes)
        this.app.use(this.proyectosRoute, proyectosRoutes)
        this.app.use(this.donacionesRoute, donacionesRoutes)
        this.app.use(this.contactosRoute, contacctosRoutes)
        this.app.use(this.reportesRoute, reportesRoutes)
        this.app.use(this.visitasRoute, visitasRoutes)
        this.app.use(this.api, apiRoutes)
        this.app.use(this.objetoVarioRoute, objetosVariosRoutes)
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.set('trust proxy', true);
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