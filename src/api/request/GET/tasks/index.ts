import api from "@/api/interceptors"

export const getDesks = async (id: number) => {
    const res = await api.post(`api/column/getDesks`, {
        col_id: id
    })
    return res.data
}