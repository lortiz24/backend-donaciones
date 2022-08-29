import { Router } from "express";
import { check } from "express-validator";
import { createDonantes, deleteDonantes, getDonante, getDonantes, updateDonantes } from "../controllers/Donantes";
import { existeDonanteById } from "../helpers/Validaciones-db";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getDonantes);
router.get('/:id', getDonante);

router.post(
    "/",
    [
        check('ip', 'Ip es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createDonantes
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeDonanteById),
        validarCampos
    ],
    updateDonantes);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeDonanteById),
        validarCampos
    ],
    deleteDonantes);



export default router;