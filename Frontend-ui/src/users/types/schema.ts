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
  gender: z.string().min(1),
  skills: z.array(z.string()).max(2),
  registrationDataAndTime: z.date(),
  formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
  salaryRange: z.array(z.number()).min(2).max(2),
  isTeacher: z.boolean(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  email: "",
  name: "",
  states: [],
  languagesSpoken: [],
  gender: '',
  skills: [],
  registrationDataAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 2000],
  isTeacher: true,
};
