import { Router } from "express";
import { check } from "express-validator";
import { createContacto, deleteContacto, getContacto, getContactos, updateContacto } from "../controllers/ContactosController";
import { existeContactoById } from "../helpers/Validaciones-db";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getContactos);
router.get('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    validarCampos
], getContacto);

router.post(
    "/",
    [

        check('name', 'El name es requerido').not().isEmpty(),
        check('email', 'El email es requerido').not().isEmpty(),
        check('message', 'El message es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createContacto
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeContactoById),

        validarCampos
    ],
    updateContacto);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeContactoById),
        validarCampos
    ],
    deleteContacto);



export default router;