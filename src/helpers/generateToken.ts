import { sign } from 'jsonwebtoken';
import { UserTokenPayload } from '../@types/auth/UserDTO';

export default function generateToken (user: UserTokenPayload) {
  const token = sign(user, process.env.AUTH_SECRET as string);
  return { token };
}
