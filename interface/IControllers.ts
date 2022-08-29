const { Schema, model } = require('mongoose')

interface IRequestBodyDonantes {
    nombre: string;
    monto_donacion: number,
    tipo: string
}

interface IRequestBodyProyectos {
    descripcion: string;
    title: string;
    fecha_inicio: Date;
    other?: string;
    img?: string;
    monto_meta?: string;
    fecha_objetivo?: Date;
}
interface IRequestBodyDonacion {
    proyecto: string;
    donante: string;
    medio_pago: string;

}