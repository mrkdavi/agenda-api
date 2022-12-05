import { UserRequestData } from '../../@types/auth/UserDTO';
import generateToken from '../../helpers/generateToken';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import hashPassword from '../../helpers/hashPassword';
import Conflict from '../../@types/errors/Conflict';

export class SignUpUseCase {
  constructor (private userRepository: IUserRepository) {}
  async execute (userData: UserRequestData) {
    const hashedPassword = hashPassword(userData.password);

    const isEmailAlreadyUsed = !!(await this.userRepository.findOneUser({
      email: userData.email
    }));

    if (isEmailAlreadyUsed) throw new Conflict('Email unavailable');

    const user = await this.userRepository.createUser({
      ...userData,
      password: hashedPassword
    });

    const token = generateToken({ sub: user.id });

    return token;
  }
}
