import api from "@/services/api/interceptors"



export const getDasboards = async()=> {
    const res = await api.get(`/api/getDashboards`)
    if(res.status === 200) {
        return res.data
    }
    throw new Error(`Ошибка при получении Dashboard: статус ${res.status}`);
}

export const getDashboard= async(title:string) => {
    const res = await getDasboards()
    return res.find((item: any) => item.title === title)
}