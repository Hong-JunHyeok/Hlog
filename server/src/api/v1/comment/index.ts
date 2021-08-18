import { Router } from "express";
import getComments from "./comment.ctrl/getComments";

const router = Router();

router.get("/", getComments);

export default router;
