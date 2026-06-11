import { response, Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_, response) => {
    const cases = await prisma.case.findMany({
        include: {
            tags: {
                include: {
                    tag: true,
                },
            },
            evidences: true,
            timelineEvents: true,
        },
    });

    response.json(cases);
});

export { router as casesRoutes };