import { prisma } from "../config/prisma.js";
import type { Prisma } from "@prisma/client";
import type { CreateCaseDTO, UpdateCaseDTO } from "../validations/case.schema.js";

export class CaseRepository {

    async findAll() {
        return prisma.case.findMany({
            where: {
                status: "PUBLISHED",
            },
            select: {
                id: true,
                title: true,
                slug: true,
                summary: true,
                coverImage: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async findBySlug(slug: string) {
        return prisma.case.findUnique({
            where: {
                slug,
            },
            include: {
                evidences: true,

                documents: true,

                timelineEvents: {
                    orderBy: {
                        order: "asc",
                    },
                },

                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });
    }

    async findById(id: string) {
        return prisma.case.findUnique({
            where: {
                id,
            },
        });
    }

    async create(data: CreateCaseDTO) {
        return prisma.case.create({
            data: {
                title: data.title,
                slug: data.slug,
                summary: data.summary,
                content: data.content,
                coverImage: data.coverImage ?? null,
                status: "PUBLISHED",
            }
        });
    }

    async update(
        id: string,
        data: UpdateCaseDTO
    ) {
        const updateData: Prisma.CaseUpdateInput = {}

        if (data.title !== undefined) {
            updateData.title = data.title;
        }

        if (data.slug !== undefined) {
            updateData.slug = data.slug;
        }

        if (data.summary !== undefined) {
            updateData.summary = data.summary;
        }

        if (data.content !== undefined) {
            updateData.content = data.content;
        }

        if (data.coverImage !== undefined) {
            updateData.coverImage = data.coverImage;
        }

        return prisma.case.update({
            where: {
                id,
            },
            data: updateData,
        });
    }

    async delete(id: string) {
        return prisma.case.delete({
            where: {
                id,
            },
        });
    }
}