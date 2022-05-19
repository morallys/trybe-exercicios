import { NextFunction, Request, Response } from 'express';

const error = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.sendStatus(500);
};

export default error;