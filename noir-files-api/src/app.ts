import express from "express";
import cors from "cors";

import { router } from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { authRouter } from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, response) => {
    response.status(200).json({
        status: "ok",
        project: "Noir Files API",
    });
});

app.use(authRouter);
app.use(router);
app.use(errorHandler);

export { app };