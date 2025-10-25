import { Project } from "@/shared/dashboard.type"
import { ProjectItem } from "./ProjectItem"

export const ProjectList = ({list}:{list: Project[]}) => {
    const sort = list.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    return (
        <div className="board__list">
            {
                sort.map((item:Project) => (
                    <ProjectItem key={item.id} item={item}/>
                ))
            }
        </div>
    )
}