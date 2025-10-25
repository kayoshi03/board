import { TimeAgo } from "@/components/ui/TimeAgo/TimeAgo"
import { PAGES } from "@/config/routes"
import { Project } from "@/shared/dashboard.type"
import Link from "next/link"

export const ProjectItem = ({item}:{item: Project}) => {
    return (
        <Link href={PAGES.PROJECT.DASHBOARD.url(item.title)} className="board__item">
            <p>{item.title}</p>
            <TimeAgo date={item.updated_at}/>
        </Link>
    )
}