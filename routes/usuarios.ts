import { Router } from "express";
import { createUser, deleteUser, getUsers } from '../controllers/Usuario';
import { check } from "express-validator";

const router = Router();


router.get('/', getUsers);
//router.get('/:id',    getUsuario );
router.post(
    '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo no es valido').isEmail(),
        check('password', 'El password es obligatorio y debe tener mas de 6 letras').isLength({ min: 6 }),
    ],
    createUser);
//router.put('/:id',    putUsuario );
router.delete(
    '/:id',
    [

    ],
    deleteUser);



export default router;