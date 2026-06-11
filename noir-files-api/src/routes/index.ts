import { Router } from "express";
import { casesRoutes } from "./case.rotes.js";

const router = Router();

router.use("/cases", casesRoutes);

export { router };