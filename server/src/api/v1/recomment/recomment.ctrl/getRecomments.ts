import { NextFunction, Request, Response } from "express";
import Recomment from "../../../../entity/Recomment";
import * as logger from "../../../../lib/logger";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const comment_id = req.params.comment_id;

    const recommentRepo = Recomment.getRepository();

    const recomments = await recommentRepo
      .createQueryBuilder()
      .where("comment_id = :comment_id", { comment_id })
      .orderBy("created_at", "DESC")
      .getMany();

    logger.green("답글 조회성공");
    return res.status(200).json({
      message: "답글 조회성공",
      recomments,
    });
  } catch (error) {
    logger.red("서버 오류");
    next(error);
  }
}
