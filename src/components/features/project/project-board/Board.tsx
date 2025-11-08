import { getDasboards } from "@/services/api/request/GET/dashboards"
import { ProjectList } from "./ProjectList"
import "./index.scss"
import { Provider } from "@/utils/Providers"

export const Board = async() => {
    const res = await getDasboards()
    return (
        <div className="board">
            <Provider>
                <ProjectList list={res}/>
            </Provider>
        </div>
    )
}