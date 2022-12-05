import { UserRequestCredentials } from '../../@types/DTOs/UserDTO';
import Unauthorized from '../../@types/errors/Unauthorized';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import generateToken from '../../helpers/generateToken';
import hashPassword from '../../helpers/hashPassword';

export class SignInUseCase {
  constructor (private userRepository: IUserRepository) {}

  async execute ({ email, password }: UserRequestCredentials) {
    const hashedPassword = hashPassword(password);
    const user = await this.userRepository.findOneUser({
      email,
      password: hashedPassword
    });

    if (!user) throw new Unauthorized('Email or Password may be wrong!');

    const token = generateToken({ sub: user.id });

    return token;
  }
}
