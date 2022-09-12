import { Router } from "express";
import { check } from "express-validator";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/UsuarioControllers";
import { existUsuarioById } from "../helpers/Validaciones-db";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);

router.post(
    "/",
    [
        check('email', 'email es obligatorio').not().isEmpty(),
        check('nombre', 'nombre es obligatorio').not().isEmpty(),
        check('tipo', 'tipo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createUsuario
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existUsuarioById),
        validarCampos
    ],
    updateUsuario);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existUsuarioById),
        validarCampos
    ],
    deleteUsuario);



export default router;