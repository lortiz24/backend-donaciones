import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUSer } from '../controllers/Usuario';
import { check, body } from "express-validator";
import { emailExists, esRolValido, existeUserById } from "../helpers/db-validationUser";
import { validarCampos } from "../middlewares/validarCampos";

const router = Router();


router.get('/', getUsers);
//router.get('/:id',    getUsuario );
router.post(
  "/",
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('cedula', 'La cedula es obligatoria').not().isEmpty(),
    check('password', 'El password es obligatorio y debe tener mas de 6 letras').isLength({ min: 6 }),
    check('rol').custom(esRolValido),
    check('correo').custom(emailExists),
    validarCampos
  ],
  createUser
);
router.put(
  '/:id',
  [
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeUserById),
    check('rol').custom(esRolValido),
    validarCampos
  ],
  updateUSer);

router.delete(
  '/:id',
  [
    
    check('id', 'El id no es valido').isMongoId(),
    check('id').custom(existeUserById),
    validarCampos
  ],
  deleteUser);



export default router;