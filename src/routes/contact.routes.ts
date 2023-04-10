import { Router } from "express";
const router = Router();
// Controllers
import {
  getMessages,
  createMessage
} from "../controllers/contact.controller";

/**
 * @swagger
 * /contact:
 *   get:
 *     tags:
 *       - Contacto
 *     summary: Obtiene los mensajes de contacto.
 *     description: Retorna todos los mensajes de contacto almacenados en la base de datos.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de mensajes de contacto obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       500:
 *         description: Error al obtener los mensajes de contacto.
 */
router.get('/contact', getMessages);

/**
 * @swagger
 * /contact:
 *   post:
 *     tags:
 *       - Contacto
 *     summary: Crea un nuevo mensaje de contacto.
 *     description: Crea un nuevo mensaje de contacto y lo almacena en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MessageInput'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: El mensaje de contacto ha sido creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Los datos proporcionados para el mensaje de contacto no son válidos.
 *       500:
 *         description: Error al crear el mensaje de contacto.
 */
router.post('/contact', createMessage);

export default router;