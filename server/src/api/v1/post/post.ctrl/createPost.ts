import Post from "../../../../entity/Post";
import { NextFunction, Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";
import User from "../../../../entity/User";

export default async (req: any, res: Response, next: NextFunction) => {
  const { title, thumnail, content } = req.body;
  const user = req.user;

  try {
    if (!title || !content!!) {
      logger.yellow("제목, 내용은 필수 항목입니다.");
      return res.status(401).json({
        message: "제목, 내용은 필수 항목입니다.",
      });
    }

    const postRepo = getRepository(Post);
    const post = new Post();

    post.userId = user.user_id;
    post.author = user.name;
    post.title = title;
    post.content = content;
    post.thumnail = thumnail;
    post.user = user;

    await postRepo.save(post).catch((error) => {
      return next(error);
    });

    logger.green("포스트 등록 성공");
    res.status(200).json({
      message: "포스트 등록 성공",
      data: {
        title,
      },
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
    });
  }
};
