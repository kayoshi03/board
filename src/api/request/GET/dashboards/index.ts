import api from "@/api/interceptors"


export const getDasboards = async() => {
    const res = await api.get(`/api/getDashboards`)
    return res.data
}

export const getDashboard= async(title:string) => {
    const res = await getDasboards()
    return res.find((item: any) => item.title === title)
}