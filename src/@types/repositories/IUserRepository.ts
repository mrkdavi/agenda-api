//import { User } from '@prisma/client';
import { User } from '../../entities/User/User';
import { UserRequestData } from '../auth/UserDTO';

export interface IUserRepository {
    createUser(userRequestData : UserRequestData): Promise<User>;
}
