import express from 'express';

import { userController } from '../controllers';

const userRoutes = express.Router();

userRoutes.post('/', userController.postUser);

export = userRoutes;
