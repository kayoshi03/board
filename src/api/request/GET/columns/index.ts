import api from "@/api/interceptors"
import { getDashboard } from "../dashboards"


export const getColumns= async(title:string) => {
    const dash_id = await getDashboard(title)
    if(dash_id) {
        const res = await api.post(`/api/column/get`, {
            dashboard_id: dash_id.id
        })
        return res.data
    }
    else {
        throw new Error("Дашборд не найден")
    }
}