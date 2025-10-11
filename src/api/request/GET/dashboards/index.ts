import api from "@/api/interceptors"
import { Dashboard, DashboardSchema, } from "@/types/dashboards"
import z from "zod"


export const getDasboards = async():Promise<Dashboard[]> => {
    const res = await api.get<Dashboard[]>(`/api/getDashboards`)
    const parsed = z.array(DashboardSchema).parse(res.data)
    return parsed
}

export const getDashboard= async(title:string) => {
    const res = await getDasboards()
    return res.find((item: any) => item.title === title)
}