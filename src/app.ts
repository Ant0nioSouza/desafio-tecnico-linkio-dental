import express from 'express';
import { authRoutes } from './modules/auth/auth.routes';
import { orderRoutes } from './modules/orders/order.routes';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

app.get("/health", (_req, res) => {
    return res.status(200).json({status: 'ok'})
});

export {app};