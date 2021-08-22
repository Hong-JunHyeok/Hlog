import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Comment from "../../../../entity/Comment";
import Recomment from "../../../../entity/Recomment";
import * as logger from "../../../../lib/logger";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { comment_id } = req.params;
    const user: any = req.user;
    const { content } = req.body;

    const recommentRepo = getRepository(Recomment);
    const commentRepo = getRepository(Comment);

    const recomment = new Recomment();
    const comment: Comment | undefined = await commentRepo.findOne({
      where: {
        comment_id,
      },
    });

    if (!comment) {
      logger.yellow("없는 댓글입니다.");
      return res.status(401).json({
        message: "없는 댓글입니다.",
      });
    }

    recomment.author = user.name;
    recomment.content = content;
    recomment.comment = comment;
    recomment.user_id = user.user_id;

    await recommentRepo.save(recomment);

    logger.green("답글 작성완료");
    return res.status(201).json({
      message: "답글 작성완료",
    });
  } catch (error) {
    next(error);
  }
}
