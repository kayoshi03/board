"use client"
import { Project } from "@/shared/dashboard.type"
import { ProjectItem } from "./ProjectItem"
import { useQuery } from "react-query"
import { getDasboards } from "@/services/api/request/GET/dashboards"

export const ProjectList = () => {
    
    const {data, isLoading} = useQuery({
        queryKey: ["projects"],
        queryFn: async () => await getDasboards()
    })
    const sort = data?.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    return (
        <div className="board__list">
            {
                sort?.map((item:Project) => (
                    <ProjectItem key={item.id} item={item}/>
                ))
            }
        </div>
    )
}