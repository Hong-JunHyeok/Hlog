import { Router } from "express";
import login from "./auth.ctrl/login";
import join from "./auth.ctrl/join";
import me from "./auth.ctrl/me";
import logout from "./auth.ctrl/logout";
import getUser from "./auth.ctrl/getUser";
import { loginCheck } from "../../../middleware/authMiddleware";
import passport from "passport";

const router = Router();

router.post("/login", login);
router.post("/join", join);
router.post("/logout", logout);
router.get("/user", me);
router.get("/user/:userIdx", getUser);

export default router;
