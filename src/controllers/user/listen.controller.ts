import { Request, Response } from "express";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { retrieveUserService } from "../../services/user/retrieveUsers.service";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = +req.params.id;

  const user: TUserResponse = await retrieveUserService(userId);

  return res.json(user);
};
