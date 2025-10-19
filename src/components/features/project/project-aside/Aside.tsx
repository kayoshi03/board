import { Button } from "@/components"
import { AsideList } from "./AsideList"
import "./index.scss"

export const Aside = () => {
    return (
        <aside className="aside">
            <Button>+ Создать проект</Button>
            <AsideList/>
        </aside>
    )
}