import { UserTokenPayload } from '../DTOs/UserDTO';

declare global {
  namespace Express {
    export interface Request {
      user?: UserTokenPayload;
    }
  }
}
