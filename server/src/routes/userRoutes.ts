import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers";
import {
  accessMiddleware,
  authMiddleware,
  validationMiddleware,
} from "../middelwares";
import { getUserValidation } from "../validations";
import {
  createUserValidation,
  deleteUserValidation,
  getUserByIdValidation,
  updateUserValidation,
} from "../validations/userValidations";

export const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.use(accessMiddleware);

userRouter.get("/", validationMiddleware(getUserValidation), getUsers);

userRouter.get(
  "/by-id/:id",
  validationMiddleware(getUserByIdValidation),
  getUserById
);

userRouter.post("/", validationMiddleware(createUserValidation), createUser);

userRouter.patch(
  "/:id",
  validationMiddleware(updateUserValidation),
  updateUser
);

userRouter.delete(
  "/:id",
  validationMiddleware(deleteUserValidation),
  deleteUser
);
