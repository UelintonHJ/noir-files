import { Router } from "express";
import { casesRoutes } from "./case.routes.js";

const router = Router();

router.use("/cases", casesRoutes);

export { router };