import { Router } from "express";
import { createUserController } from "../controllers/user/create.controller";
import { retrieveUserController } from "../controllers/user/listen.controller";

export const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("/:id", retrieveUserController);
