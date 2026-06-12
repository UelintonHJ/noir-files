import type { Request, Response } from "express";
import { CaseService } from "../services/CaseService.js";
import { createCaseSchema, updateCaseSchema } from "../validations/case.schema.js";

const service = new CaseService();

export class CaseController {
    async index(_: Request, response: Response) {
        const cases = await service.getAllCases();

        response.json(cases);
    }

    async show(
        request: Request<{ slug: string }>,
        response: Response
    ) {
        try {
            const { slug } = request.params;

            const foundCase = await service.getCaseBySlug(slug);

            response.json(foundCase);
        } catch {
            response.status(404).json({
                message: "Case not found",
            });
        }
        
    }

    async create(request: Request, response: Response) {
        const data = createCaseSchema.parse(request.body);
        
        const createdCase = await service.createCase(data);

        response.status(201).json(createdCase);
    }

    async update(
        request: Request<{ id: string }>,
        response: Response
    ) {
        const { id } = request.params;

        const data = updateCaseSchema.parse(request.body);

        const updateCase = await service.updateCase(
            id,
            data
        );

        response.json(updateCase);
    }

    async delete(
        request: Request<{ id: string }>,
        response: Response
    ) {
        const { id } = request.params;

        await service.deleteCase(id);

        response.status(204).send();
    }
}