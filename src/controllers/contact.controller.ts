import { Request, Response } from "express";
import { connect } from "./../database";
import { ContactMessage } from "../interface/ContactoMessage";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const messages = await conn.query('SELECT * FROM contact');
    return res.json(messages[0]);
  } catch (error) {
    console.log(error);
  }
}

export const createMessage = async (req: Request, res: Response) => {
  try {
    const conn = connect();
    const contactMessage: ContactMessage = req.body;
    await conn.query('INSERT INTO contact SET ?', [contactMessage]);
    return res.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
  }
}