import { Request, Response } from "express";
import { TUserUpdateRequest } from "../../interfaces/user.interfaces";

export const updateUserController = async (
  req: Request,
  req: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
  const updatedValues: TUserUpdateRequest = req.body;
};
