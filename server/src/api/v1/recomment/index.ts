import { Router } from "express";
import { isLoggedIn } from "../../../middleware/authCheckMiddleware";

import createRecomment from "./recomment.ctrl/createRecomment";
import getRecomments from "./recomment.ctrl/getRecomments";

const router = Router();

router.get("/:comment_id", getRecomments);
router.post("/:comment_id", isLoggedIn, createRecomment);

export default router;
