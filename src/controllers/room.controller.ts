import { request, Request, Response } from "express"
import { connect } from "./../database";
import { Room } from "./../interface/Room";

/**
 * It connects to the database, queries the database for all the rooms, and returns the results in JSON format.
 * @param {Request} req - Request - This is the request object that contains the request information.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns An array of objects.
 */
export const getRooms = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const rooms = await conn.query("SELECT * FROM room");
    return res.json(rooms[0]);
  } catch (error) {
    res.status(404).send(error);
  }
}

/**
 * It's a function that takes a request and a response, and returns a response.
 * 
 * The function is async, so it returns a promise.
 * 
 * The function uses the connect function to get a connection to the database.
 * 
 * The function uses the request object to get the id from the request parameters.
 * 
 * The function uses the connection to query the database for the room with the given id.
 * 
 * The function returns the room as a JSON object.
 * 
 * The function catches any errors and returns a 404 status code and the error message.
 * @param {Request} req - Request - The request object
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns The response is an array of objects.
 */
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

/**
 * It creates a new room in the database.
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns a promise.
 */
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

/**
 * It takes a request and a response, and then it tries to update a room in the database. 
 * 
 * If it succeeds, it returns a message saying that the room was updated successfully. 
 * 
 * If it fails, it returns an error.
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response - The response object that will be sent back to the client.
 * @returns The updated room.
 */
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

/**
 * It deletes a room from the database
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response - The response object
 */
export const deleteRoom = async (req: Request, res: Response) => {
  const conn = connect();
  const { id } = req.params;
  await conn.query('DELETE FROM room WHERE id=?', [id]);
  res.send("DELETE ROOM")
}