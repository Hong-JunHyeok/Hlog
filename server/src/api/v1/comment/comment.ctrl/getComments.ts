import { NextFunction, Request, Response } from "express";
import Comment from "../../../../entity/Comment";
import * as logger from "../../../../lib/logger";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const postId = req.params.post_id;

    const commentRepo = Comment.getRepository();

    const comments = await commentRepo.find();

    logger.green("댓글 조회성공");
    return res.status(200).json({
      message: "댓글 조회성공",
      comments,
    });
  } catch (error) {
    next(error);
  }
}
