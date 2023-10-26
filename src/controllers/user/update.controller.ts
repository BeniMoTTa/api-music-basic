import { Request, Response } from "express";

export const updateUserController = async (
  req: Request,
  req: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
};
