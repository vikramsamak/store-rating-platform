import { NextFunction, Request, Response } from "express";

export async function authMiddelware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {}
