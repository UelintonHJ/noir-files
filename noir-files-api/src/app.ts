import express from "express";
import cors from "cors";

import { router } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, response) => {
    response.status(200).json({
        status: "ok",
        project: "Noir Files API",
    });
});

app.use(router);

export { app };