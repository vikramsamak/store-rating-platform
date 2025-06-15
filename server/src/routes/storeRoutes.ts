import { Router } from "express";
import {
  createStore,
  deleteStore,
  getStoreById,
  getStores,
  updateStore,
} from "../controllers";

export const storeRouter = Router();

storeRouter.get("/", getStores);

storeRouter.get("/:id", getStoreById);

storeRouter.post("/", createStore);

storeRouter.patch("/:id", updateStore);

storeRouter.delete("/:id", deleteStore);
