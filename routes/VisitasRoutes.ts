import { Router } from "express";
import {createVisita,getVisitas } from '../controllers/VisitasController';


const router = Router();

router.get('/', getVisitas);
router.post('/', createVisita);




export default router;