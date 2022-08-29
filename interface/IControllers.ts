const { Schema, model } = require('mongoose')

interface IRequestBodyDonantes {
    nombre: string;
    montoDonacion: number,
    tipo: string
}

interface IRequestBodyMediosPagos {
    nombre: string;
    tipo: string
}

interface IRequestBodyProyectos {
    img?: string;
    descripcion: string;
    title: string;
    other?: string;
    monto_meta?: string;
    fecha_inicio: Date;
    fecha_objetivo?: Date;
}
interface IRequestBodyDonacion {
    proyecto: string;
    donante: string;
    medio_pago: string;

}