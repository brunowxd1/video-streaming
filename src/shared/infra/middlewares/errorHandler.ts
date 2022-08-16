import { isCelebrateError, CelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

const parseCelebrateError = (err: CelebrateError) => {
  const parsedError = Array.from(err.details).map(error => {
    const location = error[0];
    const locationErrors = error[1].details.map(message => message.message).join().replace(/[\\"]/g, '');

    return {
      location,
      error: locationErrors,
    };
  });

  return parsedError;
};

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  console.log('aaa');
  if (isCelebrateError(err)) {
    return res.status(400).json(parseCelebrateError(err));
  }
};

export default errorHandler;
