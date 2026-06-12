import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
const controller = new FavoriteController();

router.post(
    "/",
    authMiddleware,
    controller.create.bind(controller)
);

router.delete(
    "/:id",
    authMiddleware,
    controller.delete.bind(controller)
);

export { router as favoriteRoutes };