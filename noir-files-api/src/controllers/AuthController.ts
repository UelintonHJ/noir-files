import type { Request, Response } from "express";
import { AuthService } from "../services/AuthService.js";
import { registerSchema, loginSchema } from "../validations/auth.schema.js";

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        const data = registerSchema.parse(req.body);
        const user = await authService.register(data);
        return res.status(201).json(user);
    }

    async login(req: Request, res: Response) {
        const data = loginSchema.parse(req.body)
        const result = await authService.login(data);
        return res.json(result);
    }
}

