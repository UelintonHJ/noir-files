import type { Request, Response } from "express";
import { CommentService } from "../services/CommentService.js";
import { createCommentSchema } from "../validations/coment.schema.js";

const service = new CommentService();

export class CommentController {
    async create(
        req: Request,
        res: Response
    ) {
        try {
            const data =
                createCommentSchema.parse(
                    req.body
                );

            const comment =
                await service.create(
                    req.userId!,
                    data
                );

            return res.status(201).json(comment);
        } catch (error: unknown) {
            return res.status(400).json({
                message:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            });
        }
    }

    async index(
        req: Request,
        res: Response
    ) {
        const { caseId } = req.params;

        if (!caseId || Array.isArray(caseId)) {
            return res.status(400).json({
                message: "Case id required",
            });
        }

        const comments =
            await service.findByCaseId(
                caseId
            );

        return res.json(comments);
    }
}