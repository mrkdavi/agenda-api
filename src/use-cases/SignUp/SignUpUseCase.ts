import { UserRequestData } from '../../@types/auth/UserDTO';
import generateToken from '../../helpers/generateToken';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import hashPassword from '../../helpers/hashPassword';

export class SignUpUseCase {
  constructor (private userRepository: IUserRepository) {}
  async execute (userData: UserRequestData) {
    const hashedPassword = hashPassword(userData.password);
    const user = await this.userRepository.createUser({
      ...userData,
      password: hashedPassword
    });

    const token = generateToken({ sub: user.id });

    return token;
  }
}
