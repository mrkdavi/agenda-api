import { beforeEach, describe, expect, it, vi } from 'vitest';
import { User } from '../../entities/User/User';
import { SignInUseCase } from './SignInUseCase';
import { signInRequestMock, userMock, userTokenMock } from '../../mocks/userMocks';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import * as hashPassword from '../../helpers/hashPassword';
import * as generateToken from '../../helpers/generateToken';
import Unauthorized from '../../@types/errors/Unauthorized';

describe('SignInUseCase', () => {
  const userRepository = {} as IUserRepository;
  const signInUseCase = new SignInUseCase(userRepository);
  const user = new User(userMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should respond with token when credentials are correct', () => {
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(user);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = signInUseCase.execute(signInRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining({
      token: expect.any(String)
    }));
  });

  it('should respond with error when credentials aren\'t correct', () => {
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(null);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = () => signInUseCase.execute(signInRequestMock);

    expect(response()).rejects.toThrow(Unauthorized);
  });
});
