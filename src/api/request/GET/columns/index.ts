import api from "@/api/interceptors"
import { getDashboard } from "../dashboards"
import z from "zod"
import { Columns, ColumnSchema } from "@/types/columns"


export const getColumns= async(title:string) => {
    const dash_id = await getDashboard(title)
    if(dash_id) {
        const res = await api.post<Columns[]>(`/api/column/get`, {
            dashboard_id: dash_id.id
        })
        const parsed = z.array(ColumnSchema).parse(res.data)
        return parsed
    }
    else {
        throw new Error("Дашборд не найден")
    }
}