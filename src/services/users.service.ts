import { usersDb } from '../db';
import { UserForm } from '../types/users';

enum SortingOrder {
  ASCENDING,
  DESCENDING
}

interface ISorter {
  field: string;
  order: SortingOrder;
}

interface IPagination {
  quantityPerPage: number;
  pageNumber: number;
}

const getUsers = async (
  filters?: string[],
  sorters?: ISorter[],
  pagination?: IPagination
) => {
  try {
    return await usersDb.getUsers();
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

const getUserById = async (userId: number) => {
  try {
    return await usersDb.getUserById(userId);
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

const createUser = async (user: UserForm) => {
  try {
    return await usersDb.createUser(user);
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

export default { getUsers, getUserById, createUser };
