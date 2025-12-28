import bcrypt from 'bcrypt';
import { UserModel } from '../user/user.model';
import { RegisterDTO, LoginDTO } from './auth.types';
import { signToken } from '../../utils/jwt';

export class AuthService {
  static async register({ email, password }: RegisterDTO) {
    const exists = await UserModel.findOne({ email });
    if (exists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      email,
      password: hashedPassword
    });

    const token = signToken({ userId: user._id.toString() });

    return { token };
  }

  static async login({ email, password }: LoginDTO) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid credentials');
    }

    const token = signToken({ userId: user._id.toString() });

    return { token };
  }
}
