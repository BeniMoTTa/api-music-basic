import { Router } from "express";
import { createUserController } from "../controllers/user/create.controller";
import { retrieveUserController } from "../controllers/user/listen.controller";
import { deleteUserController } from "../controllers/user/delete.controller";

export const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("/:id", retrieveUserController);
userRouter.delete("/:id", deleteUserController);
