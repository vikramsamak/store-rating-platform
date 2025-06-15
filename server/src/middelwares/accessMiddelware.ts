import { NextFunction, Request, Response } from "express";

export async function accessMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {}
