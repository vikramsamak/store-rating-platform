import { NextFunction, Request, Response } from "express";

export async function accessMiddelware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {}
