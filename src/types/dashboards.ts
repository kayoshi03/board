import {z} from "zod";

const DashboardSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1).max(100),
  user_id: z.number().int().positive(),
});

export const CreateDashboardSchema = DashboardSchema.omit({ id: true })

export const UpdateDashboardSchema = DashboardSchema.pick({ id: true, name: true })

export const DeleteDashboardSchema = DashboardSchema.pick({ id: true })

export type Dashboard = z.infer<typeof DashboardSchema>;
export type CreateDashboard = z.infer<typeof CreateDashboardSchema>;
export type UpdateDashboard = z.infer<typeof UpdateDashboardSchema>;
export type DeleteDashboard = z.infer<typeof DeleteDashboardSchema>;