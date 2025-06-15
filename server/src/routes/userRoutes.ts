import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers";
import {
  accessMiddelware,
  authMiddelware,
  validationMiddelware,
} from "../middelwares";
import { getUserValidation } from "../validations";
import {
  createUserValidation,
  deleteUserValidation,
  getUserByIdValidation,
  updateUserValidation,
} from "../validations/userValidations";

export const userRouter = Router();

userRouter.use(authMiddelware);

userRouter.use(accessMiddelware);

userRouter.get("/", validationMiddelware(getUserValidation), getUsers);

userRouter.get(
  "/:id",
  validationMiddelware(getUserByIdValidation),
  getUserById
);

userRouter.post("/", validationMiddelware(createUserValidation), createUser);

userRouter.patch(
  "/:id",
  validationMiddelware(updateUserValidation),
  updateUser
);

userRouter.delete(
  "/:id",
  validationMiddelware(deleteUserValidation),
  deleteUser
);
