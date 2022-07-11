import { Request, Response, NextFunction } from "express";

interface IError extends Error {
  code?: number;
}

const errorMiddleware = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const { code, message } = err;

  if (code) return res.status(code).json({ message: err.message });

  return res.status(500).json({ message });
}

export default errorMiddleware;