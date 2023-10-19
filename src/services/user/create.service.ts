import { Users } from "@prisma/client";
import {
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schema";
import { prisma } from "../../server";

export const createUserService = async (
  data: TUserRequestWithColor
): Promise<TUserResponse> => {
  const colors = [
    "#FF5733",
    "#2E86AB",
    "#FFC300",
    "#3CB371",
    "#8B008B",
    "#FF7F50",
    "#9932CC",
    "#00BFFF",
    "#FFD700",
    "#008000",
    "#800080",
    "#FF4500",
    "#40E0D0",
    "#DC143C",
    "#4B0082",
    "#FF1493",
    "#00FFFF",
    "#FF6347",
    "#9370DB",
    "#32CD32",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  data.user_color = colors[randomIndex];
  data.reset_password = "";
  const user: Users = await prisma.users.create({ data });

  return userSchemaResponse.parse(user);
};
