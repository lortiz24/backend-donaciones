import { Router } from "express";
import { check } from "express-validator";
import { createDonacion, deleteDonacion, getDonacion, getDonaciones, updateDonacion } from "../controllers/DonacionesController";
import { existeDonacionById } from "../helpers/Validaciones-db";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getDonaciones);
router.get('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    validarCampos
], getDonacion);

router.post(
    "/",
    [
        check('proyecto', 'El proyecto no es valido').isMongoId(),
        check('donante', 'El donante no es valido').isMongoId(),
        check('medio_pago', 'El medio_pago es requerido').not().isEmpty(),
        validarCampos
    ],
    createDonacion
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeDonacionById),

        validarCampos
    ],
    updateDonacion);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        check('id').custom(existeDonacionById),
        validarCampos
    ],
    deleteDonacion);



export default router;