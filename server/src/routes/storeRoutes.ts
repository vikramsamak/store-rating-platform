import { Router } from "express";
import {
  createStore,
  deleteStore,
  getStoreById,
  getStores,
  updateStore,
} from "../controllers";
import {
  accessMiddleware,
  authMiddleware,
  validationMiddleware,
} from "../middelwares";
import {
  createStoreValidation,
  deleteStoreValidation,
  getStoreValidation,
  updateStoreValidation,
} from "../validations";
import { getStoreByIdValidation } from "../validations/storeValidation";

export const storeRouter = Router();

storeRouter.use(authMiddleware);

storeRouter.use(accessMiddleware);

storeRouter.get("/", validationMiddleware(getStoreValidation), getStores);

storeRouter.get(
  "/by-id/:id",
  validationMiddleware(getStoreByIdValidation),
  getStoreById
);

storeRouter.post("/", validationMiddleware(createStoreValidation), createStore);

storeRouter.patch(
  "/:id",
  validationMiddleware(updateStoreValidation),
  updateStore
);

storeRouter.delete(
  "/:id",
  validationMiddleware(deleteStoreValidation),
  deleteStore
);
