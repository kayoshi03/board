import { getDasboards } from "@/services/api/request/GET/dashboards"
import { ProjectList } from "./ProjectList"
import "./index.scss"

export const Board = async() => {
    const res = await getDasboards()
    return (
        <div className="board">
           <ProjectList list={res}/>
        </div>
    )
}