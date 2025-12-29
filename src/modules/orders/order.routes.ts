import { Router } from "express";
import { OrderController } from "./order.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post('/', authMiddleware, OrderController.create);
router.get('/', authMiddleware, OrderController.list);
router.patch('/:orderId/advance', authMiddleware, OrderController.advance);

export { router as orderRoutes };