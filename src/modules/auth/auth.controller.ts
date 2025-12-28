import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
    static async register(req: Request, res: Response) {
        const { email, password } = req.body;
            if (
                !email ||
                !password ||
                typeof email !== "string" ||
                typeof password !== "string" ||
                email.trim() === "" ||
                password.trim() === ""
            ) {
                return res.status(400).json({ error: "Email and password are required" });
            }

        const result = await AuthService.register({ email, password });

        return res.status(201).json(result);
    }

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (
                !email ||
                !password ||
                typeof email !== "string" ||
                typeof password !== "string" ||
                email.trim() === "" ||
                password.trim() === ""
            ) {
                return res.status(400).json({ error: "Email and password are required" });
            }

        const result = await AuthService.login({ email, password });

        return res.status(200).json(result);
    }
}