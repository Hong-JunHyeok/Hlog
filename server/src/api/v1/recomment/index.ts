import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";

import createRecomment from "./recomment.ctrl/createRecomment";
import deleteRecomment from "./recomment.ctrl/deleteRecomment";
import getRecomments from "./recomment.ctrl/getRecomments";

const router = Router();

router.get("/:comment_id", getRecomments);
router.post("/:comment_id", isLoggedIn, createRecomment);
router.delete("/:recomment_id", isLoggedIn, deleteRecomment);

export default router;
