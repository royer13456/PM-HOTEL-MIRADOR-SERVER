import { Request, Response } from "express";

export const indexWelcome = (req: Request, res: Response) => {
  return res.json({
    message: "Welcome to HOTEL TORRE TORRE API"
  })
}