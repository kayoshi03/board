import { PAGES } from "@/config/routes"
import { Globe } from "lucide-react"
import Link from "next/link"

interface Item {
    title: string,
    icon?: React.ReactNode
}

const MAX_LENGTH = 12

export const AsideItem = ({title, icon}:Item) => {
    const parse = title.length > MAX_LENGTH ? title.slice(0, MAX_LENGTH) + "..." : title

    return (
        <Link href={PAGES.PROJECT.DASHBOARD.url(title)}>
            {
                icon ? icon : <Globe size={12}/>
            }
            <span>{parse}</span>
        </Link>
    )
}