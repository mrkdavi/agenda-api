import { UserRequestData } from '../../@types/auth/UserDTO';
import generateToken from '../../helpers/generateToken';
import { IUserRepository } from '../../@types/repositories/IUserRepository';

export class SignUpUseCase {
  constructor (private User: IUserRepository) {}
  async execute ({ name, email, password }: UserRequestData) {
    const user = await this.User.create({
      data: {
        name,
        email,
        password
      }
    });

    const token = generateToken({ sub: user.id });

    return token;
  }
}
