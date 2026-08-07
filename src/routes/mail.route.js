import { sendNewsletter } from "../controllers/mail.controller.js";
import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

router.post("/newsletter", asyncHandler(sendNewsletter));

export default router;
