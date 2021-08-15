import Post from "../../../../entity/Post";
import { Request, Response } from "express";
import * as logger from "../../../../lib/logger";
import { getRepository } from "typeorm";

export default async (req: Request, res: Response) => {
  const post_id = req.params.post_id;

  try {
    const postRepo = getRepository(Post);

    await postRepo.delete({ post_id });
    logger.green("글 삭제 성공");
    return res.status(200).json({
      message: "글 삭제 성공",
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
    });
  }
};
