import { Aside } from "@/components/features/project/project-aside/Aside"
import { Board } from "@/components/features/project/project-board/Board"
import "./index.scss"

export default function ProjectsPage() {
  return (
    <div className="dashboards">
      <div className="dashboards__inner">
        <Aside/>
        <Board/>
      </div>
    </div>
  )
}