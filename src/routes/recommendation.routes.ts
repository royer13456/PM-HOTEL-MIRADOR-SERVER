import { Router } from "express";
const router = Router();
// Controllers
import {
  getRecommendations,
  getRecommendation,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation
} from "./../controllers/recommendation.controller";

/**
 * @swagger
 * /recommendation:
 *   get:
 *     tags:
 *       - Recomendaciones
 *     summary: Obtiene una lista de recomendaciones
 *     description: Retorna una lista de recomendaciones basadas en el historial de reservas del usuario.
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         description: ID del usuario para el que se solicitan las recomendaciones.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Lista de recomendaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recommendation'
 *       400:
 *         description: Petición incorrecta, faltan parámetros o están malformados.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/recommendation', getRecommendations);

/**
 * @swagger
 * /recommendation/{id}:
 *   get:
 *     tags:
 *       - Recomendaciones
 *     summary: Obtiene una recomendación por ID
 *     description: Retorna una recomendación especificada por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recomendación a obtener.
 *         schema:
 *           type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Recomendación por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recommendation'
 *       404:
 *         description: La recomendación no existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/recommendation/:id', getRecommendation);

/**
 * @swagger
 * /recommendation:
 *   post:
 *     tags:
 *       - Recomendaciones
 *     summary: Crea una nueva recomendación.
 *     description: Crea una nueva recomendación con la información proporcionada.
 *     requestBody:
 *       required: true
 *       description: Datos de la recomendación a crear.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecommendationInput'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: La recomendación ha sido creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recommendation'
 *       400:
 *         description: Petición inválida. Faltan parámetros obligatorios o no tienen el formato correcto.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/recommendation', createRecommendation);

/**
 * @swagger
 * /recommendation/{id}:
 *   patch:
 *     tags:
 *       - Recomendaciones
 *     summary: Actualiza una recomendación existente.
 *     description: Actualiza la información de una recomendación existente con el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recomendación a actualizar.
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       description: Datos actualizados de la recomendación.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecommendationInput'
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: La recomendación ha sido actualizada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recommendation'
 *       400:
 *         description: Petición inválida. Faltan parámetros obligatorios o no tienen el formato correcto.
 *       404:
 *         description: La recomendación con el ID proporcionado no fue encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.patch('/recommendation/:id', updateRecommendation);

/**
 * @swagger
 * /recommendation/{id}:
 *   delete:
 *     tags:
 *       - Recomendaciones
 *     summary: Elimina una recomendación existente.
 *     description: Elimina una recomendación existente con el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la recomendación a eliminar.
 *         schema:
 *           type: string
 *           format: uuid
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: La recomendación ha sido eliminada con éxito.
 *       404:
 *         description: La recomendación con el ID proporcionado no fue encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/recommendation/:id', deleteRecommendation);

export default router;