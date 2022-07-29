import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

interface IError extends Error {
  code?: number;
  issues?: [];
}

const errorMiddleware = async (
  err: IError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code, message } = err;

  if (err instanceof ZodError) {
    const errorsMessages = err.issues
      .map((e: IError | never) => e.message);

    return res.status(400).json({ errorsMessages });
  }

  if (code) return res.status(code).json({ error: err.message });
  console.log(err);

  return res.status(500).json({ message });
};

export default errorMiddleware;