import { Router } from "express";
import { CaseController } from "../controllers/CaseController.js";

const router = Router();
const controller = new CaseController();

router.get("/", controller.index.bind(controller));
router.get("/:slug", controller.show.bind(controller));
router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));

export { router as casesRoutes };