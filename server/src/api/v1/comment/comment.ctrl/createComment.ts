import { NextFunction, Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import Comment from "../../../../entity/Comment";
import Post from "../../../../entity/Post";
import * as logger from "../../../../lib/logger";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { post_id } = req.params;
    const user: any = req.user;
    const { content } = req.body;

    const commentRepo = getRepository(Comment);
    const comment = new Comment();
    const postRepo: Repository<Post> = getRepository(Post);

    const post: Post | undefined = await postRepo.findOne({
      where: {
        post_id,
      },
    });

    if (post === undefined) {
      return res.status(401).json({
        message: "게시글이 없습니다",
      });
    }

    console.log(content);

    comment.author = user.name;
    comment.content = content;
    comment.post = post;
    comment.user_id = user.user_id;

    await commentRepo.save(comment);

    logger.green("댓글 작성완료");
    res.status(201).json({
      message: "댓글 작성완료",
    });
  } catch (error) {
    logger.red(error);
    res.status(500).json({
      message: "서버 오류",
    });
  }
}
