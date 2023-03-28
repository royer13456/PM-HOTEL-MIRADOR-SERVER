import { Request, Response } from "express";
import { connect } from "./../database";
import { Reservation } from "./../interface/Reservation";

export const getReserves = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const reserves = await conn.query("SELECT * FROM reservation");
    return res.json(reserves[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const getReserve = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const response = await conn.query("SELECT * FROM reservation WHERE id = ?", [id]);
    return res.json(response[0])
  } catch (error) {
    res.status(404).send(error);
  }
}

export const createReserve = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const newReserve: Reservation = req.body;
    await conn.query("INSERT INTO reservation SET ?", [newReserve]);
    return res.json({
      message: "successfully booked"
    })
  } catch (error) {
    res.status(404).send(error);
  }
}

export const updateReserve = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const updatedReserve: Reservation = req.body;
    await conn.query("UPDATE reservation SET WHERE id = ?", [updatedReserve, id]);
    return res.json({
      message: "Reserve updated successfully"
    })
  } catch (error) {
    res.status(404).send(error);
  }
}