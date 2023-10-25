import { Request, Response } from "express";
import { deleteUserService } from "../services/user/delete.service";

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
  await deleteUserService(userId);
  return res.status(204).json(`The user is deleted from our Database`);
};
