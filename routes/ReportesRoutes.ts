import { Router } from "express";
import { createProyecto, deleteProyecto, getProyecto, getProyectos, updateProyecto } from '../controllers/ProyectosControllers';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeProyectoById } from "../helpers/Validaciones-db";


const router = Router();

router.get('/', getProyectos);
router.get('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    validarCampos
], getProyecto);
router.post(
    "/",
    [
        check('descripcion', 'La descripcion es requerida').not().isEmpty(),
        check('title', 'title es requerida').not().isEmpty(),
        check('fecha_inicio', 'La fecha_inicio es requerida').not().isEmpty(),
        validarCampos
    ],
    createProyecto
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeProyectoById),
        validarCampos
    ],
    updateProyecto);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeProyectoById),
        validarCampos
    ],
    deleteProyecto);



export default router;