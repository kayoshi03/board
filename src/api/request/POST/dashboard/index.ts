import axios from "axios";
import { CreateDashboardSchema, UpdateDashboardSchema, DeleteDashboardSchema, CreateDashboard, UpdateDashboard, DeleteDashboard } from "@/types/dashboards";

export const createDashboard = async (data:CreateDashboard) => {
    const parsed = CreateDashboardSchema.parse(data);
    const res = await axios.post("dashboard/create", parsed);
    return res.data;
}
export const updateDashboard = async (data:UpdateDashboard) => {
    const parsed = UpdateDashboardSchema.parse(data);
    const res = await axios.post("dashboard/rename", parsed);
    return res.data;
}
export const deleteDashboard = async (data:DeleteDashboard) => {
    const parsed = DeleteDashboardSchema.parse(data);
    const res = await axios.post("dashboard/delete", parsed);
    return res.data;
}