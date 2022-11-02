import { Response, Request } from 'express'
import moment from 'moment';
import DonaccionesModels from '../models/DonacionesModels'
import ProyectosModels from '../models/ProyectosModels'
import ObjetosModels from '../models/ObjetosVariosModels'
import VisitasModels from '../models/VisitasModels'
const mongoose = require('mongoose');

export const getCantidadProyectos = async (req: Request, res: Response) => {
    const { proyecto_id } = req.params
    try {
        const donaciones = await DonaccionesModels.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) })
        res.status(200).json({ cantidad: donaciones.length })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

export const getEstadisticasVisitas = async (req: Request, res: Response) => {
    try {
        let tiposVisitas = ["CARD_INICIO", "LIST_PROYECTS", "visita"]
        let response = {}
        for (const tipoVisita of tiposVisitas) {
            const visitas = await VisitasModels.find({ "action.type": tipoVisita })
            response = {
                ...response, [tipoVisita]: {
                    cantidad: visitas.length, visitas: visitas.map((item: any) => {
                        return {
                            ip: item.ip.replace("::ffff:", ""),
                            fecha:item.fecha
                        }
                    })
                }
            }
        }


        res.status(200).json(response)
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const getCountPersonsDonacion = async (req: Request, res: Response) => {
    try {
        let cantidadByProyecto: any[] = []
        let DonacionesByRole: any = {}
        const proyectos = await ProyectosModels.find({})
        const Objetos = await ObjetosModels.find({ tipo: "ROLES" })
        for (const proyecto of proyectos) {
            const resul = await DonaccionesModels.find({ proyecto: proyecto._id })
            for (const objeto of Objetos) {
                const resultadoByRole = await DonaccionesModels.find({ proyecto: proyecto._id, tipo: objeto.objeto.value })
                DonacionesByRole = { ...DonacionesByRole, [objeto.objeto.value]: resultadoByRole.length }
            }
            const cantidadDonaciones = resul.length
            const promedioDonacion = resul.reduce((acum: any, act: any) => {
                return acum + act.monto_donacion
            }, 0) / resul.length
            cantidadByProyecto.push({ proyecto: proyecto.title, cantidadDonaciones, promedioDonacion: promedioDonacion.toFixed(3), ...DonacionesByRole })
        }


        res.status(200).json({ cantidadByProyecto })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

export const getMetricasProyectos = async (req: Request, res: Response) => {
    const { proyecto_id } = req.params
    try {
        const donaciones = await DonaccionesModels.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) })
        const proyectos = await ProyectosModels.findById(proyecto_id)
        let mongoAlcanzado = 0
        donaciones.forEach((element: any) => {
            mongoAlcanzado += element.monto_donacion
        });
        const inicio = moment();
        const final = moment(proyectos.fecha_objetivo);
        const diasFaltantes = final.diff(inicio, "days")
        const procentajeAlcanzado = ((mongoAlcanzado / proyectos.monto_meta) * 100).toFixed()
        res.status(200).json({ mongoAlcanzado, diasFaltantes, monto_meta: proyectos.monto_meta, procentajeAlcanzado })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

