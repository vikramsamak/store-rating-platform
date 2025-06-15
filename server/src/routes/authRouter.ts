import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers";
import { validationMiddelware } from "../middelwares";
import { signInValidation, signUpValidation } from "../validations";

export const authRouter = Router();

authRouter.post("/signup", validationMiddelware(signUpValidation), signUp);

authRouter.post("/signin", validationMiddelware(signInValidation), signIn);

authRouter.post("/signout", signOut);
