import { Router } from "express";
import { accessMiddleware, authMiddleware } from "../middelwares";
import { getSystemAdminOverview } from "../controllers/systemAdminControllers";

export const systemAdminRouter = Router();

systemAdminRouter.use(authMiddleware);

systemAdminRouter.use(accessMiddleware);

systemAdminRouter.get("/overview", getSystemAdminOverview);
