import { Request, Response } from "express";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
  const updatedValues: TUserUpdateRequest = req.body;
  const updatedUser: TUserResponse = await updateUserService(
    updatedValues,
    userId
  );

  return res.json(updatedUser);
};
