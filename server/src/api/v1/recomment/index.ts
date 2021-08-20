import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";
import createRecomment from "./recomment.ctrl/createRecomment";

const router = Router();

router.post("/:comment_id", isLoggedIn, createRecomment);

export default router;
