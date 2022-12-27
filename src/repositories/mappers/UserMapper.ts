import { User } from '../../entities/User/User';
import { User as RawUser } from '@prisma/client';
import { UserResponseData } from '../../@types/DTOs/UserDTO';

export class UserMapper {
  static toPrisma (user: User): UserResponseData {
    return {
      name: user.name,
      email: user.email,
      password: user.password
    };
  }

  static toDomain (raw: RawUser) {
    return new User({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      password: raw.password
    });
  }
}
