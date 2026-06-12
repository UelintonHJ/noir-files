import { Router } from "express";
import { CaseController } from "../controllers/CaseController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
const controller = new CaseController();

router.get("/", controller.index.bind(controller));
router.get("/:slug", controller.show.bind(controller));
router.post("/", authMiddleware, controller.create.bind(controller));
router.put("/:id", authMiddleware, controller.update.bind(controller));
router.delete("/:id", authMiddleware, controller.delete.bind(controller));

export { router as casesRoutes };