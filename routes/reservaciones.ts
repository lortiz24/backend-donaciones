import { Router } from "express";
import { createReservacion,deleteReservacion,getReservaciones,updateReservacion} from '../controllers/reservaciones';
import { check,query } from "express-validator";
import { existePrestamoById} from "../helpers/db-validationPrestamos";
import { validarCampos } from "../middlewares/validarCampos";
import { existeBookById } from "../helpers/db-validationBook";
import { existeUserById } from "../helpers/db-validationUser";
import { resolucionValido,existeReservacionById,libroReservadoByLector } from "../helpers/db-validationReservaciones";

const router = Router();

router.get(
  '/',
  [ 
    query('resolucion').custom(resolucionValido),
    validarCampos
  ],
getReservaciones);
//router.get('/:id',    getUsuario );
router.post(
  "/",
   [
    check('fechaReservacion', 'La fechaReservacion es requerida').notEmpty(),
    check('fechaReservacion', 'La fechaReservacion no es una fecha valida').isDate(),
    check('lector', 'El id de lector es requerida').notEmpty(),
    check('lector', 'El id de lector no es un id valido').isMongoId(),
    check('lector').custom(existeUserById),
    check('book', 'El id de book es requerida').notEmpty(),
    check('book', 'El id de book no es un id valido').isMongoId(),
    check('book').custom(existeBookById),
    validarCampos
  ], 
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