import { UserRequestData } from '../../@types/auth/UserDTO';
import generateToken from '../../helpers/generateToken';
import { IUserRepository } from '../../@types/repositories/IUserRepository';

export class SignUpUseCase {
  constructor (private userRepository: IUserRepository) {}
  async execute (userData: UserRequestData) {
    const user = await this.userRepository.createUser(userData)

    const token = generateToken({ sub: user.id });

    return token;
  }
}
