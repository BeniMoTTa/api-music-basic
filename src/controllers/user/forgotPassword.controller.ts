import { Request, Response } from "express";
import { forgotPasswordService } from "../../services/user/forgotPassword.service";

export const forgotPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;
  await forgotPasswordService(email);
};
