import { Router } from "express";
const router = Router();

import {
  getReserves,
  getReserve,
  createReserve,
  updateReserve,
  getReservedRooms
} from "./../controllers/reserve.controller";

/**
 * @swagger
 * /reserve:
 *   get:
 *     tags:
 *       - Reservas
 *     summary: Obtener todas las reservas
 *     description: Retorna una lista de todas las reservas existentes.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de reservas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserve'
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/reserve', getReserves);

/**
 * @swagger
 * /reserve/{id}:
 *   get:
 *     tags:
 *       - Reservas
 *     summary: Obtener una reserva por ID
 *     description: Retorna una reserva existente identificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva a obtener.
 *         required: true
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Reserva por ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserve'
 *       404:
 *         description: No se encontró una reserva con el ID proporcionado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/reserve/:id', getReserve);

/**
 * @swagger
 * /reserve:
 *   post:
 *     tags:
 *       - Reservas
 *     summary: Crear una nueva reserva
 *     description: Crea una nueva reserva.
 *     requestBody:
 *       description: Objeto de reserva a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserve'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Reserva creada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserve'
 *       400:
 *         description: Petición incorrecta, faltan parámetros o están malformados.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/reserve', createReserve);

/**
 * @swagger
 * /reserve/{id}:
 *   patch:
 *     tags:
 *       - Reservas
 *     summary: Actualiza una reserva existente
 *     description: Actualiza una reserva existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Objeto de reserva actualizado.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserve'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Reserva actualizada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserve'
 *       400:
 *         description: Petición incorrecta, faltan parámetros o están malformados.
 *       404:
 *         description: La reserva con el ID especificado no existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch('/reserve/:id', updateReserve);

router.get('/reserved',getReservedRooms)

export default router;