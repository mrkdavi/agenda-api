import { beforeEach, describe, expect, it, vi } from 'vitest';
import { User } from '../../entities/User/User';
import { SignUpUseCase } from '../../use-cases/SignUp/SignUpUseCase';
import { signUpRequestMock, userMock, userTokenMock } from '../../mocks/userMocks';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import * as generateToken from '../../helpers/generateToken';

describe('User', () => {
  const userRepository = {} as IUserRepository;
  const signUpUseCase = new SignUpUseCase(userRepository);
  const user = new User(userMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should response a token', () => {
    userRepository.createUser = vi.fn().mockResolvedValueOnce(user);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = signUpUseCase.execute(signUpRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining({
      token: expect.any(String)
    }));
  });
});
