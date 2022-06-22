import { prisma } from '../app';
import { UserForm } from '../types/users';

const usersDb = async (user: UserForm): Promise<UserForm> => {
  const result = await prisma.user.create({
    data: {
      ...user
    }
  });
  return result;
};

export default { usersDb };
