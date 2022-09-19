import { Router } from "express";
import { check } from "express-validator";
import { createObjetosVario, deleteObjetosVario, getObjetosVario, getObjetosVarios, updateObjetosVario,getObjetosVarioByTipo } from "../controllers/ObjetosVariosControllers";
import { existeObjetoById } from "../helpers/Validaciones-db";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getObjetosVarios);
router.get('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    validarCampos
], getObjetosVario);

router.get('/tipo/:tipo', [
    check('tipo', 'El id no es valido').not().isEmpty(),
    validarCampos
], getObjetosVarioByTipo);

router.post(
    "/",
    [
        check('tipo', 'El tipo es requerido').not().isEmpty(),
        validarCampos
    ],
    createObjetosVario
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeObjetoById),

        validarCampos
    ],
    updateObjetosVario);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeObjetoById),
        validarCampos
    ],
    deleteObjetosVario);


export default router;