import { Router } from "express";
const router = Router();
// Controllers
import { getMessages, createMessage } from "../controllers/contact.controller";

router.get('/contact', getMessages)

router.post('/contact', createMessage)

export default router;