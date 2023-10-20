import { Users } from "@prisma/client";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { prisma } from "../../server";
import { AppError } from "../../errors/errors";

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
    { isSeller: user.is_seller },
    process.env.SECRET_KEY!,
    { expiresIn: process.env.EXPIRES_IN, subject: user.id.toString() }
  );
};
