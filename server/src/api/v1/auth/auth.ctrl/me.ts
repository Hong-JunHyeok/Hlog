import { NextFunction, Request, Response } from "express";
import User from "../../../../entity/User";
import * as logger from "../../../../lib/logger";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
      });

      logger.green("내 정보 조회성공");
      res.status(200).json({
        message: "내 정보 조회성공",
        user,
      });
    } else {
      logger.yellow("내 정보 조회실패");
      res.status(404).json({
        message: "내 정보 조회실패",
        user: null,
      });
    }
    // if (req.user) {
    //   logger.green("내 정보 조회성공");
    //   return res.status(200).json({
    //     user: req.user,
    //   });
    // } else {
    //   logger.yellow("내 정보 조회실패");
    //   return res.status(404).json({
    //     user: null,
    //   });
    // }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
