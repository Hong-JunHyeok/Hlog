import { NextFunction, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../../../entity/User";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const { user_id } = req.user;
    const userRepo = getRepository(User);
    const user: User = await userRepo.findOne({
      where: {
        user_id,
      },
    });

    return res.status(200).json({
      message: "유저조회 성공",
      user,
    });
  } catch (error) {
    next(error);
  }
};
