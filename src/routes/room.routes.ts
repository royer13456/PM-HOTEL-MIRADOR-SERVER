import { Router } from "express";
const router = Router();
// Controllers
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from "./../controllers/room.controller";

router.get('/room', getRooms);

router.get('/room/:id', getRoom);

router.post('/room', createRoom);

router.patch('/room/:id', updateRoom);

router.delete('/room/:id', deleteRoom);

export default router;