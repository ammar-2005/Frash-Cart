import * as zod from "zod"

export const Schema = zod
  .object({
    name: zod
      .string()
      .nonempty("Enter Your Name")
      .min(3, "Min Enter 3 Letters")
      .max(20, "Max Enter 20 Letters"),
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
    rePassword: zod.string().nonempty("Confirm Password Required"),
    phone: zod
      .string()
      .nonempty("Phone Required")
      .regex(/^(?:\+20|20)?0?1[0125]\d{8}$/, "Invalid Phone Number"),
    terms: zod.boolean().refine((val) => val === true, {
      message: "You must accept the Terms of Service and Privacy Policy",
    }),
  })
  .refine((obj) => obj.password === obj.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  })

export type RegisterFormValues = zod.infer<typeof Schema>