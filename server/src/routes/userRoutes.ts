import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers";

export const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);
