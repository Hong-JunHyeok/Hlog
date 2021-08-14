import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  res.json(req.file.filename);
};
