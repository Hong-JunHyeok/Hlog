import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.file);
  res.json(req.file.filename);
};
