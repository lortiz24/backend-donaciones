import { Router } from "express";
import { createUser, getUsers } from '../controllers/Usuario';
import { check } from "express-validator";

const router = Router();


router.get('/', getUsers);
//router.get('/:id',    getUsuario );
router.post(
    '/',
    [
        check('')
    ],
    createUser);
//router.put('/:id',    putUsuario );
//router.delete('/:id', deleteUsuario );



export default router;