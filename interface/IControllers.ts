const { Schema, model } = require('mongoose')

interface IRequestBodyDonantes {
    ip: string;

}

interface IRequestBodyProyectos {
    descripcion: string;
    title: string;
    fecha_inicio: Date;
    other?: string;
    img?: string;
    monto_meta?: string;
    fecha_objetivo?: Date;
    monto_recaudado: number;
}
interface IRequestBodyDonacion {
    proyecto: string;
    donante: string;
    medio_pago: string;
    monto_donacion: number,
    nombre: string;
<<<<<<< HEAD
    tipo: string

}
interface IRequestBodyContacto {
    name: string;
    email: string;
    message: string;
 

=======
    tipo: string,
    fecha:Date
>>>>>>> 62e4dbc1b6c2604da1e4341098b0fe018a30c61d
}
interface IRequestBodyContacto {
    name: string;
    email: string;
    message: string;
 

}