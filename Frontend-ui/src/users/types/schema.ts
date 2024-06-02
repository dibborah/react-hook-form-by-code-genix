import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters are required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((value) => patterns.email.test(value), {
      message: "Email is not Valid",
    }),
  states: z.array(z.string()).min(1).max(2),
  languagesSpoken: z.array(z.string()),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  email: "",
  name: "",
  states: [],
  languagesSpoken: [],
};
