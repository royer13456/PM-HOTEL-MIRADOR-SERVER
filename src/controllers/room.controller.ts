import { request, Request, Response } from "express"
import { connect } from "./../database";
import { Room } from "./../interface/Room";

export const getRooms = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const rooms = await conn.query("SELECT * FROM room");
    return res.json(rooms[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const getRoom = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const response = await conn.query("SELECT * FROM room WHERE id=?", [id]);
    return res.json(response[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

export const createRoom = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const newRoom: Room = req.body;
    await conn.query("INSERT INTO room SET ?", [newRoom]);
    return res.json({
      message: "room created successfully",
    });
  } catch (error) {
    console.error(error);
  }
}

export const updateRoom = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const { id } = req.params;
    const updatedRoom: Room = req.body;
    await conn.query("UPDATE room SET ? WHERE id = ?", [updatedRoom, id]);
    return res.json({
      "message": "room updated successfully",
    });
  } catch (error) {
    res.status(404).send(error);
  }
}

export const deleteRoom = async (req: Request, res: Response) => {
  const conn = connect();
  const { id } = req.params;
  await conn.query('DELETE FROM room WHERE id=?',[id]);
  res.send("DELETE ROOM")
}