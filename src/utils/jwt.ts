import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET not defined');
}

export function signToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken<T>(token: string): T {
    return jwt.verify(token, JWT_SECRET) as T;
}