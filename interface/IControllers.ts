const { Schema, model } = require('mongoose')

interface IRequestBodyUsuarios {
    nombre: string;
    email: string;
    tipo: string;
    img: string;
    descripcion: string;
    puesto: string;

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
    tipo: string

}

interface IRequestBodyContacto {
    name: string;
    email: string;
    message: string;

}
interface IRequestBodyVisita {
    ip: string;
    fecha: string;

}