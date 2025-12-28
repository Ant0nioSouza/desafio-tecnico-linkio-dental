import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

interface JwtPayload {
    userId: string;
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token Missing" });
    }

    const [, token] = authHeader.split(' ');

    try {
        const payload = verifyToken<JwtPayload>(token);
        req.userId = payload.userId;
        return next();
    } catch {
        return res.status(401).json({ message: "Invalid Token" });
    }
}