import { CommentRepository } from "../repositories/CommentRepository.js";
import { CaseRepository } from "../repositories/CaseRepository.js";
import type { CreateCommentDTO } from "../validations/coment.schema.js";

export class CommentService {
    constructor(
        private repository = new CommentRepository(),
        private caseRepository = new CaseRepository()
    ) {}

    async create(
        userId: string,
        data: CreateCommentDTO
    ) {
        const caseExists = 
            await this.caseRepository.findById(
                data.caseId
            );

        if (!caseExists) {
            throw new Error("Case not found");
        }

        return this.repository.create(
            userId,
            data
        );
    }

    async findByCaseId(caseId: string) {
        return this.repository.findByCaseId(
            caseId
        );
    }
}