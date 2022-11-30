import { User } from '@prisma/client';
import { prisma } from '../app';
import { UserForm } from '../types/users';

const getUsers = async (user: UserForm): Promise<User[]> => {
  const result = await prisma.user.findMany({
    data: {
      ...user
    }
  });
  return result;
};

const getUserById = async (userId: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id: userId } });
  return result;
};

const createUser = async (user: UserForm): Promise<User> => {
  const result = await prisma.user.create({
    data: {
      ...user
    }
  });
  return result;
};

export default { getUsers, getUserById, createUser };
