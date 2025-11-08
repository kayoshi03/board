import api from "@/services/api/interceptors";
import axios from "axios";

interface CreateProject {
    title: string,
    user_id: number
}

export const createDashboard = async (data:CreateProject) => {
    const res = await api.post("/api/dashboard/create", {
        user_id: data.user_id,
        title: data.title
    });
    return res.data;
}
export const updateDashboard = async (data) => {

    const res = await axios.post("dashboard/rename", data);
    return res.data;
}
export const deleteDashboard = async (id:number) => {
    const res = await axios.post("/api/dashboard/delete", {
        id: id
    });
    return res.data;
}