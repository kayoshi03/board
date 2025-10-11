import {z} from "zod";

export const DashboardSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  user_id: z.number().int().positive(),
  created_at: z.string().transform(val => new Date(val)),
  updated_at: z.string().transform(val => new Date(val)),
});

export const CreateDashboardSchema = DashboardSchema.omit({ id: true })

export const UpdateDashboardSchema = DashboardSchema.pick({ id: true, title: true })

export const DeleteDashboardSchema = DashboardSchema.pick({ id: true })

export type Dashboard = z.infer<typeof DashboardSchema>;
export type CreateDashboard = z.infer<typeof CreateDashboardSchema>;
export type UpdateDashboard = z.infer<typeof UpdateDashboardSchema>;
export type DeleteDashboard = z.infer<typeof DeleteDashboardSchema>;