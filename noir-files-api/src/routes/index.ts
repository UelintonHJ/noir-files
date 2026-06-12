import { Router } from "express";
import { casesRoutes } from "./case.routes.js";
import { favoriteRoutes  } from "./favorite.routes.js";
import { commentRoutes } from "./comment.routes.js";

const router = Router();

router.use("/cases", casesRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/comments", commentRoutes);

export { router };