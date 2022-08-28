import { Router } from "express";
import { createProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../controllers/ProyectosControllers';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeReservacionById } from "../helpers/db-validationReservaciones";


const router = Router();

router.get('/', getProyectos);
router.get('/:id', getProyecto);
router.post(
    "/",
    createProyecto
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeReservacionById),
        validarCampos
    ],
    updateProyecto);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeReservacionById),
        validarCampos
    ],
    deleteProyecto);



export default router;