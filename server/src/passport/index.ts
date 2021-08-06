import passport from "passport";
import User from "../entity/User";
import { localStrategy } from "./local";

const configurePassport = () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  localStrategy();
};

export default configurePassport;
