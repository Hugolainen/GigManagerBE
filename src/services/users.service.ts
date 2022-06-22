import { usersDb } from '../db';
import { UserForm } from '../types/users';

/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the blogpost, add them to this service
 */
const createUser = async (user: UserForm) => {
  try {
    return await usersDb.usersDb(user);
  } catch (e) {
    let msg;
    if (typeof e === 'string') {
      msg = e.toUpperCase(); // works, `e` narrowed to string
    } else if (e instanceof Error) {
      msg = e.message; // works, `e` narrowed to Error
    }
    throw new Error(msg);
  }
};

export default { createUser };
