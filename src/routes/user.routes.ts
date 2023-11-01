import { Router } from "express";
import { createUserController } from "../controllers/user/create.controller";

export const userRouter: Router = Router();

userRouter.post("", createUserController);
