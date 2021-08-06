import { Router } from "express";
import login from "./auth.ctrl/login";
import join from "./auth.ctrl/join";
import me from "./auth.ctrl/me";
import { loginCheck } from "../../../middleware/authMiddleware";
import passport from "passport";

const router = Router();

router.post("/login", login);
router.post("/join", join);
router.get("/user", me);
router.post("/logout", me);

export default router;
