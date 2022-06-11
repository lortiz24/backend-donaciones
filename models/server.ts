import express, { Application } from 'express';
import usuarioRouter from '../routes/usuarios';
import cors from 'cors'
import { dbConnection } from '../db/config';
class Server{
    private app: Application
    private port: string
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()
    }

    routes(){
        this.app.use('/api/users', usuarioRouter)
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