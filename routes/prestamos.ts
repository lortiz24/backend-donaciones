import { Router } from "express";
import { createPrestamos,deletePrestamos,getPrestamos,updatePrestamos} from '../controllers/prestamos';
import { check,query } from "express-validator";
import {devueltoValido, existePrestamoById} from "../helpers/db-validationPrestamos";
import { validarCampos } from "../middlewares/validarCampos";

const router = Router();

router.get(
  '/',
  [ 
    query('devuelto').custom(devueltoValido),
    validarCampos
  ],
getPrestamos);
//router.get('/:id',    getUsuario );
router.post(
  "/",
  [
    check('fechaI', 'La fechaI es requerida').notEmpty(),
    check('fechaI', 'La fechaI no es una fecha valida').isDate(),
    check('fechaF', 'La fechaF es requerida').notEmpty(),
    check('fechaF', 'La fechaF no es una fecha valida').isDate(),
    check('lector', 'El id de lector es requerida').notEmpty(),
    check('lector', 'El id de lector no es un id valido').isMongoId(),
    check('book', 'El id de book es requerida').notEmpty(),
    check('book', 'El id de book no es un id valido').isMongoId(),
    validarCampos
  ],
  createPrestamos
);
router.put(
  '/:id',
  updatePrestamos);

router.delete(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existePrestamoById),
    validarCampos
  ],
  deletePrestamos);



export default router;