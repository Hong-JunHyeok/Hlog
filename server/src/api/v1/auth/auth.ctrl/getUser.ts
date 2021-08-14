import { NextFunction, Request, Response } from "express";
import User from "../../../../entity/User";
import * as logger from "../../../../lib/logger";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_id = req.params.userIdx;

    const userRepo = User.getRepository();
    const user = await userRepo.findOne({
      where: {
        user_id,
      },
    });

    if (user) {
      res.status(200).json({
        message: "유저 정보 조회성공",
        user,
      });
    } else {
      res.status(404).json({
        message: "유저 정보가 없습니다.",
        user: null,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
