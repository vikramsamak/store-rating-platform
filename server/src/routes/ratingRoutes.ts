import { Router } from "express";
import {
  createRating,
  deleteRating,
  getRatingById,
  getRatings,
  updateRating,
} from "../controllers";
import {
  accessMiddleware,
  authMiddleware,
  validationMiddleware,
} from "../middelwares";
import {
  createRatingValidation,
  deleteRatingValidation,
  getRatingValidation,
  updateRatingValidation,
} from "../validations";
import { getRatingByIdValidation } from "../validations/ratingValidations";

export const ratingRouter = Router();

ratingRouter.use(authMiddleware);

ratingRouter.use(accessMiddleware);

ratingRouter.get("/", validationMiddleware(getRatingValidation), getRatings);

ratingRouter.get(
  "/:id",
  validationMiddleware(getRatingByIdValidation),
  getRatingById
);

ratingRouter.post(
  "/",
  validationMiddleware(createRatingValidation),
  createRating
);

ratingRouter.patch(
  "/:id",
  validationMiddleware(updateRatingValidation),
  updateRating
);

ratingRouter.delete(
  "/:id",
  validationMiddleware(deleteRatingValidation),
  deleteRating
);
