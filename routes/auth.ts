import { Router } from "express"
const router = Router();
import { check } from "express-validator";

import { login } from "../controllers/auth";
import { validarCampos } from "../middlewares/validarCampos";


router.post(
  "/login",
  [
    check('correo','El correo es obligatorio').isEmail(),
    check('password','El password es obligatorio').notEmpty(),
    validarCampos
  ],
  login
);


export default router;
