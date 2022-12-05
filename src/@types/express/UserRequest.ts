import { Request } from "express";
import { UserTokenPayload } from "../DTOs/UserDTO";

export interface UserRequest extends Request {
  user: UserTokenPayload;
}