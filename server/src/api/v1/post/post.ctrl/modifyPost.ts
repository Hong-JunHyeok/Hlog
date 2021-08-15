import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { verifyParam } from "../../../../lib/verifyParam";
import { getRepository } from "typeorm";

type RequestBody = {
  title: string;
  thumnail: string;
  content: string;
};
export default async (req: any, res: Response) => {
  const post_id = req.params.post_id;
  const { title, content, thumnail }: RequestBody = req.body;
  const user = req.user;

  try {
    const postRepo = getRepository(Post);
    const post = await postRepo.findOne({
      where: {
        post_id,
      },
    });

    if (!post) {
      logger.yellow("포스트 없음");
      return res.status(404).json({
        message: "포스트 없음",
        post,
      });
    }

    if (!(post.userId === user.user_id)) {
      return res.status(401).json({
        message: "자신의 게시글이 아닙니다",
      });
    }

    post.title = title;
    post.content = content;
    post.thumnail = thumnail;

    logger.green("글 수정 성공");
    return res.status(201).json({
      message: "글 수정 성공",
    });
  } catch (error) {
    logger.red(error);
    return res.status(500).json({
      message: "서버 오류",
      error,
    });
  }
};
