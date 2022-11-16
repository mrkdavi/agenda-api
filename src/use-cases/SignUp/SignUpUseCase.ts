import { User } from '../../domain/entities/User/User';

export class SignUpUseCase {
  async execute (userData: User) {
    return userData;
  }
}
