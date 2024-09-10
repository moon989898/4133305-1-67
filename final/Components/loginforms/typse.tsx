import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type ValidationFields = 
| "email"
| "githubUrl"
| "yearsOfExperience"
| "password"
| "confirmPassword";

export type FormData = {
    email: string;
    githubUrl: string;
    yearsOfExperience: number;
    password: string;
    confirmPassword: string;
};

export type FormFieldProps = {
    register: UseFormRegister<FormData>;
    name: ValidationFields;
    error: FieldError | undefined;
    type: string;
    placeholder: string;
    valueAsNumber?: boolean;
    required?: boolean;
};

export const LoginSchema: ZodType<FormData> = z
  .object({
    email: z.string().email(),
    githubUrl: z
      .string()
      .url()
      .includes("github.com", { message: "Invalid GitHub URL" }),
    yearsOfExperience: z
      .number({
        required_error: "required field",
        invalid_type_error: "Years of Experience is required",
      })
      .min(1)
      .max(10),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], 
  });
