import * as zod from "zod"

export const Schema = zod
  .object({
    email: zod
      .string()
      .nonempty("Enter Your Email Address")
      .email("Invalid Email Address"),
    password: zod
      .string()
      .nonempty("Password Required")
      .regex(
        /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}/,
        "Must be at least 8 characters with uppercase, lowercase, number and symbol"
      ),
    terms: zod.boolean().optional(),
  })

export type LoginFormValues = zod.infer<typeof Schema>