import { UserRequestCredentials } from '../../@types/auth/UserDTO';
import { IUserRepository } from '../../@types/repositories/IUserRepository';

export class SignInUseCase {
  constructor (private User: IUserRepository) {}
  async execute ({ email, password }: UserRequestCredentials) {

  }
}
