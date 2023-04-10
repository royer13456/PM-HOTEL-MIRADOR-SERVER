import { Router } from "express";
const router = Router();
// Controllers
import {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
} from "./../controllers/room.controller";

/**
 * @swagger
 * /room:
 *   get:
 *     tags:
 *       - Habitaciones
 *     summary: Obtener una lista de todas las habitaciones disponibles
 *     description: Recupera una lista de todas las habitaciones que actualmente están disponibles
 *     responses:
 *       200:
 *         description: Una lista de todas las habitaciones disponibles
 *         content:
 *           application/json:
 *             schema:
 *       404:
 *         description: No se encontraron habitaciones
 *       500:
 *         description: Error interno del servidor
 */

router.get('/room', getRooms);

/**
 * @swagger
 * /room/{id}:
 *   get:
 *     tags:
 *       - Habitaciones
 *     summary: Obtener una habitación por ID
 *     description: Obtiene una habitación existente identificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habitación a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Habitación encontrada.
 *         content:
 *           application/json:
  *       404:
 *         description: No se encontró una habitación con el ID proporcionado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/room/:id', getRoom);

/**
 * @swagger
 * /room:
 *   post:
 *     tags:
 *       - Habitaciones
 *     summary: Crear una nueva habitación
 *     description: Crea una nueva habitación con la información proporcionada.
 *     requestBody:
 *       description: Objeto JSON que contiene la información de la nueva habitación.
 *       required: true
 *       content:
 *         application/json:
  *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: La habitación se creó correctamente.
 *         content:
 *           application/json:
  *       400:
 *         description: Error en la solicitud debido a datos faltantes o inválidos.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/room', createRoom);

/**
 * @swagger
 * /room/{id}:
 *   patch:
 *     tags:
 *       - Habitaciones
 *     summary: Actualizar una habitación existente
 *     description: Actualiza la información de una habitación existente identificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habitación a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Objeto JSON que contiene la información actualizada de la habitación.
 *       required: true
 *       content:
 *         application/json:
  *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: La habitación se actualizó correctamente.
 *         content:
 *           application/json:
  *       400:
 *         description: Error en la solicitud debido a datos faltantes o inválidos.
 *       404:
 *         description: No se encontró una habitación con el ID proporcionado.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch('/room/:id', updateRoom);

/**
 * @swagger
 * /room/{id}:
 *   delete:
 *     tags:
 *       - Habitaciones
 *     summary: Eliminar una habitación por ID
 *     description: Elimina una habitación existente identificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habitación a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: Habitación eliminada correctamente.
 *       404:
 *         description: No se encontró una habitación con el ID proporcionado.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/room/:id', deleteRoom);

export default router;