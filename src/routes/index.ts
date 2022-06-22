import express from 'express';
import { logger } from '../utils/logger';
import userRoutes from './users.router';

import createError from 'http-errors';

const routes = express.Router();

routes.get('/', (req, res) => {
  const httpError = createError(500, 'test unknown');
  throw httpError;
  //logger.info('App is working');
  res.send('App is working');
});
routes.use('/users', userRoutes);

export = routes;
