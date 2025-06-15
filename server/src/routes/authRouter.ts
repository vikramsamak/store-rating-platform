import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers";

export const authRouter = Router();

authRouter.post("/signup", signUp);

authRouter.post("/signin", signIn);

authRouter.post("/signout", signOut);
