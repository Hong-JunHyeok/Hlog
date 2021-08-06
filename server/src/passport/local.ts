import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../entity/User";

export const localStrategy = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw",
      },
      async (id, pw, done) => {
        try {
          const user = await User.findOne({
            where: {
              id,
            },
          });

          if (!user) {
            return done(null, false, {
              message: "존재하지 않는 사용자입니다.",
            });
          }

          if (pw === user.pw) {
            return done(null, user);
          }

          return done(null, false, { message: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
