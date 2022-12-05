import { UserQueryData, UserRequestData } from '../@types/DTOs/UserDTO';
import { IUserRepository } from '../@types/repositories/IUserRepository';
import { User } from '../entities/User/User';
import { prisma } from '../lib/prisma';

export class UserRepository implements IUserRepository {
  async createUser ({ name, email, password }: UserRequestData) {
    return new User(await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    }));
  }

  async findOneUser (userQueryData: UserQueryData): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { ...userQueryData }
    });

    if (!user) return user;

    return new User(user);
  }
}
