import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";
import { loginCheck } from "../../../middleware/authMiddleware";
import createPost from "./post.ctrl/createPost";
import deletePost from "./post.ctrl/deletePost";
import getPost from "./post.ctrl/getPost";
import getPosts from "./post.ctrl/getPosts";
import modifyPost from "./post.ctrl/modifyPost";

const router = Router();

router.post("/", isLoggedIn, createPost);
router.delete("/:idx", deletePost);
router.get("/", getPosts);
router.get("/:idx", getPost);
router.put("/:idx", modifyPost);

export default router;
