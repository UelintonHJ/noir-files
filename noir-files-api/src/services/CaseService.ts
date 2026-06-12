import { CaseRepository } from "../repositories/CaseRepository.js";
import type { CreateCaseDTO, UpdateCaseDTO } from "../validations/case.schema.js";

export class CaseService {
    private repository = new CaseRepository();

    async getAllCases() {
        return this.repository.findAll();
    }

    async getCaseBySlug(slug: string) {
        const foundCase = await this.repository.findBySlug(slug);

        if (!foundCase) {
            throw new Error("Case not found");
        }

        return {
            ...foundCase,
            tags: foundCase.tags.map((item) => item.tag),
        };
    }

    async createCase(data: CreateCaseDTO) {
        return this.repository.create(data);
    }

    async updateCase(id: string, data: UpdateCaseDTO) {
        const foundCase = await this.repository.findById(id);

        if (!foundCase) {
            throw new Error("Case not found");
        }

        return this.repository.update(id, data);
    }

    async deleteCase(id: string) {
        const foundCase = await this.repository.findById(id);

        if (!foundCase) {
            throw new Error("Case not found");
        }

        return this.repository.delete(id);
    }
}