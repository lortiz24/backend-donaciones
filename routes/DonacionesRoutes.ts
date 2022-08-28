import { Router } from "express";
import { check } from "express-validator";
import { createDonacion, deleteDonacion,getDonacion, getDonaciones, updateDonacion } from "../controllers/DonacionesController";
import { validarCampos } from "../middlewares/validarCampos";



const router = Router();

router.get('/', getDonaciones);
router.get('/:id',getDonacion);

router.post(
    "/",
    [
        check('proyecto', 'El proyecto no es valido').isMongoId(),
        check('donante', 'El donante no es valido').isMongoId
        (),   
        validarCampos
    ],
    createDonacion
);
router.put(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        validarCampos
    ],
    updateDonacion);

router.delete(
    '/:id',
    [
        check('id', 'El id no es valido').isMongoId(),
        validarCampos
    ],
    deleteDonacion);



export default router;