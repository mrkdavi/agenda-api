import { User } from '../../entities/User/User';
import { UserQueryData, UserRequestData } from '../DTOs/UserDTO';

export interface IUserRepository {
  createUser(userRequestData : UserRequestData): Promise<User>;
  findOneUser(userQueryData : UserQueryData): Promise<User | null>;
}
