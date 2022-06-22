import { error } from 'console';
import { userServices } from '../services';
import { Request, Response, NextFunction } from 'express';

const { createUser } = userServices;

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  try {
    await createUser(user);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201);
    next();
  } catch (e) {
    let msg;
    if (typeof e === 'string') {
      msg = e.toUpperCase(); // works, `e` narrowed to string
    } else if (e instanceof Error) {
      msg = e.message; // works, `e` narrowed to Error
    }
    console.log(msg);
    res.sendStatus(500) && next(error);
  }
};

export default { postUser };
