import type { Request, Response } from "express";
import { FavoriteService } from "../services/FavoriteService.js";

const service = new FavoriteService();

export class FavoriteController {
    async create(req: Request, res: Response) {
        const { caseId } = req.body;

        const favorite = await service.create(
            req.userId!,
            caseId
        );

        return res.status(201).json(favorite);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (!id || Array.isArray(id)) {
            return res.status(400).json({
                message: "Invalid favorite id",
            });
        }

        await service.delete(id, req.userId!);

        return res.status(204).send();
    }
}