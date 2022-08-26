import { Router } from "express";
import { createReservacion, deleteReservacion, getMediosDePago, getMediosDePagos, updateReservacion } from '../controllers/MediosPagos';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeReservacionById } from "../helpers/db-validationReservaciones";


const router = Router();

router.get('/', getMediosDePagos);
router.get('/:id', getMediosDePago);
router.post(
  "/",
  createReservacion
);
router.put(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    validarCampos
  ],
  updateReservacion);

router.delete(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    validarCampos
  ],
  deleteReservacion);



export default router;