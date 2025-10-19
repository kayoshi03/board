import { FolderKanban, Globe, Rocket, Users, CalendarDays, Bug, FileText } from "lucide-react"
import { AsideItem } from "./AsideItem"
import "./index.scss"

export const projects = [
  {
    title: "Capiboard",
    icon: FolderKanban,
  },
  {
    title: "Международный портал",
    icon: Globe,
  },
  {
    title: "Стартап трекер",
    icon: Rocket,
  },
  {
    title: "Командный CRM",
    icon: Users,
  },
  {
    title: "Планировщик задач",
    icon: CalendarDays,
  },
  {
    title: "Баг-трекер",
    icon: Bug,
  },
  {
    title: "Документооборот",
    icon: FileText,
  },
]

export const AsideList = () => {
    return (
        <div className="aside__list">
            <p>Ваши проекты</p>
            <ul>
                {
                    projects.map((item) => (
                        <AsideItem key={item.title} title={item.title}/>
                    ))
                }
            </ul>
        </div>
    )
}