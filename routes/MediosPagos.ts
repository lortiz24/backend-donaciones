import { Router } from "express";
import { createMedioDePago, deleteReservacion, getMediosDePago, getMediosDePagos, updateMedioDePago } from '../controllers/MediosPagos';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
import { existeReservacionById } from "../helpers/db-validationReservaciones";


const router = Router();

router.get('/', getMediosDePagos);
router.get('/:id', getMediosDePago);
router.post(
  "/",
  
  createMedioDePago
);
router.put(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    validarCampos
  ],
  updateMedioDePago);

router.delete(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    validarCampos
  ],
  deleteReservacion);
validarCampos

export default router;