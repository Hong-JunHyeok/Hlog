import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";
import createComment from "./comment.ctrl/createComment";
import deleteComment from "./comment.ctrl/deleteComment";
import getComments from "./comment.ctrl/getComments";

const router = Router();

router.get("/:post_id", getComments);
router.post("/:post_id", isLoggedIn, createComment);
router.delete("/:comment_id", isLoggedIn, deleteComment);

export default router;
