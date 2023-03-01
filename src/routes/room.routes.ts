import { Router } from "express";
const router = Router();
// Controllers
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from "./../controllers/room.controller";

router.get('/', getRooms);

router.get('/:id', getRoom);

router.post('/', createRoom);

router.patch('/:id', updateRoom);

router.delete('/:id', deleteRoom);

export default router;