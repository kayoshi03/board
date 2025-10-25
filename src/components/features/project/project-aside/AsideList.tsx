import { FolderKanban, Globe, Rocket, Users, CalendarDays, Bug, FileText } from "lucide-react"
import { AsideItem } from "./AsideItem"
import "./index.scss"
import { getDasboards } from "@/services/api/request/GET/dashboards"
import { Project } from "@/shared/dashboard.type"



export const AsideList = async() => {
    const projects = await getDasboards()
    return (
        <div className="aside__list">
            <p>Ваши проекты</p>
            <ul>
                {
                    projects.map((item:Project) => (
                        <AsideItem key={item.title} title={item.title}/>
                    ))
                }
            </ul>
        </div>
    )
}