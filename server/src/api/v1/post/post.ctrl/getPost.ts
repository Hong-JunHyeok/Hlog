import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";
import User from "../../../../entity/User";
import Comment from "../../../../entity/Comment";

export default async (req: Request, res: Response) => {
  const idx: string = req.params.idx;

  try {
    const postRepo = getRepository(Post);
    const commentRepo = getRepository(Comment);

    const post = await postRepo.findOne({ where: { post_id: idx } });
    const comments = await commentRepo
      .createQueryBuilder()
      .where("comment.post_id = :idx", { idx })
      .getMany();

    const commentLength = comments.length;

    if (!post) {
      logger.yellow("조회할 포스트가 없습니다");
      return res.status(404).json({
        message: "조회할 포스트가 없습니다",
      });
    }

    logger.green("포스트 조회 성공");
    return res.status(200).json({
      message: "포스트 조회 성공",
      post,
      commentLength,
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
      error,
    });
  }
};
