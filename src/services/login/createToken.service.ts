import { Users } from "@prisma/client";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";
import jwt from "jsonwebtoken";

export const createTokenService = async ({
  email,
  password,
}: TLoginRequest): Promise<{}> => {
  const user: Users | null = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const token: string = jwt.sign(
    { isSeller: user.name },
    process.env.SECRET_KEY!,
    { expiresIn: process.env.EXPIRES_IN, subject: user.id.toString() }
  );
  return { token: token, user_id: user.id, message: `Bem vindo, ${user.name}` };
};
