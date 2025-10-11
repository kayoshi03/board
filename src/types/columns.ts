import {z} from "zod";


export const ColumnSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  order: z.number().int().positive(),
  dashboard_id: z.number().int().positive(),
    created_at: z.string().transform(val => new Date(val)),
    updated_at: z.string().transform(val => new Date(val)),
});

export type Columns = z.infer<typeof ColumnSchema>;