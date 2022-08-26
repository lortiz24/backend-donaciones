import { Router } from "express";
import { createReservacion, deleteReservacion, getMediosDePago, updateReservacion } from '../controllers/MediosPagos';
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validarCampos";
// import { existePrestamoById } from "../helpers/db-validationPrestamos";
// import { existeBookById } from "../helpers/db-validationBook";
// import { existeUserById } from "../helpers/db-validationUser";
import {  existeReservacionById } from "../helpers/db-validationReservaciones";
import { tieneRole } from "../middlewares/validar-Roles";

const router = Router();

router.get('/', getMediosDePago);
router.get('/:id', getMediosDePago);
router.post(
  "/",
  // [
  //   check('fechaReservacion', 'La fechaReservacion es requerida').notEmpty(),
  //   validarCampos
  // ],
  createReservacion
);
router.put(
  '/:id',
  [
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    check('resolucion').isIn(['Pendiente', 'Suspendido']).withMessage(value => `${value} no es un valor valido`),
    validarCampos
  ],
  updateReservacion);

router.delete(
  '/:id',
  [
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeReservacionById),
    validarCampos
  ],
  deleteReservacion);



export default router;