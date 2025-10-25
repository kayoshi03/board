"use client"
import { TimeAgo } from "@/components/ui/TimeAgo/TimeAgo"
import { PAGES } from "@/config/routes"
import { deleteDashboard } from "@/services/api/request/POST/dashboard"
import { Project } from "@/shared/dashboard.type"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const ProjectItem = ({item}:{item: Project}) => {
    const router = useRouter()
    const res = async () => {
        const res = await deleteDashboard(item.id)
        if (res) {
            router.refresh()
        }
    }
    return (
        <div className="board__item">
            <div className="close" onClick={() => res()}>
                X
            </div>
            <Link className="inner" href={PAGES.PROJECT.DASHBOARD.url(item.title)} >
                
                <p>{item.title}</p>
                <TimeAgo date={item.updated_at}/>
            </Link>
        </div>
        
    )
}