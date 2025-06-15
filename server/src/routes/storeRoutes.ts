import { Router } from "express";
import {
  createStore,
  deleteStore,
  getStoreById,
  getStores,
  updateStore,
} from "../controllers";
import {
  accessMiddelware,
  authMiddelware,
  validationMiddelware,
} from "../middelwares";
import {
  createStoreValidation,
  deleteStoreValidation,
  getStoreValidation,
  updateStoreValidation,
} from "../validations";
import { getStoreByIdValidation } from "../validations/storeValidation";

export const storeRouter = Router();

storeRouter.use(authMiddelware);

storeRouter.use(accessMiddelware);

storeRouter.get("/", validationMiddelware(getStoreValidation), getStores);

storeRouter.get(
  "/:id",
  validationMiddelware(getStoreByIdValidation),
  getStoreById
);

storeRouter.post("/", validationMiddelware(createStoreValidation), createStore);

storeRouter.patch(
  "/:id",
  validationMiddelware(updateStoreValidation),
  updateStore
);

storeRouter.delete(
  "/:id",
  validationMiddelware(deleteStoreValidation),
  deleteStore
);
