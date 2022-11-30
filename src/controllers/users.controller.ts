import { userServices } from '../services';
import { Request, Response, NextFunction } from 'express';
import { generateError, handleError } from '../utils/errorUtils';
import { logger } from '../utils/logger';
import { User } from '@prisma/client';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  try {
    const user: User = await userServices.getUserById(userId);

    if (!user) {
      generateError(404, 'User does not exist');
    }

    logger.info('Fetched user: ', user.id);
    res.send(user);
    next();
  } catch (e) {
    handleError(e);
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: User[] = await userServices.getUsers();

    if (!users) {
      generateError(404, 'User does not exist');
    }

    logger.info('Fetched user: ', users.map((user) => user.id).toString());
    res.send(users);
    next();
  } catch (e) {
    handleError(e);
  }
};

/**
 * Post User
 * @param req
 * @param res
 * @param next
 */
const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  try {
    await userServices.createUser(user);
    logger.info('Created new user: ', user);
    res.sendStatus(201);
    next();
  } catch (e) {
    handleError(e);
  }
};

export default { getUsers, getUser, postUser };
