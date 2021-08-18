import { Router } from "express";
import getComments from "./comment.ctrl/getComments";

const router = Router();

router.get("/:post_id", getComments);

export default router;