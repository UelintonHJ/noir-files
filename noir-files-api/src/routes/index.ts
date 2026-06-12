import { Router } from "express";
import { casesRoutes } from "./case.routes.js";
import { favoriteRoutes  } from "./favorite.routes.js";

const router = Router();

router.use("/cases", casesRoutes);
router.use("/favorites", favoriteRoutes);

export { router };