import { NextFunction, Request, Response } from "express";
import passport from "passport";
import * as logger from "../../../../lib/logger";

export default async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return res.status(401).json({ message: info.message });
    }

    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      logger.green("로그인 성공");
      return res.json(user);
    });
  })(req, res, next);
  // const { id, pw } = req.body;

  // try {
  //   if (!id || !pw) {
  //     logger.yellow("ID나 PW를 입력해주세요.");
  //     return res.status(400).json({
  //       message: "ID나 PW를 입력해주세요.",
  //     });
  //   }

  //   const isExistUser = await User.findOne({ where: { id, pw } }).catch(
  //     (error) => {
  //       logger.yellow(error);
  //     }
  //   );

  //   if (!isExistUser) {
  //     logger.yellow("등록되지 않은 회원입니다.");
  //     return res.status(401).json({
  //       message: "등록되지 않은 회원입니다.",
  //     });
  //   }

  //   const token = await createToken(isExistUser.id);

  //   logger.green("로그인 성공");
  //   res.setHeader("Set-Cookie", token);
  //   res.status(200).json({
  //     status: 200,
  //     message: "로그인 성공.",
  //     data: {
  //       user: isExistUser,
  //       access_token: token,
  //     },
  //   });
  // } catch (error) {
  //   logger.red(error);
  //   next(error);
  // }
};
