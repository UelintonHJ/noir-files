import { z } from "zod";

export const createCaseSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),
    summary: z.string().min(10),
    content: z.string().min(20),
    coverImage: z.string().optional(),
});

export const updateCaseSchema = createCaseSchema.partial();

export type CreateCaseDTO = z.infer<typeof createCaseSchema>;
export type UpdateCaseDTO = z.infer<typeof updateCaseSchema>;