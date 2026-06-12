import { prisma } from "../config/prisma.js";

export class FavoriteRepository {
    async create(userId: string, caseId: string) {
        return prisma.favorite.create({
            data: {
                userId,
                caseId,
            },
        });
    }

    async findByUserAndCase(
        userId: string,
        caseId: string
    ) {
        return prisma.favorite.findFirst({
            where: {
                userId,
                caseId,
            },
        });
    }

    async findById(id: string) {
        return prisma.favorite.findUnique({
            where: {
                id,
            },
        });
    }

    async delete(id: string) {
        return prisma.favorite.delete({
            where: {
                id,
            },
        });
    }
}