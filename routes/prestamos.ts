import { Router } from "express";
import { createPrestamos, deletePrestamos, getPrestamos, updatePrestamos } from '../controllers/prestamos';
import { check, query } from "express-validator";
import { devueltoValido, existePrestamoById, libroNoPrestado } from "../helpers/db-validationPrestamos";
import { validarCampos } from "../middlewares/validarCampos";
import { existeBookById } from "../helpers/db-validationBook";
import { existeUserById } from "../helpers/db-validationUser";
import { validadJWT } from "../middlewares/validadJWT";
import { tieneRole } from "../middlewares/validar-Roles";

const router = Router();

router.get(
  '/',
  [
    query('devuelto').custom(devueltoValido),
    //query('devuelto').isIn(['true', 'false']),

    validarCampos
  ],
  getPrestamos);
//router.get('/:id',    getUsuario );
router.post(
  "/",
  [
    validadJWT,
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('fechaI', 'La fechaI es requerida').notEmpty(),
    check('fechaI', 'La fechaI no es una fecha valida').isDate(),
    check('fechaF', 'La fechaF es requerida').notEmpty(),
    check('fechaF', 'La fechaF no es una fecha valida').isDate(),
    check('lector', 'El id de lector es requerida').notEmpty(),
    check('lector', 'El id de lector no es un id valido').isMongoId(),
    check('lector').custom(existeUserById),
    check('book', 'El id de book es requerida').notEmpty(),
    check('book', 'El id de book no es un id valido').isMongoId(),
    check('book').custom(libroNoPrestado),
    check('book').custom(existeBookById),

    validarCampos
  ],
  createPrestamos
);
router.put(
  '/:id',
  [
    validadJWT,
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existePrestamoById),
    validarCampos
  ],
  updatePrestamos);

router.delete(
  '/:id',
  [
    validadJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existePrestamoById),
    validarCampos
  ],
  deletePrestamos);



export default router;