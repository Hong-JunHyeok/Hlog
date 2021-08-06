import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../entity/User";
import { verifyToken } from "../lib/token";

export const loginCheck = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers.token;

  if (!token) {
    return res.status(401).json({
      message: "토큰이 필요합니다.",
    });
  }

  const decodedToken = await verifyToken(token);
  const userRepo = getRepository(User);
  const user: User = await userRepo.findOne({
    where: {
      id: decodedToken.id,
    },
  });

  req.user = user;
  next();
};
