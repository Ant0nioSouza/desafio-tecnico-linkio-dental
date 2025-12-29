import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderState } from "./order.types";

export class OrderController {
    static async create(req: Request, res: Response) {
        const order = await OrderService.create(req.body);
        return res.status(201).json(order);
    }

    static async list(req: Request, res: Response) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const state = req.query.state as OrderState | undefined;

        const result = await OrderService.findAll(page, limit, state);
        return res.status(200).json(result);
    }

    static async advance(req: Request, res: Response) {
        const { orderId } = req.params;
        const order = await OrderService.advanceState(orderId);
        return res.status(200).json(order);
    }
}