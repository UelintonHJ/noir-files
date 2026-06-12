import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Malformed token",
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as {
            sub: string;
            role: string;
        };
        
        req.userId = decoded.sub;
        req.userRole = decoded.role;
        
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Invalid token"});
    }
}