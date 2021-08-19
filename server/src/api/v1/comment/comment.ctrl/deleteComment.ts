import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as logger from "../../../../lib/logger";
import Comment from "../../../../entity/Comment";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const comment_id = req.params.comment_id;

    const commentRepo = getRepository(Comment);

    await commentRepo.delete({ comment_id });
    logger.green("댓글 삭제 완료");
    return res.status(200).json({
      message: "댓글 삭제 완료",
    });
  } catch (error) {
    next(error);
  }
}
