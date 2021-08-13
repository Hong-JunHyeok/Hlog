import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";
import { loginCheck } from "../../../middleware/authMiddleware";
import createPost from "./post.ctrl/createPost";
import deletePost from "./post.ctrl/deletePost";
import getPost from "./post.ctrl/getPost";
import getPosts from "./post.ctrl/getPosts";
import modifyPost from "./post.ctrl/modifyPost";
import multer from "multer";
import path from "path";
import uploadThumnail from "./post.ctrl/uploadThumnail";
import getMyPosts from "./post.ctrl/getMyPosts";

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자 추출
      const basename = path.basename(file.originalname, ext);
      done(null, basename + "_" + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB
});

router.post("/", isLoggedIn, createPost);
router.delete("/:idx", deletePost);
router.get("/", getPosts);
router.get("/my", getMyPosts);
router.get("/:idx", getPost);
router.put("/:idx", modifyPost);
router.post("/thumnail", isLoggedIn, upload.single("thumnail"), uploadThumnail);

export default router;
