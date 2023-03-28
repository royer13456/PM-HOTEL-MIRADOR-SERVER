import { Router } from "express";
const router = Router();

import {
  getReserves,
  getReserve,
  createReserve,
  updateReserve
} from "./../controllers/reserve.controller";

router.get('/reserve', getReserves);

router.get('/reserve/:id', getReserve);

router.post('/reserve', createReserve);

router.patch('/reserve/:id', updateReserve);

export default router;