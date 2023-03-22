import { Router } from "express";
const router = Router();
// Controllers
import { getRecommendations, getRecommendation, createRecommendation, updateRecommendation, deleteRecommendation } from "./../controllers/recommendation.controller";

router.get('/recommendation', getRecommendations);

router.get('/recommendation/:id', getRecommendation);

router.post('/recommendation', createRecommendation);

router.patch('/recommendation/:id', updateRecommendation);

router.delete('/recommendation/:id', deleteRecommendation);

export default router;