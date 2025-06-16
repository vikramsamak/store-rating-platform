import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils";

export function accessMiddleware(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json(errorResponse({ message: "Access denied" }));
    }

    next();
  };
}
