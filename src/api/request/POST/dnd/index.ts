import api from "@/api/interceptors"

export const dnd = async(columns) => {
    console.log(columns)
    const res = await api.post(`api/column/dragDrop`, {
        columns,
        user_id: 1
    })

    console.log(res)
}