import express from 'express';
import { authRoutes } from './modules/auth/auth.routes';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

app.get("/health", (_req, res) => {
    return res.status(200).json({status: 'ok'})
});

export {app};