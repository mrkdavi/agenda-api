import { describe, expect, it, test } from 'vitest';
import { User } from './User';

describe('User', () => {
  const userData = {
    id: 'cjld2cjxh0000qzrmn831i7rn',
    name: 'John Doe',
    email: 'Johndoe@gmail.com',
    password: '123456'
  };
  const user = new User(userData);

  it('should create a user', () => {
    expect(user).toEqual(
      expect.objectContaining({
        props: userData
      })
    );
  });

  test('if user getters are working', () => {
    expect(user.id).toEqual(userData.id);
    expect(user.email).toEqual(userData.email);
    expect(user.name).toEqual(userData.name);
    expect(user.password).toEqual(userData.password);
  });
  test('if user setters are working', () => {
    const newUserData = {
      password: '123'
    }
    user.password = newUserData.password;

    expect(user.password).toEqual(newUserData.password);
  });
})
