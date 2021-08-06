import { NextFunction, Request, Response } from "express";
import * as logger from "../../../../lib/logger";

export default function (req: Request, res: Response, next: NextFunction) {
  req.logout();
  req.session.destroy(() => {
    return res.send("Failed");
  });
  logger.green("로그아웃 성공");
  return res.send("ok");
}
