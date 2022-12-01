import { Prisma } from '@prisma/client';

export interface IUserRepository extends Prisma.UserDelegate<false> {
}
