import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBook } from '../controllers/books';
import { check } from "express-validator";
import {existeTitle,existeBookById} from "../helpers/db-validationBook";
import { validarCampos } from "../middlewares/validarCampos";
import { validadJWT } from "../middlewares/validadJWT";
import { tieneRole } from "../middlewares/validar-Roles";


const router = Router();

router.get('/', getBooks);
//router.get('/:id',    getUsuario );
router.post(
  "/",
  [
    validadJWT,
    tieneRole('ADMIN_ROLE'),
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('paginas', 'Las paginas son obligatorias').not().isEmpty(),
    check('portada', 'La portada es obligatoria').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('title').custom(existeTitle),
    validarCampos
  ],
  createBook
);
router.put(
  '/:id',
  [
    validadJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeBookById),
    validarCampos
  ],
  updateBook);

router.delete(
  '/:id',
  [
    validadJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeBookById),
    validarCampos
  ],
  deleteBook);



export default router;