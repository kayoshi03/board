import { AddProject } from "./AddProject"

import { AsideList } from "./AsideList"
import "./index.scss"

export const Aside = () => {

    return (
        <aside className="aside">
            <AddProject/>
            <AsideList/>
        </aside>
    )
}