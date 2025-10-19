import axios from "axios";

export const createDashboard = async (data) => {
    const res = await axios.post("dashboard/create", data);
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