import { beforeEach, describe, expect, it, vi } from 'vitest';
import { User } from '../../entities/User/User';
import { SignUpUseCase } from './SignUpUseCase';
import { signUpRequestMock, userMock, userTokenMock } from '../../mocks/userMocks';
import { IUserRepository } from '../../@types/repositories/IUserRepository';
import * as hashPassword from '../../helpers/hashPassword';
import * as generateToken from '../../helpers/generateToken';
import Conflict from '../../@types/errors/Conflict';

describe('SignUpUseCase', () => {
  const userRepository = {} as IUserRepository;
  const signUpUseCase = new SignUpUseCase(userRepository);
  const user = new User(userMock);

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should respond with token when email isn\'t already registered', () => {
    userRepository.createUser = vi.fn().mockResolvedValueOnce(user);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(null);
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = signUpUseCase.execute(signUpRequestMock);

    expect(response).resolves.toEqual(expect.objectContaining({
      token: expect.any(String)
    }));
  });

  it('it should respond with conflict error when email is already registered', () => {
    userRepository.createUser = vi.fn().mockResolvedValueOnce(user);
    userRepository.findOneUser = vi.fn().mockResolvedValueOnce(user);
    vi.spyOn(hashPassword, 'default').mockReturnValueOnce(user.password);
    vi.spyOn(generateToken, 'default').mockReturnValueOnce(userTokenMock);

    const response = () => signUpUseCase.execute(signUpRequestMock);

    expect(response()).rejects.toThrow(Conflict);
  });
});
