import { Router } from "express";
import {
  createRating,
  deleteRating,
  getRatingById,
  getRatings,
  updateRating,
} from "../controllers";

export const ratingRouter = Router();

ratingRouter.get("/", getRatings);

ratingRouter.get("/:id", getRatingById);

ratingRouter.post("/", createRating);

ratingRouter.patch("/:id", updateRating);

ratingRouter.delete("/:id", deleteRating);
