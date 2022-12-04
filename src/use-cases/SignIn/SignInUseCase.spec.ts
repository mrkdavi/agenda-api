import { beforeEach, describe, expect, it, vi } from 'vitest';
import { User } from '../../entities/User/User';
import { SignUpUseCase } from '../../use-cases/SignUp/SignUpUseCase';
import { signUpRequestMock, userMock, userTokenMock } from '../../mocks/userMocks';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import * as hashPassword from '../../helpers/hashPassword';

describe('SignUpUseCase', () => {
  const userRepository = {} as IUserRepository;
  const signUpUseCase = new SignUpUseCase(userRepository);
  const user = new User(userMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should response a token if credentials are correct', () => {
    userRepository.findFirst = vi.fn().mockResolvedValueOnce(user);
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);

    const response = signUpUseCase.execute(signUpRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining({
      token: expect.any(String)
    }));
  });

  it('should response a error if credentials aren\'t correct', () => {

  });
});
