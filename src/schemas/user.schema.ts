import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
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
