"use client"
import { getDesks } from "@/api/request/GET/tasks"
import { Draggable } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"

export const Columns = ({id, title}:{id: number, title: string}) => {
    const [desk, setData] = useState([] as any)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDesks(id)
            setData(data)
        }
        fetchData()
    }, [])
    return (


            <div>
                {title}
                
                {
                    desk?.data?.map((item: any) => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>


    )
}