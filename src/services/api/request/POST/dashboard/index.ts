import { Project } from "@/shared/dashboard.type";
import axios from "axios";

export const createDashboard = async (data:Project) => {
    const res = await axios.post("/api/dashboard/create", {
        user_id: data.user_id,
        title: data.title
    });
    return res.data;
}
export const updateDashboard = async (data) => {

    const res = await axios.post("dashboard/rename", data);
    return res.data;
}
export const deleteDashboard = async (data) => {
    const res = await axios.post("dashboard/delete", data);
    return res.data;
}