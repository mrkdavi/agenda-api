import { describe, expect, it, test } from 'vitest';
import { User } from './User';
import { userMock } from '../../mocks/userMocks';

describe('User', () => {
  const user = new User(userMock);

  it('should create a user', () => {
    expect(user).toEqual(
      expect.objectContaining({
        props: userMock
      })
    );
  });

  test('if user getters are working', () => {
    expect(user.id).toEqual(userMock.id);
    expect(user.email).toEqual(userMock.email);
    expect(user.name).toEqual(userMock.name);
    expect(user.password).toEqual(userMock.password);
  });

  test('if user setters are working', () => {
    const newUserData = {
      password: userMock.password
    };
    user.password = newUserData.password;
    expect(user.password).toEqual(newUserData.password);
  });
});
