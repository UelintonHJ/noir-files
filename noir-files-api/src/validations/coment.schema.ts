import { z } from "zod";

export const createCommentSchema = z.object({
    caseId: z.string().uuid(),
    content: z.string().min(3).max(1000),
});

export type CreateCommentDTO = 
    z.infer<typeof createCommentSchema>;