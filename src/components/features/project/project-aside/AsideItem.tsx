import { Globe } from "lucide-react"

interface Item {
    title: string,
    icon?: React.ReactNode
}

const MAX_LENGTH = 12

export const AsideItem = ({title, icon}:Item) => {
    const parse = title.length > MAX_LENGTH ? title.slice(0, MAX_LENGTH) + "..." : title

    return (
        <li>
            {
                icon ? icon : <Globe size={12}/>
            }
            <span>{parse}</span>
        </li>
    )
}