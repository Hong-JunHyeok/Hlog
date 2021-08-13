import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";

export default async (req: any, res: Response) => {
  try {
    const user = req.user;
    const postRepo = getRepository(Post);
    const posts = await postRepo.find({
      order: { createdAt: "DESC" },
      where: {
        userId: user.id,
      },
    });
    const totalLenth = posts.length;

    if (!totalLenth) {
      logger.yellow("조회할 포스트가 없습니다.");
      return res.status(200).json({
        message: "조회할 포스트가 없습니다.",
        data: {
          posts: [],
        },
      });
    }

    logger.green("모든 포스트 조회 성공");
    return res.status(200).json({
      message: "모든 포스트 조회 성공",
      data: {
        posts,
        total: totalLenth,
      },
    });
  } catch (error) {
    logger.red(error);
    return res.status(500).json({
      message: "서버 오류",
      error,
    });
  }
};
