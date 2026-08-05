import { Router } from "express";
import { getTopHeadlines } from "../controllers/news.controller.js";
import asyncHandler  from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getTopHeadlines));

export default router;