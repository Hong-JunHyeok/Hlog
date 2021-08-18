import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";
import createComment from "./comment.ctrl/createComment";
import getComments from "./comment.ctrl/getComments";

const router = Router();

router.get("/:post_id", getComments);
router.post("/:post_id", isLoggedIn, createComment);

export default router;
