import { logger } from './logger';
import createError from 'http-errors';

export const getErrorMessage = (error: unknown) => {
  let message = 'untreated error type';
  if (typeof error === 'string') {
    message = error.toUpperCase(); // works, `e` narrowed to string
  } else if (error instanceof Error) {
    message = error.message; // works, `e` narrowed to Error
  }
  return message;
};

export const handleError = (error: unknown) => {
  const message = getErrorMessage(error);
  logger.error(message);
  const httpError = createError(500, message);
  throw httpError;
};

export const generateError = (httpStatusCode: number, message: string) => {
  logger.error(message);
  const httpError = createError(httpStatusCode, message);
  throw httpError;
};
