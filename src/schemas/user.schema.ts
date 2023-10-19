import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(127),
  email: z.string().email().max(127),
  password: z
    .string()
    .max(60)
    .transform((password) => hashSync(password, 10)),
  reset_password: z.string().max(127).nullable(),
  cpf: z.string().max(11),
  phone: z.string().max(11),
  birthdate: z.string().max(8),
  cep: z.string().max(8),
  state: z.string().max(127),
  city: z.string().max(127),
  number: z.string().max(127),
  complement: z.string().nullable(),
  user_color: z.string(),
  profileImage: z.string().nullable(),
});

export const resetEmailSchema = z.object({
  to: z.string().max(127),
  subject: z.string().max(127),
  text: z.string().max(127),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  user_color: true,
  reset_password: true,
});

export const userSchemaColorRequest = userSchema.omit({
  id: true,
});

export const userSchemaResponse = userSchema.omit({
  password: true,
});

export const userSchemaResetPasswordResponse = userSchema.omit({
  reset_password: true,
});

export const userSchemaUpdate = userSchema
  .omit({
    id: true,
    user_color: true,
    reset_password: true,
  })
  .partial();
