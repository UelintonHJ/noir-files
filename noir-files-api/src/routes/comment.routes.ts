import { Router } from "express";
import { CommentController } from "../controllers/CommentController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
const controller =
    new CommentController();

router.post(
    "/",
    authMiddleware,
    controller.create.bind(controller)
);

router.get(
    "/:caseId",
    controller.index.bind(controller)
);

export { router as commentRoutes };