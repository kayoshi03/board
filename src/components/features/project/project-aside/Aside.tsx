import { Provider } from "@/utils/Providers"
import { AddProject } from "./AddProject"
import { AsideList } from "./AsideList"
import "./index.scss"

export const Aside = () => {

    return (
        <Provider>
            <aside className="aside">
                <AddProject/>
                <AsideList/>
            </aside>
        </Provider>
    )
}