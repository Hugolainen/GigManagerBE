import express from 'express';

import { userController } from '../controllers';

const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers);
userRoutes.get('/:userId', userController.getUser);
userRoutes.post('/', userController.postUser);
userRoutes.put('/:userId', userController.putUser);
userRoutes.delete('/:userId', userController.deleteUser);

export = userRoutes;
