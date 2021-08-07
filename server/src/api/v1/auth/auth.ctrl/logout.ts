import { NextFunction, Request, Response } from "express";
import * as logger from "../../../../lib/logger";

export default function (req: Request, res: Response, next: NextFunction) {
  req.logout();
  req.session.destroy((error) => {});
  res.status(200).send("로그아웃 성공");
}
