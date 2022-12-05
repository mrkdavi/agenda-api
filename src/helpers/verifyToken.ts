import { verify } from 'jsonwebtoken';
import { UserTokenPayload } from '../@types/DTOs/UserDTO';

export default function verifyToken (token: string) {
  const user = verify(token, process.env.AUTH_SECRET as string);
  return user as UserTokenPayload;
}
