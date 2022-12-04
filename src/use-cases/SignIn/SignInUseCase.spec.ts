import { beforeEach, describe, expect, it, vi } from 'vitest';
import { User } from '../../entities/User/User';
import { SignInUseCase } from '../../use-cases/SignIn/SignInUseCase';
import { signInRequestMock, userMock, userTokenMock } from '../../mocks/userMocks';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import * as hashPassword from '../../helpers/hashPassword';
import * as generateToken from '../../helpers/generateToken';
import Unauthorized from '../../@types/errors/Unauthorized';

describe('SignUpUseCase', () => {
  const userRepository = {} as IUserRepository;
  const signInUseCase = new SignInUseCase(userRepository);
  const user = new User(userMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should response a token if credentials are correct', () => {
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(user);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = signInUseCase.execute(signInRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining({
      token: expect.any(String)
    }));
  });

  it('should response a error if credentials aren\'t correct', () => {
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(null);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = () => signInUseCase.execute(signInRequestMock);

    expect(response()).rejects.toThrow(Unauthorized);
  });
});
