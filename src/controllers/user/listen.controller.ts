import { Request, Response } from "express";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = +req.params.id;
};
