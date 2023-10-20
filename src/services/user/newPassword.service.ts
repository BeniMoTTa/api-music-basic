import { hashSync } from "bcryptjs";
import { AppError } from "../../errors/errors";
import { prisma } from "../../server";

export const newPasswordService = async (
  password: string,
  resetToken: string
): Promise<void> => {
  const user = await prisma.users.findFirst({
    where: {
      reset_password: resetToken,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }
  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashSync(password, 10),
      reset_password: "",
    },
  });
};
