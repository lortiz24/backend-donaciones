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
    img: string;
    descripcion: string;
    lider?: string;
    caracteristica?: string;
}
interface IRequestBodyDonacion {
    proyecto: string;
    donante: string;
    monto_meta?: string;
    fecha_inicio: Date;
    fecha_objetivo?: Date;
}