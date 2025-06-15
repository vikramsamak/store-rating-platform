import { Router } from "express";
import {
  createRating,
  deleteRating,
  getRatingById,
  getRatings,
  updateRating,
} from "../controllers";
import {
  accessMiddelware,
  authMiddelware,
  validationMiddelware,
} from "../middelwares";
import {
  createRatingValidation,
  deleteRatingValidation,
  getRatingValidation,
  updateRatingValidation,
} from "../validations";
import { getRatingByIdValidation } from "../validations/ratingValidations";

export const ratingRouter = Router();

ratingRouter.use(authMiddelware);

ratingRouter.use(accessMiddelware);

ratingRouter.get("/", validationMiddelware(getRatingValidation), getRatings);

ratingRouter.get(
  "/:id",
  validationMiddelware(getRatingByIdValidation),
  getRatingById
);

ratingRouter.post(
  "/",
  validationMiddelware(createRatingValidation),
  createRating
);

ratingRouter.patch(
  "/:id",
  validationMiddelware(updateRatingValidation),
  updateRating
);

ratingRouter.delete(
  "/:id",
  validationMiddelware(deleteRatingValidation),
  deleteRating
);
