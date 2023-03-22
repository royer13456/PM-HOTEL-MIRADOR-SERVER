import { Request, Response } from "express"
import { connect } from "../database";
import { Recommendation } from "../interface/Recommendation";

export const getRecommendations = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const answers = await conn.query("SELECT * FROM recommendation");
    res.json(answers[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const getRecommendation = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const response = await conn.query("SELECT * FROM recommendation WHERE id=?", [id]);
    return res.json(response[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const createRecommendation = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const newRecommendation: Recommendation = req.body;
    await conn.query("INSERT INTO recommendation SET ?", [newRecommendation]);
    return res.json({
      message: "recommendations room created successfully",
    });
  } catch (error) {
    console.error(error);
  }
}

export const updateRecommendation = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const updatedRecommendation: Recommendation = req.body;
    await conn.query("UPDATE recommendation SET ? WHERE id = ?", [updatedRecommendation, id]);
    return res.json({
      "message": "recommendations room updated successfully",
    });
  } catch (error) {
    res.status(404).send(error);
  }
}

export const deleteRecommendation = async (req: Request, res: Response) => {
  const conn = connect();
  const { id } = req.params;
  await conn.query('DELETE FROM recommendation WHERE id=?', [id]);
  res.send("DELETE RECOMMENDATION")
}
