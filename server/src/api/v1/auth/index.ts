import { Router } from "express";
import login from "./auth.ctrl/login";
import join from "./auth.ctrl/join";
import me from "./auth.ctrl/me";
import { loginCheck } from "../../../middleware/authMiddleware";

const router = Router();

router.post("/login", login);
router.post("/join", join);
router.get("/me", loginCheck, me);

export default router;
