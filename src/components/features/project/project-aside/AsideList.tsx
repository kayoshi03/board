"use client"
import { AsideItem } from "./AsideItem"
import { Project } from "@/shared/dashboard.type"
import "./index.scss"
import { useQuery } from "react-query"
import { getDasboards } from "@/services/api/request/GET/dashboards"



export const AsideList = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["projects"],
        queryFn: async () => await getDasboards()
    })

    return (
            <div className="aside__list">
                <p>Ваши проекты</p>
                {
                    isLoading ? <h2>Загрузка</h2> :  
                    <ul>
                        {
                            data?.map((item:Project) => (
                                <AsideItem key={item.title} title={item.title}/>
                            ))
                        }
                    </ul>
                }
            </div>
    )
}