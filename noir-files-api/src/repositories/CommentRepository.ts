import { prisma } from "../config/prisma.js";
import type { CreateCommentDTO } from "../validations/coment.schema.js";

export class CommentRepository {
    async create(
        userId: string,
        data: CreateCommentDTO
    ) {
        return prisma.comment.create({
            data: {
                userId,
                caseId: data.caseId,
                content: data.content,
            },
        });
    }

    async findByCaseId(caseId: string) {
        return prisma.comment.findMany({
            where: {
                caseId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
}