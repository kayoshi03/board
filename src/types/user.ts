import {check, z} from "zod";

export const UserSchema = z.object({
  id: z.number().int().positive(),
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  checked: z.boolean().optional(),
});

export const UserLoginSchema = UserSchema.pick({ email: true, password: true, checked: true });
export const UserRegisterSchema = UserSchema.omit({ id: true, checked: true }).extend({
  password_confirmation: z.string().min(6).max(100),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Password and confirmation do not match",
});

export const UserLogoutSchema = UserSchema.pick({ id: true });

export type User = z.infer<typeof UserSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
export type UserRegister = z.infer<typeof UserRegisterSchema>;
export type UserLogout = z.infer<typeof UserLogoutSchema>;