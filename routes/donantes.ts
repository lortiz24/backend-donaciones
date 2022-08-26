import { Router } from "express";
import { check } from "express-validator";
import { createDonantes, deleteDonantes, getDonantes, updateDonantes } from "../controllers/Donantes";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getDonantes);

router.post(
    "/",
    [
        check('montoDonacion', 'El montoDonacion es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createDonantes
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        validarCampos
    ],
    updateDonantes);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        validarCampos
    ],
    deleteDonantes);



export default router;