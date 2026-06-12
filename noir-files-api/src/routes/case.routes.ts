import { Router } from "express";
import { CaseController } from "../controllers/CaseController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const router = Router();
const controller = new CaseController();

router.get("/", controller.index.bind(controller));
router.get("/:slug", controller.show.bind(controller));

router.post(
    "/", 
    authMiddleware, 
    adminMiddleware,
    controller.create.bind(controller)
);

router.put(
    "/:id", 
    authMiddleware, 
    adminMiddleware,
    controller.update.bind(controller)
);

router.delete(
    "/:id", 
    authMiddleware, 
    adminMiddleware,
    controller.delete.bind(controller)
);

export { router as casesRoutes };