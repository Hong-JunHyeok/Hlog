import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as logger from "../../../../lib/logger";
import Recomment from "../../../../entity/Recomment";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const recomment_id = req.params.recomment_id;

    const recommentRepo = getRepository(Recomment);

    await recommentRepo.delete({ recomment_id });
    logger.green("답글 삭제 완료");
    return res.status(200).json({
      message: "답글 삭제 완료",
    });
  } catch (error) {
    next(error);
  }
}
