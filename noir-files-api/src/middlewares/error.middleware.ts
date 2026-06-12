import type { Request, Response, NextFunction } from "express";

export function errorHandler(
    error: Error,
    _: Request,
    response: Response,
    __: NextFunction
) {
    return response.status(400).json({
        message: error.message,
    });
}