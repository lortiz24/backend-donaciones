import { Router } from "express";
import {createUser} from '../controllers/Usuario';


const router = Router();


//router.get('/',       getUsuarios );
//router.get('/:id',    getUsuario );
router.post('/',      createUser );
//router.put('/:id',    putUsuario );
//router.delete('/:id', deleteUsuario );



export default router;