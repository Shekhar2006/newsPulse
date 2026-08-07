import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { subscribeUser } from "../controllers/user.controller.js";
import validate from "../middleware/validate.middleware.js";
import { subscribeSchema } from "../validations/user.validation.js";
import { getAllUsers } from "../controllers/user.controller.js";
import { unsubscribeUser } from "../controllers/user.controller.js";
import { updateUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/subscribe", validate(subscribeSchema) ,asyncHandler(subscribeUser));
router.get("/", asyncHandler(getAllUsers));
router.patch("/:id/unsubscribe", asyncHandler(unsubscribeUser));
router.patch("/:id", asyncHandler(updateUser));

export default router;

